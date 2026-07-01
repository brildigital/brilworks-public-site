import DataEngineeringHealthtech from "@/app/components/IndustryPage/DataEngineeringHealthtech";

export const metadata = {
  title: "Data Engineering for Healthtech | Brilworks",
  description:
    "Data engineering for healthtech and multi-clinic providers. Unified patient data across EHR, labs, billing, and appointments, with governed, auditable pipelines.",
  keywords:
    "healthtech data engineering, patient data platform, EHR integration, HL7 FHIR pipelines, Snowflake healthcare, dbt healthcare, patient identity resolution, clinical data warehouse",
  openGraph: {
    title: "Data Engineering for Healthtech | Brilworks",
    type: "website",
    description:
      "We unify patient records, labs, billing, and appointments across every clinic into one governed warehouse — with identifiers and data quality checks that make the numbers trustworthy enough to report from.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-for-healthtech/`,
    siteName: "Brilworks",
  },
};

const Page = () => <DataEngineeringHealthtech />;
export default Page;
