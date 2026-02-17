import Wealth from "../../../components/AiAgents/Wealth";
import React from "react";

export const metadata = {
  title: "Wealth – AI Investment Advisor & Wealth Planner",
  description:
    "Analyze investments, track portfolios, and receive long-term wealth planning advice powered by AI.",
  openGraph: {
    title: "Wealth – AI Investment Advisor & Wealth Planner",
    description:
      "Analyze investments, track portfolios, and receive long-term wealth planning advice powered by AI.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/wealth/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/wealth/`,
  },
};

const page = () => {
  return <Wealth />;
};

export default page;
