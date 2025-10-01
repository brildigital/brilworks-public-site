import React from "react";
import FeatureComplexityVsTimeEstimator from "@/app/components/Tools/FeatureComplexityVsTimeEstimator";

export const metadata = {
  title: "Feature Complexity vs Time Estimator",
  description:
    "Quickly estimate software development timelines based on feature complexity. Plan projects smarter with our interactive estimator tool.",
  openGraph: {
    title: "Feature Complexity vs Time Estimator",
    description:
      "Quickly estimate software development timelines based on feature complexity. Plan projects smarter with our interactive estimator tool.",

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
