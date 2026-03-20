import React from "react";
import Elara from "@/app/components/Product/Elara";

export const metadata = {
  title:
    "Elara - Pregnancy Tracker & Prenatal Yoga Companion | Motherhood Support | Brilworks",
  description:
    "Elara is your personalized maternal wellness companion. Expert-curated prenatal yoga, pregnancy tracking, meditation, and wellness journaling. Free, privacy-first, and designed for every stage of motherhood.",
  openGraph: {
    title:
      "Elara - Pregnancy Tracker & Prenatal Yoga Companion | Motherhood Support | Brilworks",
    description:
      "Elara is your personalized maternal wellness companion. Expert-curated prenatal yoga, pregnancy tracking, meditation, and wellness journaling. Free, privacy-first, and designed for every stage of motherhood.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/elara-pregnancy-tracker/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}assets/Gemini_Generated_Image_c54aa5c54aa5c54a_1-1773999215829.webp`,
      },
    ],
  },

  twitter: {
    title:
      "Elara - Pregnancy Tracker & Prenatal Yoga Companion | Motherhood Support | Brilworks",
    description:
      "Elara is your personalized maternal wellness companion. Expert-curated prenatal yoga, pregnancy tracking, meditation, and wellness journaling. Free, privacy-first, and designed for every stage of motherhood.",
    card: "summary_large_image",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}assets/Gemini_Generated_Image_c54aa5c54aa5c54a_1-1773999215829.webp`,
      },
    ],
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/elara-pregnancy-tracker/`,
  },
};

const page = () => {
  return <Elara />;
};

export default page;
