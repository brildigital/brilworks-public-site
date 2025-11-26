import EnclaveConnect from "@/app/components/Product/EnclaveConnect";
import React from "react";

export const metadata = {
  title: "Smart Society Management Platform | Brilworks",
  description:
    "A unified digital platform that simplifies daily society tasks and keeps every resident connected in real time.",
  openGraph: {
    title: "Smart Society Management Platform | Brilworks",
    description:
      "A unified digital platform that simplifies daily society tasks and keeps every resident connected in real time.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}product/enclave-connect/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "https://d11qzsb0ksp6iz.cloudfront.net/assets/enclave-connect-mockup-1759756976416.webp",
      },
    ],
  },

  twitter: {
    title: "Smart Society Management Platform | Brilworks",
    description:
      "A unified digital platform that simplifies daily society tasks and keeps every resident connected in real time.",
    card: "summary_large_image",
    images: [
      {
        url: "https://d11qzsb0ksp6iz.cloudfront.net/assets/enclave-connect-mockup-1759756976416.webp",
      },
    ],
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}product/encalve-connect/`,
  },
};

const page = () => {
  return (
    <div>
      <EnclaveConnect />
    </div>
  );
};

export default page;
