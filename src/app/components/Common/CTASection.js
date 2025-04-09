import React from "react";
import ButtonV2 from "./ButtonV2";
import Heading from "../HTMLComponents/Heading";

const CTASection = ({ title, descriprtion, buttonText }) => {
  return (
    <div className="bg-[#03131C] cta-background pt-10 lg:pt-[60px] overflow-hidden">
      <div className="container-cta">
        <div className="container max-w-[1280px] mx-auto main-section-padding">
          <div className="flex md:flex-row flex-col items-center justify-between gap-5">
            <div className="text-colorWhite">
              <Heading
                type="h2"
                className="lg:!text-[34px] md:!text-3xl !text-2xl mb-4 hover:border-colorWhite hover:text-colorWhite"
                text="Ready to Develop Your Success Story With Us?"
              />
              <p className="md:!text-lg text-base">
                {descriprtion ||
                  "Tell us your project idea and get a free consultation to create an outstanding digital product."}
              </p>
            </div>
            <ButtonV2
              className="hover:bg-colorWhite hover:text-themeColor"
              label={buttonText || "Let’s Discuss"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
