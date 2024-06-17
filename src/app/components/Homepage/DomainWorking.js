"use client";
import "../../styles/Homepage.scss";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { scrollEffect } from "../lib/commonFunction";
import { DomainWorkingText } from "./BigText";

const AccordionCustomIcon = dynamic(() =>
  import("../Common/AccordionCustomIcon")
);

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

  const DomainWorkingAcccordionItem = [
    {
      title: "1. Fintech",
      content:
        "Revolutionize the financial world with a robust & secure fintech app that solves real-life problems.",
      linkUrl: "/industry/fintech-software-development/",
    },
    {
      title: "2. Health Care",
      content:
        "Implement digital solutions that are poised to transform the healthcare industry.",
      linkUrl: "/industry/healthcare-software-development/",
    },
    {
      title: "3. Media & Entertainment",
      content:
        "From ticketing to online video, we’ll help you improve the way you engage and entertain.",
      linkUrl: "/industry/media-entertainment-software-development/",
    },
    {
      title: "4. Fleet Management + GPS",
      content:
        "Simplify fleet management with solutions that let you manage workflows with GPS tracking.",
      linkUrl: "/industry/fleet-management-software-development/",
    },
  ];

  return (
    <div className="bg-sectionBG">
      <div className="container mx-auto main-section-padding reveal">
        <DomainWorkingText />
        <div className="md:px-4 md:pt-12 pt-8 sm:w-[92%] w-[100%] mx-auto reveal">
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
                {DomainWorkingAcccordionItem.map(
                  ({ title, content, linkUrl }, index) => (
                    <AccordionCustomIcon
                      key={index + 2}
                      index={index + 1}
                      title={title}
                      content={content}
                      handleOpen={handleOpen}
                      linkUrl={linkUrl}
                      open={open}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainWorking;
