"use client";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Svgs = dynamic(() => import("../Svgs"));

const serviceItems = [
  {
    title: "Multiple Domain Expertise",
    image: "multiple-user",
  },
  {
    title: "Quality Project Management",
    image: "file",
  },
  {
    title: "Real-time progress tracking",
    image: "clock",
  },
  {
    title: "Time-zone compatibilit",
    image: "multiple-clock",
  },
  {
    title: "Cost-effective development",
    image: "code-calender",
  },
  {
    title: "Dedicated delivery management",
    image: "delivery-box",
  },
  {
    title: "100+ technology experts",
    image: "laptop-mobile",
  },
  {
    title: "24/7 Support and Monitoring",
    image: "setting-hand",
  },
];

const ServiceItem = ({ image, title }) => (
  <div className="flex flex-col gap-3 p-4 rounded-lg border cursor-pointer service_item_card hover:text-white">
    <Svgs name={image} />
    <p className="text-2xl font-bold">{title}</p>
  </div>
);

const WhyDedicatedTeam = () => {
  return (
    <div className="md:py-[6rem] py-[4rem] end-to-end">
      <div className="endTO_text solutions">
        <h2 className="!w-full p-0">
          Why Should You Hire Our Dedicated <br />
          Development Team ?
        </h2>
      </div>
      <div className="reveal">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
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
            <button className="bg-white px-[14px] py-[10px] !text-base uppercase hover:shadow-lg cursor-pointer">
              Let’s discuss your project
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyDedicatedTeam;
