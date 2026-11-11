# Brilworks SEO & GEO — Action Plan

Extract of Part 4 of `FULL-AUDIT-REPORT.md` (audit date 11 November 2026). Section numbers refer to the full report.

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
