import React from "react";
import DedicatedTeam from "../components/DedicatedTeam";

export const metadata = {
  title: "Dedicated Team",
  description:
    "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
  openGraph: {
    title: "Dedicated Team",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-dedicated-software-development-team/`,
    siteName: "AWS Consulting Partner | Gen AI | Product Engineering",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Dedicated Team",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-dedicated-software-development-team/`,
  },
};

const page = () => {
  return (
    <div className="!bg-colorWhite">
      <DedicatedTeam />
    </div>
  );
};

export default page;
