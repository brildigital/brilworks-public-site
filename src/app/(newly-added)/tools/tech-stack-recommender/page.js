import React from "react";
import TechStackRecommender from "@/app/components/Tools/TechStackRecommender";

export const metadata = {
  title: "Tech Stack Recommender",
  description:
    "Discover the ideal tech stack for your project. Get tailored recommendations based on platform, scalability, and budget to build reliable, future-ready applications.",
  openGraph: {
    title: "Tech Stack Recommender",
    description:
      "Discover the ideal tech stack for your project. Get tailored recommendations based on platform, scalability, and budget to build reliable, future-ready applications.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}go-to-market-timeline-planner/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}go-to-market-timeline-planner/`,
  },
};
const page = () => {
  return <TechStackRecommender />;
};

export default page;
