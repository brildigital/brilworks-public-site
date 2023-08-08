import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import NodejsTechnology from "../components/Technologies/NodejsTechnology";

export const metadata = {
  title: "Node JS Development Company | Hire Nodejs Developer",
  description:
    "Looking to hire node developers? Brilworks's node.js programmers provide Consulting, API Development & Integration, Plugin Development, and Migration services.",
};

const page = () => {
  return (
    <>
      <Header />
      <NodejsTechnology />

      <Footer />
    </>
  );
};

export default page;
