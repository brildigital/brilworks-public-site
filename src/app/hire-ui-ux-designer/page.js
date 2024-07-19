import { generateBreadcrumb } from "../components/lib/schemaCode";
import UIUXTechnology from "../components/Technologies/UIUXTechnology";

export const metadata = {
  title: "Hire UI UX Designers | Brilworks",
  description:
    "Transform your user experience with Brilworks skilled UI/UX designers specializing in Consulting, Strategy, Mockups, and Prototyping services.",
  openGraph: {
    title: "Hire UI UX Designers",
    description:
      "Transform your user experience with Brilworks skilled UI/UX designers specializing in Consulting, Strategy, Mockups, and Prototyping services.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-ui-ux-designer/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/1.png`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Hire UI UX Designers",
    description:
      "Transform your user experience with Brilworks skilled UI/UX designers specializing in Consulting, Strategy, Mockups, and Prototyping services.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-ui-ux-designer/`,
  },
};

const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Hire UI UX Designers"),
        }}
      />
      <UIUXTechnology />
    </>
  );
};

export default page;
