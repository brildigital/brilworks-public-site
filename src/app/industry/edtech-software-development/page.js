import EdTech from "@/app/components/Solution/EdTech";
import { generateBreadcrumb } from "@/app/components/lib/schemaCode";

export const metadata = {
  title: "EdTech Software Development Services",
  description:
    "We design and develop education technology solutions that transform how learners, teachers, and organizations connect. From custom e-learning platforms to AI-powered learning apps, our EdTech software development services are designed to meet the growing demand for digital learning experiences.",
  openGraph: {
    title: "EdTech Software Development Services",
    description:
      "We design and develop education technology solutions that transform how learners, teachers, and organizations connect. From custom e-learning platforms to AI-powered learning apps, our EdTech software development services are designed to meet the growing demand for digital learning experiences.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}industry/edtech-software-development/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/explore-arrow-01.png`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "EdTech Software Development Services",
    description:
      "We design and develop education technology solutions that transform how learners, teachers, and organizations connect. From custom e-learning platforms to AI-powered learning apps, our EdTech software development services are designed to meet the growing demand for digital learning experiences.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}industry/edtech-software-development/`,
  },
};

const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("EdTech Software Development Company"),
        }}
      />
      <EdTech />
    </>
  );
};

export default page;
