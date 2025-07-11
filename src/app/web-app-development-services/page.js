import WebAppDevelopmentService from "../components/Services/WebAppDevelopmentService";

export const metadata = {
  title: "Web App Development Services | Brilworks",
  description:
    "Build fast, scalable, and secure web applications with our expert web app development services. From custom solutions to enterprise-grade platforms, we deliver reliable digital products that drive growth.",
  openGraph: {
    title: "Web App Development Services | Brilworks",
    description:
      "Build fast, scalable, and secure web applications with our expert web app development services. From custom solutions to enterprise-grade platforms, we deliver reliable digital products that drive growth.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}web-app-development-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/web-app-development-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Web App Development Services | Brilworks",
    description:
      "Build fast, scalable, and secure web applications with our expert web app development services. From custom solutions to enterprise-grade platforms, we deliver reliable digital products that drive growth.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}web-app-development-services/`,
  },
};

const page = () => {
  return <WebAppDevelopmentService />;
};

export default page;
