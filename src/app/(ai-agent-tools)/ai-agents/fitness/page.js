import Fitness from "../../../components/AiAgents/Fitness";
import React from "react";

export const metadata = {
  title: "Bio-Coach – AI Fitness Coach & Workout Planner",
  description:
    "Personalized workout plans, body assessments, and recovery monitoring powered by intelligent fitness analytics.",
  openGraph: {
    title: "Bio-Coach – AI Fitness Coach & Workout Planner",
    description:
      "Personalized workout plans, body assessments, and recovery monitoring powered by intelligent fitness analytics.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/fitness/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/fitness/`,
  },
};

const page = () => {
  return <Fitness />;
};

export default page;
