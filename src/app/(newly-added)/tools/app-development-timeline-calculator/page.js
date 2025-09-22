import React from "react";
import AppDevelopmentTimelineCalculator from "@/app/components/Tools/AppDevelopmentTimelineCalculator";

export const metadata = {
  title: "App Development Timeline Calculator | Estimate Your Project Duration",
  description:
    "Plan smarter with our free App Development Timeline Calculator. Estimate how long your mobile or web app will take to build based on complexity, features, and resources.",
  openGraph: {
    title:
      "App Development Timeline Calculator | Estimate Your Project Duration",
    description:
      "Plan smarter with our free App Development Timeline Calculator. Estimate how long your mobile or web app will take to build based on complexity, features, and resources.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}app-development-timeline-calculator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}app-development-timeline-calculator/`,
  },
};

const page = () => {
  return <AppDevelopmentTimelineCalculator />;
};

export default page;
