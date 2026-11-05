/* Continuous steady-state material balance. Lexicographic simplex starts at
   the feasible all-zero flow; all constraints have nonnegative RHS. */
function solveFlow(state, recipes, analyzeBackups=true){
 const E=createEngine(recipes), nodes=state.nodes, edges=state.edges;
 const machines=nodes.filter(n=>n.kind==='machine'&&recipes[n.recipe]);
 const cap=n=>E.per(n)*n.count, laneCap=n=>({yellow:450,red:900,blue:1350}[n.tier]||450);
 const splitters=nodes.filter(n=>n.kind==='splitter');
 const admitted=nodes.filter(n=>n.kind==='belt'&&n.full&&n.endBlocked).flatMap(n=>[0,1].filter(l=>n.lanes[l]).map(l=>({id:n.id,l})));const base=edges.length+machines.length+splitters.length*2;
 const admissionIndex=(n,l)=>{const i=admitted.findIndex(a=>a.id===n.id&&a.l===l);return i<0?-1:base+i};
 const cols=base+admitted.length, rows=[],limits=[];
 const laneOf=(e,dir)=>e[dir+'Lane']??e.lane??0;
 const atOf=(e,dir)=>e[dir+'At']??e.at??0;
 const row=()=>Array(cols).fill(0), add=(r,b)=>{rows.push(r);limits.push(Math.max(0,b))};
 const ix=n=>edges.length+machines.indexOf(n);
 for(const n of machines){let r=row();r[ix(n)]=1;add(r,cap(n));
  for(const [item,q] of Object.entries(E.inputs(n))){r=row();edges.forEach((e,i)=>{if(e.to===n.id&&e.item===item)r[i]=1});r[ix(n)]=-q/recipes[n.recipe].out;add(r,0);add(r.map(x=>-x),0)}
  for(const [item,q]of Object.entries(E.outputs(n))){r=row();edges.forEach((e,i)=>{if(e.from===n.id&&e.item===item)r[i]=1});r[ix(n)]=-q/recipes[n.recipe].out;add(r,0);if(recipes[n.recipe].outputs||n.outputSinks!==undefined)add(r.map(x=>-x),n.outputSinks?.[item]||0);else if(!n.terminal)add(r.map(x=>-x),0);}
 }
 edges.forEach((e,i)=>{let r=row();r[i]=1;add(r,e.limit??1000000)});
 for(const b of nodes.filter(n=>n.kind==='belt'&&n.balanceLoading&&n.lanes[0]&&n.lanes[0]===n.lanes[1])){const r=row();edges.forEach((e,i)=>{if(e.to===b.id&&e.kind==='transfer'&&nodes.some(n=>n.id===e.from&&n.kind==='machine'))r[i]=laneOf(e,'to')===0?1:-1});add(r,0);add(r.map(v=>-v),0)}
 const autoLoads=new Map();edges.forEach((e,i)=>{if(e.autoLaneSharing){const key=e.from+'|'+e.to+'|'+e.item;if(!autoLoads.has(key))autoLoads.set(key,[]);autoLoads.get(key).push(i)}});for(const indices of autoLoads.values()){if(![0,1].every(l=>indices.some(i=>laneOf(edges[i],'to')===l)))continue;const r=row();indices.forEach(i=>r[i]=laneOf(edges[i],'to')===0?1:-1);add(r,0);add(r.map(v=>-v),0)}
 const paired=new Map();edges.forEach((e,i)=>{if(e.balancePair){if(!paired.has(e.balancePair))paired.set(e.balancePair,[]);paired.get(e.balancePair).push(i)}});for(const indices of paired.values())if(indices.length===2){const [i,j]=indices,a=edges[i],b=edges[j];if(a.from===b.from&&a.to===b.to&&a.item===b.item&&laneOf(a,'to')!==laneOf(b,'to')){const r=row();r[i]=1;r[j]=-1;add(r,0);add(r.map(v=>-v),0)}}
 for(const n of nodes.filter(n=>n.kind==='source')){let r=row();edges.forEach((e,i)=>{if(e.from===n.id)r[i]=1});add(r,n.supply??900)}
 for(const n of nodes.filter(n=>n.kind==='belt'))for(let lane=0;lane<2;lane++){
  const ai=admissionIndex(n,lane),supply=ai<0&&n.full&&n.lanes[lane]?laneCap(n):0;let r=row();if(ai>=0){r[ai]=-1;const bound=row();bound[ai]=1;add(bound,laneCap(n));}
  for(let at=0;at<n.points.length;at++){
   // Loading and pickup at a tap share one steady-state cross-section.
   edges.forEach((e,i)=>{if(e.from===n.id&&laneOf(e,'from')===lane&&atOf(e,'from')===at)r[i]+=1;if(e.to===n.id&&laneOf(e,'to')===lane&&atOf(e,'to')===at)r[i]-=1});
   add([...r],supply);add(r.map(x=>-x),laneCap(n)-supply);
  }
  if(n.endBlocked){add([...r],supply);add(r.map(x=>-x),0);}
 }
 for(const [si,n] of splitters.entries())for(let lane=0;lane<2;lane++){
  let r=row(),incoming=row(),balance=row();
  edges.forEach((e,i)=>{if(e.to===n.id&&laneOf(e,'to')===lane){r[i]=1;incoming[i]=1}if(e.from===n.id&&laneOf(e,'from')===lane){r[i]=-1;balance[i]=e.branch===0?1:-1}});
  add(r,0);add(r.map(x=>-x),0);add(incoming,laneCap(n));
  const di=edges.length+machines.length+si*2+lane;
  balance[di]=-1;add([...balance],0);balance=balance.map(x=>-x);balance[di]=-1;add(balance,0);
 }
 // Prioritize pickups in belt travel order, then creation order. This gives
 // upstream machines first claim, while only consuming usable ingredients.
 const priority=[...machines].sort((a,b)=>{
  const taps=n=>edges.filter(e=>e.to===n.id&&nodes.find(x=>x.id===e.from)?.kind==='belt');
  for(const ea of taps(a))for(const eb of taps(b))if(ea.from===eb.from&&laneOf(ea,'from')===laneOf(eb,'from')&&atOf(ea,'from')!==atOf(eb,'from'))return atOf(ea,'from')-atOf(eb,'from');
  return nodes.indexOf(a)-nodes.indexOf(b);
 });
 const m=rows.length,N=cols+m,basis=Array.from({length:m},(_,i)=>cols+i);
 const T=rows.map((r,i)=>[...r,...Array.from({length:m},(_,j)=>i===j?1:0),limits[i]]);
 const O=[],done=new Set();
 // Optimize in dependency order. Pickups before a splitter keep first claim;
 // each splitter then routes and balances supply before its downstream users.
 while(done.size<nodes.length){let ready=nodes.filter(n=>!done.has(n.id)&&edges.filter(e=>e.to===n.id).every(e=>done.has(e.from)));
  if(!ready.length)break;
  ready.sort((a,b)=>{if(a.kind==='machine'&&b.kind==='machine')return priority.indexOf(a)-priority.indexOf(b);if(a.kind==='machine')return -1;if(b.kind==='machine')return 1;return nodes.indexOf(a)-nodes.indexOf(b)});
  const n=ready[0];done.add(n.id);
  if(n.kind==='machine'&&recipes[n.recipe]){let r=Array(N+1).fill(0);r[ix(n)]=-1;O.push(r)}
  if(n.kind==='splitter'){let flow=Array(N+1).fill(0);edges.forEach((e,i)=>{if(e.to===n.id)flow[i]=-1});O.push(flow);let pref=Array(N+1).fill(0),si=splitters.indexOf(n);
   if(n.policy==='a'||n.policy==='b')edges.forEach((e,i)=>{if(e.from===n.id&&e.branch===(n.policy==='a'?0:1))pref[i]=-1});else for(let l=0;l<2;l++)pref[edges.length+machines.length+si*2+l]=1;O.push(pref)
  }
 }
 // A saved graph may contain a feedback connection. It must not silently
 // remove every downstream machine from the optimization objective.
 for(const n of machines)if(!done.has(n.id)){let r=Array(N+1).fill(0);r[ix(n)]=-1;O.push(r)}
 // Fill spare capacity on joined routes after honoring pickups and splits.
 let transport=Array(N+1).fill(0);edges.forEach((e,i)=>{if(e.kind==='route')transport[i]=-1});if(transport.some(x=>x))O.push(transport);
 let pivots=0,converged=true;const eps=1e-8;
 while(cols&&m){let enter=-1;for(let j=0;j<N;j++){let first=O.find(r=>Math.abs(r[j])>eps);if(first&&first[j]<-eps){enter=j;break}}
  if(enter<0)break;let leave=-1,best=Infinity;
  for(let i=0;i<m;i++)if(T[i][enter]>eps){let ratio=T[i][N]/T[i][enter];if(ratio<best-eps||(Math.abs(ratio-best)<eps&&(leave<0||basis[i]<basis[leave]))){best=ratio;leave=i}}
  if(leave<0||++pivots>10000){converged=false;break}let pivot=T[leave][enter];for(let j=0;j<=N;j++)T[leave][j]/=pivot;
  for(const r of [...T,...O])if(r!==T[leave]){let f=r[enter];if(Math.abs(f)>eps)for(let j=0;j<=N;j++)r[j]-=f*T[leave][j]}
  basis[leave]=enter;
 }
 const values=Array(cols).fill(0);basis.forEach((b,i)=>{if(b<cols)values[b]=Math.max(0,T[i][N])});
 const rates=edges.map((_,i)=>values[i]),stats={},belts={};
 for(const n of machines){let actual=values[ix(n)],capacity=cap(n),ins={};for(const [item,q]of Object.entries(E.inputs(n))){const need=capacity*q/recipes[n.recipe].out,received=edges.reduce((v,e,i)=>v+(e.to===n.id&&e.item===item?rates[i]:0),0);ins[item]={need,received,percent:need?received/need*100:100}}let sent=edges.reduce((v,e,i)=>v+(e.from===n.id&&e.item===recipes[n.recipe].product?rates[i]:0),0);stats[n.id]={actual,capacity,util:capacity?actual/capacity*100:0,inputs:ins,delivered:Math.max(0,actual-sent)}}
 for(const n of nodes.filter(n=>n.kind==='belt'))belts[n.id]=[0,1].map(lane=>{const ai=admissionIndex(n,lane);let remaining=ai>=0?values[ai]:n.full&&n.lanes[lane]?laneCap(n):0;return n.points.map((p,at)=>{let loaded=0,taken=0;edges.forEach((e,i)=>{if(e.from===n.id&&laneOf(e,'from')===lane&&atOf(e,'from')===at)taken+=rates[i];if(e.to===n.id&&laneOf(e,'to')===lane&&atOf(e,'to')===at)loaded+=rates[i]});remaining+=loaded-taken;return {remaining:Math.max(0,remaining),loaded,taken,capacity:laneCap(n)}})});
 const backups={};
 if(analyzeBackups&&converged)for(const n of nodes.filter(n=>n.kind==='belt'&&n.endBlocked)){
 const opened={...state,nodes:nodes.map(x=>x.id===n.id?{...x,endBlocked:false}:x)};const free=solveFlow(opened,recipes,false);if(!free.converged)continue;
 backups[n.id]=[0,1].map(l=>({blocked:!!n.lanes[l]&&free.belts[n.id][l].at(-1).remaining>1e-6,stationary:belts[n.id][l].at(-1).remaining<1e-6,reason:'Settled closed-end queue; startup inventory is not simulated.'}));
 }
 return {stats,rates,belts,converged,pivots,laneCap,backups};
}
if(typeof module!=='undefined')module.exports=solveFlow;
