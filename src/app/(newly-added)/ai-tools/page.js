import React from "react";
import AITools from "@/app/components/AITools/AITools";

export const metadata = {
  title: "AI Solutions for Business — Chatbots, Automation & MVPs | Brilworks",
  description:
    "Brilworks builds AI-powered chatbots, workflow automation, and MVPs for businesses. AWS Partner. Deploy in 48 hours. Book a free consultation.",
  openGraph: {
    title:
      "AI Solutions for Business — Chatbots, Automation & MVPs | Brilworks",
    description:
      "Brilworks builds AI-powered chatbots, workflow automation, and MVPs for businesses. AWS Partner. Deploy in 48 hours. Book a free consultation.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-tools/`,
    siteName: "Brilworks — Software Development & AI Solutions",
    locale: "en-US",
    type: "website",
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
