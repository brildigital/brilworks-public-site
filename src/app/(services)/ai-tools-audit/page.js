import AIToolsAudit from "@/app/components/Services/AIToolsAudit";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-05-04";

const PAGE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}ai-tools-audit/`;

const PAGE_TITLE =
  "AI Tools Audit for Small Businesses — Brilworks ($999, 5 hrs/wk guarantee)";
const PAGE_DESCRIPTION =
  "Get a custom AI tooling plan for your business in 48 hours. 45-min audit + tailored report + 4-day implementation plan. $999. Built by Brilworks.";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: "AI Tools Audit — Brilworks ($999)",
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/generative-ai-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "AI Tools Audit — Brilworks ($999)",
    description: PAGE_DESCRIPTION,
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: PAGE_URL,
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Tools Audit",
  provider: {
    "@type": "Organization",
    name: "Brilworks",
    url: "https://www.brilworks.com/",
  },
  areaServed: "Worldwide",
  description:
    "A 45-minute discovery call, a tailored 3-7 tool recommendation report, and a 4-day implementation plan for small business owners. Flat $999 with a 5+ hours-per-week-back guarantee.",
  url: "https://www.brilworks.com/ai-tools-audit/",
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    category: "AI Consulting",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What if I don't get 5 hours back?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full refund. Not store credit. Not partial. Full.",
      },
    },
    {
      "@type": "Question",
      name: "How long does this take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "About 2 hours of your time across two calls. We do the rest in 4 days.",
      },
    },
    {
      "@type": "Question",
      name: "Will you try to upsell me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only if you ask. Implementation is opt-in. The audit stands on its own.",
      },
    },
    {
      "@type": "Question",
      name: "What tools will you recommend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Whatever fits your workflow. We're tool-agnostic. We pick what works, not what we sell.",
      },
    },
    {
      "@type": "Question",
      name: "Do you sign an NDA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, on request. Discovery transcripts stay in our private workspace.",
      },
    },
    {
      "@type": "Question",
      name: "What if I don't have any AI tools yet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's fine. Most of our clients start from zero. The whole point is you don't need to know the landscape — that's our job.",
      },
    },
  ],
};

const Page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateWebPageSchema({
            title: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            url: PAGE_URL,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <AIToolsAudit />
    </>
  );
};

export default Page;
