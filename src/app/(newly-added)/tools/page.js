import React from "react";
import Tools from "@/app/components/Tools/Tools";

export const metadata = {
  title:
    "40+ Free Software Development Calculators & Tools | Brilworks",
  description:
    "Free app development cost calculators, ROI estimators, MVP planners & SaaS tools. Get instant estimates for your next software project. No signup required.",
  openGraph: {
    title:
      "40+ Free Software Development Calculators & Tools | Brilworks",
    description:
      "Free app development cost calculators, ROI estimators, MVP planners & SaaS tools. Get instant estimates for your next software project. No signup required.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "40+ Free Software Development Calculators & Tools",
  description:
    "Free app development cost calculators, ROI estimators, MVP planners & SaaS tools. Get instant estimates for your next software project.",
  url: "https://www.brilworks.com/tools/",
  publisher: {
    "@type": "Organization",
    name: "Brilworks",
    url: "https://www.brilworks.com",
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: 40,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: "https://www.brilworks.com/tools/app-development-cost-calculator/",
        name: "Software Development Cost Calculator",
      },
      {
        "@type": "ListItem",
        position: 2,
        url: "https://www.brilworks.com/tools/roi-calculator/",
        name: "ROI Calculator",
      },
      {
        "@type": "ListItem",
        position: 3,
        url: "https://www.brilworks.com/tools/saas-development-cost-calculator/",
        name: "SaaS Development Cost Calculator",
      },
      {
        "@type": "ListItem",
        position: 4,
        url: "https://www.brilworks.com/tools/mvp-development-cost-calculator/",
        name: "MVP Development Cost Calculator",
      },
      {
        "@type": "ListItem",
        position: 5,
        url: "https://www.brilworks.com/tools/ai-app-development-cost-calculator/",
        name: "AI App Development Cost Calculator",
      },
    ],
  },
};

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Tools />
    </>
  );
};

export default page;
