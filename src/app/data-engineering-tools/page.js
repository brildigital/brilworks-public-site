import React from "react";
import DataEngineeringTools from "./DataEngineeringTools";

export const metadata = {
  title:
    "Free data engineering tools — cost calculator, AI readiness score & more | Brilworks",
  description:
    "Free tools for Snowflake and Databricks teams. Calculate your cloud data spend, score your AI readiness, and estimate migration complexity in minutes.",
  openGraph: {
    title:
      "Free data engineering tools — cost calculator, AI readiness score & more | Brilworks",
    description:
      "Free tools for Snowflake and Databricks teams. Calculate your cloud data spend, score your AI readiness, and estimate migration complexity in minutes.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-tools/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title:
      "Free data engineering tools — cost calculator, AI readiness score & more | Brilworks",
    description:
      "Free tools for Snowflake and Databricks teams. Calculate your cloud data spend, score your AI readiness, and estimate migration complexity in minutes.",
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
  description:
    "Free tools for Snowflake and Databricks teams. Calculate your cloud data spend, score your AI readiness, and estimate migration complexity in minutes.",
  url: "https://www.brilworks.com/data-engineering-tools/",
  publisher: {
    "@type": "Organization",
    name: "Brilworks",
    url: "https://www.brilworks.com",
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: 6,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Snowflake Cost Estimator",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Databricks Cost Estimator",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "AI Readiness Score",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Migration Complexity Calculator",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Data Pipeline Health Checker",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Snowflake vs Databricks Picker",
      },
    ],
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
