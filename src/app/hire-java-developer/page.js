import { generateBreadcrumb } from "../components/lib/schemaCode";
import JavaTechnology from "../components/Technologies/JavaTechnology";

export const metadata = {
  title: "Hire Java Developers | Brilworks",
  description:
    "Hire Java developers for seamless software development, and including expert consulting, web and app development, and Spring Core and Spring Boot expertise.",
  openGraph: {
    title: "Hire Java Developers",
    description:
      "Hire Java developers for seamless software development, and including expert consulting, web and app development, and Spring Core and Spring Boot expertise.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-java-developer/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/java-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Hire Java Developers",
    description:
      "Hire Java developers for seamless software development, and including expert consulting, web and app development, and Spring Core and Spring Boot expertise.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-java-developer/`,
  },
};

const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Hire Java Developers"),
        }}
      />
      <JavaTechnology />
    </>
  );
};

export default page;
