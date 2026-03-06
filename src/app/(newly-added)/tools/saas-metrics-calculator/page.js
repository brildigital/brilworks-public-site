import React from "react";
import SaaSMetricsCalculator from "@/app/components/Tools/SaaSMetricsCalculator";

export const metadata = {
  title: "SaaS Revenue & Growth Metrics Calculator",
  description:
    "Measure your SaaS growth with a powerful metrics calculator covering revenue, churn, customer acquisition cost, and lifetime value.",
  openGraph: {
    title: "SaaS Revenue & Growth Metrics Calculator",
    description:
      "Measure your SaaS growth with a powerful metrics calculator covering revenue, churn, customer acquisition cost, and lifetime value.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/saas-metrics-calculator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/saas-metrics-calculator/`,
  },
};
const page = () => {
  return <SaaSMetricsCalculator />;
};

export default page;
