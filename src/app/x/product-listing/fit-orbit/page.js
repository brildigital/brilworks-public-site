import React from "react";
import FitOrbit from "@/app/components/Product/FitOrbit";

export const metadata = {
  title:
    "FitOrbit - Ultimate Fitness Companion | Workout Tracker & Routine Builder | Brilworks",
  description:
    "FitOrbit is your all-in-one fitness app designed to help you build custom workout routines, track your progress, and achieve your fitness goals. With an extensive exercise library, personal best tracking, 1RM calculator, and detailed progress analytics, FitOrbit empowers both beginners and experienced lifters to stay organized and motivated.",
  openGraph: {
    title:
      "FitOrbit - Ultimate Fitness Companion | Workout Tracker & Routine Builder | Brilworks",
    description:
      "FitOrbit is your all-in-one fitness app designed to help you build custom workout routines, track your progress, and achieve your fitness goals. With an extensive exercise library, personal best tracking, 1RM calculator, and detailed progress analytics, FitOrbit empowers both beginners and experienced lifters to stay organized and motivated.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/fit-orbit/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "https://d11qzsb0ksp6iz.cloudfront.net/assets/fitorbit-banner.webp",
      },
    ],
  },

  twitter: {
    title:
      "FitOrbit - Ultimate Fitness Companion | Workout Tracker & Routine Builder | Brilworks",
    description:
      "FitOrbit is your all-in-one fitness app designed to help you build custom workout routines, track your progress, and achieve your fitness goals. With an extensive exercise library, personal best tracking, 1RM calculator, and detailed progress analytics, FitOrbit empowers both beginners and experienced lifters to stay organized and motivated.",
    card: "summary_large_image",
    images: [
      {
        url: "https://d11qzsb0ksp6iz.cloudfront.net/assets/fitorbit-banner.webp",
      },
    ],
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/fit-orbit/`,
  },
};

const page = () => {
  return <FitOrbit />;
};

export default page;
