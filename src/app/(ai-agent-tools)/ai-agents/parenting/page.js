import Parenting from "../../../components/AiAgents/Parenting";
import React from "react";

export const metadata = {
  title: "Guardian – AI Parenting Coach & Child Development Guide",
  description:
    "Receive guidance on child behavior, learning stages, habits, routines, and parenting challenges.",
  openGraph: {
    title: "Guardian – AI Parenting Coach & Child Development Guide",
    description:
      "Receive guidance on child behavior, learning stages, habits, routines, and parenting challenges.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/parenting/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/parenting/`,
  },
};

const page = () => {
  return <Parenting />;
};

export default page;
