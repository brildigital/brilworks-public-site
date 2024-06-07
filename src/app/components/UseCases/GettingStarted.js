import Image from "next/image";
import React from "react";

const GettingStarted = () => {
  return (
    <div className="container w-full mx-auto lg:py-20 py-10 px-6 lg:px-[96px]">
      <h2 className="mb-8 text-center">Getting Started</h2>
      <div className="flex lg:flex-row flex-col-reverse justify-between gap-10">
        <div className="lg:w-[45%] w-full lg:py-24">
          <p className="lg:w-[85%] w-full lg:!text-4xl md:!text-3xl text-2xl !font-bold !mb-6">
            Adipiscing semper varius mattis eget at mauris arcu enim sed.
          </p>
          <p className="text-colorGray lg:leading-[40px]">
            Lorem ipsum dolor sit amet consectetur. Imperdiet viverra vulputate
            mattis non dictumst sed duis libero tempus. Adipiscing semper varius
            mattis eget at mauris arcu enim sed. Eget odio id nisl phasellus.
            Phasellus enim diam ipsum purus risus ornare amet neque dolor.
            Senectus fermentum euismod neque vitae bibendum fusce massa blandit.
          </p>
        </div>
        <div className="lg:w-1/2 w-full border-2 border-colorBlack rounded-[30px] flex items-center justify-center lg:h-auto h-[300px]">
          <Image
            className="w-[82px] h-[75px]"
            src="/images/Image_icon.png"
            alt="image-icon"
            width="81"
            height="75"
          />
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
