import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col w-full gap-5 max-w-[1440px] mx-auto mt-[2rem] py-8">
      <Image
        className="w-full"
        src="/images/posters/OUR-CORE-VALUES.svg"
        alt="our-core-value"
        width="1440"
        height="960"
        priority="true"
      />
      <Image
        className="w-full"
        src="/images/posters/Always-Available-Always-Reliable.svg"
        alt="our-core-value"
        width="1440"
        height="960"
      />{" "}
      <Image
        className="w-full"
        src="/images/posters/Accountability.svg"
        alt="our-core-value"
        width="1440"
        height="960"
      />{" "}
      <Image
        className="w-full"
        src="/images/posters/Innovation.svg"
        alt="our-core-value"
        width="1440"
        height="960"
      />
      <Image
        className="w-full"
        src="/images/posters/Collaboration.svg"
        alt="Collaboration"
        width="1440"
        height="960"
      />
      <Image
        className="w-full"
        src="/images/posters/Continuous-Learning.svg"
        alt="our-core-value"
        width="1440"
        height="960"
      />
    </div>
  );
};

export default page;
