import React from "react";
import Image from "next/image";
import Heading from "../HTMLComponents/Heading";
import ButtonV2 from "../Common/ButtonV2";

const AIWorking = ({ data }) => {
  return (
    <div className="container max-w-[1280px] main-section-padding-top mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 sxl:gap10 md:gap-7.5 gap-5">
        <div className="">
          <Heading
            type="h2"
            className="lg:!text-[34px] md:!text-3xl !text-2xl"
            text={data?.[0]?.title ?? ""}
          />
          <p className="md:text-lg text-base !pt-3 md:pb-7.5 pb-5">
            {data?.[0]?.description}
          </p>

          <div className="flex flex-col sm:gap-3 md:gap-5 li-tick-mark">
            <ul>
              {data?.slice(1, 5).map((item, index) => {
                return (
                  <li
                    key={index}
                    className="md:!pb-7.5 !pb-4 md:text-xl text-lg font-medium blue"
                  >
                    <h3>{item?.Key ? <>{item?.Key}</> : <></>}</h3>
                    <div className="font-normal md:text-lg text-base md:pt-4 pt-2">
                      {item.Value}
                    </div>
                  </li>
                );
              })}
            </ul>
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
