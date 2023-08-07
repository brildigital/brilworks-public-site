import Header from "../components/Header/Header";
import Blogs from "../components/Homepage/Blogs";
import Honors from "../components/Homepage/Honors";
import Brilliant from "../components/Homepage/Brilliant";
import ContactUs from "../components/Homepage/ContactUs";
import GameChanger from "../components/Homepage/GameChanger";
import ClientReviews from "../components/Homepage/ClientReviews";
import DomainWorking from "../components/Homepage/DomainWorking";
import Footer from "../components/Footer/index";
import ExtensionOfTeam from "../components/Homepage/ExtensionOfTeam";
import SeeingBelieving from "../components/Homepage/SeeingBelieving";
import { BestAdvocateText } from "../components/Homepage/BigText";
import Head from "next/head";

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
      <GameChanger />
      <Brilliant />
      <BestAdvocateText />
      <ClientReviews />
      <DomainWorking />
      <ExtensionOfTeam />
      <SeeingBelieving />
      <Honors />
      <Blogs />
      <ContactUs />
      <Footer />
    </>
  );
};

export default page;
