"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { SalesEmailText } from "./BigText";
import { scrollEffect } from "../lib/commonFunction";

const HomepageContactForm = dynamic(() => import("./HomepageContactForm"));

const ContactUs = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);

    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);
  return (
    <>
      <SalesEmailText />
      <div className="md:w-[90%] lg:w-[70%] w-[100%] blog-home pt-[16px] xl:pb-[128px] pb-[40px] mx-auto px-[15px] reveal">
        <HomepageContactForm />
      </div>
    </>
  );
};

export default ContactUs;
