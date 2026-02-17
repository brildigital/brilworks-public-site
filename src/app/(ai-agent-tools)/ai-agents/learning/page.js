import Learning from "../../../components/AiAgents/Learning";
import React from "react";

export const metadata = {
  title: "Cortex – AI Learning Companion & Study Assistant",
  description:
    "Understand concepts, summarize topics, generate notes, and accelerate learning with AI.",
  openGraph: {
    title: "Cortex – AI Learning Companion & Study Assistant",
    description:
      "Understand concepts, summarize topics, generate notes, and accelerate learning with AI.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/learning/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/learning/`,
  },
};

const page = () => {
  return <Learning />;
};

export default page;
