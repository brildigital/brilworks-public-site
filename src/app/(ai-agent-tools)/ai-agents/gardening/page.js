import Gardening from "../../../components/AiAgents/Gardening";
import React from "react";

export const metadata = {
  title: "Flora – AI Gardening & Plant Care Assistant",
  description:
    "Diagnose plant issues, schedule watering, identify species, and optimize plant health with AI.",
  openGraph: {
    title: "Flora – AI Gardening & Plant Care Assistant",
    description:
      "Diagnose plant issues, schedule watering, identify species, and optimize plant health with AI.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/gardening/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/gardening/`,
  },
};
const page = () => {
  return <Gardening />;
};

export default page;
