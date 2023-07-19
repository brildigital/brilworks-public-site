import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import AutoSlidesFooter from "@/app/components/Homepage/AutoSlidesFooter";
import PortfolioInnerOrokii from "@/app/components/Portfolio/PortfolioInnerOrokii";

const page = () => {
  return (
    <>
      <Header />
      <PortfolioInnerOrokii />
      <AutoSlidesFooter />
      <Footer />
    </>
  );
};

export default page;
