import { generateBreadcrumb } from "@/app/components/lib/schemaCode";
import AdaloTechnology from "@/app/components/Technologies/AdaloTechnology";

export const metadata = {
  title: "Hire Adalo Developers | Brilworks",
  description:
    "Need an expert Adalo developer to build your app? Hire a skilled professional with 5 years of experience. Get a free quote today and turn your app idea into reality.",
  openGraph: {
    title: "Hire Adalo Developers",
    description:
      "Need an expert Adalo developer to build your app? Hire a skilled professional with 5 years of experience. Get a free quote today and turn your app idea into reality.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-aws-developer/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/adalo-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Hire Adalo Developers",
    description:
      "Need an expert Adalo developer to build your app? Hire a skilled professional with 5 years of experience. Get a free quote today and turn your app idea into reality.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-adalo-developer/`,
  },
};
const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Hire Adalo Developers"),
        }}
      />
      <AdaloTechnology />
    </>
  );
};

export default page;
