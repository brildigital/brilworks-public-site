import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import JavaTechnology from "../components/Technologies/JavaTechnology";

export const metadata = {
  title: "Java Development Company | Hire Trusted Java Experts",
  description:
    "Brilworks's Java software development services include Consulting, Web, App, Spring Core & Spring Boot. Hire dedicated Java developers.",
};

const page = () => {
  return (
    <>
      <Header />
      <JavaTechnology />
      <Footer />
    </>
  );
};

export default page;
