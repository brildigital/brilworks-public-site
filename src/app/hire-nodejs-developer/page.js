import { generateBreadcrumb } from "../components/lib/schemaCode";
import NodejsTechnology from "../components/Technologies/NodejsTechnology";

export const metadata = {
  title:
    "Hire Node.js Developers in 72 Hours | Vetted Node.js Developers for Hire | Brilworks",
  description:
    "Looking to hire node developers? Brilworks's node.js programmers provide Consulting, API Development & Integration, Plugin Development, and Migration services.",
  openGraph: {
    title:
      "Hire Node.js Developers in 72 Hours | Vetted Node.js Developers for Hire",
    description:
      "Looking to hire node developers? Brilworks's node.js programmers provide Consulting, API Development & Integration, Plugin Development, and Migration services.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-nodejs-developer/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/nodejs-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title:
      "Hire Node.js Developers in 72 Hours | Vetted Node.js Developers for Hire",
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
