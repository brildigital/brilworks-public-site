import React from "react";
import AiReadinessDataFoundationService from "@/app/components/Services/AiReadinessDataFoundationService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-07-29";

export const metadata = {
  title: "AI Readiness & Data Foundation Services | Brilworks",
  description:
    "Most AI builds stall because the data underneath wasn't ready. We assess your data, platform, and governance so you know what to fix before you spend on a model.",
  keywords:
    "AI readiness assessment, data foundation for AI, AI platform readiness, responsible AI readiness, data readiness audit",
  openGraph: {
    title: "AI Readiness & Data Foundation Services | Brilworks",
    type: "website",
    description:
      "Most AI builds stall because the data underneath wasn't ready. We assess your data, platform, and governance so you know what to fix before you spend on a model.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-readiness-data-foundation-services/`,
    siteName: "Brilworks",
    locale: "en-US",
  },
  twitter: {
    title: "AI Readiness & Data Foundation Services | Brilworks",
    description:
      "Most AI builds stall because the data underneath wasn't ready. We assess your data, platform, and governance so you know what to fix before you spend on a model.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-readiness-data-foundation-services/`,
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
            title: "AI Readiness & Data Foundation Services | Brilworks",
            description:
              "Most AI builds stall because the data underneath wasn't ready. We assess your data, platform, and governance so you know what to fix before you spend on a model.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-readiness-data-foundation-services/`,
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
            serviceType: "AI Readiness & Data Foundation",
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
                name: "What does AI readiness actually mean?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It means the data, platform, and governance behind your use case can support a model today. Not in theory. We check coverage, quality, freshness, serving speed, and risk against the specific build you have in mind.",
                },
              },
              {
                "@type": "Question",
                name: "How is this different from AI strategy work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Strategy decides which use cases to build. Readiness checks whether you can. Strategy hands you the roadmap, readiness tells you what has to be fixed before phase one can start. Teams usually do them back to back.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a readiness assessment take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Weeks, not quarters. A focused assessment runs 2 to 3 weeks, depending on how many data sources and use cases are in scope.",
                },
              },
            ],
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <AiReadinessDataFoundationService />
    </>
  );
};

export default page;
