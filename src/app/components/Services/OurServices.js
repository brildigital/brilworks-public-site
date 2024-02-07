import "../../styles/Homepage.scss";
import React from "react";
import { useEffect, useState } from "react";
import { scrollEffect } from "../lib/commonfunction";
import Image from "next/image";
import AccordionCustomIcon from "../Common/AccordionCustomIcon";
import { usePathname } from "next/navigation";

const OurServices = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  const AIMLAccordionData = [
    {
      title: "1. Real-Time Image and Video Processing",
      content: "Instantly analyze and interpret visual data.",
    },
    {
      title: "2. Predictive Analytics",
      content: "Instantly analyze and interpret visual data.",
    },
    {
      title: "3. Customizable Solutions",
      content: "Instantly analyze and interpret visual data.",
    },
    {
      title: "4. Seamless Integration",
      content: "Instantly analyze and interpret visual data.",
    },
    {
      title: "5. Data-Driven Insights",
      content: "Instantly analyze and interpret visual data.",
    },
  ];

  const DevOpsAccordionData = [
    {
      title: "1. DevOps Implementation",
      content: "Our DevOps services are designed to guide you through.",
    },
    {
      title: "2. DevOps Automation",
      content: "Our DevOps services are designed to guide you through.",
    },
    {
      title: "3. DevOps Services",
      content: "Our DevOps services are designed to guide you through.",
    },
    {
      title: "4. DevOps Release Management",
      content: "Our DevOps services are designed to guide you through.",
    },
    {
      title: "5. Continuous Integration & Delivery (CI/CD)",
      content: "Our DevOps services are designed to guide you through.",
    },
  ];

  return (
    <div className="container mx-auto sm:w-[90%] w-[100%] lg:mt-5">
      <h2 className="md:text-center text-left ml-4 md:py-10 py-6">
        Our Services
      </h2>
      <div className="px-[15px] md:pb-[52px] pb-10 reveal">
        <div className="homepage-work-domain">
          <div className="flex flex-wrap">
            <div className="lg:w-6/12 w-full">
              <div className="tab-content d-flex justify-content-center align-items-center h-100">
                <div>
                  <div className="services_img md:pt-8">
                    <Image
                      className="alignnone wp-image-32 size-full"
                      src={
                        pathname === "/ai-ml-development-services/"
                          ? "/images/realtime-video-image.webp"
                          : "/images/devops-concept-software-development.webp"
                      }
                      alt="our-services-img"
                      width="640"
                      height="505"
                      sizes="(min-width: 1040px) 42.35vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 w-full">
              {pathname === "/ai-ml-development-services/" &&
                AIMLAccordionData.map(({ title, content }, index) => (
                  <AccordionCustomIcon
                    index={index + 1}
                    key={index + 1}
                    title={title}
                    content={content}
                    handleOpen={handleOpen}
                    open={open}
                  />
                ))}
              {pathname === "/devops-consulting-services/" &&
                DevOpsAccordionData.map(({ title, content }, index) => (
                  <AccordionCustomIcon
                    index={index + 1}
                    key={index + 1}
                    title={title}
                    content={content}
                    handleOpen={handleOpen}
                    open={open}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
