import dynamic from "next/dynamic";
import { generateBreadcrumb } from "../components/lib/schemaCode";

const NodejsTechnology = dynamic(() =>
  import("../components/Technologies/NodejsTechnology")
);

export const metadata = {
  title: "Hire NodeJS Developers",
  description:
    "Looking to hire node developers? Brilworks's node.js programmers provide Consulting, API Development & Integration, Plugin Development, and Migration services.",
  openGraph: {
    title: "Hire NodeJS Developers",
    description:
      "Looking to hire node developers? Brilworks's node.js programmers provide Consulting, API Development & Integration, Plugin Development, and Migration services.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-nodejs-developer/`,
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
    title: "Hire NodeJS Developers",
    description:
      "Looking to hire node developers? Brilworks's node.js programmers provide Consulting, API Development & Integration, Plugin Development, and Migration services.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-nodejs-developer/`,
  },
};

const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Hire NodeJS Developers"),
        }}
      />
      <NodejsTechnology />
    </>
  );
};

export default page;
