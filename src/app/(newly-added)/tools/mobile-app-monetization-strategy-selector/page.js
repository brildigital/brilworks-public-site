import React from "react";
import SoftwareDevelopmentCostCalculator from "@/app/components/Tools/SoftwareDevelopmentCostCalculator";
import MobileAppMonetizationStrategySelector from "@/app/components/Tools/MobileAppMonetizationStrategySelector";

export const metadata = {
  title:
    "Mobile App Monetization Strategy Selector | Choose the Right Revenue Model",
  description:
    "Find the most profitable monetization model for your mobile app. Compare ads, subscriptions, freemium, and hybrid strategies based on your target users and growth goals.",
  openGraph: {
    title:
      "Mobile App Monetization Strategy Selector | Choose the Right Revenue Model",
    description:
      "Find the most profitable monetization model for your mobile app. Compare ads, subscriptions, freemium, and hybrid strategies based on your target users and growth goals.",
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
  return <MobileAppMonetizationStrategySelector />;
};

export default page;
