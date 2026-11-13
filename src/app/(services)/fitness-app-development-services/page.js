import FitnessAppDevelopmentServices from "@/app/components/Services/FitnessAppDevelopmentServices";
import LastUpdated from "@/app/components/Common/LastUpdated";
import {
  generateWebPageSchema,
  generateServiceSchemaFromMetadata,
} from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-04-23";

export const metadata = {
  title: "Fitness App Development Services",
  description:
    "Expert fitness development services, including gym workout, nutrition, fitness trackers, yoga apps, user-friendly, AI-powered apps for startups and SMEs.",
  openGraph: {
    title: "Fitness App Development Services",
    description:
      "Expert fitness development services, including gym workout, nutrition, fitness trackers, yoga apps, user-friendly, AI-powered apps for startups and SMEs.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}web-app-development-services/`,
    siteName: "Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/fitness-app-development.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Fitness App Development Services",
    description:
      "Expert fitness development services, including gym workout, nutrition, fitness trackers, yoga apps, user-friendly, AI-powered apps for startups and SMEs.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}fitness-app-development-services/`,
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
          __html: generateWebPageSchema({
            title: "Fitness App Development Services",
            description:
              "Expert fitness development services, including gym workout, nutrition, fitness trackers, yoga apps, user-friendly, AI-powered apps for startups and SMEs.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}fitness-app-development-services/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <FitnessAppDevelopmentServices />
    </>
  );
};

export default page;
