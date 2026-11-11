# Brilworks SEO, Technical Architecture & GEO Audit

**Site:** https://www.brilworks.com/ · **Audit date:** 11 November 2026 · **Scope:** live site, live sitemap, `brilworks-public-site` codebase

---

## 0. Executive Summary

**Overall health: 58 / 100 — Needs Improvement.** Organic search is in sustained decline and is not producing commercial demand. Search Console shows clicks down **67%** and impressions down **66%** between the first and last 90 days of the 16-month export. Of 31,953 clicks, service, hire and industry pages together earned **694 (2.1%)**. Queries about Snowflake, Databricks and data engineering — the pillar the company now leads with — earned **7 clicks** among the top 1,000 queries.

The content base is large and the new positioning is clear on the homepage, but the technical layer is working against it. The pages that carry the new strategy are the least discoverable on the site, and the 521 blog posts that earn most visibility are served in the most fragile way possible.

### Search performance at a glance (GSC, 10 Jul 2025 – 9 Nov 2026)

| Metric | Value |
|---|---|
| Total clicks / impressions / CTR | 31,953 / 11.58 M / 0.28% |
| Clicks per day, first 90 days → last 90 days | 107 → 35 (−67%) |
| Clicks per day, October 2025 → October 2026 | 99 → 26 (−74%) |
| Share of clicks from India | 66% (21,200) |
| United States | 48% of impressions, 7% of clicks, CTR 0.04%, average position 31 |
| Clicks to homepage + careers page | 30% of all clicks |
| Clicks to blog | 62% |
| Clicks to service, hire and industry pages | 2.1% |
| Branded share of clicks among the top 1,000 queries | 56% (7,357 of 13,131) |

### The six findings that matter most

| # | Finding | Evidence | Why it matters |
|---|---|---|---|
| 0 | **Traffic is falling, and what remains is brand, careers and developer tutorials from the wrong market** | GSC figures above. Top non-brand queries: "lambda expression in java", "stream api in java", "meme gen ai". The 19 hire pages hold 152,000 impressions at positions 45–68 and earned 153 clicks | The site ranks for what students search, not what buyers search. US buyers see Brilworks on page 3 or later |
| 1 | **Every blog post is rendered on demand and never cached** | 521 of 521 posts return `cache-control: private, no-store` and `x-vercel-cache: MISS`; every other template is prerendered | Each Googlebot and AI-crawler hit calls Storyblok live. One CMS slowdown or rate limit takes 72% of the indexable site down for crawlers at once |
| 2 | **Any URL under `/blog/` or `/ebooks/` returns HTTP 200** | `/blog/zzz-this-does-not-exist/` → 200 with a `noindex` tag; 13 real internal links point at such dead posts | Unlimited soft-404 space. Crawl budget is spent on pages that do not exist and deleted posts never drop out cleanly |
| 3 | **The new strategic pages are orphaned or missing from the sitemap** | `/databricks-partner/`, `/snowflake-partner/` and 3 of 4 case studies have zero internal links; 12 Data & AI service pages, 4 comparison pages and the case-study hub are absent from `sitemap.xml` | The pages meant to win "Databricks consulting partner"-type queries receive almost no internal authority |
| 4 | **The blog index contains no links to blog posts in its HTML** | `/blog/` server HTML has 0 post links; listing is fetched client-side. 84 posts have no inbound internal link at all | Posts are discoverable only through the sitemap. AI crawlers, which do not run JavaScript, cannot browse the blog |
| 5 | **The site describes Brilworks three different ways** | Homepage: "Data & AI Engineering Company". 133 pages carry `og:site_name` "AWS Consulting Partner \| Gen AI \| Product Engineering". `WebSite` schema: "mobile app and software development company" | Search engines and LLMs build an entity from repeated, consistent statements. The site currently contradicts its own `llms.txt` |

### Scorecard

| Category | Weight | Score | Basis |
|---|---|---|---|
| Technical SEO | 25% | 55 | Full crawl + code review (confirmed) |
| Content quality | 20% | 68 | Crawl metrics + sampled reading |
| On-page SEO | 15% | 62 | Full crawl (confirmed) |
| Schema / structured data | 15% | 45 | Full crawl + code review (confirmed) |
| Performance (CWV) | 10% | 60 | Lab only — field data not available |
| Image optimisation | 10% | 55 | Code + crawl |
| AI search readiness | 5% | 60 | Crawl + third-party search |

Scores are a judgement aid, not a measurement. The findings below are what to act on.

### What this audit could and could not verify

| Source | Status |
|---|---|
| Live crawl of all 726 sitemap URLs plus 153 linked or unlisted URLs | Done |
| Codebase (Next.js 16 App Router, Storyblok, Vercel behind Cloudflare) | Done |
| Lab performance, throttled mobile Chromium, 7 templates | Done — first-party resources only |
| Google Search Console — Performance export | Done. Web search, 10 Jul 2025 – 9 Nov 2026: daily chart, top 1,000 queries, top 1,000 pages, countries, devices, search appearance |
| Google Search Console — Indexing, Crawl stats, query-by-page | **Not available.** Not in the export; live browser access to Search Console was not possible from the audit environment |
| PageSpeed Insights / CrUX field data | Not available — the shared API quota was exhausted |
| Third-party entity profiles | Search-result level only; profiles were not opened individually |

GSC exports are capped at 1,000 rows: the query file covers 41% of all clicks, the page file covers nearly all. Index-coverage statements come from the crawl, not from GSC, and are marked as expected rather than observed.

---

# Part 1 — Technical SEO, Search Console & Crawl Budget

## 1.1 Google Search Console

Source: Performance export for `sc-domain:brilworks.com`, Web search, 10 July 2025 – 9 November 2026.

### Trend: a 16-month decline

| Month | Clicks | Impressions | CTR | Avg. position | Clicks / day |
|---|---|---|---|---|---|
| Aug 2025 | 2,995 | 1,212,096 | 0.25% | 38.2 | 97 |
| Oct 2025 | 3,056 | 724,726 | 0.42% | 18.8 | 99 |
| Dec 2025 | 2,686 | 1,010,698 | 0.27% | 21.2 | 87 |
| Feb 2026 | 1,917 | 761,140 | 0.25% | 18.7 | 68 |
| Apr 2026 | 987 | 418,018 | 0.24% | 25.2 | 33 |
| May 2026 | 813 | 541,674 | 0.15% | 28.0 | 26 |
| Jul 2026 | 1,743 | 517,009 | 0.34% | 29.5 | 56 |
| Aug 2026 | 1,579 | 507,525 | 0.31% | 35.9 | 51 |
| Sep 2026 | 1,141 | 337,985 | 0.34% | 25.4 | 38 |
| Oct 2026 | 799 | 321,429 | 0.25% | 27.2 | 26 |

Clicks fell steadily from December 2025, dropped sharply in April–May 2026, recovered partly in July–August, and are back at the low. The export alone cannot prove the cause. Three candidates line up with what the crawl and code show, and all three are addressed in the roadmap:

- **Repositioning without redirecting authority.** The homepage and navigation moved to Data & AI in 2026 while the pages that held rankings (Java, React, Node, mobile) lost prominence and the new pages launched without sitemap entries or internal links.
- **Informational queries losing clicks to AI answers.** The traffic base is definitional developer content ("what is a vector database", "lambda expression in java"), the query type most exposed to AI Overviews. CTR on page-one positions is far below normal (table below).
- **Technical fragility of the blog.** Uncached rendering, soft 404s and an uncrawlable blog index all date from the Next.js migration period.

### Where the clicks come from

| Segment | Clicks | Share | Impressions | CTR |
|---|---|---|---|---|
| Blog (790 URLs) | 20,250 | 62.1% | 11.81 M | 0.17% |
| Homepage | 6,188 | 19.0% | 46,774 | 13.2% |
| `/career/` | 3,727 | 11.4% | 25,745 | 14.5% |
| AI solutions + AI agent demos | 1,015 | 3.1% | 82,447 | 1.2% |
| **Service pages** | **508** | **1.6%** | 114,725 | 0.44% |
| Free tools | 284 | 0.9% | 40,123 | 0.71% |
| **Hire pages (19)** | **153** | **0.5%** | 151,972 | 0.10% |
| Use-case pages | 105 | 0.3% | 154,260 | 0.07% |
| Portfolio | 59 | 0.2% | 9,409 | 0.63% |
| **Industry pages (8)** | **33** | **0.1%** | 23,240 | 0.14% |
| Data-engineering tools | 11 | 0.0% | 1,178 | 0.93% |

The ten most-clicked pages account for 45% of clicks; 723 of the 1,000 pages earned fewer than ten clicks in 16 months, and 177 pages have over 1,000 impressions with zero clicks.

### Who is searching

| Country | Clicks | Impressions | CTR | Avg. position |
|---|---|---|---|---|
| India | 21,200 | 2,272,406 | 0.93% | 12.5 |
| United States | 2,184 | 5,616,046 | 0.04% | 31.4 |
| United Kingdom | 509 | 524,765 | 0.10% | 37.4 |
| Canada | 387 | 231,780 | 0.17% | 25.8 |
| Australia | 239 | 148,863 | 0.16% | 39.6 |

Two-thirds of clicks are from India, much of it brand and careers ("brilworks technology private limited", "brilworks careers"). In the United States — the main buyer market — the site averages position 31 and converts 0.04% of impressions.

### What people search for

| Query group (top 1,000 queries) | Clicks | Impressions |
|---|---|---|
| Brand ("brilworks" and variants) | 7,357 | 18,771 |
| Java | 1,785 | 386,936 |
| AI / generative AI / agents | 1,091 | 336,454 |
| React / React Native | 839 | 409,153 |
| Node.js | 435 | 54,841 |
| AWS / cloud | 198 | 157,583 |
| Mobile / app | 130 | 111,165 |
| **Commercial-intent queries (hire, company, services, consulting, cost) — 135 queries** | **470** | 228,446 |
| **Snowflake / Databricks / data engineering** | **7** | 2,557 |

