import React from "react";
import StaffAugmentation from "../components/StaffAugmentation";

export const metadata = {
  title: "Staff Augmentation",
  description:
    "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
  openGraph: {
    title: "Staff Augmentation",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}staff-augmentation/`,
    siteName: "AWS Consulting Partner | Gen AI | Product Engineering",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Staff Augmentation",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}staff-augmentation/`,
  },
};

const page = () => {
  return (
    <div className="!bg-colorWhite">
      <StaffAugmentation />
    </div>
  );
};

export default page;
