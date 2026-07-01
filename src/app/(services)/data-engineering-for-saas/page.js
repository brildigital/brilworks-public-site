import DataEngineeringSaaS from "@/app/components/IndustryPage/DataEngineeringSaaS";

export const metadata = {
  title: "Data Engineering for SaaS | Brilworks",
  description:
    "Data engineering for SaaS companies. Multi-tenant pipelines, tenant-isolated warehouses, and billing data that never drifts. Snowflake and Databricks partner.",
  keywords:
    "SaaS data engineering, multi-tenant warehouse, Snowflake SaaS, row-level security, product analytics pipeline, billing data accuracy, Databricks SaaS",
  openGraph: {
    title: "Data Engineering for SaaS | Brilworks",
    type: "website",
    description:
      "We pull data scattered across your CRM, billing, product, and support tools into one warehouse — without one tenant ever seeing another tenant's numbers.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-for-saas/`,
    siteName: "Brilworks",
  },
};

const Page = () => <DataEngineeringSaaS />;
export default Page;
