import React from "react";
import BuildvsBuySoftwareCalculator from "@/app/components/Tools/BuildvsBuySoftwareCalculator";

export const metadata = {
  title: "Build vs Buy Calculator - Software Cost Analysis",
  description:
    "Make smarter tech decisions. Estimate development, licensing, and maintenance costs with our build vs buy calculator.",
  openGraph: {
    title: "Build vs Buy Calculator - Software Cost Analysis",
    description:
      "Make smarter tech decisions. Estimate development, licensing, and maintenance costs with our build vs buy calculator.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/build-vs-buy-software-calculator/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/build-vs-buy-software-calculator/`,
  },
};
const page = () => {
  return <BuildvsBuySoftwareCalculator />;
};

export default page;
