import React from "react";
import MobilityAppDevCostCalculator from "@/app/components/Tools/MobilityAppDevCostCalculator";

export const metadata = {
  title: "Mobility App Development Cost Calculator | Free Online Estimator",
  description:
    "Estimate mobility app development costs instantly. Select platform, features, and complexity to get accurate budget and timeline insights for your custom mobility app project.",
  openGraph: {
    title: "Mobility App Development Cost Calculator | Free Online Estimator",
    description:
      "Estimate mobility app development costs instantly. Select platform, features, and complexity to get accurate budget and timeline insights for your custom mobility app project.",

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
