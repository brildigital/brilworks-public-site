import React from "react";
import DataMigrationCostCalculator from "./DataMigrationCostCalculator";

export const metadata = {
  title:
    "Data Migration Cost Calculator | Estimate Migration Costs | Brilworks",
  description:
    "Free data migration cost calculator. Estimate the cost of your data migration based on data volume, source systems, complexity, and project requirements.",
  openGraph: {
    title:
      "Data Migration Cost Calculator | Estimate Migration Costs | Brilworks",
    description:
      "Estimate the cost of your data migration based on data volume, source systems, complexity, and project requirements.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-tools/data-migration-cost-calculator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Data Migration Cost Calculator | Brilworks",
    description:
      "Estimate the cost of your data migration based on data volume, source systems, complexity, and project requirements.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-tools/data-migration-cost-calculator/`,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Data Migration Cost Calculator",
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
        name: "How long does data migration take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The timeline depends on the amount of data, the number of systems involved, migration complexity, and testing requirements. Smaller migrations may take a few weeks, while enterprise projects can span several months.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between data migration and database migration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Data migration refers to moving data between systems, applications, or platforms. Database migration focuses specifically on transferring databases, including their schema, data, and supporting objects, from one database environment to another.",
        },
      },
      {
        "@type": "Question",
        name: "Why is data migration needed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Organizations migrate data when modernizing legacy systems, moving to the cloud, consolidating applications, improving performance, or supporting new business initiatives.",
        },
      },
      {
        "@type": "Question",
        name: "Why is data migration important?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Data migration enables businesses to adopt modern technologies, improve operational efficiency, and make better use of their data. Proper planning helps reduce downtime, minimize business disruption, and protect data integrity.",
        },
      },
      {
        "@type": "Question",
        name: "Does cloud data transfer affect migration costs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. For cloud migration projects, data transfer cost may contribute to the overall budget depending on the cloud provider, the amount of data being moved, and network usage.",
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
      <DataMigrationCostCalculator />
    </>
  );
};

export default page;
