import React from "react";
import SaaSProfitabilityCalculator from "@/app/components/Tools/SaaSProfitabilityCalculator";

export const metadata = {
  title: "SaaS Profitability Calculator",
  description:
    "Estimate your SaaS business profitability in minutes. Calculate revenue, expenses, and profit margins to plan growth and make data-driven financial decisions.",
  openGraph: {
    title: "SaaS Profitability Calculator",
    description:
      "Estimate your SaaS business profitability in minutes. Calculate revenue, expenses, and profit margins to plan growth and make data-driven financial decisions.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}saas-profitability-calculator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}saas-profitability-calculator/`,
  },
};
const page = () => {
  return <SaaSProfitabilityCalculator />;
};

export default page;
