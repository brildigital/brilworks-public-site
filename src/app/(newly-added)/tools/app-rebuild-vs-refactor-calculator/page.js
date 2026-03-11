import React from "react";
import SoftwareDevelopmentCostCalculator from "@/app/components/Tools/SoftwareDevelopmentCostCalculator";
import AppRebuildVsRefactorCalculator from "@/app/components/Tools/AppRebuildVsRefactorCalculator";

export const metadata = {
  title:
    "App Rebuild vs Refactor Calculator | Make the Right Modernization Decision",
  description:
    "Compare rebuild vs refactor costs, technical debt impact, scalability, and ROI. Get instant insights to decide the best modernization strategy for your app.",
  openGraph: {
    title:
      "App Rebuild vs Refactor Calculator | Make the Right Modernization Decision",
    description:
      "Compare rebuild vs refactor costs, technical debt impact, scalability, and ROI. Get instant insights to decide the best modernization strategy for your app.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/app-rebuild-vs-refactor-calculator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/app-rebuild-vs-refactor-calculator/`,
  },
};
const page = () => {
  return <AppRebuildVsRefactorCalculator />;
};

export default page;
