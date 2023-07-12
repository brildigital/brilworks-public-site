import Header from "../components/Header/Header";
import GameChanger from "../components/Homepage/GameChanger";
import Brilliant from "../components/Homepage/Brilliant";
import ClientReviews from "../components/Homepage/ClientReviews";
import DomainWorking from "../components/Homepage/DomainWorking";
import ExtensionOfTeam from "../components/Homepage/ExtensionOfTeam";
import SeeingBelieving from "../components/Homepage/SeeingBelieving";
import Honors from "../components/Homepage/Honors";
import Blogs from "../components/Homepage/Blogs";
import AutoSlidesFooter from "../components/Homepage/AutoSlidesFooter";
import HomePageFooter from "../components/Homepage/HomePageFooter";
import ContactUs from "../components/Homepage/ContactUs";

const page = () => {
  return (
    <>
      <Header />
      <GameChanger />
      <Brilliant />
      <ClientReviews />
      <DomainWorking />
      <ExtensionOfTeam />
      <SeeingBelieving />
      <Honors />
      <Blogs />
      <ContactUs />
      <AutoSlidesFooter />
      <HomePageFooter />
    </>
  );
};

export default page;
