import dynamic from "next/dynamic";
import { generateBreadcrumb } from "@/app/components/lib/schemaCode";

const Fintech = dynamic(() => import("@/app/components/Solution/Fintech"));

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
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Fintech Software Development Services"),
        }}
      />
      <Fintech />
    </>
  );
};

export default page;
