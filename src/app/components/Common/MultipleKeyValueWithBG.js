import React from "react";
import Heading from "../HTMLComponents/Heading";

const MultipleKeyValueWithBG = ({
  title,
  description,
  keyValueData,
  bgClass = "bg-sectionBG",
}) => {
  return (
    <div className={bgClass}>
      <div className="container max-w-[1280px] main-section-padding mx-auto">
        <div className="flex flex-col items-start reveal">
          <Heading
            type="h2"
            className="lg:!text-[34px] md:!text-3xl !text-2xl mb-4"
            text={title}
          />
          <p className="md:text-lg text-base">{description}</p>

          <div className="w-full lg:pt-10 md:pt-7.5 pt-5">
            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-5">
              {keyValueData.map(({ value, description, color }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-center p-6 rounded-2xl"
                  style={{ background: color }}
                >
                  <p className="pb-2 lg:!text-[34px] md:!text-3xl !text-2xl">
                    {value}
                  </p>

                  <span className="md:text-lg text-base">{description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleKeyValueWithBG;
