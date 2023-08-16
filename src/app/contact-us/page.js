import ContactUs from "../components/Contact-us/ContactUs";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";

export const metadata = {
  title: "Contact Us | Web and Mobile App Development | Brilworks",
  description:
    "Contact us now for your web and mobile app development needs. Our tech team will come back to you within 24 hours.",
  openGraph: {
    title: "Contact Us | Web and Mobile App Development | Brilworks",
    description:
      "Contact us now for your web and mobile app development needs. Our tech team will come back to you within 24 hours.",
    url: "/contact-us/",
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: "https://brilworks.com/contact-us/",
  },
};
const page = () => {
  return (
    <>
      <Header />
      <ContactUs />
      <Footer />
    </>
  );
};

export default page;
