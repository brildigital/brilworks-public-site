import Script from "next/script";
import { homepageFAQ } from "../components/lib/schemaCode";
import EnterpriseHero from "../components/Homepage/Enterprise/EnterpriseHero";
import EnterprisePartners from "../components/Homepage/Enterprise/EnterprisePartners";
import EnterpriseApproach from "../components/Homepage/Enterprise/EnterpriseApproach";
import EnterpriseTwoWays from "../components/Homepage/Enterprise/EnterpriseTwoWays";
import EnterpriseWork from "../components/Homepage/Enterprise/EnterpriseWork";
import EnterpriseSolutions from "../components/Homepage/Enterprise/EnterpriseSolutions";
import EnterpriseProof from "../components/Homepage/Enterprise/EnterpriseProof";
import EnterpriseStack from "../components/Homepage/Enterprise/EnterpriseStack";
import EnterpriseIoT from "../components/Homepage/Enterprise/EnterpriseIoT";
import FinalCTA from "../components/Common/FinalCTA";
import HomePageBlogs from "../components/Homepage/HomePageBlogs";

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
    <div className="bw-home">
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
      <EnterpriseHero />
      <EnterprisePartners />
      <EnterpriseApproach />
      <EnterpriseTwoWays />
      <EnterpriseWork />
      <EnterpriseSolutions />
      <EnterpriseProof />
      <EnterpriseStack />
      <EnterpriseIoT />
      <HomePageBlogs />
      <FinalCTA />
    </div>
  );
};

export default page;
