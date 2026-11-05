from pathlib import Path
root=Path(__file__).resolve().parents[1]
(root/'dist').mkdir(exist_ok=True)
p=root/'src';s=(p/'overview.html').read_text().replace('href="index.html"','href="Factory Flow.html"').replace('href="overview.html"','href="Factory Flow Overview.html"').replace('<link rel="stylesheet" href="style.css">','<style>'+(p/'style.css').read_text()+'</style>')
for f in ['planner.js','recipes.js','core.js','flow.js','transport.js','guidance.js','placement.js','goal.js','budget.js','layout-checks.js','item-sim.js','linked-views.js','factory-checks.js','process-balance.js','app.js','interactions.js','item-view.js','workshop.js']:s=s.replace('<script src="'+f+'"></script>','<script>'+p.joinpath(f).read_text().replace('</script','<\\/script')+'</script>')
(root/'dist/Factory Flow Overview.html').write_text(s)
s=s.replace('factory-flow-routes-v4','factory-flow-fast-inserter-v1').replace('state=validate(s)?removeLegacyInputBelts(s,validate):demoState()','state=validate(s)?removeLegacyInputBelts(s,validate):fastInserterState()').replace('catch{state=demoState()}','catch{state=fastInserterState()}').replace("state.nodes.find(n=>n.kind==='splitter')?.id","state.nodes.find(n=>n.recipe==='fast-inserter')?.id")
(root/'dist/Fast Inserter Layout.html').write_text(s)

# Package the companion live-flow demo too.
live=(p/"index.html").read_text().replace('href="sim.css"','href="sim.css"')
for name in ["sim-engine.js","sim.js"]:
 live=live.replace('<script src="'+name+'"></script>',"<script>"+(p/name).read_text()+"</script>")
live=live.replace('<link rel="stylesheet" href="sim.css">',"<style>"+(p/"sim.css").read_text()+"</style>")
live=live.replace('href="overview.html"','href="Factory Flow Overview.html"')
(root/"dist/Factory Flow.html").write_text(live)
