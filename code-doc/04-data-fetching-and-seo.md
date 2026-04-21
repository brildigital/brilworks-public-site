# Data Fetching, Caching & SEO - Detailed Guide

## Data Fetching Strategies

### 1. Static Generation with `generateStaticParams`

Used by CMS-driven pages to pre-render all known slugs at build time.

**Blog example:**
```javascript
// src/app/blog/[slug]/page.js
export async function generateStaticParams() {
  const blogs = await getblog();
  return blogs.map((blog) => ({ slug: blog.slug }));
}
```

**AI Solutions example:**
```javascript
// src/app/ai-solutions/[slug]/page.js
async function getAllSlugs() {
  const url = `https://api.storyblok.com/v2/cdn/stories?starts_with=ai-solutions/&token=${accessToken}&version=${version}`;
  const res = await fetch(url, options);
  const data = await res.json();
  return data.stories;
}

export async function generateStaticParams() {
  const stories = await getAllSlugs();
  return stories.map((story) => ({ slug: story.slug }));
}
```

### 2. ISR (Incremental Static Regeneration)

Most Storyblok pages use ISR with a 1-hour revalidation window:

```javascript
const options = {
  [process.env.VERCEL_ENV === "production" ? "next" : "cache"]:
    process.env.VERCEL_ENV === "production"
      ? { revalidate: 3600 }   // Revalidate every 1 hour
      : "no-store",             // Always fresh in development
};
```

**How this works:**
- In production (Vercel): Pages are cached and served statically. After 3600 seconds, the next request triggers a background regeneration.
- In development: Every request fetches fresh data from Storyblok.

### 3. No-Cache Fetching

Some functions use `revalidate: 0` for always-fresh data:

```javascript
// getblog() uses revalidate: 0 because it feeds generateStaticParams
let stories = await Storyblok.get("cdn/stories", params, {
  next: { revalidate: 0 },
});
```

### 4. Storyblok SDK Fetching

Using the `storyblok-js-client` library:

```javascript
const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

