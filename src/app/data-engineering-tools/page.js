import React from "react";
import DataEngineeringTools from "./DataEngineeringTools";

const TITLE =
  "Free data engineering tools — cost calculator, AI readiness score & more | Brilworks";
const DESCRIPTION =
  "Free tools for Snowflake and Databricks teams. Estimate cloud data spend, compare warehouse platforms, score AI readiness and plan migrations in minutes.";
const BASE = "https://www.brilworks.com/data-engineering-tools/";

const TOOL_LIST = [
  ["Snowflake Cost Calculator", "snowflake-cost-calculator/"],
  ["Databricks Cost Calculator", "databricks-cost-calculator/"],
  ["AI Readiness Audit", "ai-readiness-audit/"],
  ["Data Migration Cost Calculator", "data-migration-cost-calculator/"],
  ["Data Quality Assessment", "data-quality-assessment/"],
  ["Snowflake vs Databricks Advisor", "snowflake-vs-databricks-advisor/"],
  ["Warehouse Platform Picker", "warehouse-platform-picker/"],
];

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "data engineering tools",
    "free data engineering tools",
    "snowflake cost calculator",
    "databricks cost calculator",
    "data warehouse comparison",
    "data warehouse platform picker",
    "snowflake vs databricks",
    "AI readiness assessment",
    "data migration cost calculator",
    "data quality assessment",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-tools/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-tools/`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Free Data Engineering Tools",
  description: DESCRIPTION,
  url: BASE,
  publisher: {
    "@type": "Organization",
    name: "Brilworks",
    url: "https://www.brilworks.com",
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: TOOL_LIST.length,
    itemListElement: TOOL_LIST.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      url: `${BASE}${path}`,
    })),
  },
};

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DataEngineeringTools />
    </>
  );
};

export default page;
