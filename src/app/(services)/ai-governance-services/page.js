import React from "react";
import AiGovernanceService from "@/app/components/Services/AiGovernanceService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-07-30";

export const metadata = {
  title: "AI Governance & Responsible AI Services | Brilworks",
  description:
    "When your AI makes a wrong call, someone has to answer for it. We build the governance, monitoring, and explainability that let you show what your model did and why.",
  keywords:
    "AI governance services, responsible AI, model governance, explainable AI, AI bias testing, AI compliance",
  openGraph: {
    title: "AI Governance & Responsible AI Services | Brilworks",
    type: "website",
    description:
      "When your AI makes a wrong call, someone has to answer for it. We build the governance, monitoring, and explainability that let you show what your model did and why.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-governance-services/`,
    siteName: "Brilworks",
    locale: "en-US",
  },
  twitter: {
    title: "AI Governance & Responsible AI Services | Brilworks",
    description:
      "When your AI makes a wrong call, someone has to answer for it. We build the governance, monitoring, and explainability that let you show what your model did and why.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-governance-services/`,
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
            title: "AI Governance & Responsible AI Services | Brilworks",
            description:
              "When your AI makes a wrong call, someone has to answer for it. We build the governance, monitoring, and explainability that let you show what your model did and why.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-governance-services/`,
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
            serviceType: "AI Governance",
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
                name: "What is AI governance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The controls that let you show what your AI did, why, and that it was allowed to. It covers responsible AI, model governance, and explainability, so a model decision is something you can trace, defend, and prove was approved.",
                },
              },
              {
                "@type": "Question",
                name: "Why does explainable AI matter?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Because \"the model said so\" doesn't hold up with a regulator, a customer, or a court. Explainable AI gives you the reasoning behind a prediction in terms a person can follow. Where the stakes or the rules are high, it's not optional.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to stand up governance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Weeks, not quarters. A governance baseline for existing models runs 3 to 5 weeks, depending on how many models and how much lineage already exists.",
                },
              },
            ],
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <AiGovernanceService />
    </>
  );
};

export default page;
