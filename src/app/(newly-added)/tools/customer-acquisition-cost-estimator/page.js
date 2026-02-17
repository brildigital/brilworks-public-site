import React from "react";
import CustomerAcquisitionCostEstimator from "@/app/components/Tools/CustomerAcquisitionCostEstimator";

export const metadata = {
  title: "Customer Acquisition Cost Calculator | Brilworks CAC Estimator",
  description:
    "Use Brilworks’ customer acquisition cost calculator to estimate CAC with 95% accuracy. Optimize your marketing spend and boost ROI across all channels.",
  openGraph: {
    title: "Customer Acquisition Cost Calculator | Brilworks CAC Estimator",
    description:
      "Use Brilworks’ customer acquisition cost calculator to estimate CAC with 95% accuracy. Optimize your marketing spend and boost ROI across all channels.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/customer-acquisition-cost-estimator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/customer-acquisition-cost-estimator/`,
  },
};
const page = () => {
  return <CustomerAcquisitionCostEstimator />;
};

export default page;
