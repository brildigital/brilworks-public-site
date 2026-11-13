import KubernetesConsultingService from "@/app/components/Services/KubernetesConsultingService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import {
  generateWebPageSchema,
  generateServiceSchemaFromMetadata,
} from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-04-23";

export const metadata = {
  title: "Kubernetes Consulting Services | Brilworks",
  description:
    "Optimize your container orchestration with Brilworks' expert Kubernetes consulting. Scale efficiently, reduce downtime, and accelerate deployment for long-term success.",
  openGraph: {
    title: "Kubernetes Consulting Services",
    description:
      "Optimize your container orchestration with Brilworks' expert Kubernetes consulting. Scale efficiently, reduce downtime, and accelerate deployment for long-term success.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}kubernetes-consulting-services/`,
    siteName: "Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/kubernetes-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Kubernetes Consulting Services",
    description:
      "Optimize your container orchestration with Brilworks' expert Kubernetes consulting. Scale efficiently, reduce downtime, and accelerate deployment for long-term success.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}kubernetes-consulting-services/`,
  },
};

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateServiceSchemaFromMetadata(metadata),
        }}
      />
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateWebPageSchema({
            title: "Kubernetes Consulting Services | Brilworks",
            description:
              "Optimize your container orchestration with Brilworks' expert Kubernetes consulting. Scale efficiently, reduce downtime, and accelerate deployment for long-term success.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}kubernetes-consulting-services/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <KubernetesConsultingService />
    </>
  );
};

export default page;
