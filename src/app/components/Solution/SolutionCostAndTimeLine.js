import React from "react";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";

const SolutionCostAndTimeLine = ({ costData }) => {
  return (
    <div className="bg-themeLight">
      <div className="container max-w-[1280px] main-section-padding mx-auto reveal">
        <Heading
          type="h2"
          className="text-colorBlack lg:!text-[34px] md:!text-3xl !text-2xl"
          text={costData.title}
        />
        {costData.description && (
          <p className="md:text-lg text-base md:!mt-2.5 !mt-2">
            {costData.description}
          </p>
        )}

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 md:gap-7.5 lg:gap-10 lg:pt-10 md:pt-7.5 pt-5">
          {costData?.listItems.map((item, idx) => (
            <div
              className="bg-white flex flex-col justify-between items-start border rounded-2xl border-borderGray md:p-7.5 p-5"
              key={idx}
            >
              <div className="flex items-start flex-col justify-start">
                <div className="w-fit brilliant-icon rounded-md mb-4">
                  <div className="flex items-center justify-start p-4 bg-white rounded-md">
                    <Image
                      className="w-14"
                      src={item.icon}
                      alt={`${item.title}-icon`}
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                <div className="text-lg md:text-xl font-bold mb-2">
                  {item.budgetRange}
                </div>

                <Heading
                  type="h3"
                  className="md:!text-xl !text-lg text-themeColor font-medium"
                  text={item.title}
                />
              </div>
              <ul className="list-disc list-outside pl-5 flex-1 text-gray-700 mb-4 mt-2">
                {item.includes.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="mb-1">
                <span className="font-semibold">Timeline:</span> {item.timeline}
              </div>
              <div>
                <span className="font-semibold">Engagement Model:</span>{" "}
                {item.engagementModel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionCostAndTimeLine;
