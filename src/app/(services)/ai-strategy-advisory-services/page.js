import React from "react";
import AiStrategyAdvisoryService from "@/app/components/Services/AiStrategyAdvisoryService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-07-29";

export const metadata = {
  title: "AI Strategy & Advisory Services | Brilworks",
  description:
    "Most AI projects fail in the planning, not production. We find the use cases worth funding, sequence them into a roadmap, and check the data can carry them before you build.",
  keywords:
    "AI strategy consulting, AI advisory services, AI opportunity assessment, AI use case discovery, AI roadmap",
  openGraph: {
    title: "AI Strategy & Advisory Services | Brilworks",
    type: "website",
    description:
      "Most AI projects fail in the planning, not production. We find the use cases worth funding, sequence them into a roadmap, and check the data can carry them before you build.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-strategy-advisory-services/`,
    siteName: "Brilworks",
    locale: "en-US",
  },
  twitter: {
    title: "AI Strategy & Advisory Services | Brilworks",
    description:
      "Most AI projects fail in the planning, not production. We find the use cases worth funding, sequence them into a roadmap, and check the data can carry them before you build.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-strategy-advisory-services/`,
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
            title: "AI Strategy & Advisory Services | Brilworks",
            description:
              "Most AI projects fail in the planning, not production. We find the use cases worth funding, sequence them into a roadmap, and check the data can carry them before you build.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-strategy-advisory-services/`,
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
            serviceType: "AI Strategy & Advisory",
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
                name: "What is AI strategy and advisory?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The work before the build. It decides which problems are worth solving with AI, in what order, and whether the data behind them is ready. You leave with a ranked use case list and a sequenced plan.",
                },
              },
              {
                "@type": "Question",
                name: "How long does an engagement take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Weeks, not quarters. A focused assessment and roadmap for a mid-sized team runs 3 to 5 weeks, depending on how many teams and data sources are in scope.",
                },
              },
              {
                "@type": "Question",
                name: "Will you tell us AI is the wrong call?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. If a problem needs a script or a process fix instead of a model, that's in the report. It's cheaper to hear now.",
                },
              },
            ],
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <AiStrategyAdvisoryService />
    </>
  );
};

export default page;
