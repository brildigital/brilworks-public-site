"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { SalesEmailText, ScalableSolutionText } from "./BigText";
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
    <div className="main-section-padding">
      <ScalableSolutionText />
      <div className="md:w-[90%] lg:w-[70%] w-[100%] blog-home mx-auto reveal">
        <HomepageContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
