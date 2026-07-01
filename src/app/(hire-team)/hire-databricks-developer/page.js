import { generateBreadcrumb } from "@/app/components/lib/schemaCode";
import HireDatabricksDevelopers from "@/app/components/HireTeam/HireDatabricksDevelopers";

export const metadata = {
  title: "Hire Databricks Developers | Databricks Partner | Brilworks",
  description:
    "Hire certified Databricks engineers from a company-wide Databricks Partner. Lakehouse architecture, Delta Lake pipelines, MLflow ML platforms, Unity Catalog governance — certified engineers on every project.",
  openGraph: {
    title: "Hire Databricks Developers | Databricks Partner",
    description:
      "Hire certified Databricks engineers from a company-wide Databricks Partner. Lakehouse architecture, Delta Lake pipelines, MLflow ML platforms, Unity Catalog governance — certified engineers on every project.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-databricks-developer/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/og/hire-databricks-developer.webp`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Hire Databricks Developers | Databricks Partner",
    description:
      "Hire certified Databricks engineers from a company-wide Databricks Partner. Certified engineers on every project.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-databricks-developer/`,
  },
};

const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Hire Databricks Developers"),
        }}
      />
      <HireDatabricksDevelopers />
    </>
  );
};

export default page;
