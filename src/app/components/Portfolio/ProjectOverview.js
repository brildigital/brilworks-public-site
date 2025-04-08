import Image from "next/image";
import React from "react";

const ProjectOverview = () => {
  return (
    <div className="bg-sectionBG main-section-padding">
      <div className="container max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between lg:flex-row flex-col-reverse gap-8">
          <div className="basis-1/5">
            <h2 className="font-bold 2xl:text-4xl xl:text-3xl lg:text-3xl text-xl !leading-tight">
              Project
              <span className="text-themeColor"> Overview</span>
            </h2>
            <div className="lg:mt-12 md:mt-8 mt-6 w-[100px]">
              <Image
                src="/images/project-overview-green.png"
                alt="project-overview-img"
                width="100"
                height="100"
              />
            </div>
          </div>
          <div className="basis-4/5">
            <p className="text-colorGray md:text-xl text-lg md:!mb-5 !mb-4">
              Trackimo is a US company, specialising in highly reliable and
              effective tracking solutions. The company's end-to-end global IoT
              platform provides personal safety and tracking solutions to more
              than 500,000 consumers and more than 50 enterprise clients
              worldwide.
            </p>
            <p className="text-colorGray md:text-xl text-lg">
              Trackimo's own developed hardware and software cover a vast range
              of applications and provide flexibility and scalability to fit
              your business needs. Highly recognized, the company is a qualified
              supplier of trackers to Vodafone, Leica, Sumitomo and other
              telecom and industrial clients. Our world is rapidly changing into
              a place, where everything becomes connected - bikes, industrial
              tools, containers, equipment, parcels - you name it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
