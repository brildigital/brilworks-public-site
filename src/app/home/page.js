import dynamic from "next/dynamic";
import { homepageFAQ } from "../components/lib/schemaCode";
// import GameChanger from "../components/Homepage/GameChanger";
import HeroSection from "../components/Homepage/HeroSection";
import Script from "next/script";

const BrilliantInThought = dynamic(() =>
  import("../components/Homepage/BrilliantInThought")
);
const SeeingBelieving = dynamic(() =>
  import("../components/Homepage/SeeingBelieving")
);
const MidPageCTA = dynamic(() =>
  import("../components/Homepage/MidPageCTA")
);
const AISolutions = dynamic(() =>
  import("../components/Homepage/AISolutions")
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
const WhatWeShip = dynamic(() =>
  import("../components/Homepage/WhatWeShip")
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
    title: "AWS Consulting Partner | Gen AI | Product Engineering",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people. We excel in delivering Gen AI solutions, white label app development, AWS cost optimization, and product engineering with expertise in Next.js, Java, and low-code/no-code platforms.",
    openGraph: {
      title: "AWS Consulting Partner | Gen AI | Product Engineering",
      description:
        "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.  We excel in delivering Gen AI solutions, white label app development, AWS cost optimization, and product engineering with expertise in Next.js, Java, and low-code/no-code platforms.",
      url: process.env.NEXT_PUBLIC_BASE_URL,
      siteName: "AWS Consulting Partner | Gen AI | Product Engineering",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/hero-pg-main.webp`,
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      title: "AWS Consulting Partner | Gen AI | Product Engineering",
      description:
        "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.  Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
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
      <HeroSection />
      {/* <GameChanger /> */}
      <BrilliantInThought />
      <SeeingBelieving />
      <HomepageWhyChooseUs />
      <MidPageCTA />
      <AISolutions />
      <WhatWeShip />
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

export default page;
