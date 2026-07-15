import { generateBreadcrumb } from "@/app/components/lib/schemaCode";
import HireAnalyticsEngineers from "@/app/components/HireTeam/HireAnalyticsEngineers";

export const metadata = {
  title: "Hire Analytics Engineers | dbt & Snowflake Partner | Brilworks",
  description:
    "Hire analytics engineers who build the dbt transformation layer, semantic layer, and data models that make dashboards trustworthy. Snowflake & Databricks Partner. dbt Core and dbt Cloud certified.",
  openGraph: {
    title: "Hire Analytics Engineers | dbt & Snowflake Partner",
    description:
      "Hire analytics engineers who build the dbt transformation layer, semantic layer, and data models that make dashboards trustworthy and self-serve possible.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-analytics-engineer/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/og/hire-analytics-engineer.webp`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Hire Analytics Engineers | dbt & Snowflake Partner",
    description:
      "Analytics engineers who build dbt transformation layers, semantic layers, and trusted data models.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-analytics-engineer/`,
  },
};

const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Hire Analytics Engineers"),
        }}
      />
      <HireAnalyticsEngineers />
    </>
  );
};

export default page;
