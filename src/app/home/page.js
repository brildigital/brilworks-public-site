import dynamic from "next/dynamic";
import { homepageFAQ } from "../components/lib/schemaCode";
// import GameChanger from "../components/Homepage/GameChanger";
import Script from "next/script";
const DataScienceHeroSection = dynamic(
  () => import("../components/DataScience/DataScienceHeroSection"),
);
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

const ExploreOurExpertise = dynamic(
  () => import("../components/Homepage/ExploreOurExpertise"),
);
const ClientReviews = dynamic(
  () => import("../components/Homepage/ClientReviews"),
);
const PlatformPartners = dynamic(
  () => import("../components/Homepage/PlatformPartners"),
);
const ClutchReviews = dynamic(
  () => import("../components/Homepage/ClutchReviews"),
);
const IndustriesWeServe = dynamic(
  () => import("../components/Homepage/IndustriesWeServe"),
);
const Honors = dynamic(() => import("../components/Homepage/Honors"));
const EbookSection = dynamic(
  () => import("../components/Homepage/EbookSection"),
);
const HomepageBlog = dynamic(
  () => import("../components/Homepage/HomePageBlogs"),
);
const ContactUs = dynamic(() => import("../components/Homepage/ContactUs"));
const StickyCTA = dynamic(() => import("../components/Homepage/StickyCTA"));

export async function generateMetadata() {
  return {
    title: "Data & AI Engineering Company | Brilworks",
    description:
      "Brilworks is a Data & AI engineering company. We provide data engineering services and AI agent development — from pipelines to agents in production.",
    openGraph: {
      title: "Data & AI Engineering Company | Brilworks",
      description:
        "Brilworks is a Data & AI engineering company. We provide data engineering services and AI agent development — from pipelines to agents in production.",
      url: process.env.NEXT_PUBLIC_BASE_URL,
      siteName: "Data & AI Engineering Company | Brilworks",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/hero-pg-main.webp`,
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      title: "Data & AI Engineering Company | Brilworks",
      description:
        "Brilworks is a Data & AI engineering company. We provide data engineering services and AI agent development — from pipelines to agents in production.",
      card: "summary_large_image",
      site: "@_Brilworks",
    },
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL,
    },
  };
}

const page = () => {
  const breadCrumbList = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
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
        id="homepage-faq"
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFAQ) }}
      />
      <DataScienceHeroSection />
      <DataScienceTrustBar />
      <DataScienceThesis />
      <DataScienceWork />
      <DataScienceReasons />
      <DataSciencePillars />
      <DataScienceAgentsBand />
      <DataScienceIndustries />
      <ExploreOurExpertise />
      <ClientReviews />
      <IndustriesWeServe />
      <PlatformPartners />
      <ClutchReviews />
      <Honors />
      <EbookSection />
      <HomepageBlog />
      <ContactUs />
      <StickyCTA />
    </>
  );
};

export default page;
