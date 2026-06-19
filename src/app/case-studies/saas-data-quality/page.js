import React from "react";
import SaasDataQualityCase from "./SaasDataQualityCase";

export const metadata = {
  title: "Reducing Bad Data Incidents by 90% for a Growing SaaS Company | Brilworks",
  description: "How Brilworks built a data quality and observability layer for a B2B SaaS platform. 90% fewer bad data incidents, issues detected in under 15 minutes.",
  openGraph: {
    title: "Reducing Bad Data Incidents by 90% | Brilworks",
    description: "90% fewer bad data incidents, issues detected in under 15 minutes.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}case-studies/saas-data-quality/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: { card: "summary_large_image", site: "@_Brilworks" },
  alternates: { canonical: `${process.env.NEXT_PUBLIC_BASE_URL}case-studies/saas-data-quality/` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Reducing Bad Data Incidents by 90% for a Growing SaaS Company",
  publisher: { "@type": "Organization", name: "Brilworks", url: "https://www.brilworks.com" },
};

const page = () => (
  <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <SaasDataQualityCase />
  </>
);
export default page;
