import EdTech from "@/app/components/Solution/EdTech";
import { generateBreadcrumb, generateWebPageSchema } from "@/app/components/lib/schemaCode";
import LastUpdated from "@/app/components/Common/LastUpdated";

const LAST_UPDATED = "2026-04-23";

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
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateWebPageSchema({
            title: "EdTech Software Development Services",
            description:
              "We design and develop education technology solutions that transform how learners, teachers, and organizations connect. From custom e-learning platforms to AI-powered learning apps, our EdTech software development services are designed to meet the growing demand for digital learning experiences.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}industry/edtech-software-development/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <EdTech />
    </>
  );
};

export default page;
