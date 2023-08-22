import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import PortfolioInnerVugo from "@/app/components/Portfolio/PortfolioInnerVugo";

export const metadata = {
  title: "Vugo - Portfolio | Car Advertising | Brilworks Software",
  description:
    "Check out Brilworks's work for Vugo. How we helped Vugo to create a unique in-car advertising application and increase in driver earnings and advertiser queries.",
  openGraph: {
    title: "Vugo - Portfolio | Car Advertising | Brilworks Software",
    description:
      "Check out Brilworks's work for Vugo. How we helped Vugo to create a unique in-car advertising application and increase in driver earnings and advertiser queries.",
    url: "https://www.brilworks.com/portfolio/vugo/",
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: "https://www.brilworks.com/portfolio/vugo/",
  },
};

const page = () => {
  return (
    <>
      <Header />
      <PortfolioInnerVugo />
      <Footer />
    </>
  );
};

export default page;
