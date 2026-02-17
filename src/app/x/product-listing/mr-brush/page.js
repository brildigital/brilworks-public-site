import React from "react";
import MrBrush from "@/app/components/Product/MrBrush";

export const metadata = {
  title:
    "Mr. Brush - AI-Powered Image Generation | Unleash Your Creativity | Brilworks",
  description:
    "Transform your imagination into stunning visual art using advanced AI. Mr. Brush offers text-to-image and image-to-image generation with 8+ artistic styles. Create unique, high-quality images with just a few taps. Perfect for content creators, artists, and anyone ready to explore creative possibilities.",
  openGraph: {
    title:
      "Mr. Brush - AI-Powered Image Generation | Unleash Your Creativity | Brilworks",
    description:
      "Transform your imagination into stunning visual art using advanced AI. Mr. Brush offers text-to-image and image-to-image generation with 8+ artistic styles. Create unique, high-quality images with just a few taps.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/mr-brush/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/mrbrush-1770726392663.webp`,
      },
    ],
  },

  twitter: {
    title:
      "Mr. Brush - AI-Powered Image Generation | Unleash Your Creativity | Brilworks",
    description:
      "Transform your imagination into stunning visual art using advanced AI. Mr. Brush offers text-to-image and image-to-image generation with 8+ artistic styles. Create unique, high-quality images with just a few taps.",
    card: "summary_large_image",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/mrbrush-1770726392663.webp`,
      },
    ],
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/mr-brush/`,
  },
};

const page = () => {
  return <MrBrush />;
};

export default page;
