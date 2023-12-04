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
  title: "Mobile App & Software Development Company",
  description:
    "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
  openGraph: {
    title: "Mobile App & Software Development Company",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Mobile App & Software Development Company",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/banner.jpg`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Mobile App & Software Development Company",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

const page = () => {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Brilworks",
    url: "https://www.brilworks.com",
    logo: "https://www.brilworks.com/images/logo.png",
    sameAs: [
      "https://www.facebook.com/brilwork",
      "https://www.linkedin.com/company/brilworks",
      "https://www.instagram.com/brilworkssoftware",
      "https://www.youtube.com/@brilworks",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "<sales@brilworks.com>",
    },
  };
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </head>
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
