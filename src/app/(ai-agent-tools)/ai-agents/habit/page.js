import Habit from "../../../components/AiAgents/Habit";
import React from "react";

export const metadata = {
  title: "Habit Loop – AI Habit Builder & Goal Tracker",
  description:
    "Build habits with AI-driven reminders, behavior tracking, and motivation systems personalized for your goals.",
  openGraph: {
    title: "Habit Loop – AI Habit Builder & Goal Tracker",
    description:
      "Build habits with AI-driven reminders, behavior tracking, and motivation systems personalized for your goals.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/habit/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/habit/`,
  },
};

const page = () => {
  return <Habit />;
};

export default page;
