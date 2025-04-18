import KubernetesConsultingService from "../components/Services/KubernetesConsultingService";

export const metadata = {
  title: "Kubernetes Consulting Services | Brilworks",
  description:
    "Optimize your container orchestration with Brilworks' expert Kubernetes consulting. Scale efficiently, reduce downtime, and accelerate deployment for long-term success.",
  openGraph: {
    title: "Kubernetes Consulting Services",
    description:
      "Optimize your container orchestration with Brilworks' expert Kubernetes consulting. Scale efficiently, reduce downtime, and accelerate deployment for long-term success.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}kubernetes-consulting-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
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
  return <KubernetesConsultingService />;
};

export default page;
