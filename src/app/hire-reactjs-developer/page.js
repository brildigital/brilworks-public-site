import {
  generateBreadcrumb,
  generateRatingSchema,
} from "../components/lib/schemaCode";
import ReactJSTechnology from "../components/Technologies/ReactJSTechnology";

export const metadata = {
  title:
    "Hire ReactJS Developers in 72 Hours | Expert React Developers for Hire | Brilworks",
  description:
    "Hire ReactJS Developers for specialized development services including enterprise solutions, custom apps, front-end, migration, integration, and support.",
  openGraph: {
    title:
      "Hire ReactJS Developers in 72 Hours | Expert React Developers for Hire",
    description:
      "Hire ReactJS Developers for specialized development services including enterprise solutions, custom apps, front-end, migration, integration, and support.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-reactjs-developer/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/v2/reactjs-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title:
      "Hire ReactJS Developers in 72 Hours | Expert React Developers for Hire",
    description:
      "Hire ReactJS Developers for specialized development services including enterprise solutions, custom apps, front-end, migration, integration, and support.",

    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-reactjs-developer/`,
  },
};

const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Hire ReactJS Developers"),
        }}
      />
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateRatingSchema(
            "Hire ReactJS Developers",
            "hire-reactjs-developer/",
            4.8,
            150
          ),
        }}
      />
      <ReactJSTechnology />
    </>
  );
};

export default page;
