import React from "react";
import EcommerceAnalyticsCase from "./EcommerceAnalyticsCase";

export const metadata = {
  title: "Reducing Reporting Delays From Days to Minutes for a Fast-Growing Retailer | Brilworks",
  description: "How Brilworks unified 12 disconnected data sources into a centralized analytics platform for an omnichannel retailer. 85% less reporting time, 5x faster dashboards.",
  openGraph: {
    title: "Reducing Reporting Delays From Days to Minutes | Brilworks",
    description: "How Brilworks unified 12 data sources into one analytics platform. 85% less reporting time, 5x faster dashboards.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}case-studies/ecommerce-analytics-platform/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: { card: "summary_large_image", site: "@_Brilworks" },
  alternates: { canonical: `${process.env.NEXT_PUBLIC_BASE_URL}case-studies/ecommerce-analytics-platform/` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Reducing Reporting Delays From Days to Minutes for a Fast-Growing Retailer",
  publisher: { "@type": "Organization", name: "Brilworks", url: "https://www.brilworks.com" },
};

const page = () => (
  <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <EcommerceAnalyticsCase />
  </>
);
export default page;
