import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import AutoSlidesFooter from "@/app/components/Homepage/AutoSlidesFooter";
import HealthCare from "@/app/components/Solution/Healthcare";

const page = () => {
  return (
    <>
      <Header />
      <HealthCare />
      <AutoSlidesFooter />
      <Footer />
    </>
  );
};

export default page;
