#!/usr/bin/env node

/**
 * Storyblok Blog Workflow
 *
 * Pull, modify, and republish blog stories.
 *
 * Usage:
 *   node scripts/storyblok-blog.js pull <slug>                  Pull a blog and save to data/blog/
 *   node scripts/storyblok-blog.js pull-all                     Pull all blogs to data/blog/
 *   node scripts/storyblok-blog.js push <slug>                  Push modified JSON back and publish
 *   node scripts/storyblok-blog.js push <slug> --draft          Push as draft (preflight-gated)
 *   node scripts/storyblok-blog.js push <slug> --draft \
 *        --allow-pending-draft <BRI-id> --ack-prior-draft-will-be-flushed
 *                                                              Override the preflight gate
 *   node scripts/storyblok-blog.js diff <slug>                  Show what changed vs Storyblok
 *
 * Draft-mode safety contract (BRI-247):
 *   - `--draft` runs a preflight GET and REFUSES the PUT if the target story already
 *     has `unpublished_changes: true`. Reason: an mapi PUT with `publish: 0` (or
 *     omitted publish) on such a story can flush the prior draft AND auto-publish,
 *     bypassing CEO sign-off. See docs/STORYBLOK-CMS.md.
 *   - The override path (`--allow-pending-draft BRI-id --ack-prior-draft-will-be-flushed`)
 *     is intentionally verbose. Before using it you MUST post a confirmation comment
 *     on the named issue saying you accept that any pre-existing draft on the story
 *     will be flushed/published by your PUT. The override prints the issue URL.
 *   - After every draft PUT the helper re-reads the story and aborts non-zero if
 *     `unpublished_changes` came back `false` — i.e., the auto-publish bug fired.
 *
 * Environment variables (in .env):
 *   NEXT_PUBLIC_ACCESS_TOKEN       - Storyblok CDN token (read)
 *   NEXT_PUBLIC_STORYBLOK_VERSION  - "draft" or "published"
 *   STORYBLOK_MANAGEMENT_TOKEN     - Personal access token (write)
 *   STORYBLOK_SPACE_ID             - Your Storyblok space ID
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const ROOT = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT, "data", "blog");
const ENV_PATH = path.join(ROOT, ".env");

function loadEnv() {
  if (!fs.existsSync(ENV_PATH)) return;
  const content = fs.readFileSync(ENV_PATH, "utf8");
  content.split("\n").forEach((line) => {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const val = match[2].trim().replace(/^["']|["']$/g, "");
      if (!process.env[key]) process.env[key] = val;
    }
  });
}

loadEnv();

const CDN_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
const CDN_VERSION = process.env.NEXT_PUBLIC_STORYBLOK_VERSION || "published";
const MGMT_TOKEN = process.env.STORYBLOK_MANAGEMENT_TOKEN;
const SPACE_ID = process.env.STORYBLOK_SPACE_ID;

// ---------------------------------------------------------------------------
// HTTP helpers
// ---------------------------------------------------------------------------

function request(urlString, options = {}, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(urlString);
    const reqOptions = {
      hostname: parsedUrl.hostname,
      path: parsedUrl.pathname + parsedUrl.search,
      method: options.method || "GET",
      headers: options.headers || {},
    };
    const req = https.request(reqOptions, (res) => {
      // Follow redirects (301, 302, 307, 308)
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        if (redirectCount >= 5) return reject(new Error("Too many redirects"));
        const redirectUrl = new URL(res.headers.location, urlString).toString();
        return resolve(request(redirectUrl, options, redirectCount + 1));
      }

      let body = "";
      res.on("data", (chunk) => (body += chunk));
      res.on("end", () => {
        if (res.statusCode >= 400) {
          reject(
            new Error(
              `HTTP ${res.statusCode}: ${body.substring(0, 500)}`
            )
          );
        } else {
          resolve({ status: res.statusCode, data: JSON.parse(body) });
        }
      });
    });
    req.on("error", reject);
    if (options.body) req.write(options.body);
    req.end();
  });
}

function cdnGet(endpoint, params = {}) {
  const query = new URLSearchParams({ token: CDN_TOKEN, version: CDN_VERSION, ...params });
  const url = `https://api.storyblok.com/v2/cdn/${endpoint}?${query}`;
  return request(url, { method: "GET" });
}

function mgmtRequest(method, endpoint, body = null) {
  if (!MGMT_TOKEN) throw new Error("STORYBLOK_MANAGEMENT_TOKEN is not set in .env");
  if (!SPACE_ID) throw new Error("STORYBLOK_SPACE_ID is not set in .env");

  const url = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/${endpoint}`;
  const options = {
    method,
    headers: {
      Authorization: MGMT_TOKEN,
      "Content-Type": "application/json",
    },
  };
  if (body) options.body = JSON.stringify(body);
  return request(url, options);
}

// ---------------------------------------------------------------------------
// JSON <-> Storyblok mapping
// ---------------------------------------------------------------------------

/**
 * Convert raw Storyblok story to our local JSON format.
 */
