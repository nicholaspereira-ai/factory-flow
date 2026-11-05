/* Fixed-step, item-conserving teaching simulation. Three assembler-1 circuits.
   Coordinates are schematic; pickup geometry and arm timing are explicit. */
function createLab(){
 const s={time:0,speed:75,laneRate:[7.5,7.5],exitRate:7.5,exitCredit:0,spawnCredit:[0,0],lanes:[[],[]],output:[],nextId:1,spawned:[0,0],escaped:[0,0],consumed:[0,0],delivered:0,produced:0,events:[],machines:[]};
 const start=70,end=1130,gap=10;
 const item=(x,lane)=>({id:s.nextId++,x,lane});
 for(let l=0;l<2;l++)for(let x=start;x<end;x+=gap){s.lanes[l].push(item(x,l));s.spawned[l]++}
 for(let i=0;i<3;i++)s.machines.push({id:i,x:310+i*280,enabled:true,buffer:[0,0],out:0,craft:null,arms:[null,null],outputArm:null,made:0,busy:0,waiting:0,blocked:0,state:'Waiting for ingredients',history:[]});
 function move(list,dt,exit,kind){list.sort((a,b)=>b.x-a.x);let ahead=Infinity;for(const p of list){p.x=Math.min(p.x+s.speed*dt,ahead-gap,end);ahead=p.x}for(let i=list.length-1;i>=0;i--){let p=list[i];if(p.x<end-1e-8)continue;if(exit()){list.splice(i,1);if(kind==='out'){s.delivered++;s.events.push(s.time)}else s.escaped[kind]++}}}
 function freeAt(list,x){return list.every(p=>Math.abs(p.x-x)>=gap-1e-8)}
 function step(dt=1/60){s.time+=dt;s.exitCredit=Math.min(1,s.exitCredit+s.exitRate*dt);move(s.output,dt,()=>{if(s.exitRate<=0||s.exitCredit<1)return false;s.exitCredit-=1;return true},'out');
  for(let l=0;l<2;l++){move(s.lanes[l],dt,()=>true,l);s.spawnCredit[l]=Math.min(1,s.spawnCredit[l]+s.laneRate[l]*dt);if(s.spawnCredit[l]>=1&&freeAt(s.lanes[l],start)){s.lanes[l].push(item(start,l));s.spawned[l]++;s.spawnCredit[l]-=1}}
  for(const m of s.machines){
   if(m.outputArm){m.outputArm.t=Math.min(.5,m.outputArm.t+dt);if(m.outputArm.t>=.5&&freeAt(s.output,m.x+55)){s.output.push(item(m.x+55,2));m.outputArm=null}}
   if(!m.outputArm&&m.out>0){m.out--;m.outputArm={t:0}}
   for(let l=0;l<2;l++){let arm=m.arms[l];if(arm){arm.t+=dt;if(arm.t>=.5){m.buffer[l]+=arm.count;m.arms[l]=null}}else if(m.enabled){const limit=l?6:2,need=limit-m.buffer[l];if(need>0){const tap=m.x+(l?22:-22);const candidates=s.lanes[l].filter(p=>Math.abs(p.x-tap)<=14).sort((a,b)=>a.x-b.x).slice(0,Math.min(2,need));if(candidates.length){m.arms[l]={t:0,count:candidates.length,x:candidates.reduce((v,p)=>v+p.x,0)/candidates.length};const ids=new Set(candidates.map(p=>p.id));s.lanes[l]=s.lanes[l].filter(p=>!ids.has(p.id))}}}}
   if(!m.enabled){m.state='Paused by you';continue}
   if(m.craft!==null){m.craft=Math.min(1,m.craft+dt);if(m.craft>=1){if(m.out<5){m.out++;m.made++;s.produced++;m.history.push(s.time);m.craft=null}else{m.state='Output blocked';m.blocked+=dt;continue}}else{m.state='Crafting';m.busy+=dt;continue}}
   if(m.out>=5){m.state='Output blocked';m.blocked+=dt;continue}
   if(m.buffer[0]>=1&&m.buffer[1]>=3){m.buffer[0]--;m.buffer[1]-=3;s.consumed[0]++;s.consumed[1]+=3;m.craft=0;m.state='Crafting';m.busy+=dt}else{m.state=m.buffer[1]<3?'Waiting for copper cable':'Waiting for iron plate';m.waiting+=dt}
  }
  s.events=s.events.filter(t=>s.time-t<=30);for(const m of s.machines)m.history=m.history.filter(t=>s.time-t<=30);
 }
 function resetFlow(){for(let l=0;l<2;l++){s.escaped[l]+=s.lanes[l].length;s.lanes[l]=[];s.spawnCredit[l]=0}}
 function audit(){return [0,1].every(l=>{const held=s.machines.reduce((v,m)=>v+m.buffer[l]+(m.arms[l]?.count||0),0);return s.spawned[l]===s.lanes[l].length+held+s.consumed[l]+s.escaped[l]})&&s.produced===s.output.length+s.machines.reduce((v,m)=>v+m.out+(m.outputArm?1:0),0)+s.delivered}
 return {s,step,audit,resetFlow,freeAt};
}
if(typeof module!=='undefined')module.exports=createLab;
