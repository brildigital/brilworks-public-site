import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import ReactJSTechnology from "../components/Technologies/ReactJSTechnology";

export const metadata = {
  title: "React JS Development Company | Hire ReactJS Developer",
  description:
    "We offer ReactJS development services for Enterprise, Custom Apps, Front-End, Migration & Integration, Support & Maintenance. Hire a React developer today.",
  openGraph: {
    title: "React JS Development Company | Hire ReactJS Developer",
    description:
      "We offer ReactJS development services for Enterprise, Custom Apps, Front-End, Migration & Integration, Support & Maintenance. Hire a React developer today.",
    url: "https://brilworks.com/hire-reactjs-developer/",
    siteName: "Mobile App & Software Development Company | Brilworks",
    images: [
      {
        url: "https://brilworks.com/images/1.png",
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
    canonical: "https://www.brilworks.com/hire-reactjs-developer/",
  },
};

const page = () => {
  return (
    <>
      <Header />
      <ReactJSTechnology />

      <Footer />
    </>
  );
};

export default page;
