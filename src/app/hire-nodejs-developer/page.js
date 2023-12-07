import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import NodejsTechnology from "../components/Technologies/NodejsTechnology";
import { generateBreadcrumb } from "../components/lib/schemaCode";

export const metadata = {
  title: "Hire NodeJS Developers",
  description:
    "Looking to hire node developers? Brilworks's node.js programmers provide Consulting, API Development & Integration, Plugin Development, and Migration services.",
  openGraph: {
    title: "Hire NodeJS Developers",
    description:
      "Looking to hire node developers? Brilworks's node.js programmers provide Consulting, API Development & Integration, Plugin Development, and Migration services.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-nodejs-developer/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
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
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Hire NodeJS Developers"),
        }}
      />
      <Header />
      <NodejsTechnology />

      <Footer />
    </>
  );
};

export default page;
