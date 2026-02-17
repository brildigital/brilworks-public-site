import React from "react";
import LifetimeValueCalculator from "@/app/components/Tools/LifetimeValueCalculator";

export const metadata = {
  title: "Customer Lifetime Value Calculator | SaaS LTV & CAC Estimator Tool",
  description:
    "Calculate customer lifetime value (LTV) with our advanced SaaS LTV calculator. Estimate LTV to CAC ratio, app LTV, and retention metrics to optimize your growth strategy.",
  openGraph: {
    title: "Customer Lifetime Value Calculator | SaaS LTV & CAC Estimator Tool",
    description:
      "Calculate customer lifetime value (LTV) with our advanced SaaS LTV calculator. Estimate LTV to CAC ratio, app LTV, and retention metrics to optimize your growth strategy.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/lifetime-value-calculator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/lifetime-value-calculator/`,
  },
};
const page = () => {
  return <LifetimeValueCalculator />;
};

export default page;
