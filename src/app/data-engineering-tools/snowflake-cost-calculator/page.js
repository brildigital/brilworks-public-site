import React from "react";
import SnowflakeCostCalculator from "./SnowflakeCostCalculator";

export const metadata = {
  title:
    "Snowflake Cost Calculator | Estimate Your Monthly Spend | Brilworks",
  description:
    "Free Snowflake cost calculator. Estimate your monthly Snowflake spend by warehouse size, runtime, and storage, then see where you can cut it. Built by Brilworks data engineers.",
  openGraph: {
    title: "Snowflake Cost Calculator | Estimate Your Monthly Spend | Brilworks",
    description:
      "Estimate your monthly Snowflake spend in seconds, then see where it can be cut.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-tools/snowflake-cost-calculator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Snowflake Cost Calculator | Brilworks",
    description:
      "Estimate your monthly Snowflake spend in seconds, then see where it can be cut.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-tools/snowflake-cost-calculator/`,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Snowflake Cost Calculator",
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
        name: "Is Snowflake expensive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Snowflake uses consumption-based pricing, so your costs depend on how much compute and storage you use. Well-optimized environments can remain cost-effective, while inefficient warehouse usage can quickly increase monthly spending.",
        },
      },
      {
        "@type": "Question",
        name: "How is Snowflake billing actually calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Snowflake charges separately for compute and storage. Compute is measured in credits consumed by virtual warehouses, while storage costs are based on the amount of data stored each month.",
        },
      },
      {
        "@type": "Question",
        name: "How accurate is this Snowflake cost calculator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This calculator provides an estimate based on the information you enter. Your actual bill may differ depending on workload behavior, query performance, cloud services, and your negotiated Snowflake pricing.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a Snowflake cost calculator and a Snowflake cost estimator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both estimate your expected Snowflake spending using similar inputs. A calculator typically generates an instant estimate, while an estimator refers to the same forecasting process.",
        },
      },
      {
        "@type": "Question",
        name: "How much can Snowflake costs realistically be reduced?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many organizations reduce costs by optimizing warehouse sizes, enabling auto-suspend, improving query performance, and eliminating unnecessary compute usage. The biggest savings usually come from improving how Snowflake resources are used rather than reducing workloads.",
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
      <SnowflakeCostCalculator />
    </>
  );
};

export default page;