// Basic fetch
let stories = await Storyblok.get("cdn/stories", {
  starts_with: "blog/",
  page: 1,
  per_page: 9,
  version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
}, {
  next: { revalidate: 3600 },
});
```

### 5. Pagination

All listing pages support pagination through Storyblok's `page` and `per_page` params:

```javascript
let apiParams = {
  starts_with: "blog/",
  page: page_no || 1,
  per_page: limit_per_page || 9,
  version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
};
```

The response includes `stories.total` for calculating total pages.

### 6. Filtering

#### Category Filter
```javascript
filter_query: {
  Category: { in: "Technology" }  // Exact match
}
```

#### Subcategory Filter
```javascript
filter_query: {
  subcategory: { any_in_array: "react,node" }  // Any value in array
}
```

#### Search Filter
```javascript
filter_query: {
  __or: [
    { title: { like: "%search term%" } }  // Title contains search term
  ]
}
```

#### Combined Filters
```javascript
filter_query: {
  component: { in: "article" },
  Category: { in: filter_category },
  subcategory: { any_in_array: filter_subcategory },
  __or: [{ title: { like: `%${search_query}%` } }],
}
```

#### Author Filter
```javascript
filter_query: {
  BlogAuthor: { in: "Vikas Singh" }
}
```

### 7. Full Pagination (All Pages)

For sitemap and RSS feed, all pages are fetched:

```javascript
export async function getblogForFeed() {
  let allStories = [];
  let page = 1;
  let hasMoreData = true;

  while (hasMoreData) {
    const response = await Storyblok.get("cdn/stories", {
      starts_with: "blog/",
      page,
      per_page: 100,
      version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
      filter_query: { component: { in: "article" } },
    });

    allStories.push(...response.data.stories);
    hasMoreData = response.data.stories.length === 100;
    page++;
  }

  return allStories;
}
```

---

## Caching Strategy Summary

| Content | Revalidation | Location |
|---------|-------------|----------|
| Blog listing (all) | `revalidate: 0` | `getblog()` |
| Blog listing (paginated) | `revalidate: 3600` | `getblogData()` |
| Blog detail | `revalidate: 3600` (prod) / `no-store` (dev) | `blog/[slug]/page.js` |
| AI Solutions | `revalidate: 3600` (prod) / `no-store` (dev) | `ai-solutions/[slug]/page.js` |
| Portfolio | `revalidate: 3600` (prod) / `no-store` (dev) | `portfolio/[slug]/page.js` |
| eBooks | `revalidate: 3600` | `getEbooksData()` |
| Use Cases | `revalidate: 3600` (prod) / `no-store` (dev) | `use-case/[slug]/page.js` |
| Case Studies | Default (no explicit cache) | `getCasestudyData()` |
| Dashboard | `revalidate: 3600` | `getRoleBasedUserContent()` |
| Tech Q&A | `revalidate: 3600` | `getTechQandA()` |

---

## SEO & Metadata

### Metadata Pattern 1: Static (Service/Industry Pages)

Used by pages with hardcoded content:

```javascript
// src/app/(services)/generative-ai-development-services/page.js
export const metadata = {
  title: "Generative AI Development Services | Brilworks",
  description: "Brilworks offers generative AI development services...",
  openGraph: {
    title: "Generative AI Development Services | Brilworks",
    description: "...",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/generative-ai-development-services/`,
    siteName: "Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/og-image.jpg`,
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Generative AI Development Services | Brilworks",
    description: "...",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/generative-ai-development-services/`,
  },
};
```

### Metadata Pattern 2: Dynamic (Blog/CMS Pages)

Used by CMS-driven pages that fetch metadata from Storyblok:

```javascript
// src/app/blog/[slug]/page.js
export async function generateMetadata({ params }) {
  const { props: storyData } = await fetchData(params.slug);
  const story = storyData?.story;
  const seo = story?.content?.SEO;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return {
    title: seo?.title || story?.name,
    description: seo?.description,
    openGraph: {
      title: seo?.title,
      description: seo?.description,
      url: `${baseUrl}/blog/${params.slug}/`,
      siteName: "Brilworks",
      images: [{ url: formatSrcUrl(seo?.og_image) }],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      title: seo?.title,
      description: seo?.description,
      card: "summary_large_image",
      site: "@_Brilworks",
    },
    alternates: {
      canonical: `${baseUrl}/blog/${params.slug}/`,
    },
  };
}
```

### Metadata Pattern 3: Use Case Pages

Use case pages use a `Metatags` field instead of `SEO`:

```javascript
// src/app/use-case/[slug]/page.js
export async function generateMetadata({ params }) {
  const { props: storyData } = await fetchData(params.slug);
  const metatags = storyData?.story?.content?.Metatags;
  return {
    title: metatags?.title,
    description: metatags?.description,
    // ...
  };
}
```

---

## Structured Data (JSON-LD Schema)

### Schema Definitions

**File:** `src/app/components/lib/schemaCode.js`

#### Organization Schema (Global)
```javascript
export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Brilworks",
  url: "https://www.brilworks.com",
  logo: "https://www.brilworks.com/images/logo-black.svg",
  sameAs: [
    "https://www.facebook.com/brilwork",
    "https://www.linkedin.com/company/brilworks",
    "https://www.instagram.com/brilworkssoftware",
    "https://www.youtube.com/@brilworks",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "sales@brilworks.com",
  },
};
```

#### Local Business Schema (Global)
```javascript
export const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Brilworks",
  address: {
    "@type": "PostalAddress",
    streetAddress: "503, Fortune Business Hub, Science City Road, Sola",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
    postalCode: "380060",
  },
  telephone: "+91 9313644148",
  openingHours: "Mo-Fr 10:00-19:00",
  geo: { latitude: 23.071, longitude: 72.5158 },
};
```

#### Website Schema (Global)
```javascript
export const website = {
  "@context": "https://schema.org",
  "@graph": [{
    "@type": "WebSite",
    url: "https://www.brilworks.com/",
    name: "Brilworks",
    potentialAction: [{
      "@type": "SearchAction",
      target: { urlTemplate: "https://www.brilworks.com/?s={search_term_string}" },
    }],
  }],
};
```

#### Breadcrumb Schema (Per Page)
```javascript
export function generateBreadcrumb(secondPositionName) {
  return JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.brilworks.com/" },
      { "@type": "ListItem", position: 2, name: secondPositionName },
    ],
  });
}
```

Usage in industry pages:
```javascript
<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: generateBreadcrumb("Fintech Software Development") }}
/>
```

#### Rating Schema (Blog Articles)
```javascript
export function generateRatingSchema(title, pageURL, ratingValue, ratingCount) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    url: `https://www.brilworks.com/${pageURL}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue, reviewCount: ratingCount, bestRating: 5,
    },
  });
}
```

Ratings are hardcoded for specific blog posts via `showRatingBasedOnPathname` object in `blog/[slug]/page.js`.

#### Video Schema (AI Solutions)
```javascript
export function generateVideoSchema({ name, description, thumbnailUrl, uploadDate, contentUrl, embedUrl }) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name, description, thumbnailUrl, uploadDate, contentUrl, embedUrl,
  });
}
```

#### FAQ Schema (Homepage)
```javascript
export const homepageFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why Choose Brilworks?",
      acceptedAnswer: { "@type": "Answer", text: "..." },
    },
    // ... 10 FAQ items
  ],
};
```

### Where Schemas Are Injected

| Schema | Location | Method |
|--------|----------|--------|
| Organization, LocalBusiness, Website | `ScriptLoader.js` (global) | Delayed script injection |
| Breadcrumbs | Industry pages, homepage | `dangerouslySetInnerHTML` or `next/script` |
| Rating | Specific blog posts | `next/script` |
| Video | AI Solutions detail pages | `next/script` |
| FAQ | Homepage | `next/script` |

---

## Sitemap Generation

**File:** `src/app/sitemap.js`

```javascript
import { sitemapData, blogListStaticData } from "./components/lib/constants";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return [
    { url: baseUrl, lastModified: new Date() },
    ...sitemapData,           // Static page URLs from constants
    ...blogListStaticData,    // Blog URLs from constants
  ];
}
```

Note: The sitemap currently uses pre-built data from `constants.js` rather than fetching live from Storyblok at build time.

---

## RSS Feed

**File:** `src/app/blogs/feed.xml/route.js`

Generates an XML RSS feed using `getblogForFeed()` which fetches all blog posts from Storyblok.

---

## ScriptLoader (Analytics & Tracking)

**File:** `src/app/ScriptLoader.js`

A client component that loads third-party scripts after a 3-second delay:

1. **Google Tag Manager** — `googleTagManagerID`
2. **Clearbit** — For visitor identification
3. **Schema scripts** — Organization, Website, LocalBusiness JSON-LD
4. **Factors AI** — Analytics
5. **Microsoft Clarity** — Heatmaps and session recording

It also:
- Fetches user IP via ipify API
- Gets geolocation via ipapi.co
- Stores location data in a `user-data` cookie (7-day expiry)

---

## Utility Functions for Content

**File:** `src/app/components/lib/commonFunction.js`

| Function | Purpose |
|----------|---------|
| `calculateReadingTime(content)` | Estimates reading time at 200 WPM |
| `formattedDate(dateString)` | Formats dates as "Month Day, Year" |
| `blogAuthor(authorName)` | Returns author data (image, LinkedIn, bio) for 4 known authors: Hitesh Umaletiya, Vikas Singh, Lavesh Katariya, Colin Shah |
| `formatSrcUrl(url)` | Converts Storyblok asset URLs to CloudFront CDN URLs |
| `getYouTubeThumbnail(url)` | Extracts YouTube video ID and returns maxresdefault thumbnail URL |
| `suggestSimilarBlogPosts(title)` | Maps blog title keywords to categories for related posts |
| `convertParamsToString(input)` | Converts URL slugs to title case (e.g., "vikas-singh" → "Vikas Singh") |
| `isExternalLink(href)` | Checks if a link points outside allowed domains |
| `scrollToSection(e, sectionId)` | Smooth scrolls to a section by ID |
| `scrollEffect()` | Adds "active" class to `.reveal` elements when scrolled into view |
| `hasSubmittedForm(route)` / `markFormSubmitted(route)` | Track form submissions per route in localStorage |
| `handleDownloadFile(url)` | Downloads a file via fetch + blob URL |
| `getPageNumbers(currentPage, total, perPage)` | Calculates pagination page numbers |
