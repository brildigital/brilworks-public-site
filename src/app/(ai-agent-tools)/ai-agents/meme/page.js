import Meme from "../../../components/AiAgents/Meme";
import React from "react";

const LAST_UPDATED = "2026-05-06";
const PAGE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}ai-agents/meme/`;
const PAGE_TITLE = "Meme Gen — AI Meme Creator & Trend Generator";
const PAGE_DESCRIPTION =
  "Create memes instantly with AI-powered humor, trending formats, and auto-caption generation.";
const OG_IMAGE_URL =
  "https://www.brilworks.com/images/ai-agents-meme-og-1200x630.png";
const OG_IMAGE_ALT =
  "Brilworks AI Meme Generator — create memes instantly with AI";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: OG_IMAGE_ALT,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    card: "summary_large_image",
    site: "@_Brilworks",
    images: [
      {
        url: OG_IMAGE_URL,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: PAGE_TITLE,
  url: "https://www.brilworks.com/ai-agents/meme/",
  description: PAGE_DESCRIPTION,
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  publisher: {
    "@type": "Organization",
    name: "Brilworks",
    url: "https://www.brilworks.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://www.brilworks.com/images/logo-black.svg",
    },
  },
  image: {
    "@type": "ImageObject",
    url: OG_IMAGE_URL,
    width: 1200,
    height: 630,
  },
  dateModified: LAST_UPDATED,
  inLanguage: "en-US",
};

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationSchema),
        }}
      />
      <Meme />
    </>
  );
};

export default page;
