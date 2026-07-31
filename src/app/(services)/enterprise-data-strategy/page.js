import React from "react";
import EnterpriseDataStrategyService from "@/app/components/Services/EnterpriseDataStrategyService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-07-27";

export const metadata = {
  title: "Enterprise Data Strategy Services | Brilworks",
  description:
    "Enterprise data strategy that ends in a roadmap your team can execute, priced and sequenced. Assessment, architecture, and a build-ready plan. Talk to a strategist.",
  keywords:
    "enterprise data strategy, data strategy consulting, data architecture design, data modernization roadmap",
  openGraph: {
    title: "Enterprise Data Strategy Services | Brilworks",
    type: "website",
    description:
      "Enterprise data strategy that ends in a roadmap your team can execute, priced and sequenced. Assessment, architecture, and a build-ready plan. Talk to a strategist.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}enterprise-data-strategy/`,
    siteName: "Brilworks",
    locale: "en-US",
  },
  twitter: {
    title: "Enterprise Data Strategy Services | Brilworks",
    description:
      "Enterprise data strategy that ends in a roadmap your team can execute, priced and sequenced. Assessment, architecture, and a build-ready plan. Talk to a strategist.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}enterprise-data-strategy/`,
  },
};

const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateWebPageSchema({
            title: "Enterprise Data Strategy Services | Brilworks",
            description:
              "Enterprise data strategy that ends in a roadmap your team can execute, priced and sequenced. Assessment, architecture, and a build-ready plan. Talk to a strategist.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}enterprise-data-strategy/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Enterprise Data Strategy",
            provider: {
              "@type": "Organization",
              name: "Brilworks",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "503, Fortune Business Hub, Science City Road, Sola",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                postalCode: "380060",
                addressCountry: "IN",
              },
            },
            areaServed: "Worldwide",
          }),
        }}
      />
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is an enterprise data strategy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The plan for how your company collects, stores, governs, and uses data to hit a specific business goal. A good one is a sequenced roadmap, not a vision document: what to fix first, who owns it, what it costs, how you know it worked.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a strategy engagement take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "4 to 6 weeks for the assessment and roadmap, depending on stack size and number of data sources. You get a real timeline after a short scoping call, not a range.",
                },
              },
              {
                "@type": "Question",
                name: "Do you build the strategy after you write it?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, that is the point. We are certified on Snowflake and Databricks, so the same firm that sets the strategy executes the build. No handoff to a second vendor.",
                },
              },
            ],
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <EnterpriseDataStrategyService />
    </>
  );
};

export default page;
