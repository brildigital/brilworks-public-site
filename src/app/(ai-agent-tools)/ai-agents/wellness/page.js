import Wellness from "../../../components/AiAgents/Wellness";
import React from "react";

export const metadata = {
  title: "Mind Link – AI Mental Wellness & Stress Relief",
  description:
    "Receive personalized mental health guidance, emotional tracking, and stress optimization powered by AI.",
  openGraph: {
    title: "Mind Link – AI Mental Wellness & Stress Relief",
    description:
      "Receive personalized mental health guidance, emotional tracking, and stress optimization powered by AI.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/wellness/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/wellness/`,
  },
};

const page = () => {
  return <Wellness />;
};

export default page;
