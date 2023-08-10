import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import BlockchainTechnology from "../components/Technologies/BlockchainTechnology";

export const metadata = {
  title: "Blockchain Development Company | Hire Blockchain App Developer",
  description:
    "Hire Blockchain developers from Brilworks for blockchain app development services such as Consultation. MVP, DApp, Smart Contracts, NFT Marketplace & custom solutions.",
  openGraph: {
    title: "Blockchain Development Company | Hire Blockchain App Developer",
    description:
      "Hire Blockchain developers from Brilworks for blockchain app development services such as Consultation. MVP, DApp, Smart Contracts, NFT Marketplace & custom solutions.",
    url: "/hire-blockchain-developer/",
    siteName: "Mobile App & Software Development Company | Brilworks",
    images: [
      {
        url: "/images/1.png",
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: "https://brilworks.com/hire-blockchain-developer/",
  },
};

const page = () => {
  return (
    <>
      <Header />
      <BlockchainTechnology />
      <Footer />
    </>
  );
};

export default page;
