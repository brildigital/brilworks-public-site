#!/usr/bin/env node

/**
 * Storyblok Blog Workflow
 *
 * Pull, modify, and republish blog stories.
 *
 * Usage:
 *   node scripts/storyblok-blog.js pull <slug>          Pull a blog and save to data/blog/
 *   node scripts/storyblok-blog.js pull-all             Pull all blogs to data/blog/
 *   node scripts/storyblok-blog.js push <slug>          Push modified JSON back and publish
 *   node scripts/storyblok-blog.js push <slug> --draft  Push as draft (don't publish)
 *   node scripts/storyblok-blog.js diff <slug>          Show what changed vs Storyblok
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

async function push(slug, publish = true) {
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

  console.log(`Pushing blog: ${slug} (story ID: ${storyId})`);

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

async function main() {
  const [command, slugOrFlag, flag] = process.argv.slice(2);

  if (!command) {
    console.log(`
Storyblok Blog Workflow
=======================

Usage:
  node scripts/storyblok-blog.js pull <slug>          Pull a blog to data/blog/
  node scripts/storyblok-blog.js pull-all             Pull all blogs
  node scripts/storyblok-blog.js push <slug>          Push & publish changes
  node scripts/storyblok-blog.js push <slug> --draft  Push as draft only
  node scripts/storyblok-blog.js diff <slug>          Compare local vs remote

Workflow:
  1. pull <slug>       → saves JSON to data/blog/<slug>.json
  2. Edit the JSON     → inject CTAs, modify content, update metadata
  3. push <slug>       → publishes changes back to Storyblok

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
        if (!slugOrFlag) { console.error("Usage: pull <slug>"); process.exit(1); }
        await pull(slugOrFlag);
        break;
      case "pull-all":
        await pullAll();
        break;
      case "push":
        if (!slugOrFlag) { console.error("Usage: push <slug>"); process.exit(1); }
        await push(slugOrFlag, flag !== "--draft");
        break;
      case "diff":
        if (!slugOrFlag) { console.error("Usage: diff <slug>"); process.exit(1); }
        await diff(slugOrFlag);
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

main();
