import { generateBreadcrumb } from "@/app/components/lib/schemaCode";
import IoTEmbeddedServices from "@/app/components/Services/IoTEmbeddedServices";

export const metadata = {
  title: "IoT & Embedded Development Services | Brilworks",
  description:
    "Embedded software, firmware engineering, edge AI, and IoT product engineering under one team. Device to cloud, production-ready, you own the IP.",
  openGraph: {
    title: "IoT & Embedded Development Services | Brilworks",
    description:
      "Embedded software, firmware engineering, edge AI, and IoT product engineering under one team. Device to cloud, production-ready, you own the IP.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}iot-embedded-development-services/`,
    siteName: "Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "IoT & Embedded Development Services | Brilworks",
    description:
      "Embedded software, firmware engineering, edge AI, and IoT product engineering under one team. Device to cloud, production-ready, you own the IP.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}iot-embedded-development-services/`,
  },
};

const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("IoT & Embedded Development Services"),
        }}
      />
      <IoTEmbeddedServices />
    </>
  );
};

export default page;
