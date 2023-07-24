import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import AutoSlidesFooter from "../components/Homepage/AutoSlidesFooter";
import ReactJSTechnology from "../components/Technologies/ReactJSTechnology";

const page = () => {
  return (
    <>
      <Header />
      <ReactJSTechnology />
      <AutoSlidesFooter />
      <Footer />
    </>
  );
};

export default page;
