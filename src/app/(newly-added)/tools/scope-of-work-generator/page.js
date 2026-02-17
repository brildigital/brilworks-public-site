import React from "react";
import ScopeOfWorkGenerator from "@/app/components/Tools/ScopeOfWorkGenerator";

export const metadata = {
  title:
    "AI SOW Generator | Create Professional Scope of Work Documents in Minutes",
  description:
    "Generate detailed Scope of Work documents with AI precision. Save time, reduce errors, and maintain consistency with real-time performance benchmarking, automated recommendations, and export-ready professional templates.",
  openGraph: {
    title:
      "AI SOW Generator | Create Professional Scope of Work Documents in Minutes",
    description:
      "Generate detailed Scope of Work documents with AI precision. Save time, reduce errors, and maintain consistency with real-time performance benchmarking, automated recommendations, and export-ready professional templates.",
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
