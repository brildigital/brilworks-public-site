import dynamic from "next/dynamic";
import Script from "next/script";

import DataScienceHeroSection from "../components/DataScience/DataScienceHeroSection";
const DataScienceTrustBar = dynamic(
  () => import("../components/DataScience/DataScienceTrustBar"),
);
const DataScienceThesis = dynamic(
  () => import("../components/DataScience/DataScienceThesis"),
);
const DataScienceWork = dynamic(
  () => import("../components/DataScience/DataScienceWork"),
);
const DataScienceReasons = dynamic(
  () => import("../components/DataScience/DataScienceReasons"),
);
const DataSciencePillars = dynamic(
  () => import("../components/DataScience/DataSciencePillars"),
);
const DataScienceAgentsBand = dynamic(
  () => import("../components/DataScience/DataScienceAgentsBand"),
);
const DataScienceIndustries = dynamic(
  () => import("../components/DataScience/DataScienceIndustries"),
);
const ClientReviews = dynamic(
  () => import("../components/Homepage/ClientReviews"),
);
const ContactUs = dynamic(() => import("../components/Homepage/ContactUs"));
const StickyCTA = dynamic(() => import("../components/Homepage/StickyCTA"));

export async function generateMetadata() {
  return {
    title: "Data Science Consulting & Engineering | Brilworks",
    description:
      "Brilworks is a trusted data science and software development company. We excel in delivering data engineering, predictive modeling, machine learning solutions, and advanced analytics.",
    openGraph: {
      title: "Data Science Consulting & Engineering | Brilworks",
      description:
        "Brilworks is a trusted data science and software development company. We excel in delivering data engineering, predictive modeling, machine learning solutions, and advanced analytics.",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}data`,
      siteName: "Data Science Consulting | Brilworks",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/hero-pg-main.webp`,
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      title: "Data Science Consulting & Engineering | Brilworks",
      description:
        "Brilworks is a trusted data science and software development company. We excel in delivering data engineering, predictive modeling, machine learning solutions, and advanced analytics.",
      card: "summary_large_image",
      site: "@_Brilworks",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}data`,
    },
  };
}

const DataSciencePage = () => {
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
        name: "Data Science",
        item: `${process.env.NEXT_PUBLIC_BASE_URL}data/`,
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
      <DataScienceHeroSection />
      <DataScienceTrustBar />
      <DataScienceThesis />
      <DataScienceWork />
      <DataScienceReasons />
      <DataSciencePillars />
      <DataScienceAgentsBand />
      <ClientReviews />
      <DataScienceIndustries />
      <ContactUs />
      <StickyCTA />
    </>
  );
};

export default DataSciencePage;
