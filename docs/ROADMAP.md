# Roadmap

## Current foundation

Production goals and multi-output malls; user-specified belt lanes and fluid supplies; backward machine budgets; linked canvas/budget highlighting; transport estimates; persistent live solid items; visible machine connection points; move tool and simplified toolbar.

These features exist but still need usability and game-accuracy validation. Automated checks are not proof of exact in-game behavior.

## Canvas readability pass

Connection rates appear for selected machines, belts and links, or on hover. Show rates restores all labels. Focus selection frames complete belts and both endpoints of selected transfers; assembler bounds include bottom sockets. Selection outlines are stronger. Existing automated suites pass; browser verification is still pending under the local file URL restriction. Stage grouping and orthogonal routing remain outstanding.

## Latest polish

Goal and live-run metrics now distinguish per-minute targets, modeled gross production and cumulative crafted items. Machine setup controls are visible; calculations, list-based connections and tracking details are expandable. Goal errors explain next steps and provide a jump to supplies or output settings. All existing automated suites pass; browser visual verification remains pending because file-URL access was blocked.

## Next

1. Simplify the inspector: primary controls first, details on demand, plain-language shortages.
2. Improve large layouts with stage grouping/orthogonal routing and readable focus controls.
3. Audit flow conservation, shared demand, blocked outputs, lane loading and machine-group inserter allocation.
4. Make missing supplies actionable in the goal panel, with specific row links rather than unexplained disabled buttons.
5. Audit planned spare capacity versus genuine bottlenecks and eliminate misleading transfer warnings.
6. Validate physical placement while retaining player freedom: three positions per assembler side, reach, adjacency and pipe ports.
7. Audit nuclear recipes, including uranium processing and Kovarex, and support cycles/byproducts correctly before claiming completeness.

## Ask before adding

Plan A/B comparison, phased growth, power/pollution budgets, blueprint/checklist exports and shareable plans. No publication is part of project organization.

## Independent validation and process tools

Added: Check factory with separate budget/link/lane/inserter/placement sections; missing-stage notices; collapsed recipe-stage cards with expand-to-focus; explicit unknown parallel-drop geometry; saved oil/nuclear process balance worksheet with surplus destinations, gross catalyst flows and startup inventory; manual in-game verification notebook and reproducible cases.

Still required before claiming all five areas fully integrated: integrate multi-output and cyclic recipes into backward goal planning and live simulation; verify curved/sideload/underground lane behavior; support physical pipes and route continuity; run actual in-game measurements; allow user-defined nested production blocks beyond recipe grouping. Current tests validate models, not game equivalence. Visual verification remains pending under the file URL access restriction.

## Advanced oil on the canvas

Advanced oil processing can now be added manually, with separate heavy-oil, light-oil and petroleum-gas ports. Both the continuous solver and live inventory model conserve each output independently. Each output requires a connected consumer or explicit continuous external use; blocking one output stops the refinery after buffers fill. Load example → Advanced oil processing provides a reversible test setup. Factory checks report missing output capacity.

Still unfinished: automatic multi-output backward planning, stochastic uranium and catalytic Kovarex in the canvas, physical pipe-network validation and actual game measurements. Advanced oil is explicitly marked manual-only in the goal planner instead of producing an incomplete generated plan.

Balanced oil worksheets now have an explicit Add oil processes to canvas action. It appends connected refinery/cracking groups, external supplies and continuous output destinations without replacing the existing layout; Undo restores the prior state. Allocated stage rates are retained for checks. Regression coverage includes full cracking-chain flow, item conservation and upstream blocking when the final destination closes. Nuclear worksheet conversion remains disabled.

## Canvas visual cleanup

Reduced primary actions to Goal, Budget and More; moved examples, checks, display controls and simulation controls into More. Machine ingredient numbers, extra badges and belt metadata reveal on hover, keyboard focus or selection. Inserter badges reveal on focus/selection or insufficient capacity; connection points stay visible. Opening a selection switches away from the Budget panel. Node dimensions remain stable to preserve connection geometry. Larger card/geometry compression and a single result-strip redesign remain future work. Visual verification remains pending due to the file URL access restriction.

Belt rendering now draws one continuous rail/track/lane surface per belt route instead of overlapping rounded capsules at every editable point. Per-section solver flow overlays and edit handles remain intact. Automated checks pass; visual verification is pending.

Supply selection in the production-goal panel now offers one-click full belts for common materials, visible speed buttons, duplication, and copying lane A to both lanes. New belts inherit the last chosen speed within the dialog. Mixed lanes retain individual material selectors. The downstream layout-planner supply editor still uses its existing controls.
