import React from "react";
import Heading from "../HTMLComponents/Heading";

const ProjectOverviewSection = ({ projectOverview }) => {
  return (
    <div className="lg:px-[70px] md:px-8 px-4 lg:py-[60px] md:py-16 py-8">
      <div className="container max-w-[1440px] mx-auto">
        <Heading
          type="h2"
          className="mb-6 !text-themeColor"
          text={projectOverview?.[0]?.Title}
        />
        {projectOverview?.[0]?.Description1 && (
          <p className="text-colorGray md:text-xl text-lg !mb-5 w-[95%]">
            {projectOverview?.[0]?.Description1}
          </p>
        )}

        {projectOverview?.[0]?.Description2 && (
          <p className="text-colorGray md:text-xl text-lg w-[95%]">
            {projectOverview?.[0]?.Description2}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectOverviewSection;
