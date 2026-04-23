"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Heading from "../HTMLComponents/Heading";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { techStacksByPathname } from "@/data/techStacks";

const TechStackWeUse = () => {
  const pathname = usePathname();

  return (
    <div className="container max-w-[1280px] mx-auto main-section-padding">
      <Heading
        type="h2"
        className="lg:!text-[34px] md:!text-3xl !text-2xl"
        text="Tech Stack We Use"
      />
      <Splide
        className="lg:!pt-10 md:!pt-7.5 !pt-5"
        options={{
          type: "loop",
          drag: "free",
          arrows: false,
          gap: 20,
          pagination: true,
          perPage: 4,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: false,
            speed: 1,
          },
          breakpoints: {
            1080: {
              perPage: 4,
            },
            1023: {
              perPage: 4,
              gap: 15,
            },
            767: {
              perPage: 3,
              gap: 10,
            },
            535: {
              perPage: 2,
              gap: 10,
            },
          },
        }}
        extensions={{ AutoScroll }}
      >
        {techStacksByPathname[pathname]?.map(({ title, imageSrc }, index) => {
          return (
            <SplideSlide key={index}>
              <div className="honors-card !mb-10">
                <div className="award !p-0 !pb-1">
                  <div
                    key={title}
                    className="mx-auto max-w-[220px] lg:w-[220px] lg:h-[220px] max-h-[220px] flex flex-col items-center justify-center rounded-2xl lg:py-10 md:py-7.5 py-5"
                  >
                    <Image
                      className="w-auto md:mb-6 mb-4"
                      src={imageSrc}
                      width={100}
                      height={100}
                      alt={`${title} technology logo`}
                    />
                    <p className="md:text-lg text-base font-medium pt-5">
                      {title}
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default TechStackWeUse;
