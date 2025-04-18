"use client";
import React from "react";
import Heading from "../HTMLComponents/Heading";
import ButtonV2 from "../Common/ButtonV2";

const ServicesPricingPlans = () => {
  const pricingData = [
    {
      price: "$20",
      type: "Hourly (USD)",
      features: [
        "We prioritize the privacy of your project.",
        "We offer a fully signed non-disclosure agreement (NDA) for your protection.",
      ],
    },
    {
      price: "$2500",
      type: "Monthly (USD)",
      features: [
        "Highly skilled developers with 4-6 years of experience.",
        "160 hours per month",
        "Best for long-term engagement",
      ],
    },
    {
      price: "Request a Quote",
      type: "",
      features: [
        "For a fixed-cost solution",
        "Successful Project Execution within Time Constraints",
      ],
    },
  ];

  return (
    <div className="bg-sectionBG">
      <div className="container max-w-[1280px] main-section-padding mx-auto li-tick-mark reveal">
        <Heading
          type="h2"
          className="lg:!text-[34px] md:!text-3xl !text-2xl mb-3"
          text="Flexible & Predictable Costs: Find the Right IT StaffAugmentation Solution"
        />
        <p className="md:text-lg text-base lg:!mb-10 md:!mb-7.5 !mb-5">
          Transparent pricing  | Top talent | Data Security | Dedicated client
          support
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-10 md:gap-7.5 gap-5">
          {pricingData.map((data, index) => (
            <div
              className="flex flex-col h-full border border-borderGray rounded-2xl py-7.5 px-5"
              key={index}
            >
              <div className="flex-1">
                <p className="lg:text-xl md:text-lg text-base flex items-center gap-3">
                  <span className="lg:text-[42px] md:text-3xl text-2xl font-semibold text-black">
                    {data.price}
                  </span>{" "}
                  {data.type}
                </p>
                <hr className="border-[#E7E8E1] !my-4" />
                <ul className="li-tick-mark">
                  {data.features.map((data, idx) => (
                    <li key={idx} className="blue small last:pb-0">
                      {data}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <hr className="border-[#E7E8E1] my-4" />
                <ButtonV2
                  label="Onboard Developer"
                  className="hover:text-themeColor"
                  redirect="#section-contact-form"
                  scrollingButton
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPricingPlans;
