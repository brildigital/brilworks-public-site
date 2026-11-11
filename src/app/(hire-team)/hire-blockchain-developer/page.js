import {
  generateBreadcrumb,
  generateServiceSchemaFromMetadata,
} from "@/app/components/lib/schemaCode";
import BlockchainTechnology from "@/app/components/Technologies/BlockchainTechnology";

export const metadata = {
  title: "Hire Blockchain Developers | Brilworks",
  description:
    "Brilworks blockchain developers create secure and scalable software for your business. Hire blockchain developers.",
  openGraph: {
    title: "Hire Blockchain Developers",
    description:
      "Brilworks blockchain developers create secure and scalable software for your business. Hire blockchain developers.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-blockchain-developer/`,
    siteName: "Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/blockchain-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Hire Blockchain Developers",
    description:
      "Brilworks blockchain developers create secure and scalable software for your business. Hire blockchain developers.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-blockchain-developer/`,
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
          __html: generateBreadcrumb("Hire Blockchain Developers"),
        }}
      />
      <BlockchainTechnology />
    </>
  );
};

export default page;
