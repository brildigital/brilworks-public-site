import AboutUs from "../components/About/AboutUs";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";

export const metadata = {
  title: "About Us | Software Development Company | Brilworks",
  description:
    "Brilworks is a top software development company with highly qualified professionals. We provide end-to-end solutions for software development services.",

  openGraph: {
    title: "About Us | Software Development Company | Brilworks",
    description:
      "Brilworks is a top software development company with highly qualified professionals. We provide end-to-end solutions for software development services.",
    url: "https://www.brilworks.com/about-us/",
    siteName: "Mobile App & Software Development Company | Brilworks",
    images: [
      {
        url: "https://www.brilworks.com/images/down-arrow.png",
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
    canonical: "https://www.brilworks.com/about-us/",
  },
};

const page = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Footer />
    </>
  );
};

export default page;
