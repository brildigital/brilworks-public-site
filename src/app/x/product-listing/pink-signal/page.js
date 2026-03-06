import React from "react";
import PinkSignal from "@/app/components/Product/PinkSignal";

export const metadata = {
  title:
    "PinkSignal - Women Safety App | Real-Time SOS & Location Tracking | Brilworks",
  description:
    "PinkSignal empowers women with instant SOS alerts, real-time location sharing, and peace of mind for families. Stay safe, stay connected with our trusted women safety app.",
  openGraph: {
    title:
      "PinkSignal - Women Safety App | Real-Time SOS & Location Tracking | Brilworks",
    description:
      "PinkSignal empowers women with instant SOS alerts, real-time location sharing, and peace of mind for families. Stay safe, stay connected with our trusted women safety app.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/pink-signal/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/pin-signap-banner-image.png`,
      },
    ],
  },

  twitter: {
    title:
      "PinkSignal - Women Safety App | Real-Time SOS & Location Tracking | Brilworks",
    description:
      "PinkSignal empowers women with instant SOS alerts, real-time location sharing, and peace of mind for families. Stay safe, stay connected with our trusted women safety app.",
    card: "summary_large_image",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/pin-signap-banner-image.png`,
      },
    ],
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/pink-signal/`,
  },
};

const page = () => {
  return <PinkSignal />;
};

export default page;
