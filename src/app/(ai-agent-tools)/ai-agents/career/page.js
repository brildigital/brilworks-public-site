import React from "react";
import Career from "../../../components/AiAgents/Career";

export const metadata = {
  title: "Guild – AI Career Coach & Job Search Assistant",
  description:
    "Plan your career path, discover roles, optimize resumes, and receive AI-driven job guidance.",
  openGraph: {
    title: "Guild – AI Career Coach & Job Search Assistant",
    description:
      "Plan your career path, discover roles, optimize resumes, and receive AI-driven job guidance.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/career/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/career/`,
  },
};
const page = () => {
  return <Career />;
};

export default page;
