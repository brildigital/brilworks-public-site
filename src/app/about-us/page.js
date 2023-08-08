import AboutUs from "../components/About/AboutUs";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";

export const metadata = {
  title: "About Us | Software Development Company | Brilworks",
  description:
    "Brilworks is a top software development company with highly qualified professionals. We provide end-to-end solutions for software development services.",
};

const page = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Footer />
    </>
  );
};

export default page;
