import SpineRecoveryPro from "@/app/components/Product/SpineRecoveryPro";
import React from "react";

export const metadata = {
  title:
    "Enterprise Risk Management System for Post-Spine Surgery Care | Brilworks",
  description:
    "SpineRecovery Pro is a B2B SaaS platform that helps hospitals standardize post-op spine care protocols, enforce compliance, and reduce medico-legal risk through objective patient monitoring and automated workflows.",
  openGraph: {
    title:
      "Enterprise Risk Management System for Post-Spine Surgery Care | Brilworks",
    description:
      "SpineRecovery Pro is a B2B SaaS platform that helps hospitals standardize post-op spine care protocols, enforce compliance, and reduce medico-legal risk through objective patient monitoring and automated workflows.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}product/spine-recovery-pro/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/spine-recovery-pro-banner.webp`,
      },
    ],
  },

  twitter: {
    title:
      "Enterprise Risk Management System for Post-Spine Surgery Care | Brilworks",
    description:
      "SpineRecovery Pro is a B2B SaaS platform that helps hospitals standardize post-op spine care protocols, enforce compliance, and reduce medico-legal risk through objective patient monitoring and automated workflows.",
    card: "summary_large_image",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/spine-recovery-pro-banner.webp`,
      },
    ],
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/spine-recovery-pro/`,
  },
};

const page = () => {
  return <SpineRecoveryPro />;
};

export default page;
