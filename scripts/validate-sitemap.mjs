#!/usr/bin/env node
// Validate sitemap URLs against three SEO rules:
//   1. URL responds with HTTP 200.
//   2. URL HTML does NOT carry <meta name="robots" content="...noindex...">.
//   3. URL is self-canonical (link rel="canonical" equals the URL, or is absent).
//
// Reads the static source-of-truth array the runtime XML sitemap uses:
//   src/app/components/lib/constants.js -> sitemapData
// (Blog URLs come from Storyblok at request time via getBlogForSitemap() and
// cannot be validated at build time without a live CDN fetch. Re-run the GSC
// resubmit step after deploy to confirm Storyblok blog warnings are clean.)
//
// Usage:
//   node scripts/validate-sitemap.mjs              # uses live www.brilworks.com URLs as-listed
//   BASE_URL=https://dev.brilworks.com node scripts/validate-sitemap.mjs
//   CONCURRENCY=20 node scripts/validate-sitemap.mjs
//
// Exits non-zero on any violation. Skips network calls when SKIP_NETWORK=1
// (lets CI run the structural source-list check without a live deploy).

import { readFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const CONSTANTS_PATH = resolve(__dirname, "../src/app/components/lib/constants.js");

const CONCURRENCY = Number.parseInt(process.env.CONCURRENCY || "10", 10);
const TIMEOUT_MS = Number.parseInt(process.env.TIMEOUT_MS || "20000", 10);
const SKIP_NETWORK = process.env.SKIP_NETWORK === "1";
const BASE_URL_OVERRIDE = process.env.BASE_URL || "";

const META_ROBOTS_RE =
  /<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["'][^>]*>/i;
const CANONICAL_RE =
  /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*>/i;

async function loadSitemapUrls() {
  // constants.js uses ESM `export const` in a .js file, which Node treats as CommonJS
  // by default (no "type": "module" in package.json — Next.js handles transpilation
  // at build time, not Node directly). Extract URLs by scanning the relevant
  // array textually rather than importing the module.
  const source = await readFile(CONSTANTS_PATH, "utf8");
  const arrays = ["sitemapData"];
  const urls = [];
  for (const name of arrays) {
    const start = source.indexOf(`export const ${name} = [`);
    if (start === -1) {
      throw new Error(`constants.js is missing 'export const ${name} = ['`);
    }
    // Find the matching closing bracket by depth-tracking from the opening `[`.
    const openBracket = source.indexOf("[", start);
    let depth = 0;
    let end = -1;
    for (let i = openBracket; i < source.length; i++) {
      const ch = source[i];
      if (ch === "[") depth++;
      else if (ch === "]") {
        depth--;
        if (depth === 0) {
          end = i;
          break;
        }
      }
    }
    if (end === -1) {
      throw new Error(`Could not find end of array '${name}' in constants.js`);
    }
    const block = source.slice(openBracket, end + 1);
    const locRe = /loc:\s*["']([^"']+)["']/g;
    let m;
    while ((m = locRe.exec(block)) !== null) {
      urls.push(m[1]);
    }
  }
  return urls;
}

function rewriteForBase(url) {
  if (!BASE_URL_OVERRIDE) return url;
  try {
    const parsed = new URL(url);
    const base = new URL(BASE_URL_OVERRIDE);
    parsed.protocol = base.protocol;
    parsed.host = base.host;
    return parsed.toString();
  } catch {
    return url;
  }
}

function normalizeForCompare(url) {
  // Treat trailing-slash and absolute/relative forms as equivalent for self-canonical compare.
  try {
    const u = new URL(url, "https://www.brilworks.com");
    let path = u.pathname;
    if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
    return `${u.origin}${path}${u.search}`;
  } catch {
    return url;
  }
}

async function fetchWithTimeout(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, {
      redirect: "manual",
      headers: {
        "User-Agent": "brilworks-sitemap-validator/1.0",
        Accept: "text/html,*/*",
      },
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timer);
  }
}

function classify(url, status, body) {
  const violations = [];
  if (status !== 200) {
    violations.push(`non-200 status (${status})`);
    return violations;
  }
  const robotsMatch = body.match(META_ROBOTS_RE);
  if (robotsMatch && /\bnoindex\b/i.test(robotsMatch[1])) {
    violations.push(`meta robots includes noindex ("${robotsMatch[1].trim()}")`);
  }
  const canonicalMatch = body.match(CANONICAL_RE);
  if (canonicalMatch) {
    const declared = normalizeForCompare(canonicalMatch[1]);
    const own = normalizeForCompare(url);
    if (declared !== own) {
      violations.push(`canonical mismatch (declared ${canonicalMatch[1]})`);
    }
  }
  return violations;
}

async function check(url) {
  const target = rewriteForBase(url);
  try {
    const res = await fetchWithTimeout(target);
    if (res.status >= 300 && res.status < 400) {
      // Treat redirects as non-200 — sitemap should expose the final canonical URL.
      return {
        url,
        target,
        status: res.status,
        violations: [`redirect ${res.status} -> ${res.headers.get("location")}`],
      };
    }
    const body = await res.text();
    return { url, target, status: res.status, violations: classify(target, res.status, body) };
  } catch (err) {
    return {
      url,
      target,
      status: 0,
      violations: [`fetch error: ${err.message || err}`],
    };
  }
}

async function pool(items, worker, concurrency) {
  const results = new Array(items.length);
  let cursor = 0;
  async function run() {
    while (true) {
      const i = cursor++;
      if (i >= items.length) return;
      results[i] = await worker(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, run));
  return results;
}

async function main() {
  const urls = await loadSitemapUrls();
  console.log(`Loaded ${urls.length} sitemap URLs from constants.js`);

  // Structural check: every URL must be absolute. Duplicates are reported
  // as warnings since sitemap.js dedupes at runtime.
  const seen = new Map();
  const structural = [];
  const dupWarnings = [];
  for (const u of urls) {
    if (!/^https?:\/\//i.test(u)) structural.push(`not absolute: ${u}`);
    const key = normalizeForCompare(u);
    if (seen.has(key)) dupWarnings.push(`duplicate URL in source list: ${u}`);
    else seen.set(key, u);
  }
  if (structural.length) {
    console.error("\nStructural violations:");
    for (const msg of structural) console.error(`  - ${msg}`);
  }
  if (dupWarnings.length) {
    console.warn(
      `\nWarning: ${dupWarnings.length} duplicate URL(s) in source list (deduped by sitemap.js at runtime).`
    );
  }

  if (SKIP_NETWORK) {
    console.log("\nSKIP_NETWORK=1 — skipping live HTML checks");
    process.exit(structural.length ? 1 : 0);
  }

  const results = await pool(urls, check, CONCURRENCY);
  const failed = results.filter((r) => r.violations.length > 0);
  for (const r of results) {
    const flag = r.violations.length ? "FAIL" : "ok  ";
    const tail = r.violations.length ? ` :: ${r.violations.join("; ")}` : "";
    console.log(`${flag} ${r.status || "---"} ${r.url}${tail}`);
  }

  if (failed.length || structural.length) {
    console.error(
      `\n${failed.length} URL violation(s), ${structural.length} structural issue(s). Sitemap build FAILED.`
    );
    process.exit(1);
  }
  console.log(`\nAll ${urls.length} sitemap URLs are 200, indexable, and self-canonical.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
