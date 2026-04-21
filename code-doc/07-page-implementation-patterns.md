# Page Implementation Patterns - Detailed Guide

This document shows the exact patterns used to implement each page type, with real code from the project.

---

## Pattern 1: Homepage

**Files:** `src/app/page.js` → `src/app/home/page.js`

### Root Page (entry point)

```javascript
// src/app/page.js
import HomePage from "./home/page";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: "Mobile App and Software Development Company | Brilworks",
  description: "...",
  openGraph: { /* ... */ },
  twitter: { /* ... */ },
  alternates: { canonical: process.env.NEXT_PUBLIC_BASE_URL },
};

export default function Home() {
  return <HomePage />;
}
```

### Home Page Component

```javascript
// src/app/home/page.js
import dynamic from "next/dynamic";
import Script from "next/script";
import HeroSection from "../components/Homepage/HeroSection";
import { generateBreadcrumb, homepageFAQ } from "../components/lib/schemaCode";

// Dynamic imports for all sections except HeroSection
const BrilliantInThought = dynamic(() => import("../components/Homepage/BrilliantInThought"));
const SeeingBelieving = dynamic(() => import("../components/Homepage/SeeingBelieving"));
const ExploreOurExpertise = dynamic(() => import("../components/Homepage/ExploreOurExpertise"));
// ... more dynamic imports

export async function generateMetadata() {
  return {
    title: "AWS Consulting Partner | Gen AI | Product Engineering",
    // ...
  };
}

export default function HomePage() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <Script type="application/ld+json" id="breadcrumb-schema"
        dangerouslySetInnerHTML={{ __html: generateBreadcrumb("Home") }} />

      {/* FAQ Schema */}
      <Script type="application/ld+json" id="faq-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFAQ) }} />

      <HeroSection />
      <BrilliantInThought />
      <SeeingBelieving />
      <ExploreOurExpertise />
      <ClientReviews />
      <IndustriesWeServe />
      <Honors />
      <HomepageWhyChooseUs />
      <HomepageBlog />
      <ContactUs />
    </>
  );
}
```

**Key pattern:** HeroSection is eagerly loaded (above fold), all other sections use `dynamic()` for lazy loading.

---

## Pattern 2: Service Pages

**Example files:**
- `src/app/(services)/generative-ai-development-services/page.js`
- `src/app/components/Services/GenerativeAIDevService.js`

### Page File (thin wrapper)

