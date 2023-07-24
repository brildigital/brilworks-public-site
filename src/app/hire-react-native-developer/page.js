import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import AutoSlidesFooter from "../components/Homepage/AutoSlidesFooter";
import ReactNativeTechnology from "../components/Technologies/ReactNativeTechnology";

const page = () => {
  return (
    <>
      <Header />
      <ReactNativeTechnology />
      <AutoSlidesFooter />
      <Footer />
    </>
  );
};

export default page;
