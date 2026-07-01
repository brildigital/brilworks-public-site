import { generateBreadcrumb } from "@/app/components/lib/schemaCode";
import HireMLOpsEngineers from "@/app/components/HireTeam/HireMLOpsEngineers";

export const metadata = {
  title: "Hire MLOps Engineers | ML Platform Engineering | Brilworks",
  description:
    "Hire MLOps engineers who operationalise machine learning — training pipelines, model serving, feature stores, drift monitoring, and CI/CD for ML. AWS & Databricks Partner. Models that work after launch.",
  openGraph: {
    title: "Hire MLOps Engineers | ML Platform Engineering",
    description:
      "Hire MLOps engineers who operationalise machine learning — training pipelines, model serving, feature stores, drift monitoring, and CI/CD for ML. Production ML platforms that stay reliable.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-mlops-engineer/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/og/hire-mlops-engineer.webp`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Hire MLOps Engineers | ML Platform Engineering",
    description:
      "MLOps engineers who take models from notebook to production and keep them reliable after launch.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-mlops-engineer/`,
  },
};

const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Hire MLOps Engineers"),
        }}
      />
      <HireMLOpsEngineers />
    </>
  );
};

export default page;
