function configuredSupply(entries){const supply={};for(const b of entries){if(b.kind==='pipe'){if(!b.item||!Number.isFinite(b.rate)||b.rate<=0||b.rate>100000)throw Error('Choose a fluid flow above zero, up to 100,000 units/min per supply.');supply[b.item]=(supply[b.item]||0)+b.rate;}else for(const item of b.lanes||[])if(item)supply[item]=(supply[item]||0)+({yellow:450,red:900,blue:1350}[b.tier]||450);}return supply;}
/* Pure backward recipe planner. All rates are items or fluid units per minute. */
function planProduction(recipes,engine,{recipe,rate,tier='a1',boundary='raw',suppliedItems=[],goals=null}){
 if(!recipes[recipe]||!Number.isFinite(rate)||rate<=0||rate>100000)throw Error('Choose a product and an output greater than zero and up to 100,000 per minute.');
 const targets=goals||[{recipe,rate,tier}],outputDemand={};for(const g of targets){if(!recipes[g.recipe]||!(g.rate>0)||g.rate>100000)throw Error('Each output needs a valid product and rate.');outputDemand[recipes[g.recipe].product]=(outputDemand[recipes[g.recipe].product]||0)+g.rate;}
 const demand={},depth={},chosen={},raw={},research=new Set(),plates=new Set(['iron-plate','copper-plate','steel-plate','stone-brick']);
 function expand(item,amount,level,trail=[],rootRecipe=recipe){
  if(trail.includes(item))throw Error('This recipe chain contains a loop.');
  depth[item]=Math.max(depth[item]||0,level);demand[item]=(demand[item]||0)+amount;
  const key=level===0?rootRecipe:engine.byProduct[item];
  if(!key||(level>0&&suppliedItems.includes(item))||(boundary==='plates'&&plates.has(item)&&level>0)){raw[item]=(raw[item]||0)+amount;return}
  if(recipes[key].manualOnly)throw Error('Advanced oil processing has three outputs. Add it manually on the canvas; automatic goal expansion is not yet supported for this process.');
  const r=recipes[key],options=engine.options(key),machine=options.includes(tier)?tier:options[0];chosen[item]={recipe:key,machine};if(r.tech)research.add(r.tech);
  for(const [input,q]of Object.entries(engine.inputs({recipe:key,machine})))expand(input,amount*q/r.out,level+1,[...trail,item]);
 }
 for(const g of targets)expand(recipes[g.recipe].product,g.rate,0,[],g.recipe);
 for(const g of targets)if(chosen[recipes[g.recipe].product])chosen[recipes[g.recipe].product].machine=engine.options(g.recipe).includes(g.tier||tier)?(g.tier||tier):engine.options(g.recipe)[0];
 if(Object.values(demand).some(n=>n>100000))throw Error('This target requires more than 100,000 units/min of an intermediate. Lower the output rate.');
 const max=Math.max(...Object.values(depth)),rows={},nodes=[],byItem={},edges=[],used={};let serial=1;
 for(const item of Object.keys(demand).sort((a,b)=>depth[b]-depth[a]||a.localeCompare(b))){const col=max-depth[item],row=rows[col]||0;rows[col]=row+1;const n={id:'n'+serial++,x:100+col*390,y:170+row*340};if(chosen[item]){Object.assign(n,{kind:'machine',...chosen[item],terminal:!!outputDemand[item]});n.count=Math.ceil(demand[item]/engine.per(n)-1e-9);if(n.count>10000)throw Error('This rate needs more than 10,000 machines in one group. Lower the target rate.')}else Object.assign(n,{kind:'source',item,supply:demand[item]});if(n.x>6000||n.y>6000)throw Error('This chain is too large for the canvas. Try starting from supplied plates.');nodes.push(n);byItem[item]=n;used[n.id]=0}
 for(const n of nodes.filter(n=>n.kind==='machine')){const r=recipes[n.recipe];for(const [item,q]of Object.entries(engine.inputs(n))){const from=byItem[item],e={from:from.id,to:n.id,item,kind:'transfer',limit:demand[r.product]*q/r.out,toSlot:used[n.id]++};if(from.kind==='machine')e.fromSlot=used[from.id]++;if(e.toSlot>11||e.fromSlot>11)throw Error('A shared group needs more than 12 connections. Try a smaller chain.');edges.push(e)}}
 if(nodes.length>40||edges.length>100)throw Error('This chain exceeds the planner’s 40-node limit. Try starting from supplied plates.');
 return {state:{version:4,nodes,edges,product:recipe,rate,mode:'target',outputs:targets.map(g=>({...g,item:recipes[g.recipe].product}))},demand,raw,research:[...research],machines:nodes.filter(n=>n.kind==='machine').reduce((s,n)=>s+n.count,0),goal:byItem[recipes[recipe].product].id,outputDemand};
}
// Capacity budget for dedicated two-lane belts, not a routing optimizer.
function planBelts(demand,fluidItems,tier='yellow',transportMode='belts'){
 const capacity={yellow:900,red:1800,blue:2700}[tier];
 if(!capacity)throw Error('Choose a valid belt tier.');
 return Object.entries(demand).filter(([item,rate])=>!fluidItems.has(item)&&rate>0).map(([item,rate])=>{
  const lanes=Math.ceil(rate/(capacity/2)-1e-10),belts=Math.ceil(rate/capacity-1e-10),available=belts*capacity;
  return {item,rate,tier,capacity,lanes,belts,available,load:rate/available,spare:available-rate,oneLane:rate<=capacity/2+1e-9,tiers:Object.fromEntries(Object.entries({yellow:900,red:1800,blue:2700}).map(([k,c])=>[k,Math.ceil(rate/c-1e-10)]))};
 });
}
// Replace solid transfers with shared, capacity-sized two-lane supply routes.
function routeFactory(plan,recipes,engine,fluidItems,tier='yellow',transportMode='belts'){
 const s=JSON.parse(JSON.stringify(plan.state)),original=s.edges;s.edges=[];
 let next=Math.max(...s.nodes.map(n=>+n.id.slice(1)))+1;
 const used={},slot=n=>{const v=used[n.id]||0;used[n.id]=v+1;if(v>11)throw Error('This factory needs more attachment positions per group. Choose a faster belt tier or a lower target.');return v};
 function link(a,b,item,rate,extra={}){s.edges.push({from:a.id,to:b.id,item,kind:'transfer',limit:rate,...extra,...(a.kind==='machine'?{fromSlot:slot(a)}:{}),...(b.kind==='machine'?{toSlot:slot(b)}:{})})}
 const sources=[...s.nodes],capacity={yellow:900,red:1800,blue:2700}[tier],routes=[];
 // Keep process cards in dependency columns; reserve space underneath each for its belts.
 const cols={};sources.forEach(n=>{const x=n.x;(cols[x]??=[]).push(n)});
 for(const [x,list]of Object.entries(cols))list.forEach((n,i)=>{n.x=100+(+x-100)/390*650;n.y=180+i*650});
 for(const a of sources){const item=a.kind==='source'?a.item:recipes[a.recipe].product,requests=original.filter(e=>e.from===a.id).map(e=>({...e,left:e.limit})),isGoal=plan.outputDemand?!!plan.outputDemand[item]:a.id===plan.goal;
  if(fluidItems.has(item)||(plan.configuredBelts&&a.kind==='source')||(a.kind==='machine'&&!isGoal&&(transportMode==='direct'||transportMode==='mixed'&&requests.length===1))){for(const e of requests)link(a,s.nodes.find(n=>n.id===e.to),item,e.limit);continue}
  const total=requests.reduce((n,e)=>n+e.limit,0)+(isGoal?(plan.outputDemand?.[item]??s.rate):0);if(!total)continue;
  const count=Math.ceil(total/capacity-1e-10);if(count>6)throw Error('This material needs more than six parallel belts. Use a faster tier or a lower target rate.');
  for(let i=0;i<count;i++){
   const amount=Math.min(capacity,total-i*capacity),b={id:'n'+next++,kind:'belt',name:(a.kind==='source'?'SUPPLY BUS · ':isGoal?'FINISHED · ':'INTERNAL · ')+item.replaceAll('-',' ')+(count>1?' '+(i+1)+'/'+count:''),tier,full:a.kind==='source',lanes:[item,item],points:[{x:a.x+300,y:a.y+350+i*85},{x:a.x+460,y:a.y+350+i*85},{x:a.x+580,y:a.y+350+i*85}]};
   s.nodes.push(b);routes.push({id:b.id,item,rate:amount,capacity,role:a.kind==='source'?'input':isGoal?'output':'intermediate'});
   for(let lane=0;lane<2;lane++){let available=amount/2;if(a.kind!=='source')link(a,b,item,available,{toLane:lane,toAt:0});
    for(const e of requests){if(available<1e-8)break;if(e.left<1e-8)continue;const take=Math.min(available,e.left),to=s.nodes.find(n=>n.id===e.to);link(b,to,item,take,{fromLane:lane,fromAt:1});available-=take;e.left-=take}
   }
  }
  if(a.kind==='machine')a.terminal=false;else s.nodes=s.nodes.filter(n=>n!==a);
 }
 if(s.nodes.length>40||s.edges.length>100||s.nodes.some(n=>n.x>6000||n.y>6000||n.points?.some(p=>p.x>6000||p.y>6000)))throw Error('This routed factory exceeds the canvas limit. Use supplied plates, a faster belt tier, or a smaller output target.');
 s.factoryPlan={required:plan.raw,demand:plan.demand,routes,goal:plan.goal};return {...plan,state:s,routes};
}
function sizeProductionStage(recipes,engine,{recipe,machine,rate,beltTier='yellow',belts={},lanes=2},fluidItems){
 const n={recipe,machine},r=recipes[recipe],each=engine.per(n),required=Math.ceil(rate/each-1e-9),capacity={yellow:900,red:1800,blue:2700}[beltTier]*lanes/2;
 const inputs=Object.entries(engine.inputs(n)).map(([item,q])=>{const perMachine=each*q/r.out,need=rate*q/r.out,fluid=fluidItems.has(item),recommended=fluid?null:Math.ceil(need/capacity-1e-9),count=fluid?null:(belts[item]??recommended),equivalent=fluid?Infinity:count*capacity/perMachine;return {item,fluid,perMachine,need,recommended,count,equivalent,whole:Math.floor(equivalent+1e-9),one:capacity/perMachine,two:2*capacity/perMachine}});
 const solids=inputs.filter(i=>!i.fluid),sustained=Math.min(required,...solids.map(i=>i.equivalent)),limiting=solids.filter(i=>i.equivalent+1e-8<required).sort((a,b)=>a.equivalent-b.equivalent);
 return {each,required,exact:rate/each,inputs,sustained,maxOutput:Math.min(required*each,sustained*each),limiting};
}
function planFromBelts(recipes,engine,fluidItems,{recipe,tier,boundary,belts,targetRate}){
 if(!belts.length)throw Error('Add an input belt and assign its lanes.');
 const supply=configuredSupply(belts);
 const unit=planProduction(recipes,engine,{recipe,rate:1,tier,boundary:'raw',suppliedItems:Object.keys(supply)}),solids=Object.entries(unit.raw).filter(([item])=>!fluidItems.has(item)||Object.hasOwn(supply,item));
 if(!solids.length)throw Error('This product has no solid external inputs at this boundary. Use a machine or output target.');
 const missing=solids.filter(([item])=>!supply[item]).map(([item])=>item);
 if(missing.length)throw Error('Missing belt inputs: '+missing.map(i=>i.replaceAll('-',' ')).join(', ')+'. Add these materials or supply a later intermediate.');
 const maximum=Math.min(...solids.map(([item,need])=>supply[item]/need));const rate=targetRate??maximum;if(rate>maximum+1e-7)throw Error('Your bus can support '+Number(maximum.toFixed(2))+'/min, below this target. Add supply or choose Max output from my bus.');
 const plan=planProduction(recipes,engine,{recipe,rate,tier,boundary:'raw',suppliedItems:Object.keys(supply)});
 return {...plan,supply,maximum,limiting:solids.filter(([item,need])=>Math.abs(supply[item]/need-maximum)<1e-6).map(([item])=>item),configuredBelts:JSON.parse(JSON.stringify(belts))};
}
function attachConfiguredBelts(plan,fluidItems){
 const s=plan.state;let next=Math.max(...s.nodes.map(n=>+n.id.slice(1)))+1;
 const offset=250+plan.configuredBelts.length*100;s.nodes.forEach(n=>{if(n.points)n.points.forEach(p=>p.y+=offset);else n.y+=offset});const busEnd=Math.max(800,...s.nodes.map(n=>n.points?Math.max(...n.points.map(p=>p.x)):n.x+280));const lanes=[];const pipeSupply=configuredSupply(plan.configuredBelts.filter(b=>b.kind==='pipe'));for(const n of s.nodes)if(n.kind==='source'&&Object.hasOwn(pipeSupply,n.item)){n.supply=pipeSupply[n.item];n.name='SUPPLY PIPE · '+n.item.replaceAll('-',' ');}
 const configured=plan.configuredBelts.filter(b=>b.kind!=='pipe').map((b,i)=>{const n={id:'n'+next++,kind:'belt',name:'YOUR BUS · '+(b.name||'Line '+(i+1)),tier:b.tier,full:true,lanes:[...b.lanes],points:[{x:40,y:120+i*100},{x:busEnd,y:120+i*100}]};b.lanes.forEach((item,lane)=>{if(item)lanes.push({node:n,item,lane,left:{yellow:450,red:900,blue:1350}[b.tier]})});return n});
 const solidSources=s.nodes.filter(n=>n.kind==='source'&&!fluidItems.has(n.item));
 for(const source of solidSources){const outgoing=s.edges.filter(e=>e.from===source.id);s.edges=s.edges.filter(e=>e.from!==source.id);for(const e of outgoing){let need=e.limit;for(const lane of lanes.filter(l=>l.item===source.item)){const take=Math.min(need,lane.left);if(take<1e-8)continue;const dest=s.nodes.find(n=>n.id===e.to),tapX=Math.max(60,Math.min(busEnd-20,dest.points?dest.points[0].x:dest.x));let tap=lane.node.points.findIndex(p=>p.x===tapX);if(tap<0){lane.node.points.push({x:tapX,y:lane.node.points[0].y});tap=lane.node.points.length-1}const edge={...e,from:lane.node.id,fromLane:lane.lane,fromAt:tap,limit:take};delete edge.fromSlot;s.edges.push(edge);need-=take;lane.left-=take;if(need<1e-8)break}if(need>1e-6)throw Error('Configured belts cannot supply this plan.')}}
 for(const b of configured){const old=[...b.points];b.points.sort((a,b)=>a.x-b.x);for(const e of s.edges)if(e.from===b.id)e.fromAt=b.points.indexOf(old[e.fromAt])}s.nodes=s.nodes.filter(n=>!solidSources.includes(n));s.nodes.push(...configured);const used={};for(const e of s.edges)for(const side of ['from','to']){if(s.nodes.find(n=>n.id===e[side])?.kind==='machine'){const slot=used[e[side]]||0;if(slot>11)throw Error('Too many belt pickups for this machine group. Use fewer input belts.');e[side+'Slot']=slot;used[e[side]]=slot+1}}
 if(s.nodes.length>40||s.edges.length>100||s.nodes.some(n=>n.points?n.points.length>20||n.points.some(p=>p.y>6000):n.y>6000))throw Error('This plan exceeds the canvas limit. Use fewer or slower input belts.');
 s.factoryPlan={...(s.factoryPlan||{}),required:plan.raw,demand:plan.demand,goal:plan.goal};return plan;
}
// Upgrade only generated feeder belts recorded by the planner; preserve manual routes.
function removeLegacyInputBelts(original,check){
 if(!Array.isArray(original?.factoryPlan?.routes))return original;
 const s=JSON.parse(JSON.stringify(original));let changed=false,renamed=false;
 for(const tag of s.factoryPlan.routes){const b=s.nodes.find(n=>n.id===tag.id);if(!b||b.kind!=='belt'||!(/^(BUS|INPUT|INTERNAL FEED) · /.test(b.name||'')))continue;const prefix=tag.role==='intermediate'?'INTERNAL · ':tag.role==='input'?'SUPPLY BUS · ':null;if(prefix){b.name=b.name.replace(/^(BUS|INPUT|INTERNAL FEED) · /,prefix);renamed=true}}

 for(const tag of [...s.factoryPlan.routes].filter(r=>r.role==='input')){
  const b=s.nodes.find(n=>n.id===tag.id);if(!b||b.kind!=='belt'||b.full)continue;
  const incoming=s.edges.filter(e=>e.to===b.id),outgoing=s.edges.filter(e=>e.from===b.id);
  // Older generated external buses were fed by redundant source cards.
  if(/^SUPPLY BUS · /.test(b.name||'')&&incoming.every(e=>e.kind==='transfer'&&s.nodes.some(n=>n.id===e.from&&n.kind==='source'))){
   b.full=true;const oldSources=new Set(incoming.map(e=>e.from));s.edges=s.edges.filter(e=>e.to!==b.id);s.nodes=s.nodes.filter(n=>!oldSources.has(n.id)||s.edges.some(e=>e.from===n.id||e.to===n.id));changed=true;continue;
  }
  if(!incoming.length||!outgoing.length||incoming.some(e=>e.kind!=='transfer'||!s.nodes.some(n=>n.id===e.from&&n.kind==='belt'&&n.full))||outgoing.some(e=>e.kind!=='transfer'||!s.nodes.some(n=>n.id===e.to&&n.kind==='machine')))continue;
  const budgets=incoming.map(e=>({e,left:e.limit})),requests=new Map();
  for(const e of outgoing){const key=e.to+'|'+e.item;if(!requests.has(key))requests.set(key,{e,need:0});requests.get(key).need+=e.limit}
  const replacement=[];let failed=false;
  for(const {e,need}of requests.values()){let left=need;for(const budget of budgets){if(budget.e.item!==e.item)continue;const amount=Math.min(left,budget.left);if(amount<1e-8)continue;const x={...e,from:budget.e.from,fromLane:budget.e.fromLane??budget.e.lane??0,fromAt:budget.e.fromAt??budget.e.at??0,limit:amount};delete x.toLane;delete x.toAt;replacement.push(x);left-=amount;budget.left-=amount}if(left>1e-6)failed=true}
  if(failed)continue;
  s.edges=s.edges.filter(e=>e.from!==b.id&&e.to!==b.id).concat(replacement);s.nodes=s.nodes.filter(n=>n!==b);s.factoryPlan.routes=s.factoryPlan.routes.filter(r=>r.id!==b.id);changed=true;
 }
 if(!changed)return renamed&&check(s)?s:original;
 // Consolidate equivalent pickups left by the former feeder's two lanes.
 const unique=new Map();for(const e of s.edges){const key=e.kind==='transfer'?[e.from,e.to,e.item,e.fromLane??e.lane??0,e.fromAt??e.at??0,e.toLane??0,e.toAt??0].join('|'):JSON.stringify(e);if(unique.has(key))unique.get(key).limit+=e.limit;else unique.set(key,{...e})}s.edges=[...unique.values()];
 const slots={};for(const e of s.edges)for(const side of ['from','to'])if(s.nodes.some(n=>n.id===e[side]&&n.kind==='machine')){const slot=slots[e[side]]||0;if(slot>11)return original;e[side+'Slot']=slot;slots[e[side]]=slot+1}
 return check(s)?s:original;
}
