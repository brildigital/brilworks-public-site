import React from "react";
import AppDevelopmentCostBreakdownCalculator from "@/app/components/Tools/AppDevelopmentCostBreakdownCalculator";

export const metadata = {
  title: "App Development Cost Breakdown Calculator | Estimate Your App Budget",
  description:
    "Use our App Development Cost Breakdown Calculator to estimate your mobile or web app budget. Get a detailed cost analysis based on features, platform, design, and development time.",
  openGraph: {
    title:
      "App Development Cost Breakdown Calculator | Estimate Your App Budget",
    description:
      "Use our App Development Cost Breakdown Calculator to estimate your mobile or web app budget. Get a detailed cost analysis based on features, platform, design, and development time.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/app-development-cost-breakdown-calculator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/app-development-cost-breakdown-calculator/`,
  },
};
const page = () => {
  return <AppDevelopmentCostBreakdownCalculator />;
};

export default page;
