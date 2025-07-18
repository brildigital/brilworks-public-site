import React from "react";
import FreeUIHeroSection from "../components/FreeUI/FreeUIHeroSection";
import ExploreFreeDesign from "../components/FreeUI/ExploreFreeDesign";

export const metadata = {
  title: "Free UI/UX Designs for Teams",
  description:
    "Get 5 UI/UX screens tailored to your project at no cost. Explore premium design quality with zero risk or commitment. Fast, clean, and conversion-focused.",
  openGraph: {
    title: "Free UI/UX Designs for Teams",
    description:
      "Get 5 UI/UX screens tailored to your project at no cost. Explore premium design quality with zero risk or commitment. Fast, clean, and conversion-focused.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}free-ui/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/ui-ux-banner.webp`,
      },
    ],
    locale: "en-US",
    // type: "website",
  },
  twitter: {
    title: "Free UI/UX Designs for Teams",
    description:
      "Get 5 UI/UX screens tailored to your project at no cost. Explore premium design quality with zero risk or commitment. Fast, clean, and conversion-focused.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}free-ui/`,
  },
};
const page = () => {
  return (
    <>
      <FreeUIHeroSection />
      <ExploreFreeDesign />
    </>
  );
};

export default page;
