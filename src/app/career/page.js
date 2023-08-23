import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Career from "../components/Career/Career";

export const metadata = {
  title: "Career | Join the World of Brilliance | Brilworks Software",
  description:
    "Explore the current open positions at Brilworks. Join the team of brilliant minds by sending your application today! Connect at hello@brilworks.com for any query.",
  openGraph: {
    title: "Career | Join the World of Brilliance | Brilworks Software",
    description:
      "Explore the current open positions at Brilworks. Join the team of brilliant minds by sending your application today! Connect at hello@brilworks.com for any query.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}career/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}career/`,
  },
};

const page = () => {
  return (
    <>
      <Header />
      <Career />
      <Footer />
    </>
  );
};

export default page;
