import React from "react";
import CloudDataEngineeringService from "@/app/components/Services/CloudDataEngineeringService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-07-27";

export const metadata = {
  title: "Cloud Data Engineering Services | Brilworks",
  description:
    "We build and run cloud data platforms on Snowflake and Databricks, warehousing, lakehouse, and real-time pipelines that ship in weeks and stay cheap to run.",
  keywords:
    "cloud data engineering, cloud data warehouse, data lakehouse, real-time data pipelines, snowflake databricks consulting",
  openGraph: {
    title: "Cloud Data Engineering Services | Brilworks",
    type: "website",
    description:
      "We build and run cloud data platforms on Snowflake and Databricks, warehousing, lakehouse, and real-time pipelines that ship in weeks and stay cheap to run.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}cloud-data-engineering/`,
    siteName: "Brilworks",
    locale: "en-US",
  },
  twitter: {
    title: "Cloud Data Engineering Services | Brilworks",
    description:
      "We build and run cloud data platforms on Snowflake and Databricks, warehousing, lakehouse, and real-time pipelines that ship in weeks and stay cheap to run.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}cloud-data-engineering/`,
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
            title: "Cloud Data Engineering Services | Brilworks",
            description:
              "We build and run cloud data platforms on Snowflake and Databricks, warehousing, lakehouse, and real-time pipelines that ship in weeks and stay cheap to run.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}cloud-data-engineering/`,
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
            serviceType: "Cloud Data Engineering",
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
                name: "What is cloud data engineering?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Building and running the data platform your company lives on in the cloud: the pipelines that move data in, the warehouse or lakehouse that stores it, and the tuning that keeps it fast and affordable. We build it on Snowflake and Databricks.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a build take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Weeks, not quarters, for a first working platform. You see real data flowing early, then we harden and tune from there rather than disappearing for a quarter.",
                },
              },
              {
                "@type": "Question",
                name: "Can you cut our existing cloud data bill?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Usually. Overspend of 20 to 40 percent is common from oversized warehouses and untuned queries. The free cost audit finds where, and often pays for itself.",
                },
              },
            ],
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <CloudDataEngineeringService />
    </>
  );
};

export default page;
