import GenerativeAIDevService from "../components/Services/GenerativeAIDevService";

export const metadata = {
  title: "Generative AI Services",
  description:
    "Pioneer the future with Brilworks' generative AI development. Leverage cutting-edge AI to create innovative solutions that set your business apart.",
  openGraph: {
    title: "Generative AI Services",
    description:
      "Pioneer the future with Brilworks' generative AI development. Leverage cutting-edge AI to create innovative solutions that set your business apart.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}generative-ai-development-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/generative-ai-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Generative AI Services",
    description:
      "Pioneer the future with Brilworks' generative AI development. Leverage cutting-edge AI to create innovative solutions that set your business apart.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}generative-ai-development-services/`,
  },
};

const page = () => {
  return (
    <div className="!bg-colorWhite">
      <GenerativeAIDevService />
    </div>
  );
};

export default page;
