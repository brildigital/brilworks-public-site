import React from "react";
import DigitalTransformationReadinessChecker from "@/app/components/Tools/DigitalTransformationReadinessChecker";

export const metadata = {
  title:
    "Digital Transformation Readiness Checker | Assess Your Business Preparedness",
  description:
    "Evaluate how ready your organization is for digital transformation. Discover your digital maturity, identify technology gaps, and get tailored recommendations to accelerate innovation and growth.",
  openGraph: {
    title:
      "Digital Transformation Readiness Checker | Assess Your Business Preparedness",
    description:
      "Evaluate how ready your organization is for digital transformation. Discover your digital maturity, identify technology gaps, and get tailored recommendations to accelerate innovation and growth.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/digital-transformation-readiness-checker/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/digital-transformation-readiness-checker/`,
  },
};
const page = () => {
  return <DigitalTransformationReadinessChecker />;
};

export default page;
