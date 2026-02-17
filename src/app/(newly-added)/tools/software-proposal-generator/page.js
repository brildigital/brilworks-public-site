import React from "react";
import SoftwareProposalGenerator from "@/app/components/Tools/SoftwareProposalGenerator";

export const metadata = {
  title: "AI Software Proposal Generator | Create Winning Proposals in Minutes",
  description:
    "Generate professional software project proposals instantly with our AI-powered proposal builder. Automate your proposal creation, customize with project scope keywords, and download client-ready SOW documents in multiple formats.",
  openGraph: {
    title:
      "AI Software Proposal Generator | Create Winning Proposals in Minutes",
    description:
      "Generate professional software project proposals instantly with our AI-powered proposal builder. Automate your proposal creation, customize with project scope keywords, and download client-ready SOW documents in multiple formats.",
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
