import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import UIUXTechnology from "../components/Technologies/UIUXTechnology";
import { generateBreadcrumb } from "../components/lib/schemaCode";

export const metadata = {
  title: "Hire UI UX Designers",
  description:
    "Transform your user experience with Brilworks skilled UI/UX designers specializing in Consulting, Strategy, Mockups, and Prototyping services.",
  openGraph: {
    title: "Hire UI UX Designers",
    description:
      "Transform your user experience with Brilworks skilled UI/UX designers specializing in Consulting, Strategy, Mockups, and Prototyping services.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-ui-ux-designer/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
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
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Hire UI UX Designers"),
        }}
      />
      <Header />
      <UIUXTechnology />
      <Footer />
    </>
  );
};

export default page;
