import Tech from "../../../components/AiAgents/Tech";
import React from "react";

export const metadata = {
  title: "Sys-Admin – AI Tech Support & Troubleshooting Assistant",
  description:
    "Solve tech issues, debug systems, get code help, and fix hardware/software problems with AI.",
  openGraph: {
    title: "Sys-Admin – AI Tech Support & Troubleshooting Assistant",
    description:
      "Solve tech issues, debug systems, get code help, and fix hardware/software problems with AI.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/tech/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/tech/`,
  },
};

const page = () => {
  return <Tech />;
};

export default page;
