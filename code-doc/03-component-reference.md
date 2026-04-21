# Component Reference - Detailed Guide

## Overview

All components live under `src/app/components/`. They follow a feature-based organization where each major page type has its own folder.

---

## Component Rendering Model

### Server Components (Default)

Page-level files (`page.js`) are async server components that fetch data and pass it as props:

```javascript
export default async function Page({ params }) {
  const { props: data } = await fetchData(params?.slug);
  return <PageContent data={data} />;
}
```

### Client Components

Interactive components use `"use client"` directive:

```javascript
"use client";
import { useState, useEffect } from "react";

export default function InteractiveComponent() {
  const [state, setState] = useState(null);
  // ...
}
```

### Dynamic Imports

Heavy components are lazily loaded with `next/dynamic`:

```javascript
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("../components/HeavyComponent"));
```

---

## Homepage Components

**Directory:** `src/app/components/Homepage/`

| File | Component | Type | Description |
|------|-----------|------|-------------|
| `HeroSection.js` | `HeroSection` | Server | Hero banner with h1 "Future-Ready Apps Powered by AI & AWS Expertise", gradient text, ButtonV2 CTA |
| `BrilliantInThought.js` | `BrilliantInThought` | Client | Feature/capability showcase section |
| `SeeingBelieving.js` | `SeeingBelieving` | Client | Portfolio case studies in 2-column grid. Loads different portfolio arrays based on pathname (fintech, healthcare, HR, manufacturing). Each card shows image, title, description, industry tag, and tech badges |
| `ExploreOurExpertise.js` | `ExploreOurExpertise` | Client | 5 expertise tabs (Cloud, Backend, Frontend, Mobile, UI/UX). Uses `TabAccordionDark` on mobile, `TabVerticalSticky` on desktop |
| `ClientReviews.js` | `ClientReviews` | Client | Swiper carousel with 4 testimonials (David, Liz, Bisi, Edwin) + video testimonials from CloudFront. Shows `BrilworksSoftwareReview` conditionally based on pathname |
| `IndustriesWeServe.js` | `IndustriesWeServe` | Server | 15 industry cards in 2/3-column grid (Finance, Media, Healthcare, Logistics, E-commerce, SaaS, Education, Manufacturing, etc.). Supports dark/light modes |
| `Honors.js` | `Honors` | - | Awards and certifications display |
| `HomepageWhyChooseUs.js` | `HomepageWhyChooseUs` | - | Value proposition section |
| `HomePageBlogs.js` | `HomePageBlogs` | - | Recent blog articles section |
| `ContactUs.js` | `ContactUs` | Client | Wraps dynamically imported `ContactFormV2` with heading "What Can We Help You With?" |
| `ContactFormV2.js` | `ContactFormV2` | Client | Actual contact form component |
| `BrilworksSoftwareReview.js` | `BrilworksSoftwareReview` | - | Software review badges/ratings |
| `GameChanger.js` | `GameChanger` | - | Game changer section |
| `FetchDataSpinner.js` | `FetchDataSpinner` | - | Loading spinner |
| `Loader.js` | `Loader` | - | Alternative loader |

### Homepage Rendering Order (in `home/page.js`)

```
1. HeroSection         (eager import)
2. BrilliantInThought  (dynamic import)
3. SeeingBelieving     (dynamic import)
4. ExploreOurExpertise  (dynamic import)
5. ClientReviews       (dynamic import)
6. IndustriesWeServe   (dynamic import)
7. Honors              (dynamic import)
8. HomepageWhyChooseUs (dynamic import)
9. HomepageBlog        (dynamic import)
10. ContactUs          (dynamic import)
```

---

## Common/Shared Components

**Directory:** `src/app/components/Common/`

### CTASection

**File:** `CTASection.js`

Reusable call-to-action strip with configurable props.

```javascript
<CTASection
  title="Ready to Develop Your Success Story With Us?"   // default
  description="Our team is always eager to know..."       // default
  buttonText="Book Free Consultation"                     // default
  darkBackground={true}                                   // dark/light mode
/>
```

Renders a flex row: heading + description on left, ButtonV2 on right.

### ServicesSection

**File:** `ServicesSection.js`

Wrapper that renders either `TabAccordionDark` (mobile ≤980px) or `TabVerticalSticky` (desktop) based on screen width.

```javascript
<ServicesSection
  serviceData={{
    title: "Section Title",
    description: "Optional description",
    servicesList: [
      { title: "Item 1", value: "item-1", image: "/path.svg", description: "...", serviceLink: [...] },
      // ...
    ],
  }}
  sectionId="unique-id"
  bgClass="bg-white"
  imageOnLeft={false}
/>
```

### TabVerticalSticky

