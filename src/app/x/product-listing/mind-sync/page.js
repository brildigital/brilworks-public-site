import MindSync from "@/app/components/Product/MindSync";
import React from "react";

export const metadata = {
  title: "Connect Hearts, Sync Minds | Intelligent Tools for Human Connection",
  description:
    "Blend technology with empathy. Our solution helps individuals and teams stay emotionally aligned, think together, and build stronger relationships.",
  openGraph: {
    title:
      "Connect Hearts, Sync Minds | Intelligent Tools for Human Connection",
    description:
      "Blend technology with empathy. Our solution helps individuals and teams stay emotionally aligned, think together, and build stronger relationships.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}product/mind-sync/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "https://d11qzsb0ksp6iz.cloudfront.net/assets/mindsync-mockup-1759756960049.webp",
      },
    ],
  },

  twitter: {
    title:
      "Connect Hearts, Sync Minds | Intelligent Tools for Human Connection",
    description:
      "Blend technology with empathy. Our solution helps individuals and teams stay emotionally aligned, think together, and build stronger relationships.",
    card: "summary_large_image",
    images: [
      {
        url: "https://d11qzsb0ksp6iz.cloudfront.net/assets/mindsync-mockup-1759756960049.webp",
      },
    ],
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}product/mind-sync/`,
  },
};

const page = () => {
  return <MindSync />;
};

export default page;
