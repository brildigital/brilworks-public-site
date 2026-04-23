import WebAppDevelopmentService from "@/app/components/Services/WebAppDevelopmentService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-04-23";

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
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateWebPageSchema({
            title: "Web App Development Services | Brilworks",
            description:
              "Build fast, scalable, and secure web applications with our expert web app development services. From custom solutions to enterprise-grade platforms, we deliver reliable digital products that drive growth.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}web-app-development-services/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <WebAppDevelopmentService />
    </>
  );
};

export default page;
