import React from "react";
import AppSecurityChecklistGenerator from "@/app/components/Tools/AppSecurityChecklistGenerator";

export const metadata = {
  title:
    "App Security Checklist Generator | Custom Security & Compliance Checklist for Applications",
  description:
    "Generate a customized application security checklist with our automated tool. Assess vulnerabilities, ensure compliance (GDPR, HIPAA, PCI DSS, ISO), and apply best practices for secure app development across web, mobile, and cloud environments.",
  openGraph: {
    title:
      "App Security Checklist Generator | Custom Security & Compliance Checklist for Applications",
    description:
      "Generate a customized application security checklist with our automated tool. Assess vulnerabilities, ensure compliance (GDPR, HIPAA, PCI DSS, ISO), and apply best practices for secure app development across web, mobile, and cloud environments.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/app-security-checklist-generator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/app-security-checklist-generator/`,
  },
};
const page = () => {
  return <AppSecurityChecklistGenerator />;
};

export default page;
