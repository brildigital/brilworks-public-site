"use client";
import React from "react";
import { BrilworksButton } from "../Common/BrilworksBtn";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const AIWorking = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container max-w-[1440px] mx-auto px-6 md:px-14 xl:px-28">
      <div className="flex flex-col gap-3 md:gap-5">
        <h1 className="text-2xl  sm:text-3xl md:text-5xl font-semibold">
          {data?.[0]?.title ?? ""}
        </h1>
        <div className="text-lg md:text-xl">{data?.[0]?.description}</div>

        <div className="flex flex-col sm:gap-3 md:gap-5 ">
          {data?.slice(1, 5).map((item, index) => {
            return (
              <div
                key={index}
                className={`${isMobile ? "flex flex-col gap-2 mb-2" : ""}`}
              >
                <h3 className="flex gap-2 font-semibold text-lg md:text-xl xl:text-2xl">
                  {item?.Key ? (
                    <>
                      <Image
                        src="/images/AISolutionsTick.svg"
                        width={28}
                        height={28}
                        alt="Tick"
                        className="h-full w-6 items-center"
                      />
                      {item?.Key}
                    </>
                  ) : (
                    <></>
                  )}
                </h3>
                <div>{item.Value}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 mb-2 flex items-center md:justify-start justify-center">
          <BrilworksButton
            label={data?.[0]?.button_text}
            redirect={data?.[0]?.youtube_link?.url || "/contact-us/"}
            type="primary"
          />
        </div>
      </div>
      <div>
        <Image
          className="rounded-[20px]"
          src={data?.[0]?.banner_image?.filename ?? ""}
          alt={data?.[0]?.image?.alt || "Image"}
          width={500}
          height={573}
        />
      </div>
    </div>
  );
};

export default AIWorking;
