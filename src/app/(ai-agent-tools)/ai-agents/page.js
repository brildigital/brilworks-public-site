import React from "react";
import AiAgentHome from "../../components/AiAgents/AiAgentHome";

export const metadata = {
  title: "30+ AI Agents for Business | Custom AI Agent Development | Brilworks",
  description:
    "Explore 30+ live AI agents built by Brilworks — fitness, finance, career, travel & more. See what's possible, then let us build custom AI agents for your product. Book a free consultation.",
  openGraph: {
    title: "30+ AI Agents for Business | Brilworks",
    description:
      "Explore live AI agent demos — fitness, finance, career, travel & more. Built by Brilworks.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/`,
  },
};
const page = () => {
  return <AiAgentHome />;
};

export default page;
