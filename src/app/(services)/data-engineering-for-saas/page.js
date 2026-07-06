import DataEngineeringSaaS from "@/app/components/IndustryPage/DataEngineeringSaaS";

export const metadata = {
  title: "SaaS Data Engineering Services | Brilworks",
  description:
    "Multi-tenant warehouses, product analytics, and billing pipelines built for SaaS companies. Snowflake and Databricks certified. Talk to a data engineer.",
  keywords:
    "SaaS data engineering, multi-tenant warehouse, Snowflake SaaS, row-level security, product analytics pipeline, billing data accuracy, Databricks SaaS",
  openGraph: {
    title: "SaaS Data Engineering Services | Brilworks",
    type: "website",
    description:
      "Multi-tenant warehouses, product analytics, and billing pipelines built for SaaS companies. Snowflake and Databricks certified. Talk to a data engineer.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}data-engineering-for-saas/`,
    siteName: "Brilworks",
  },
};

const Page = () => <DataEngineeringSaaS />;
export default Page;
