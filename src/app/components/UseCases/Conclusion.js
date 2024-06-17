"use client";
import Image from "next/image";
import React from "react";

const Conclusion = () => {
  return (
    <div className="bg-themePrimary lg:px-[5rem] md:px-8 px-2">
      <div className="container mx-auto lg:py-[7rem] md:py-[4rem] py-8 relative lg:w-[80%] px-4 w-full">
        <Image
          className="lg:w-[169px] aspect-auto md:w-[100px] w-[60px] absolute top-0 right-0"
          src="/images/thumb-left.svg"
          alt="thumb-left"
          width="169"
          height="203"
        />
        <div className="bg-colorWhite w-[80%] mx-auto md:rounded-[42px] rounded-[30px] lg:py-20 md:py-10 py-5 lg:px-24 md:px-12 px-4">
          <h2 className="lg:mb-12 md:mb-6 mb-4">Conclusion:</h2>
          <p className="lg:!text-[32px] md:!text-[28px] !text-xl font-medium lg:!mb-6 !mb-3">
            Lorem ipsum dolor sit amet consectetur. Imperdietyui viverra
            vulputate mattis non dictumst sed duis.
          </p>
          <p className="text-colorGray lg:leading-10">
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
          className="lg:w-[173px] aspect-auto md:w-[100px] w-[60px] absolute bottom-0 left-0"
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
