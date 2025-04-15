import React from "react";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";

const MultipleCardInGrid = ({ bgClass, title, description, cardData }) => {
  return (
    <section className={bgClass}>
      <div className="container max-w-[1280px] main-section-padding mx-auto reveal">
        <Heading
          type="h2"
          className="text-colorBlack lg:!text-[34px] md:!text-3xl !text-2xl"
          text={title}
        />
        {description && (
          <p className="md:text-lg text-base md:!mt-2.5 !mt-2">{description}</p>
        )}

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 md:gap-7.5 lg:gap-10 lg:pt-10 md:pt-7.5 pt-5">
          {cardData.map(
            ({ title, icon, description, badgeText, badgeColor }) => (
              <div
                className="bg-white flex flex-col justify-between items-start border rounded-2xl border-borderGray md:p-7.5 p-5"
                key={title}
              >
                <div>
                  <div className="w-fit brilliant-icon rounded-md mb-5">
                    <div className="flex items-center justify-start p-4 bg-white rounded-md">
                      <Image
                        className="md:w-8 md:h-8 w-6 h-6"
                        src={icon}
                        alt={`${title}-icon`}
                        width={32}
                        height={32}
                      />
                    </div>
                  </div>
                  <Heading
                    type="h3"
                    className="text-colorBlack md:!text-xl !text-lg font-medium"
                    text={title}
                  />
                  <p className="md:text-lg text-base pt-4">{description}</p>
                </div>
                {badgeText && (
                  <span
                    className={`${badgeColor} px-4 py-3 mt-4 rounded-md md:text-base text-sm`}
                  >
                    {badgeText}
                  </span>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default MultipleCardInGrid;
