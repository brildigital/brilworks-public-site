# `@brilworks/diagrams`

Brilworks blog/marketing diagram pipeline. JSX templates → static SVG → PNG/WebP via [`sharp`](https://sharp.pixelplumbing.com/).

Deterministic, brand-locked, $0/image, no creds. Picked over hosted image-gen / Mermaid / Excalidraw in [BRI-101](/BRI/issues/BRI-101).

## Why this exists

Inline blog visuals (criteria frameworks, flow diagrams, stat blocks) need to be:

- **Brand-locked** — gradient stops `#007AEB → #008CE7 → #00DBD3`, Inter type scale, fixed radii. Hosted image-gen can't honor exact tokens.
- **Deterministic** — same spec ⇒ same bytes, every time. Reviews stay sane.
- **Cheap** — $0/image, no creds, runs in the same Node process as the marketing site.
- **Web-fit** — SVG + PNG + WebP each ≤200 KB.

The first version of [BRI-61](/BRI/issues/BRI-61)'s 5-criteria diagram was hand-rolled SVG. This package codifies the brand kit and the layout primitives so the next 50 diagrams take minutes, not heartbeats.

## Quick start

```bash
cd tools/diagrams
npm install
npm run render -- specs/bri-61.json out/bri-61
```

Outputs `out/bri-61.svg`, `out/bri-61.png`, `out/bri-61.webp`.

## Input spec format

```jsonc
{
  "layout": "criteria-grid",        // currently only layout supported
  "header": {
    "kicker":   "BRILWORKS · BUYER'S GUIDE 2026",  // small caps line above title
    "title":    "Evaluating agentic AI code assistants",
    "subtitle": "Five criteria, ordered roughly by decision blast radius."
  },
  "axis": {                         // optional: gradient bar with end labels
    "left":  "HIGHER IMPACT",
    "right": "LOWER IMPACT"
  },
  "cards": [                        // exactly 5 cards required for criteria-grid
    {
      "icon": "slider",             // or "files" | "ladder" | "shield" | "coins"
      "title": "Autonomy level",    // string OR string[] for multi-line titles
      "sections": [
        {
          "kind": "chips",          // simple chip rows (max ~2 per section)
          "label": "THE AXIS",
          "chips": [
            { "text": "Step-by-step" },
            { "text": "Run-to-completion", "variant": "warning" }
          ]
        },
        {
          "kind": "labelled-chips", // chip with KICKER + descriptive text
          "label": "THREE LINE ITEMS",
          "items": [
            { "kicker": "LICENSE", "text": "Easy to compare." },
            { "kicker": "TOKENS",  "text": "Scales with usage." },
            { "kicker": "SHADOW",  "text": "Largest hidden cost.", "variant": "warning" }
          ]
        },
        {
          "kind": "prose",          // multi-line body copy at card bottom
          "label": "WHY IT MATTERS",
          "lines": ["Line one.", "Line two.", "Line three."]
        }
      ]
    }
    // ... 4 more cards
  ],
  "footer": {
    "centerLabel": "Agentic AI Code Assistants in 2026 — Buyer's Guide",
    "rightLabel":  "brilworks.com"
  },
  "alt": "Concise alt text describing the diagram."
}
```

### Available icons

`slider` (autonomy axis) · `files` (codebase) · `ladder` (progression / iteration) · `shield` (verification surface) · `coins` (cost / pricing).

To add a new icon, edit `src/templates/criteria-grid.tsx` → `ICONS` map.

### Brand tokens

All colors / sizes / radii are defined in `src/brand-tokens.ts`. The renderer enforces them at render time — any color not in the tokens file rejects with `"Color … is not in brand tokens"`.

## Worked example: regenerate [BRI-61](/BRI/issues/BRI-61)

```bash
npm run verify-bri-61
# → Rendered bri-61
#     out/bri-61-v3.svg   ~20 KB
#     out/bri-61-v3.png   ~150 KB
#     out/bri-61-v3.webp  ~85 KB
#     alt: Five criteria for evaluating agentic AI code assistants...
```

The spec at `specs/bri-61.json` is the codified version of the v2 diagram shipped on the [BRI-52](/BRI/issues/BRI-52) buyer's guide.

## Adding a new layout

1. Create `src/templates/<layout-name>.tsx` exporting a JSX component + spec type.
2. Register it in `src/render.ts`'s `TEMPLATES` map.
3. Add a sample under `specs/`.
4. Add a section to this README documenting the spec shape.

Use only colors from `src/brand-tokens.ts`. The runtime check will reject anything else.

## Constraints

- **Output cap**: 200 KB per artifact. Renderer throws if exceeded — usually a sign that the SVG has runaway path data; reduce or simplify icons.
- **Card count**: `criteria-grid` requires exactly 5. Other counts not yet supported.
- **Fonts**: text uses the Inter stack with system fallbacks. SVG embeds names only — rasterizer needs system Inter for byte-perfect parity. (For full portability, embed as base64 in a future revision.)

## Related

- [BRI-101](/BRI/issues/BRI-101) — pipeline selection + this skill.
- [BRI-107](/BRI/issues/BRI-107) — companion hero/lifestyle imagery skill (local Ollama + FLUX.2 Klein).
- [BRI-61](/BRI/issues/BRI-61) — original 5-criteria diagram (v2 hand-rolled, v3 via this pipeline).
