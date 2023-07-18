import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import AutoSlidesFooter from "@/app/components/Homepage/AutoSlidesFooter";
import PortfolioInnerVugo from "@/app/components/Portfolio/PortfolioInnerVugo";
import Link from "next/link";

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
