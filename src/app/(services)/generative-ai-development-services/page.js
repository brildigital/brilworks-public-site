import GenerativeAIDevService from "@/app/components/Services/GenerativeAIDevService";
import LastUpdated from "@/app/components/Common/LastUpdated";
import { generateWebPageSchema } from "@/app/components/lib/schemaCode";

const LAST_UPDATED = "2026-04-23";

export const metadata = {
  title: "Generative AI Services | Brilworks",
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
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateWebPageSchema({
            title: "Generative AI Services | Brilworks",
            description:
              "Pioneer the future with Brilworks' generative AI development. Leverage cutting-edge AI to create innovative solutions that set your business apart.",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}generative-ai-development-services/`,
            dateModified: LAST_UPDATED,
          }),
        }}
      />
      <LastUpdated date={LAST_UPDATED} />
      <GenerativeAIDevService />
    </>
  );
};

export default page;
