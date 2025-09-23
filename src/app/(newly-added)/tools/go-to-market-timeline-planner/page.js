import React from "react";
import TestingQATimelineEstimator from "@/app/components/Tools/TestingQATimelineEstimator";

export const metadata = {
  title: "Go-to-Market Timeline Planner",
  description:
    "Plan and track your product launch schedule with ease. Estimate tasks, align teams, and execute a successful go-to-market strategy with our interactive timeline planner.",
  openGraph: {
    title: "Go-to-Market Timeline Planner",
    description:
      "Plan and track your product launch schedule with ease. Estimate tasks, align teams, and execute a successful go-to-market strategy with our interactive timeline planner.",
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
