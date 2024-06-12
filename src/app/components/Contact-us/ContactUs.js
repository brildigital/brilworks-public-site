"use client";
import { useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import ContactUsEmailForm from "./ContactUsEmailForm";

const Svgs = dynamic(() => import("../Svgs"));
const ClientReviews = dynamic(() => import("../Homepage/ClientReviews"));

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
      <section className="flex items-start flex-col md:flex-row gap-4 mt-12 md:mt-0">
        <div className="lg:pr-[5rem] lg:pl-[8rem] md:!pt-[6rem] md:p-12 !pt-16 p-4 md:basis-6/12 basis-full">
          <div className="home_sec2_txt3 contact_bold xl:text-[48px] lg:text-[36px] md:text-[32px] sm:text-[24px] text-[22px] ">
            <h2 className="uppercase m-0 contact_bold-head">
              Let’s discuss your project
            </h2>
          </div>
          <div className="noText md:pt-2">
            <ul className="!pl-0">
              <li>No strings attached.</li>
              <li>No obligation to hire.</li>
              <li>No commitment from you.</li>
            </ul>
          </div>
          <div className="contact_form inquiry">
            <ContactUsEmailForm inquiryForm={true} />
          </div>
        </div>

        <div className="lg:pr-[5rem] lg:pl-[8rem] md:!pt-24 md:p-12 !pt-8 p-4 md:basis-6/12 basis-full bg-themeColor">
          <div className="drop_title home_sec2_txt3 solutions contact_bold xl:text-[48px] lg:text-[36px] md:text-[32px] sm:text-[24px] text-[22px]">
            <h2 className="!text-colorWhite font-extrabold uppercase !w-full md:py-8">
              Ready to scale your business to new heights?
            </h2>
          </div>
          <div className="ready_content">
            <div className="home_sec2_txt4 pt-2">
              <p className="!text-colorWhite !text-left md:!text-xl !text-base p-style">
                Just fill out the form, and let our experts look after the rest.
                Here’s what will happen next:
              </p>
            </div>
            <div className="ready_content_list home_sec2_txt4 ">
              <p className="font-bold md:!text-2xl !text-xl  !text-left">
                1. Initiating Contact
              </p>
              <p className="white_text !text-left md:!text-xl !text-base p-style">
                We will contact you within 24 business hours.
              </p>
            </div>
            <div className="ready_content_list home_sec2_txt4">
              <p className="white_text !text-left md:!text-2xl !text-xl font-bold">
                2. Share Your Requirement
              </p>
              <p className="white_text !text-left md:!text-xl !text-base p-style">
                Tell us exactly what you’re looking for and how would you like
                our team to help you further. Our technical team will evaluate
                your requirement and reach back to you with a project plan
              </p>
            </div>
            <div className="ready_content_list home_sec2_txt4">
              <p className="white_text !text-left md:!text-2xl !text-xl font-bold">
                3. Sign Non-Disclosure Agreement
              </p>
              <p className="white_text !text-left md:!text-xl !text-base p-style">
                Signing an NDA is like putting your idea in a safe deposit box.
                Be rest assured about any privacy concerns.
              </p>
            </div>
            <div className="ready_content_list home_sec2_txt4">
              <p className="white_text !text-left md:!text-2xl !text-xl font-bold">
                4. Estimated Budget/Cost
              </p>
              <p className="white_text !text-left md:!text-xl !text-base p-style">
                After analyzing your requirement in-detail we will get back to
                you with an estimated budget/cost and estimated time required
                for successful project completion.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="xl:mt-24 lg:mt-[60px] mt-8 xl:px-[8rem] lg:px-[8rem] md:px-[3rem] px-[1rem]">
        <div className="bg-[#01B6D3] medium-font w-full py-6 rounded-[18px] flex lg:flex-row flex-col items-center justify-center md:gap-8 gap-4 px-[15px]">
          <h2 className="md:text-4xl text-2xl text-colorWhite text-center">
            For career inquiry email us on <strong>hr@brilworks.com</strong>
          </h2>
          <Link
            href="/career/"
            className="flex gap-3 items-center bg-white md:p-4 p-3 font-semibold whitespace-nowrap"
          >
            SEARCH OPENINGS <Svgs name="up-right-arrow" />
          </Link>
        </div>
      </section>
      <section>
        <div className="xl:mt-24 lg:mt-[60px] md:mt-8 mt-4">
          <div className="service_width mx-auto md:px-[0px] px-[15px] reveal">
            <div className="solutions md:text-center text-left py-10">
              <h2 className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px]">
                WHAT MAKES US BRILLIANT?
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-[3rem] our-engagement-models md:px-8 lg:px-0">
              <div className="contact_box">
                <div className="mx-auto">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/people-01.png"
                    alt="people"
                    className="md:!w-[92px]"
                  />
                </div>
                <div className="steps_service flex items-center justify-center">
                  <div className="no_flex">
                    <div className="no_flex_height">
                      <div className="developer_sec6_title text-center mob_center">
                        <h3>1. People</h3>
                      </div>
                      <div className="service_description text-center mob_center">
                        <p>
                          With our design &amp; development ninjas by our side,
                          there’s absolutely nothing we can’t achieve.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact_box">
                <div className="mx-auto">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/progress-01.png"
                    alt="progress"
                    className="md:!w-[92px]"
                  />
                </div>

                <div className="steps_service flex items-center justify-center">
                  <div className="no_flex ">
                    <div className="no_flex_height">
                      <div className="developer_sec6_title text-center mob_center">
                        <h3>2. Progress</h3>
                      </div>
                      <div className="service_description text-center mob_center">
                        <p>
                          We’ve built and launched more than 120+ products in 20
                          countries across the globe.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact_box">
                <div className="mx-auto">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/passion-01.png"
                    alt="passion"
                    className="md:!w-[92px]"
                  />
                </div>
                <div className="steps_service flex items-center justify-center">
                  <div className="no_flex">
                    <div className="no_flex_height">
                      <div className="developer_sec6_title text-center mob_center">
                        <h3>3. Passion</h3>
                      </div>
                      <div className="service_description text-center mob_center">
                        <p>
                          We help you move your product vision from the
                          whiteboard to the real world.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service_width contact_sec3 md:!pt-[100px] !pt-1 reveal">
          <div className="just_call_sec">
            <div className="solutions text-center py-8">
              <h2 className="textUpercase md:!text-center !text-left !w-full">
                JUST A CALL AWAY
              </h2>
            </div>
          </div>
          <div className="contact_details background relative">
            <div className="logowhite">
              <img
                decoding="async"
                loading="lazy"
                className="alignnone"
                src="/images/logo-vector-white.png"
                alt="brilworks logo"
                width="73"
                height="124"
              />
            </div>
            <div className="contact_details_list">
              <div className="contact_iconText_flex">
                <div className="contact_icon">
                  <img
                    decoding="async"
                    loading="lazy"
                    className="alignnone"
                    src="/images/call.png"
                    alt="Mobile"
                  />
                </div>
                <div className="contact_text_call">
                  <p>
                    <a href="tel:919313644148">+91 93136 44148</a>
                  </p>
                </div>
              </div>
              <div className="contact_iconText_flex">
                <div className="contact_icon">
                  <img
                    decoding="async"
                    loading="lazy"
                    className="alignnone"
                    src="/images/email.png"
                    alt="Email"
                  />
                </div>
                <div className="contact_text_call">
                  <p>
                    <a href="mailto:sales@brilworks.com">sales@brilworks.com</a>
                  </p>
                </div>
              </div>
              <div className="contact_iconText_flex">
                <div className="contact_icon">
                  <img
                    decoding="async"
                    loading="lazy"
                    className="alignnone"
                    src="/images/skype.png"
                    alt="Skype"
                  />
                </div>
                <div className="contact_text_call">
                  <p>
                    <a href="skype:cid.d74c89a9ff70ee92">
                      cid.d74c89a9ff70ee92
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="just_call_sec">
          <div className="solutions text-center py-8">
            <h2 className="uppercase md:!text-center !text-left ml-4 !w-full">
              Client Testimonials
            </h2>
          </div>
        </div>
        <ClientReviews />

        <div className="mx-auto sec3_width_home pt-24 md:!mb-[4rem] !mb-[2rem] reveal">
          <div className="bg_grey">
            <div className="like_flex">
              <div className="like_basis">
                <div className="like_text bold solutions py-8">
                  <h2 className="!w-full">
                    LIKE WHAT YOU SEE? LET’S GET STARTED THEN!
                  </h2>
                </div>
              </div>
              <div className="like_basis_form">
                <div className="contact_form">
                  <div
                    className="wpcf7 js"
                    id="wpcf7-f695-p456-o2"
                    lang="en-US"
                    dir="ltr"
                  >
                    <ContactUsEmailForm inquiryForm={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
