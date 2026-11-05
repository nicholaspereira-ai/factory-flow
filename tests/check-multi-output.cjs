const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),c={};vm.createContext(c);for(const f of ['recipes','core','flow','transport','item-sim','process-balance','factory-checks'])vm.runInContext(fs.readFileSync('src/'+f+'.js','utf8'),c);const run=s=>vm.runInContext(s,c);
run(`var E=createEngine(RECIPES),fluids=new Set(['water','crude-oil','heavy-oil','light-oil','petroleum-gas']);var graph={nodes:[{id:'c',kind:'source',item:'crude-oil',supply:1200},{id:'w',kind:'source',item:'water',supply:600},{id:'r',kind:'machine',recipe:'advanced-oil-processing',machine:'refinery',count:1,terminal:true,outputSinks:{'heavy-oil':300,'light-oil':540,'petroleum-gas':660}}],edges:[{from:'c',to:'r',item:'crude-oil',kind:'transfer',limit:1200},{from:'w',to:'r',item:'water',kind:'transfer',limit:600}]};var flow=solveFlow(graph,RECIPES)`);
assert(Math.abs(run('flow.stats.r.actual')-660)<1e-5);
run(`graph.nodes[2].outputSinks['heavy-oil']=0;flow=solveFlow(graph,RECIPES)`);assert(run('flow.stats.r.actual')<1e-5);
run(`var sim=createItemSimulation(graph,RECIPES,E,fluids);for(let i=0;i<60*60;i++)sim.step(1/60)`);assert(run('sim.audit()'));assert.equal(run('sim.machines.r.status'),'Output buffer full');const stopped=run('sim.machines.r.made');run('for(let i=0;i<60*60;i++)sim.step(1/60)');assert.equal(run('sim.machines.r.made'),stopped);
run(`graph.nodes[2].outputSinks['heavy-oil']=300;for(let i=0;i<60*60;i++)sim.step(1/60)`);assert(run('sim.machines.r.made')>stopped);assert(run('sim.audit()'));for(const item of ['heavy-oil','light-oil','petroleum-gas'])assert(run(`sim.ledger.exported[${JSON.stringify(item)}]`)>0);
// One output can feed another machine while the others leave explicitly.
run(`graph.nodes.push({id:'crack',kind:'machine',recipe:'heavy-oil-cracking',machine:'chemical',count:1,terminal:true});graph.nodes[1].supply=825;graph.nodes[2].outputSinks['heavy-oil']=0;graph.edges.push({from:'r',to:'crack',item:'heavy-oil',kind:'transfer',limit:300},{from:'w',to:'crack',item:'water',kind:'transfer',limit:225});flow=solveFlow(graph,RECIPES)`);assert(Math.abs(run('flow.stats.r.actual')-660)<1e-5);assert(Math.abs(run('flow.stats.crack.actual')-225)<1e-5);
// Without an actual live destination, the chemical plant buffers and backs up too.
run(`sim=createItemSimulation(graph,RECIPES,E,fluids);for(let i=0;i<120*60;i++)sim.step(1/60)`);assert(run('sim.audit()'));assert(run('sim.machines.crack.outputs["light-oil"]')>0);
console.log('PASS multi-output fluid conservation, explicit destinations, whole-process blocking, reopening, secondary-output connection and downstream backpressure.');

run(`var worksheet={rows:[{process:'advanced-oil',count:1,use:100},{process:'heavy-cracking',count:1,use:25},{process:'light-cracking',count:1,use:85}],supplies:{'crude-oil':1200,water:1590},destinations:{'petroleum-gas':1170}};var addition=oilWorksheetGraph(worksheet,RECIPES,E);var oilGraph={nodes:addition.nodes,edges:addition.edges};var oilFlow=solveFlow(oilGraph,RECIPES)`);
assert(Math.abs(run('oilFlow.stats.n1.actual')-660)<1e-5);
assert(Math.abs(run('oilFlow.stats.n2.actual')-225)<1e-5);
assert(Math.abs(run('oilFlow.stats.n3.actual')-510)<1e-5);
assert.equal(run('checkFactory(oilGraph,RECIPES,E,fluids).transport.length'),0);
run(`sim=createItemSimulation(oilGraph,RECIPES,E,fluids);for(let i=0;i<180*60;i++)sim.step(1/60)`);assert(run('sim.audit()'));assert(run('sim.ledger.exported["petroleum-gas"]')>0);
run(`oilGraph.nodes[2].outputSinks['petroleum-gas']=0;oilFlow=solveFlow(oilGraph,RECIPES)`);assert(run('oilFlow.stats.n1.actual')<1e-5);
assert.throws(()=>run(`oilWorksheetGraph({...worksheet,destinations:{}},RECIPES,E)`),/destination/);
console.log('PASS worksheet conversion preserves allocated flow, connects cracking, and propagates blocked destinations upstream.');
