import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import FleetManagementNGPS from "@/app/components/Solution/FleetManagementNGPS";
import { generateBreadcrumb } from "@/app/components/lib/schemaCode";

export const metadata = {
  title: "Fleet Management Software Development Services",
  description:
    "Need custom fleet management software? Brilworks provides specialised fleet management software development services and operations and improves efficiency.",
  openGraph: {
    title: "Fleet Management Software Development Services",
    description:
      "Need custom fleet management software? Brilworks provides specialised fleet management software development services and operations and improves efficiency.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}industry/fleet-management-software-development/`,
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
    title: "Fleet Management Software Development Services",
    description:
      "Need custom fleet management software? Brilworks provides specialised fleet management software development services and operations and improves efficiency.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}industry/fleet-management-software-development/`,
  },
};

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb(
            "Fleet Manangement Software Development Company"
          ),
        }}
      />
      <Header />
      <FleetManagementNGPS />
      <Footer />
    </>
  );
};

export default page;
