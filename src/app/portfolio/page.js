import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import AutoSlidesFooter from "../components/Homepage/AutoSlidesFooter";
import Portfolio from "../components/Portfolio/Portfolio";

const page = () => {
  return (
    <div>
      <Header />
      <Portfolio />
      <AutoSlidesFooter />
      <Footer />
    </div>
  );
};

export default page;
