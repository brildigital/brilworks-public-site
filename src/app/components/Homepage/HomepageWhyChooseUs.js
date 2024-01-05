"use client";
import { Card, CardBody } from "@material-tailwind/react";
import React from "react";

const HomepageWhyChooseUs = () => {
  const whyChooseUscontent = [
    {
      title: "Cost-Effective Excellence",
      description:
        "Cost-effective e-solutions that deliver maximum value for your investment.",
    },
    {
      title: "Proven Expertise",
      description:
        "Proven expertise from our seasoned professionals with over 8 years of experience.",
    },
    {
      title: "Innovative Solution",
      description:
        "Innovative solutions that leverage emerging technologies to exceed industry standards.",
    },
    {
      title: "Diverse Portfolio",
      description:
        "A diverse portfolio of over 120 successfully developed applications across various industries.",
    },
    {
      title: "Client-Centric Approach",
      description:
        " A client-centric approach that prioritizes your unique needs and fosters long-term partnerships.",
    },
    {
      title: "Dedicated Support",
      description:
        "  Dedicated support to ensure smooth integration, troubleshooting and updates for optimal software performance.",
    },
  ];

  return (
    <>
      <div className="w-11/12 md:w-4/5 mx-auto reveal background !rounded-2xl md:mt-24 mt-12 md:px-8 lg:px-12 md:!pb-8 lg:!pb-12 px-4 pb-4">
        <div className="solutions md:py-8 py-6 flex items-center justify-center">
          <h2 className="">Why Choose Us?</h2>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-4 md:p-6 !pt-0">
          {whyChooseUscontent.map((data, index) => (
            <Card className="shadow-lg shadow-black-500/50" key={index}>
              <h4 className="text-xl why_text font-bold leading-snug text-black p-4 pb-0">
                {data.title}
              </h4>
              <CardBody className="p-4 why_text">{data.description}</CardBody>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomepageWhyChooseUs;
