"use client";
import React from "react";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";
import Button from "../Common/Button";

const ReasonToReadBook = ({ reasonToRead }) => {
  return (
    <div className="lg:px-[70px] px-4 lg:pt-[60px] pt-8">
      <div className="container max-w-[1440px] mx-auto our-work-list-icon">
        <div className="lg:mb-[60px] mb-8">
          <Heading
            type="h2"
            className="text-center mb-5 uppercase"
            text={reasonToRead?.[0]?.Key}
          />
          <p className="md:text-xl text-lg text-colorGray lg:w-4/5 w-full mx-auto text-center">
            {reasonToRead?.[0]?.Value}
          </p>
          <Image
            className="lg:-mt-[170px] md:-mt-[120px]"
            src={reasonToRead?.[1]?.image?.filename}
            alt="reason-to-read"
            width="1200"
            height="480"
          />
          <div className="flex items-center justify-center py-10 lg:mt-14 md:mt-10 mt-6">
            <Button
              redirect="#download-ebook-form"
              label={reasonToRead?.[1]?.text}
              scrollingButton
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReasonToReadBook;
