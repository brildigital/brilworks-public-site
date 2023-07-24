import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import AutoSlidesFooter from "../components/Homepage/AutoSlidesFooter";
import UIUXTechnology from "../components/Technologies/UIUXTechnology";

const page = () => {
  return (
    <>
      <Header />
      <UIUXTechnology />
      <AutoSlidesFooter />
      <Footer />
    </>
  );
};

export default page;
