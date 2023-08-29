import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Kinderland from "../components/Kinderland/Kinderland";

const page = () => {
  return (
    <>
      {process.env.VERCEL_ENV === "production" ? (
        <head>
          <meta name="robots" content="noindex, nofollow" />
        </head>
      ) : null}
      <Header />
      <Kinderland />
      <Footer />
    </>
  );
};

export default page;
