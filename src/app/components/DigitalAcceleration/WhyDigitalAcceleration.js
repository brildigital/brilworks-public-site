import React from "react";
import Svgs from "../Svgs";
import Link from "next/link";

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
    <p className="text-[29px] font-bold">{title}</p>
  </div>
);

const WhyDigitalAcceleration = () => {
  return (
    <div className="md:py-[6rem] py-[4rem] end-to-end">
      <div className="endTO_text solutions">
        <h2 className="!w-full p-0">
          Why Choose Our Digital Acceleration <br />
          Services?
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {serviceItems.map((item) => (
          <ServiceItem key={item.title} title={item.title} image={item.image} />
        ))}
      </div>
      <div className="mt-20 flex w-full justify-center">
        <Link
          href="/contact-us/"
          className="linear-gradient-background w-fit p-[2px]"
        >
          <button className="bg-white py-5 px-9 !text-base">
            Let’s discuss your project
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WhyDigitalAcceleration;
