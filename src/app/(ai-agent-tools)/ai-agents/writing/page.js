import Writing from "../../../components/AiAgents/Writing";
import React from "react";

export const metadata = {
  title: "Scribe – AI Writing Assistant & Content Generator",
  description:
    "Write blogs, scripts, essays, emails, and stories using advanced AI writing intelligence.",
  openGraph: {
    title: "Scribe – AI Writing Assistant & Content Generator",
    description:
      "Write blogs, scripts, essays, emails, and stories using advanced AI writing intelligence.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/writing/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/writing/`,
  },
};

const page = () => {
  return <Writing />;
};

export default page;
