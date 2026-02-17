import React from "react";
import VectorTrace from "@/app/components/Product/VectorTrace";

export const metadata = {
  title:
    "VectorTrace - Complete Business Management & Operations Platform | Transform Your Business | Brilworks",
  description:
    "VectorTrace is the all-in-one management solution for manufacturers, service providers, vendors, and customers. Streamline workflow from order placement to final delivery with real-time tracking and comprehensive features.",
  openGraph: {
    title:
      "VectorTrace - Complete Business Management & Operations Platform | Transform Your Business | Brilworks",
    description:
      "VectorTrace is the all-in-one management solution for manufacturers, service providers, vendors, and customers. Streamline workflow from order placement to final delivery with real-time tracking.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/vector-trace/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/vectortrace-1770726355449.webp`,
      },
    ],
  },

  twitter: {
    title:
      "VectorTrace - Complete Business Management & Operations Platform | Transform Your Business | Brilworks",
    description:
      "VectorTrace is the all-in-one management solution for manufacturers, service providers, vendors, and customers. Streamline workflow from order placement to final delivery with real-time tracking.",
    card: "summary_large_image",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/vectortrace-1770726355449.webp`,
      },
    ],
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/vector-trace/`,
  },
};

const page = () => {
  return <VectorTrace />;
};

export default page;
