"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import { usePathname } from "next/navigation";
import Heading from "../HTMLComponents/Heading";

const ContactFormV2 = dynamic(() => import("./ContactFormV2"));

const ContactUs = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);

    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);
  return (
    <div className="bg-themeLight">
      <div className={`container max-w-[1280px] mx-auto main-section-padding`}>
        <Heading
          type="h2"
          className="lg:!text-[34px] md:!text-3xl !text-2xl mb-5"
          text="What Can We Help You With?"
        />
        <p className="md:text-lg text-base lg:!mb-7.5 !mb-5">
          If you are interested in finding out more about how we can help your
          organization, please provide your details and project requirements.
          We'll get back to you soon.
        </p>
        <div className="reveal">
          <ContactFormV2 />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
