# Architecture

Browser-only application with classic scripts loaded in order by `src/overview.html`. No server or database is required. Layouts use localStorage plus JSON import/export.

- `recipes.js`, `core.js`: recipe catalog and machine rates.
- `planner.js`, `goal.js`: backward requirements, user supplies, multi-output goals, optional generated routing.
- `flow.js`: continuous flow solver.
- `app.js`, `interactions.js`, `placement.js`: rendering, editor interactions and schematic connection points.
- `transport.js`: inserter estimates and direct/belt comparisons.
- `budget.js`, `layout-checks.js`, `guidance.js`, `linked-views.js`: requirements and contextual feedback.
- `item-sim.js`, `item-view.js`: discrete solid inventories and calm live rendering.
- `index.html`, `sim*`: separate companion live-flow demo.

The build inlines the main application's scripts and CSS into portable HTML files. Tests use Node VM environments with DOM stubs, not a real browser; visual checks remain necessary for UI changes.

## Model limits

Machine groups share schematic buffers. Inserter timing, route travel, physical reach, collision and power are not tile-accurate. Fluids use continuous buffers, not Factorio pipe physics. Direct insertion planning estimates equipment but does not prove a physical arrangement. Recipe coverage and alternate/byproduct handling need audit. Graph limits currently include 40 nodes and 100 links.

## Independent review tools

`factory-checks.js` performs read-only budget, connection-capacity and belt-material checks. The UI adds inserter estimates and existing physical-placement checks. Passing is scoped to modeled constraints; raw link capacity does not prove live throughput, and physical coverage must be reported separately.

`workshop.js` exposes Check factory, a collapsed recipe-stage overview, the process worksheet and a game-verification notebook. Stage cards summarize existing graph connections; expanding frames every machine group of that recipe without rearranging the graph.

`process-balance.js` computes a multi-process material ledger for advanced oil, cracking, uranium processing and Kovarex. Shared intermediates cancel in the net ledger; gross recycling flows and startup inventory remain visible. Uranium outputs are expectations. This worksheet persists as `state.processWorksheet` with JSON layouts, but is **not integrated into backward recipe expansion or the live canvas solver**. A destination entry means continuous use/removal, not infinite physical storage. It does not optimize machine counts or prove supply/transport feasibility.

The verification notebook stores user-entered evidence in its own localStorage key. It does not auto-approve a canvas. Exporting a layout does not export notebook measurements. See docs/verification/README.md for reproducible manual cases.

Recipes may now declare `outputs` alongside the legacy primary `product`/`out`. `engine.outputs(node)` supplies their full output map. The flow solver constrains each material separately relative to primary-product rate; the live model stores `outputs` and `madeOutputs` per material and keeps legacy `out`/`made` aliases for the primary. `node.outputSinks` declares per-minute continuous external consumers. The advanced-oil canvas recipe is manual-only; stochastic and catalyst recipes remain worksheet-only. Side-product ports carry `data-output-item` so drag wiring preserves material identity.
