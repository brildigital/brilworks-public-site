import Startup from "../../../components/AiAgents/Startup";
import React from "react";

export const metadata = {
  title: "Founder – AI Startup Mentor & Business Strategy Engine",
  description:
    "Get startup advice, validate ideas, create business plans, and scale your venture using AI.",
  openGraph: {
    title: "Founder – AI Startup Mentor & Business Strategy Engine",
    description:
      "Get startup advice, validate ideas, create business plans, and scale your venture using AI.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/startup/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/startup/`,
  },
};

const page = () => {
  return <Startup />;
};

export default page;