function storyToJson(story) {
  const c = story.content;
  return {
    slug: story.slug,
    url: `/${story.full_slug}/`,
    category: c.Category || "",
    subcategory: c.subcategory || [],
    author: c.BlogAuthor || "",
    publishedAt: story.published_at || story.first_published_at || "",
    updatedAt: story.updated_at || "",
    metadata: {
      title: c.metatags?.title || c.title || story.name,
      description: c.metatags?.description || "",
      canonical: `{BASE_URL}${story.full_slug}/`,
      ogImage: c.metatags?.og_image || c.image?.filename || "",
      ogTitle: c.metatags?.og_title || c.metatags?.title || c.title || "",
      ogDescription: c.metatags?.og_description || c.metatags?.description || "",
    },
    content: {
      hero: {
        headline: c.title || story.name,
        image: c.image?.filename || "",
        mobileImage: c.mobile_banner?.filename || "",
      },
      body: {
        intro: c.content || "",
        section1: c.Content_1 || "",
        section2: c.Content_2 || "",
        section3: c.Content_3 || "",
      },
      faq: (c.FAQ || []).map((item) => ({
        question: item.Question || "",
        answer: item.Answer || "",
      })),
    },
    storyblok: {
      id: story.id,
      uuid: story.uuid,
      groupId: story.group_id,
      position: story.position,
      name: story.name,
    },
    _raw_content: c,
  };
}

/**
 * Convert our local JSON back to Storyblok story content for the Management API.
 * Merges edits on top of _raw_content so unmodified fields are preserved.
 */
function jsonToStoryContent(localJson) {
  // Start from the raw content (preserves all fields we don't map)
  const content = { ...(localJson._raw_content || {}) };

  // Apply mapped fields back
  content.title = localJson.content?.hero?.headline || content.title;
  content.Category = localJson.category || content.Category;
  content.subcategory = localJson.subcategory || content.subcategory;
  content.BlogAuthor = localJson.author || content.BlogAuthor;

  // Images
  if (localJson.content?.hero?.image && content.image) {
    content.image = { ...content.image, filename: localJson.content.hero.image };
  }
  if (localJson.content?.hero?.mobileImage && content.mobile_banner) {
    content.mobile_banner = { ...content.mobile_banner, filename: localJson.content.hero.mobileImage };
  }

  // Body HTML sections
  if (localJson.content?.body) {
    if (localJson.content.body.intro !== undefined) content.content = localJson.content.body.intro;
    if (localJson.content.body.section1 !== undefined) content.Content_1 = localJson.content.body.section1;
    if (localJson.content.body.section2 !== undefined) content.Content_2 = localJson.content.body.section2;
    if (localJson.content.body.section3 !== undefined) content.Content_3 = localJson.content.body.section3;
  }

  // FAQ
  if (localJson.content?.faq) {
    content.FAQ = localJson.content.faq.map((item, i) => {
      const existing = (localJson._raw_content?.FAQ || [])[i] || {};
      return {
        _uid: existing._uid || crypto.randomUUID(),
        Question: item.question,
        Answer: item.answer,
        component: "Q&A",
      };
    });
  }

  // Metatags
  if (localJson.metadata) {
    content.metatags = {
      ...(content.metatags || {}),
      title: localJson.metadata.title,
      description: localJson.metadata.description,
      og_image: localJson.metadata.ogImage,
      og_title: localJson.metadata.ogTitle,
      og_description: localJson.metadata.ogDescription,
    };
  }

  return content;
}

// ---------------------------------------------------------------------------
// Commands
// ---------------------------------------------------------------------------

