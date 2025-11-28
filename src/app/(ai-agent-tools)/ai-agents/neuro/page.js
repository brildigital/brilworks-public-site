import Neuro from "../../../components/AiAgents/Neuro";
import React from "react";

export const metadata = {
  title: "Neuro – AI Neuroscience & Brain Optimization Assistant",
  description:
    "Understand cognitive patterns, analyze neural behavior, and optimize mental performance.",
  openGraph: {
    title: "Neuro – AI Neuroscience & Brain Optimization Assistant",
    description:
      "Understand cognitive patterns, analyze neural behavior, and optimize mental performance.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/neuro/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/neuro/`,
  },
};

const page = () => {
  return <Neuro />;
};

export default page;
