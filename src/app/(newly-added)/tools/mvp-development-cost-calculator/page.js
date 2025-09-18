import React from "react";
import MVPDevelopmentCostCalculator from "@/app/components/Tools/MVPDevelopmentCostCalculator";

export const metadata = {
  title:
    "MVP Development Cost Calculator | Estimate Your MVP Build Cost Online",
  description:
    "Quickly estimate the cost of building your Minimum Viable Product (MVP) with our free calculator. Enter features, platform, and complexity to get accurate budget insights instantly.",
  openGraph: {
    title:
      "MVP Development Cost Calculator | Estimate Your MVP Build Cost Online",
    description:
      "Quickly estimate the cost of building your Minimum Viable Product (MVP) with our free calculator. Enter features, platform, and complexity to get accurate budget insights instantly.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}mvp-development-cost-calculator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}mvp-development-cost-calculator/`,
  },
};
const page = () => {
  return <MVPDevelopmentCostCalculator />;
};

export default page;
