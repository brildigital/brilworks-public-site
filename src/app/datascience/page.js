import dynamic from "next/dynamic";
import Script from "next/script";

import DataScienceHeroSection from "../components/DataScience/DataScienceHeroSection";
const DataScienceSolutions = dynamic(() =>
  import("../components/DataScience/DataScienceSolutions")
);
const DataScienceExpertise = dynamic(() =>
  import("../components/DataScience/DataScienceExpertise")
);

const BrilliantInThought = dynamic(() =>
  import("../components/Homepage/BrilliantInThought")
);
const SeeingBelieving = dynamic(() =>
  import("../components/Homepage/SeeingBelieving")
);
const MidPageCTA = dynamic(() =>
  import("../components/Homepage/MidPageCTA")
);
const ClientReviews = dynamic(() =>
  import("../components/Homepage/ClientReviews")
);
const ClutchReviews = dynamic(() =>
  import("../components/Homepage/ClutchReviews")
);
const IndustriesWeServe = dynamic(() =>
  import("../components/Homepage/IndustriesWeServe")
);
const Honors = dynamic(() => import("../components/Homepage/Honors"));
const HomepageWhyChooseUs = dynamic(() =>
  import("../components/Homepage/HomepageWhyChooseUs")
);
const EbookSection = dynamic(() =>
  import("../components/Homepage/EbookSection")
);
const HomepageBlog = dynamic(() =>
  import("../components/Homepage/HomePageBlogs")
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
      url: `${process.env.NEXT_PUBLIC_BASE_URL}datascience`,
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
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}datascience`,
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
        item: `${process.env.NEXT_PUBLIC_BASE_URL}datascience/`,
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
      <BrilliantInThought />
      <SeeingBelieving />
      <HomepageWhyChooseUs />
      <MidPageCTA />
      <DataScienceSolutions />
      <DataScienceExpertise />
      <ClientReviews />
      <IndustriesWeServe />
      <ClutchReviews />
      <Honors />
      <EbookSection />
      <HomepageBlog />
      <ContactUs />
      <StickyCTA />
    </>
  );
};

export default DataSciencePage;
