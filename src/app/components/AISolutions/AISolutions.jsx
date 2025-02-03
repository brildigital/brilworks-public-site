"use client";
import React, { useEffect, useRef } from "react";
import { BrilworksButton } from "../Common/BrilworksBtn";
import Heading from "../HTMLComponents/Heading";
import AIGenerateField from "./AIGenerateField";
import { usePathname } from "next/navigation";

function AISolutionsFirstSection({
  title,
  description,
  videoLink,
  buttontext,
  buttonURL,
}) {
  const videoRef = useRef();
  const pathname = usePathname();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

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
      <BrilworksButton
        label={buttontext || "Get Started Now"}
        redirect={buttonURL?.url || "/contact-us/"}
        {...(buttonURL?.url ? { target: "_blank" } : {})}
      />
      {/* )} */}

      <div className="bg-gradient-to-br from-blue-300 to-white p-2 md:p-12 flex-center-center rounded-3xl">
        <video
          ref={videoRef}
          controls
          width={1100}
          height={534}
          className="!rounded-[20px]"
          src={videoLink?.url}
          cautoplay="autoplay"
          loop="true"
          muted
          defaultmuted
          playsInline
        />
      </div>
    </div>
  );
}

export default AISolutionsFirstSection;
