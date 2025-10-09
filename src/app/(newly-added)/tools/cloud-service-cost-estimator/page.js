import React from "react";
import CloudServiceCostEstimator from "@/app/components/Tools/CloudServiceCostEstimator";

export const metadata = {
  title: "Cloud Cost Estimator & Analysis Tool | Compare Cloud Pricing",
  description:
    "Use our AI-powered cloud cost analysis tool to get real-time cost estimates, compare providers, and optimize cloud spending. Access detailed cloud pricing comparison and actionable recommendations with our cloud cost estimator.",
  openGraph: {
    title: "Cloud Cost Estimator & Analysis Tool | Compare Cloud Pricing",
    description:
      "Use our AI-powered cloud cost analysis tool to get real-time cost estimates, compare providers, and optimize cloud spending. Access detailed cloud pricing comparison and actionable recommendations with our cloud cost estimator.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/cloud-service-cost-estimator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/cloud-service-cost-estimator/`,
  },
};
const page = () => {
  return <CloudServiceCostEstimator />;
};

export default page;
