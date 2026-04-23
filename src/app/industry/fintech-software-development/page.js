import { generateBreadcrumb, generateWebPageSchema } from "@/app/components/lib/schemaCode";
import Fintech from "@/app/components/Solution/Fintech";
import LastUpdated from "@/app/components/Common/LastUpdated";

const LAST_UPDATED = "2026-04-23";

export const metadata = {
  title: "Fintech Software Development Services",
  description:
    "Brilworks, a fintech software development company offers services for custom fintech apps, banking, insurance, wallet development, and personal finance.",
  openGraph: {
    title: "Fintech Software Development Services",
    description:
      "Brilworks, a fintech software development company offers services for custom fintech apps, banking, insurance, wallet development, and personal finance.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}industry/fintech-software-development/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/explore-arrow-01.png`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Fintech Software Development Services",
    description:
      "Brilworks, a fintech software development company offers services for custom fintech apps, banking, insurance, wallet development, and personal finance.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}industry/fintech-software-development/`,
  },
};

const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Fintech Software Development Services"),
        }}
      />
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateWebPageSchema({
            title: "Fintech Software Development Services",
            description:
              "Brilworks, a fintech software development company offers services for custom fintech apps, banking, insurance, wallet development, and personal finance.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}industry/fintech-software-development/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <Fintech />
    </>
  );
};

export default page;
