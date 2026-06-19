import React from "react";
import CustomerDataPlatformCase from "./CustomerDataPlatformCase";

export const metadata = {
  title:
    "Unifying Customer Data Across 11 Systems Into a Single Source of Truth | Brilworks",
  description:
    "How Brilworks unified customer data from 11 disconnected systems into a single platform for a growing SaaS company. 95% less manual reconciliation, 80% faster insights.",
  openGraph: {
    title:
      "Unifying Customer Data Across 11 Systems | Brilworks",
    description:
      "11 systems unified into one platform. 95% less manual reconciliation, 80% faster customer insights.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}case-studies/customer-data-platform/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: { card: "summary_large_image", site: "@_Brilworks" },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}case-studies/customer-data-platform/`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Unifying Customer Data Across 11 Systems Into a Single Source of Truth",
  publisher: {
    "@type": "Organization",
    name: "Brilworks",
    url: "https://www.brilworks.com",
  },
};

const page = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <CustomerDataPlatformCase />
  </>
);

export default page;
