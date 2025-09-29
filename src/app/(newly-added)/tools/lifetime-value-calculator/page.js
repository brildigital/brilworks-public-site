import React from "react";
import LifetimeValueCalculator from "@/app/components/Tools/LifetimeValueCalculator";

export const metadata = {
  title: "Lifetime Value (LTV) Calculator",
  description:
    "Calculate your customer lifetime value instantly. Estimate long-term revenue, retention, and profitability to plan smarter growth and maximize ROI.",
  openGraph: {
    title: "Lifetime Value (LTV) Calculator",
    description:
      "Calculate your customer lifetime value instantly. Estimate long-term revenue, retention, and profitability to plan smarter growth and maximize ROI.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}lifetime-value-calculator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}lifetime-value-calculator/`,
  },
};
const page = () => {
  return <LifetimeValueCalculator />;
};

export default page;
