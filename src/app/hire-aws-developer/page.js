import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import AWSTechnology from "../components/Technologies/AWSTechnology";

export const metadata = {
  title: "AWS Development Company | Hire AWS Certified Developers | Brilworks",
  description:
    "Brilworks' AWS development services contain Consulting, App Development, Cloud Migration, DevOps, and Managed Services. Hire AWS Lambda and Kinesis developers.",
};
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
