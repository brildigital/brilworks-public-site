import React from "react";
import SaasDevelopmentCostCalculator from "@/app/components/Tools/SaasDevelopmentCostCalculator";

export const metadata = {
  title: "SaaS Development Cost Calculator | Free Online Estimator",
  description:
    "Quickly calculate SaaS development costs with our free online estimator. Select features, complexity, and design to get realistic budget and timeline insights for your SaaS project.",
  openGraph: {
    title: "SaaS Development Cost Calculator | Free Online Estimator",
    description:
      "Quickly calculate SaaS development costs with our free online estimator. Select features, complexity, and design to get realistic budget and timeline insights for your SaaS project.",

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
