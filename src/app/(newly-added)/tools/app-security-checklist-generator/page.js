import React from "react";
import AppSecurityChecklistGenerator from "@/app/components/Tools/AppSecurityChecklistGenerator";

export const metadata = {
  title: "App Security Checklist Generator | Ensure Your App is Secure",
  description:
    "Generate a customized app security checklist to identify vulnerabilities, strengthen data protection, and ensure compliance with best security practices before launch.",
  openGraph: {
    title: "App Security Checklist Generator | Ensure Your App is Secure",
    description:
      "Generate a customized app security checklist to identify vulnerabilities, strengthen data protection, and ensure compliance with best security practices before launch.",

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
