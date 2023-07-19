import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import AutoSlidesFooter from "@/app/components/Homepage/AutoSlidesFooter";
import FleetManagementNGPS from "@/app/components/Solution/FleetManagementNGPS";

const page = () => {
  return (
    <>
      <Header />
      <FleetManagementNGPS />
      <AutoSlidesFooter />
      <Footer />
    </>
  );
};

export default page;
