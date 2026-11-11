import FrappeDevelopmentService from "@/app/components/Services/FrappeDevelopmentService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";
import { generateServiceSchemaFromMetadata } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-04-23";

export const metadata = {
  title: "Frappe Development Services | Brilworks",
  description:
    "Accelerate your business processes with Brilworks' Frappe development services. Create customized, scalable ERP solutions that streamline operations and boost productivity.",
  openGraph: {
    title: "Frappe Development Services",
    description:
      "Accelerate your business processes with Brilworks' Frappe development services. Create customized, scalable ERP solutions that streamline operations and boost productivity.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}frappe-development-services/`,
    siteName: "Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/frappe-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Frappe Development Services",
    description:
      "Accelerate your business processes with Brilworks' Frappe development services. Create customized, scalable ERP solutions that streamline operations and boost productivity.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}frappe-development-services/`,
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
            title: "Frappe Development Services | Brilworks",
            description:
              "Accelerate your business processes with Brilworks' Frappe development services. Create customized, scalable ERP solutions that streamline operations and boost productivity.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}frappe-development-services/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <FrappeDevelopmentService />
    </>
  );
};

export default page;
