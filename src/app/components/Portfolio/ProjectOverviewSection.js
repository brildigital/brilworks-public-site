import React from "react";
import Heading from "../HTMLComponents/Heading";
import Image from "next/image";

const ProjectOverviewSection = ({ projectOverview }) => {
  return (
    <div className="bg-[url(/images/v2/overview-bubble.svg)] bg-no-repeat bg-[0%_60px] md:bg-[0%_110px] sxl:bg-[17.5%_142px]">
      <div className="container max-w-[1280px] main-section-padding mx-auto reveal">
        <Image
          src="/images/v2/overview-file.svg"
          width={120}
          height={120}
          alt="overview-icon"
          className="lg:w-28 md:w-20 w-16 lg:h-28 md:h-20 h-16 lg:mb-7.5 mb-5"
        />
        <Heading
          type="h2"
          className="lg:!text-[34px] md:!text-3xl !text-2xl mb-4"
          text={projectOverview?.[0]?.Title}
        />

        {projectOverview?.[0]?.Description1 && (
          <p className="md:text-lg text-base">
            {projectOverview?.[0]?.Description1}
          </p>
        )}

        {projectOverview?.[0]?.Description2 && (
          <p className="md:text-lg text-base">
            {projectOverview?.[0]?.Description2}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectOverviewSection;
