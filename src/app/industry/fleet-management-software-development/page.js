import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import FleetManagementNGPS from "@/app/components/Solution/FleetManagementNGPS";

export const metadata = {
  title: "GPS & Fleet Management Software Development Services | Brilworks",
  description:
    "Brilworks is a fleet and GPS tracking system development company specializing in custom & feature-rich solutions to manage vehicles, drivers, traffic & supply chain.",
  openGraph: {
    title: "GPS & Fleet Management Software Development Services | Brilworks",
    description:
      "Brilworks is a fleet and GPS tracking system development company specializing in custom & feature-rich solutions to manage vehicles, drivers, traffic & supply chain.",
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
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical:
      `${process.env.NEXT_PUBLIC_BASE_URL}industry/fleet-management-software-development/`,
  },
};

const page = () => {
  return (
    <>
      <Header />
      <FleetManagementNGPS />
      <Footer />
    </>
  );
};

export default page;
