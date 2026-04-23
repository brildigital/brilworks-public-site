"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServicesSection = ({
  bgClass = "bg-white",
  sectionId,
  serviceData,
}) => {
  return (
    <section className={`main-section-padding ${bgClass}`} id={sectionId}>
      <div className="container max-w-[1280px] md:px-10 px-5 mx-auto">
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-themeColor inline-block !mb-3">
            What We Build
          </span>
          <h2 className="lg:text-[44px] md:text-[36px] text-[30px] font-extrabold leading-[1.1] tracking-[-1px] text-[#0d0f1a]">
            {serviceData.title}
          </h2>
          {serviceData.desc && (
            <p className="text-[17px] text-[#6b7280] mt-3 max-w-[560px] mx-auto leading-[1.6]">
              {serviceData.desc}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {serviceData?.servicesList?.map((service, index) => (
            <div
              key={service.value || index}
              className={`border rounded-2xl p-7 bg-white transition-all duration-300 hover:border-themeColor hover:bg-[#e8f0fd] ${
                index === serviceData.servicesList.length - 1
                  ? "border-2 border-themeColor bg-themeLight hover:bg-[#e0effd]"
                  : "border-[#e5e7eb]"
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center !mb-5 ${
                index === serviceData.servicesList.length - 1
                  ? "bg-themeColor"
                  : "bg-[#e8f0fd]"
              }`}>
                {service.iconSrc ? (
                  <Image
                    src={service.iconSrc}
                    alt={`${service.title} icon`}
                    width={28}
                    height={28}
                    className={index === serviceData.servicesList.length - 1 ? "invert brightness-200" : ""}
                  />
                ) : (
                  <span className="text-2xl">{service.icon || "📦"}</span>
                )}
              </div>
              <h3 className="text-xl font-bold text-[#212121] tracking-[-0.5px] leading-[1.3] !mb-2">
                {service.title}
              </h3>
              <p className="text-base text-[#6b7280] leading-[1.6] !mb-5">
                {service.description}
              </p>
              <Link
                href="#section-contact-form"
                className="inline-flex items-center gap-1.5 font-semibold text-[15px] text-themeColor hover:gap-2.5 transition-all duration-300"
              >
                {service.btnText || serviceData?.buttonText || "Learn More"} <span>&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
