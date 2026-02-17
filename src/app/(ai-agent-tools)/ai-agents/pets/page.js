import Pets from "../../../components/AiAgents/Pets";
import React from "react";

export const metadata = {
  title: "Fauna – AI Pet Care & Training Assistant",
  description:
    "Get tips for pet training, diet, behavior, medical concerns, and daily care routines.",
  openGraph: {
    title: "Fauna – AI Pet Care & Training Assistant",
    description:
      "Get tips for pet training, diet, behavior, medical concerns, and daily care routines.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/pets/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/pets/`,
  },
};

const page = () => {
  return <Pets />;
};

export default page;
