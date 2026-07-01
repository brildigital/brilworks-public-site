import { generateBreadcrumb } from "@/app/components/lib/schemaCode";
import HireDataEngineers from "@/app/components/HireTeam/HireDataEngineers";

export const metadata = {
  title: "Hire Data Engineers | Snowflake & Databricks Partner | Brilworks",
  description:
    "Hire senior data engineers who build production pipelines, not proof-of-concepts. Snowflake & Databricks Partner. Ingestion, dbt transformation, streaming, orchestration, and governance across AWS, GCP, and Azure.",
  openGraph: {
    title: "Hire Data Engineers | Snowflake & Databricks Partner",
    description:
      "Hire senior data engineers who build production pipelines, not proof-of-concepts. Snowflake & Databricks Partner. Ingestion, dbt transformation, streaming, orchestration, and governance.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-data-engineer/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/og/hire-data-engineer.webp`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Hire Data Engineers | Snowflake & Databricks Partner",
    description:
      "Senior data engineers who build production pipelines. Snowflake & Databricks Partner.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-data-engineer/`,
  },
};

const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Hire Data Engineers"),
        }}
      />
      <HireDataEngineers />
    </>
  );
};

export default page;
