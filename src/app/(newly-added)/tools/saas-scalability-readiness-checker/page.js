import React from "react";
import SaasScalabilityReadinessChecker from "@/app/components/Tools/SaasScalabilityReadinessChecker";

export const metadata = {
  title:
    "SaaS Scalability Readiness Checker | Cloud Scalability & Performance Assessment Tool",
  description:
    "Run a complete SaaS scalability assessment with our automated readiness checker tool. Evaluate SaaS infrastructure, performance, load capacity, and cloud scalability benchmarks to prepare for growth.",
  openGraph: {
    title:
      "SaaS Scalability Readiness Checker | Cloud Scalability & Performance Assessment Tool",
    description:
      "Run a complete SaaS scalability assessment with our automated readiness checker tool. Evaluate SaaS infrastructure, performance, load capacity, and cloud scalability benchmarks to prepare for growth.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/saas-scalability-readiness-checker/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/saas-scalability-readiness-checker/`,
  },
};
const page = () => {
  return <SaasScalabilityReadinessChecker />;
};

export default page;
