import React from "react";
import DataModernizationService from "@/app/components/Services/DataModernizationService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-07-27";

export const metadata = {
  title: "Data Modernization Services | Brilworks",
  description:
    "We move you off legacy data systems onto Snowflake and Databricks without stopping the business. Phased migration, no big-bang cutover, no data loss.",
  keywords:
    "data modernization services, legacy data migration, data warehouse modernization, Teradata migration, Hadoop migration",
  openGraph: {
    title: "Data Modernization Services | Brilworks",
    type: "website",
    description:
      "We move you off legacy data systems onto Snowflake and Databricks without stopping the business. Phased migration, no big-bang cutover, no data loss.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}data-modernization/`,
    siteName: "Brilworks",
    locale: "en-US",
  },
  twitter: {
    title: "Data Modernization Services | Brilworks",
    description:
      "We move you off legacy data systems onto Snowflake and Databricks without stopping the business. Phased migration, no big-bang cutover, no data loss.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}data-modernization/`,
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
            title: "Data Modernization Services | Brilworks",
            description:
              "We move you off legacy data systems onto Snowflake and Databricks without stopping the business. Phased migration, no big-bang cutover, no data loss.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}data-modernization/`,
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
            serviceType: "Data Modernization",
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
                name: "What is data modernization?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Moving your data off legacy or self-managed systems onto a modern cloud platform, and fixing what was broken in the process. It covers the migration itself, re-modeling the warehouse, and rebuilding the pipelines and workloads that ran on the old stack.",
                },
              },
              {
                "@type": "Question",
                name: "How do you migrate without taking the business offline?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We run the old and new systems in parallel, migrate in phases, and reconcile every table row-by-row. The legacy system stays live until the new one has proven itself, and rollback stays available until you call the cutover done. No big-bang weekend.",
                },
              },
              {
                "@type": "Question",
                name: "How much does a data migration cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It depends on data volume, number of workloads, and how much legacy logic needs rebuilding. We give you a real number and a phased plan after a migration assessment, not a scary range with no explanation.",
                },
              },
            ],
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <DataModernizationService />
    </>
  );
};

export default page;
