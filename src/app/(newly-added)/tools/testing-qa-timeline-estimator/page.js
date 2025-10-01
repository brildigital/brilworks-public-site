import React from "react";
import TestingQATimelineEstimator from "@/app/components/Tools/TestingQATimelineEstimator";

export const metadata = {
  title:
    "Testing & QA Timeline Calculator | Software Testing Time Estimation Tool",
  description:
    "Estimate your software testing timeline with our intelligent QA planning calculator. Get fast, accurate testing duration forecasts for agile and traditional projects.",
  openGraph: {
    title:
      "Testing & QA Timeline Calculator | Software Testing Time Estimation Tool",
    description:
      "Estimate your software testing timeline with our intelligent QA planning calculator. Get fast, accurate testing duration forecasts for agile and traditional projects.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/testing-qa-timeline-estimator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/testing-qa-timeline-estimator/`,
  },
};
const page = () => {
  return <TestingQATimelineEstimator />;
};

export default page;
