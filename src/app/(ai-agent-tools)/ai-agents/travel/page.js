import Travel from "../../../components/AiAgents/Travel";
import React from "react";

export const metadata = {
  title: "Teleport – AI Travel Planner & Itinerary Builder",
  description:
    "Generate personalized travel plans, budgets, routes, packing lists, and destination insights with AI.",
  openGraph: {
    title: "Teleport – AI Travel Planner & Itinerary Builder",
    description:
      "Generate personalized travel plans, budgets, routes, packing lists, and destination insights with AI.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/travel/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/travel/`,
  },
};

const page = () => {
  return <Travel />;
};

export default page;
