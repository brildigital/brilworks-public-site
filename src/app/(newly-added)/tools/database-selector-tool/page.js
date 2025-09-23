import React from "react";
import TestingQATimelineEstimator from "@/app/components/Tools/TestingQATimelineEstimator";

export const metadata = {
  title: "Tech Stack Recommender",
  description:
    "Choose the right database for your application. Compare SQL and NoSQL options, scalability, and performance to find the perfect fit for your project needs.",
  openGraph: {
    title: "Tech Stack Recommender",
    description:
      "Choose the right database for your application. Compare SQL and NoSQL options, scalability, and performance to find the perfect fit for your project needs.",

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
  return <TestingQATimelineEstimator />;
};

export default page;
