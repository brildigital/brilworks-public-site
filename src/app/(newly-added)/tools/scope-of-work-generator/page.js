import React from "react";
import ScopeOfWorkGenerator from "@/app/components/Tools/ScopeOfWorkGenerator";

export const metadata = {
  title:
    "Scope of Work (SOW) Generator | Create Clear & Professional Project SOWs Instantly",
  description:
    "Easily create detailed and professional Scopes of Work for your projects. Define deliverables, timelines, milestones, and responsibilities in minutes with our AI-powered SOW Generator.",
  openGraph: {
    title:
      "Scope of Work (SOW) Generator | Create Clear & Professional Project SOWs Instantly",
    description:
      "Easily create detailed and professional Scopes of Work for your projects. Define deliverables, timelines, milestones, and responsibilities in minutes with our AI-powered SOW Generator.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/scope-of-work-generator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/scope-of-work-generator/`,
  },
};
const page = () => {
  return <ScopeOfWorkGenerator />;
};

export default page;