Brand searches use four names — "brilworks", "brilworks software", "brilworks technology private limited", "brilworks technology pvt ltd" — the same naming inconsistency found in third-party profiles (section 3.1).

### Commercial queries: visible but far from page one

| Query | Impressions | Clicks | Position |
|---|---|---|---|
| aws consulting | 20,182 | 1 | 49.2 |
| aws consulting services | 14,567 | 1 | 47.5 |
| java development services | 13,024 | 1 | 52.5 |
| aws consultant | 12,875 | 4 | 26.3 |
| hire aws developers | 7,997 | 4 | 43.9 |
| hire java developers | 6,247 | 2 | 62.5 |
| nodejs development company | 6,081 | 1 | 40.9 |
| hire nodejs developers | 6,020 | 4 | 45.2 |
| hire reactjs developers | 4,439 | 1 | 52.7 |
| react native app development company | 3,550 | 2 | 54.3 |
| outsource java development | 3,282 | 2 | 25.6 |

Google associates Brilworks with these queries but ranks it on pages 3–7. This is the pattern expected when commercial pages have thin internal linking and weak external authority, which is what sections 1.4 and 3.1 found.

### Commercial pages closest to page one

These pages already rank between positions 8 and 25 and are the fastest commercial wins.

| Page | Impressions | Clicks | Position | Action |
|---|---|---|---|---|
| `/ai-ml-development-services/` | 9,823 | 20 | 23.3 | Query-led H1, add table and case study, link from the 60 AI posts |
| `/industry/healthcare-software-development/` | 3,583 | 9 | 16.6 | Link from the 21 healthcare posts; add `Service` schema |
| `/services/ai-agent-development/` | 2,786 | 5 | 15.2 | Duplicate of the main AI agent page — 301 and consolidate |
| `/application-development-services/` | 2,777 | 9 | 9.2 | Title and description rewrite for CTR |
| `/product-engineering-development-services/` | 1,584 | 3 | 8.7 | Title rewrite; make it the silo hub |
| `/embedded-software-development-services/` | 1,301 | 1 | 10.2 | Add missing canonical and schema; link from homepage |
| `/industry/manufacturing-software-development-services/` | 1,301 | 0 | 8.6 | Title and description rewrite |
| `/mobile-app-development-services/` | 1,048 | 4 | 9.8 | Query-led H1 |
| `/hire-white-label-developer/` | 9,326 | 55 | 35.3 | Not in sitemap; add it |
| `/use-case/aws-in-healthcare/` | 31,436 | 56 | 21.2 | Add canonical; link to healthcare and AWS service pages |

The eight `/use-case/*` pages hold 154,000 impressions between positions 21 and 75 with no canonical tag and at most three contextual inbound links each.

### Quick wins: high impressions, low CTR, already on or near page one

| Page | Impressions | Clicks | CTR | Position | What to do |
|---|---|---|---|---|---|
| `/blog/what-is-vector-database-types-uses/` | 416,433 | 153 | 0.04% | 14.4 | Answer-first definition, comparison table of vector DBs, refresh; target top 5 |
| `/blog/apple-human-interface-guidelines/` | 415,706 | 189 | 0.05% | 8.9 | Navigational intent for Apple's own page; low value — do not invest |
| `/blog/best-artificial-intelligence-platforms/` | 338,544 | 598 | 0.18% | 21.6 | Update for 2026, add a ranked table; "ai platforms" sits at 16.5 |
| `/blog/react-vs-vue/` | 231,841 | 22 | 0.01% | 4.0 | One query shows position 1.1 with 210,174 impressions and 2 clicks — an impression pattern typical of a SERP feature rather than a normal listing. Inspect the live SERP before investing |
| `/blog/path-to-become-aws-partner/` | 205,188 | 403 | 0.20% | 15.8 | Split title toward "AWS partner tiers and requirements" (positions 7–9); link to `/aws-consulting-services/` |
| `/blog/lambda-expression-java/` | 168,763 | 842 | 0.50% | 8.7 | Tighten title; code example in the first screen; FAQ already opted in |
| `/blog/whats-new-in-spring-boot-3-for-java-developers-in-2023/` | 116,277 | 109 | 0.09% | 11.0 | Year-stamped 2023 — retitle to the current Spring Boot version and refresh |
| `/blog/iot-in-mobile-app-development/` | 107,535 | 27 | 0.03% | 13.9 | Rewrite title and intro; link to the IoT service pages |
| `/blog/nestjs-vs-nextjs/` | 101,529 | 345 | 0.34% | 8.2 | Comparison table at top; verdict sentence under H1 |
| `/blog/javascript-web-frameworks-comparison/` | 97,100 | 117 | 0.12% | 13.5 | Make it the frameworks hub (section 2.3) |
| `/blog/react-native-vs-kotlin/` | 92,652 | 77 | 0.08% | 9.6 | Ranks for "what is kotlin" (69,720 impressions, 1 click): intent mismatch. Add a definitional section or accept |
| `/blog/Java-21-features/` | 66,606 | 219 | 0.33% | 8.6 | Mixed-case URL; update with Java 25 cross-link |

Expect modest gains from the developer-tutorial pages. They bring students and engineers, mostly from India, and rarely buyers. Their real value is as internal-link donors: these twelve pages hold 2.4 million impressions, yet six contain no link to any service page, one links to a page that returns 404 (`/ios-app-development/`), and one links to the non-`www` domain through redirects.

### Technical issues confirmed by GSC

| Issue | GSC evidence |
|---|---|
| Dead post still served as 200 | `/blog/overcomming-common-generative-ai-challenges/` — 14,898 impressions, 18 clicks, now a soft 404. Redirect to `/blog/challenges-of-generative-ai/` |
| Dead post still served as 200 | `/blog/what-is-databricks-a-complete-guide-for-modern-data-teams/` — 1,576 impressions. Redirect to `/blog/what-is-databricks/` |
| Redirected URLs still shown in results | 10 URLs, 15,323 impressions, e.g. `/blog/how-to-hire-node-js-developers/` (9,916). Internal links to the old URLs keep them alive |
| Indexable pages outside the sitemap earning impressions | 37 URLs, 37,842 impressions: `/product/white-label-fitness-app/`, `/hire-white-label-developer/`, author pages, `/login/` (1,169 impressions) |
| `/login/` indexed | Add `noindex` |
| App subdomains under the same property | 15+ hosts such as `eyerest.`, `roomplanner.`, `coursesphere.brilworks.com` appear in results. Confirm each is intended to be public; they dilute the domain's topical focus |
| "Review snippet" search appearance | 438,533 impressions at average position 34.7. No review markup exists in the current `www` JSON-LD or code, so the source is unidentified (possibly CMS-embedded markup or a subdomain). Find it; self-serving review markup risks a manual action |
| Mobile share | Mobile is 21% of impressions and 31% of clicks — a developer, desktop-heavy audience |

### Still to pull from Search Console

The Performance export does not include indexing or crawl data. These three exports complete the picture:

| Report | Purpose |
|---|---|
| Pages (indexing) → every reason, exported | Confirm the expected reasons below |
| Settings → Crawl stats → by response and by purpose | Share of 404 and 308 responses; response time on `/blog/` |
| Performance → Queries filtered to each top commercial query → Pages tab | Confirm the cannibalisation clusters in section 2.3 |

### What the indexing report is expected to show

| GSC reason | Cause found in the crawl |
|---|---|
| **Soft 404** | Dead `/blog/*` and `/ebooks/*` URLs returning 200 |
| **Excluded by 'noindex'** | The same dead URLs, plus 3 `noindex` URLs listed in the sitemap |
| **Page with redirect** | 34 internal links without a trailing slash, the footer `//` link, links to `brilworks.com` without `www` |
| **Not found (404)** | 10 internal links to missing pages, 1 sitemap URL, 4 video-sitemap entries |
| **Duplicate without user-selected canonical** | 27 sitemap pages with a missing or wrong canonical |
| **Crawled – currently not indexed** | 31 `/ai-agents/*` pages with two words of server HTML; thin `/tools/` and `/gist/` pages |
| **Discovered – currently not indexed** | Pages reachable only through the sitemap, including 84 orphan posts |

## 1.2 Rendering strategy and Core Web Vitals

### How each template is served today

| Template | URLs | Rendering | Cache | Verdict |
|---|---|---|---|---|
| Homepage, services, hire, industry, tools | ~150 | Static prerender | CDN HIT | Good |
| Portfolio, ebooks, use cases | ~33 | ISR | HIT / STALE | Good |
| **Blog posts** | **521** | **Dynamic SSR on every request** | **`no-store`, MISS** | **Fix first** |
| Blog index | 1 | Static shell, list fetched in browser | HIT | Content invisible to non-JS crawlers |
| `/ai-agents/*` | 31 | Static shell, app runs in browser | HIT | 2 words of HTML |
| `robots.txt` | 1 | Dynamic (reads host header) | — | Acceptable |

### Why the blog is dynamic

`src/app/blog/[slug]/page.js` defines `generateStaticParams`, but its data fetch uses `next: { revalidate: 0 }`. A zero revalidate opts the whole route out of static generation, so the static params are never used. Two side effects follow:

- `generateStaticParams` calls `getblog()`, which requests only the first 100 posts, so 421 posts would not be prebuilt even if static generation worked.
- Because the response has already started streaming when `notFound()` runs, the status stays 200 and only a `noindex` tag is added. This is the source of the soft 404s.

### Fix: move the blog to ISR with on-demand revalidation

