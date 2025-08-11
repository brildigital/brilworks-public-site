import React from "react";
import StaffAugmentation from "@/app/components/Services/StaffAugmentation";

export const metadata = {
  title: "Staff Augmentation | Brilworks",
  description:
    "Boost your team's capabilities with Brilworks' staff augmentation services. Access top-tier talent to drive innovation and accelerate your project success.",
  openGraph: {
    title: "Staff Augmentation",
    description:
      "Boost your team's capabilities with Brilworks' staff augmentation services. Access top-tier talent to drive innovation and accelerate your project success.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}staff-augmentation/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Staff Augmentation",
    description:
      "Boost your team's capabilities with Brilworks' staff augmentation services. Access top-tier talent to drive innovation and accelerate your project success.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}staff-augmentation/`,
  },
};

const page = () => {
  return <StaffAugmentation />;
};

export default page;
