"use client";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Svgs = dynamic(() => import("../Svgs"));

const serviceItems = [
  {
    title: "Strategic Vision and Planning",
    image: "strategic-vision",
  },
  {
    title: "Agile Development",
    image: "agile-development",
  },
  {
    title: "Data-Driven Decision Making",
    image: "thumbs",
  },
  {
    title: "Cross-Functional Collaboration",
    image: "network-user",
  },
  {
    title: "Scalable Solutions for Growth",
    image: "network-tower",
  },
  {
    title: "24/7 Support and Monitoring",
    image: "hand-setting",
  },
];

const ServiceItem = ({ image, title }) => (
  <div className="flex flex-col gap-3 p-4 rounded-lg border cursor-pointer service_item_card hover:text-white">
    <Svgs name={image} />
    <p className="text-2xl font-bold">{title}</p>
  </div>
);

const WhyRapidDigitization = () => {
  return (
    <div className="md:py-[6rem] py-[4rem] end-to-end">
      <div className="endTO_text solutions">
        <h2 className="!w-full p-0">
          Why Choose Our Digital Acceleration <br />
          Services?
        </h2>
      </div>
      <div className="reveal">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-10 gap-4">
          {serviceItems.map((item) => (
            <ServiceItem
              key={item.title}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>
        <div className="mt-20 flex w-full justify-center">
          <Link
            href="/contact-us/"
            className="linear-gradient-background w-fit p-[2px]"
          >
            <button className="bg-white px-[14px] py-[10px] !text-base hover:shadow-lg uppercase">
              Let’s discuss your project
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyRapidDigitization;
