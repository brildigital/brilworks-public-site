import React from "react";
import TechStackRecommender from "@/app/components/Tools/TechStackRecommender";

export const metadata = {
  title: "Best Tech Stack Recommender Tool for Web, Mobile & SaaS Projects",
  description:
    "Find the best tech stack for your web, mobile, or SaaS project. Get AI-powered recommendations based on your team, timeline, and goals.",
  openGraph: {
    title: "Best Tech Stack Recommender Tool for Web, Mobile & SaaS Projects",
    description:
      "Find the best tech stack for your web, mobile, or SaaS project. Get AI-powered recommendations based on your team, timeline, and goals.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/tech-stack-recommender/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/tech-stack-recommender/`,
  },
};
const page = () => {
  return <TechStackRecommender />;
};

export default page;