```js
// src/app/blog/[slug]/page.js
export const revalidate = 86400;      // safety net: rebuild at most daily
export const dynamicParams = true;    // new posts render on first request, then cache

export async function generateStaticParams() {
  const posts = await getBlogForSitemap();          // already paginates all pages
  return posts.map((p) => ({ slug: p.loc.split("/blog/")[1].replace(/\/$/, "") }));
}

export async function fetchData(slug) {
  const res = await fetch(storyUrl, {
    next: { revalidate: 86400, tags: [`blog:${slug}`] },   // was: revalidate: 0
  });
  if (res.status === 404) return null;                       // lets notFound() return a real 404
  ...
}
```

The Storyblok webhook at `/api/revalidate` already calls `revalidatePath("/" + full_slug)`, so published edits will still appear within seconds. After deploying, confirm with:

```bash
curl -sI https://www.brilworks.com/blog/node-js-vs-golang/ | grep -i "x-vercel-cache\|x-nextjs-prerender"
```

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://www.brilworks.com/blog/zzz-this-does-not-exist/
```

Expected: `HIT` with `x-nextjs-prerender: 1`, and `404`. Apply the same change to `src/app/ebooks/[slug]/page.js`.

### Lab performance (mobile emulation, 4× CPU slowdown, slow 4G, first-party only)

| Template | FCP | LCP | LCP element | CLS | Blocking time | Scripts |
|---|---|---|---|---|---|---|
| Homepage | 2.0 s | 2.0 s | Hero paragraph | 0.01 | **1,340 ms** | 51 |
| `/data-engineering-services/` | 1.5 s | 1.5 s | Hero paragraph | 0.05 | 860 ms | 50 |
| Blog post | 1.5 s | 1.5 s | H1 | **0.38** | 740 ms | 56 |
| `/hire-reactjs-developer/` | 1.7 s | **5.4 s** | Hero image | 0.01 | 890 ms | 63 |
| Industry page | 1.2 s | 1.2 s | Hero paragraph | 0.01 | 900 ms | 61 |
| Portfolio case study | 1.6 s | 1.6 s | Hero paragraph | 0.01 | 700 ms | 52 |
| Tool page | 1.6 s | 1.6 s | Hero paragraph | 0.01 | 780 ms | 60 |

These are lab numbers with third-party scripts blocked, so real blocking time is higher. The blog CLS figure was measured with CMS images blocked and needs confirming in the field. Treat this table as direction, and confirm with CrUX in Search Console → Core Web Vitals.

### Recommendations by metric

**INP / blocking time (the main risk on every template)**

- 50–63 script files and 33–39 background fetches load per page. Most fetches are Next.js link prefetches for the 64 sitewide navigation and footer links. Add `prefetch={false}` to footer and mega-menu links; only 3 links in the codebase do this today.
- Five third-party tags load on every page (GTM, PostHog, Clarity, Factors, Clearbit, Vector, Cloudflare Insights, plus a client-side IP lookup). Audit which are still used. Load survivors through GTM with consent gating.
- Homepage uses `framer-motion`, Swiper and Splide together. Standardise on one carousel library and replace scroll-reveal animation with CSS.
- The header fetches Storyblok data in the browser on every page. Move it to the server component.

**LCP**

- Hire pages: the hero image is the LCP element and is discovered late (5.4 s). Add `priority` and `fetchPriority="high"` to the hero `<Image>` in the hire-page hero component. 41 of 43 images on that page are lazy, including the one that matters.
- `next.config.js` sets `images.unoptimized: true`. No image on the site gets responsive `srcset`, AVIF, or resizing. Either enable the Next.js optimiser, or use Storyblok's image service (`/m/800x0/filters:format(avif)`) through the existing `formatSrcUrl` helper, with explicit `sizes`.
- Service page section images are 125–146 KB each as fixed-size WebP; `/images/banner1.png` on portfolio pages is 190 KB. `public/images` is 59 MB.
- The homepage preloads five partner logos as high-priority images. Preload only the actual LCP resource.

**CLS**

- Blog posts: give the banner and in-article images explicit `width`/`height` (or `aspect-ratio`), and reserve height for the "Summarize with AI" bar and author block that mount after hydration.
- 10 of 24 homepage images have no dimensions.

## 1.3 Sitemap and indexation hygiene

### What is in `sitemap.xml` today (726 URLs, one flat file)

| Section | URLs | Issue |
|---|---|---|
| Blog | 522 | Fine as a set; lastmod comes from Storyblok |
| Free tools | 41 | 23 are orphans; 36 have two H1s; 2 have wrong canonicals |
| `/ai-agents/*` demos | 32 | 31 are near-empty HTML |
| Services, hire, industry, partner | ~70 | 7 have no canonical |
| Portfolio, case studies | 21 | 3 case studies orphaned |
| `/x/product-listing/*` | 10 | 1 returns 404; 2 wrong canonicals |
| Ebooks, use cases, AI solutions | 22 | 14 have no canonical |

Good news: there are no tag archives, pagination URLs or parameter URLs in the sitemap, and all 726 use a trailing slash consistently.

### Errors in the sitemap

| Issue | URLs |
|---|---|
| Returns 404 | `/x/product-listing/service-squard/` (typo; the live page is `service-squad`) |
| Listed but `noindex` | `/privacy-policy/`, `/terms-and-conditions/`, `/ebooks/saas-founders-guide-2024/` |
| Canonical points to a different page | `/tools/which-app-should-you-build/` → `mvp-feature-selector-quiz`; `/tools/mobile-app-monetization-strategy-selector/` → `app-rebuild-vs-refactor-calculator`; `/x/product-listing/pet-finder/` → listing page; `/x/product-listing/enclave-connect/` → misspelt `encalve-connect` |
| No canonical tag (23 pages) | All 8 `/use-case/*`, all 6 `/ai-solutions/*`, `/embedded-software-development-services/`, `/firmware-engineering-services/`, `/edge-ai-development-services/`, `/iot-product-engineering-services/`, `/data-engineering-for-healthtech/`, `/data-engineering-for-fintech/`, `/data-engineering-for-saas/`, `/x/product-listing/` |
| Stale hard-coded `lastmod` | Static pages are listed in `constants.js` with fixed dates, many still `2025-04-25` although the pages changed in 2026 |
| Mixed-case URL | `/use-case/aws-in-IoT/` (lower-case version 404s) |

### Indexable pages missing from the sitemap (about 45)

| Group | Pages |
|---|---|
| **Data & AI service pages (12)** | `/ai-strategy-advisory-services/`, `/ai-readiness-data-foundation-services/`, `/ai-engineering-aiops-services/`, `/ai-governance-services/`, `/enterprise-data-strategy/`, `/cloud-data-engineering/`, `/data-pipeline-development/`, `/data-modernization/`, `/data-governance-consulting/`, `/business-intelligence-development/`, `/business-intelligence-services/`, `/iot-embedded-development-services/` |
| Comparison pages (4) | `/compare/brilworks-vs-toptal/`, `/compare/brilworks-vs-upwork-agencies/`, `/compare/build-vs-buy-software/`, `/compare/in-house-vs-agency-development/` |
| Hubs | `/case-studies/`, `/use-case/`, `/hire-engineers/`, `/portfolio/ai-agents/`, `/ai-tools/` |
| Work | `/portfolio/claude-code-coding-speed-lift/`, 12 `/x/product-listing/*` pages |
| Other | 3 ebooks, `/hire-white-label-developer/`, `/erp-next-development-services/`, `/ai-tools-audit/`, author pages |

The cause is structural: static pages are added to the sitemap by hand in `sitemapData` inside `constants.js`. Every new page is a chance to forget.

### Other indexation leaks

- **Three URL patterns for the same author:** `/blog/author/<name>/`, `/authors/<name>/` and `/teams/<name>/` all return 200. Keep `/authors/`, 301 the other two.
- **`video-sitemap.xml`** lists `/pre-built-solutions/` four times; that URL returns 404. The real page is `/ai-tools/pre-build-solutions/`.
- **`/gist/*`** (8 hub pages, 140–175 words each) and **`/labs/`**, **`/posters/`** (0 words) are indexable with no canonical. Either build them out or `noindex` them.
- **Legal pages for client apps** (about 30 `*-privacy-policy` pages) are correctly `noindex`. No action.
- **`/?s=`** returns 200 for any value and the `WebSite` schema advertises it as the site search, yet the site has no search and robots.txt disallows the path. Remove the `SearchAction`.

### Recommended `robots.txt`

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /dashboard/
Disallow: /internal/
Disallow: /login/
Disallow: /forget-password/
Disallow: /verifyemail/
Disallow: /cdn-cgi/
Disallow: /*?s=
Disallow: /*?utm_
Disallow: /*?service=

# AI search and assistant crawlers: allowed
User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: ClaudeBot
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: CCBot
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /dashboard/

Sitemap: https://www.brilworks.com/sitemap.xml
```

Changes from today: removes four WordPress-era rules that match nothing on the current site (`/search/`, `/testimonial/`, `/category/*`, `/email-sms/*`); blocks the private app areas; adds the search-specific AI agents that are currently unnamed; and re-allows `CCBot`. Common Crawl is a primary training source for several LLMs, so blocking it works against the GEO goal — keep the block only if that was a deliberate legal decision.

Do not disallow the legal pages; they need to be crawlable for their `noindex` to be seen.

### Sitemap segmentation

Replace the single file with an index, generated from the route tree and CMS rather than a hand-kept list.

| File | Contents | Approx. URLs |
|---|---|---|
| `sitemap-services.xml` | Services, hire, industry, partner, comparison, pricing | 95 |
| `sitemap-work.xml` | Case studies, portfolio, product listings | 45 |
| `sitemap-blog.xml` | Blog posts (lastmod from Storyblok) | 521 |
| `sitemap-resources.xml` | Ebooks, use cases, AI solutions, author pages | 30 |
| `sitemap-tools.xml` | Calculators and assessments that pass a quality bar | 30–50 |
| `video-sitemap.xml` | Corrected video entries | 7 |

Segmenting lets Search Console report indexed-versus-submitted per section, which is the fastest way to see whether service pages or tools are the ones being dropped.

```js
// src/app/sitemap.js
export async function generateSitemaps() {
  return [{ id: "services" }, { id: "work" }, { id: "blog" }, { id: "resources" }, { id: "tools" }];
}
export default async function sitemap({ id }) {
  // build each list from a route manifest + Storyblok, filter out noindex pages,
  // and take lastModified from git commit date or the page's LAST_UPDATED constant
}
```

Add a CI check that fails the build when a `page.js` without `robots: { index: false }` is absent from the manifest.

## 1.4 Internal linking and PageRank flow

### How authority flows today

| Measure | Value |
|---|---|
| Links repeated on every page (header + footer) | 64 |
| Blog posts with no contextual link to any commercial page | **293 of 521 (56%)** |
| Sitemap URLs with zero inbound internal links | **127** (84 posts, 23 tools, 20 others) |
| Sitemap URLs with one or zero contextual inbound links | 282 |
| Internal links that redirect (308) | 34 targets + 1 sitewide footer link |
| Internal links that return 404 | 10 targets |

### Where blog posts send their authority

| Destination | Posts linking to it | Fits current positioning? |
|---|---|---|
| `/hire-mobile-app-developer/` | 67 | No |
| `/application-development-services/` | 35 | No |
| `/ai-ml-development-services/` | 35 | Partly |
| `/aws-consulting-services/` | 32 | Partly |
| `/generative-ai-development-services/` | 26 | Yes |
| `/data-engineering-services/` | 10 | Yes — core pillar |
| `/ai-agent-development-services/` | 6 | Yes — core pillar |
| `/databricks-partner/`, `/snowflake-partner/` | **0** | Yes — core pillar |
| Any `/case-studies/*` page | **0** | Yes — proof |

The blog still funds the 2024 positioning. The pages that represent the 2026 strategy receive almost nothing from 521 posts.

### Leaks to fix

| Leak | Detail |
|---|---|
| Orphaned money pages | `/databricks-partner/`, `/snowflake-partner/`, `/kubernetes-consulting-services/`, `/edge-ai-development-services/`, `/iot-product-engineering-services/`, `/frappe-development-services/`, `/white-label-mobile-app-development/`, `/event-app-development/`, `/hire-adalo-developer/`, `/rapid-digitalization/`, `/services/ai-agent-development/` |
| Orphaned proof | 3 of 4 `/case-studies/*`, 4 ebooks |
| Footer typo | `/hire-ui-ux-designer//` on 692 pages (`src/app/components/Footer/index.js:198`) — one redirect per page crawled |
| Footer weight | Footer "Technologies" column links Java, Node, React, React Native, AWS, UI/UX, Blockchain hire pages sitewide; none of the six Data & AI hire pages get footer weight beyond the header |
| Dead links in content | `/services/` (404, and listed in the sitemap), `/services/claude-code-implementation-and-enablement/`, `/agentic-ai-software-development-services/`, `/cloud-data-engineering-services/`, `/ios-app-development/`, `/aws-architecture`, `/compliance`, `/disaster-recovery`, `/serverless-development`, `/cloud-managed-services` |
| Leaked internal URLs | Links to `dev.brilworks.com` (7 targets) and to `/BRI/issues/BRI-56` (an internal ticket) inside published content |
| Duplicate service URL | `/services/ai-agent-development/` and `/ai-agent-development-services/` both live and both in the sitemap |
| Blog breadcrumb | Links to `/blog` (redirects) and shows the category as plain text with no link |

### Target architecture: five silos, hub and spoke

```
Homepage
 ├─ Data Engineering  (hub: /data-engineering-services/)
 │    spokes: cloud-data-engineering, data-pipeline-development, data-modernization,
 │            data-governance-consulting, business-intelligence-development,
 │            enterprise-data-strategy, snowflake-partner, databricks-partner
 │    hire:   hire-data-engineer, -snowflake-, -databricks-, -analytics-engineer
 │    proof:  4 case studies · tools: 7 data calculators · blog: ~30 posts
 │
 ├─ AI & Agents       (hub: /ai-agent-development-services/)
 │    spokes: generative-ai, ai-ml, ai-strategy-advisory, ai-readiness, aiops, ai-governance
 │    hire:   hire-ml-ai-engineer, hire-mlops-engineer
 │    proof:  portfolio/ai-agents, ai-solutions · blog: ~60 posts
 │
 ├─ Product Engineering (hub: /product-engineering-development-services/)
 │    spokes: saas, web-app, mobile-app, react-native, reactjs, low-code, mvp-in-48-hours
 │    hire:   reactjs, react-native, nodejs, java, mobile, ui-ux
 │    proof:  portfolio · tools: cost calculators · blog: ~250 posts
 │
 ├─ Cloud & DevOps    (hub: /aws-consulting-services/)
 │    spokes: devops-consulting, kubernetes-consulting · hire: hire-aws-developer
 │
 └─ Industries        (hub: new /industries/ index)
      healthcare ⇄ data-engineering-for-healthtech ⇄ healthcare case study ⇄ ~21 posts
      fintech    ⇄ data-engineering-for-fintech    ⇄ fintech case study
      saas       ⇄ data-engineering-for-saas       ⇄ saas case study
```

### Linking rules to implement

1. **Every blog post links to exactly one hub and one spoke** in its silo, in the first 300 words, with descriptive anchor text. Implement as a Storyblok field (`primary_service`) rendered as an inline callout, so it can be set in bulk for the 293 posts that have none.
2. **Every spoke links up to its hub, across to two sibling spokes, and down to one case study and one tool.**
3. **Every hub links to all spokes, all related hire pages, and its three best posts.**
4. **Every case study links to the service it proves and the industry page it belongs to**, and each service page shows its case studies. This is the single cheapest fix for the orphaned case studies.
5. **Add visible breadcrumbs with links** on every template, matching the `BreadcrumbList` schema.
6. **Render the blog index on the server** with paginated, crawlable links (`/blog/page/2/`) and linked category pages (`/blog/category/data-engineering/`). This removes the 84 orphans in one change.
7. **Rebalance the footer** to the five hubs plus partner pages. Sitewide links are the strongest internal signal the site sends.
8. **Normalise links at the source:** a lint rule or Storyblok validation that rejects internal hrefs without a trailing slash, without `www`, or pointing at `dev.`.

## 1.5 Structured data

### Coverage today

| Template | Pages | Schema present beyond the global three | Gap |
|---|---|---|---|
| Global (every page) | 726 | `Organization`, `LocalBusiness`, `WebSite` | Three disconnected blocks, no `@id`, conflicting data |
| Homepage | 1 | none | No page-level entity |
| Service pages | 42 | `WebPage` on 24, `Service` on 2, `FAQPage` on 2 | `Service` missing on 40 |
| Unlisted Data & AI pages | 12 | `Service` + `FAQPage` + `WebPage` on 10 | Good — but not in sitemap |
| Hire pages | 19 | Two-item `BreadcrumbList` whose last item has no URL | No `Service`, no offer |
| Industry pages | 8 | `WebPage`, `BreadcrumbList` on 6 | No `Service` |
| Blog posts | 521 | `BlogPosting` | No `BreadcrumbList`; `Person` on 4; estimated `wordCount` |
| Case studies / portfolio | 21 | `Article` on 3 | No client, industry, result or tech data |
| Tools | 41 | none | `WebApplication` helper exists but is used once |
| Data-engineering tools | 8 | `WebApplication` + `FAQPage` on 7 | Good |
| Ebooks, use cases | 16 | none | No `Book` / `Article` |

### Defects in the global schema (`src/app/components/lib/schemaCode.js`)

| Defect | Detail |
|---|---|
| Malformed email | `Organization.contactPoint.email` is `"<sales@brilworks.com>"` including the angle brackets |
| Conflicting `sameAs` | `Organization` lists 4 profiles; `LocalBusiness` lists 5 different URL forms. Clutch, GoodFirms, Crunchbase, X and GitHub are missing from one or both |
| Conflicting phone | Schema: `+91 9313644148`. Footer: `+91 9558288364` |
| Outdated description | `WebSite.description` says "mobile app and software development company" |
| Fake search | `SearchAction` on `/?s=` — no search exists |
| SVG logo | Google requires a raster logo (PNG/JPG/WebP, at least 112×112) |
| `LocalBusiness` on every page | Should appear once, on homepage and contact/about |
| No `@id` linking | Nothing ties `BlogPosting.publisher` or `Service.provider` to the main organisation node |

A note on **FAQPage**: Google has shown FAQ rich results only for government and health authority sites since August 2023. Marking up FAQs on service pages will not produce rich results. It is still harmless and machine-readable when it mirrors visible content exactly, so treat it as low priority, not as a win.

### Production-ready JSON-LD

Values in `REPLACE_…` must be filled with verified facts before shipping. Do not publish placeholder or estimated values.

**A. Site-wide entity graph — root layout, replaces all three current blocks**

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://www.brilworks.com/#organization",
      "name": "Brilworks",
      "legalName": "Brilworks Software LLP",
      "alternateName": "Brilworks Software",
      "url": "https://www.brilworks.com/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.brilworks.com/#logo",
        "url": "https://www.brilworks.com/images/brilworks-logo-512.png",
        "width": 512,
        "height": 512
      },
      "image": "https://www.brilworks.com/images/v2/og-home.jpg",
      "description": "Brilworks is a data and AI engineering firm. It builds data pipelines, warehouses and governance on Snowflake and Databricks, then the AI agents and analytics that run on that foundation.",
      "foundingDate": "REPLACE_YYYY",
      "founder": [
        { "@id": "https://www.brilworks.com/authors/hitesh-umaletiya/#person" },
        { "@id": "https://www.brilworks.com/authors/vikas-singh/#person" }
      ],
      "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 50, "maxValue": 249 },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "503, Fortune Business Hub, Science City Road, Sola",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "380060",
        "addressCountry": "IN"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 23.071, "longitude": 72.5158 },
      "telephone": "REPLACE_ONE_CANONICAL_NUMBER",
      "email": "sales@brilworks.com",
      "contactPoint": [
        { "@type": "ContactPoint", "contactType": "sales", "email": "sales@brilworks.com", "telephone": "REPLACE_ONE_CANONICAL_NUMBER", "areaServed": "Worldwide", "availableLanguage": "en" },
        { "@type": "ContactPoint", "contactType": "human resources", "email": "hr@brilworks.com" }
      ],
      "areaServed": ["US", "GB", "CA", "AU", "AE", "IN"],
      "knowsAbout": [
        "Data engineering", "Snowflake", "Databricks", "dbt", "Data governance",
        "AI agent development", "Generative AI", "MLOps",
        "Embedded software", "Firmware engineering", "Edge AI"
      ],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "Databricks Partner", "recognizedBy": { "@type": "Organization", "name": "Databricks", "url": "https://www.databricks.com/" } },
        { "@type": "EducationalOccupationalCredential", "name": "Snowflake Partner", "recognizedBy": { "@type": "Organization", "name": "Snowflake", "url": "https://www.snowflake.com/" } },
        { "@type": "EducationalOccupationalCredential", "name": "AWS Partner", "recognizedBy": { "@type": "Organization", "name": "Amazon Web Services", "url": "https://aws.amazon.com/" } }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/brilworks",
        "https://clutch.co/profile/brilworks-software",
        "https://www.goodfirms.co/company/brilworks-software-llp",
        "https://www.crunchbase.com/organization/brilworks",
        "https://www.g2.com/products/brilworks-software",
        "https://x.com/_Brilworks",
        "https://www.youtube.com/@brilworks",
        "https://www.facebook.com/brilwork",
        "https://www.instagram.com/brilworkssoftware",
        "REPLACE_GITHUB_ORG_URL",
        "REPLACE_WIKIDATA_ENTITY_URL",
        "REPLACE_OFFICIAL_DATABRICKS_PARTNER_DIRECTORY_URL",
        "REPLACE_OFFICIAL_SNOWFLAKE_PARTNER_DIRECTORY_URL"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.brilworks.com/#website",
      "url": "https://www.brilworks.com/",
      "name": "Brilworks",
      "description": "Data and AI engineering firm: Snowflake and Databricks data engineering, AI agents, and embedded engineers.",
      "publisher": { "@id": "https://www.brilworks.com/#organization" },
      "inLanguage": "en-US"
    }
  ]
}
```

Remove any `sameAs` line that cannot be filled with a real URL. Use `aggregateRating` only if the reviews are shown on the same page and collected first-hand; a Clutch score copied into schema is self-serving markup and is not eligible for stars.

**B. Service page — one per service URL**

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.brilworks.com/data-engineering-services/#service",
      "name": "Data Engineering Services",
      "serviceType": "Data engineering consulting",
      "description": "Pipelines, warehousing and data modelling on Snowflake and Databricks, including migration, cost optimisation and AI-ready data foundations.",
      "url": "https://www.brilworks.com/data-engineering-services/",
      "provider": { "@id": "https://www.brilworks.com/#organization" },
      "areaServed": ["US", "GB", "CA", "AU", "AE"],
      "audience": { "@type": "BusinessAudience", "audienceType": "Heads of Data, CTOs and VPs of Engineering at mid-market and enterprise companies" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Data engineering engagements",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fixed-price data platform audit" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Snowflake or Databricks migration", "url": "https://www.brilworks.com/data-modernization/" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data pipeline development", "url": "https://www.brilworks.com/data-pipeline-development/" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Embedded data engineers", "url": "https://www.brilworks.com/hire-data-engineer/" } }
        ]
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.brilworks.com/data-engineering-services/#webpage",
      "url": "https://www.brilworks.com/data-engineering-services/",
      "name": "Data Engineering Services | Snowflake & Databricks Experts",
      "isPartOf": { "@id": "https://www.brilworks.com/#website" },
      "about": { "@id": "https://www.brilworks.com/data-engineering-services/#service" },
      "breadcrumb": { "@id": "https://www.brilworks.com/data-engineering-services/#breadcrumb" },
      "dateModified": "2026-04-23"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.brilworks.com/data-engineering-services/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.brilworks.com/" },
        { "@type": "ListItem", "position": 2, "name": "Data & AI Services", "item": "https://www.brilworks.com/services/" },
        { "@type": "ListItem", "position": 3, "name": "Data Engineering Services", "item": "https://www.brilworks.com/data-engineering-services/" }
      ]
    }
  ]
}
```

Position 2 assumes a `/services/` hub exists; it currently returns 404 and should be built (section 2.1).

**C. Hire page — add an indicative offer**

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.brilworks.com/hire-data-engineer/#service",
  "name": "Hire Data Engineers",
  "serviceType": "IT staff augmentation — data engineering",
  "provider": { "@id": "https://www.brilworks.com/#organization" },
  "areaServed": ["US", "GB", "CA", "AU"],
  "url": "https://www.brilworks.com/hire-data-engineer/",
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "REPLACE_MONTHLY_STARTING_RATE",
      "priceCurrency": "USD",
      "unitText": "MONTH",
      "description": "Starting monthly rate per embedded engineer, minimum 3 months"
    }
  }
}
```

**D. Blog post — replace the current `BlogPosting`**

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.brilworks.com/blog/databricks-vs-snowflake/#article",
      "headline": "Databricks vs Snowflake Compared: Features, Pricing, ML",
      "description": "REPLACE_META_DESCRIPTION",
      "image": { "@type": "ImageObject", "url": "REPLACE_BANNER_URL", "width": 1200, "height": 630 },
      "datePublished": "REPLACE_ISO_DATE",
      "dateModified": "REPLACE_ISO_DATE",
      "author": { "@id": "https://www.brilworks.com/authors/hitesh-umaletiya/#person" },
      "publisher": { "@id": "https://www.brilworks.com/#organization" },
      "mainEntityOfPage": "https://www.brilworks.com/blog/databricks-vs-snowflake/",
      "isPartOf": { "@id": "https://www.brilworks.com/#website" },
      "articleSection": "Data Engineering",
      "about": [{ "@type": "Thing", "name": "Databricks" }, { "@type": "Thing", "name": "Snowflake" }],
      "wordCount": 3200,
      "inLanguage": "en-US"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.brilworks.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.brilworks.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Data Engineering", "item": "https://www.brilworks.com/blog/category/data-engineering/" },
        { "@type": "ListItem", "position": 4, "name": "Databricks vs Snowflake" }
      ]
    }
  ]
}
```

Use the real word count; the code currently multiplies reading time by 250. Also emit `og:type=article`, `article:published_time` and `article:modified_time` — all 521 posts currently have no `og:type`.

**E. Author page**

```json
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "@id": "https://www.brilworks.com/authors/hitesh-umaletiya/#person",
    "name": "Hitesh Umaletiya",
    "jobTitle": "Co-founder",
    "worksFor": { "@id": "https://www.brilworks.com/#organization" },
    "url": "https://www.brilworks.com/authors/hitesh-umaletiya/",
    "image": "REPLACE_HEADSHOT_URL",
    "description": "REPLACE_WITH_2_SENTENCE_BIO_NAMING_SPECIFIC_EXPERTISE",
    "knowsAbout": ["Data engineering", "Snowflake", "Databricks", "AI agents"],
    "sameAs": ["REPLACE_LINKEDIN_URL", "REPLACE_GITHUB_OR_X_URL"]
  }
}
```

**F. Case study**

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://www.brilworks.com/case-studies/fintech-pipeline-optimization/#casestudy",
  "headline": "Cutting a fintech's pipeline costs 60% while making it 4x faster",
  "articleSection": "Case Study",
  "about": [
    { "@type": "Thing", "name": "Data pipeline optimisation" },
    { "@type": "Thing", "name": "Snowflake" },
    { "@type": "Thing", "name": "dbt" },
    { "@type": "Thing", "name": "Apache Airflow" }
  ],
  "mentions": { "@id": "https://www.brilworks.com/data-pipeline-development/#service" },
  "audience": { "@type": "BusinessAudience", "audienceType": "Fintech" },
  "abstract": "Brilworks re-architected a payments-analytics pipeline: warehouse cost down 60%, nightly run time from 6–8 hours to about 1.5 hours.",
  "author": { "@id": "https://www.brilworks.com/#organization" },
  "publisher": { "@id": "https://www.brilworks.com/#organization" },
  "datePublished": "REPLACE_ISO_DATE",
  "dateModified": "REPLACE_ISO_DATE",
  "mainEntityOfPage": "https://www.brilworks.com/case-studies/fintech-pipeline-optimization/"
}
```

**G. Free tool — `SoftwareApplication`**

```json
{
  "@context": "https://schema.org",
  "@type": ["SoftwareApplication", "WebApplication"],
  "name": "Snowflake Cost Calculator",
  "url": "https://www.brilworks.com/data-engineering-tools/snowflake-cost-calculator/",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "browserRequirements": "Requires JavaScript",
  "description": "Estimate monthly Snowflake spend from warehouse size, hours and storage.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "publisher": { "@id": "https://www.brilworks.com/#organization" }
}
```

**H. FAQPage — only where the same questions and answers are visible on the page**

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much do data engineering services cost?",
      "acceptedAnswer": { "@type": "Answer", "text": "REPLACE_WITH_THE_EXACT_VISIBLE_ANSWER_TEXT" }
    }
  ]
}
```

### On-page meta defects found by the crawl

| Defect | Count | Where |
|---|---|---|
| Title over 60 characters | 115 | 48 posts, 29 tools, 8 portfolio, all 8 data tools, all 4 case studies |
| Meta description over 160 characters | 186 | 98 posts, 27 tools, 11 hire pages |
| Two H1s | 38 | 36 tool pages, terms page, 1 other |
| No H1 | 2 | `/contact-us/`, one ebook |
| No `og:image` | 162 | All 41 tools, 31 AI agents, 17 portfolio, 17 services, 8 ebooks, 8 data tools, 4 case studies |
| No `og:type` | 521 | Every blog post |
| `og:type=article` on non-articles | 127 pages in code | Hire, industry, tools |
| `og:image` URL with double slash | 3 | Hire pages |
| Weak titles | — | "About Us - Brilworks", "Staff Augmentation \| Brilworks", "Brilworks \| Saas Application Development Services", "Hire Dedicated Software Development Team" (no brand) |
| Images without alt text | 108 | 52 in posts, 18 industry, 17 portfolio, 17 services |

---

# Part 2 — Content Architecture, E-E-A-T & Conversion

## 2.1 Commercial versus informational intent

### What the service pages do well

- The newer Data & AI pages lead with outcomes and numbers: "cut warehouse spend 20 to 40%", "live in 7 days", "fixed-price audit".
- Most service pages run 1,100–1,450 words with five to eight question-style FAQs.
- Engagement models and pricing anchors exist (`/pricing.md`, AI agent page).

### Where they miss high-intent demand

| Gap | Evidence | Fix |
|---|---|---|
| **H1s are slogans, not queries** | "From raw data to running agents.", "Launch iOS & Android Apps Users Love", "Engineer enterprise data & AI on Snowflake." | Keep the slogan as a sub-headline. Put the query in the H1: "Snowflake Consulting Partner", "Mobile App Development Services" |
| **No location or model modifiers** | No page targets "offshore", "nearshore", "India", "US time-zone", "dedicated team for [industry]" | Add an "Engagement & location" block on each hire page, and build the matrix below |
| **No industry × service pages for legacy services** | Healthcare page targets "healthcare software development" only. Nothing targets "hire healthcare software developers" or "HIPAA-compliant app developers" | Build 6–8 intersection pages |
| **Industry × data pages are thin and unlinked** | `/data-engineering-for-healthtech/` is 507 words, 3 H2s, no FAQ, no canonical, no schema, 1 inbound link | Bring to service-page standard |
| **No pricing page** | Pricing exists only as `/pricing.md` for bots. Humans and Google see no pricing URL | Publish `/pricing/` with the same ranges in a table |
| **No services hub** | `/services/` is in the sitemap and linked from content but returns 404 | Build it as the top of the silo tree |
| **No comparison tables on service pages** | 0 of 42 service pages contain a `<table>` | Add "engagement model" and "us vs in-house vs freelancer" tables |
| **Partner pages lack proof links** | Partner pages claim certification but do not link to the official directory listing or case studies | Link out to the listing; link in from every data page |
| **Hire pages make inconsistent promises** | ReactJS page: "72 hours" in the title, "48 hours" in the H2, "7 days" on staff augmentation | Pick one verifiable SLA per page |

### High-intent page matrix to build (BoFu)

| Query pattern | Example target | Template |
|---|---|---|
| hire + offshore + role | "hire offshore data engineers", "hire offshore healthcare software developers" | Hire page with location block |
| role + for + industry | "data engineers for fintech", "AI agent developers for healthcare" | Industry × hire intersection |
| platform + consulting + partner | "Databricks consulting partner", "Snowflake migration services" | Existing partner pages, re-headed |
| X + migration + services | "Teradata to Snowflake migration", "Hadoop to Databricks migration" | New migration pages; blog already has the guides |
| service + cost | "data engineering services cost", "AI agent development cost" | `/pricing/` plus calculators |
| brand + vs / alternatives | "Toptal alternatives for data engineering" | Extend `/compare/` (currently 4 pages, none in sitemap) |
| staff aug + location | "IT staff augmentation company India" | `/staff-augmentation/` re-optimised |

Cap programmatic intersections at what can carry unique proof. Each page needs at least one real project, one named technology decision and one number that appears on no other page.

## 2.2 Case studies and portfolio

### Current state

| Set | Pages | Strength | Weakness |
|---|---|---|---|
| `/case-studies/*` | 4 | Excellent narrative; hard numbers (60% cost, 4× speed, $18K/month bill) | 740 words, no schema beyond a partial `Article`, no client attribution, 3 of 4 orphaned, hub not in sitemap, hub has no H2s |
| `/portfolio/*` | 17 + 1 unlisted | Tech and category shown | ~500 words, no schema, no `og:image`, generic titles, no outcome metrics, results gated behind a PDF form |
| `/x/product-listing/*` | 22 | — | Unclear purpose, odd URL, 1 broken, 2 wrong canonicals |
| `/internal/casestudies/` | 1+ | — | Publicly routable; should be blocked |

Two parallel systems (`/case-studies/` and `/portfolio/`) split the proof.

### Recommended structure

1. **One collection at `/case-studies/`.** Migrate portfolio items in and 301 the old URLs.
2. **Structured fields in the CMS**, each rendered visibly and in schema:

| Field | Example | Used for |
|---|---|---|
| Industry | Fintech | Filter, industry-page feed, breadcrumb |
| Service | Data pipeline development | Service-page feed, internal link |
| Tech stack | Snowflake, dbt, Airflow | Tag pages, `about` in schema |
| Engagement model | Fixed-scope, 14 weeks, 3 engineers | Buyer qualification |
| Client descriptor | "Series B payments analytics platform, US" | Credibility when NDA applies |
| 3 headline metrics | −60% cost, 4× faster, 1.5 h runtime | Hero, listing card, `abstract` |
| Before / after table | Run time, cost, incidents | LLM-extractable evidence |
| Client quote + role | Named where permitted | E-E-A-T |
| Lead engineer | Linked author profile | E-E-A-T |

3. **Title formula:** `[Result] for a [client type] | [Stack] Case Study` — the fintech page already does this well; apply it to all.
4. **A summary block at the top**, in plain sentences: client, problem, what was built, result. This is the paragraph AI systems quote.
5. **Ungate the results.** Keep the PDF as an optional download, but put the numbers in HTML.
6. **Filterable hub with crawlable facets:** `/case-studies/industry/fintech/`, `/case-studies/technology/snowflake/`. Each facet page gets a 100-word intro and is self-canonical.
7. **Reciprocal links:** each service, industry and hire page shows two matching case studies; each case study ends with the matching service CTA.
8. **Target volume:** four data case studies is too few to support a Databricks and Snowflake partner claim. Aim for ten, including one per platform per priority industry.

## 2.3 Keyword cannibalisation and gaps

These clusters come from titles, slugs and H1s, cross-checked against GSC page data where available. The export has no query-by-page view, so confirm each cluster in Search Console (filter by query, open the Pages tab) before redirecting.

| Cluster | Competing URLs | Recommended resolution |
|---|---|---|
| **AI agent development** | `/ai-agent-development-services/` and `/services/ai-agent-development/` (both in sitemap; GSC shows the duplicate at position 15 with 2,786 impressions) plus `/blog/how-to-choose-the-right-ai-agent-development-company/` and the "complete guide" post | 301 `/services/ai-agent-development/` to the main service page. Posts link up with exact-match anchors |
| **Hire Node.js developers** | `/hire-nodejs-developer/` (position 68, 20,783 impressions, 9 clicks) vs 4 posts ("Node.js Hiring Guide", "Hire Node.js Developers in 2025", "Hiring Models…", "Hiring Mistakes…") | Merge the four posts into one guide; 301 the rest; link the guide to the hire page |
| **Hire Java developers** | `/hire-java-developer/` vs 3 posts | Merge to one guide |
| **Bubble.io scaling issues** | `/blog/buuble-io-scaling-issues/` (typo slug) and `/blog/bubbleio-scaling-issues/` | Merge into one, 301 the typo slug |
| **Agentic AI in healthcare** | `/blog/agentic-ai-in-healthcare/` and `/blog/agentic-ai-healthcare/` | Merge; 301 |
| **MVP development services** | `/mvp-in-48-hours/` vs `/blog/mvp-development-services/`, `/blog/mvp-app-development-services/`, `/blog/what-is-mvp-development/` | Create a real `/mvp-development-services/` page; point the posts at it |
| **Generative AI company / consulting** | `/generative-ai-development-services/` vs posts titled "Generative AI Development Company" and "Generative AI Consulting Services" | Retitle the posts as buyer guides ("How to choose…") and link to the service page |
| **Data modernization** | `/data-modernization/` vs `/blog/data-modernization-services/` | Retitle the post to a how-to; link up |
| **Cloud data engineering** | `/cloud-data-engineering/` vs `/blog/cloud-data-engineering/` | Post becomes the guide; service page gets the commercial title |
| **React vs Next.js / frameworks** | `react-vs-angular`, `react-vs-vue`, `javascript-web-frameworks-comparison`, `node-js-vs-next-js`, `react-vs-nodejs` | Make the frameworks comparison the hub; each versus post links to it and to `/reactjs-development-services/` |
| **React Native vs Flutter / cross-platform** | 8 posts incl. `react-native-vs-flutter` (title still says 2025), `native-vs-cross-platform`, `cross-platform-app-development-best-frameworks`, `guide-to-cross-platform-…`, `choosing-mobile-development-framework` | Keep 3 (versus post, native-vs-cross, best frameworks). Merge the rest. Refresh the year |
| **ReactJS services vs hire ReactJS** | `/reactjs-development-services/` (2 contextual links) vs `/hire-reactjs-developer/` (sitewide) | Distinct intent is fine. Differentiate titles: "React.js Development Company" vs "Hire React.js Developers"; cross-link |
| **BI services** | `/business-intelligence-services/` and `/business-intelligence-development/` | Near-duplicate intent. Keep one, 301 the other |
| **Staffing** | `/staff-augmentation/`, `/hire-dedicated-software-development-team/`, `/hire-engineers/`, `/white-label-mobile-app-development/` vs `/hire-white-label-developer/` | Define one page per intent: augmentation (individuals), dedicated team (pods), hire hub (directory) |

### Content gaps relative to the stated positioning

| Topic | Posts today | Comment |
|---|---|---|
| Java | 50 | Largest cluster; not in the current positioning |
| AWS | 36 | Supporting |
| Generative AI | 25 | On strategy |
| Healthcare | 21 | On strategy, 13 newer compliance-focused posts are strong |
| AI agents | 16 | On strategy |
| Data engineering | 11 | **Core pillar, under-served** |
| Databricks | 8 | **Core pillar, under-served** |
| Snowflake | 5 | **Core pillar, under-served** |
| dbt, Airflow, data governance, data quality, MLOps | ~0–3 each | **Missing** |
| DevOps / Kubernetes | 0 | Service pages exist with no supporting content |

Two-thirds of the blog supports services the company now calls "legacy". The data pillar has 24 posts against Java's 50. Phase 3 addresses this.

**Freshness:** 40 titles or slugs reference 2025 and 8 reference 2023–2024. Several were modified in 2026 but kept the old year in the title, which lowers click-through.

---

# Part 3 — GEO and AI Search Readiness

## 3.1 Entity optimisation and brand consensus

### What third-party sources say (search-result level)

| Source | Found | What it says | Problem |
|---|---|---|---|
| Clutch | Yes | 5.0 rating; Ahmedabad; 50–249 staff; founded 2019; mobile, web, staff augmentation | Review count shown as 19 in one place and 22 in another. Service focus is legacy |
| GoodFirms | Yes | "Custom software developer for web, mobile and cloud… 120+ products" | Legacy positioning |
| Crunchbase | Yes | "IT solutions provider with a young team of experts" | Generic and outdated |
| G2 | Yes | Unclaimed, marked inactive for over a year | Looks abandoned |
| Upwork, TechBehemoths, Cutshort, UpCity, SelectedFirms | Yes | Founded 2018 on some, 2019 on others; size 20–100 to 51–200 | Conflicting facts |
| dotCMS, Storyblok partner pages | Yes | "India's leading digital transformation partner" | Off-strategy |
| Wikidata | Not found | — | No knowledge-graph anchor |
| GitHub organisation | Not found | — | No engineering footprint for an engineering firm |
| Databricks / Snowflake / AWS partner directories | Not found in search | Only Brilworks' own pages assert the partnership | The central claim has no independent corroboration that a model could retrieve. Verify manually |

Legal-name variants in circulation: *Brilworks*, *Brilworks Software*, *Brilworks Software LLP*, *Brilworks Technology*, *Brilworks Solutions FZCO*.

### The consensus problem

Brilworks' `llms.txt` tells models not to call it a "mobile app development company". But nearly every independent source, 133 of its own `og:site_name` tags, its `WebSite` schema, its `/pricing.md` ("custom software development and AI solutions company"), its About page ("Your Tech Partner… AWS Consulting Partner") and two-thirds of its blog say exactly that. Models weigh independent agreement above a self-published instruction file. Today the consensus answer to "what is Brilworks?" is "an Indian mobile and web development agency".

### Missing authority signals

| Signal | Action |
|---|---|
| Consistent one-line description | Use the `llms.txt` "preferred short summary" verbatim on Clutch, GoodFirms, Crunchbase, LinkedIn, G2, Upwork, partner pages, About page, schema, `og:site_name` |
| One founding year, one headcount range, one phone number | Decide the facts once; correct every profile |
| Official partner listings | Obtain the public directory URLs on Databricks, Snowflake and AWS Partner Finder; link them from the partner pages and `sameAs` |
| Wikidata item | Create once two or three independent, reliable sources exist (press coverage, partner directory, registry entry). Do not create it with only self-published references |
| GitHub organisation | Publish 3–5 small, useful repos: dbt macros, a Snowflake cost-query pack, an Airflow DAG template, the logic behind the public calculators |
| Founder entities | Full author pages with bio, credentials, talks, LinkedIn; 488 of 521 posts are attributed to two people whose author pages have 150 words and no schema |
| Named client proof | Even two named, linkable clients change how a model treats the case studies |
| Reviews on the data practice | The Clutch reviews describe Java, React and mobile work. Ask recent data clients for reviews that mention Snowflake or Databricks by name |
| Third-party mentions | Guest posts, podcast appearances and "best Databricks partners" list inclusions — the listicles are what AI answers cite for "best X company" prompts |

## 3.2 Conversational formatting and LLM extractability

### Measured across the 521 posts

| Signal | Result | Assessment |
|---|---|---|
| Median length | 2,486 words | Good depth |
| Has at least one question-style H2 | 409 (78%) | Good |
| Has an FAQ section | 435 (83%) | Good |
| Contains a table | 185 (35%) | Needs work — tables are the most-cited format for comparisons |
| "Conclusion" / "Final thoughts" style H2 | 340+ | Generic; wasted heading |
| "Introduction" H2 | 22 | Generic |
| Server-rendered and readable without JS | Yes | Good |
| Author schema connected to an entity | 4 | Poor |
| Visible "last updated" date | Yes | Good |
| "Summarize with AI" buttons | Yes | Nice touch; does not affect citation |

### Measured across service and proof pages

| Signal | Result |
|---|---|
| Service pages containing a table | 0 of 42 |
| Service pages opening with a definitional sentence | Few — heroes lead with slogans |
| Case studies with a before/after table | 0 |
| Pricing in crawlable HTML | Partial (AI agent page); otherwise only `/pricing.md` |
| `/ai-agents/*` demo pages readable without JS | No — 31 pages, 2 words each |
| Blog index readable without JS | No |

### What is already good

- `llms.txt` is thorough, current (July 2026) and well structured. A second file, `llm.txt`, duplicates it in a different format; keep one.
- `robots.txt` explicitly allows GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot and Google-Extended.
- Service FAQs are phrased as real buyer questions.

### Formatting standard to adopt

1. **Answer-first under every H2.** The first one or two sentences answer the heading in 40–60 words, with no preamble. Detail follows.
2. **A definition sentence on every service page**, directly under the H1: "Data engineering services are…" then "Brilworks provides…". Models lift definitional sentences that name the subject.
3. **A TL;DR block** of three to five bullet points at the top of every post and case study.
4. **One table per comparison.** Any "X vs Y" or "best N" post needs a comparison table within the first screen of content.
5. **Numbers with a source and a date.** "Snowflake credits cost $2–$4 (Snowflake pricing, Oct 2026)" is quotable. "Costs vary" is not.
6. **First-party data.** Publish numbers only Brilworks has: median migration duration across its projects, average cost reduction, common failure modes. Unique statistics are the strongest citation magnet.
7. **Replace "Conclusion" headings** with a specific takeaway ("When to choose Databricks over Snowflake").
8. **Self-contained passages.** Avoid "as mentioned above"; each section should make sense when quoted alone.
9. **Server-render what you want cited.** Give each `/ai-agents/*` page a static description, sample input and output, and use-case text, or remove it from the sitemap.

## 3.3 Citation capture strategy

| # | Action | Why it works | Owner |
|---|---|---|---|
| 1 | Fix entity consistency (3.1) before anything else | Models will not cite a source they cannot classify | Marketing |
| 2 | Publish 6 "reference" pages on topics Brilworks can own: Snowflake vs Databricks decision guide, Snowflake cost benchmark, Databricks migration cost model, AI agent cost model, offshore data engineering rates, embedded-team engagement models | Reference pages with tables and dated numbers are what answer engines quote | Content + engineering |
| 3 | Turn the 15 calculators into citable assets: publish the formula and assumptions as HTML under each tool | A calculator behind JavaScript is invisible; a published methodology is quotable | Engineering |
| 4 | Publish an annual first-party report ("State of Data Platform Costs 2027") from anonymised client data | Original data earns links and citations for a full year | Leadership |
| 5 | Add "How we work" facts pages: rates, team size, time zones, security posture, certifications, tooling | These answer the exact questions buyers put to AI assistants about vendors | Marketing |
| 6 | Get listed in third-party "best Databricks / Snowflake consulting partners" articles and directories | For "best X" prompts, assistants cite list articles, not vendor sites | Partnerships |
| 7 | Seed expert presence where models retrieve from: Stack Overflow, GitHub, Reddit data-engineering communities, dbt and Databricks community forums — as named engineers | Named expertise connects author entities to topics | Engineers |
| 8 | Build the `/compare/` section out to 10–12 pages and add it to the sitemap | Comparison prompts are the most common vendor-selection query type | Content |
| 9 | Track a fixed prompt set monthly (30 prompts across ChatGPT, Gemini, Perplexity, Claude, AI Overviews) and log mention and citation | Without a baseline, progress cannot be measured | SEO |
| 10 | Keep `llms.txt`, add `/pricing/` in HTML, and expose a clean Markdown version of key pages | Lowers extraction cost for agents | Engineering |

Starter prompt set to track: "best Databricks consulting partners for mid-market", "Snowflake migration consultants", "companies that build AI agents on Snowflake data", "hire offshore data engineers", "Toptal alternatives for data engineering", "how much does a Databricks migration cost", "data engineering firms in India for US companies".

---

# Part 4 — Prioritised Execution Roadmap

Effort: **S** under half a day · **M** 1–3 days · **L** a week or more.

## Phase 1 — Quick wins (weeks 1–2)

| # | Action | File / place | Effort | Impact |
|---|---|---|---|---|
| 1 | Move blog and ebook routes to ISR; return real 404s | `src/app/blog/[slug]/page.js`, `src/app/ebooks/[slug]/page.js` | M | Critical |
| 2 | Add the 12 Data & AI service pages, 4 compare pages, case-study hub and other missing pages to the sitemap | `src/app/components/lib/constants.js` | S | Critical |
| 3 | Remove from sitemap: the 404 URL, 3 `noindex` URLs, `/services/` until built | same | S | High |
| 4 | Fix 4 wrong canonicals; add canonicals to 23 pages | 2 tool pages, 2 product pages, use-case and ai-solutions templates, 7 service pages | S | High |
| 5 | Link `/databricks-partner/` and `/snowflake-partner/` from the header, homepage certification section and every data page | `constants.js`, `EnterpriseCertification.js` | S | High |
| 6 | Fix footer `//` link; fix 10 dead internal links and 34 missing trailing slashes; remove `dev.` and ticket links | `Footer/index.js:198`, Storyblok content | M | High |
| 7 | Replace global schema with the linked `@graph`; fix email, phone, `sameAs`, description; remove `SearchAction`; move `LocalBusiness` off inner pages | `schemaCode.js`, `layout.js` | M | High |
| 8 | Unify `og:site_name` to "Brilworks" across 217 pages | all `page.js` metadata | S | High |
| 9 | Add `Service` schema to 40 service pages and all hire and industry pages | `generateServiceSchema` already exists | M | Medium |
| 10 | Blog meta: `og:type=article`, published/modified times, `BreadcrumbList`, real word count, author `@id` | blog template | S | Medium |
| 11 | Rewrite titles over 60 characters and descriptions over 160 on service, hire, case-study and tool pages; fix the four weak titles | metadata | M | Medium |
| 12 | One H1 on 36 tool pages; add H1 to `/contact-us/` | tool template | S | Medium |
| 13 | Add default `og:image` for tools, portfolio, case studies, ebooks | metadata | S | Low |
| 14 | Deploy the new `robots.txt` | `src/app/robots.txt/route.js` | S | Medium |
| 15 | Fix `video-sitemap.xml` 404 entries | `src/app/video-sitemap.xml/route.js` | S | Low |
| 16 | 301 `/blog/author/*` and `/teams/*` to `/authors/*`; 301 `/services/ai-agent-development/` to the main page | `next.config.js` | S | Medium |
| 17 | Rewrite titles and descriptions on the high-impression, low-CTR pages in section 1.1 | Storyblok | M | High |
| 18 | 301 the two dead posts still earning impressions (section 1.1); `noindex` `/login/` | `next.config.js` | S | Medium |
| 19 | Find and remove the source of the "Review snippet" appearance if it is self-serving markup | Storyblok / subdomains | S | Medium |
| 20 | Export GSC Pages (indexing) and Crawl stats; validate fixes against the reasons in section 1.1 | Search Console | S | High |

## Phase 2 — Structural and architectural (weeks 3–6)

| # | Action | Effort | Impact |
|---|---|---|---|
| 1 | Server-render the blog index with paginated URLs and linked category pages | L | Critical |
| 2 | Generate the sitemap from routes and CMS; split into the five-file index; add the CI guard | M | High |
| 3 | Implement the five-silo linking model: `primary_service` field on posts, related-services and related-case-studies components on every template | L | Critical |
| 4 | Backfill `primary_service` on the 293 posts with no commercial link, starting with the highest-impression posts in section 1.1 | M | High |
| 5 | Build `/services/` hub, `/industries/` hub, `/pricing/` page | M | High |
| 6 | Visible, linked breadcrumbs on all templates | M | Medium |
| 7 | Performance: hero image priority on hire pages; `prefetch={false}` on nav and footer; enable image optimisation; trim third-party tags; reserve space on blog template | L | High |
| 8 | Merge `/portfolio/` into `/case-studies/` with structured fields and schema; resolve `/x/product-listing/` | L | High |
| 9 | Consolidate the confirmed cannibalisation clusters with 301s (section 2.3) | M | Medium |
| 10 | Decide the fate of `/ai-agents/*` (31), `/gist/*` (8), `/labs/`, `/posters/`: server-render real content or `noindex` and drop from sitemap | M | Medium |
| 11 | Rebalance the footer toward the five hubs and partner pages | S | Medium |
| 12 | Re-head service pages: query in the H1, definition sentence, one comparison table each | M | High |
| 13 | Rebuild author pages: bio, credentials, `ProfilePage` schema, post list | M | Medium |

## Phase 3 — Authority, GEO and content scale (months 2–3)

| # | Action | Effort | Impact |
|---|---|---|---|
| 1 | Entity clean-up across Clutch, GoodFirms, Crunchbase, G2, LinkedIn, Upwork and partner pages: one description, one founding year, one headcount | M | Critical |
| 2 | Secure and link the official Databricks, Snowflake and AWS partner directory listings | M | Critical |
| 3 | Publish the six reference pages and the calculator methodologies | L | High |
| 4 | BoFu expansion led by the commercial queries in section 1.1 (AWS consulting, hire Java / Node / React, Java outsourcing) plus the data pillar: hire × industry, hire × offshore, platform migration pages, 8 more compare pages | L | High |
| 5 | Data-pillar content: 30 posts on Snowflake, Databricks, dbt, Airflow, governance, data quality, MLOps | L | High |
| 6 | Six new data case studies with named or well-described clients | L | High |
| 7 | Refresh or merge the 48 year-stamped posts; apply the answer-first format to the top 100 posts by impressions | L | Medium |
| 8 | Launch the GitHub organisation with 3–5 repos | M | Medium |
| 9 | Request data-practice reviews on Clutch and G2; claim the G2 profile | S | Medium |
| 10 | Digital PR for inclusion in third-party partner lists; one first-party data report | L | High |
| 11 | Create the Wikidata item once independent sources exist | S | Medium |
| 12 | Monthly AI-visibility tracking against the fixed prompt set | S | Medium |

## How to measure success

| Metric | Baseline today | 90-day target |
|---|---|---|
| Blog posts served from cache | 0 of 521 | 521 |
| Dead `/blog/*` URLs returning 404 | 0% | 100% |
| Indexable pages missing from sitemap | ~45 | 0 |
| Sitemap URLs with zero internal links | 127 | 0 |
| Posts with a contextual link to a service page | 44% | 100% |
| Service pages with `Service` schema | 2 of 42 listed | all |
| Pages with wrong or missing canonical | 27 | 0 |
| Internal links that 404 or redirect | 45 targets | 0 |
| GSC: Soft 404 + "Page with redirect" + "Duplicate without canonical" | Unknown — export the Pages report | Down 80% |
| GSC: clicks per day, all pages | 26 (Oct 2026) | 45 |
| GSC: clicks to service, hire and industry pages | ~43 per month | 150 per month |
| GSC: US share of clicks | 7% | 15% |
| GSC: average position of the 19 hire pages | 45–68 | under 30 |
| GSC: clicks from Snowflake / Databricks / data-engineering queries | 7 in 16 months | 100 per month |
| AI prompt set: Brilworks mentioned | Unknown — run baseline | Set after baseline |

---

## Appendix A — Additional observations

- **Security:** `src/app/components/Teams/TeamAuthor.js` contains a hard-coded Storyblok token used with `version=draft` in browser code. If that is a preview token, unpublished content is readable by anyone. Rotate it and move the call to the server.
- **Publicly routable internal pages:** `/internal/casestudies/`, `/admin/consent-logs/`, `/dashboard/` resolve on the public site. `admin` is `noindex`; all should be disallowed and access-controlled.
- **Security headers:** HSTS is present. No Content-Security-Policy, X-Frame-Options, X-Content-Type-Options or Referrer-Policy on HTML responses.
- **Homepage cache age:** the prerendered homepage was 20 days old at crawl time, so the two "latest posts" it shows are stale.
- **About page:** contains the stat "60% Professional Employee", which appears to be a typo, and 535 words with no founder names, history or credentials in the server HTML.

## Appendix B — Method

- Crawl: all 726 URLs in `sitemap.xml`, plus 153 URLs that were linked internally or present in the codebase but not in the sitemap. Collected status, redirect chain, cache headers, title, description, canonical, robots, headings, JSON-LD, images, word counts and links.
- Link graph: built from server HTML only, which is what non-rendering crawlers see.
- Lab performance: Chromium with mobile emulation, 4× CPU throttling, slow-4G network profile. Third-party hosts and CMS image hosts were not reachable from the audit environment.
- Entity research: web search results only.
- Search Console: Performance export supplied by Brilworks (Web search, 10 Jul 2025 – 9 Nov 2026). Query and page files are capped at 1,000 rows by Google.

## Appendix C — Sources for third-party entity findings

- Clutch: https://clutch.co/profile/brilworks-software/
- GoodFirms: https://www.goodfirms.co/company/brilworks-software-llp
- Crunchbase: https://www.crunchbase.com/organization/brilworks
- G2: https://www.g2.com/products/brilworks-software/pricing
- Upwork: https://www.upwork.com/ag/brilworks/
- TechBehemoths: https://techbehemoths.com/company/brilworks-software-llp
- UpCity: https://upcity.com/profiles/brilworks-software
- dotCMS partner page: https://auth.dotcms.com/partners/brilworks
- Storyblok partner page: https://storyblok.com/pl/brilworks-technology
- YourStory: https://yourstory.com/companies/brilworks/amp
- TechReviewer: https://techreviewer.co/companies/brilworks-software
