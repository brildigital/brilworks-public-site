import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import AutoSlidesFooter from "../components/Homepage/AutoSlidesFooter";
import AWSTechnology from "../components/Technologies/AWSTechnology";


const page = () => {
  return (
    <>
      <Header />
      <AWSTechnology/>
      <AutoSlidesFooter />
      <Footer />
    </>
  );
};

export default page;
