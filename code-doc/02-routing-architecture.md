# Routing Architecture - Detailed Guide

## Overview

This project uses the **Next.js 13 App Router** with the experimental `appDir` feature. All routes are defined as folders inside `src/app/`, with `page.js` files serving as the entry point for each route.

---

## Route Types

### 1. Static Routes

These pages have hardcoded content (not CMS-driven). The component and data are defined directly in the source code.

| Route | File | Component Rendered |
|-------|------|--------------------|
| `/` | `src/app/page.js` | Imports and re-exports `HomePage` from `./home/page` |
| `/home/` | `src/app/home/page.js` | Renders 10 homepage sections |
| `/about-us/` | `src/app/about-us/page.js` | About page |
| `/career/` | `src/app/career/page.js` | Career listings |
| `/contact-us/` | `src/app/contact-us/page.js` | Contact form |
| `/our-process/` | `src/app/our-process/page.js` | Development process |
| `/labs/` | `src/app/labs/page.js` | Labs page |

### 2. Dynamic Routes (CMS-Driven)

These pages use `[slug]` parameters and fetch content from Storyblok at build/request time.

| Route Pattern | File | Storyblok Path |
|---------------|------|----------------|
| `/blog/[slug]/` | `src/app/blog/[slug]/page.js` | `blog/{slug}` |
| `/ai-solutions/[slug]/` | `src/app/ai-solutions/[slug]/page.js` | `ai-solutions/{slug}` |
| `/portfolio/[slug]/` | `src/app/portfolio/[slug]/page.js` | `portfolio/{slug}` |
| `/use-case/[slug]/` | `src/app/use-case/[slug]/page.js` | `use-case/{slug}` |
| `/ebooks/[slug]/` | `src/app/ebooks/[slug]/page.js` | `ebooks/{slug}` |
| `/product/[slug]/` | `src/app/product/[slug]/page.js` | `product/{slug}` |
| `/gist/{category}/[slug]/` | `src/app/gist/{category}/[slug]/page.js` | `gist/{category}/{slug}` |
| `/internal/casestudies/[casestudy]/` | `src/app/internal/casestudies/[casestudy]/page.js` | `internal/casestudies/{slug}` |
| `/dashboard/[slug]/` | `src/app/dashboard/[slug]/page.js` | `dashboard/{slug}` |

**Dynamic Route Pattern:**

```javascript
// 1. Pre-render all known slugs at build time
export async function generateStaticParams() {
  const data = await getblog();
  return data.map((item) => ({ slug: item.slug }));
}

// 2. Generate SEO metadata dynamically
export async function generateMetadata({ params }) {
  const data = await fetchData(params.slug);
  return {
    title: data?.story?.content?.SEO?.title,
    description: data?.story?.content?.SEO?.description,
    // ...openGraph, twitter, alternates
  };
}

// 3. Render the page
export default async function Page({ params }) {
  const { props: data } = await fetchData(params?.slug);
  if (!data?.story) return notFound();
  return <PageContent data={data} />;
}
```

### 3. Route Groups

Next.js route groups use parentheses `()` in folder names to organize routes without affecting the URL path.

#### `(services)` — 26+ Service Pages

All service pages follow the same pattern:

```
src/app/(services)/
├── generative-ai-development-services/page.js    → /generative-ai-development-services/
├── ai-ml-development-services/page.js             → /ai-ml-development-services/
├── aws-consulting-services/page.js                → /aws-consulting-services/
├── devops-consulting-services/page.js             → /devops-consulting-services/
├── kubernetes-consulting-services/page.js         → /kubernetes-consulting-services/
├── web-application-development-services/page.js   → /web-application-development-services/
├── mobile-app-development-services/page.js        → /mobile-app-development-services/
├── reactjs-development-services/page.js           → /reactjs-development-services/
├── react-native-app-development-services/page.js  → /react-native-app-development-services/
├── product-engineering-development-services/page.js
├── dedicated-development-team/page.js
├── staff-augmentation/page.js
├── saas-application-development/page.js
├── digital-experience-services/page.js
├── blockchain-development-services/page.js
├── erpnext-development-services/page.js
├── frappe-development-services/page.js
├── flutterflow-development-services/page.js
├── adalo-development-services/page.js
├── low-code-no-code-development-services/page.js
├── white-label-app-development-services/page.js
├── rapid-digitalization-services/page.js
├── fitness-app-development-services/page.js
├── business-development-services/page.js
├── upskill-staff-augmentation/page.js
└── web-app-development-services/page.js
```

