import React from "react";
import KindCircle from "@/app/components/Product/KindCircle";

export const metadata = {
  title:
    "KindCircle - Supporting Parents of Neurodivergent Children | Community Platform | Brilworks",
  description:
    "KindCircle is a dedicated community platform connecting parents raising children with autism, ADHD, learning disabilities, and other neurodivergent conditions. Find support, share experiences, and access expert resources all in one place.",
  openGraph: {
    title:
      "KindCircle - Supporting Parents of Neurodivergent Children | Community Platform | Brilworks",
    description:
      "KindCircle is a dedicated community platform connecting parents raising children with autism, ADHD, learning disabilities, and other neurodivergent conditions. Find support, share experiences, and access expert resources.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/kind-circle/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/kindcircle-1770726348659.webp`,
      },
    ],
  },

  twitter: {
    title:
      "KindCircle - Supporting Parents of Neurodivergent Children | Community Platform | Brilworks",
    description:
      "KindCircle is a dedicated community platform connecting parents raising children with autism, ADHD, learning disabilities, and other neurodivergent conditions. Find support, share experiences, and access expert resources.",
    card: "summary_large_image",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/kindcircle-1770726348659.webp`,
      },
    ],
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/kind-circle/`,
  },
};

const page = () => {
  return <KindCircle />;
};

export default page;
