import Psych from "../../../components/AiAgents/Psych";
import React from "react";

export const metadata = {
  title: "Psyche – AI Behavioral Psychology & Mind Analysis",
  description:
    "Explore behavior patterns, emotional models, motivations, and psychological insights with AI.",
  openGraph: {
    title: "Psyche – AI Behavioral Psychology & Mind Analysis",
    description:
      "Explore behavior patterns, emotional models, motivations, and psychological insights with AI.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/psych/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/psych/`,
  },
};

const page = () => {
  return <Psych />;
};

export default page;
