import { generateBreadcrumb } from "@/app/components/lib/schemaCode";
import MobileAppTechnology from "@/app/components/Technologies/MobileAppTechnology";

export const metadata = {
  title: "Hire Mobile App Developers | Brilworks",
  description:
    " Build your dream mobile app with our talented developers. We offer expert consultation, design, and development services. Hire us today!",
  openGraph: {
    title: "Hire Mobile App Developers",
    description:
      " Build your dream mobile app with our talented developers. We offer expert consultation, design, and development services. Hire us today!",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-mobile-app-developer/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/mobile-app-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Hire Mobile App Developers",
    description:
      " Build your dream mobile app with our talented developers. We offer expert consultation, design, and development services. Hire us today!",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-mobile-app-developer/`,
  },
};
const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Hire Mobile App Developers"),
        }}
      />
      <MobileAppTechnology />
    </>
  );
};

export default page;
