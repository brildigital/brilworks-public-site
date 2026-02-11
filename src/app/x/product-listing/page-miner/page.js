import React from "react";
import PageMiner from "@/app/components/Product/PageMiner";

export const metadata = {
  title:
    "PageMiner - Browser Automation & Web Scraping | Automate Browser Workflows | Brilworks",
  description:
    "PageMiner is a Chrome extension for browser automation, web scraping, and workflow building. Record actions, build custom automation flows, and automate repetitive web tasks directly in your browser.",
  openGraph: {
    title:
      "PageMiner - Browser Automation & Web Scraping | Automate Browser Workflows | Brilworks",
    description:
      "PageMiner is a Chrome extension for browser automation, web scraping, and workflow building. Record actions, build custom automation flows, and automate repetitive web tasks directly in your browser.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/page-miner/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/pageminer-1770796389079.webp`,
      },
    ],
  },

  twitter: {
    title:
      "PageMiner - Browser Automation & Web Scraping | Automate Browser Workflows | Brilworks",
    description:
      "PageMiner is a Chrome extension for browser automation, web scraping, and workflow building. Record actions, build custom automation flows, and automate repetitive web tasks.",
    card: "summary_large_image",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/pageminer-1770796389079.webp`,
      },
    ],
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/page-miner/`,
  },
};

const page = () => {
  return <PageMiner />;
};

export default page;
