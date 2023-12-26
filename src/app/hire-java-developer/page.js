import dynamic from "next/dynamic";
import { generateBreadcrumb } from "../components/lib/schemaCode";

const JavaTechnology = dynamic(() =>
  import("../components/Technologies/JavaTechnology")
);

export const metadata = {
  title: "Hire Java Developers",
  description:
    "Hire Java developers for seamless software development, and including expert consulting, web and app development, and Spring Core and Spring Boot expertise.",
  openGraph: {
    title: "Hire Java Developers",
    description:
      "Hire Java developers for seamless software development, and including expert consulting, web and app development, and Spring Core and Spring Boot expertise.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-java-developer/`,
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
