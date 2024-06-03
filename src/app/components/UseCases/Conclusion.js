"use client";
import Image from "next/image";
import React from "react";

const Conclusion = () => {
  return (
    <div className="bg-colorPrimary px-[5rem]">
      <div className="container mx-auto py-[7rem] relative w-[80%]">
        <Image
          className="w-[169px] h-[203px] absolute top-0 right-0"
          src="/images/thumb-left.svg"
          alt="thumb-left"
          width="169"
          height="203"
        />
        <div className="bg-colorWhite w-[80%] mx-auto rounded-[42px] py-20 px-24">
          <h2 className="mb-12">Conclusion:</h2>
          <p className="!text-[32px] font-medium !mb-6">
            Lorem ipsum dolor sit amet consectetur. Imperdietyui viverra
            vulputate mattis non dictumst sed duis.
          </p>
          <p className="text-colorGray leading-10">
            Adipiscing semper varius mattis eget at mauris arcu enim sed. Eget
            odio id nisl phasellus. Phasellus enim diam ipsum purus risus ornare
            amet neque dolor. Senectus fermentum euismod neque vitae bibendum
            fusce massa blandit. Congue pellentesque nisl ipsum purus risus at
            sed orci vel. Cursus sagittis convallis neque augue tempor nisl.
            Diam accumsan massa lacus donec odio. Mauris pellentesque id viverra
            neque arcu arcu.
          </p>
        </div>
        <Image
          className="w-[173px] h-[187px] absolute bottom-0 left-0"
          src="/images/thumb-right.svg"
          alt="thumb-right"
          width="169"
          height="203"
        />
      </div>
    </div>
  );
};

export default Conclusion;
