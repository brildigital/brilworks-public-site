import React from "react";
import WhichAppShouldYouBuild from "@/app/components/Tools/WhichAppShouldYouBuild";

export const metadata = {
  title:
    "Which App Should You Build? | Find the Perfect App Idea for Your Business",
  description:
    "Discover which app best fits your business goals. Answer a few quick questions to get personalized recommendations—whether it’s a web, mobile, or AI-powered app, find the perfect solution to build next.",
  openGraph: {
    title:
      "Which App Should You Build? | Find the Perfect App Idea for Your Business",
    description:
      "Discover which app best fits your business goals. Answer a few quick questions to get personalized recommendations—whether it’s a web, mobile, or AI-powered app, find the perfect solution to build next.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/mvp-feature-selector-quiz/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/mvp-feature-selector-quiz/`,
  },
};
const page = () => {
  return <WhichAppShouldYouBuild />;
};

export default page;
