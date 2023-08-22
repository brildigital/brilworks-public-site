import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import AWSTechnology from "../components/Technologies/AWSTechnology";

export const metadata = {
  title: "AWS Development Company | Hire AWS Certified Developers | Brilworks",
  description:
    "Brilworks' AWS development services contain Consulting, App Development, Cloud Migration, DevOps, and Managed Services. Hire AWS Lambda and Kinesis developers.",
  openGraph: {
    title:
      "AWS Development Company | Hire AWS Certified Developers | Brilworks",
    description:
      "Brilworks' AWS development services contain Consulting, App Development, Cloud Migration, DevOps, and Managed Services. Hire AWS Lambda and Kinesis developers.",
    url: "https://brilworks.com/hire-aws-developer/",
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
    canonical: "https://www.brilworks.com/hire-aws-developer/",
  },
};
const page = () => {
  return (
    <>
      <Header />
      <AWSTechnology />

      <Footer />
    </>
  );
};

export default page;
