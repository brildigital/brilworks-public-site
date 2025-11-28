import Finance from "../../../components/AiAgents/Finance";
import React from "react";

export const metadata = {
  title: "Credits – AI Finance Planner & Budget Assistant",
  description:
    "Optimize spending, track expenses, generate budgets, and receive personalized financial insights.",
  openGraph: {
    title: "Credits – AI Finance Planner & Budget Assistant",
    description:
      "Optimize spending, track expenses, generate budgets, and receive personalized financial insights.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/finance/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/finance/`,
  },
};
const page = () => {
  return <Finance />;
};

export default page;
