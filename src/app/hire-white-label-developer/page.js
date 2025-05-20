import { generateBreadcrumb } from "../components/lib/schemaCode";
import WhiteLabelTechnology from "../components/Technologies/WhiteLabelTechnology";

export const metadata = {
  title: "White Label App Development Services | Brilworks",
  description:
    "Build and deploy an app in 2-4 weeks with Brilworks' app development services. We are a leading white label development company, helping you build custom mobile and desktop apps faster.",
  openGraph: {
    title: "White Label App Development Services",
    description:
      "Build and deploy an app in 2-4 weeks with Brilworks' app development services. We are a leading white label development company, helping you build custom mobile and desktop apps faster.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-white-label-developer/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/white-label-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "White Label App Development Services",
    description:
      "Build and deploy an app in 2-4 weeks with Brilworks' app development services. We are a leading white label development company, helping you build custom mobile and desktop apps faster.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-white-label-developer/`,
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-white-label-developer/`,
  },
};

const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Hire White Label Developers"),
        }}
      />
      <WhiteLabelTechnology />
    </>
  );
};

export default page;
