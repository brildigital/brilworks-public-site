import dynamic from "next/dynamic";
import { generateBreadcrumb } from "../components/lib/schemaCode";

const AWSTechnology = dynamic(() =>
  import("../components/Technologies/AWSTechnology")
);

export const metadata = {
  title: "Hire AWS Developers",
  description:
    "You can hire AWS developers to transform, grow, and scale up your business - we provide Consulting, App Development, Cloud Migration, DevOps, and Managed Services.",
  openGraph: {
    title: "Hire AWS Developers",
    description:
      "You can hire AWS developers to transform, grow, and scale up your business - we provide Consulting, App Development, Cloud Migration, DevOps, and Managed Services.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-aws-developer/`,
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
    title: "Hire AWS Developers",
    description:
      "You can hire AWS developers to transform, grow, and scale up your business - we provide Consulting, App Development, Cloud Migration, DevOps, and Managed Services.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-aws-developer/`,
  },
};
const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Hire AWS Developers"),
        }}
      />
      <AWSTechnology />
    </>
  );
};

export default page;
