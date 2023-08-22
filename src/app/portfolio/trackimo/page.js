import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import PortfolioInnerTrackimo from "@/app/components/Portfolio/PortfolioInnerTrackimo";

export const metadata = {
  title: "Trackimo - Portfolio | Real-Time Tracking | Brilworks Software",
  description:
    "Check out Brilworks's work for Trackimo. How we helped Trackimo to develop a software solution for all the GPS/GSM/Wifi-based tracking approaches.",
  openGraph: {
    title: "Trackimo - Portfolio | Real-Time Tracking | Brilworks Software",
    description:
      "Check out Brilworks's work for Trackimo. How we helped Trackimo to develop a software solution for all the GPS/GSM/Wifi-based tracking approaches.",
    url: "https://www.brilworks.com/portfolio/trackimo/",
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: "https://www.brilworks.com/portfolio/trackimo/",
  },
};

const page = () => {
  return (
    <>
      <Header />
      <PortfolioInnerTrackimo />
      <Footer />
    </>
  );
};

export default page;
