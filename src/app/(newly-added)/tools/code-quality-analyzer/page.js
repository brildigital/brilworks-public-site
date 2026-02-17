import React from "react";
import CodeQualityAnalyzer from "@/app/components/Tools/CodeQualityAnalyzer";

export const metadata = {
  title:
    "Code Quality Analyzer | Instant Code Analysis for Bugs, Security & Performance",
  description:
    "Run instant code analysis with our Code Quality Analyzer. Detect bugs, security issues, code smells, and performance inefficiencies. Get actionable insights and detailed code quality reports in seconds.",
  openGraph: {
    title:
      "Code Quality Analyzer | Instant Code Analysis for Bugs, Security & Performance",
    description:
      "Run instant code analysis with our Code Quality Analyzer. Detect bugs, security issues, code smells, and performance inefficiencies. Get actionable insights and detailed code quality reports in seconds.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/code-quality-analyzer/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/code-quality-analyzer/`,
  },
};
const page = () => {
  return <CodeQualityAnalyzer />;
};

export default page;
