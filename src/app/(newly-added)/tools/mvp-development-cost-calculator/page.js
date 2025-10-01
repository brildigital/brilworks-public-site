import React from "react";
import MVPDevelopmentCostCalculator from "@/app/components/Tools/MVPDevelopmentCostCalculator";

export const metadata = {
  title:
    "MVP Development Cost Calculator | Estimate Your MVP Build Cost Online",
  description:
    "Get accurate cost estimates for your MVP development project. Make informed decisions with our intelligent calculator powered by industry data.",
  openGraph: {
    title:
      "MVP Development Cost Calculator | Estimate Your MVP Build Cost Online",
    description:
      "Get accurate cost estimates for your MVP development project. Make informed decisions with our intelligent calculator powered by industry data.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/mvp-development-cost-calculator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/mvp-development-cost-calculator/`,
  },
};
const page = () => {
  return <MVPDevelopmentCostCalculator />;
};

export default page;
