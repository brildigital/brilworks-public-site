import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import FleetManagementNGPS from "@/app/components/Solution/FleetManagementNGPS";

export const metadata = {
  title: "GPS & Fleet Management Software Development Services | Brilworks",
  description:
    "Brilworks is a fleet and GPS tracking system development company specializing in custom & feature-rich solutions to manage vehicles, drivers, traffic & supply chain.",
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
