import React from "react";
import FeatureComplexityVsTimeEstimator from "@/app/components/Tools/FeatureComplexityVsTimeEstimator";

export const metadata = {
  title:
    "AI-Powered Feature Complexity Estimator | Software Development Time Calculator",
  description:
    "Estimate software development time with our AI-powered feature complexity calculator. Analyze UI, logic, integrations, and get accurate project timelines instantly.",
  openGraph: {
    title:
      "AI-Powered Feature Complexity Estimator | Software Development Time Calculator",
    description:
      "Estimate software development time with our AI-powered feature complexity calculator. Analyze UI, logic, integrations, and get accurate project timelines instantly.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/feature-complexity-vs-time-estimator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/feature-complexity-vs-time-estimator/`,
  },
};
const page = () => {
  return <FeatureComplexityVsTimeEstimator />;
};

export default page;
