import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import PortfolioInnerRastrack from "@/app/components/Portfolio/PortfolioInnerRastrack";


export const metadata = {
  title: "Rastrack - Portfolio | Satellite Tracking | Brilworks Software",
  description:
    "Check out Brilworks's work for Rastrack. How we helped Rastrack to improve their fleet’s efficiency to update fleet information, predict cost and profit.",
};
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
