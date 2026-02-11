import React from "react";
import LifePilot from "@/app/components/Product/LifePilot";

export const metadata = {
  title:
    "LifePilot AI - AI Personal Assistant | Your Intelligent Life Companion | Brilworks",
  description:
    "LifePilot AI is a personal assistant application providing AI-based guidance across multiple domains. Get intelligent assistance for productivity, fitness, wellness, home maintenance, and more with 5+ specialized AI assistants.",
  openGraph: {
    title:
      "LifePilot AI - AI Personal Assistant | Your Intelligent Life Companion | Brilworks",
    description:
      "LifePilot AI is a personal assistant application providing AI-based guidance across multiple domains. Get intelligent assistance for productivity, fitness, wellness, home maintenance, and more.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/life-pilot/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/lifepilot-1770726381502.webp`,
      },
    ],
  },

  twitter: {
    title:
      "LifePilot AI - AI Personal Assistant | Your Intelligent Life Companion | Brilworks",
    description:
      "LifePilot AI is a personal assistant application providing AI-based guidance across multiple domains. Get intelligent assistance for productivity, fitness, wellness, home maintenance, and more.",
    card: "summary_large_image",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/lifepilot-1770726381502.webp`,
      },
    ],
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/life-pilot/`,
  },
};

const page = () => {
  return <LifePilot />;
};

export default page;
