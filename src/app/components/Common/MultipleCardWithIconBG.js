"use client";
import React from "react";
import Image from "next/image";

const MultipleCardWithIconBG = ({ bgClass = "bg-white", data }) => {
  return (
    <section className={`main-section-padding ${bgClass}`}>
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-themeColor inline-block !mb-3">
            Why Brilworks
          </span>
          <h2 className="lg:text-[44px] md:text-[36px] text-[30px] font-extrabold leading-[1.1] tracking-[-1px] text-[#0d0f1a]">
            {data?.title}
          </h2>
          {data?.description && (
            <p className="text-[17px] text-[#6b7280] mt-3 max-w-[560px] mx-auto leading-[1.6]">
              {data.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {data?.benefits?.map(({ title, description, icon }, index) => (
            <div
              key={index}
              className="border border-[#e5e7eb] rounded-2xl p-7 bg-white text-center transition-all duration-300 hover:border-themeColor hover:bg-[#e8f0fd]"
            >
              <div className="w-14 h-14 rounded-full bg-[#e8f0fd] flex items-center justify-center mx-auto !mb-4">
                {icon ? (
                  <Image
                    className="w-7 h-7"
                    src={icon}
                    alt={`${title} service icon`}
                    width={28}
                    height={28}
                  />
                ) : (
                  <span className="text-2xl">🎯</span>
                )}
              </div>
              <h3 className="text-lg font-bold text-[#212121] tracking-[-0.5px] !mb-2">
                {title}
              </h3>
              {description && (
                <p className="text-base text-[#6b7280] leading-[1.6]">
                  {description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MultipleCardWithIconBG;
