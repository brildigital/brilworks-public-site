import dynamic from "next/dynamic";
import { generateBreadcrumb } from "../components/lib/schemaCode";

const BlockchainTechnology = dynamic(() =>
  import("../components/Technologies/BlockchainTechnology")
);

export const metadata = {
  title: "Hire Blockchain Developers",
  description:
    "Brilworks blockchain developers create secure and scalable software for your business. Hire blockchain developers.",
  openGraph: {
    title: "Hire Blockchain Developers",
    description:
      "Brilworks blockchain developers create secure and scalable software for your business. Hire blockchain developers.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-blockchain-developer/`,
    siteName: "AWS Consulting Partner | Gen AI | Product Engineering",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/1.png`,
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
