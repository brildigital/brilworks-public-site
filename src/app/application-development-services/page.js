import ApplicationDevelopmentService from "../components/Services/ApplicationDevelopmentService";

export const metadata = {
  title: "Application development Services | Brilworks",
  description:
    "Elevate your business with Brilworks' custom application development. We build innovative, scalable solutions tailored to your unique needs and long-term goals.",
  openGraph: {
    title: "Application development Services",
    description:
      "Elevate your business with Brilworks' custom application development. We build innovative, scalable solutions tailored to your unique needs and long-term goals.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}application-development-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/application-dev-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Application development Services",
    description:
      "Elevate your business with Brilworks' custom application development. We build innovative, scalable solutions tailored to your unique needs and long-term goals.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}application-development-services/`,
  },
};

const page = () => {
  return (
    <div className="!bg-colorWhite">
      <ApplicationDevelopmentService />
    </div>
  );
};

export default page;
