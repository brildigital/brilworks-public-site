import Scheduling from "../../../components/AiAgents/Scheduling";
import React from "react";

export const metadata = {
  title: "Chronos – AI Scheduler & Time Optimization Assistant",
  description:
    "AI-powered reminders, calendar automation, productivity tracking, and smart task prioritization.",
  openGraph: {
    title: "Chronos – AI Scheduler & Time Optimization Assistant",
    description:
      "AI-powered reminders, calendar automation, productivity tracking, and smart task prioritization.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/scheduling/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/scheduling/`,
  },
};

const page = () => {
  return <Scheduling />;
};

export default page;
