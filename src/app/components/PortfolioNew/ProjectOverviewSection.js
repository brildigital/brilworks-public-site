import React from "react";
import Heading from "../HTMLComponents/Heading";

const ProjectOverviewSection = ({ projectOverview }) => {
  return (
    <div className="container max-w-[1440px] md:px-[60px] px-[20px] lg:px-[100px] 3xl:px-[120px] lg:py-[60px] md:py-[40px] py-[30px] mx-auto">
      <Heading
        type="h2"
        className="mb-6 h1-border-b w-fit"
        text={projectOverview?.[0]?.Title}
      />
      {projectOverview?.[0]?.Description1 && (
        <p className="md:text-lg text-base !mb-5">
          {projectOverview?.[0]?.Description1}
        </p>
      )}

      {projectOverview?.[0]?.Description2 && (
        <p className="md:text-lg text-base">
          {projectOverview?.[0]?.Description2}
        </p>
      )}
    </div>
  );
};

export default ProjectOverviewSection;
