import Image from "next/image";
import React from "react";

function WhyFirstSection({
  title = "",
  description = "",
  firstSectionFeatures = [],
}) {
  return (
    <div className="mx-auto service_width xl:py-[6rem] md:py-[4rem] py-[2rem] workpadd_borderTop end-to-end">
      <div className="end-To-end">
        <div className="endTO_text solutions flex flex-col gap-2">
          <h2 className="!w-full p-0 uppercase">{title}</h2>
          <p className="md:text-xl text-base md:text-center text-left">
            {description}
          </p>
        </div>
      </div>

      <div className="reveal grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-5">
        {firstSectionFeatures.map((item, index) => {
          return (
            <div
              className="p-3 md:p-4 rounded-lg border-2 border-transparent hover:border-gray-200 hover:-translate-y-1 duration-300"
              key={index}
            >
              <div className="flex items-center gap-4">
                <div className="">
                  <div className="service_title">
                    <h3 className="w-full flex gap-3 font-bold items-center text-xl text-black">
                      <Image
                        className="w-[48px] h-[48px]"
                        src={item.icon}
                        alt="icon"
                        height={48}
                        width={48}
                      />
                      {item.heading}
                    </h3>
                  </div>
                  <div className="service_description">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhyFirstSection;
