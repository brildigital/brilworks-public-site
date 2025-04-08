import Image from "next/image";
import React from "react";

const ClientBackground = () => {
  return (
    <div className="main-section-padding">
      <div className="container max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between lg:flex-row flex-col-reverse gap-8">
          <div className="basis-1/5">
            <h2 className="font-bold 2xl:text-4xl xl:text-3xl lg:text-3xl text-xl !leading-tight">
              Client
              <span className="text-themeColor"> Background</span>
            </h2>
            <div className="lg:mt-12 md:mt-8 mt-6 w-[100px]">
              <Image
                src="/images/client-bg.png"
                alt="project-overview-img"
                width="100"
                height="100"
              />
            </div>
          </div>
          <div className="basis-4/5">
            <p className="text-colorGray md:text-xl text-lg md:!mb-5 !mb-4">
              Trackimo™ developed the world’s smartest, most compact and cost
              effective GPS tracking device, providing user friendly and
              powerful options for keeping track of people and things cared for.
            </p>
            <p className="text-colorGray md:text-xl text-lg">
              The Trackimo™ product portfolio covers both consumer and business
              sectors including fleet tracking and logistics management
              solutions, customizable and scalable IoT platform, remote gateways
              and consumer tracking devices. Trackimo’s goal is to transform
              business models and improve user daily lives through the
              development of products that provide peace of mind, fast ROI and
              efficient, leading edge technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientBackground;
