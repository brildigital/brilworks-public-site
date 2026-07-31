import React from "react";
import BusinessIntelligenceDevelopmentService from "@/app/components/Services/BusinessIntelligenceDevelopmentService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-07-27";

export const metadata = {
  title: "Business Intelligence Development Services | Brilworks",
  description:
    "BI development that gets used, not another dashboard graveyard. Dashboards, self-service analytics, and executive reporting on data you can trust.",
  keywords:
    "business intelligence development, BI dashboard development, self-service BI, executive reporting, semantic layer, Power BI Tableau Looker",
  openGraph: {
    title: "Business Intelligence Development Services | Brilworks",
    type: "website",
    description:
      "BI development that gets used, not another dashboard graveyard. Dashboards, self-service analytics, and executive reporting on data you can trust.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}business-intelligence-development/`,
    siteName: "Brilworks",
    locale: "en-US",
  },
  twitter: {
    title: "Business Intelligence Development Services | Brilworks",
    description:
      "BI development that gets used, not another dashboard graveyard. Dashboards, self-service analytics, and executive reporting on data you can trust.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}business-intelligence-development/`,
  },
};

const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateWebPageSchema({
            title: "Business Intelligence Development Services | Brilworks",
            description:
              "BI development that gets used, not another dashboard graveyard. Dashboards, self-service analytics, and executive reporting on data you can trust.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}business-intelligence-development/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Business Intelligence Development",
            provider: {
              "@type": "Organization",
              name: "Brilworks",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "503, Fortune Business Hub, Science City Road, Sola",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                postalCode: "380060",
                addressCountry: "IN",
              },
            },
            areaServed: "Worldwide",
          }),
        }}
      />
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is business intelligence development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Building the dashboards, reports, and self-service analytics your company uses to make decisions, on top of a data layer where the numbers are trustworthy and consistent. The dashboards are the visible part. The modeling underneath is what makes them agree.",
                },
              },
              {
                "@type": "Question",
                name: "Why do so many dashboards go unused?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Usually a trust problem, not a tool problem. If two dashboards show two revenue numbers, people stop trusting both and go back to their own spreadsheet. We fix it with a semantic layer that defines each metric once, so the numbers agree and people come back.",
                },
              },
              {
                "@type": "Question",
                name: "What is a semantic layer and do I need one?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is the layer that defines what every metric means, sitting between your warehouse and your dashboards. You need it the moment two reports disagree on the same number. It is the single biggest fix for the \"whose figure is right\" problem.",
                },
              },
            ],
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <BusinessIntelligenceDevelopmentService />
    </>
  );
};

export default page;
