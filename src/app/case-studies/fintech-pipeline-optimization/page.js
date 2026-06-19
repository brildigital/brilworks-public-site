import Script from "next/script";
import FintechPipelineCase from "./FintechPipelineCase";

export async function generateMetadata() {
  return {
    title:
      "Cutting a Fintech's Pipeline Costs 60% While Making It 4x Faster | Brilworks",
    description:
      "How Brilworks re-architected a fintech payments-analytics pipeline: 60% lower warehouse cost, 4x faster runs, data ready before the workday. dbt, Snowflake, Airflow.",
    openGraph: {
      title:
        "Cutting a Fintech's Pipeline Costs 60% While Making It 4x Faster | Brilworks",
      description:
        "How Brilworks re-architected a fintech payments-analytics pipeline: 60% lower warehouse cost, 4x faster runs, data ready before the workday. dbt, Snowflake, Airflow.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}case-studies/fintech-pipeline-optimization/`,
      siteName: "Brilworks",
      locale: "en-US",
      type: "article",
    },
    twitter: {
      title:
        "Cutting a Fintech's Pipeline Costs 60% While Making It 4x Faster | Brilworks",
      description:
        "How Brilworks re-architected a fintech payments-analytics pipeline: 60% lower warehouse cost, 4x faster runs, data ready before the workday. dbt, Snowflake, Airflow.",
      card: "summary_large_image",
      site: "@_Brilworks",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}case-studies/fintech-pipeline-optimization/`,
    },
  };
}

const FintechPipelineOptimizationPage = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Cutting a Fintech's Pipeline Costs 60% While Making It 4x Faster",
    description:
      "How Brilworks re-architected a fintech payments-analytics pipeline: 60% lower warehouse cost, 4x faster runs, data ready before the workday. dbt, Snowflake, Airflow.",
    author: {
      "@type": "Organization",
      name: "Brilworks",
      url: process.env.NEXT_PUBLIC_BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Brilworks",
      url: process.env.NEXT_PUBLIC_BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_BASE_URL}case-studies/fintech-pipeline-optimization/`,
    },
  };

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
        name: "Case Studies",
        item: `${process.env.NEXT_PUBLIC_BASE_URL}case-studies/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Fintech Pipeline Optimization",
        item: `${process.env.NEXT_PUBLIC_BASE_URL}case-studies/fintech-pipeline-optimization/`,
      },
    ],
  };

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }}
      />
      <FintechPipelineCase />
    </>
  );
};

export default FintechPipelineOptimizationPage;
