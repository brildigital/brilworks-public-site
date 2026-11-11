import { generateBreadcrumb } from "@/app/components/lib/schemaCode";
import HireEngineers from "@/app/components/HireTeam/HireEngineers";
import { generateServiceSchemaFromMetadata } from "@/app/components/lib/schemaCode";

export const metadata = {
  title: "Hire Dedicated Engineers | Java, Node.js, React, AWS & More | Brilworks",
  description:
    "Hire pre-vetted dedicated engineers across Java, Node.js, React.js, React Native, AWS, UI/UX, and Blockchain. On-demand or long-term engagement. NDA on request.",
  openGraph: {
    title: "Hire Dedicated Engineers | Brilworks",
    description:
      "Hire pre-vetted dedicated engineers across Java, Node.js, React.js, React Native, AWS, UI/UX, and Blockchain. On-demand or long-term engagement.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-engineers/`,
    siteName: "Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/hero-pg-main.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Hire Dedicated Engineers | Brilworks",
    description:
      "Hire pre-vetted dedicated engineers across Java, Node.js, React.js, React Native, AWS, UI/UX, and Blockchain.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-engineers/`,
  },
};

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateServiceSchemaFromMetadata(metadata),
        }}
      />
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Hire Engineers"),
        }}
      />
      <HireEngineers />
    </>
  );
};

export default page;
