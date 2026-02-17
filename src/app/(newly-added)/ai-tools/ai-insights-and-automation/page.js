import React from "react";
import AIInsightsAndAutomation from "@/app/components/AITools/AIInsightsAndAutomation";

export const metadata = {
  title: "AI Insights and Automation – Smarter Decisions, Faster Workflows",
  description:
    "Discover how AI insights and automation can transform business processes. Learn to optimize workflows, boost productivity, and make smarter, data-driven decisions with AI-powered solutions.",
  openGraph: {
    title: "AI Insights and Automation – Smarter Decisions, Faster Workflows",
    description:
      "Discover how AI insights and automation can transform business processes. Learn to optimize workflows, boost productivity, and make smarter, data-driven decisions with AI-powered solutions.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-tools/ai-insights-and-automation/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-tools/ai-insights-and-automation/`,
  },
};
const page = () => {
  return <AIInsightsAndAutomation />;
};

export default page;
