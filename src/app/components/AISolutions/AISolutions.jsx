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
    <div className="flex flex-col gap-6 md:gap-8 xl:gap-10 justify-center items-center font-medium container max-w-[1440px] mx-auto px-6 md:px-14 xl:px-28">
      <div>
        <Heading
          type="h1"
          data={title}
          className="text-center !text-colorBlack mb-[30px] font-semibold"
        />
        <p className="text-lg md:text-xl text-center">{description || ""}</p>
      </div>
      {/* {pathname === "/ai-solutions/ai-powered-prd-generator/" ? (
        <AIGenerateField />
      ) : ( */}
      <ButtonV2
        className="hover:text-themeColor !mb-8"
        label={buttontext || "Get Started Now"}
        redirect={buttonURL?.url || "/contact-us/"}
        {...(buttonURL?.url ? { target: "_blank" } : {})}
      />

      <div className="video-container">
        <iframe
          className="rounded-3xl"
          src={videoLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default AISolutionsFirstSection;
