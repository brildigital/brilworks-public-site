import React from "react";
import Heading from "../HTMLComponents/Heading";

const ProjectOverviewSection = ({ projectOverview }) => {
  return (
    <div className="px-[70px] py-[60px]">
      <div className="container max-w-[1440px] mx-auto">
        <Heading
          type="h2"
          className="mb-6"
          text={projectOverview?.[0]?.Title}
        />
        {projectOverview?.[0]?.Description1 && (
          <p className="text-colorGray text-2xl !mb-5">
            {projectOverview?.[0]?.Description1}
          </p>
        )}

        {projectOverview?.[0]?.Description2 && (
          <p className="text-colorGray text-2xl">
            {projectOverview?.[0]?.Description2}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectOverviewSection;
