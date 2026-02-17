import Cooking from "../../../components/AiAgents/Cooking";
import React from "react";

export const metadata = {
  title: "Synthesis – AI Cooking Assistant & Recipe Generator",
  description:
    "Discover recipes, meal ideas, ingredient substitutions, and step-by-step cooking guidance using AI.",
  openGraph: {
    title: "Synthesis – AI Cooking Assistant & Recipe Generator",
    description:
      "Discover recipes, meal ideas, ingredient substitutions, and step-by-step cooking guidance using AI.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/cooking/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/cooking/`,
  },
};

const page = () => {
  return <Cooking />;
};

export default page;
