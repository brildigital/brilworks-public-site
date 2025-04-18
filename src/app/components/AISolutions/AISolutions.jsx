import React from "react";
import Heading from "../HTMLComponents/Heading";
import AIGenerateField from "./AIGenerateField";
import ButtonV2 from "../Common/ButtonV2";

function AISolutionsFirstSection({
  title,
  description,
  videoLink,
  buttontext,
  buttonURL,
}) {
  return (
    <div className="ai-solution-section">
      <div className="banner-layer h-full min-h-[600px] max-h-full">
        <div className="container max-w-[1280px] main-section-padding !pt-24 mx-auto">
          <section className="flex flex-col items-center justify-start h-full min-h-[600px] max-h-full lg:gap-16 md:gap-10 gap-6 main-section-padding !px-0">
            <div>
              <p className="text-colorWhite uppercase md:text-2xl text-xl md:!mb-7.5 !mb-5">
                AI Solutions
              </p>
              <Heading type="h1" className="text-white" text={title} />
              {description && (
                <p className="text-white lg:text-2xl md:text-xl text-lg !mt-5">
                  {description}
                </p>
              )}
              {/* {pathname === "/ai-solutions/ai-powered-prd-generator/" ? (
                    <AIGenerateField />
                  ) : ( */}
              <ButtonV2
                className="hover:text-themeColor w-fit sxl:my-10 md:my-7.5 my-5"
                label={buttontext || "Get Started Now"}
                redirect={buttonURL?.url || "/contact-us/"}
                {...(buttonURL?.url ? { target: "_blank" } : {})}
              />

              <div className="iframe-bg rounded-[30px] sxl:p-10 md:p-7.5 p-3">
                <div className="video-container">
                  <iframe
                    className="rounded-[30px]"
                    src={videoLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AISolutionsFirstSection;
