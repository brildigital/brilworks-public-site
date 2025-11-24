import WhiteLabelAppDevelopment from "@/app/components/Services/WhiteLabelAppDevelopment";

export const metadata = {
  title: "White Label Mobile App Development for Small Businesses",
  description:
    "We build white label apps for small businesses in healthcare, fitness and food delivery, offering full design, development and ongoing support under one roof.",
  openGraph: {
    title: "White Label Mobile App Development for Small Businesses",
    description:
      "We build white label apps for small businesses in healthcare, fitness and food delivery, offering full design, development and ongoing support under one roof.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}web-app-development-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/white-label-mobile-app-development-services-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "White Label Mobile App Development for Small Businesses",
    description:
      "We build white label apps for small businesses in healthcare, fitness and food delivery, offering full design, development and ongoing support under one roof.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}white-label-mobile-app-development/`,
  },
};

const page = () => {
  return <WhiteLabelAppDevelopment />;
};

export default page;