async function pull(slug) {
  if (!CDN_TOKEN) {
    console.error("Error: NEXT_PUBLIC_ACCESS_TOKEN is not set in .env");
    process.exit(1);
  }

  console.log(`Pulling blog: ${slug}`);

  const { data } = await cdnGet(`stories/blog/${slug}`);
  const story = data.story;

  if (!story) {
    console.error(`Story not found: blog/${slug}`);
    process.exit(1);
  }

  const json = storyToJson(story);

  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  const filePath = path.join(DATA_DIR, `${slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(json, null, 2) + "\n");

  console.log(`Saved: data/blog/${slug}.json`);
  console.log(`  Title:    ${json.metadata.title}`);
  console.log(`  Author:   ${json.author}`);
  console.log(`  Category: ${json.category}`);
  console.log(`  Story ID: ${json.storyblok.id}`);
}

async function pullAll() {
  if (!CDN_TOKEN) {
    console.error("Error: NEXT_PUBLIC_ACCESS_TOKEN is not set in .env");
    process.exit(1);
  }

  console.log("Pulling all blogs...");

  let page = 1;
  let total = 0;

  while (true) {
    const { data } = await cdnGet("stories", {
      starts_with: "blog/",
      per_page: 100,
      page,
      filter_query: JSON.stringify({ component: { in: "article" } }),
    });

    const stories = data.stories || [];
    if (stories.length === 0) break;

    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

    for (const story of stories) {
      const json = storyToJson(story);
      const filePath = path.join(DATA_DIR, `${story.slug}.json`);
      fs.writeFileSync(filePath, JSON.stringify(json, null, 2) + "\n");
      total++;
      console.log(`  [${total}] ${story.slug}`);
    }

    if (stories.length < 100) break;
    page++;
  }

  console.log(`\nDone. Pulled ${total} blogs to data/blog/`);
}

async function getStoryById(storyId) {
  const { data } = await mgmtRequest("GET", `stories/${storyId}`);
  return data.story;
}

function issueIdLooksValid(id) {
  return typeof id === "string" && /^[A-Z]{2,6}-\d+$/.test(id);
}

/**
 * Pure decision function for the draft-mode preflight gate.
 *
 * Returns one of:
 *   { decision: "proceed" }                       — safe to PUT
 *   { decision: "proceed-with-override", issueId } — pending draft exists, override accepted
 *   { decision: "refuse", reason }                 — caller MUST NOT PUT
 *
 * Inputs are plain values so this can be unit-tested without hitting Storyblok.
 */
function evaluateDraftGate({ publish, hasPendingDraft, allowPendingDraftIssueId, ackPriorDraftWillBeFlushed }) {
  if (publish) return { decision: "proceed" };
  if (!hasPendingDraft) return { decision: "proceed" };
  if (!allowPendingDraftIssueId || !ackPriorDraftWillBeFlushed) {
    return {
      decision: "refuse",
      reason: "story has unpublished_changes:true and override flags were not provided",
    };
  }
  if (!issueIdLooksValid(allowPendingDraftIssueId)) {
    return {
      decision: "refuse",
      reason: `--allow-pending-draft "${allowPendingDraftIssueId}" is not a valid issue id`,
    };
  }
  return { decision: "proceed-with-override", issueId: allowPendingDraftIssueId };
}

async function push(slug, opts = {}) {
  const { publish = true, allowPendingDraftIssueId = null, ackPriorDraftWillBeFlushed = false } = opts;
  const filePath = path.join(DATA_DIR, `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    console.error(`File not found: data/blog/${slug}.json`);
    console.error("Pull the blog first: node scripts/storyblok-blog.js pull " + slug);
    process.exit(1);
  }

  const localJson = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const storyId = localJson.storyblok?.id;

  if (!storyId) {
    console.error("Missing storyblok.id in JSON — cannot push without a story ID.");
    process.exit(1);
  }

  console.log(`Pushing blog: ${slug} (story ID: ${storyId}, mode: ${publish ? "PUBLISH" : "DRAFT"})`);

  // -------------------------------------------------------------------------
  // Preflight (BRI-247 publish-gate hardening)
  //
  // Always GET the story first so we can detect a pending pre-existing draft.
  // The mapi PUT with `publish: 0` (or omitted publish) on a story whose
  // current state is `unpublished_changes: true` has been observed to FLUSH
  // the prior draft AND publish (BRI-206 incident, story 687307780). A draft
  // PUT in that state silently bypasses CEO sign-off, so we refuse unless
  // the operator explicitly opts in via two flags + an audited issue id.
  // -------------------------------------------------------------------------
  const before = await getStoryById(storyId);
  const hasPendingDraft = before?.unpublished_changes === true;
  console.log(
    `  Preflight: unpublished_changes=${before?.unpublished_changes}, ` +
      `published_at=${before?.published_at || "(never)"}`,
  );

  const gate = evaluateDraftGate({
    publish,
    hasPendingDraft,
    allowPendingDraftIssueId,
    ackPriorDraftWillBeFlushed,
  });

  if (gate.decision === "refuse") {
    console.error("");
    console.error(`REFUSED: ${gate.reason}.`);
    console.error("");
    console.error("A draft PUT on a story with `unpublished_changes: true` can flush the prior");
    console.error("draft AND auto-publish (BRI-206 incident). Resolve before retrying:");
    console.error("  1. Open the story in Storyblok editor and either Publish or Discard the");
    console.error("     pending draft, OR coordinate with whoever owns it.");
    console.error(`     https://app.storyblok.com/#/me/spaces/${SPACE_ID}/stories/0/0/${storyId}/edit`);
    console.error("");
    console.error("If you intentionally want to flush + publish the prior draft as part of THIS");
    console.error("push, post a confirmation comment on the parent issue and re-run with:");
    console.error("");
    console.error(
      `  push ${slug} --draft --allow-pending-draft BRI-### --ack-prior-draft-will-be-flushed`,
    );
    console.error("");
    process.exit(2);
  }

  if (gate.decision === "proceed-with-override") {
    console.warn("");
    console.warn(`OVERRIDE ACTIVE: --allow-pending-draft ${gate.issueId}`);
    console.warn(
      "Helper is proceeding with the draft PUT despite a pre-existing pending draft. The prior",
    );
    console.warn("draft is expected to be flushed/published by this PUT. Confirmation comment must");
    console.warn(`have been posted on issue ${gate.issueId} BEFORE this run.`);
    console.warn("");
  }

  const content = jsonToStoryContent(localJson);

  const payload = {
    story: {
      name: localJson.storyblok.name || localJson.metadata.title,
      slug: localJson.slug,
      content,
    },
    ...(publish ? { publish: 1 } : {}),
  };

  const { data } = await mgmtRequest("PUT", `stories/${storyId}`, payload);

  const action = publish ? "Published" : "Saved as draft";
  console.log(`${action}: ${data.story?.full_slug || slug}`);
  console.log(`  Updated at: ${data.story?.updated_at}`);

  // -------------------------------------------------------------------------
  // Post-PUT verification (BRI-247).
  // For `--draft` mode, verify the PUT did NOT auto-publish. If it did, exit
  // non-zero so an automated/scripted push surfaces the regression instead
  // of silently shipping the page live.
  // -------------------------------------------------------------------------
  const after = data.story || (await getStoryById(storyId));
  const stayedDraft = after?.unpublished_changes === true;
  if (!publish) {
    if (!stayedDraft) {
      console.error("");
      console.error("AUTO-PUBLISH DETECTED: a `--draft` PUT resulted in `unpublished_changes: false`.");
      console.error(`  story_id=${storyId}, published_at=${after?.published_at}`);
      console.error("This is the BRI-206 regression. The page may now be live; verify and roll back");
      console.error("via Storyblok editor history if the change was not CEO-approved for publication.");
      console.error("");
      process.exit(3);
    }
    console.log("  Post-PUT verify: unpublished_changes=true (draft preserved). OK.");
  }
}

