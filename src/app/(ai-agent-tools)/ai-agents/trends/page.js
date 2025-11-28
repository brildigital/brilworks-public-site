import Trends from "../../../components/AiAgents/Trends";
import React from "react";

export const metadata = {
  title: "Trends – AI Trend Predictor & Social Insights Engine",
  description:
    "Analyze viral patterns, social media movements, and cultural trends with predictive AI.",
  openGraph: {
    title: "Trends – AI Trend Predictor & Social Insights Engine",
    description:
      "Analyze viral patterns, social media movements, and cultural trends with predictive AI.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/trends/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/trends/`,
  },
};

const page = () => {
  return <Trends />;
};

export default page;
