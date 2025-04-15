"use client";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import Heading from "../HTMLComponents/Heading";
import ButtonV2 from "../Common/ButtonV2";

const AIWorking = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className="bg-sectionBG md:py-10 lg:py-[60px] py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container max-w-[1440px] mx-auto px-6 md:px-14 xl:px-28">
        <div className="flex flex-col gap-3 md:gap-5">
          <Heading
            className="xl:!text-[46px]"
            type="h2"
            data={data?.[0]?.title ?? ""}
          />
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
            <ButtonV2
              label={data?.[0]?.button_text}
              redirect={data?.[0]?.youtube_link?.url || "/contact-us/"}
              className="hover:text-themeColor"
              {...(data?.[0]?.youtube_link?.url ? { target: "_blank" } : {})}
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
    </div>
  );
};

export default AIWorking;
