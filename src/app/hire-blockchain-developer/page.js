import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import BlockchainTechnology from "../components/Technologies/BlockchainTechnology";

export const metadata = {
  title: "Blockchain Development Company | Hire Blockchain App Developer",
  description:
    "Hire Blockchain developers from Brilworks for blockchain app development services such as Consultation. MVP, DApp, Smart Contracts, NFT Marketplace & custom solutions.",
};

const page = () => {
  return (
    <>
      <Header />
      <BlockchainTechnology />
      <Footer />
    </>
  );
};

export default page;
