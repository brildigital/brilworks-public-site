"use client";
import { useEffect } from "react";
import { SalesEmailText } from "./BigText";
import HomepageContactForm from "./HomepageContactForm";
import { scrollEffect } from "../lib/commonfunction";

const ContactUs = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);
  return (
    <>
      <SalesEmailText />
      <div className="md:w-[70%] w-[100%] blog-home pt-[16px] xl:pb-[128px] pb-[40px] mx-auto px-[15px] reveal">
        <HomepageContactForm />
      </div>
    </>
  );
};

export default ContactUs;
