import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import PortfolioInnerTrackimo from "@/app/components/Portfolio/PortfolioInnerTrackimo";

export const metadata = {
  title: "Trackimo - Portfolio | Real-Time Tracking | Brilworks Software",
  description:
    "Check out Brilworks's work for Trackimo. How we helped Trackimo to develop a software solution for all the GPS/GSM/Wifi-based tracking approaches.",
};

const page = () => {
  return (
    <>
      <Header />
      <PortfolioInnerTrackimo />

      <Footer />
    </>
  );
};

export default page;
