import React from "react";
import DigitalTransformationReadinessChecker from "@/app/components/Tools/DigitalTransformationReadinessChecker";

export const metadata = {
  title: "Digital Transformation Readiness Assessment",
  description:
    "Complete the assessment below to evaluate your organization's readiness for digital transformation. Get personalized recommendations and actionable insights through our digital maturity assessment and digital transformation scorecard.",
  openGraph: {
    title: "Digital Transformation Readiness Assessment",
    description:
      "Complete the assessment below to evaluate your organization's readiness for digital transformation. Get personalized recommendations and actionable insights through our digital maturity assessment and digital transformation scorecard.",

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
