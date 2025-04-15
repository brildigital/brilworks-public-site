import React from "react";
import "../../styles/custom-style.scss";
import ButtonV2 from "../Common/ButtonV2";

const AISolutionsCTA = ({ CTA }) => {
  return (
    <div className="bg-[#03131C] py-10 md:py-[60px] lg:py-[90px] overflow-hidden">
      <div className="container-cta">
        <div className="content mx-auto container max-w-[1250px]">
          <h3 className="text-center !text-colorWhite mb-[30px] text-3xl md:text-5xl font-medium leading-[50px] mx-auto px-4">
            {CTA?.title}
          </h3>

          <div className="flex items-center justify-center">
            <ButtonV2
              className="button-white hover:!text-colorWhite hover:!bg-themeColor"
              label={CTA?.button_text}
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISolutionsCTA;
