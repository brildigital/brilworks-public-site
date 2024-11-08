import React from "react";
import Heading from "../HTMLComponents/Heading";

const ProjectOverviewSection = () => {
  const projectOverview = [
    {
      Title: "Overview",
      Description1:
        "Our client, Cruit, set out to build a platform that would revolutionize the recruitment process, particularly focusing on streamlining employee referral program. They wanted to develop a solution enabling managers to oversee everything from a single dashboard with next-level features, such as automated reward fulfillment, real-time candidate tracking, and integration with existing HR tools.",
      Description2:
        "Cruit wanted to address the typical challenges businesses face with referral programs, such as fragmented workflows, scattered spreadsheets, lack of follow-ups, and a disconnected reward system.",
    },
  ];

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
