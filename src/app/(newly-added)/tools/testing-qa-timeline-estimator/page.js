import React from "react";
import TestingQATimelineEstimator from "@/app/components/Tools/TestingQATimelineEstimator";

export const metadata = {
  title: "Testing & QA Timeline Calculator",
  description:
    "Estimate testing and QA timelines instantly. Calculate effort, plan test cycles, and ensure faster, bug-free software delivery with our smart QA timeline calculator.",
  openGraph: {
    title: "Testing & QA Timeline Calculator",
    description:
      "Estimate testing and QA timelines instantly. Calculate effort, plan test cycles, and ensure faster, bug-free software delivery with our smart QA timeline calculator.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}testing-qa-timeline-estimator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}testing-qa-timeline-estimator/`,
  },
};
const page = () => {
  return <TestingQATimelineEstimator />;
};

export default page;
