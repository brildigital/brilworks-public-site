# Brilworks Public Website - Project Knowledge Document

**URL:** [www.brilworks.com](https://www.brilworks.com)
**Framework:** Next.js 13.4.5 (App Router)
**CMS:** Storyblok (Headless approach)
**Hosting:** Vercel

---

## Documentation Index

This is the overview document. For detailed deep-dives, see the companion documents:

| Document | Description |
|----------|-------------|
| [01-storyblok-integration.md](./01-storyblok-integration.md) | Storyblok CMS setup, API client, data fetching functions, content types, caching strategy |
| [02-routing-architecture.md](./02-routing-architecture.md) | Complete route map, route groups, dynamic routes, redirects, URL configuration |
| [03-component-reference.md](./03-component-reference.md) | All components by category — Homepage, Services, Industry, AI Solutions, AI Agents, Tools, Header/Footer, Common/Shared |
| [04-data-fetching-and-seo.md](./04-data-fetching-and-seo.md) | ISR/SSG patterns, Storyblok filtering, metadata patterns, JSON-LD schemas, sitemap, RSS feed |
| [05-styling-and-configuration.md](./05-styling-and-configuration.md) | Tailwind config, SCSS files, CSS variables, next.config.js, package dependencies, environment variables |
| [06-api-routes-and-auth.md](./06-api-routes-and-auth.md) | NextAuth setup, API route reference, SendGrid/HubSpot/Slack integrations, database schema |
| [07-page-implementation-patterns.md](./07-page-implementation-patterns.md) | Exact code patterns for each page type — homepage, service, industry, blog, AI solutions, portfolio, use cases, eBooks, AI agents, tools |

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Project Structure](#2-project-structure)
3. [Storyblok CMS Integration](#3-storyblok-cms-integration)
4. [Routing & Page Types](#4-routing--page-types)
5. [Component Architecture](#5-component-architecture)
6. [Homepage Implementation](#6-homepage-implementation)
7. [Service Pages](#7-service-pages)
8. [Industry Pages](#8-industry-pages)
9. [Blog System](#9-blog-system)
10. [AI Solutions Pages](#10-ai-solutions-pages)
11. [Use Case Pages](#11-use-case-pages)
12. [AI Agents System](#12-ai-agents-system)
13. [Tools & Calculators](#13-tools--calculators)
14. [eBooks & Resources](#14-ebooks--resources)
15. [Header & Navigation System](#15-header--navigation-system)
16. [SEO & Metadata](#16-seo--metadata)
17. [Data Fetching Patterns](#17-data-fetching-patterns)
18. [Styling Approach](#18-styling-approach)
19. [API Routes](#19-api-routes)
20. [Authentication](#20-authentication)
21. [Third-Party Integrations](#21-third-party-integrations)
22. [Environment Variables](#22-environment-variables)
23. [Build & Deployment](#23-build--deployment)

---

## 1. Architecture Overview

Brilworks is a **software consulting company website** built with a **headless CMS architecture**:

- **Frontend:** Next.js 13+ with App Router (React Server Components)
- **CMS:** Storyblok (headless) — content is managed in Storyblok and fetched via API
- **Rendering Strategy:** Hybrid — combination of SSG (Static Site Generation) with ISR (Incremental Static Regeneration) for CMS-driven pages, and static rendering for hardcoded pages
- **Component-Based:** Each page is assembled from reusable, self-contained components
- **Styling:** Tailwind CSS + SCSS for custom styles
- **Database:** Prisma ORM (for auth, chat sessions, user management)

### Key Design Decisions

| Decision | Details |
|----------|---------|
| App Router | Uses Next.js 13 experimental `appDir` for file-based routing |
| Headless CMS | Storyblok stores blog posts, AI solutions, portfolios, use cases, eBooks — fetched at build/request time |
| ISR | CMS content pages revalidate every 3600 seconds (1 hour) in production |
| Route Groups | Parenthesized folders `(services)`, `(hire-team)`, etc. organize routes without affecting URL paths |
| Dynamic Imports | Heavy components are lazily loaded with `next/dynamic` for performance |
| Trailing Slash | All URLs end with `/` (configured in `next.config.js`) |

---

## 2. Project Structure

```
brilworks-public-site/
├── next.config.js                    # Next.js configuration (redirects, image domains, experimental flags)
├── tailwind.config.js                # Tailwind theme customization
├── package.json                      # Dependencies and scripts
├── prisma/                           # Prisma ORM schema and migrations
│   └── schema.prisma
├── models/                           # Database models (ChatSession.js)
├── public/                           # Static assets (images, SVGs, fonts)
│   └── images/
├── src/
│   ├── app/
│   │   ├── layout.js                 # Root layout (Storyblok init, Header, Footer)
│   │   ├── page.js                   # Root page (renders /home)
│   │   ├── globals.css               # Global CSS (Tailwind imports)
│   │   ├── sitemap.js                # Dynamic sitemap generation
│   │   ├── ScriptLoader.js           # GTM, Facebook Pixel, Tawk.to scripts
│   │   │
│   │   ├── home/page.js              # Homepage with all sections
│   │   ├── blog/                     # Blog listing + [slug] dynamic routes
│   │   ├── ai-solutions/             # AI solutions with [slug] dynamic routes
│   │   ├── use-case/                 # Use case pages with [slug]
│   │   ├── portfolio/                # Portfolio/case studies with [slug]
│   │   ├── ebooks/                   # eBook pages with [slug]
│   │   ├── industry/                 # Industry solution pages
│   │   │
│   │   ├── (services)/               # Route group: 26+ service pages
│   │   ├── (hire-team)/              # Route group: 13 hiring pages
│   │   ├── (newly-added)/            # Route group: tools, AI tools, MVP, mockups
│   │   ├── (ai-agent-tools)/         # Route group: 33 AI agent pages
│   │   ├── (privacy-policy-and-T&C)/ # Route group: legal pages
│   │   │
│   │   ├── api/                      # API routes (auth, download, newsletter, etc.)
│   │   ├── context/                  # React contexts (AIAgentUserContext)
│   │   ├── styles/                   # SCSS stylesheets
│   │   └── components/               # All React components
│   │       ├── Homepage/             # Homepage section components
│   │       ├── Services/             # 36 service page components
│   │       ├── Solution/             # 9 industry solution components
│   │       ├── AISolutions/          # AI solution components
│   │       ├── AITools/              # AI tool components
│   │       ├── AiAgents/             # 39 AI agent components
│   │       ├── Tools/                # 49 calculator/tool components
│   │       ├── Blog/                 # Blog-related components
│   │       ├── Header/               # Header variants and mega menu
│   │       ├── Footer/               # Footer component
│   │       ├── Common/               # Shared/reusable components
│   │       ├── HTMLComponents/       # Heading, etc.
│   │       └── lib/                  # Utilities, data fetching, constants
│   └── context/                      # AIAgentUserContext provider
```

---

## 3. Storyblok CMS Integration

### Initialization

Storyblok is initialized at the root layout level:

**File:** `src/app/layout.js`
```javascript
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  use: [apiPlugin],
});
```

### Storyblok Provider

**File:** `src/app/components/StoryblokProvider.js`
- Wraps the app to enable Storyblok component rendering
- Registers component mapping (currently maps `article` component)
- Shows `ArticleSkeleton` during loading

### Content Types Managed in Storyblok

| Content Type | Storyblok Path | Local Route | Fetch Function |
|--------------|---------------|-------------|----------------|
| Blog Articles | `blog/*` | `/blog/[slug]` | `getblog()`, `getblogData()` |
| AI Solutions | `ai-solutions/*` | `/ai-solutions/[slug]` | `getAllSlugs()`, direct fetch |
| Portfolio | `portfolio/*` | `/portfolio/[slug]` | `getPortfolioData()` |
| Use Cases | `use-case/*` | `/use-case/[slug]` | direct fetch |
| eBooks | `ebooks/*` | `/ebooks/[slug]` | `getEbooksData()` |
| Case Studies | `internal/casestudies/*` | `/internal/casestudies/[casestudy]` | `getCasestudyData()` |
| Dashboard | `dashboard/*` | `/dashboard/[slug]` | `getRoleBasedUserContent()` |

### Data Fetching Library

**File:** `src/app/components/lib/getblog.js` — Main blog data fetching with 8 functions:
- `getblog()` — All blog stories
- `getblogData(page, limit, category, search, subcategory)` — Paginated with filters
- `getSuggestionblog()` — Related posts
- `getblogSpecificAuthor()` — Author-filtered
- `getblogForFeed()` — RSS feed data
- `getBlogForSitemap()` — Sitemap entries

**File:** `src/app/components/lib/getStoryblokData.js` — Case study data fetching
**File:** `src/app/components/lib/getEbooks.js` — eBook data fetching
**File:** `src/app/components/lib/getTechQandA.js` — Tech Q&A data

### Storyblok API Client

```javascript
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});
```

Alternatively, direct `fetch()` calls are used with the Storyblok CDN API:
```javascript
const url = `https://api.storyblok.com/v2/cdn/stories/blog/${slug}?token=${accessToken}&version=${version}`;
```

---

## 4. Routing & Page Types

### Route Groups (URL-invisible grouping)

| Route Group | Purpose | Example Pages |
|-------------|---------|---------------|
| `(services)` | Service offering pages | generative-ai-development-services, aws-consulting-services, devops-consulting-services |
| `(hire-team)` | Hire developer pages | hire-reactjs-developer, hire-nodejs-developer, hire-java-developer |
| `(newly-added)` | New features/tools | ai-tools, ai-studio, tools, mvp-in-48-hours, free-mockups |
| `(ai-agent-tools)` | AI agent pages | ai-agents (listing), ai-agents/finance, ai-agents/fitness, etc. |
| `(privacy-policy-and-T&C)` | Legal pages | privacy-policy, terms-and-conditions, product-specific policies |

### Dynamic Routes (CMS-driven)

| Route Pattern | Example URL | Data Source |
|---------------|-------------|-------------|
| `/blog/[slug]` | `/blog/nextjs-tutorial/` | Storyblok `blog/` |
| `/ai-solutions/[slug]` | `/ai-solutions/mysql-chatbot/` | Storyblok `ai-solutions/` |
| `/portfolio/[slug]` | `/portfolio/vugo/` | Storyblok `portfolio/` |
| `/use-case/[slug]` | `/use-case/aws-for-iot/` | Storyblok `use-case/` |
| `/ebooks/[slug]` | `/ebooks/ai-guide/` | Storyblok `ebooks/` |
| `/product/[slug]` | `/product/some-product/` | Storyblok `product/` |
| `/gist/{category}/[slug]` | `/gist/java/spring-boot-tips/` | Storyblok gist data |

### Static Routes

| Route | File | Purpose |
|-------|------|---------|
| `/` | `src/app/page.js` → `src/app/home/page.js` | Homepage |
| `/about-us/` | `src/app/about-us/page.js` | About page |
| `/career/` | `src/app/career/page.js` | Careers |
| `/contact-us/` | `src/app/contact-us/page.js` | Contact form |
| `/our-process/` | `src/app/our-process/page.js` | Development process |
| `/labs/` | `src/app/labs/page.js` | Labs page |

### Special Routes

| Route | File | Purpose |
|-------|------|---------|
| `/sitemap.js` | `src/app/sitemap.js` | Dynamic sitemap generation |
| `/blogs/feed.xml/` | `src/app/blogs/feed.xml/route.js` | RSS feed |
| `/api/auth/[...nextauth]` | Catch-all NextAuth routes | Authentication |

### Redirects

Over **500 redirects** are configured in `next.config.js` for SEO preservation (all 301 permanent).

---

## 5. Component Architecture

### Component Categories

1. **Page-Specific Components** — Used by a single page type (e.g., `Homepage/HeroSection.js`)
2. **Shared/Common Components** — Reused across multiple pages (e.g., `Common/CTASection.js`)
3. **Layout Components** — Header, Footer, navigation
4. **Library/Utility** — Data fetching, schema generation, helper functions

### Component Rendering Model

- **Server Components (default):** Most page-level and data-fetching components are async server components
- **Client Components:** Marked with `"use client"` for interactivity (forms, accordions, chat interfaces, calculators)

### Dynamic Import Pattern

Heavy components are lazily loaded to reduce initial bundle size:

```javascript
const BrilliantInThought = dynamic(() =>
  import("../components/Homepage/BrilliantInThought")
);
```

---

## 6. Homepage Implementation

**File:** `src/app/home/page.js`

The homepage is composed of 10+ section components, many loaded dynamically:

| Component | Purpose |
|-----------|---------|
| `HeroSection` | Main hero banner with gradient heading and CTA |
| `BrilliantInThought` | Feature/capability showcase |
| `ExploreOurExpertise` | Technology expertise grid |
| `SeeingBelieving` | Social proof / testimonials section |
| `ClientReviews` | Customer reviews carousel |
| `IndustriesWeServe` | Industry sectors display |
| `Honors` | Awards and certifications |
| `HomepageWhyChooseUs` | Value propositions |
| `HomePageBlogs` | Recent blog articles |
| `ContactUs` | Contact form section |

**Location:** `src/app/components/Homepage/`

The homepage also includes JSON-LD breadcrumb schema via `<Script>` tag.

---

## 7. Service Pages

### Structure

All service pages live under the `(services)` route group. Each page:
1. Exports static `metadata` for SEO
2. Imports and renders a service-specific component from `src/app/components/Services/`

### Service Components (36 total)

Located in `src/app/components/Services/`:

| Component | URL Path |
|-----------|----------|
| `GenerativeAIDevService` | `/generative-ai-development-services/` |
| `AIMLService` | `/ai-ml-development-services/` |
| `AWSService` | `/aws-consulting-services/` |
| `DevOpsService` | `/devops-consulting-services/` |
| `KubernetesConsultingService` | `/kubernetes-consulting-services/` |
| `ApplicationDevelopmentService` | `/web-application-development-services/` |
| `ReactJSDevelopmentService` | `/reactjs-development-services/` |
| `ReactNativeAppDevelopmentService` | `/react-native-app-development-services/` |
| `DedicatedTeam` | `/dedicated-development-team/` |
| `ERPNextDevService` | `/erpnext-development-services/` |
| ... and 26 more |

### Common Pattern for Service Pages

Each service component typically includes these shared sub-components:

```
ServiceHeroSection          → Hero banner with title, subtitle, CTA
CTASection                  → Call-to-action strip
ServicesSection              → Features/capabilities with TabVerticalSticky
MultipleCardWithIconBG       → Benefits grid cards
UseCases                    → Use case examples
IndustryUseCasesSuggestion   → Related industry solutions
ClientReviews               → Testimonials
ServicesFAQ                 → FAQ accordion
```

---

## 8. Industry Pages

### Structure

Industry pages live under `/industry/` with static routes per industry.

**File pattern:** `src/app/industry/{industry-name}/page.js`

### Industry Components (9 total)

Located in `src/app/components/Solution/`:

| Component | URL Path |
|-----------|----------|
| `Fintech` | `/industry/fintech-software-development/` |
| `Healthcare` | `/industry/healthcare-software-development/` |
| `EdTech` | `/industry/edtech-software-development/` |
| `ECommerceSolution` | `/industry/e-commerce-app-development/` |
| `MediaAndEntertainment` | `/industry/media-entertainment/` |
| `FleetManagementNGPS` | `/industry/fleet-management/` |
| `ManufacturingNGPS` | `/industry/manufacturing-software-development-services/` |
| `HRSoftwareDevelopment` | `/industry/hr-software-development/` |

### Common Pattern for Industry Pages

Each solution component includes:

```
SolutionHeroSection              → Hero with industry-specific imagery
SolutionCostAndTimeLine          → Pricing and timeline details
TypesOfAppWeDevelop              → Application types showcase
SolutionEngagementAndHowCanStart → Engagement models
SolutionFAQ                      → Industry-specific FAQs
SolutionContactForm              → Lead capture form
```

---

## 9. Blog System

### Architecture

The blog system is fully powered by Storyblok CMS.

**Files:**
- `src/app/blog/page.js` — Blog listing (paginated, filterable)
- `src/app/blog/[slug]/page.js` — Individual blog article
- `src/app/blog/author/[author]/page.js` — Author-filtered view
- `src/app/blog/loading.js` — Loading skeleton
- `src/app/blog/error.js` — Error boundary

### Blog Article Rendering

**File:** `src/app/components/Article.js`

The `Article` component is a rich client component that:
- Renders Storyblok rich text content
- Generates a table of contents from headings
- Calculates reading time
- Displays author info and publish date
- Shows related/suggested posts
- Includes eBook popup for lead generation
- Handles breadcrumbs and schema markup

### Blog Data from Storyblok

Storyblok `article` component fields:
- `title`, `long_description` (rich text body)
- `image`, `seoImage`
- `Category`, `subcategory`
- `author`, `date`
- `SEO` (title, description, og_image)
- `faqSection` (FAQ content)
- `Tags` (keywords)

### Blog Features

- **Pagination:** Server-side via `getblogData(page, limit, ...)`
- **Category Filtering:** By `Category` and `subcategory` fields
- **Search:** By title using Storyblok `like` filter
- **Author Pages:** Filter articles by author slug
- **RSS Feed:** Generated at `/blogs/feed.xml/`
- **Sitemap:** Blog URLs included in dynamic sitemap

---

## 10. AI Solutions Pages

### Architecture

AI Solutions are CMS-driven dynamic pages.

**Files:**
- `src/app/ai-solutions/page.js` — Listing page
- `src/app/ai-solutions/[slug]/page.js` — Dynamic detail pages

**Components** in `src/app/components/AISolutions/`:

| Component | Purpose |
|-----------|---------|
| `AISolutions` | Hero section |
| `AIWorking` | How it works steps |
| `AISeamlessIntegration` | Integration showcase |
| `AICaseStudies` | Related case studies |
| `WhatUserSays` | User testimonials |
| `AISolutionsFAQ` | FAQ section |

### Known AI Solution Pages

- **MySQL Chatbot** — `/ai-solutions/mysql-chatbot/`
- **AI Website Chat** — `/ai-solutions/ai-website-chat/`
- **AI MongoDB Chatbot** — `/ai-solutions/ai-mongodb-chatbot/`

### Storyblok Fields for AI Solutions

```
title, description, videoLink, buttontext, buttonURL
Working[] — step-by-step process items
what_users_say[] — testimonial entries
seamless_integration[] — integration points
FAQ[] — question/answer pairs
CTA[] — call-to-action blocks
```

---

## 11. Use Case Pages

### Architecture

Use case pages demonstrate specific technology applications.

**Files:**
- `src/app/use-case/page.js` — Listing page
- `src/app/use-case/[slug]/page.js` — Dynamic detail pages

**Components:**
- `UsecaseFirstSection` — Hero section
- `UsecaseContentSection` — Content body

### Known Use Case Pages

- AWS for IoT
- AWS in E-commerce
- AWS in Healthcare
- Generative AI in Retail

---

## 12. AI Agents System

### Architecture

A comprehensive AI agent chat system with 33+ specialized agents.

**Files:**
- `src/app/(ai-agent-tools)/ai-agents/page.js` — Agent listing/grid
- `src/app/(ai-agent-tools)/ai-agents/{agent-name}/page.js` — Individual agent pages
- `src/app/components/AiAgents/` — 39 component files

### Key Components

| Component | Purpose |
|-----------|---------|
| `AiAgentHome` | Landing page with agent grid |
| `AIAgentLayout` | Shared layout wrapper |
| `AIChatInterface` | Chat UI for all agents |
| Individual agents | 33 specialized agent components |

### Available Agents

Astrology, Career, Cooking, DIY, Dreams, Fashion, Finance, Fitness, Gardening, Habit, Interior, Language, Learning, Matchmaking, Meme, Movies, Music, Neuro, Nutrition, Parenting, Pets, Profile, Psych, Scheduling, Startup, Tech, Travel, Trends, Vision, Wealth, Wellness, Writing

### Context System

**File:** `src/context/AIAgentUserContext.js`
- React Context for managing user profile across agents
- Stores: name, birthDate, birthTime, birthPlace, fitness goals, dietary preferences, etc.
- Persists to `localStorage`
- Provides `useUser()` hook for access

---

## 13. Tools & Calculators

### Architecture

49 interactive calculator/tool components under `/tools/`.

**Route:** `src/app/(newly-added)/tools/{tool-name}/page.js`

### Tool Categories

| Category | Examples |
|----------|---------|
| **Cost Calculators** | App Development Cost, SaaS Development Cost, AI App Cost, Cloud Service Cost |
| **Timeline Estimators** | App Development Timeline, MVP Launch Timeline, Go-To-Market Timeline |
| **Analysis Tools** | Code Quality Analyzer, Cross-Platform vs Native, Digital Transformation Readiness |
| **SaaS Tools** | SaaS Metrics Calculator, SaaS Profitability, SaaS Scalability Checker |
| **ROI/Savings** | ROI Calculator, Automation Savings Estimator |
| **Generators** | Software Proposal Generator, Scope of Work Generator |

### Calculation Services

Located in `src/app/components/lib/`:
- `costCalculationService.js`
- `saasDevCostCalculatorService.js`
- `roiCalculatorService.js`
- `appMaintenanceEstimatorService.js`
- `featureComplexityVsTimelineEstimatorService.js`
- `toolsCalculation.js` (108KB — central calculation logic)

Some tools integrate with **Google Gemini API** via `geminiService.js`.

---

## 14. eBooks & Resources

### eBooks

**Files:**
- `src/app/ebooks/page.jsx` — eBook listing
- `src/app/ebooks/[slug]/page.js` — Individual eBook pages

**Data:** Fetched from Storyblok `ebooks/` folder via `getEbooksData()`

### Other Resources

| Resource | Route | Description |
|----------|-------|-------------|
| Case Studies | `/portfolio/[slug]` | Project case studies from Storyblok |
| Gists | `/gist/{category}/[slug]` | Developer knowledge base (Java, Node, React, AWS, etc.) |
| AI Tools | `/ai-tools/*` | AI chatbot solutions, knowledge base, compliance review |
| Free Mockups | `/free-mockups/` | Design resource page |

---

## 15. Header & Navigation System

### Smart Header Routing

**File:** `src/app/components/Header/CurrentHeader.js`

The `CurrentHeader` component conditionally renders different header variants based on the current URL path:

| Header Variant | Used For |
|----------------|----------|
| `HeaderV2` (default) | Most pages — main navigation |
| `Header` | eBooks, gists, product pages, specific subpaths |
| `HeaderV3` | MVP-in-48-hours, free-mockups pages |
| No header | AI agent pages, specific product pages (spine-recovery-pro, i-remi) |

### Header Components

Located in `src/app/components/Header/`:
- `HeaderV2` — Primary header with mega menu
- `Header` — Simplified header
- `HeaderV3` — Alternate layout header
- `MegaMenu` — Navigation mega menu with dropdowns
- `MenuItem` — Individual menu item
- `SideMenu` — Mobile responsive sidebar menu
- `Countdown48h` — 48-hour countdown timer (for MVP page)

### Navigation Structure (from mega menu)

```
Services
├── Generative AI Development
├── AI/ML Development
├── Product Engineering
├── Web App Development
└── ... more services

DevOps & Cloud
├── AWS Consulting
├── DevOps Consulting
├── Kubernetes Consulting
└── ... more

Industries
├── EdTech
├── FinTech
├── Healthcare
├── E-commerce
├── Media Tech
├── Fleet Management
└── ... more

Use Cases
├── AWS for IoT
├── AWS in E-commerce
├── AWS in Healthcare
├── Generative AI in Retail
└── ... more

Resources
├── Blogs
├── eBooks
├── Case Studies
├── AI Agents
├── AI Tools
└── Tools

AI Solutions
├── MySQL Chatbot
├── AI Website Chat
└── AI MongoDB Chatbot
```

---

## 16. SEO & Metadata

### Metadata Patterns

**Pattern 1 — Static Metadata (Services, Industries, static pages):**
```javascript
export const metadata = {
  title: "Page Title | Brilworks",
  description: "...",
  openGraph: { title, description, url, siteName, images, locale, type },
  twitter: { title, description, card: "summary_large_image", site },
  alternates: { canonical: "https://www.brilworks.com/path/" },
};
```

**Pattern 2 — Dynamic Metadata (Blog, AI Solutions, Portfolio):**
```javascript
export async function generateMetadata({ params }) {
  const data = await fetchData(params.slug);
  return {
    title: data?.story?.content?.SEO?.title,
    description: data?.story?.content?.SEO?.description,
    openGraph: { /* ... */ },
  };
}
```

### Schema / Structured Data

**File:** `src/app/components/lib/schemaCode.js`

| Schema Type | Function | Usage |
|-------------|----------|-------|
| Organization | `organization` (constant) | Root layout |
| Local Business | `localBusiness` (constant) | Root layout |
| Website | `website` (constant) | Root layout |
| Breadcrumbs | `generateBreadcrumb()` | Category pages, blog |
| Product Rating | `generateRatingSchema()` | Blog articles |
| Video | `generateVideoSchema()` | AI solution pages |

### Sitemap

**File:** `src/app/sitemap.js`
- Dynamically generated from static routes + Storyblok content
- Includes blog posts, AI solutions, portfolios, eBooks
- Uses `getBlogForSitemap()` for blog entries

### RSS Feed

**File:** `src/app/blogs/feed.xml/route.js`
- Generates XML RSS feed from all blog posts
- Uses `getblogForFeed()` function

---

## 17. Data Fetching Patterns

### ISR (Incremental Static Regeneration)

Most Storyblok content pages use ISR with environment-aware caching:

```javascript
const options = {
  [process.env.VERCEL_ENV === "production" ? "next" : "cache"]:
    process.env.VERCEL_ENV === "production"
      ? { revalidate: 3600 }  // 1 hour ISR in production
      : "no-store",            // No cache in development
};
```

### Static Generation with `generateStaticParams`

Blog, AI Solutions, and eBook pages pre-render all known slugs at build time:

```javascript
export async function generateStaticParams() {
  const blogs = await getblog();
  return blogs.map((blog) => ({ slug: blog.slug }));
}
```

### Storyblok Filtering

Advanced content filtering via Storyblok API:
```javascript
filter_query: {
  component: { in: "article" },
  Category: { in: filter_category },
  subcategory: { any_in_array: filter_subcategory },
  __or: [{ title: { like: `%${search_query}%` } }],
}
```

---

## 18. Styling Approach

### Tailwind CSS 3.3.2

**Config:** `tailwind.config.js`

**Custom Theme:**
- **Screens:** `mobile` (535px), `slg` (980px), `sxl` (1200px), `smallDesktop` (1366px), `3xl` (1680px)
- **Colors:** `themeColor` (#017eeb), `themeSecondary` (#00dbd3), `navyBlue` (#000d1e)
- **Fonts:** Inter, Urbanist, Figtree (loaded via `next/font/google`)
- **Gradients:** `blue-gradient`, `theme-gradient`, `text-gradient`, `cyber-gradient`

### SCSS Stylesheets

Located in `src/app/styles/`:

| File | Size | Purpose |
|------|------|---------|
| `custom-style.scss` | 17KB | General custom styles |
| `Blogstyle.scss` | 16KB | Blog page styles |
| `Homepage.scss` | 9KB | Homepage section styles |
| `ai-studio.scss` | - | AI Studio styles |
| `mvp-style.scss` | - | MVP calculator styles |
| `Services.scss` | - | Service page styles |
| `button.scss` | - | Button overrides |
| `tab-sticky-style.scss` | - | Sticky tab navigation |

---

## 19. API Routes

Located in `src/app/api/`:

| Route | Method | Purpose |
|-------|--------|---------|
| `/api/auth/[...nextauth]` | GET/POST | NextAuth authentication (Google OAuth + Credentials) |
| `/api/download` | GET | PDF download proxy (validates trusted domains, serves with Content-Disposition) |
| `/api/newsletter` | POST | Blog data updates (writes to blogResponse.json) |
| `/api/home-career` | POST | Career page applications |
| `/api/invite-user` | POST | User invitation handling |
| `/api/message-store` | POST | Chat message storage |
| `/api/page-blog` | GET | Blog data endpoints |
| `/api/s3/assets` | GET | AWS S3 asset management |
| `/api/set-password` | POST | Password management |
| `/api/users` | GET/POST | User management |
| `/api/whatsapp` | POST | WhatsApp integration |

---

## 20. Authentication

**Provider:** NextAuth.js

**File:** `src/app/api/auth/[...nextauth]/route.js`

### Auth Providers

1. **Google OAuth** — Restricted to `@brilworks.com` domain (internal use)
2. **Credentials** — Username/password authentication

### Configuration

- **Session Strategy:** JWT
- **Database:** Prisma with user schema
- **Custom Callbacks:** `signIn` callback to save/update user data in database
- **Error Page:** Custom `/not-found` error page

### Auth-Related Pages

- `/login/` — Login form
- `/forget-password/` — Password reset
- `/verifyemail/[verifytoken]` — Email verification

---

## 21. Third-Party Integrations

| Service | Purpose | SDK/Method |
|---------|---------|------------|
| **Storyblok** | Headless CMS | `@storyblok/react`, `storyblok-js-client` |
| **Vercel** | Hosting & deployment | Next.js built-in |
| **AWS S3** | Asset storage | AWS SDK |
| **CloudFront** | CDN for assets | AWS |
| **Prisma** | Database ORM | `@prisma/client` |
| **SendGrid** | Email delivery | `@sendgrid/mail` |
| **HubSpot** | CRM | API integration |
| **Slack** | Notifications | Token-based API |
| **Google Generative AI** | AI features (Gemini) | `@google/generative-ai` |
| **NextAuth** | Authentication | `next-auth` |
| **Google Tag Manager** | Analytics | Script injection |
| **Facebook Pixel** | Ad tracking | Script injection |
| **Tawk.to** | Live chat widget | Property ID |
| **Calendly** | Meeting scheduling | Embed widget |
| **Mammoth** | Word doc parsing | `mammoth` |

---

## 22. Environment Variables

### Required Variables

```env
# Storyblok
NEXT_PUBLIC_ACCESS_TOKEN=         # Storyblok API token
NEXT_PUBLIC_STORYBLOK_VERSION=    # "draft" or "published"

# Application
NEXT_PUBLIC_BASE_URL=             # Base domain URL
NEXT_PUBLIC_CLOUDFRONT_URL=       # CDN URL for assets
VERCEL_ENV=                       # "production", "preview", or "development"

# Authentication
NEXTAUTH_SECRET=                  # Session encryption key
NEXTAUTH_JWT_SECRET=              # JWT signing key
NEXT_PUBLIC_GOOGLE_CLIENT_ID=     # Google OAuth client ID
NEXT_PUBLIC_GOOGLE_CLIENT_SECRET= # Google OAuth secret
DATABASE_URL=                     # Prisma database connection

# Email & Communication
SENDGRID_API_KEY=
SENDGRID_DEFAULT_TO_EMAIL=
SENDGRID_DEFAULT_FROM_EMAIL=
SENDGRID_DEFAULT_CAREER_TEMPLATE_ID=
HUBSPOT_API_KEY=
SLACK_TOKEN=

# Analytics
facebook_pixelID=
googleTagManagerID=
NEXT_PUBLIC_TAWKPROPERTY_ID=

# AWS
AWS credentials (via SDK config)
```

---

## 23. Build & Deployment

### Scripts

```json
{
  "dev": "next dev",
  "build": "next build --no-lint",
  "start": "next start",
  "lint": "next lint",
  "postinstall": "prisma generate"
}
```

### Build Optimizations

- **SWC Minification:** Enabled for fast builds
- **Terser Plugin:** Additional JS minification in production
- **Dynamic Imports:** Heavy components lazily loaded
- **Image Optimization:** Disabled (`unoptimized: true`) — images served directly from Storyblok/S3/CloudFront
- **Trailing Slashes:** Enforced for SEO consistency

### Image Domains (allowed in `next.config.js`)

- `a.storyblok.com` — Storyblok media
- `lh3.googleusercontent.com` — Google profile images
- `brilworks-website-asset.s3.ap-south-1.amazonaws.com` — AWS S3
- `brilworks-site-assets.s3.eu-central-1.amazonaws.com` — AWS S3
- `d14lhgoyljo1xt.cloudfront.net` — CloudFront CDN

### Key Configuration (next.config.js)

```javascript
const nextConfig = {
  trailingSlash: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    legacyBrowsers: false,
    serverComponentsExternalPackages: ["@prisma/client", "bcrypt"],
  },
  images: { unoptimized: true, domains: [...] },
  redirects: async () => { /* 500+ SEO redirects */ },
};
```

---

## Quick Reference: Adding a New Page

### Adding a new Service Page

1. Create component in `src/app/components/Services/NewService.js`
2. Create page in `src/app/(services)/new-service/page.js`
3. Export static `metadata` in the page file
4. Import and render the service component
5. Add navigation entry in mega menu data

### Adding a new Industry Page

1. Create component in `src/app/components/Solution/NewIndustry.js`
2. Create page in `src/app/industry/new-industry/page.js`
3. Use shared solution sub-components (SolutionHeroSection, SolutionFAQ, etc.)

### Adding a new Blog Post

1. Create content in Storyblok under `blog/` folder using the `article` component
2. The `[slug]` route automatically picks it up via `generateStaticParams`
3. ISR ensures it appears within 1 hour (or instantly in dev)

### Adding a new AI Solution

1. Create content in Storyblok under `ai-solutions/` folder
2. The `[slug]` route renders it automatically
3. Fill Storyblok fields: title, description, videoLink, Working[], FAQ[], etc.
