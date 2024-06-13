import KubernetesConsultingService from "../components/Services/KubernetesConsultingService";

export const metadata = {
  title: "Kubernetes Consulting Services",
  description:
    "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
  openGraph: {
    title: "Kubernetes Consulting Services",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
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
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}kubernetes-consulting-services/`,
  },
};

const page = () => {
  return (
    <div className="!bg-colorWhite">
      <KubernetesConsultingService />
    </div>
  );
};

export default page;
