import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import PortfolioInnerRastrack from "@/app/components/Portfolio/PortfolioInnerRastrack";

export const metadata = {
  title: "Rastrack - Portfolio | Satellite Tracking | Brilworks Software",
  description:
    "Check out Brilworks's work for Rastrack. How we helped Rastrack to improve their fleet’s efficiency to update fleet information, predict cost and profit.",
  openGraph: {
    title: "Rastrack - Portfolio | Satellite Tracking | Brilworks Software",
    description:
      "Check out Brilworks's work for Rastrack. How we helped Rastrack to improve their fleet’s efficiency to update fleet information, predict cost and profit.",
    url: "https://www.brilworks.com/portfolio/rastrack/",
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: "https://www.brilworks.com/portfolio/rastrack/",
  },
};
const page = () => {
  return (
    <>
      <Header />
      <PortfolioInnerRastrack />

      <Footer />
    </>
  );
};

export default page;
