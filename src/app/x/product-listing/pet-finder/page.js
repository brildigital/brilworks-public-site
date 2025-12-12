import React from "react";
import PetFinder from "@/app/components/Product/PetFinder";

export const metadata = {
  title:
    "Pet Finder - Discover Adoptable Pets & Reunite Lost Animals | Brilworks",
  description:
    "Pet Finder is your go-to app for discovering adoptable pets near you or helping reunite lost animals with their families. Browse thousands of listings, filter by breed, age, and location, and connect directly with shelters or pet owners. Whether you're looking to adopt, foster, or report a missing pet, Pet Finder makes it simple and compassionate.",
  openGraph: {
    title:
      "Pet Finder - Discover Adoptable Pets & Reunite Lost Animals | Brilworks",
    description:
      "Pet Finder is your go-to app for discovering adoptable pets near you or helping reunite lost animals with their families. Browse thousands of listings, filter by breed, age, and location, and connect directly with shelters or pet owners. Whether you're looking to adopt, foster, or report a missing pet, Pet Finder makes it simple and compassionate.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}product/pet-finder/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "https://d11qzsb0ksp6iz.cloudfront.net/assets/petly-pet-finder-app-1759145787607.webp",
      },
    ],
  },

  twitter: {
    title:
      "Pet Finder - Discover Adoptable Pets & Reunite Lost Animals | Brilworks",
    description:
      "Pet Finder is your go-to app for discovering adoptable pets near you or helping reunite lost animals with their families. Browse thousands of listings, filter by breed, age, and location, and connect directly with shelters or pet owners. Whether you're looking to adopt, foster, or report a missing pet, Pet Finder makes it simple and compassionate.",
    card: "summary_large_image",
    images: [
      {
        url: "https://d11qzsb0ksp6iz.cloudfront.net/assets/petly-pet-finder-app-1759145787607.webp",
      },
    ],
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/`,
  },
};

const page = () => {
  return <PetFinder />;
};

export default page;
