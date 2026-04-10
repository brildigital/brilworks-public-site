# Storyblok CMS Integration - Detailed Guide

## Overview

Brilworks uses **Storyblok** as a headless CMS. Content is created and managed in the Storyblok dashboard, then fetched via API and rendered by Next.js on the frontend. This is a **decoupled architecture** — Storyblok handles content, Next.js handles presentation.

---

## Initialization

Storyblok is initialized in **two places** — once for server components and once for client components.

### Server-Side Initialization

**File:** `src/app/layout.js`

```javascript
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  use: [apiPlugin],
});
```

This runs at the root layout level, making Storyblok available to all server components. The `rsc` import is specifically for React Server Components.

### Client-Side Initialization

**File:** `src/app/components/StoryblokProvider.js`

```javascript
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Article from "./Article";

const components = {
  article: Article,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  if (!children) return <ArticleSkeleton />;
  return children;
}
```

Key points:
- The `components` object maps Storyblok component names to React components
- Currently only `article` is mapped (used for blog posts)
- `StoryblokProvider` wraps the entire app in `layout.js`
- Shows `ArticleSkeleton` loading state when children are not ready

---

## Storyblok API Client

Two approaches are used for fetching data from Storyblok:

### Approach 1: StoryblokClient (SDK)

Used in utility functions for paginated/filtered queries.

**File:** `src/app/components/lib/getblog.js`

```javascript
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

// Example: Fetch all blog stories
export async function getblog() {
  let stories = await Storyblok.get("cdn/stories", {
    starts_with: "blog/",
    per_page: 100,
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    filter_query: {
      component: { in: "article" },
    },
  }, {
    next: { revalidate: 0 },
  });
  return stories.data.stories;
}
```

### Approach 2: Direct fetch() (CDN API)

Used in page components for individual story fetching with Next.js caching.

**File:** `src/app/blog/[slug]/page.js`

