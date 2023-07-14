import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import AutoSlidesFooter from "../components/Homepage/AutoSlidesFooter";
import OurProcessPage from "../components/OurProcess/OurProcessPage";

const page = () => {
  return (
    <>
      <Header />
      <OurProcessPage />
      <AutoSlidesFooter />
      <Footer />
    </>
  );
};

export default page;
