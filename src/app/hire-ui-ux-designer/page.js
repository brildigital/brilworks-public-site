import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import UIUXTechnology from "../components/Technologies/UIUXTechnology";

export const metadata = {
  title: "UI UX Design Company | Hire Dedicated UI UX Designer",
  description:
    "Hire UI/UX designers from Brilworks for the stunning user experience & user interface designing services like Consulting, Strategy, Mockups, Wireframe and Prototyping.",
};

const page = () => {
  return (
    <>
      <Header />
      <UIUXTechnology />

      <Footer />
    </>
  );
};

export default page;
