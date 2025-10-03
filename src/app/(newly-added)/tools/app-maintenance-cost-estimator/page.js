import AppMaintenanceCostEstimator from "@/app/components/Tools/AppMaintenanceCostEstimator";
import React from "react";

export const metadata = {
  title:
    "App Maintenance Cost Estimator | Calculate Mobile & Web App Update Costs",
  description:
    "Use our app maintenance cost calculator to estimate annual update costs for mobile and web apps. Get accurate pricing for bug fixes, feature updates, and support.",
  openGraph: {
    title:
      "App Maintenance Cost Estimator | Calculate Mobile & Web App Update Costs",
    description:
      "Use our app maintenance cost calculator to estimate annual update costs for mobile and web apps. Get accurate pricing for bug fixes, feature updates, and support.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/app-maintenance-cost-estimator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/app-maintenance-cost-estimator/`,
  },
};

const page = () => {
  return <AppMaintenanceCostEstimator />;
};

export default page;
