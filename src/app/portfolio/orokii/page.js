import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import PortfolioInnerOrokii from "@/app/components/Portfolio/PortfolioInnerOrokii";

export const metadata = {
  title: "Orokii - Portfolio | Cross-Border Payments | Brilworks Software",
  description:
    "Check out Brilworks's work for Orokii. How we helped Orokii to build a custom fintech application with faster & secure transactions.",
  openGraph: {
    title: "Orokii - Portfolio | Cross-Border Payments | Brilworks Software",
    description:
      "Check out Brilworks's work for Orokii. How we helped Orokii to build a custom fintech application with faster & secure transactions.",

    url: "https://brilworks.com/portfolio/orokii/",
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: "https://www.brilworks.com/portfolio/orokii/",
  },
};

const page = () => {
  return (
    <>
      <Header />
      <PortfolioInnerOrokii />
      <Footer />
    </>
  );
};

export default page;
