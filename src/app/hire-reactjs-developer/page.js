import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import AutoSlidesFooter from "../components/Homepage/AutoSlidesFooter";
import ReactTechnology from "../components/Technologies/ReactTechnology";

const page = () => {
  return (
    <>
      <Header />
      <ReactTechnology />
      <AutoSlidesFooter />
      <Footer />
    </>
  );
};

export default page;
