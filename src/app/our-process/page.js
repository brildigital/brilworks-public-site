import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import OurProcessPage from "../components/OurProcess/OurProcessPage";

export const metadata = {
  title: "Our Process | How We Work | Brilworks Software",
  description:
    "We are a top software development firm that satisfies the demands of every client, from sourcing the right people to managing end-to-end projects.",
};

const page = () => {
  return (
    <>
      <Header />
      <OurProcessPage />
      <Footer />
    </>
  );
};

export default page;
