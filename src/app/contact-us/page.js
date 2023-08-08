import Head from "next/head";
import ContactUs from "../components/Contact-us/ContactUs";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";

export const metadata = {
  title: "Contact Us | Web and Mobile App Development | Brilworks",
  description:
    "Contact us now for your web and mobile app development needs. Our tech team will come back to you within 24 hours.",
};
const page = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <Header />
      <ContactUs />
      <Footer />
    </>
  );
};

export default page;
