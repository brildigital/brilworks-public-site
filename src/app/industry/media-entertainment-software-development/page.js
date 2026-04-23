import MediaAndEntertainment from "@/app/components/Solution/MediaAndEntertainment";
import { generateBreadcrumb, generateWebPageSchema } from "@/app/components/lib/schemaCode";
import LastUpdated from "@/app/components/Common/LastUpdated";

const LAST_UPDATED = "2026-04-23";

export const metadata = {
  title: "Media and Entertainment Software Development Service",
  description:
    "Brilworks Software provides media and entertainment software development services including OTT streaming, ticket booking, and gaming.",
  openGraph: {
    title: "Media and Entertainment Software Development Service",
    description:
      "Brilworks Software provides media and entertainment software development services including OTT streaming, ticket booking, and gaming.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}industry/media-entertainment-software-development/`,
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
    title: "Media and Entertainment Software Development Service",
    description:
      "Brilworks Software provides media and entertainment software development services including OTT streaming, ticket booking, and gaming.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}industry/media-entertainment-software-development/`,
  },
};

const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb(
            "Media And Entertainment Software Development Company"
          ),
        }}
      />
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateWebPageSchema({
            title: "Media and Entertainment Software Development Service",
            description:
              "Brilworks Software provides media and entertainment software development services including OTT streaming, ticket booking, and gaming.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}industry/media-entertainment-software-development/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <MediaAndEntertainment />
    </>
  );
};

export default page;
