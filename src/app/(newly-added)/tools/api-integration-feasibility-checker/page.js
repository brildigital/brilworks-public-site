import React from "react";
import ApiIntegrationFeasibilityChecker from "@/app/components/Tools/ApiIntegrationFeasibilityChecker";

export const metadata = {
  title: "API Integration Feasibility Checker ",
  description:
    "Evaluate your API integration projects with our AI-powered API integration checker. Access API integration best practices, a complete API integration checklist, and personalized recommendations to ensure project success.",
  openGraph: {
    title: "API Integration Feasibility Checker ",
    description:
      "Evaluate your API integration projects with our AI-powered API integration checker. Access API integration best practices, a complete API integration checklist, and personalized recommendations to ensure project success.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/api-integration-feasibility-checker/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/api-integration-feasibility-checker/`,
  },
};
const page = () => {
  return <ApiIntegrationFeasibilityChecker />;
};

export default page;
