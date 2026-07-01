import DataEngineeringFintech from "@/app/components/IndustryPage/DataEngineeringFintech";

export const metadata = {
  title: "Data Engineering for Fintech | Brilworks",
  description:
    "Data engineering for fintech companies. Audit-ready pipelines, real-time fraud signals, and compliance reporting built on Snowflake, Kafka, and dbt.",
  keywords:
    "fintech data engineering, audit-ready pipelines, fraud data feed, Kafka streaming, Snowflake fintech, dbt fintech, compliance reporting, transaction data platform",
  openGraph: {
    title: "Data Engineering for Fintech | Brilworks",
    type: "website",
    description:
      "We unify transaction, payments, KYC, and fraud data into one platform, with lineage compliance can trace from ingestion to report without touching production.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-for-fintech/`,
    siteName: "Brilworks",
  },
};

const Page = () => <DataEngineeringFintech />;
export default Page;
