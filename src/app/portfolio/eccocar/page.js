import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import PortfolioInnerEccocar from "@/app/components/Portfolio/PortfolioInnerEccocar";

export const metadata = {
  title: "Eccocar - Portfolio | Fleet Payment Solution |Brilworks Software",
  description:
    "Check out Brilworks's work for Eccocar. How we helped Eccocar to build a payment gateway system and integrated their platform with Stripe to collect payments.",
};
const page = () => {
  return (
    <>
      <Header />
      <PortfolioInnerEccocar />

      <Footer />
    </>
  );
};

export default page;
