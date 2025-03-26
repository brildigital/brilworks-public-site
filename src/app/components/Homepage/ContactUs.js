"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { ScalableSolutionText } from "./BigText";
import { scrollEffect } from "../lib/commonFunction";
import { usePathname } from "next/navigation";

const HomepageContactForm = dynamic(() => import("./HomepageContactForm"));

const ContactUs = () => {
  const pathname = usePathname();
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);

    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);
  return (
    <div
      className={`container max-w-[1440px] mx-auto main-section-padding ${
        pathname !== "/" ? "!pt-0" : ""
      } `}
    >
      <ScalableSolutionText />
      <div className="blog-home mx-auto reveal">
        <HomepageContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
