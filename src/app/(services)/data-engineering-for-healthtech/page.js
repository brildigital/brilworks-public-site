import DataEngineeringHealthtech from "@/app/components/IndustryPage/DataEngineeringHealthtech";
import { generateServiceSchemaFromMetadata } from "@/app/components/lib/schemaCode";

export const metadata = {
  title: "Healthtech Data Engineering Services | Brilworks",
  description:
    "Unify patient records, labs, billing, and appointments into one governed warehouse. HL7 and FHIR pipelines for multi-clinic healthcare providers.",
  keywords:
    "healthtech data engineering, patient data platform, EHR integration, HL7 FHIR pipelines, Snowflake healthcare, dbt healthcare, patient identity resolution, clinical data warehouse",
  openGraph: {
    title: "Healthtech Data Engineering Services | Brilworks",
    type: "website",
    description:
      "Unify patient records, labs, billing, and appointments into one governed warehouse. HL7 and FHIR pipelines for multi-clinic healthcare providers.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-for-healthtech/`,
    siteName: "Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-for-healthtech/`,
  },
};

const Page = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: generateServiceSchemaFromMetadata(metadata),
      }}
    />
    <DataEngineeringHealthtech />
  </>
);
export default Page;
