import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import NodejsTechnology from "../components/Technologies/NodejsTechnology";

export const metadata = {
  title: "Node JS Development Company | Hire Nodejs Developer",
  description:
    "Looking to hire node developers? Brilworks's node.js programmers provide Consulting, API Development & Integration, Plugin Development, and Migration services.",
  openGraph: {
    title: "Node JS Development Company | Hire Nodejs Developer",
    description:
      "Looking to hire node developers? Brilworks's node.js programmers provide Consulting, API Development & Integration, Plugin Development, and Migration services.",
    url: "/hire-nodejs-developer/",
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
    canonical: "https://brilworks.com/hire-nodejs-developer/",
  },
};

const page = () => {
  return (
    <>
      <Header />
      <NodejsTechnology />

      <Footer />
    </>
  );
};

export default page;
