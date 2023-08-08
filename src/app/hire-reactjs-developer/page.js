import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import ReactJSTechnology from "../components/Technologies/ReactJSTechnology";

export const metadata = {
  title: "React JS Development Company | Hire ReactJS Developer",
  description:
    "We offer ReactJS development services for Enterprise, Custom Apps, Front-End, Migration & Integration, Support & Maintenance. Hire a React developer today.",
};

const page = () => {
  return (
    <>
      <Header />
      <ReactJSTechnology />

      <Footer />
    </>
  );
};

export default page;
