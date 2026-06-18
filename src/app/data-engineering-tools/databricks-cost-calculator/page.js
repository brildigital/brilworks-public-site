import React from "react";
import DatabricksCostCalculator from "./DatabricksCostCalculator";

export const metadata = {
  title:
    "Databricks Cost Calculator | Estimate Your Monthly DBU Spend | Brilworks",
  description:
    "Free Databricks cost calculator. Estimate your monthly Databricks costs based on compute usage, DBUs, runtime, and cloud provider pricing. Built by Brilworks data engineers.",
  openGraph: {
    title:
      "Databricks Cost Calculator | Estimate Your Monthly DBU Spend | Brilworks",
    description:
      "Estimate your monthly Databricks costs based on compute usage, DBUs, and cloud provider pricing.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-tools/databricks-cost-calculator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Databricks Cost Calculator | Brilworks",
    description:
      "Estimate your monthly Databricks costs based on compute usage, DBUs, and cloud provider pricing.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-tools/databricks-cost-calculator/`,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Databricks Cost Calculator",
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
        name: "Is Databricks expensive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Databricks pricing depends on your workload, cluster configuration, and cloud infrastructure. Efficiently managed environments can remain cost-effective, while oversized clusters and inefficient jobs can significantly increase monthly costs.",
        },
      },
      {
        "@type": "Question",
        name: "How are Databricks costs calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Databricks charges based on DBU consumption, while your cloud provider separately bills for the underlying compute, storage, and networking resources. Your total monthly cost combines both charges.",
        },
      },
      {
        "@type": "Question",
        name: "How accurate is this Databricks cost calculator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This calculator provides a reliable estimate based on the information you enter. Actual costs may vary depending on autoscaling, workload patterns, infrastructure pricing, and your Databricks pricing agreement.",
        },
      },
      {
        "@type": "Question",
        name: "Does Databricks cost the same on Azure, AWS, and Google Cloud?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. While DBU pricing follows Databricks pricing tiers, infrastructure costs differ across cloud providers. As a result, your Databricks cost on Azure, AWS, or Google Cloud may vary for similar workloads.",
        },
      },
      {
        "@type": "Question",
        name: "How can I reduce Databricks costs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The biggest savings usually come from right-sizing clusters, enabling autoscaling, shutting down idle resources, optimizing Spark jobs, and regularly reviewing DBU consumption to eliminate unnecessary compute usage.",
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
      <DatabricksCostCalculator />
    </>
  );
};

export default page;
