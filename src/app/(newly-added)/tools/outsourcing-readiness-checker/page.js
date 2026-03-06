import React from "react";
import OutsourcingReadinessChecker from "@/app/components/Tools/OutsourcingReadinessChecker";

export const metadata = {
  title: "Outsourcing Readiness Checker | Assess Your Business in 2 Minutes",
  description:
    "Evaluate if your business is ready to outsource. Take our free Outsourcing Readiness Checker and get instant insights to scale smarter and reduce costs.",
  openGraph: {
    title: "Outsourcing Readiness Checker | Assess Your Business in 2 Minutes",
    description:
      "Evaluate if your business is ready to outsource. Take our free Outsourcing Readiness Checker and get instant insights to scale smarter and reduce costs.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/outsourcing-readiness-checker/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/outsourcing-readiness-checker/`,
  },
};

const page = () => {
  return <OutsourcingReadinessChecker />;
};

export default page;
