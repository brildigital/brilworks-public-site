import React from "react";
import DataPipelineDevelopmentService from "@/app/components/Services/DataPipelineDevelopmentService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-07-27";

export const metadata = {
  title: "Data Pipeline Development Services | Brilworks",
  description:
    "We build data pipelines that hold up under real volume and do not break at 3am. ETL/ELT, ingestion, orchestration, tested and observable end to end.",
  keywords:
    "data pipeline development, ETL ELT development, data ingestion framework, workflow orchestration, pipeline observability",
  openGraph: {
    title: "Data Pipeline Development Services | Brilworks",
    type: "website",
    description:
      "We build data pipelines that hold up under real volume and do not break at 3am. ETL/ELT, ingestion, orchestration, tested and observable end to end.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}data-pipeline-development/`,
    siteName: "Brilworks",
    locale: "en-US",
  },
  twitter: {
    title: "Data Pipeline Development Services | Brilworks",
    description:
      "We build data pipelines that hold up under real volume and do not break at 3am. ETL/ELT, ingestion, orchestration, tested and observable end to end.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}data-pipeline-development/`,
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
            title: "Data Pipeline Development Services | Brilworks",
            description:
              "We build data pipelines that hold up under real volume and do not break at 3am. ETL/ELT, ingestion, orchestration, tested and observable end to end.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}data-pipeline-development/`,
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
            serviceType: "Data Pipeline Development",
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
                name: "What is data pipeline development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Building the systems that move data from your source systems into a warehouse or lakehouse, transform it along the way, and run on a schedule. Done right, it is ingestion, transformation, orchestration, and testing, not just a script that runs overnight and hopes for the best.",
                },
              },
              {
                "@type": "Question",
                name: "My pipelines keep breaking. Can you fix that?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Usually, yes. Most breakage traces to a handful of causes: schema drift, no retries, no observability, full reloads that time out. We audit for those, fix the worst first, and build in the testing that stops it recurring.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to build a pipeline?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A first working pipeline in weeks, not quarters. We get real data flowing early, then harden and add testing from there. You get a real timeline after a short scoping call.",
                },
              },
            ],
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <DataPipelineDevelopmentService />
    </>
  );
};

export default page;