**Service Page Pattern:**
```javascript
import GenerativeAIDevService from "@/app/components/Services/GenerativeAIDevService";

export const metadata = {
  title: "Generative AI Development Services | Brilworks",
  description: "...",
  openGraph: { title, description, url, siteName, images, locale, type },
  twitter: { title, description, card, site },
  alternates: { canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/generative-ai-development-services/` },
};

export default function Page() {
  return <GenerativeAIDevService />;
}
```

#### `(hire-team)` — 13 Hiring Pages

```
src/app/(hire-team)/
├── hire-reactjs-developer/page.js           → /hire-reactjs-developer/
├── hire-nodejs-developer/page.js            → /hire-nodejs-developer/
├── hire-java-developer/page.js              → /hire-java-developer/
├── hire-mobile-app-developer/page.js        → /hire-mobile-app-developer/
├── hire-aws-developer/page.js               → /hire-aws-developer/
├── hire-blockchain-developer/page.js        → /hire-blockchain-developer/
├── hire-ui-ux-designer/page.js              → /hire-ui-ux-designer/
├── hire-generative-ai-developer/page.js     → /hire-generative-ai-developer/
├── hire-react-native-developer/page.js      → /hire-react-native-developer/
├── hire-devops-engineer/page.js             → /hire-devops-engineer/
├── hire-flutter-developer/page.js           → /hire-flutter-developer/
├── hire-frappe-developer/page.js            → /hire-frappe-developer/
└── hire-erpnext-developer/page.js           → /hire-erpnext-developer/
```

#### `(newly-added)` — New Features

```
src/app/(newly-added)/
├── ai-studio/page.js                → /ai-studio/
├── ai-tools/                        → /ai-tools/ (with sub-routes)
│   ├── page.js
│   ├── ai-chatbot-conversational-solution/page.js
│   ├── ai-chatbot-knowledge-base/page.js
│   ├── ai-document-compliance-review/page.js
│   ├── ai-insights-and-automation/page.js
│   ├── ai-whatsapp-agent/page.js
│   └── pre-build-solutions/page.js
├── tools/                           → /tools/ (40+ calculators)
│   ├── page.js
│   ├── app-development-cost-calculator/page.js
│   ├── saas-pricing-model-calculator/page.js
│   ├── roi-calculator/page.js
│   └── ... (40+ more)
├── event-app-development/page.js    → /event-app-development/
├── free-mockups/page.js             → /free-mockups/
└── mvp-in-48-hours/page.js          → /mvp-in-48-hours/
```

#### `(ai-agent-tools)` — AI Agents

```
src/app/(ai-agent-tools)/
├── ai-agents/
│   ├── page.js                      → /ai-agents/ (grid listing)
│   ├── astrology/page.js            → /ai-agents/astrology/
│   ├── career/page.js               → /ai-agents/career/
│   ├── cooking/page.js              → /ai-agents/cooking/
│   ├── finance/page.js              → /ai-agents/finance/
│   ├── fitness/page.js              → /ai-agents/fitness/
│   ├── wellness/page.js             → /ai-agents/wellness/
│   └── ... (30+ more agents)
```

#### `(privacy-policy-and-T&C)` — Legal Pages

```
src/app/(privacy-policy-and-T&C)/
├── privacy-policy/page.js           → /privacy-policy/
├── terms-and-conditions/page.js     → /terms-and-conditions/
├── habiturise-privacy-policy/page.js
├── expenseflow-privacy-policy/page.js
├── ordernest-privacy-policy/page.js
├── healthvault-privacy-policy/page.js
└── ... (20+ product-specific privacy policies)
```

### 4. Industry Routes

Industry pages use a flat folder structure under `/industry/`:

```
src/app/industry/
├── fintech-software-development/page.js         → /industry/fintech-software-development/
├── healthcare-software-development/page.js      → /industry/healthcare-software-development/
├── edtech-software-development/page.js          → /industry/edtech-software-development/
├── e-commerce-app-development/page.js           → /industry/e-commerce-app-development/
├── media-entertainment/page.js                  → /industry/media-entertainment/
├── fleet-management/page.js                     → /industry/fleet-management/
├── manufacturing-software-development-services/page.js
└── hr-software-development/page.js
```

**Industry Page Pattern (with JSON-LD breadcrumbs):**
```javascript
import Fintech from "@/app/components/Solution/Fintech";
import { generateBreadcrumb } from "@/app/components/lib/schemaCode";

