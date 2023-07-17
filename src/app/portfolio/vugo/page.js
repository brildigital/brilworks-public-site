import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import AutoSlidesFooter from "@/app/components/Homepage/AutoSlidesFooter";
import PortfolioInner from "@/app/components/Portfolio/PortfolioInner";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Header />
      <PortfolioInner />
      <AutoSlidesFooter />
      <Footer />
    </>
  );
};

export default page;
