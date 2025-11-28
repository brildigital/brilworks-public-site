import ManufaturingSoftwareDevelopmentService from "@/app/components/Solution/ManufaturingSoftwareDevelopmentService";
import React from "react";

export const metadata = {
  title:
    "Hire ReactJS Developers in 72 Hours | Top 3% Vetted Talent | Brilworks",
  description:
    "Hire ReactJS developers within 72 hours for web, SaaS, and startup projects. Brilworks offers certified, project-ready experts with flexible models, transparent pricing, and global client experience. Book your free consultation today!",
  openGraph: {
    title: "Hire ReactJS Developers in 72 Hours | Top 3% Vetted Talent",
    description:
      "Hire ReactJS developers within 72 hours for web, SaaS, and startup projects. Brilworks offers certified, project-ready experts with flexible models, transparent pricing, and global client experience. Book your free consultation today!",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}industy/manufacturing-software-development-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/v2/manufacturing-software-development-services.webp`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Hire ReactJS Developers in 72 Hours | Top 3% Vetted Talent",
    description:
      "Hire ReactJS developers within 72 hours for web, SaaS, and startup projects. Brilworks offers certified, project-ready experts with flexible models, transparent pricing, and global client experience. Book your free consultation today!",

    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}industy/manufacturing-software-development-services/`,
  },
};

const page = () => {
  return <ManufaturingSoftwareDevelopmentService />;
};

export default page;
