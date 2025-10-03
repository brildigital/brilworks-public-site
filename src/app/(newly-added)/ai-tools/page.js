import React from "react";
import AITools from "@/app/components/AITools/AITools";

export const metadata = {
  title: "Discover the Top AI Tools to Boost Productivity & Innovation",
  description:
    "Find the best AI-powered tools for automation, content creation, marketing, and business growth. Compare and choose the perfect AI tool to save time and scale smarter.",
  openGraph: {
    title: "Discover the Top AI Tools to Boost Productivity & Innovation",
    description:
      "Find the best AI-powered tools for automation, content creation, marketing, and business growth. Compare and choose the perfect AI tool to save time and scale smarter.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-tools/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ai-tools/`,
  },
};
const page = () => {
  return <AITools />;
};

export default page;
