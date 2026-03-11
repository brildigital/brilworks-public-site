import React from "react";
import AIAppDevelopmentCostCalculator from "@/app/components/Tools/AIAppDevelopmentCostCalculator";

export const metadata = {
  title: "AI App Development Cost Calculator | Instant Estimate",
  description:
    "Estimate your AI app development cost instantly. Get a detailed breakdown based on features, AI models, integrations, and deployment.",
  openGraph: {
    title: "AI App Development Cost Calculator | Instant Estimate",
    description:
      "Estimate your AI app development cost instantly. Get a detailed breakdown based on features, AI models, integrations, and deployment.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/ai-app-development-cost-calculator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/ai-app-development-cost-calculator/`,
  },
};

const page = () => {
  return <AIAppDevelopmentCostCalculator />;
};

export default page;
