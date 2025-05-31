import AdaloDevelopmentService from "../components/Services/AdaloDevelopmentService";

export const metadata = {
  title: "Adalo Development Services | Brilworks",
  description:
    "Transform your ideas into reality with Brilworks' Adalo development services. Create powerful no-code apps that drive growth and user engagement.",
  openGraph: {
    title: "Adalo Development Services",
    description:
      "Transform your ideas into reality with Brilworks' Adalo development services. Create powerful no-code apps that drive growth and user engagement.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}adalo-development-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: "/images/v2/adalo-banner.webp",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Adalo Development Services",
    description:
      "Transform your ideas into reality with Brilworks' Adalo development services. Create powerful no-code apps that drive growth and user engagement.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}adalo-development-services/`,
  },
};

const page = () => {
  return <AdaloDevelopmentService />;
};

export default page;
