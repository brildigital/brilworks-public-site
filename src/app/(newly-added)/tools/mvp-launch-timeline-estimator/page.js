import React from "react";
import MVPLaunchTimelineEstimator from "@/app/components/Tools/MVPLaunchTimelineEstimator";

export const metadata = {
  title: "MVP Timeline Estimator | Accurate MVP Launch Planning Tool",
  description:
    "Estimate your MVP timeline with precision. Use our AI-powered MVP timeline estimator to plan your minimum viable product development phases, cost, and launch strategy.",
  openGraph: {
    title: "MVP Timeline Estimator | Accurate MVP Launch Planning Tool",
    description:
      "Estimate your MVP timeline with precision. Use our AI-powered MVP timeline estimator to plan your minimum viable product development phases, cost, and launch strategy.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/mvp-launch-timeline-estimator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/mvp-launch-timeline-estimator/`,
  },
};

const page = () => {
  return <MVPLaunchTimelineEstimator />;
};

export default page;
