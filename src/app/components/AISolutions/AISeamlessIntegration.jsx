import React from "react";
import Image from "next/image";
import Heading from "../HTMLComponents/Heading";

const AISeamlessIntegration = ({ data }) => {
  return (
    <div className="container max-w-[1440px] mx-auto px-6 md:px-14 xl:px-28 flex flex-col gap-6 md:gap-10">
      <div>
        <Heading className="text-center" type="h2" data={data?.[0]?.Key} />
        <p className="!mt-2 text-center">{data?.[0]?.Value}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:p-6 p-1 gap-6 md:gap-8 lg:gap-10">
        {data?.slice(1, 6)?.map((item, index) => (
          <div
            className="flex md:flex-row flex-col gap-2 sm:gap-5 p-5 rounded-2xl border border-borderGray"
            key={index}
          >
            <div className="bg-gray-100 rounded-md p-2 min-h-[100px] min-w-[100px]  flex justify-center items-center">
              <Image
                className="rounded-md w-[62px] h-[62px]"
                src={item?.image?.filename}
                width={128}
                height={128}
                alt={item?.image?.alt}
              />
            </div>

            <div className="flex flex-col">
              <div className="p-0">
                <h2 className="text-xl font-semibold">{item.title}</h2>
              </div>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AISeamlessIntegration;
