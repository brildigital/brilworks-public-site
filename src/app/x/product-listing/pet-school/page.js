import PetSchool from "@/app/components/Product/PetSchool";
import React from "react";

export const metadata = {
  title: "PetSchool — Train Your Pet, One Lesson at a Time | Brilworks",
  description:
    "PetSchool is the smart pet training app for dogs and cats. Structured lessons, daily streaks, badges, and a community of pet parents. Free on iOS.",
  openGraph: {
    title: "PetSchool — Train Your Pet, One Lesson at a Time | Brilworks",
    description:
      "PetSchool is the smart pet training app for dogs and cats. Structured lessons, daily streaks, badges, and a community of pet parents. Free on iOS.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/pet-school/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/petschool-9cd94.firebasestorage.app/o/icon.png?alt=media&token=e702f7e2-a192-4084-9c11-28b17b6ee7a3",
      },
    ],
  },
  twitter: {
    title: "PetSchool — Train Your Pet, One Lesson at a Time | Brilworks",
    description:
      "PetSchool is the smart pet training app for dogs and cats. Structured lessons, daily streaks, badges, and a community of pet parents. Free on iOS.",
    card: "summary_large_image",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/petschool-9cd94.firebasestorage.app/o/icon.png?alt=media&token=e702f7e2-a192-4084-9c11-28b17b6ee7a3",
      },
    ],
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/pet-school/`,
  },
};

const page = () => {
  return <PetSchool />;
};

export default page;
