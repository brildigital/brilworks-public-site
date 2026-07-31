import React from "react";
import DataGovernanceConsultingService from "@/app/components/Services/DataGovernanceConsultingService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-07-27";

export const metadata = {
  title: "Data Governance Consulting Services | Brilworks",
  description:
    "Data governance consulting that gets implemented and enforced, not a policy PDF that rots. Framework, quality, catalog, and compliance, built into your stack.",
  keywords:
    "data governance consulting, data quality management, data catalog, metadata management, data compliance GDPR HIPAA SOC 2",
  openGraph: {
    title: "Data Governance Consulting Services | Brilworks",
    type: "website",
    description:
      "Data governance consulting that gets implemented and enforced, not a policy PDF that rots. Framework, quality, catalog, and compliance, built into your stack.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}data-governance-consulting/`,
    siteName: "Brilworks",
    locale: "en-US",
  },
  twitter: {
    title: "Data Governance Consulting Services | Brilworks",
    description:
      "Data governance consulting that gets implemented and enforced, not a policy PDF that rots. Framework, quality, catalog, and compliance, built into your stack.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}data-governance-consulting/`,
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
            title: "Data Governance Consulting Services | Brilworks",
            description:
              "Data governance consulting that gets implemented and enforced, not a policy PDF that rots. Framework, quality, catalog, and compliance, built into your stack.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}data-governance-consulting/`,
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
            serviceType: "Data Governance Consulting",
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
                name: "What is data governance consulting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Help defining and implementing how your company manages, secures, and trusts its data. Done properly it is not a policy document. It is a framework wired into your stack: ownership, quality rules, a catalog, and access controls that run automatically.",
                },
              },
              {
                "@type": "Question",
                name: "Why do most data governance programs fail?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "They fail at enforcement, not design. A consultant writes a beautiful policy, leaves, and nothing changes because nothing was built into the stack to enforce it. We fix that by implementing the rules where your data lives, so governance runs without anyone remembering to run it.",
                },
              },
              {
                "@type": "Question",
                name: "Do you help with GDPR, HIPAA, or SOC 2 compliance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We build least-privilege access, masking, and audit trails into the platform and map them to the regulation you answer to. We are not a law firm, so we implement the controls; your compliance team signs off on the policy.",
                },
              },
            ],
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <DataGovernanceConsultingService />
    </>
  );
};

export default page;
