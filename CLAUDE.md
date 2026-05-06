# CLAUDE.md — brilworks-public-site

Operational notes for agents working in this repo. Pair with the Brilworks
marketing pipeline (parent: `apps/Brilworks/`) and the Paperclip board.

## Storyblok CMS pushes

**ALL** programmatic edits to Storyblok blog stories MUST go through
`scripts/storyblok-blog.js`. Do **not** use direct `curl` / `mapi.storyblok.com`
PUTs in agent runs — they bypass the BRI-247 publish gate and were the
mechanism behind the BRI-206 unintended-publish incident.

Canonical runbook: [docs/STORYBLOK-CMS.md](./docs/STORYBLOK-CMS.md)

Quick rules:

- `push <slug>` — publishes immediately. Use only when CEO has signed off
  on the exact local-JSON diff.
- `push <slug> --draft` — preflight-gated. Refuses with exit 2 if the
  target story already has `unpublished_changes: true`. Verifies post-PUT
  that Storyblok did not auto-publish; exits 3 if it did (BRI-206 regression).
- Override path (`--allow-pending-draft BRI-### --ack-prior-draft-will-be-flushed`)
  is reserved for edge cases. Pre-condition: a confirmation comment posted
  on the named issue first.

Tests: `node scripts/__tests__/storyblok-blog.test.js`

## Credentials

Storyblok management-API creds live in
`apps/Brilworks/cred/credentials.env` (variable names: `STORYBLOK_TOKEN`,
`STORYBLOK_SPACE_ID`). The variable name is `STORYBLOK_TOKEN`, not
`STORYBLOK_MANAGEMENT_TOKEN` as the in-repo `.env.example` suggests — either
remap before invoking the helper or run with the env var explicitly set.

`bri-work/brilworks-public-site/.env.example` lists only the read-side CDN
token; the management token must come from the Brilworks creds path above.
