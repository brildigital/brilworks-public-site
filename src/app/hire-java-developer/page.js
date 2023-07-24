import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import AutoSlidesFooter from "../components/Homepage/AutoSlidesFooter";
import JavaTechnology from "../components/Technologies/JavaTechnology";

const page = () => {
  return (
    <>
      <Header />
      <JavaTechnology />
      <AutoSlidesFooter />
      <Footer />
    </>
  );
};

export default page;
