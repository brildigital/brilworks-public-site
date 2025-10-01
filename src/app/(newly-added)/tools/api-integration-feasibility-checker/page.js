import React from "react";

import DatabaseSelectorTool from "@/app/components/Tools/DatabaseSelectorTool";
import CrossPlatformVsNativeEnv from "@/app/components/Tools/CrossPlatformVsNativeAnalyzer";
import ApiIntegrationFeasibilityChecker from "@/app/components/Tools/ApiIntegrationFeasibilityChecker";

export const metadata = {
  title: "API Integration Feasibility Checker",
  description:
    "Quickly assess the feasibility of integrating third-party APIs. Evaluate compatibility, complexity, and effort to plan smooth, reliable API integrations for your project.",
  openGraph: {
    title: "API Integration Feasibility Checker",
    description:
      "Quickly assess the feasibility of integrating third-party APIs. Evaluate compatibility, complexity, and effort to plan smooth, reliable API integrations for your project.",
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
