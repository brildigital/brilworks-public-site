import ERPNextDevService from "@/app/components/Services/ERPNextDevService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-04-23";

export const metadata = {
  title: "ERPNext Development Services | Brilworks",
  description:
    "Streamline your business operations with Brilworks' ERPNext development. Customize and implement powerful, open-source ERP solutions tailored to your unique business needs and growth goals.",
  openGraph: {
    title: "ERPNext Development Services",
    description:
      "Streamline your business operations with Brilworks' ERPNext development. Customize and implement powerful, open-source ERP solutions tailored to your unique business needs and growth goals.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}erp-next-development-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/erp-next-dev-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "ERPNext Development Services",
    description:
      "Streamline your business operations with Brilworks' ERPNext development. Customize and implement powerful, open-source ERP solutions tailored to your unique business needs and growth goals.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}erp-next-development-services/`,
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
            title: "ERPNext Development Services | Brilworks",
            description:
              "Streamline your business operations with Brilworks' ERPNext development. Customize and implement powerful, open-source ERP solutions tailored to your unique business needs and growth goals.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}erp-next-development-services/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <ERPNextDevService />
    </>
  );
};

export default page;
