# Factory Flow

A visual Factorio planner: choose your production goals and available supplies, understand the required machines and transport, then design your own layout.

## Status

Early prototype for base-game production planning. The canvas is a flowchart, not an exported in-game blueprint. Inserter timing, shared machine buffers, and fluid movement are schematic estimates; physical pipe networks are not simulated.

## Try it locally

Download this repository using **Code → Download ZIP**, unzip it, and open `src/overview.html` in a modern desktop browser. No build step is required for the source version.

## Build and test

Requires Node.js 20+ and Python 3. No dependencies to install.

- `npm run build` creates portable HTML files in `dist/`.
- Open `dist/Factory Flow Overview.html` directly, or run `npm start` and visit http://localhost:8766/Factory%20Flow%20Overview.html.
- `npm test` builds and runs all existing automated checks.

## Project structure

- `src/`: editable HTML, CSS, JavaScript; start at `overview.html`.
- `tests/`: production math, transport, simulation, interaction and packaging checks.
- `scripts/`: build and test entry points.
- `data/`: retained Factorio recipe and technology reference snapshots; not an automatic update feed.
- `docs/`: product direction, architecture and remaining work.
- `dist/`: generated standalone apps; edit source, then rebuild.

## Your layouts

Use **File → Export JSON** to save a portable layout, and **File → Import JSON** to load it. Browser saves stay on your device and belong to the URL where you use the app; they are not included in this repository.

See [product direction](docs/PRODUCT.md), [architecture](docs/ARCHITECTURE.md), and [roadmap](docs/ROADMAP.md).

## Review tools

- **Check factory**: separate production, transport, lane and physical-placement checks.
- **Stage overview**: collapsed recipe groups; expand one to focus its machines.
- **More tools → Oil & nuclear balance**: a saved multi-output worksheet. Balanced oil worksheets can be added as connected canvas groups; nuclear processes remain worksheet-only.
- **More tools → Game verification**: record your in-game measurements. Start with [the verification kit](docs/verification/README.md).

## Feedback

When reporting a problem, include the product, machine tiers/counts, available supplies, what you expected, and what happened. A small exported layout and screenshot help reproduce it.

## GitHub Pages

In repository Settings → Pages, select **Deploy from a branch**, **main**, and **/(root)**, then Save. The root index opens `src/overview.html`; all scripts and styles use relative paths, so no build service or backend is needed. `.nojekyll` disables Jekyll processing. Source updates on main are published automatically after Pages is enabled.
