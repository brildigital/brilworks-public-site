import React from "react";
import ButtonV2 from "./ButtonV2";
import Heading from "../HTMLComponents/Heading";

const CTASection = ({
  title,
  description,
  buttonText,
  darkBackground = true,
}) => {
  return (
    <div
      className={`${
        darkBackground ? "bg-[#03131C] cta-background" : "bg-white"
      } pt-10 lg:pt-[60px] overflow-hidden`}
    >
      <div className="container-cta">
        <div className="container max-w-[1280px] mx-auto main-section-padding">
          <div
            className={`w-full flex md:flex-row flex-col items-center ${
              buttonText ? "justify-between" : "justify-start"
            } gap-5`}
          >
            <div
              className={`w-full ${darkBackground ? "text-colorWhite" : ""}`}
            >
              <Heading
                type="h2"
                className="lg:!text-[34px] md:!text-3xl !text-2xl mb-4"
                text={title || "Ready to Develop Your Success Story With Us?"}
              />
              <div className="w-full flex justify-between sxl:flex-row flex-col md:!text-lg text-base md:gap-4 gap-2">
                {description ||
                  "Tell us your project idea and get a free consultation to create an outstanding digital product."}
              </div>
            </div>
            {buttonText && (
              <ButtonV2
                className={
                  darkBackground
                    ? "hover:!text-colorWhite"
                    : "hover:!text-themeColor"
                }
                label={buttonText}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
