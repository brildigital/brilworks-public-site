import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import AutoSlidesFooter from "../components/Homepage/AutoSlidesFooter";
import AWSTechnology from "../components/Technologies/AWSTechnology";

const page = () => {
  return (
    <>
      <Head>
        <title>
          iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple
        </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      <Header />
      <AWSTechnology />

      <Footer />
    </>
  );
};

export default page;
