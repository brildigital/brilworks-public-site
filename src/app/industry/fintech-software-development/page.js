import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import AutoSlidesFooter from "@/app/components/Homepage/AutoSlidesFooter";
import Fintech from "@/app/components/Solution/Fintech";

const page = () => {
  return (
    <>
      <Header />
      <Fintech />
      <AutoSlidesFooter />
      <Footer />
    </>
  );
};

export default page;
