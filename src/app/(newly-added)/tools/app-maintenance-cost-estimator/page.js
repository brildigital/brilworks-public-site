import AppMaintenanceCostEstimator from "@/app/components/Tools/AppMaintenanceCostEstimator";
import React from "react";

export const metadata = {
  title:
    "App Maintenance & Update Cost Estimator | Calculate Your App’s Ongoing Costs",
  description:
    "Estimate your mobile or web app’s maintenance and update costs instantly. Get accurate pricing for bug fixes, security updates, new features, and version upgrades.",
  openGraph: {
    title:
      "App Maintenance & Update Cost Estimator | Calculate Your App’s Ongoing Costs",
    description:
      "Estimate your mobile or web app’s maintenance and update costs instantly. Get accurate pricing for bug fixes, security updates, new features, and version upgrades.",

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
