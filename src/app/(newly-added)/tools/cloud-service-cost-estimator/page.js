import React from "react";
import CloudServiceCostEstimator from "@/app/components/Tools/CloudServiceCostEstimator";

export const metadata = {
  title: "Cloud Service Cost Estimator",
  description:
    "Estimate and compare cloud service costs in minutes. Plan budgets, optimize resources, and forecast expenses across AWS, Azure, Google Cloud, and more.",
  openGraph: {
    title: "Cloud Service Cost Estimator",
    description:
      "Estimate and compare cloud service costs in minutes. Plan budgets, optimize resources, and forecast expenses across AWS, Azure, Google Cloud, and more.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}cloud-service-cost-estimator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}cloud-service-cost-estimator/`,
  },
};
const page = () => {
  return <CloudServiceCostEstimator />;
};

export default page;
