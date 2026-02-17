import React from "react";
import AiAgentHome from "../../components/AiAgents/AiAgentHome";

export const metadata = {
  title: "AI Agents | Brilworks",
  description:
    "Access 30+ specialized AI agents powered by Neural Gemini AI for fitness, finance, travel, career, wellness, and more. One interface for all life operations.",
  openGraph: {
    title: "AI Agents | Brilworks",
    description:
      "Access 30+ specialized AI agents powered by Neural Gemini AI for fitness, finance, travel, career, wellness, and more. One interface for all life operations.",
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
