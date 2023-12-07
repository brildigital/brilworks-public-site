import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import ReactJSTechnology from "../components/Technologies/ReactJSTechnology";
import { generateBreadcrumb } from "../components/lib/schemaCode";

export const metadata = {
  title: "Hire ReactJS Developers",
  description:
    "Hire ReactJS Developers for specialized development services including enterprise solutions, custom apps, front-end, migration, integration, and support.",
  openGraph: {
    title: "Hire ReactJS Developers",
    description:
      "Hire ReactJS Developers for specialized development services including enterprise solutions, custom apps, front-end, migration, integration, and support.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-reactjs-developer/`,
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
    title: "Hire ReactJS Developers",
    description:
      "Hire ReactJS Developers for specialized development services including enterprise solutions, custom apps, front-end, migration, integration, and support.",

    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-reactjs-developer/`,
  },
};

const page = () => {
  return (
    <>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Hire ReactJS Developers"),
        }}
      />
      <Header />
      <ReactJSTechnology />
      <Footer />
    </>
  );
};

export default page;
