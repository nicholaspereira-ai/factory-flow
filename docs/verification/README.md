# In-game verification kit

These cases are **unverified**. Automated JavaScript tests verify our model, not Factorio. No game session was available during implementation. Run in an editor/sandbox save with power, normal-quality buildings, no modules/beacons, and the exact game version recorded. Record research and inserter hand size. Use the app's More tools → Game verification notebook for measurements.

For throughput tests, let the line warm up, then measure the change in a collection chest over 60 seconds. Repeat with different lane configurations; do not substitute a chest-to-chest result for a belt pickup result. Keep screenshots or save files alongside the measurements. Tests are manual setups, not blueprint exports.

| Case | Setup and observation | Acceptance |
|---|---|---|
| Direct transfer | Adjacent matching producer/receiver, one inserter; unlimited upstream ingredients and clear final output. Record recipe, tiers, count and hand size. | Actual sustained delivery meets receiver demand; compare measured rate with the app estimate. |
| Straight belt loading | One output inserter perpendicular to a straight belt, then opposite side and reversed belt travel. | Lane matches placement checker. A means left when looking along belt travel. |
| Curves / sideload | Repeat at corners and at a side-loading junction in each direction. | Record mapping; these geometries currently remain unsupported, not silently approved. |
| Belt pickup | Full belt → one inserter → empty chest. Test both lanes, then each lane separately. | Record measured items/min and deviation from estimate. |
| Oil output blockage | One normal refinery, advanced processing, unlimited crude/water, separate outlets. Then let one output fill. | At full speed expect 300 heavy oil, 540 light oil, 660 petroleum gas/min; blocked output eventually stops the process. |
| Kovarex recycling | One normal centrifuge, 40 U-235 and 5 U-238 startup; return catalyst material and supply replacement U-238. | One 60-second cycle: gross 41 U-235 + 2 U-238, net +1 U-235 and −3 U-238. Extraction must preserve startup material. |

Uranium processing is probabilistic: 0.035 U-235/min per normal centrifuge is an expected long-run average, not a short-test acceptance threshold or promised startup time.

## Reference basis

- https://wiki.factorio.com/Inserters
- https://wiki.factorio.com/Oil_processing
- https://wiki.factorio.com/Uranium_processing
- https://wiki.factorio.com/Kovarex_enrichment_process
- Local `data/factorio-recipes.lua` snapshot (recipe constants checked against wiki during this change).

The idea of isolated verification cases was inspired by SeezoCode's project. Our implementation and cases are written independently; no source code was copied: https://github.com/SeezoCode/factorio_optimizer_v2/blob/main/docs/VERIFY.md

## Measurement record

Copy for each run:

- Case:
- Date / exact game version:
- Recipe and building tiers:
- Belt/inserter type, research, hand size:
- Input/output arrangement:
- Warm-up duration:
- Collection count before / after:
- Measurement duration:
- Observed lane:
- Expected result / actual result:
- Match, mismatch, or inconclusive:
- Screenshot/save location:
