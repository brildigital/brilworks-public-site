import React from "react";
import SaasScalabilityReadinessChecker from "@/app/components/Tools/SaasScalabilityReadinessChecker";

export const metadata = {
  title:
    "SaaS Scalability Readiness Checker | Test Your App’s Growth Potential",
  description:
    "Evaluate your SaaS platform’s ability to scale efficiently. Identify performance bottlenecks, infrastructure gaps, and growth readiness with our Scalability Readiness Checker.",
  openGraph: {
    title:
      "SaaS Scalability Readiness Checker | Test Your App’s Growth Potential",
    description:
      "Evaluate your SaaS platform’s ability to scale efficiently. Identify performance bottlenecks, infrastructure gaps, and growth readiness with our Scalability Readiness Checker.",

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
