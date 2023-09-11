import React from "react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import Blog from "@/app/components/Blog/Blog";

export const metadata = {
  title: "Blog - Brilworks Software",
  description:
    "A collection of insights on different technologies, industries, web and software development, mobile app development from our brilliant minds.",
  openGraph: {
    title: "Blog - Brilworks Software",
    description:
      "A collection of insights on different technologies, industries, web and software development, mobile app development from our brilliant minds.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}blog/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}blog/`,
  },
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
