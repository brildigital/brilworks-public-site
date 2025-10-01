import React from "react";
import RoiCalculator from "@/app/components/Tools/RoiCalculator";

export const metadata = {
  title: "ROI Calculator | Free Return on Investment Calculator Online",
  description:
    "Easily calculate return on investment with our free ROI calculator. Enter costs and gains to measure profitability, evaluate business success, and make smarter financial decisions.",
  openGraph: {
    title: "ROI Calculator | Free Return on Investment Calculator Online",
    description:
      "Easily calculate return on investment with our free ROI calculator. Enter costs and gains to measure profitability, evaluate business success, and make smarter financial decisions.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/roi-calculator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/roi-calculator/`,
  },
};
const page = () => {
  return <RoiCalculator />;
};

export default page;
