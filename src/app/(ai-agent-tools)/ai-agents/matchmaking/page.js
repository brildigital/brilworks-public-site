import Matchmaking from "../../../components/AiAgents/Matchmaking";
import React from "react";

export const metadata = {
  title: "Union Sync – AI-Based Compatibility & Matchmaking",
  description:
    "Analyze relationship compatibility through astro-science, personality mapping, and AI-driven match scores.",
  openGraph: {
    title: "Union Sync – AI-Based Compatibility & Matchmaking",
    description:
      "Analyze relationship compatibility through astro-science, personality mapping, and AI-driven match scores.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/matchmaking/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/matchmaking/`,
  },
};

const page = () => {
  return <Matchmaking />;
};

export default page;
