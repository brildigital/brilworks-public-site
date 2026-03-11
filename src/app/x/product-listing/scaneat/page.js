import React from "react";
import Scaneat from "@/app/components/Product/Scaneat";

export const metadata = {
  title:
    "Scaneat - Smart Food Scanner & Health Analyzer | Make Informed Food Choices | Brilworks",
  description:
    "Make informed food choices instantly! Scaneat helps you understand what's really in your food with instant health analysis, ingredient insights, and smarter recommendations. Scan barcodes, get health scores, and discover healthier alternatives.",
  openGraph: {
    title:
      "Scaneat - Smart Food Scanner & Health Analyzer | Make Informed Food Choices | Brilworks",
    description:
      "Make informed food choices instantly! Scaneat helps you understand what's really in your food with instant health analysis, ingredient insights, and smarter recommendations. Scan barcodes, get health scores, and discover healthier alternatives.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/scaneat/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/scaneat-1770726297202.webp`,
      },
    ],
  },

  twitter: {
    title:
      "Scaneat - Smart Food Scanner & Health Analyzer | Make Informed Food Choices | Brilworks",
    description:
      "Make informed food choices instantly! Scaneat helps you understand what's really in your food with instant health analysis, ingredient insights, and smarter recommendations. Scan barcodes, get health scores, and discover healthier alternatives.",
    card: "summary_large_image",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/scaneat-1770726297202.webp`,
      },
    ],
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/scaneat/`,
  },
};

const page = () => {
  return <Scaneat />;
};

export default page;
