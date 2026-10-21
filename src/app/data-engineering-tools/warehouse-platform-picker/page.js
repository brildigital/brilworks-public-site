import React from "react";
import WarehousePlatformPicker from "./WarehousePlatformPicker";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { FAQ_DATA } from "./warehousePickerLogic";

const LAST_UPDATED = "2026-10-21";
const PAGE_URL =
  "https://www.brilworks.com/data-engineering-tools/warehouse-platform-picker/";

const TITLE =
  "Data Warehouse Platform Picker | Compare 8 Platforms | Brilworks";
const DESCRIPTION =
  "Free data warehouse picker. Compare Snowflake, BigQuery, Redshift, Databricks, Fabric, ClickHouse, Athena and PostgreSQL on cost, scale, skills and compliance.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "data warehouse platform picker",
    "data warehouse comparison",
    "which data warehouse should I use",
    "best data warehouse for small business",
    "analytics platform comparison",
    "data warehouse cost calculator",
    "snowflake vs bigquery",
    "snowflake vs redshift",
    "bigquery vs redshift",
    "databricks vs snowflake",
    "microsoft fabric vs snowflake",
    "clickhouse vs bigquery",
    "postgresql vs data warehouse",
    "athena vs redshift",
    "data warehouse pricing comparison",
    "data warehouse india",
    "DPDP compliant analytics",
  ],
  openGraph: {
    title: "Data Warehouse Platform Picker | Brilworks",
    description:
      "Compare 8 data warehouse and analytics platforms on cost, scale, team skills and compliance. Get a ranked recommendation with architecture and monthly cost.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-tools/warehouse-platform-picker/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Data Warehouse Platform Picker | Brilworks",
    description:
      "Compare Snowflake, BigQuery, Redshift, Databricks, Fabric, ClickHouse and more for your data, team and budget.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-tools/warehouse-platform-picker/`,
  },
  robots: { index: true, follow: true },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Data Warehouse Platform Picker",
    description: DESCRIPTION,
    url: PAGE_URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    dateModified: LAST_UPDATED,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    provider: {
      "@type": "Organization",
      name: "Brilworks",
      url: "https://www.brilworks.com",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.brilworks.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Data Engineering Tools",
        item: "https://www.brilworks.com/data-engineering-tools/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Warehouse Platform Picker",
        item: PAGE_URL,
      },
    ],
  },
];

const page = () => {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <LastUpdated date={LAST_UPDATED} />
      <WarehousePlatformPicker />
    </>
  );
};

export default page;
