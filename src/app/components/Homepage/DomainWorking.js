"use client";
import "./homepage.scss";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon, scrollEffect } from "../lib/commonfunction";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const DomainWorking = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);
  return (
    <>
      <div className="mx-auto px-[15px] md:pt-[128px] pt-[32px] sm:w-[92%] w-[100%] reveal">
        <div className="homepage-work-domain">
          <div className="flex flex-wrap">
            <div className="lg:w-6/12 w-full">
              <div className="tab-content d-flex justify-content-center align-items-center h-100">
                <div
                  className={`fade-image ${
                    open === 1 || open === 0 ? "active" : "hidden"
                  }`}
                >
                  <div className="solutions_img">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="alignnone wp-image-32 size-full"
                      src="/images/Fintech-275x300.webp"
                      alt="fintech app"
                      width="1010"
                      height="1100"
                      srcSet="
                        /images/Fintech-275x300.webp   275w,
                        /images/Fintech-940x1024.webp  940w,
                        /images/Fintech-768x836.webp   768w,
                        /images/Fintech.webp         1010w
                      "
                      sizes="(min-width: 1040px) 42.35vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
                    />
                  </div>
                </div>
                <div
                  className={`fade-image ${open === 2 ? "active" : "hidden"}`}
                >
                  <div className="solutions_img">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="alignnone wp-image-32 size-full"
                      src="/images/healthcare-275x300.webp"
                      alt="fintech app"
                      width="1010"
                      height="1100"
                      srcSet="
                        /images/healthcare-275x300.webp   275w,
                        /images/healthcare-940x1024.webp  940w,
                        /images/healthcare-768x836.webp   768w,
                        /images/healthcare.webp          1010w
                      "
                      sizes="(max-width: 1010px) 100vw, 1010px"
                    />
                  </div>
                </div>
                <div
                  className={`fade-image ${open === 3 ? "active" : "hidden"}`}
                >
                  <div className="solutions_img">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="alignnone wp-image-32 size-full"
                      src="/images/media-entertainment-275x300.webp"
                      alt="fintech app"
                      width="1010"
                      height="1100"
                      srcSet="
                        /images/media-entertainment-275x300.webp   275w,
                        /images/media-entertainment-940x1024.webp  940w,
                        /images/media-entertainment-768x836.webp   768w,
                        /images/media-entertainment.webp          1010w
                      "
                      sizes="(max-width: 1010px) 100vw, 1010px"
                    />
                  </div>
                </div>

                <div
                  className={`fade-image ${open === 4 ? "active" : "hidden"}`}
                >
                  <div className="solutions_img">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="alignnone wp-image-32 size-full"
                      src="/images/Fleet-mgmt-275x300.webp"
                      alt="fintech app"
                      width="1010"
                      height="1100"
                      srcSet="
                        /images/Fleet-mgmt-275x300.webp   275w,
                        /images/Fleet-mgmt-940x1024.webp  940w,
                        /images/Fleet-mgmt-768x836.webp   768w,
                        /images/Fleet-mgmt.webp          1010w
                      "
                      sizes="(max-width: 1010px) 100vw, 1010px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 w-full">
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className={`py-6 ${open === 1 ? "border-none" : ""}`}
                >
                  <h3> 1. Fintech</h3>
                </AccordionHeader>
                <AccordionBody className={open === 1 ? "border-b" : ""}>
                  <div className="accordion-body">
                    Revolutionize the financial world with a robust & secure
                    fintech app that solves real-life problems.
                  </div>
                  <Link
                    href="/industry/fintech-software-development/"
                    className="flex items-center gap-[20px] about_btn transition py-3"
                  >
                    <div className="about_txt">
                      <p className="change_link md:text-[24px] text-[20px]">
                        Know more
                      </p>
                    </div>
                    <div className="aerrow relative">
                      <img
                        decoding="async"
                        loading="lazy"
                        className="black_aerrow alignnone wp-image-28 size-full"
                        src="/images/black_aerrow-1.png"
                        alt="arrow"
                        width="46"
                        height="18"
                      />
                      <img
                        decoding="async"
                        loading="lazy"
                        className="gradiant_aerrow alignnone wp-image-29 size-full"
                        src="/images/arrow-gradiant.png"
                        alt="arrow"
                        width="46"
                        height="18"
                      />
                    </div>
                  </Link>
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className={`py-6 ${open === 2 ? "border-none" : ""}`}
                >
                  <h3> 2. Health Care</h3>
                </AccordionHeader>
                <AccordionBody className={open === 2 ? "border-b" : ""}>
                  <div className="accordion-body">
                    Implement digital solutions that are poised to transform the
                    healthcare industry.
                  </div>
                  <Link
                    href="/industry/healthcare-software-development/"
                    className="flex items-center gap-[20px] about_btn transition py-3"
                  >
                    <div className="about_txt">
                      <p className="change_link md:text-[24px] text-[20px]">
                        Know more
                      </p>
                    </div>
                    <div className="aerrow relative">
                      <img
                        decoding="async"
                        loading="lazy"
                        className="black_aerrow alignnone wp-image-28 size-full"
                        src="/images/black_aerrow-1.png"
                        alt="arrow"
                        width="46"
                        height="18"
                      />
                      <img
                        decoding="async"
                        loading="lazy"
                        className="gradiant_aerrow alignnone wp-image-29 size-full"
                        src="/images/arrow-gradiant.png"
                        alt="arrow"
                        width="46"
                        height="18"
                      />
                    </div>
                  </Link>
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className={`py-6 ${open === 3 ? "border-none" : ""}`}
                >
                  <h3> 3. Media & Entertainment</h3>
                </AccordionHeader>
                <AccordionBody className={open === 3 ? "border-b" : ""}>
                  <div className="accordion-body">
                    From ticketing to online video, we’ll help you improve the
                    way you engage and entertain.
                  </div>
                  <Link
                    href="/industry/media-entertainment-software-development/"
                    className="flex items-center gap-[20px] about_btn transition py-3"
                  >
                    <div className="about_txt">
                      <p className="change_link md:text-[24px] text-[20px]">
                        Know more
                      </p>
                    </div>
                    <div className="aerrow relative">
                      <img
                        decoding="async"
                        loading="lazy"
                        className="black_aerrow alignnone wp-image-28 size-full"
                        src="/images/black_aerrow-1.png"
                        alt="arrow"
                        width="46"
                        height="18"
                      />
                      <img
                        decoding="async"
                        loading="lazy"
                        className="gradiant_aerrow alignnone wp-image-29 size-full"
                        src="/images/arrow-gradiant.png"
                        alt="arrow"
                        width="46"
                        height="18"
                      />
                    </div>
                  </Link>
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(4)}
                  className={`py-6 ${open === 4 ? "border-none" : ""}`}
                >
                  <h3> 4. Fleet Management + GPS</h3>
                </AccordionHeader>
                <AccordionBody className={open === 4 ? "border-b" : ""}>
                  <div className="accordion-body">
                    Simplify fleet management with solutions that let you manage
                    workflows with GPS tracking.
                  </div>
                  <Link
                    href="/industry/fleet-management-software-development/"
                    className="flex items-center gap-[20px] about_btn transition py-3"
                  >
                    <div className="about_txt">
                      <p className="change_link md:text-[24px] text-[20px]">
                        Know more
                      </p>
                    </div>
                    <div className="aerrow relative">
                      <img
                        decoding="async"
                        loading="lazy"
                        className="black_aerrow alignnone wp-image-28 size-full"
                        src="/images/black_aerrow-1.png"
                        alt="arrow"
                        width="46"
                        height="18"
                      />
                      <img
                        decoding="async"
                        loading="lazy"
                        className="gradiant_aerrow alignnone wp-image-29 size-full"
                        src="/images/arrow-gradiant.png"
                        alt="arrow"
                        width="46"
                        height="18"
                      />
                    </div>
                  </Link>
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DomainWorking;
