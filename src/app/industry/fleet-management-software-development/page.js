import FleetManagementNGPS from "@/app/components/Solution/FleetManagementNGPS";
import { generateBreadcrumb, generateWebPageSchema } from "@/app/components/lib/schemaCode";
import LastUpdated from "@/app/components/Common/LastUpdated";

const LAST_UPDATED = "2026-04-23";

export const metadata = {
  title: "Fleet Management Software Development Services",
  description:
    "Need custom fleet management software? Brilworks provides specialised fleet management software development services and operations and improves efficiency.",
  openGraph: {
    title: "Fleet Management Software Development Services",
    description:
      "Need custom fleet management software? Brilworks provides specialised fleet management software development services and operations and improves efficiency.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}industry/fleet-management-software-development/`,
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
    title: "Fleet Management Software Development Services",
    description:
      "Need custom fleet management software? Brilworks provides specialised fleet management software development services and operations and improves efficiency.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}industry/fleet-management-software-development/`,
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
            "Fleet Manangement Software Development Company"
          ),
        }}
      />
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateWebPageSchema({
            title: "Fleet Management Software Development Services",
            description:
              "Need custom fleet management software? Brilworks provides specialised fleet management software development services and operations and improves efficiency.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}industry/fleet-management-software-development/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <FleetManagementNGPS />
    </>
  );
};

export default page;
