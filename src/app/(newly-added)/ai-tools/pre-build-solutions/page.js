import React from "react";
import PreBuildSolutions from "@/app/components/AITools/PreBuildSolutions";

export const metadata = {
  title: "Pre-Build AI & Automation Solutions",
  description:
    "Explore ready-to-use AI and automation solutions designed to save time and accelerate growth. Deploy faster with proven pre-build tools for businesses.",
  openGraph: {
    title: "Pre-Build AI & Automation Solutions",
    description:
      "Explore ready-to-use AI and automation solutions designed to save time and accelerate growth. Deploy faster with proven pre-build tools for businesses.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-tools/pre-build-solutions/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-tools/pre-build-solutions/`,
  },
};
const page = () => {
  return <PreBuildSolutions />;
};

export default page;
