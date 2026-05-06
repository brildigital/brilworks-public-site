#!/usr/bin/env node

/**
 * Unit tests for the BRI-247 publish-gate hardening.
 *
 * Run: node scripts/__tests__/storyblok-blog.test.js
 *
 * Pure-function tests only — no Storyblok network calls.
 */

const { evaluateDraftGate, issueIdLooksValid, parsePushFlags } = require("../storyblok-blog.js");

let failed = 0;

function assertEq(actual, expected, label) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) {
    console.log(`  ok  ${label}`);
  } else {
    console.error(`  FAIL ${label}\n    expected: ${e}\n    actual:   ${a}`);
    failed++;
  }
}

console.log("evaluateDraftGate");
assertEq(
  evaluateDraftGate({ publish: true, hasPendingDraft: true }),
  { decision: "proceed" },
  "publish=true bypasses the gate even with pending draft",
);
assertEq(
  evaluateDraftGate({ publish: false, hasPendingDraft: false }),
  { decision: "proceed" },
  "draft on clean story proceeds",
);
assertEq(
  evaluateDraftGate({
    publish: false,
    hasPendingDraft: true,
    allowPendingDraftIssueId: null,
    ackPriorDraftWillBeFlushed: false,
  }),
  {
    decision: "refuse",
    reason: "story has unpublished_changes:true and override flags were not provided",
  },
  "draft on dirty story without override is refused",
);
assertEq(
  evaluateDraftGate({
    publish: false,
    hasPendingDraft: true,
    allowPendingDraftIssueId: "BRI-247",
    ackPriorDraftWillBeFlushed: false,
  }),
  {
    decision: "refuse",
    reason: "story has unpublished_changes:true and override flags were not provided",
  },
  "issue id alone (no ack flag) is still refused",
);
assertEq(
  evaluateDraftGate({
    publish: false,
    hasPendingDraft: true,
    allowPendingDraftIssueId: null,
    ackPriorDraftWillBeFlushed: true,
  }),
  {
    decision: "refuse",
    reason: "story has unpublished_changes:true and override flags were not provided",
  },
  "ack flag alone (no issue id) is still refused",
);
assertEq(
  evaluateDraftGate({
    publish: false,
    hasPendingDraft: true,
    allowPendingDraftIssueId: "not-an-id",
    ackPriorDraftWillBeFlushed: true,
  }),
  {
    decision: "refuse",
    reason: '--allow-pending-draft "not-an-id" is not a valid issue id',
  },
  "malformed issue id is rejected",
);
assertEq(
  evaluateDraftGate({
    publish: false,
    hasPendingDraft: true,
    allowPendingDraftIssueId: "BRI-247",
    ackPriorDraftWillBeFlushed: true,
  }),
  { decision: "proceed-with-override", issueId: "BRI-247" },
  "valid issue id + ack flag unlocks the gate",
);

console.log("issueIdLooksValid");
assertEq(issueIdLooksValid("BRI-247"), true, "BRI-247 is valid");
assertEq(issueIdLooksValid("PAP-1"), true, "PAP-1 is valid");
assertEq(issueIdLooksValid("bri-247"), false, "lowercase prefix is invalid");
assertEq(issueIdLooksValid("BRI247"), false, "missing hyphen is invalid");
assertEq(issueIdLooksValid(""), false, "empty string is invalid");
assertEq(issueIdLooksValid(null), false, "null is invalid");

console.log("parsePushFlags");
assertEq(
  parsePushFlags([]),
  { publish: true, allowPendingDraftIssueId: null, ackPriorDraftWillBeFlushed: false },
  "no flags → publish:true",
);
assertEq(
  parsePushFlags(["--draft"]),
  { publish: false, allowPendingDraftIssueId: null, ackPriorDraftWillBeFlushed: false },
  "--draft → publish:false",
);
assertEq(
  parsePushFlags([
    "--draft",
    "--allow-pending-draft",
    "BRI-247",
    "--ack-prior-draft-will-be-flushed",
  ]),
  {
    publish: false,
    allowPendingDraftIssueId: "BRI-247",
    ackPriorDraftWillBeFlushed: true,
  },
  "all override flags parsed",
);

console.log("");
if (failed > 0) {
  console.error(`${failed} assertion(s) failed`);
  process.exit(1);
}
console.log("All assertions passed.");
