import React from "react";
import DedicatedTeam from "../components/DedicatedTeam";

export const metadata = {
  title: "Dedicated Team",
  description:
    "Scale your development capabilities with Brilworks' dedicated software teams. Access top-tier talent committed to your long-term success and seamlessly integrated with your business goals.",
  openGraph: {
    title: "Dedicated Team",
    description:
      "Scale your development capabilities with Brilworks' dedicated software teams. Access top-tier talent committed to your long-term success and seamlessly integrated with your business goals.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-dedicated-software-development-team/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Dedicated Team",
    description:
      "Scale your development capabilities with Brilworks' dedicated software teams. Access top-tier talent committed to your long-term success and seamlessly integrated with your business goals.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-dedicated-software-development-team/`,
  },
};

const page = () => {
  return <DedicatedTeam />;
};

export default page;
