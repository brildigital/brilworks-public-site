import React from "react";
import SoftwareDevelopmentCostCalculator from "@/app/components/Tools/SoftwareDevelopmentCostCalculator";

export const metadata = {
  title: "Software Development Cost Calculator | Free Project Estimator",
  description:
    "Calculate software development costs in minutes. Choose platform, complexity, and features to get accurate budget and timeline estimates for your custom software project.",
  openGraph: {
    title: "Software Development Cost Calculator | Free Project Estimator",
    description:
      "Calculate software development costs in minutes. Choose platform, complexity, and features to get accurate budget and timeline estimates for your custom software project.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/project-estimate/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/project-estimate/`,
  },
};
const page = () => {
  return <SoftwareDevelopmentCostCalculator />;
};

export default page;
