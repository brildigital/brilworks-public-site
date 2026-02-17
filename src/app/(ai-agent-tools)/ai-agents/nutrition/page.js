import Nutrition from "../../../components/AiAgents/Nutrition";
import React from "react";

export const metadata = {
  title: "Nutri-Sci – Smart Diet & Nutrition AI Planner",
  description:
    "AI-driven meal plans, nutrition breakdowns, macros, allergies, and personalized dietary insights.",
  openGraph: {
    title: "Nutri-Sci – Smart Diet & Nutrition AI Planner",
    description:
      "AI-driven meal plans, nutrition breakdowns, macros, allergies, and personalized dietary insights.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/nutrition/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/nutrition/`,
  },
};

const page = () => {
  return <Nutrition />;
};

export default page;
