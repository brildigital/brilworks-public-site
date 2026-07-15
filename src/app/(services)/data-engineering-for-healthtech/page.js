import DataEngineeringHealthtech from "@/app/components/IndustryPage/DataEngineeringHealthtech";

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
};

const Page = () => <DataEngineeringHealthtech />;
export default Page;
