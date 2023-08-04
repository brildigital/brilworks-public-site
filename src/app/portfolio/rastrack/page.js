import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import AutoSlidesFooter from "@/app/components/Homepage/AutoSlidesFooter";
import PortfolioInnerRastrack from "@/app/components/Portfolio/PortfolioInnerRastrack";

const page = () => {
  return (
    <>
      <Header />
      <PortfolioInnerRastrack />

      <Footer />
    </>
  );
};

export default page;
