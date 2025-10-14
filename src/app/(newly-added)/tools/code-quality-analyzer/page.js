import React from "react";
import CodeQualityAnalyzer from "@/app/components/Tools/CodeQualityAnalyzer";

export const metadata = {
  title: "Code Quality Analyzer (Lite) | Check & Improve Your Code Instantly",
  description:
    "Analyze your code for readability, performance, and best practices in seconds. Get instant insights and improvement tips with the lightweight Code Quality Analyzer (Lite).",
  openGraph: {
    title: "Code Quality Analyzer (Lite) | Check & Improve Your Code Instantly",
    description:
      "Analyze your code for readability, performance, and best practices in seconds. Get instant insights and improvement tips with the lightweight Code Quality Analyzer (Lite).",

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
