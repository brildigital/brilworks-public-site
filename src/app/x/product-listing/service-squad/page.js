import React from "react";
import ServiceSquad from "@/app/components/Product/ServiceSquad";

export const metadata = {
  title:
    "ServiceSquad - Professional Home Services at Your Doorstep | Brilworks",
  description:
    "ServiceSquad is your trusted platform for booking professional home services. From cleaning and repairs to beauty services and pest control, book verified professionals with live tracking, secure payments, and quality assurance. Browse 9 service categories with 100+ professional services available.",
  openGraph: {
    title:
      "ServiceSquad - Professional Home Services at Your Doorstep | Brilworks",
    description:
      "ServiceSquad is your trusted platform for booking professional home services. From cleaning and repairs to beauty services and pest control, book verified professionals with live tracking, secure payments, and quality assurance. Browse 9 service categories with 100+ professional services available.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/service-squad/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "https://d11qzsb0ksp6iz.cloudfront.net/assets/servicesquad-banner.webp",
      },
    ],
  },

  twitter: {
    title:
      "ServiceSquad - Professional Home Services at Your Doorstep | Brilworks",
    description:
      "ServiceSquad is your trusted platform for booking professional home services. From cleaning and repairs to beauty services and pest control, book verified professionals with live tracking, secure payments, and quality assurance. Browse 9 service categories with 100+ professional services available.",
    card: "summary_large_image",
    images: [
      {
        url: "https://d11qzsb0ksp6iz.cloudfront.net/assets/servicesquad-banner.webp",
      },
    ],
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/service-squad/`,
  },
};

const page = () => {
  return <ServiceSquad />;
};

export default page;
