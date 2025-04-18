import React from "react";
import Heading from "../HTMLComponents/Heading";
import ButtonV2 from "./ButtonV2";

const MultipleKeyValueWithBG = ({
  title,
  buttonText,
  description,
  keyValueData,
  bgClass = "bg-sectionBG",
}) => {
  const gridClass =
    keyValueData.length === 6 ? "md:grid-cols-3" : "md:grid-cols-4";
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

          <div className="w-full lg:py-10 md:py-7.5 py-5">
            <div className={`grid grid-cols-2 ${gridClass} md:gap-10 gap-5`}>
              {keyValueData.map(({ value, description, color }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-start p-6 !pr-0 rounded-2xl"
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
          {buttonText && (
            <ButtonV2
              redirect="#section-contact-form"
              label={buttonText}
              className="hover:!text-themeColor w-fit mx-auto"
              scrollingButton
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MultipleKeyValueWithBG;
