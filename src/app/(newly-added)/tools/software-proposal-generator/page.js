import React from "react";
import SoftwareProposalGenerator from "@/app/components/Tools/SoftwareProposalGenerator";

export const metadata = {
  title:
    "Software Proposal Generator | Create Winning Software Proposals in Minutes",
  description:
    "Generate professional, client-ready software proposals instantly. Define project scope, deliverables, budget, and timeline with our AI-powered Software Proposal Generator.",
  openGraph: {
    title:
      "Software Proposal Generator | Create Winning Software Proposals in Minutes",
    description:
      "Generate professional, client-ready software proposals instantly. Define project scope, deliverables, budget, and timeline with our AI-powered Software Proposal Generator.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/software-proposal-generator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/software-proposal-generator/`,
  },
};
const page = () => {
  return <SoftwareProposalGenerator />;
};

export default page;
