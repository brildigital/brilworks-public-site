import ApplicationDevelopmentService from "@/app/components/Services/ApplicationDevelopmentService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";
import { generateServiceSchemaFromMetadata } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-04-23";

export const metadata = {
  title: "Application development Services | Brilworks",
  description:
    "Elevate your business with Brilworks' custom application development. We build innovative, scalable solutions tailored to your unique needs and long-term goals.",
  openGraph: {
    title: "Application development Services",
    description:
      "Elevate your business with Brilworks' custom application development. We build innovative, scalable solutions tailored to your unique needs and long-term goals.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}application-development-services/`,
    siteName: "Brilworks",
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateServiceSchemaFromMetadata(metadata),
        }}
      />
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateWebPageSchema({
            title: "Application development Services | Brilworks",
            description:
              "Elevate your business with Brilworks' custom application development. We build innovative, scalable solutions tailored to your unique needs and long-term goals.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}application-development-services/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <div className="">
        <ApplicationDevelopmentService />
      </div>
    </>
  );
};

export default page;
