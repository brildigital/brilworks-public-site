"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Heading from "../HTMLComponents/Heading";
import { scrollToSection } from "../lib/commonFunction";

const OtherEbooksSection = ({ title, description, imageSrc }) => {
  return (
    <div className="bg-themeLight lg:px-[70px] md:px-8 px-4 lg:py-[60px] md:py-16 py-8">
      <div className="container max-w-[1440px] mx-auto">
        <Heading type="h2" data={title} className="text-center mb-5" />
        <p className="text-colorGray md:text-xl text-lg text-center md:!mb-[30px] !mb-5">
          {description}
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 items-center">
          {/* <div className="relative mx-auto">
            <div className="relative h-[283px] w-[292px]">
              <Image
                className="absolute left-10 bottom-24 w-[113px] h-[187px] z-10 img-selection-none"
                src={imageSrc}
                width="302"
                height="240"
                alt="e-book-image"
              />
              <div className="absolute bottom-5 left-5 flex w-[250px] items-center justify-between z-20">
                <p className="text-xl">The Alchemist</p>
                <Link
                  href="#download-ebook-form"
                  className="cursor-pointer"
                  onClick={(e) => scrollToSection(e, "download-ebook-form")}
                >
                  <Image
                    className="img-selection-none w-8 h-8"
                    src="/images/download-icon.svg"
                    width="34"
                    height="34"
                    alt="download-ebook"
                  />
                </Link>
              </div>
              <div className="absolute bottom-0 w-full h-[193px] border-b border-l-4 border-themeColor rounded-[26px] z-0"></div>
            </div>
          </div>

          <div className="relative mx-auto">
            <div className="relative h-[283px] w-[292px]">
              <Image
                className="absolute left-10 bottom-24 w-[113px] h-[187px] z-10 img-selection-none"
                src={imageSrc}
                width="302"
                height="240"
                alt="e-book-image"
              />
              <div className="absolute bottom-5 left-5 flex w-[250px] items-center justify-between z-20">
                <p className="text-xl">The Alchemist</p>
                <Link
                  href="#download-ebook-form"
                  className="cursor-pointer"
                  onClick={(e) => scrollToSection(e, "download-ebook-form")}
                >
                  <Image
                    className="img-selection-none w-8 h-8"
                    src="/images/download-icon.svg"
                    width="34"
                    height="34"
                    alt="download-ebook"
                  />
                </Link>
              </div>
              <div className="absolute bottom-0 w-full h-[193px] border-b border-l-4 border-themeColor rounded-[26px] z-0"></div>
            </div>
          </div>
          <div className="relative mx-auto">
            <div className="relative h-[283px] w-[292px]">
              <Image
                className="absolute left-10 bottom-24 w-[113px] h-[187px] z-10 img-selection-none"
                src={imageSrc}
                width="302"
                height="240"
                alt="e-book-image"
              />
              <div className="absolute bottom-5 left-5 flex w-[250px] items-center justify-between z-20">
                <p className="text-xl">The Alchemist</p>
                <Link
                  href="#download-ebook-form"
                  className="cursor-pointer"
                  onClick={(e) => scrollToSection(e, "download-ebook-form")}
                >
                  <Image
                    className="img-selection-none w-8 h-8"
                    src="/images/download-icon.svg"
                    width="34"
                    height="34"
                    alt="download-ebook"
                  />
                </Link>
              </div>
              <div className="absolute bottom-0 w-full h-[193px] border-b border-l-4 border-themeColor rounded-[26px] z-0"></div>
            </div>
          </div>
          <div className="relative mx-auto">
            <div className="relative h-[283px] w-[292px]">
              <Image
                className="absolute left-10 bottom-24 w-[113px] h-[187px] z-10 img-selection-none"
                src={imageSrc}
                width="302"
                height="240"
                alt="e-book-image"
              />
              <div className="absolute bottom-5 left-5 flex w-[250px] items-center justify-between z-20">
                <p className="text-xl">The Alchemist</p>
                <Link
                  href="#download-ebook-form"
                  className="cursor-pointer"
                  onClick={(e) => scrollToSection(e, "download-ebook-form")}
                >
                  <Image
                    className="img-selection-none w-8 h-8"
                    src="/images/download-icon.svg"
                    width="34"
                    height="34"
                    alt="download-ebook"
                  />
                </Link>
              </div>
              <div className="absolute bottom-0 w-full h-[193px] border-b border-l-4 border-themeColor rounded-[26px] z-0"></div>
            </div> 
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default OtherEbooksSection;
