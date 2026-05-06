# Storyblok CMS push runbook

This is the **only sanctioned path** for programmatic edits to Storyblok blog
stories from this repo. Manual `curl` against `mapi.storyblok.com` is
discouraged — it bypasses the safety gates documented here and was the root
cause of the BRI-206 unintended-publish incident.

## TL;DR

```bash
# 1. Pull current Storyblok content into local JSON
node scripts/storyblok-blog.js pull <slug>

# 2. Edit data/blog/<slug>.json

# 3a. Stage as draft (preflight-gated, safe default for hygiene patches)
node scripts/storyblok-blog.js push <slug> --draft

# 3b. Publish immediately (only when CEO has signed off on the exact diff)
node scripts/storyblok-blog.js push <slug>
```

## Why a gate is needed (BRI-247 background)

During [BRI-206](/BRI/issues/BRI-206), an `mapi` PUT against the
`/blog/java-stream-api/` story (`687307780`) was sent with `publish: 0` in
the body. The story already had `unpublished_changes: true` from a prior
draft sitting unpublished. The PUT auto-published the story — `publish: 0`
did **not** keep the story in draft state.

Saved engineering memory (`feedback-storyblok-put-publish-zero-still-publishes.md`):

> on stories with `unpublished_changes: True`, mapi PUT with `publish: 0`
> flushes the draft AND publishes; do not assume draft-only.

The harm on BRI-206 was procedural — content was already CEO-approved — but
the strict per-page CEO gate in the Wave-1/2/3 hygiene brief was bypassed by
API behavior. We close that gate here.

## What `--draft` does now

`scripts/storyblok-blog.js push <slug> --draft`:

1. **Preflight GET** — fetches the story state via `mapi`.
2. **Refuses if a pending draft already exists** (`unpublished_changes: true`).
   The helper exits with code `2` and prints the Storyblok editor URL so the
   operator can resolve the prior draft (Publish or Discard) before retrying.
3. **PUT without the `publish` field** — sends the new content with no
   `publish` key at all (rather than `publish: 0`, which is the bug surface).
4. **Post-PUT verify** — re-reads the story and asserts that
   `unpublished_changes: true` came back. If Storyblok still auto-published
   the change, the helper exits with code `3` so the regression surfaces in
   any script/CI invoking it.

## Override path (rare, audited)

If an operator legitimately wants to write over a pre-existing draft and is
willing to accept that the prior draft will be flushed/published, both flags
must be passed:

```bash
node scripts/storyblok-blog.js push <slug> --draft \
  --allow-pending-draft BRI-### \
  --ack-prior-draft-will-be-flushed
```

**Pre-conditions for using the override (enforced socially, not by the
script):**

1. Operator has posted a confirmation comment on the named issue
   (`BRI-###`) explicitly acknowledging that the override will be used and
   that any pre-existing draft on the target story will be flushed.
2. The named issue is the parent/owner issue for this CMS push — not an
   unrelated issue.
3. The override is reserved for real edge cases (e.g. recovering from a
   stuck draft that was abandoned by another agent). Routine hygiene
   patches must use the gated path.

The `--allow-pending-draft` value is validated against the
`^[A-Z]{2,6}-\d+$` issue-id pattern. Both flags are required together; a
malformed id or a missing ack flag falls through to the refusal path.

## Hypotheses considered + chosen approach (BRI-247)

| H  | Hypothesis | Outcome |
|----|---|---|
| H1 | `force_unpublished_changes: false` flag prevents auto-publish | Per Storyblok docs the flag's purpose is the inverse (forcing the story to be marked dirty even when content didn't change). Cannot rely on it as a draft-preserve switch; not an enforceable gate even if it works for some cases. |
| H2 | Content-fragment-level `PATCH` instead of full-content `PUT` | The Storyblok management API does not expose a story-content `PATCH`; only `POST`/`PUT`/`DELETE` on `/v1/spaces/{id}/stories/{story_id}`. Not viable without a different endpoint. |
| H3 | Wrapper helper that does "verify clean state → PUT → verify clean post-state" with a hard halt for human confirmation between them | **Chosen.** Independent of mapi quirks. Works whether the bug is `publish:0`-specific or also fires on `omit publish`. Makes the override step audit-trailable in code review + agent task logs. |

H3 was chosen because it's the only approach that survives any future
Storyblok semantic change. H1/H2 fixes assume specific API behavior that
Storyblok could change without notice; H3 enforces the CEO-gate at the
caller level so the human-in-the-loop step is structural, not advisory.

## Future hardening (out of scope for BRI-247)

- **Storyblok Releases** — Storyblok supports a Releases workflow where
  changes are staged in a release, previewed, and published atomically.
  Adopting Releases would replace the `--draft` PUT pattern entirely and
  give CEO a single Publish-button preview surface. Tracked separately if
  hygiene throughput requires it.
- **Confirmation-comment auto-verification** — the override could
  programmatically read the named issue's comment thread via the Paperclip
  API and refuse unless a structured confirmation marker is present in the
  last N comments. Not built today; the social pre-condition above is the
  current contract.

## Tests

```bash
node scripts/__tests__/storyblok-blog.test.js
```

The pure-function gate (`evaluateDraftGate`) is tested for: clean-draft,
dirty-draft-no-override, dirty-draft-with-partial-override (each flag
alone), malformed-issue-id, and valid override.
