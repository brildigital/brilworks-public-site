import React from "react";
import AutomationSavingEstimator from "@/app/components/Tools/AutomationSavingEstimator";

export const metadata = {
  title: "Automation Savings Estimator – Calculate Time & Cost Savings",
  description:
    "Estimate how much time and money your business can save by automating repetitive tasks. Get an instant analysis of potential savings and efficiency gains.",
  openGraph: {
    title: "Automation Savings Estimator – Calculate Time & Cost Savings",
    description:
      "Estimate how much time and money your business can save by automating repetitive tasks. Get an instant analysis of potential savings and efficiency gains.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}automation-saving-estimator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}automation-saving-estimator/`,
  },
};
const page = () => {
  return <AutomationSavingEstimator />;
};

export default page;
