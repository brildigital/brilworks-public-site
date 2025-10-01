import React from "react";
import SaasDevelopmentCostCalculator from "@/app/components/Tools/SaasDevelopmentCostCalculator";

export const metadata = {
  title:
    "Cost to Build SaaS Product | SaaS Calculator & App Development Cost Estimator",
  description:
    "Use our free SaaS calculator to estimate the cost to build a SaaS product. Get accurate app development cost calculations for web, mobile, and hybrid platforms.",
  openGraph: {
    title:
      "Cost to Build SaaS Product | SaaS Calculator & App Development Cost Estimator",
    description:
      "Use our free SaaS calculator to estimate the cost to build a SaaS product. Get accurate app development cost calculations for web, mobile, and hybrid platforms.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}saas-development-cost-calculator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}saas-development-cost-calculator/`,
  },
};
const page = () => {
  return <SaasDevelopmentCostCalculator />;
};

export default page;
