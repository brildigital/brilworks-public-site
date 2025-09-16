import Tools from "@/app/components/Tools/Tools";
import React from "react";

export const metadata = {
  title: "Free Business Tools & Calculators | Simplify Work & Boost Decisions",
  description:
    "Discover free calculators and business tools to save time and reduce complexity. From ROI and cost estimators to productivity aids, get instant results and make confident decisions.",
  openGraph: {
    title:
      "Free Business Tools & Calculators | Simplify Work & Boost Decisions",
    description:
      "Discover free calculators and business tools to save time and reduce complexity. From ROI and cost estimators to productivity aids, get instant results and make confident decisions.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/`,
  },
};
const page = () => {
  return <Tools />;
};

export default page;
