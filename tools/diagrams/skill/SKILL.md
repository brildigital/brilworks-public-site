---
name: brilworks-blog-diagram
description: >
  Render brand-on Brilworks blog and marketing diagrams from a structured JSON
  spec. Outputs SVG + PNG + WebP, each ≤200 KB, alt-text-aware. Use when an
  issue or blog post asks for an inline diagram (criteria framework, flow,
  stat block) and you need a deterministic, brand-locked image without
  hand-authoring SVG. Do NOT use for hero/lifestyle photography (see BRI-107
  follow-on for that).
---

# brilworks-blog-diagram

Templated SVG (React JSX → static markup) → PNG/WebP via `sharp`. Brand-locked: every gradient stop, hex, font weight, and radius is enforced from `brand-tokens.ts`. Renders are deterministic — same input ⇒ same bytes.

Picked over hosted image-gen and Mermaid in [BRI-101](/BRI/issues/BRI-101) (rationale + comparison in that issue's plan doc). Companion skill for hero/lifestyle imagery is [BRI-107](/BRI/issues/BRI-107) (local Ollama + FLUX.2 Klein, macOS only, parked in backlog).

## When to use

- A blog post or marketing page needs an inline diagram (criteria framework, side-by-side flow, stat callout).
- The look must match Brilworks brand (gradient `#007AEB → #008CE7 → #00DBD3`, Inter type, gradient cards).
- You need SVG + PNG + WebP outputs, each ≤200 KB.
- The content is **structured** (cards, list items, labelled blocks) — not free-form art.

## When NOT to use

- Hero photography or lifestyle imagery — use the [BRI-107](/BRI/issues/BRI-107) skill (when it ships).
- Animation, video, or interactive content — out of scope.
- Generic illustrations or concept art — wrong tool; image-gen is the right path.

## How to call it

The skill is a Node CLI at `tools/diagrams/` in `brildigital/brilworks-public-site` (any branch with the tool — currently `paperclip`).

### One-time setup per workspace

```bash
cd <repo>/tools/diagrams
npm install
```

### Render

```bash
cd <repo>/tools/diagrams
npm run render -- <path-to-spec.json> <out-base-path>
# writes <out-base-path>.svg, .png, .webp
```

Or directly:

```bash
npx tsx src/cli.ts <path-to-spec.json> <out-base-path>
```

The CLI prints byte sizes for each artifact and the alt text. It throws if any artifact exceeds 200 KB.

## Input spec format

See `tools/diagrams/README.md` in the marketing-site repo for the canonical reference. Minimum viable spec for a `criteria-grid` (5-card framework) layout:

```jsonc
{
  "layout": "criteria-grid",
  "header": {
    "kicker":   "BRILWORKS · YOUR KICKER",
    "title":    "Diagram title",
    "subtitle": "Diagram subtitle / context line"
  },
  "axis": {                                  // optional gradient bar with end labels
    "left":  "HIGHER IMPACT",
    "right": "LOWER IMPACT"
  },
  "cards": [                                 // exactly 5 cards required
    {
      "icon": "slider",                      // slider | files | ladder | shield | coins
      "title": "Card title",                 // string OR string[] for multi-line
      "sections": [
        { "kind": "chips",          "label": "SECTION LABEL", "chips": [{ "text": "..." }] },
        { "kind": "labelled-chips", "label": "SECTION LABEL", "items": [{ "kicker": "...", "text": "..." }] },
        { "kind": "prose",          "label": "SECTION LABEL", "lines": ["...", "..."] }
      ]
    }
    // ... 4 more cards
  ],
  "footer": {
    "centerLabel": "Source / book / guide name",
    "rightLabel":  "brilworks.com"
  },
  "alt": "Concise alt text describing the diagram."
}
```

## Worked example

Regenerating the [BRI-61](/BRI/issues/BRI-61) 5-criteria framework diagram:

```bash
cd <repo>/tools/diagrams
npm install
npm run verify-bri-61
# Output:
#   out/bri-61-v3.svg   16.6 KB
#   out/bri-61-v3.png   77.9 KB
#   out/bri-61-v3.webp  78.6 KB
```

Spec: `tools/diagrams/specs/bri-61.json` is the canonical example.

## Constraints

- **Output cap**: 200 KB per artifact. Skill throws if exceeded.
- **Card count**: `criteria-grid` requires exactly 5. Other counts not yet supported.
- **Brand-token enforcement**: any color in the spec or template not in `tools/diagrams/src/brand-tokens.ts` is rejected.
- **Layouts available**: `criteria-grid` only. Add new layouts by extending `tools/diagrams/src/templates/` and registering in `render.ts`'s `TEMPLATES` map.
- **Icons available**: `slider`, `files`, `ladder`, `shield`, `coins`. Add by editing the `ICONS` map in `templates/criteria-grid.tsx`.
- **Fonts**: SVG references the Inter stack with system fallbacks. For byte-perfect rasterization the host needs Inter installed (a future revision will embed Inter as base64).

## Adding a new layout

1. Author `tools/diagrams/src/templates/<layout-name>.tsx` exporting a JSX component + spec type.
2. Register it in `tools/diagrams/src/render.ts`'s `TEMPLATES` map.
3. Add a sample under `tools/diagrams/specs/`.
4. Document the spec shape in `tools/diagrams/README.md`.

Use only colors from `brand-tokens.ts` — runtime guard rejects anything else.

## Output handoff

After rendering, attach the artifacts to the relevant issue (`POST /api/companies/:companyId/issues/:issueId/attachments`) or commit them to the marketing-site repo for use by the blog post layout.

## Related

- [BRI-101](/BRI/issues/BRI-101) — pipeline selection + initial implementation.
- [BRI-107](/BRI/issues/BRI-107) — companion hero/lifestyle imagery skill (local Ollama + FLUX.2 Klein).
- `tools/diagrams/README.md` — full developer docs.
