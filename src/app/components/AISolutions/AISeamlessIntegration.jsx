import React from "react";
import Image from "next/image";
import Heading from "../HTMLComponents/Heading";

const AISeamlessIntegration = ({ data }) => {
  const iconBG = [
    "bg-[#E5F4FF]",
    "bg-[#E9FFE2]",
    "bg-[#FFE8FC]",
    "bg-[#FFE2E5]",
    "bg-[#EAFFFD]",
  ];
  return (
    <div className="container max-w-[1280px] main-section-padding-bottom mx-auto flex flex-col">
      <Heading
        type="h2"
        className="text-colorBlack lg:!text-[34px] md:!text-3xl !text-2xl"
        text={data?.[0]?.Key}
      />
      {data?.[0]?.Value && (
        <p className="md:text-lg text-base md:!mt-2.5 !mt-2">
          {data?.[0]?.Value}
        </p>
      )}
      <div className="grid md:grid-cols-2 grid-cols-1 sxl:gap-10 md:gap-7.5 gap-5 lg:pt-10 md:pt-7.5 pt-5">
        {data?.slice(1, 6)?.map((item, index) => (
          <div
            key={index}
            className="md:pb-7.5 pb-5 border-b border-b-borderGray"
          >
            <div
              className={`w-fit flex items-center justify-start p-4 rounded-xl ${iconBG?.[index]} mb-5`}
            >
              <Image
                className="sxl:w-12 md:w-8 sxl:h-12 md:h-8 w-6 h-6"
                src={item?.image?.filename}
                alt={item?.image?.alt}
                width={52}
                height={52}
              />
            </div>
            <Heading
              type="h3"
              className="text-colorBlack md:!text-xl !text-lg font-medium"
              text={item.title}
            />
            <p className="md:!text-base !text-sm !pt-4">{item.description}</p>
          </div>
        ))}
      </div>
    </div>

    // <div className="container max-w-[1280px] main-section-padding-bottom mx-auto">
    //   <div>
    //     <Heading
    //       type="h2"
    //       className="lg:!text-[34px] md:!text-3xl !text-2xl"
    //       text={data?.[0]?.Key}
    //     />
    //     <p className="md:text-lg text-base">{data?.[0]?.Value}</p>
    //   </div>
    //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
    //     {data?.slice(1, 6)?.map((item, index) => (
    //       <div
    //         className="flex md:flex-row flex-col gap-2 sm:gap-5 p-5 rounded-2xl border border-borderGray"
    //         key={index}
    //       >
    //         <div className="bg-gray-100 rounded-md p-2 min-h-[100px] min-w-[100px]  flex justify-center items-center">
    //           <Image
    //             className="rounded-md w-[62px] h-[62px]"
    //             src={item?.image?.filename}
    //             width={128}
    //             height={128}
    //             alt={item?.image?.alt}
    //           />
    //         </div>

    //         <div className="flex flex-col">
    //           <div className="p-0">
    //             <h2 className="text-xl font-semibold">{item.title}</h2>
    //           </div>
    //           <p className="text-gray-600 mt-2">{item.description}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default AISeamlessIntegration;
