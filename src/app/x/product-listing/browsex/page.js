import React from "react";
import BrowseX from "@/app/components/Product/BrowseX";

export const metadata = {
  title:
    "BrowseX - AI Web Automation | Automate Any Web Task with AI-Powered Intelligence | Brilworks",
  description:
    "BrowseX uses advanced AI to understand websites, extract data, fill forms, and complete complex workflows—all through simple natural language commands. Transform your browser into an intelligent assistant.",
  openGraph: {
    title:
      "BrowseX - AI Web Automation | Automate Any Web Task with AI-Powered Intelligence | Brilworks",
    description:
      "BrowseX uses advanced AI to understand websites, extract data, fill forms, and complete complex workflows—all through simple natural language commands. No coding required.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/browsex/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/browsex-1770795649689.webp`,
      },
    ],
  },

  twitter: {
    title:
      "BrowseX - AI Web Automation | Automate Any Web Task with AI-Powered Intelligence | Brilworks",
    description:
      "BrowseX uses advanced AI to understand websites, extract data, fill forms, and complete complex workflows—all through simple natural language commands.",
    card: "summary_large_image",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/browsex-1770795649689.webp`,
      },
    ],
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/browsex/`,
  },
};

const page = () => {
  return <BrowseX />;
};

export default page;
