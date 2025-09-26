import React from "react";
import CustomerAcquisitionCostEstimator from "@/app/components/Tools/CustomerAcquisitionCostEstimator";

export const metadata = {
  title: "Customer Acquisition Cost (CAC) Estimator",
  description:
    "Calculate your customer acquisition cost instantly. Estimate marketing spend, conversion rates, and ROI to plan smarter growth and improve your CAC efficiency.",
  openGraph: {
    title: "Customer Acquisition Cost (CAC) Estimator",
    description:
      "Calculate your customer acquisition cost instantly. Estimate marketing spend, conversion rates, and ROI to plan smarter growth and improve your CAC efficiency.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}customer-acquisition-cost-estimator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}customer-acquisition-cost-estimator/`,
  },
};
const page = () => {
  return <CustomerAcquisitionCostEstimator />;
};

export default page;
