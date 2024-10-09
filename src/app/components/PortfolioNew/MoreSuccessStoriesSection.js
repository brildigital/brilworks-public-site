"use client";
import React from "react";
import Heading from "../HTMLComponents/Heading";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MoreSuccessStoriesSection = () => {
  const pathname = usePathname();
  const suggestedCaseStudies = [
    {
      name: "Vugo",
      imageSrc: "/images/vugo-1.jpg",
      imageAlt: "Vugo img",
      hrefUrl: "/portfolio/vugo/",
    },
    {
      name: "Rastrack",
      imageSrc: "/images/rastrack-mobile.webp",
      imageAlt: "Rastrack img",
      hrefUrl: "/portfolio/rastrack/",
    },
    {
      name: "Orokii",
      imageSrc: "/images/orokii-mobile.webp",
      imageAlt: "Orokii img",
      hrefUrl: "/portfolio/orokii/",
    },
    {
      name: "Eccocar",
      imageSrc: "/images/eccocar-mobile.webp",
      imageAlt: "Eccocar img",
      hrefUrl: "/portfolio/eccocar/",
    },
    {
      name: "Trackimo",
      imageSrc: "/images/gps-trackers-devices-mobile.webp",
      imageAlt: "Trackimo img",
      hrefUrl: "/portfolio/trackimo/",
    },
  ];

  return (
    <div className="px-[70px] py-[60px]">
      <div className="container max-w-[1440px] mx-auto">
        <Heading
          type="h2"
          text="MORE SUCCESS STORIES"
          className="text-center mb-5"
        />
        <p className="text-colorGray text-xl text-center !mb-[30px]">
          to build a next-generation EdTech app? We know how.
        </p>
        <div className="grid grid-cols-4 gap-8">
          {suggestedCaseStudies
            .filter((data) => pathname !== data.hrefUrl)
            .map(({ name, imageSrc, imageAlt, hrefUrl }, index) => {
              return (
                <Link key={name} href={hrefUrl}>
                  <Image
                    className="rounded-2xl"
                    src={imageSrc}
                    width="302"
                    height="240"
                    alt={imageAlt}
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MoreSuccessStoriesSection;
