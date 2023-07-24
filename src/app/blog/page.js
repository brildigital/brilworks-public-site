import React from "react";
import Blog from "../components/Blog/Blog";
import Header from "../components/Header/Header";
import AutoSlidesFooter from "../components/Homepage/AutoSlidesFooter";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <Header />
      <Blog />
      <AutoSlidesFooter />
      <Footer />
    </>
  );
};

export default page;
