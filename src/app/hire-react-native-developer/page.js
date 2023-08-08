import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import ReactNativeTechnology from "../components/Technologies/ReactNativeTechnology";

export const metadata = {
  title: "React Native Development Company | Hire React Native App Developer",
  description:
    "React Native app development services include Consultation, Cross-Platform, Migration, Maintenance & Support, Testing & Audit. Hire React Native developer now.",
};

const page = () => {
  return (
    <>
      <Header />
      <ReactNativeTechnology />
      <Footer />
    </>
  );
};

export default page;
