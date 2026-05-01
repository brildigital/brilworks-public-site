"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useMediaQuery } from "react-responsive";

const StarFilled = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2L15 8.5L22 9.3L17 14L18.2 21L12 17.7L5.8 21L7 14L2 9.3L9 8.5L12 2Z" />
  </svg>
);

const WhatUserSays = ({ userSaysData }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  return (
    <section
      className="relative overflow-hidden py-16 md:py-24 bg-[#F2F9FE]"
      
    >
      <div className="mx-auto px-5 md:px-10 relative z-[2]" style={{ maxWidth: 1280 }}>
        {/* Header */}
        <div className="text-center mx-auto mb-14" style={{ maxWidth: 720 }}>
          <span
            className="inline-block mb-4"
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#00b4d8",
            }}
          >
            Client Stories
          </span>
          <h2
            className="font-extrabold text-black"
            style={{
              fontSize: "clamp(28px, 3.2vw, 42px)",
              letterSpacing: "-1px",
              lineHeight: 1.15,
            }}
          >
            What Users Say
          </h2>
        </div>

        <Splide
          className="our-team-swiper"
          options={{
            gap: 24,
            arrows: isMobile || isTablet,
            pagination: false,
            isNavigation: isMobile || isTablet,
            perPage: isMobile ? 1 : isTablet ? 2 : 3,
          }}
        >
          {userSaysData?.map((item, index) => (
            <SplideSlide key={index}>
              <div
                className="rounded-2xl flex flex-col h-full"
                style={{
                  background: "rgba(255,255,255)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  padding: "32px 28px",
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4" style={{ color: "#facc15" }}>
                  {[0, 1, 2, 3, 4].map((i) => <StarFilled key={i} />)}
                </div>

                <p
                  className="flex-1 mb-6 text-gray-700"
                  style={{fontSize: 15, lineHeight: 1.7 }}
                >
                  &ldquo;{item.Value || ""}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-2">
                  <div
                    className="rounded-full flex items-center justify-center font-bold text-white flex-shrink-0"
                    style={{
                      width: 44,
                      height: 44,
                      background: "linear-gradient(135deg, #017eeb, #00dbd3)",
                      fontSize: 16,
                    }}
                  >
                    {(item?.Key || "U")
                      .split(",")[0]
                      .trim()
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <div>
                    <p className="text-black font-semibold" style={{ fontSize: 14 }}>
                      {item?.Key?.split(",")?.[0]?.trim() || ""}
                    </p>
                    {item?.Key?.includes(",") && (
                      <p style={{ color: "rgba(0,0,0,0.55)", fontSize: 12 }}>
                        {item?.Key?.split(",")?.slice(1)?.join(",")?.trim()}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default WhatUserSays;
