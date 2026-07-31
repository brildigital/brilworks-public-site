import React from "react";
import AiEngineeringAiOpsService from "@/app/components/Services/AiEngineeringAiOpsService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-07-30";

export const metadata = {
  title: "AI Engineering & AIOps Services | Brilworks",
  description:
    "A model in a notebook isn't in production. We deploy, monitor, and maintain your models with feature stores and AIOps so they keep working after launch, not just at launch.",
  keywords:
    "AI engineering services, AIOps, MLOps, feature store, model deployment, model monitoring, ML infrastructure",
  openGraph: {
    title: "AI Engineering & AIOps Services | Brilworks",
    type: "website",
    description:
      "A model in a notebook isn't in production. We deploy, monitor, and maintain your models with feature stores and AIOps so they keep working after launch, not just at launch.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-engineering-aiops-services/`,
    siteName: "Brilworks",
    locale: "en-US",
  },
  twitter: {
    title: "AI Engineering & AIOps Services | Brilworks",
    description:
      "A model in a notebook isn't in production. We deploy, monitor, and maintain your models with feature stores and AIOps so they keep working after launch, not just at launch.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-engineering-aiops-services/`,
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
            title: "AI Engineering & AIOps Services | Brilworks",
            description:
              "A model in a notebook isn't in production. We deploy, monitor, and maintain your models with feature stores and AIOps so they keep working after launch, not just at launch.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-engineering-aiops-services/`,
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
            serviceType: "AI Engineering & AIOps",
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
                name: "What is AI engineering, and how is it different from data science?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Data science builds the model. AI engineering makes it a production system, deploying it, serving its features, monitoring it, and keeping it running as things change. A model that works in a notebook still needs all of that before it's a product.",
                },
              },
              {
                "@type": "Question",
                name: "What is AIOps?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The operational layer for machine learning in production. It covers automated retraining, infrastructure managed as code, monitoring, and incident response, the work that keeps models running without a person babysitting them.",
                },
              },
              {
                "@type": "Question",
                name: "Why do we need a feature store?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Because the most common production bug is a model seeing different data in serving than it saw in training. A feature store serves the same features, computed the same way, to both. It also lets your next model reuse them instead of rebuilding.",
                },
              },
            ],
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <AiEngineeringAiOpsService />
    </>
  );
};

export default page;
