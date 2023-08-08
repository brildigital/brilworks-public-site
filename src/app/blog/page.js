import React from "react";
import Blog from "../components/Blog/Blog";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Blog - Brilworks Software",
  description:
    "A collection of insights on different technologies, industries, web and software development, mobile app development from our brilliant minds.",
};

const page = () => {
  return (
    <>
      <Header />
      <Blog />
      <Footer />
    </>
  );
};

export default page;
