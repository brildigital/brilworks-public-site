import React from "react";
import { usePathname } from "next/navigation";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";

const reactJsPricingPlans = [
  {
    title: "Fixed Cost Model",
    benefits: [
      "Budget-friendly & predictable pricing",
      "Milestone-based payments",
      "Zero hidden fees",
      "Time zone-aligned sprints",
    ],
  },
  {
    title: "Dedicated Resource Model",
    benefits: [
      "Exclusive developer/team",
      "Full control over workflows",
      "Daily standups in your time zone",
      "Monthly billing, no contracts",
    ],
  },
  {
    title: "Hourly/Time & Material",
    benefits: [
      "Pay only for hours worked",
      "Scale up/down weekly",
      "Remote React developers on-demand",
      "Transparent timesheets",
    ],
  },
];
const blockchainPricingPlans = [
  {
    title: "Fixed Cost Model",
    benefits: [
      "Predictable budgeting",
      "Milestone-driven delivery",
      "Ideal for well-defined projects",
    ],
  },
  {
    title: "Dedicated Team Model",
    benefits: [
      "Exclusive developers",
      "Daily SCRUM meetings",
      "Monthly billing, flexible terms",
    ],
  },
  {
    title: "Hourly/Time & Material",
    benefits: [
      "Pay per hour",
      "Scale resources weekly",
      "Transparent tracking",
    ],
  },
];

const HiringModels = () => {
  const pathname = usePathname();
  const mapToRender = {
    "/hire-reactjs-developer/": {
      title: "Hire React JS Developers with These Flexible Hiring Models",
      description: "",
      pricingPlans: reactJsPricingPlans,
    },
    "/hire-nodejs-developer/": {
      title: "Flexible Hiring Models for Node.js Developers",
      description: "",
      pricingPlans: reactJsPricingPlans,
    },
    "/hire-blockchain-developer/": {
      title: "Flexible Hiring Models for Blockchain Developers",
      description: "",
      pricingPlans: blockchainPricingPlans,
    },
  };
  const currentData = mapToRender[pathname];
  return (
    <div className="bg-sectionBG">
      <div className="container max-w-[1280px] main-section-padding mx-auto">
        <Heading
          type="h2"
          className="text-colorBlack lg:!text-[34px] md:!text-3xl !text-2xl"
          text={currentData.title}
        />
        {currentData.description && (
          <p className="md:text-lg text-base md:!mt-2.5 !mt-2">
            {currentData.description}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sxl:pt-10 md:pt-7.5 pt-5 reveal">
          {currentData.pricingPlans.map(({ title, benefits }, index) => (
            <div
              key={index}
              className="md:p-7.5 p-5 border border-borderGray rounded-2xl bg-white flex flex-col justify-start li-tick-mark"
            >
              <Heading
                type="h3"
                className="md:!text-xl !text-lg mb-5"
                text={title}
              />
              <ul className="space-y-2">
                {benefits.length &&
                  benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 blue small"
                    >
                      {benefit}
                    </li>
                  ))}
              </ul>
              <div className="flex items-center justify-end">
                <Image
                  className="w-auto mb-[10px]"
                  src={
                    index + 1 === 1
                      ? "/images/v2/Monoton-1.svg"
                      : index + 1 === 2
                      ? "/images/v2/Monoton-2.svg"
                      : "/images/v2/Monoton-3.svg"
                  }
                  alt="hiring-voice"
                  width="24"
                  height="24"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HiringModels;
