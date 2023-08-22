import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import PortfolioInnerEccocar from "@/app/components/Portfolio/PortfolioInnerEccocar";

export const metadata = {
  title: "Eccocar - Portfolio | Fleet Payment Solution |Brilworks Software",
  description:
    "Check out Brilworks's work for Eccocar. How we helped Eccocar to build a payment gateway system and integrated their platform with Stripe to collect payments.",
  openGraph: {
    title: "Eccocar - Portfolio | Fleet Payment Solution |Brilworks Software",
    description:
      "Check out Brilworks's work for Eccocar. How we helped Eccocar to build a payment gateway system and integrated their platform with Stripe to collect payments.",

    url: "https://brilworks.com/portfolio/eccocar/",
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: "https://www.brilworks.com/portfolio/eccocar/",
  },
};
const page = () => {
  return (
    <>
      <Header />
      <PortfolioInnerEccocar />

      <Footer />
    </>
  );
};

export default page;
