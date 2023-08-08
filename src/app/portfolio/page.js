import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import Portfolio from "../components/Portfolio/Portfolio";

export const metadata = {
  title: "Portfolio - Web and Mobile App Development | Brilworks",
  description:
    "Our experienced team has delivered a wide range of projects. Check out our portfolio of web & mobile development projects from diverse sectors.",
};

const page = () => {
  return (
    <div>
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default page;
