import React from "react";
import KinderLand from "@/app/components/Product/KinderLand";

export const metadata = {
  title:
    "Kinderland - Educational Games for Kids | Learning Through Play | Brilworks",
  description:
    "Unlock a world of fun and learning with Kinderland! Designed for curious young minds, Kinderland combines education and entertainment to make every moment a learning adventure. Whether it's phonics, numbers, alphabets, or shapes, Kinderland turns everyday lessons into exciting games that your child will love!",
  openGraph: {
    title:
      "Kinderland - Educational Games for Kids | Learning Through Play | Brilworks",
    description:
      "Unlock a world of fun and learning with Kinderland! Designed for curious young minds, Kinderland combines education and entertainment to make every moment a learning adventure. Whether it's phonics, numbers, alphabets, or shapes, Kinderland turns everyday lessons into exciting games that your child will love!",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/kinder-land/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/kinderland-case-study-1759145795626.webp`,
      },
    ],
  },

  twitter: {
    title:
      "Kinderland - Educational Games for Kids | Learning Through Play | Brilworks",
    description:
      "Unlock a world of fun and learning with Kinderland! Designed for curious young minds, Kinderland combines education and entertainment to make every moment a learning adventure. Whether it's phonics, numbers, alphabets, or shapes, Kinderland turns everyday lessons into exciting games that your child will love!",
    card: "summary_large_image",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/kinderland-case-study-1759145795626.webp`,
      },
    ],
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/kinderland/`,
  },
};

const page = () => {
  return <KinderLand />;
};

export default page;
