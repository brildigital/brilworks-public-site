import DataEngineeringFintech from "@/app/components/IndustryPage/DataEngineeringFintech";

export const metadata = {
  title: "Fintech Data Engineering Services | Brilworks",
  description:
    "Audit-ready pipelines, real-time fraud signals, and compliance reporting for fintech platforms. Built on Snowflake, Kafka, and dbt. Talk to a data engineer.",
  keywords:
    "fintech data engineering, audit-ready pipelines, fraud data feed, Kafka streaming, Snowflake fintech, dbt fintech, compliance reporting, transaction data platform",
  openGraph: {
    title: "Fintech Data Engineering Services | Brilworks",
    type: "website",
    description:
      "Audit-ready pipelines, real-time fraud signals, and compliance reporting for fintech platforms. Built on Snowflake, Kafka, and dbt. Talk to a data engineer.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-for-fintech/`,
    siteName: "Brilworks",
  },
};

const Page = () => <DataEngineeringFintech />;
export default Page;
