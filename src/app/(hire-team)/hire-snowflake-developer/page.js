import { generateBreadcrumb } from "@/app/components/lib/schemaCode";
import HireSnowflakeDevelopers from "@/app/components/HireTeam/HireSnowflakeDevelopers";

export const metadata = {
  title: "Hire Snowflake Developers | Snowflake Partner | Brilworks",
  description:
    "Hire certified Snowflake developers from a company-wide Snowflake Partner. Data warehouse design, dbt analytics engineering, migration, performance tuning, and governance — certified engineers on every engagement.",
  openGraph: {
    title: "Hire Snowflake Developers | Snowflake Partner",
    description:
      "Hire certified Snowflake developers from a company-wide Snowflake Partner. Data warehouse design, dbt analytics engineering, migration, performance tuning, and governance — certified engineers on every engagement.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-snowflake-developer/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/og/hire-snowflake-developer.webp`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Hire Snowflake Developers | Snowflake Partner",
    description:
      "Hire certified Snowflake developers from a company-wide Snowflake Partner. Certified engineers on every engagement.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-snowflake-developer/`,
  },
};

const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Hire Snowflake Developers"),
        }}
      />
      <HireSnowflakeDevelopers />
    </>
  );
};

export default page;
