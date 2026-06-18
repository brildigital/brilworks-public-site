import React from "react";
import SnowflakeVsDatabricksAdvisor from "./SnowflakeVsDatabricksAdvisor";

export const metadata = {
  title:
    "Snowflake vs Databricks Advisor | Compare Platforms | Brilworks",
  description:
    "Free Snowflake vs Databricks comparison tool. Answer a few questions about your workload, team, and goals to get a personalized platform recommendation.",
  openGraph: {
    title: "Snowflake vs Databricks Advisor | Compare Platforms | Brilworks",
    description:
      "Compare Snowflake and Databricks based on your workload, team, and business goals. Get a personalized recommendation.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-tools/snowflake-vs-databricks-advisor/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Snowflake vs Databricks Advisor | Brilworks",
    description:
      "Compare Snowflake and Databricks based on your workload, team, and business goals.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-tools/snowflake-vs-databricks-advisor/`,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Snowflake vs Databricks Advisor",
    applicationCategory: "BusinessApplication",
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
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between Snowflake and Databricks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Snowflake is a cloud data warehouse built for analytics and SQL workloads, while Databricks is a lakehouse platform designed for data engineering, machine learning, and AI. Both support analytics, but they excel in different areas.",
        },
      },
      {
        "@type": "Question",
        name: "Which platform performs better?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no universal answer. Snowflake vs Databricks performance depends on your workload. Snowflake typically performs well for analytical queries and reporting, while Databricks is optimized for large-scale data processing, streaming, and machine learning.",
        },
      },
      {
        "@type": "Question",
        name: "Can Snowflake and Databricks be used together?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Many organizations use both platforms. Snowflake serves as the governed analytics layer, while Databricks handles data engineering, machine learning, and AI workloads.",
        },
      },
      {
        "@type": "Question",
        name: "How do I choose between Snowflake and Databricks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The right decision depends on your workloads, team skills, data architecture, and long-term business goals. This advisor helps you compare both platforms based on your specific requirements.",
        },
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
      <SnowflakeVsDatabricksAdvisor />
    </>
  );
};

export default page;