export const metadata = { /* ... */ };

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Fintech Software Development"),
        }}
      />
      <Fintech />
    </>
  );
}
```

### 5. Catch-All Routes

| Route | File | Purpose |
|-------|------|---------|
| `/api/auth/[...nextauth]/` | `src/app/api/auth/[...nextauth]/route.js` | Handles all NextAuth authentication routes |

### 6. API Routes

```
src/app/api/
├── auth/[...nextauth]/route.js    → NextAuth (Google + Credentials)
├── download/route.js              → PDF download proxy
├── newsletter/route.js            → Blog data updates
├── home-career/route.js           → Career applications
├── invite-user/route.js           → User invitations
├── message-store/route.js         → Chat message storage
├── page-blog/route.js             → Blog data endpoints
├── s3/assets/route.js             → AWS S3 asset handling
├── set-password/route.js          → Password management
├── users/route.js                 → User CRUD
└── whatsapp/route.js              → WhatsApp integration
```

### 7. Special Routes

| Route | File | Purpose |
|-------|------|---------|
| `/sitemap.js` | `src/app/sitemap.js` | Dynamic XML sitemap |
| `/blogs/feed.xml/` | `src/app/blogs/feed.xml/route.js` | RSS feed |

---

## Redirect System

Over **170 redirect rules** are configured in `next.config.js`:

```javascript
// next.config.js
async redirects() {
  return [
    { source: "/vugo/", destination: "/portfolio/", permanent: true },
    { source: "/careers/", destination: "/career/", permanent: true },
    { source: "/services/", destination: "/", permanent: true },
    { source: "/blog/:path/amp/", destination: "/blog/:path/", permanent: true },
    // ... 170+ more
  ];
}
```

All redirects use `permanent: true` (HTTP 301) for SEO link equity preservation.

---

## URL Configuration

### Trailing Slashes

All URLs end with `/` — enforced by `trailingSlash: true` in `next.config.js`.

- `/blog/my-post/` (correct)
- `/blog/my-post` (redirected to above)

### Canonical URLs

Every page sets a canonical URL in metadata:

```javascript
alternates: {
  canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/page-path/`,
}
```

---

## Gist Routes (Knowledge Base)

Tech gists are organized by technology category:

```
src/app/gist/
├── java/[slug]/page.js              → /gist/java/{slug}/
├── node/[slug]/page.js              → /gist/node/{slug}/
├── react/[slug]/page.js             → /gist/react/{slug}/
├── react-native/[slug]/page.js      → /gist/react-native/{slug}/
├── aws/[slug]/page.js               → /gist/aws/{slug}/
├── bubble-io/[slug]/page.js         → /gist/bubble-io/{slug}/
└── flutterflow/[slug]/page.js       → /gist/flutterflow/{slug}/
```

---

## Auth-Related Routes

```
src/app/
├── login/page.js                    → /login/
├── forget-password/page.js          → /forget-password/
├── verifyemail/[verifytoken]/page.js → /verifyemail/{token}/
```

---

## Adding a New Route

### Static Page

1. Create `src/app/(route-group)/page-name/page.js`
2. Export `metadata` for SEO
3. Import and render a component from `src/app/components/`

### Dynamic (CMS) Page

1. Create `src/app/content-type/[slug]/page.js`
2. Create a fetch function in `src/app/components/lib/`
3. Implement `generateStaticParams()` for build-time generation
4. Implement `generateMetadata()` for dynamic SEO
5. Update `src/app/sitemap.js` to include new content
