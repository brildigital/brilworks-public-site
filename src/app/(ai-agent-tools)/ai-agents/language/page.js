import Language from "../../../components/AiAgents/Language";
import React from "react";

export const metadata = {
  title: "Babel – AI Language Tutor & Translator",
  description:
    "Learn languages, translate text, practice conversations, and master grammar using AI.",
  openGraph: {
    title: "Babel – AI Language Tutor & Translator",
    description:
      "Learn languages, translate text, practice conversations, and master grammar using AI.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/language/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/language/`,
  },
};

const page = () => {
  return <Language />;
};

export default page;