**File:** `TabVerticalSticky.js` (344 lines)

The core tabbed content component used across services, industries, and expertise sections.

**Features:**
- Left sidebar with numbered tab links that highlight on scroll
- Right content area with image, title, description, service links, process tags
- Scroll-based active tab detection (`handleScroll`)
- Supports dark/light themes via `bgClass` prop
- Supports left/right image positioning via `imageOnLeft` prop
- Shows "use case" styling when `isUsecaseSection` is true
- Optional "Explore all" button

**Props:**
- `servicesList` — Array of tab items with title, value, image, description, serviceLink
- `bgClass` — Background CSS class
- `imageOnLeft` — Boolean for image position
- `isUsecaseSection` — Boolean for use case styling

### TabAccordionDark

**File:** `TabAccordionDark.js`

Mobile-friendly accordion version of TabVerticalSticky. Same data structure, different presentation.

### TabVerticalDark

**File:** `TabVerticalDark.js`

Dark-themed vertical tab variant.

### MultipleCardWithIconBG

**File:** `MultipleCardWithIconBG.js`

Grid of cards with icons and background effects.

```javascript
<MultipleCardWithIconBG
  data={{
    title: "Section Title",
    benefits: [
      { title: "Benefit 1", description: "...", image: "/icon.svg" },
      // ...
    ],
  }}
/>
```

### MultipleCardInGrid

**File:** `MultipleCardInGrid.js`

Simple grid of cards without icon backgrounds.

### MultipleKeyValueWithBG

**File:** `MultipleKeyValueWithBG.js`

Key-value pairs displayed with background styling.

### GradientFAQAccordion

**File:** `GradientFAQAccordion.js`

FAQ accordion with gradient styling.

### ButtonV2

**File:** `ButtonV2.js`

Primary button component used across the site.

### VideoSchema

**File:** `VideoSchema.jsx`

Generates video structured data markup.

---

## Service Components

**Directory:** `src/app/components/Services/`

### Pattern

All service components follow a consistent structure:

```javascript
"use client";
import dynamic from "next/dynamic";

// Lazy-load sub-components
const ServiceHeroSection = dynamic(() => import("./ServiceHeroSection"));
const CTASection = dynamic(() => import("../Common/CTASection"));
const ServicesSection = dynamic(() => import("../Common/ServicesSection"));
const MultipleCardWithIconBG = dynamic(() => import("../Common/MultipleCardWithIconBG"));
// ... more imports

export default function GenerativeAIDevService() {
  // Define data inline
  const services = {
    title: "Our Generative AI Development Services",
    servicesList: [
      {
        title: "Custom AI Solutions",
        value: "custom-ai",
        image: "/images/service-icon.svg",
        description: "...",
        serviceLink: [
          { linkName: "Learn More", link: "/ai-ml-development-services/" },
        ],
      },
      // ... more items
    ],
  };

  const benefits = {
    title: "Benefits of Generative AI",
    benefits: [
      { title: "Faster Development", description: "...", image: "/icon.svg" },
      // ...
    ],
  };

  return (
    <div>
      <ServiceHeroSection title="..." description="..." imageSrc="..." buttonText="..." />
      <CTASection title="..." darkBackground />
      <ServicesSection serviceData={services} sectionId="gen-ai-services" />
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

### Service Sub-Components

| Component | File | Purpose |
|-----------|------|---------|
| `ServiceHeroSection` | `ServiceHeroSection.js` | Hero with title, description, image, CTA button |
| `ServicesFAQ` | `ServicesFAQ.js` | FAQ accordion for services |
| `ServicesPricingPlans` | `ServicesPricingPlans.js` | Pricing plan display |
| `UseCases` | `UseCases.js` | Use case examples |
| `IndustryUseCasesSuggestion` | `IndustryUseCasesSuggestion.js` | Cross-links to industry pages |
| `KeyBenefits` | `KeyBenefits.js` | Benefits section |
| `TechStackWeUse` | `TechStackWeUse.js` | Technology stack display |
| `AboutOurExpertise` | `AboutOurExpertise.js` | Expertise details |

### Complete Service Component List (35 files)

AIMLService, AWSService, AdaloDevelopmentService, ApplicationDevelopmentService, BusinessDevelopmentService, DedicatedTeam, DevOpsService, DigitalExperienceService, ERPNextDevService, FitnessAppDevelopmentServices, FlutterflowDevelopmentService, FrappeDevelopmentService, GenerativeAIDevService, KubernetesConsultingService, LowCodeNoCodeDevService, MobileAppDevelopmentService, ProductEngineeringDevService, RapidDigitalization, ReactJSDevelopmentService, ReactNativeAppDevelopmentServices, SaaSApplicationDevelopmentService, StaffAugmentation, UpskillStaffAugmentation, WebAppDevelopmentService, WhiteLabelAppDevelopment, WhyDedicatedTeam

---

## Industry/Solution Components

**Directory:** `src/app/components/Solution/`

### Pattern

```javascript
"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";

