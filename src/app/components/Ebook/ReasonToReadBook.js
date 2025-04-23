"use client";
import React from "react";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";

const ReasonToReadBook = ({ reasonToRead }) => {
  return (
    <div className="container max-w-[1280px] mx-auto main-section-padding-top">
      <div className="lg:mb-[60px] mb-8">
        <Heading
          type="h2"
          className="text-center mb-5"
          data={reasonToRead?.[0]?.Key}
        />
        <p className="md:text-xl text-lg text-colorGray w-full mx-auto text-center">
          {reasonToRead?.[0]?.Value}
        </p>
        <Image
          className="mt-5"
          src={reasonToRead?.[1]?.image?.filename}
          alt="reason-to-read"
          width="1200"
          height="480"
        />
        {/* <div className="flex items-center justify-center lg:mt-14 md:mt-10 mt-6">
            <ButtonV2
              redirect="#download-ebook-form"
              label={reasonToRead?.[1]?.text}
              scrollingButton
            />
          </div> */}
      </div>
    </div>
  );
};

export default ReasonToReadBook;
