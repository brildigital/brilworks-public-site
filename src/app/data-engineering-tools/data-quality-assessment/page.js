import React from "react";
import DataQualityAssessment from "./DataQualityAssessment";

export const metadata = {
  title:
    "Data Quality Assessment | Evaluate Your Data Health | Brilworks",
  description:
    "Free data quality assessment. Evaluate your data across accuracy, completeness, consistency, and reliability. Get a data quality score and practical recommendations.",
  openGraph: {
    title: "Data Quality Assessment | Evaluate Your Data Health | Brilworks",
    description:
      "Evaluate your data quality across accuracy, completeness, consistency, and reliability. Get your score in under 2 minutes.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-tools/data-quality-assessment/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Data Quality Assessment | Brilworks",
    description:
      "Evaluate your data quality across accuracy, completeness, consistency, and reliability.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-tools/data-quality-assessment/`,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Data Quality Assessment",
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
        name: "What is data quality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Data quality refers to how accurate, complete, consistent, timely, and reliable your data is for its intended purpose. High-quality data supports better decision making, reporting, and business operations.",
        },
      },
      {
        "@type": "Question",
        name: "Why is data quality important?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Poor data quality can lead to inaccurate reports, operational inefficiencies, compliance issues, and unreliable AI outcomes. Maintaining high-quality data helps organizations make better business decisions with confidence.",
        },
      },
      {
        "@type": "Question",
        name: "What is a data quality assessment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Data Quality Assessment evaluates the condition of your data and identifies issues that may affect business performance. The results are often documented in a data quality assessment report with recommendations for improvement.",
        },
      },
      {
        "@type": "Question",
        name: "What is a data quality assessment framework?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A data quality assessment framework is a structured approach for measuring and improving data quality using defined standards, metrics, and governance practices. It helps organizations monitor data quality consistently over time.",
        },
      },
      {
        "@type": "Question",
        name: "How can I improve data quality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Improving data quality typically involves establishing governance policies, validating incoming data, removing duplicates, standardizing formats, monitoring quality metrics, and regularly reviewing data against business rules.",
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
      <DataQualityAssessment />
    </>
  );
};

export default page;
