import { generateBreadcrumb } from "@/app/components/lib/schemaCode";
import ECommerceSolution from "@/app/components/Solution/ECommerceSolution";

export const metadata = {
  title: "E-commerce App Development Company | Brilworks",
  description:
    "Build scalable, user-friendly E-commerce apps tailored to your business goals. Our expert E-commerce app development services cover everything from custom UI to secure payments and seamless integrations.",
  openGraph: {
    title: "E-commerce App Development Company | Brilworks",
    description:
      "Build scalable, user-friendly E-commerce apps tailored to your business goals. Our expert E-commerce app development services cover everything from custom UI to secure payments and seamless integrations.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}industry/e-commerce-app-development/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/e-commerce-industry-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "E-commerce App Development Company | Brilworks",
    description:
      "Build scalable, user-friendly E-commerce apps tailored to your business goals. Our expert E-commerce app development services cover everything from custom UI to secure payments and seamless integrations.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}industry/e-commerce-app-development/`,
  },
};

const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("E-commerce App Development Company"),
        }}
      />
      <ECommerceSolution />
    </>
  );
};

export default page;