```javascript
async function fetchData(slug) {
  const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  const version = process.env.NEXT_PUBLIC_STORYBLOK_VERSION;
  const url = `https://api.storyblok.com/v2/cdn/stories/blog/${slug}?token=${accessToken}&version=${version}`;

  const options = {
    [process.env.VERCEL_ENV === "production" ? "next" : "cache"]:
      process.env.VERCEL_ENV === "production"
        ? { revalidate: 3600 }
        : "no-store",
  };

  const res = await fetch(url, options);
  const data = await res.json();
  return { props: data };
}
```

---

## Content Spaces & Folder Structure

Content in Storyblok is organized in folders that map to URL paths:

| Storyblok Folder | URL Route | Content Type | Fetch Function |
|------------------|-----------|--------------|----------------|
| `blog/` | `/blog/[slug]/` | Blog articles | `getblog()`, `getblogData()` |
| `ai-solutions/` | `/ai-solutions/[slug]/` | AI solution pages | Direct fetch |
| `portfolio/` | `/portfolio/[slug]/` | Case study pages | `getPortfolioData()` |
| `use-case/` | `/use-case/[slug]/` | Use case pages | Direct fetch |
| `ebooks/` | `/ebooks/[slug]/` | eBook pages | `getEbooksData()` |
| `internal/casestudies/` | `/internal/casestudies/[casestudy]/` | Internal case studies | `getCasestudyData()` |
| `dashboard/` | `/dashboard/[slug]/` | Dashboard content | `getRoleBasedUserContent()` |
| `gist/{technology}/` | `/gist/{category}/[slug]/` | Tech Q&A/gists | `getTechQandA()` |

---

## Data Fetching Functions - Complete Reference

### `getblog()` — Fetch all blog stories

**File:** `src/app/components/lib/getblog.js`

```javascript
export async function getblog() {
  let stories = await Storyblok.get("cdn/stories", {
    starts_with: "blog/",
    per_page: 100,
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    filter_query: {
      component: { in: "article" },
    },
  }, {
    next: { revalidate: 0 },
  });
  return stories.data.stories;
}
```

**Usage:** `generateStaticParams()` in blog pages, sitemap generation

---

### `getblogData()` — Paginated blog with filters

```javascript
export async function getblogData(
  page_no,        // Page number (default: 1)
  limit_per_page, // Items per page (default: 9)
  filter_category,    // Category filter (e.g., "Technology")
  search_query,       // Title search
  filter_subcategory  // Subcategory array filter
)
```

**Filter mechanics:**
- `Category` uses `in` operator (exact match)
- `subcategory` uses `any_in_array` (array intersection)
- `search_query` uses `like` operator with wildcards (`%query%`)

**Returns:** `{ storyData: stories[], totalData: number }`

---

### `getSuggestionblog()` — Smart related posts

Uses a **waterfall strategy** to find related posts:
1. First tries filtering by `subcategory` — if >= 3 results, returns them
2. Falls back to `search_query` (title match) — if >= 3 results, returns them
3. Falls back to `Category` filter
4. Returns empty if nothing matches

---

### `getblogSpecificAuthor()` — Author-filtered blogs

Filters by `BlogAuthor` field using `in` operator. Converts author slug to title case (e.g., `vikas-singh` → `Vikas Singh`).

---

### `getblogForFeed()` — All blogs for RSS feed

Paginates through all blog stories (100 per page) until no more data. Used by the RSS feed route at `/blogs/feed.xml/`.

---

### `getBlogForSitemap()` — All blogs for sitemap

Similar to `getblogForFeed()` but transforms data into sitemap format:
```javascript
{ name, loc: `https://www.brilworks.com/${full_slug}/`, lastmod: published_at }
```

---

### `getCasestudyData()` — Internal case studies

**File:** `src/app/components/lib/getStoryblokData.js`

```javascript
export async function getCasestudyData() {
  let stories = await Storyblok.get("cdn/stories/", {
    starts_with: `internal/casestudies/`,
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
  });
  return { storyData: stories.data.stories, totalData: stories.total };
}
```

---

### `getEbooksData()` — eBook listing

**File:** `src/app/components/lib/getEbooks.js`

```javascript
export async function getEbooksData(page_no, limit_per_page, search_query) {
  let apiParams = {
    starts_with: "ebooks/",
    page: page_no || 1,
    per_page: limit_per_page || 9,
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
  };
  if (search_query) {
    apiParams.search_term = search_query;
  }
  let stories = await Storyblok.get("cdn/stories", apiParams, {
    next: { revalidate: 3600 },
  });
  return { storyData: stories.data.stories, totalData: stories.total };
}
```

---

### `getRoleBasedUserContent()` — Dashboard content

**File:** `src/app/components/lib/getRoleBasedUserContent.js`

Fetches from `dashboard/` folder. Used for authenticated dashboard pages.

---

### `getTechQandA()` — Tech gist content

**File:** `src/app/components/lib/getTechQandA.js`

```javascript
export async function getTechQandA(technology, page_no, limit_per_page, search_query) {
  let apiParams = {
    starts_with: `gist/${technology}`,
    // ... pagination and search params
  };
}
```

---

## Storyblok Content Fields

### Blog Article Component

| Field | Type | Description |
|-------|------|-------------|
| `title` | String | Article title |
| `long_description` | Rich Text | Main article body |
| `image` | Asset | Featured image |
| `seoImage` | Asset | OG/Twitter card image |
| `Category` | Option | Article category |
| `subcategory` | Multi-option | Sub-categories |
| `author` | String | Author name |
| `BlogAuthor` | String | Author identifier for filtering |
| `date` | Date | Publish date |
| `SEO` | Object | SEO metadata (title, description, og_image) |
| `faqSection` | Blocks | FAQ content blocks |
| `Tags` | Tags | Article tags |
| `quickSummary` | Rich Text | Article summary |
| `content_1`, `content_2` | Rich Text | Additional content sections |

### AI Solutions Component

| Field | Type | Description |
|-------|------|-------------|
| `title` | String | Solution title |
| `description` | Rich Text | Solution description |
| `videoLink` | String | YouTube video URL |
| `buttontext` | String | CTA button text |
| `buttonURL` | String | CTA button link |
| `Working` | Blocks | How it works steps |
| `what_users_say` | Blocks | Testimonials |
| `seamless_integration` | Blocks | Integration features |
| `FAQ` | Blocks | FAQ items |
| `CTA` | Blocks | CTA sections |

### Portfolio Component

| Field | Type | Description |
|-------|------|-------------|
| `name` | String | Project name |
| `projectDescription` | Rich Text | Project overview |
| `projectChallenges` | Rich Text | Challenges faced |
| `challengeImage` | Asset | Challenge illustration |
| `overviewImage` | Asset | Overview image |
| `productImages` | Assets | Product screenshots |
| `designImages` | Assets | Design assets |
| `blueprintData` | Blocks | Blueprint details |
| `solutionSection` | Blocks | Solution details |
| `SEO` | Object | SEO metadata |

### eBook Component

| Field | Type | Description |
|-------|------|-------------|
| `title` | String | eBook title |
| `description` | Rich Text | Description |
| `coverImage` | Asset | Cover image |
| `whatsInsideBook` | Blocks | Content preview |
| `reasonsToRead` | Blocks | Benefits |
| `downloadLink` | String | PDF download URL |
| `SEO` | Object | SEO metadata |

---

## Caching & Revalidation Strategy

| Content Type | Revalidation | Rationale |
|--------------|-------------|-----------|
| Blog listing (`getblog`) | `revalidate: 0` | Always fresh for `generateStaticParams` |
| Blog data (`getblogData`) | `revalidate: 3600` | 1-hour ISR for paginated listings |
| Blog detail (direct fetch) | `revalidate: 3600` (prod) / `no-store` (dev) | Environment-aware |
| AI Solutions | `revalidate: 3600` (prod) / `no-store` (dev) | Same pattern |
| eBooks | `revalidate: 3600` | 1-hour ISR |
| Case studies | No explicit cache | Default behavior |
| Dashboard | `revalidate: 3600` | 1-hour ISR |
| Tech Q&A | `revalidate: 3600` | 1-hour ISR |

### Environment-Aware Caching Pattern

```javascript
const options = {
  [process.env.VERCEL_ENV === "production" ? "next" : "cache"]:
    process.env.VERCEL_ENV === "production"
      ? { revalidate: 3600 }
      : "no-store",
};
```

- **Production (Vercel):** Uses `next.revalidate` for ISR
- **Development:** Uses `cache: "no-store"` for fresh data on every request

---

## Storyblok Version Management

The `NEXT_PUBLIC_STORYBLOK_VERSION` environment variable controls which content version is fetched:

- `"draft"` — Fetches unpublished/draft content (for preview/staging)
- `"published"` — Fetches only published content (for production)

This allows the same codebase to work in both preview and production modes.

---

## Rich Text Rendering

Blog content (Storyblok rich text) is rendered using two methods:

### Method 1: StoryblokStory Component

Used in blog detail pages to render the full article with Storyblok's component system:

```javascript
import { StoryblokStory } from "@storyblok/react/rsc";
<StoryblokStory story={storyData.story} />
```

### Method 2: html-react-parser

Used in the `Article` component for parsing HTML content with custom transformations:

```javascript
import parse from "html-react-parser";

// Add lazy loading to images, handle external links
const options = {
  replace: (domNode) => {
    if (domNode.name === "img") {
      // Add loading="lazy"
    }
    if (domNode.name === "a" && isExternalLink(href)) {
      // Add rel="nofollow" target="_blank"
    }
  },
};

{parse(htmlContent, options)}
```

---

## Adding New Content Types

To add a new Storyblok-driven content type:

1. **Create the content type in Storyblok dashboard** — Define the component schema with fields
2. **Create a data fetching function** in `src/app/components/lib/` following the existing pattern
3. **Create a dynamic route** at `src/app/{content-type}/[slug]/page.js`
4. **Implement `generateStaticParams`** for static generation
5. **Implement `generateMetadata`** for SEO
6. **Register the component** in `StoryblokProvider.js` if using `StoryblokStory`
7. **Update sitemap** in `src/app/sitemap.js` to include the new content type
