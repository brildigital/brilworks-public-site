import DIY from "../../../components/AiAgents/DIY";
import React from "react";

export const metadata = {
  title: "Repair Bot – DIY Home Repair & Fixes Assistant",
  description:
    "Get AI-powered guidance for home repairs, troubleshooting, tools, and step-by-step DIY solutions.",
  openGraph: {
    title: "Repair Bot – DIY Home Repair & Fixes Assistant",
    description:
      "Get AI-powered guidance for home repairs, troubleshooting, tools, and step-by-step DIY solutions.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/diy/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/diy/`,
  },
};
const page = () => {
  return <DIY />;
};

export default page;
