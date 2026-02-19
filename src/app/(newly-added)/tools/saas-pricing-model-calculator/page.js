import React from "react";
import SaaSPricingModelCalculator from "@/app/components/Tools/SaaSPricingModelCalculator";

export const metadata = {
  title: "SaaS Pricing Model Calculator | Plan Your Revenue",
  description:
    "Calculate your SaaS pricing strategy and revenue instantly. Compare subscription, tiered, usage-based, and freemium models.",
  openGraph: {
    title: "SaaS Pricing Model Calculator | Plan Your Revenue",
    description:
      "Calculate your SaaS pricing strategy and revenue instantly. Compare subscription, tiered, usage-based, and freemium models.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/saas-pricing-model-calculator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/saas-pricing-model-calculator/`,
  },
};
const page = () => {
  return <SaaSPricingModelCalculator />;
};

export default page;