const SolutionHeroSection = dynamic(() => import("./SolutionHeroSection"));
// ... more dynamic imports

export default function Fintech() {
  useEffect(() => {
    window.addEventListener("scroll", scrollEffect);
    return () => window.removeEventListener("scroll", scrollEffect);
  }, []);

  // Inline data definitions
  const services = { /* ... */ };

  return (
    <div>
      <SolutionHeroSection technologyText="Fintech" title="..." description="..." />
      <ServicesSection serviceData={services} />
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

### Solution Sub-Components

| Component | File | Purpose |
|-----------|------|---------|
| `SolutionHeroSection` | `SolutionHeroSection.js` | Hero with `technologyText` prop (extra compared to ServiceHeroSection) |
| `SolutionCostAndTimeLine` | `SolutionCostAndTimeLine.js` | Pricing/timeline info |
| `TypesOfAppWeDevelop` | `TypesOfAppWeDevelop.js` | App type showcase cards |
| `SolutionEngagementAndHowCanStart` | `SolutionEngagementAndHowCanStart.js` | Engagement model steps |
| `SolutionContactForm` | `SolutionContactForm.js` | Lead capture form |
| `SolutionFAQ` | `SolutionFAQ.js` | Industry-specific FAQs |

### Complete Solution Component List

Fintech, Healthcare, EdTech, ECommerceSolution, MediaAndEntertainment, FleetManagementNGPS, ManufaturingSoftwareDevelopmentService, HRSoftwareDevelopment + EventAppDev (directory)

---

## AI Solutions Components

**Directory:** `src/app/components/AISolutions/`

| File | Component | Purpose |
|------|-----------|---------|
| `AISolutions.jsx` | `AISolutionsFirstSection` | Hero with title, description, CTA, YouTube video iframe |
| `AIWorking.jsx` | `AIWorking` | How it works steps |
| `AISeamlessIntegration.jsx` | `AISeamlessIntegration` | Integration features |
| `AICaseStudies.jsx` | `AICaseStudies` | Related case studies |
| `WhatUserSays.jsx` | `WhatUserSays` | User testimonials |
| `AISolutionsFAQ.jsx` | `AISolutionsFAQ` | FAQ section |
| `AIGenerateField.jsx` | `AIGenerateField` | Input field component |

### AI Solutions Page Assembly

```javascript
// src/app/ai-solutions/[slug]/page.js
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
```

---

## AI Agent Components

**Directory:** `src/app/components/AiAgents/`

### Core Components

| File | Component | Purpose |
|------|-----------|---------|
| `AiAgentHome.jsx` | `AiAgentHome` | Landing page with searchable agent grid. Categories: Core Systems, Lifestyle Modules, Habitat & Bio, Mind & Science. Has animated gradient hero text "AUGMENT YOUR REALITY" |
| `AIAgentLayout.jsx` | `AIAgentLayout` | Shared layout wrapper for agent pages |
| `AIChatInterface.jsx` | `AIChatInterface` | Chat UI component used by all agents |

### Individual Agent Components (33 files)

Each agent is a `.jsx` file: Astrology, Career, Cooking, DIY, Dreams, Fashion, Finance, Fitness, Gardening, Habit, Interior, KundaliChart, Language, Learning, LiveVoiceModel, Matchmaking, Meme, Movies, Music, Neuro, Nutrition, Parenting, Pets, Profile, Psych, Scheduling, Startup, Tech, Travel, Trends, Vision, Wealth, Wellness, Writing

### AI Agent Context

**File:** `src/context/AIAgentUserContext.jsx`

```javascript
const AIAgentUserContext = createContext();

export function AIAgentUserProvider({ children }) {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    // Load from localStorage on mount
    const saved = localStorage.getItem("omnilife_user");
    if (saved) setProfile(JSON.parse(saved));
  }, []);

  const updateProfile = (updates) => {
    const newProfile = { ...profile, ...updates };
    setProfile(newProfile);
    localStorage.setItem("omnilife_user", JSON.stringify(newProfile));
  };

  return (
    <AIAgentUserContext.Provider value={{ profile, updateProfile }}>
      {children}
    </AIAgentUserContext.Provider>
  );
}

export const useUser = () => useContext(AIAgentUserContext);
```

---

## Blog Components

**Directory:** `src/app/components/Blog/`

| File | Component | Purpose |
|------|-----------|---------|
| `Blog.js` | `Blog` | Main blog listing page (client component) |
| `Author.js` | `Author` | Author profile/listing page |
| `ArticleSkeleton.js` | `ArticleSkeleton` | Loading skeleton for articles |
| `BlogContactForm.js` | `BlogContactForm` | Sidebar contact form |
| `BlogFAQ.js` | `BlogFAQ` | Blog-specific FAQ accordion |
| `EbookPopup.js` | `EbookPopup` | eBook download popup (shows at 50% scroll, 7-day cooldown) |
| `SubscribeNewsLetterForm.js` | `SubscribeNewsLetterForm` | Newsletter signup |
| `Tooltip.js` | `Tooltip` | Tooltip component |

### Article Component (Main Blog Renderer)

**File:** `src/app/components/Article.js` (614 lines)

The `Article` component is the most complex client component. It handles:

1. **Table of Contents** — Parses H2 headings from HTML content, generates anchor links
2. **Scroll Tracking** — Highlights active heading in TOC based on scroll position
3. **Social Sharing** — Facebook, Twitter, LinkedIn share links
4. **HTML Parsing** — Uses `html-react-parser` with custom transforms:
   - Adds `loading="lazy"` to images
   - Adds `rel="nofollow" target="_blank"` to external links
5. **Related Posts** — "You might also like" section with `getSuggestionblog()`
6. **eBook Popup** — Shows on 50% scroll with 7-day cooldown via localStorage
7. **Quick Summary** — Expandable summary section
8. **Author Bio** — Author info from `blogAuthor()` function
9. **Reading Time** — Calculated via `calculateReadingTime()`
10. **Blog FAQ** — Renders FAQ section if available

---

## Tools/Calculator Components

**Directory:** `src/app/components/Tools/` (48 files)

### Shared Tool Components

| File | Component | Purpose |
|------|-----------|---------|
| `ToolHerosection.js` | `ToolHeroSection` | Hero banner for tool pages |
| `ToolFeatures.js` | `ToolFeatures` | Feature listing section |
| `ToolHowToUse.js` | `ToolHowToUse` | Usage instructions |
| `ToolFAQs.js` | `ToolFAQs` | FAQ section |
| `Tools.js` | `Tools` | Tool listing page |
| `ToolsPopupContactForm.js` | `ToolsPopupContactForm` | Popup contact form |

### Calculator Components (42 unique calculators)

All calculators are client components with interactive form inputs. They use calculation service functions from `src/app/components/lib/`.

---

## Header Components

**Directory:** `src/app/components/Header/`

| File | Component | Purpose |
|------|-----------|---------|
| `CurrentHeader.js` | `CurrentHeader` | Smart router — picks the right header based on pathname |
| `HeaderV2.js` | `HeaderV2` | Default main navigation header |
| `Header.js` | `Header` | Simplified header for eBooks, gists, products |
| `HeaderV3.js` | `HeaderV3` | Alternate header for MVP, free-mockups pages |
| `MegaMenu.js` | `MegaMenu` | Navigation dropdown mega menu |
| `MenuItem.js` | `MenuItem` | Individual menu item |
| `SideMenu.js` | `SideMenu` | Mobile responsive sidebar |
| `Countdown48h.js` | `Countdown48h` | 48-hour countdown timer for MVP page |

### CurrentHeader Routing Logic

```javascript
"use client";

export default function CurrentHeader() {
  const pathname = usePathname();

  // No header for these pages
  if (pathname.includes("spine-recovery-pro") || pathname.includes("i-remi"))
    return null;

  // Simple header for these paths
  if (pathname.includes("/ebooks/") && pathname !== "/ebooks/" ||
      pathname.includes("/internal/casestudies/") ||
      pathname.includes("/gist/") ||
      /* ... more conditions */)
    return <Header />;

  // Alternate header for these paths
  if (pathname === "/mvp-in-48-hours/" || pathname === "/free-mockups/")
    return <HeaderV3 />;

  // Empty for AI agents
  if (pathname.includes("/ai-agents/"))
    return "";

  // Default header
  return <HeaderV2 />;
}
```

---

## Footer Component

**File:** `src/app/components/Footer/index.js` (411 lines)

**Features:**
- Social links: Facebook, YouTube, Instagram, LinkedIn, Behance, Dribbble, Upwork, Clutch
- Footer navigation: Quick Links, Solutions, Technologies columns
- Contact info: Sales and Career sections
- Location address
- Conditionally hidden on: posters, product listing, ai-agents, i-remi pages
- Tawk.to messenger widget
- "We are Hiring!" link to careers

---

## Utility Components

### HTMLComponents

**File:** `src/app/components/HTMLComponents/Heading.js`

Reusable heading component with configurable heading level.

### Svgs

**File:** `src/app/components/Svgs.js`

SVG icon library used across components.