async function diff(slug) {
  const filePath = path.join(DATA_DIR, `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    console.error(`File not found: data/blog/${slug}.json`);
    process.exit(1);
  }

  console.log(`Comparing local data/blog/${slug}.json vs Storyblok...\n`);

  const localJson = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const { data } = await cdnGet(`stories/blog/${slug}`);
  const remoteJson = storyToJson(data.story);

  // Compare key fields
  const fields = [
    ["metadata.title", localJson.metadata?.title, remoteJson.metadata?.title],
    ["metadata.description", localJson.metadata?.description, remoteJson.metadata?.description],
    ["category", localJson.category, remoteJson.category],
    ["author", localJson.author, remoteJson.author],
    ["content.hero.headline", localJson.content?.hero?.headline, remoteJson.content?.hero?.headline],
    ["content.body.intro (length)", localJson.content?.body?.intro?.length || 0, remoteJson.content?.body?.intro?.length || 0],
    ["content.body.section1 (length)", localJson.content?.body?.section1?.length || 0, remoteJson.content?.body?.section1?.length || 0],
    ["content.body.section2 (length)", localJson.content?.body?.section2?.length || 0, remoteJson.content?.body?.section2?.length || 0],
    ["content.body.section3 (length)", localJson.content?.body?.section3?.length || 0, remoteJson.content?.body?.section3?.length || 0],
    ["content.faq count", localJson.content?.faq?.length || 0, remoteJson.content?.faq?.length || 0],
  ];

  let changes = 0;
  for (const [field, local, remote] of fields) {
    if (String(local) !== String(remote)) {
      console.log(`  CHANGED  ${field}`);
      console.log(`    local:  ${String(local).substring(0, 100)}`);
      console.log(`    remote: ${String(remote).substring(0, 100)}`);
      console.log();
      changes++;
    }
  }

  if (changes === 0) {
    console.log("  No differences found in tracked fields.");
  } else {
    console.log(`${changes} field(s) differ. Run 'push ${slug}' to publish changes.`);
  }
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function parsePushFlags(rawArgs) {
  const opts = {
    publish: true,
    allowPendingDraftIssueId: null,
    ackPriorDraftWillBeFlushed: false,
  };
  for (let i = 0; i < rawArgs.length; i++) {
    const arg = rawArgs[i];
    if (arg === "--draft") {
      opts.publish = false;
    } else if (arg === "--allow-pending-draft") {
      opts.allowPendingDraftIssueId = rawArgs[i + 1];
      i++;
    } else if (arg === "--ack-prior-draft-will-be-flushed") {
      opts.ackPriorDraftWillBeFlushed = true;
    } else {
      console.error(`Unknown push flag: ${arg}`);
      process.exit(1);
    }
  }
  return opts;
}

async function main() {
  const [command, slug, ...rest] = process.argv.slice(2);

  if (!command) {
    console.log(`
Storyblok Blog Workflow
=======================

Usage:
  node scripts/storyblok-blog.js pull <slug>                  Pull a blog to data/blog/
  node scripts/storyblok-blog.js pull-all                     Pull all blogs
  node scripts/storyblok-blog.js push <slug>                  Push & publish changes (publish:1)
  node scripts/storyblok-blog.js push <slug> --draft          Push as draft, preflight-gated
  node scripts/storyblok-blog.js push <slug> --draft \\
       --allow-pending-draft <BRI-id> --ack-prior-draft-will-be-flushed
                                                              Override gate (requires confirmation
                                                              comment on the named issue first)
  node scripts/storyblok-blog.js diff <slug>                  Compare local vs remote

Workflow:
  1. pull <slug>       → saves JSON to data/blog/<slug>.json
  2. Edit the JSON     → inject CTAs, modify content, update metadata
  3. push <slug>       → publishes changes back to Storyblok

Draft-mode safety (BRI-247):
  - --draft does a preflight GET and refuses if the story has
    \`unpublished_changes: true\`. See docs/STORYBLOK-CMS.md.
  - After every --draft PUT the helper re-checks unpublished_changes and
    exits non-zero if Storyblok auto-published the change.

Environment (.env):
  NEXT_PUBLIC_ACCESS_TOKEN        CDN token (read)
  STORYBLOK_MANAGEMENT_TOKEN      Personal access token (write)
  STORYBLOK_SPACE_ID              Your space ID
`);
    return;
  }

  try {
    switch (command) {
      case "pull":
        if (!slug) { console.error("Usage: pull <slug>"); process.exit(1); }
        await pull(slug);
        break;
      case "pull-all":
        await pullAll();
        break;
      case "push": {
        if (!slug) { console.error("Usage: push <slug> [--draft] [--allow-pending-draft <id> --ack-prior-draft-will-be-flushed]"); process.exit(1); }
        const opts = parsePushFlags(rest);
        await push(slug, opts);
        break;
      }
      case "diff":
        if (!slug) { console.error("Usage: diff <slug>"); process.exit(1); }
        await diff(slug);
        break;
      default:
        console.error(`Unknown command: ${command}`);
        process.exit(1);
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

// Export pure helpers for unit tests; only invoke main() when run directly.
if (require.main === module) {
  main();
} else {
  module.exports = { evaluateDraftGate, issueIdLooksValid, parsePushFlags };
}
