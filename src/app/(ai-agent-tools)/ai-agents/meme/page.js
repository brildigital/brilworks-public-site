import Meme from "../../../components/AiAgents/Meme";
import React from "react";

export const metadata = {
  title: "Meme Gen – AI Meme Creator & Trend Generator",
  description:
    "Create memes instantly with AI-powered humor, trending formats, and auto-caption generation.",
  openGraph: {
    title: "Meme Gen – AI Meme Creator & Trend Generator",
    description:
      "Create memes instantly with AI-powered humor, trending formats, and auto-caption generation.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/meme/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/meme/`,
  },
};

const page = () => {
  return <Meme />;
};

export default page;
