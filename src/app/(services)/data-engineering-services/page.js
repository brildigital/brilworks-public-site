import React from "react";
import DataEngineeringService from "@/app/components/Services/DataEngineeringService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-06-23";

export const metadata = {
  title: "Data Engineering Services | Snowflake & Databricks Experts",
  description:
    "Data engineering services on Snowflake and Databricks. We cut warehouse spend 20 to 40% and get your AI production-ready. Fixed-price audit, no lock-in.",
  keywords:
    "data engineering services, data pipeline development, data warehouse services, snowflake databricks consulting",
  openGraph: {
    title: "Data Engineering Services | Snowflake & Databricks Experts",
    type: "website",
    description:
      "Data engineering services on Snowflake and Databricks. We cut warehouse spend 20 to 40% and get your AI production-ready. Fixed-price audit, no lock-in.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-services/`,
    siteName: "Brilworks",
    locale: "en-US",
  },
  twitter: {
    title: "Data Engineering Services | Snowflake & Databricks Experts",
    description:
      "Data engineering services on Snowflake and Databricks. We cut warehouse spend 20 to 40% and get your AI production-ready. Fixed-price audit, no lock-in.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-services/`,
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
            title: "Data Engineering Services | Snowflake & Databricks Experts",
            description:
              "Data engineering services on Snowflake and Databricks. We cut warehouse spend 20 to 40% and get your AI production-ready. Fixed-price audit, no lock-in.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-services/`,
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
            serviceType: "Data Engineering Services",
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
                name: "What are data engineering services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Data engineering services cover the pipelines, warehouse, and modeling that move data from raw sources into something teams can query and trust. Brilworks delivers this on Snowflake and Databricks, including migration, cost optimization, and the AI-ready data layer.",
                },
              },
              {
                "@type": "Question",
                name: "How much do data engineering services cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It depends on scope. Our Cost-Optimization Audit is fixed-price and usually pays for itself. Larger builds and migrations are scoped per project, and staff augmentation is monthly per engineer.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a data pipeline or migration take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most work runs in fixed, scoped phases rather than one open-ended project. A first trustworthy result often lands in weeks, with migrations reconciled table by table before cutover.",
                },
              },
            ],
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <DataEngineeringService />
    </>
  );
};

export default page;
