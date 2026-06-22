import dynamic from "next/dynamic";
import Script from "next/script";
import SnowflakeRevealInit from "../components/SnowflakePartner/SnowflakeRevealInit";

const DatabricksHero = dynamic(
  () => import("../components/DatabricksPartner/DatabricksHero"),
);
const DatabricksStatement = dynamic(
  () => import("../components/DatabricksPartner/DatabricksStatement"),
);
const DatabricksWhyChoose = dynamic(
  () => import("../components/DatabricksPartner/DatabricksWhyChoose"),
);
const DatabricksMidCTA = dynamic(
  () => import("../components/DatabricksPartner/DatabricksMidCTA"),
);
const DatabricksServices = dynamic(
  () => import("../components/DatabricksPartner/DatabricksServices"),
);
const DatabricksIndustries = dynamic(
  () => import("../components/DatabricksPartner/DatabricksIndustries"),
);
const DatabricksFAQ = dynamic(
  () => import("../components/DatabricksPartner/DatabricksFAQ"),
);
const DatabricksCTA = dynamic(
  () => import("../components/DatabricksPartner/DatabricksCTA"),
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Databricks partner and why choose Brilworks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Databricks partner is a firm certified to design, build, and run on the lakehouse. Brilworks brings certified engineers who have shipped Spark, Delta, and ML in production across fintech, healthcare, and manufacturing.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a Databricks migration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most migrations run 8 to 16 weeks depending on data volume and how many pipelines and downstream systems depend on the old setup. We migrate in phases and run the old platform in parallel.",
      },
    },
    {
      "@type": "Question",
      name: "Can you take our ML models to production?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build the MLOps around your models with MLflow, feature stores, and serving pipelines, so they get deployed, monitored, and stay reproducible instead of dying in a notebook.",
      },
    },
  ],
};

export async function generateMetadata() {
  return {
    title: "Brilworks x Databricks | Certified Databricks Partner",
    description:
      "Brilworks is a certified Databricks partner. We build your lakehouse on one platform, run data engineering at scale, and take ML and GenAI from notebook to production on data your teams can trust.",
    keywords:
      "databricks partner, databricks consulting partner, certified databricks partner, databricks implementation partner, databricks lakehouse",
    openGraph: {
      title: "Brilworks x Databricks | Certified Databricks Partner",
      type: "website",
      description:
        "Brilworks is a certified Databricks partner. We build your lakehouse on one platform, run data engineering at scale, and take ML and GenAI from notebook to production on data your teams can trust.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}databricks-partner`,
      siteName: "Brilworks",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/databricks_hero.webp`,
        },
      ],
      locale: "en-US",
    },
    twitter: {
      title: "Brilworks x Databricks | Certified Databricks Partner",
      description:
        "Brilworks is a certified Databricks partner. We build your lakehouse on one platform, run data engineering at scale, and take ML and GenAI from notebook to production on data your teams can trust.",
      card: "summary_large_image",
      site: "@_Brilworks",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}databricks-partner`,
    },
  };
}

const DatabricksPartnerPage = () => {
  const breadCrumbList = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: process.env.NEXT_PUBLIC_BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Databricks Partner",
      },
    ],
  };

  return (
    <>
      <Script
        defer
        id="breadcrumbs"
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }}
      />
      <Script
        defer
        id="databricks-faq"
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SnowflakeRevealInit />
      <DatabricksHero />
      <DatabricksStatement />
      <DatabricksWhyChoose />
      <DatabricksMidCTA />
      <DatabricksServices />
      <DatabricksIndustries />
      <DatabricksCTA />
      <DatabricksFAQ />
    </>
  );
};

export default DatabricksPartnerPage;
