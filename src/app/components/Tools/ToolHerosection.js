"use client";
import React from "react";
import Heading from "../HTMLComponents/Heading";
import ButtonV2 from "../Common/ButtonV2";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import "../../styles/ServiceLightTheme.css";

const ToolHerosection = ({
  title,
  description,
  buttonText,
  imageSrc,
  authority,
  statsGird,
  highlights,
}) => {
  return (
    <section className="svc-hero-bg relative overflow-hidden">
      <div className="container max-w-[1280px] main-section-padding mx-auto">
        <div className="flex lg:flex-row flex-col gap-10 mt-20">
          <div className="mx-auto lg:w-3/5 w-full">
            <Heading
              type="h1"
              className="!text-[#0b1e33] font-bold text-left"
              text={title}
            />

            <p
              className="lg:text-xl md:text-lg text-base text-left !mt-5 md:pr-10 pr-0 w-full"
              style={{ color: "#566678" }}
            >
              {description || ""}
            </p>
            <ButtonV2
              redirect="#price-estimate"
              label={buttonText || "Get Started"}
              className="my-8 hover:!text-themeColor w-fit"
              scrollingButton
            />
            {authority?.length && (
              <div className="flex flex-wrap gap-6" style={{ color: "#566678" }}>
                {authority.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: "#16a34a" }}
                    />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            )}
            {statsGird?.length && (
              <div
                className={`w-full md:w-[85%] grid grid-cols-1 ${
                  statsGird?.length === 2
                    ? "md:grid-cols-2"
                    : statsGird?.length === 4
                      ? "md:!grid-cols-4 !grid-cols-2 !gap-4 md:!w-[95%]"
                      : "md:grid-cols-3"
                } justify-start gap-6`}
              >
                {statsGird.map((stat, index) => (
                  <div
                    key={index}
                    className={`${
                      statsGird?.length === 2 ? "text-start" : "text-center"
                    }  group`}
                  >
                    <div className="rounded-lg p-4 transition-all duration-300 transform hover:-translate-y-1 svc-stat-card">
                      <div
                        className={`${
                          statsGird?.length === 2 ? "text-xl" : "text-2xl"
                        } font-bold pb-2`}
                        style={{ color: "#2f6bff" }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-sm" style={{ color: "#6b7a8a" }}>
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {highlights?.length && (
              <div className="w-full md:w-[85%] grid grid-cols-1 md:grid-cols-3 justify-start gap-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-lg p-4 transition-all duration-300 transform hover:-translate-y-1 svc-stat-card"
                  >
                    <div
                      className={`flex items-center gap-2 mb-1 ${item.color}`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-semibold">{item.title}</span>
                    </div>
                    <p className="text-sm" style={{ color: "#6b7a8a" }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative lg:w-2/5 w-full">
            <div className="relative group">
              {/* Floating decorative elements */}
              <Image
                className="rounded-2xl md:h-[565px] h-[380px] object-cover"
                src={imageSrc}
                alt="tool-banner"
                width="565"
                height="610"
                priority
                style={{
                  border: "1px solid #e4eaf1",
                  boxShadow: "0 4px 24px rgba(11,30,51,0.08)",
                }}
              />
              <div className="absolute -top-7 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
              <div className="absolute -bottom-6 -right-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-700"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-green-400 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolHerosection;
