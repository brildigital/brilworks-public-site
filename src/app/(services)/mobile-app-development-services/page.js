import MobileAppDevelopmentService from "@/app/components/Services/MobileAppDevelopmentService";

export const metadata = {
  title: "Mobile App Development Services | Brilworks",
  description:
    "Brilworks builds end to end mobile apps for mhealth, fintech, logistics and AI driven products, trusted by companies in the USA and across global markets.",
  openGraph: {
    title: "Mobile App Development Services | Brilworks",
    description:
      "Brilworks builds end to end mobile apps for mhealth, fintech, logistics and AI driven products, trusted by companies in the USA and across global markets.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}web-app-development-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/mobile-app-dev-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Mobile App Development Services | Brilworks",
    description:
      "Brilworks builds end to end mobile apps for mhealth, fintech, logistics and AI driven products, trusted by companies in the USA and across global markets.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}mobile-app-development-services/`,
  },
};

const page = () => {
  return <MobileAppDevelopmentService />;
};

export default page;
