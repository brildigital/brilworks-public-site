import Vision from "../../../components/AiAgents/Vision";
import React from "react";

export const metadata = {
  title: "Vision – AI Image Recognition & Visual Analysis",
  description:
    "Analyze images, detect objects, interpret scenes, and process visual data with advanced AI.",
  openGraph: {
    title: "Vision – AI Image Recognition & Visual Analysis",
    description:
      "Analyze images, detect objects, interpret scenes, and process visual data with advanced AI.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/vision/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/vision/`,
  },
};

const page = () => {
  return <Vision />;
};

export default page;
