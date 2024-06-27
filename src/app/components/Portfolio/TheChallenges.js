import Image from "next/image";
import React from "react";

const TheChallenges = () => {
  return (
    <div className="bg-sectionBG section-padding">
      <div className="container max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between lg:flex-row flex-col lg:gap-10 md:gap-8 gap-5">
          <div className="lg:basis-2/5">
            <Image
              src="/images/the-challenge-cs.webp"
              width="560"
              height="426"
              alt="Trackimo"
            />
          </div>
          <div className="lg:basis-3/5">
            <h2 className="font-bold 2xl:text-4xl xl:text-3xl lg:text-3xl text-xl !leading-tight mb-5">
              The
              <span className="text-themeColor"> Challenge</span>
            </h2>
            <p className="text-colorGray lg:w-[90%] w-full text-xl">
              There were many challenges like managing a large database of
              millions of devices, which failed using existing databases.
              Server-side code was written in monolithic architecture, so it was
              hard to manage everything at a single place. Devices were
              communicating with a single channel. No automated process for
              deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheChallenges;
