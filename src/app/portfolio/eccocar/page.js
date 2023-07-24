import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import AutoSlidesFooter from "@/app/components/Homepage/AutoSlidesFooter";
import PortfolioInnerEccocar from "@/app/components/Portfolio/PortfolioInnerEccocar";

const page = () => {
  return (
    <>
      <Header />
      <PortfolioInnerEccocar />
      <AutoSlidesFooter />
      <Footer />
    </>
  );
};

export default page;
