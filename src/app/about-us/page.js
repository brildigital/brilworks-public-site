import AboutUs from "../components/About/AboutUs";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import AutoSlidesFooter from "../components/Homepage/AutoSlidesFooter";

const page = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <AutoSlidesFooter />
      <Footer />
    </>
  );
};

export default page;
