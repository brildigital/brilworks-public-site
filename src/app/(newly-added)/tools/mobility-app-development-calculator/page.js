import React from "react";
import MobilityAppDevCostCalculator from "@/app/components/Tools/MobilityAppDevCostCalculator";

export const metadata = {
  title: "Uber-Like App Development Cost & Breakdown | Get Estimate",
  description:
    "Ready to build an Uber-like app? Use our instant calculator to get a clear app development cost breakdown for your ride-hailing project. Get started now and get a detailed quote.",
  openGraph: {
    title: "Uber-Like App Development Cost & Breakdown | Get Estimate",
    description:
      "Ready to build an Uber-like app? Use our instant calculator to get a clear app development cost breakdown for your ride-hailing project. Get started now and get a detailed quote.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}mobility-app-development-calculator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}mobility-app-development-calculator/`,
  },
};
const page = () => {
  return <MobilityAppDevCostCalculator />;
};

export default page;
