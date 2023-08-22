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

export const metadata = {
  title: "Mobile App & Software Development Company | Brilworks",
  description:
    "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
  openGraph: {
    title: "Mobile App & Software Development Company | Brilworks",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    url: "https://www.brilworks.com/",
    siteName: "Mobile App & Software Development Company | Brilworks",
    images: [
      {
        url: "https://www.brilworks.com/images/banner.jpg",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: "https://www.brilworks.com/",
  },
};

const page = () => {
  return (
    <>
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
