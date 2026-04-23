import HealthCare from "@/app/components/Solution/Healthcare";
import { generateBreadcrumb, generateWebPageSchema } from "@/app/components/lib/schemaCode";
import LastUpdated from "@/app/components/Common/LastUpdated";

const LAST_UPDATED = "2026-04-23";

export const metadata = {
  title: "Healthcare Software Development Services | Brilworks",
  description:
    "Brilworks is a healthcare software developer that creates medical software for patient monitoring, telemedicine, and prescription apps on the EMR/EHR platform.",
  openGraph: {
    title: "Healthcare Software Development Services",
    description:
      "Brilworks is a healthcare software developer that creates medical software for patient monitoring, telemedicine, and prescription apps on the EMR/EHR platform.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}industry/healthcare-software-development/`,
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
    title: "Healthcare Software Development Services",
    description:
      "Brilworks is a healthcare software developer that creates medical software for patient monitoring, telemedicine, and prescription apps on the EMR/EHR platform.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}industry/healthcare-software-development/`,
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
            "Healthcare Software Development Services"
          ),
        }}
      />
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateWebPageSchema({
            title: "Healthcare Software Development Services | Brilworks",
            description:
              "Brilworks is a healthcare software developer that creates medical software for patient monitoring, telemedicine, and prescription apps on the EMR/EHR platform.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}industry/healthcare-software-development/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <HealthCare />
    </>
  );
};

export default page;
