import dynamic from "next/dynamic";
import { generateBreadcrumb } from "@/app/components/lib/schemaCode";

const HealthCare = dynamic(() =>
  import("@/app/components/Solution/Healthcare")
);

export const metadata = {
  title: "Healthcare Software Development Services",
  description:
    "Brilworks is a healthcare software developer that creates medical software for patient monitoring, telemedicine, and prescription apps on the EMR/EHR platform.",
  openGraph: {
    title: "Healthcare Software Development Services",
    description:
      "Brilworks is a healthcare software developer that creates medical software for patient monitoring, telemedicine, and prescription apps on the EMR/EHR platform.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}industry/healthcare-software-development/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/explore-arrow-01.png`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Healthcare Software Development Services",
    description:
      "Brilworks is a healthcare software developer that creates medical software for patient monitoring, telemedicine, and prescription apps on the EMR/EHR platform.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}industry/healthcare-software-development/`,
  },
};

const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb(
            "Healthcare Software Development Services"
          ),
        }}
      />
      <HealthCare />
    </>
  );
};

export default page;