```javascript
// src/app/(services)/generative-ai-development-services/page.js
import GenerativeAIDevService from "@/app/components/Services/GenerativeAIDevService";

export const metadata = {
  title: "Generative AI Development Services | Brilworks",
  description: "...",
  openGraph: {
    title: "Generative AI Development Services | Brilworks",
    description: "...",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/generative-ai-development-services/`,
    siteName: "Brilworks",
    images: [{ url: "...", width: 800, height: 600 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "...",
    description: "...",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/generative-ai-development-services/`,
  },
};

export default function Page() {
  return <GenerativeAIDevService />;
}
```

### Service Component (full implementation)

```javascript
// src/app/components/Services/GenerativeAIDevService.js
"use client";
import dynamic from "next/dynamic";

// Lazy-load all sub-components
const ServiceHeroSection = dynamic(() => import("./ServiceHeroSection"));
const CTASection = dynamic(() => import("../Common/CTASection"));
const ServicesSection = dynamic(() => import("../Common/ServicesSection"));
const MultipleCardWithIconBG = dynamic(() => import("../Common/MultipleCardWithIconBG"));
const UseCases = dynamic(() => import("./UseCases"));
const IndustryUseCasesSuggestion = dynamic(() => import("./IndustryUseCasesSuggestion"));
const Honors = dynamic(() => import("../Homepage/Honors"));
const IndustriesWeServe = dynamic(() => import("../Homepage/IndustriesWeServe"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));
const SeeingBelieving = dynamic(() => import("../Homepage/SeeingBelieving"));
const HomePageBlogs = dynamic(() => import("../Homepage/HomePageBlogs"));
const ServicesFAQ = dynamic(() => import("./ServicesFAQ"));

export default function GenerativeAIDevService() {
  // Data is defined INLINE in the component
  const services = {
    title: "Our Generative AI Development Services",
    servicesList: [
      {
        title: "Custom AI Model Development",
        value: "custom-ai-model",
        image: "/images/custom-ai.svg",
        description: "We build custom AI models tailored to your business...",
        serviceLink: [
          { linkName: "Learn More", link: "/ai-ml-development-services/" },
        ],
      },
      // ... more service items
    ],
  };

  const benefits = {
    title: "Benefits of Generative AI Development",
    benefits: [
      { title: "Faster Time-to-Market", description: "...", image: "/images/icon.svg" },
      // ... more benefits
    ],
  };

  return (
    <div>
      <ServiceHeroSection
        title="Generative AI Development Services"
        description="Build intelligent applications powered by..."
        buttonText="Get Free Consultation"
        imageSrc="/images/gen-ai-hero.svg"
      />

      <CTASection
        title="Transform Your Business with Generative AI"
        description="Our team of AI experts can help you..."
        buttonText="Book Free Consultation"
        darkBackground={true}
      />

      <ServicesSection
        bgClass="bg-white"
        sectionId="gen-ai-services"
        serviceData={services}
      />

      <MultipleCardWithIconBG data={benefits} />

      <UseCases />
      <IndustryUseCasesSuggestion />
      <Honors />
      <IndustriesWeServe />
      <ClientReviews />
      <SeeingBelieving />
      <HomePageBlogs />
      <ServicesFAQ />
    </div>
  );
}
```

**Key pattern:**
- Page file = static metadata + render component
- Component = `"use client"` + `dynamic()` imports + inline data + composition of shared components
- All data is hardcoded in JS objects, NOT fetched from CMS

---

## Pattern 3: Industry/Solution Pages

**Example files:**
- `src/app/industry/fintech-software-development/page.js`
- `src/app/components/Solution/Fintech.js`

### Page File (with breadcrumb schema)

```javascript
// src/app/industry/fintech-software-development/page.js
import Fintech from "@/app/components/Solution/Fintech";
import { generateBreadcrumb } from "@/app/components/lib/schemaCode";

export const metadata = {
  title: "Fintech Software Development | Brilworks",
  // ... same pattern as services
};

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

### Solution Component

```javascript
// src/app/components/Solution/Fintech.js
"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";

const SolutionHeroSection = dynamic(() => import("./SolutionHeroSection"));
const ServicesSection = dynamic(() => import("../Common/ServicesSection"));
// ... more imports

export default function Fintech() {
  // Scroll reveal effect
  useEffect(() => {
    window.addEventListener("scroll", scrollEffect);
    return () => window.removeEventListener("scroll", scrollEffect);
  }, []);

  const services = { /* inline data */ };
  const developmentProcess = { /* inline data */ };

  return (
    <div>
      <SolutionHeroSection
        technologyText="Fintech"          // <-- EXTRA prop vs ServiceHeroSection
        title="Fintech Software Development Services"
        description="..."
        buttonText="Get Free Consultation"
        imageSrc="/images/fintech-hero.svg"
      />

      <ServicesSection serviceData={services} sectionId="fintech-services" />
      <ServicesSection serviceData={developmentProcess} imageOnLeft={true} />
      <MultipleCardInGrid />
      <SeeingBelieving />
      <MultipleKeyValueWithBG />
      <SolutionEngagementAndHowCanStart />
      <SolutionContactForm />
      <SolutionFAQ />
    </div>
  );
}
```

**Key differences from services:**
- Uses `SolutionHeroSection` (has `technologyText` prop) instead of `ServiceHeroSection`
- Adds `scrollEffect` listener for scroll reveal animations
- Uses `SolutionContactForm` and `SolutionFAQ` instead of service variants
- Page file injects breadcrumb JSON-LD schema

---

## Pattern 4: Blog Pages (CMS-Driven Dynamic)

### Blog Listing

```javascript
// src/app/blog/page.js
import dynamic from "next/dynamic";
const Blog = dynamic(() => import("../components/Blog/Blog"));

export const metadata = {
  title: "Brilworks Blog | Latest Tech Insights & News",
  // ...
};

export default function Page() {
  return <Blog />;
}
```

### Blog Detail (Dynamic Route)

```javascript
// src/app/blog/[slug]/page.js

// 1. Fetch data from Storyblok
async function fetchData(slug) {
  const url = `https://api.storyblok.com/v2/cdn/stories/blog/${slug}?token=${accessToken}&version=${version}`;
  const options = {
    [process.env.VERCEL_ENV === "production" ? "next" : "cache"]:
      process.env.VERCEL_ENV === "production" ? { revalidate: 3600 } : "no-store",
  };
  const res = await fetch(url, options);
  return { props: await res.json() };
}

// 2. Pre-render known slugs
export async function generateStaticParams() {
  const blogs = await getblog();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

// 3. Dynamic metadata from CMS
export async function generateMetadata({ params }) {
  const { props: storyData } = await fetchData(params.slug);
  const seo = storyData?.story?.content?.SEO;
  return {
    title: seo?.title,
    description: seo?.description,
    openGraph: { images: [{ url: formatSrcUrl(seo?.og_image) }] },
    alternates: { canonical: `${baseUrl}/blog/${params.slug}/` },
  };
}

// 4. Render page
export default async function Page(props) {
  const { params } = props;
  const { props: storyData } = await fetchData(params?.slug);

  if (!storyData?.story) return notFound();

  const story = storyData.story;
  const content = story.content;

  return (
    <div>
      {/* Breadcrumb */}
      <nav>Home → Blog → {story.name}</nav>

      {/* Author info and reading time */}
      <div>
        <span>{blogAuthor(content?.author)?.name}</span>
        <span>{calculateReadingTime(content?.long_description)} min read</span>
        <span>{formattedDate(story.published_at)}</span>
      </div>

      {/* Banner image */}
      <Image src={formatSrcUrl(content?.image?.filename)} alt={content?.image?.alt} />

      {/* Article body (rendered via StoryblokStory → Article component) */}
      <StoryblokStory story={story} />

      {/* Rating schema for specific articles */}
      {showRatingBasedOnPathname[params.slug] && (
        <Script type="application/ld+json">
          {generateRatingSchema(...)}
        </Script>
      )}
    </div>
  );
}
```

**Key patterns:**
- **Server component** — fetches data server-side
- **`generateStaticParams`** — pre-renders all blog slugs at build time
- **`generateMetadata`** — dynamic SEO from Storyblok `SEO` field
- **`StoryblokStory`** — delegates to `Article` component for rendering
- **Conditional rating schema** — only for specific hardcoded blog slugs

---

## Pattern 5: AI Solutions (CMS-Driven)

```javascript
// src/app/ai-solutions/[slug]/page.js

export default async function Page({ params }) {
  const { props: data } = await fetchData(params?.slug);
  const content = data?.story?.content;

  return (
    <>
      {/* Video schema if videoLink exists */}
      {content?.videoLink && (
        <Script type="application/ld+json">
          {generateVideoSchema({
            name: content.title,
            description: content.description,
            thumbnailUrl: getYouTubeThumbnail(content.videoLink),
            contentUrl: content.videoLink,
            embedUrl: content.videoLink,
          })}
        </Script>
      )}

      <AISolutionsFirstSection
        title={content?.title}
        description={content?.description}
        videoLink={content?.videoLink}
        buttontext={content?.buttontext}
        buttonURL={content?.buttonURL}
      />
      <AIWorking data={content?.Working} />
      <AISeamlessIntegration data={content?.seamless_integration} />
      <WhatUserSays data={content?.what_users_say} />
      <CTASection data={content?.CTA} />
      <AISolutionsFAQ data={content?.FAQ} />
    </>
  );
}
```

**Key pattern:** All section data comes from Storyblok fields (Working, seamless_integration, FAQ, etc.). The page just maps fields to components.

---

## Pattern 6: Portfolio/Case Study Pages

```javascript
// src/app/portfolio/[slug]/page.js

export default async function Page({ params }) {
  const { props: data } = await fetchData(params?.slug);
  const content = data?.story?.content;

  return (
    <>
      <PortfolioFirstSection data={content} />
      <ProcessAndEnhanceSection data={content} />
      <ProjectOverviewSection data={content} />
      <ProjectChallengesSection data={content} />

      {/* Product images gallery */}
      {content?.productImages?.map((img) => (
        <Image key={img.id} src={formatSrcUrl(img.filename)} />
      ))}

      <ProjectDesignView data={content} />
      <ProjectSolutionSection data={content} />
      <BluePrintForSuccess data={content} />

      {/* Reuse SeeingBelieving for "More Success Stories" */}
      <SeeingBelieving title="More Success Stories" />
    </>
  );
}
```

---

## Pattern 7: Use Case Pages

```javascript
// src/app/use-case/[slug]/page.js

export async function generateMetadata({ params }) {
  // Uses "Metatags" field instead of "SEO"
  const metatags = storyData?.story?.content?.Metatags;
  return { title: metatags?.title, description: metatags?.description };
}

export default async function Page({ params }) {
  const content = data?.story?.content;
  return (
    <>
      <UsecaseFirstSection data={content} />
      <UsecaseContentSection data={content} faqData={content?.FAQ} />
    </>
  );
}
```

**Key difference:** Uses `Metatags` instead of `SEO` field for metadata.

---

## Pattern 8: eBook Pages

```javascript
// src/app/ebooks/[slug]/page.js

export default async function Page({ params }) {
  const content = data?.story?.content;
  return (
    <>
      <EbookFirstSection data={content} />
      <WhatIsInsideBookSection data={content} />
      <ReasonToReadBook data={content} />
      <WhyBrilworks />
    </>
  );
}
```

---

## Pattern 9: AI Agent Pages

```javascript
// src/app/(ai-agent-tools)/ai-agents/page.js — Listing
import AiAgentHome from "@/app/components/AiAgents/AiAgentHome";

export const metadata = { title: "AI Agents | Brilworks", /* ... */ };

export default function Page() {
  return <AiAgentHome />;
}
```

```javascript
// src/app/(ai-agent-tools)/ai-agents/finance/page.js — Individual agent
import Finance from "@/app/components/AiAgents/Finance";

export const metadata = { title: "AI Finance Agent | Brilworks", /* ... */ };

export default function Page() {
  return <Finance />;
}
```

**Key difference:** AI agents have their own header/footer behavior:
- `CurrentHeader` returns empty string for `/ai-agents/` pages
- `AiAgentHome` component has its own minimal footer
- Uses `AIAgentUserContext` for user profile persistence

---

## Pattern 10: Tools/Calculator Pages

```javascript
// src/app/(newly-added)/tools/app-development-cost-calculator/page.js

import AppDevelopmentCostCalculator from "@/app/components/Tools/AppDevelopmentCostCalculator";

export const metadata = {
  title: "App Development Cost Calculator | Brilworks",
  // ...
};

export default function Page() {
  return <AppDevelopmentCostCalculator />;
}
```

Tool components are fully client-side with interactive form inputs and calculation logic from service files in `lib/`.

---

## Summary: Page Type → Data Source → Component Pattern

| Page Type | Data Source | Metadata | Schema | Component Pattern |
|-----------|-----------|----------|--------|-------------------|
| Homepage | Hardcoded | `generateMetadata()` | Breadcrumb + FAQ | Eager hero + dynamic sections |
| Service | Hardcoded | Static `metadata` | None | `"use client"` + dynamic imports + inline data |
| Industry | Hardcoded | Static `metadata` | Breadcrumb | `"use client"` + dynamic imports + scrollEffect |
| Blog | Storyblok | `generateMetadata()` | Rating (conditional) | Server component → StoryblokStory |
| AI Solutions | Storyblok | `generateMetadata()` | Video (conditional) | Server component → section components |
| Portfolio | Storyblok | `generateMetadata()` | None | Server component → section components |
| Use Cases | Storyblok | `generateMetadata()` | None | Server component → 2 sections |
| eBooks | Storyblok | `generateMetadata()` | None | Server component → 4 sections |
| AI Agents | Hardcoded | Static `metadata` | None | Custom layout (no header/footer) |
| Tools | Hardcoded | Static `metadata` | None | `"use client"` + calculation services |
