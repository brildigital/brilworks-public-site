import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import AutoSlidesFooter from "@/app/components/Homepage/AutoSlidesFooter";
import PortfolioInnerVugo from "@/app/components/Portfolio/PortfolioInnerVugo";

const page = () => {
  return (
    <>
      <Header />
      <PortfolioInnerVugo />
      <AutoSlidesFooter />
      <Footer />
    </>
  );
};

export default page;
