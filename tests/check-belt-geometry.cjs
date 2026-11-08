const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const app=fs.readFileSync('src/app.js','utf8'),view=fs.readFileSync('src/item-view.js','utf8'),c={};vm.createContext(c);
vm.runInContext(app.slice(app.indexOf('function offsetPoints('),app.indexOf('function port(')),c);
vm.runInContext(view.slice(view.indexOf('const itemPoint='),view.indexOf('function resetItemSimulation')),c);
for(const endY of [-200,200])for(const offset of [-11,11]){
 c.endY=endY;c.offset=offset;
 const result=vm.runInContext(`(()=>{const points=offsetPoints([{x:0,y:0},{x:80,y:0},{x:80,y:endY},{x:160,y:endY}],offset);const length=points.slice(1).reduce((s,p,i)=>s+Math.hypot(p.x-points[i].x,p.y-points[i].y),0);return {points,samples:Array.from({length:101},(_,i)=>itemPoint(points,length*i/100))}})()`,c);
 for(let i=1;i<result.points.length;i++)assert(result.points[i].x===result.points[i-1].x||result.points[i].y===result.points[i-1].y);
 for(const p of result.samples)assert(result.points.slice(1).some((b,i)=>{const a=result.points[i];return Math.abs((b.x-a.x)*(p.y-a.y)-(b.y-a.y)*(p.x-a.x))<1e-6&&p.x>=Math.min(a.x,b.x)-1e-6&&p.x<=Math.max(a.x,b.x)+1e-6&&p.y>=Math.min(a.y,b.y)-1e-6&&p.y<=Math.max(a.y,b.y)+1e-6}));
}
assert(view.includes('offsetPoints(routePoints(e)'));
console.log('PASS both splitter branches and lanes keep moving items on the drawn orthogonal route.');
