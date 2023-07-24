import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import AutoSlidesFooter from "../components/Homepage/AutoSlidesFooter";
import BlockchainTechnology from "../components/Technologies/BlockchainTechnology";

const page = () => {
  return (
    <>
      <Header />
      <BlockchainTechnology />
      <AutoSlidesFooter />
      <Footer />
    </>
  );
};

export default page;
