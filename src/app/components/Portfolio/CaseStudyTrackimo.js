import React from "react";
import Button from "../Common/Button";
import Image from "next/image";
import ProjectOverview from "./ProjectOverview";
import ClientBackground from "./ClientBackground";
import TheChallenges from "./TheChallenges";
import OurSolutionCasestudy from "./OurSolutionCasestudy";
import KeyOutcomes from "./KeyOutcomes";
import OtherCaseStudy from "./OtherCaseStudy";

const CaseStudyTrackimo = () => {
  return (
    <>
      <div className="section-padding !pt-24">
        <div className="container max-w-[1280px] mx-auto">
          <div className="flex items-center justify-between lg:flex-row flex-col-reverse gap-8">
            <div className="lg:basis-3/5">
              <h1 className="font-semibold 2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl !leading-tight lg:my-6 my-4">
                How We Helped <span className="text-themeColor">Trackimo </span>
                Build A Smart Software Solution
              </h1>
              <p className="font-bold !mb-4">
                <span className="text-themeColor">Sector: </span>GPS Tracking
              </p>
              <p className="font-bold !mb-4">
                <span className="text-themeColor">Technology: </span>Java &
                Angular
              </p>
              <Button
                innerClassName="flex items-center justify-center gap-2"
                className="xl:mt-20 md:mt-14 mt-8"
                redirect="https://trackimo.com"
                label="Visit Website"
                icon="right-arrow-next"
                target="_blank"
                rel="noopener"
              />
            </div>
            <div className="lg:basis-2/5">
              <Image
                loading="lazy"
                decoding="async"
                className="alignnone"
                src="/images/gps-trackers-devices-uses2-1.webp"
                width="490"
                height="365"
                alt="Trackimo"
              />
            </div>
          </div>
        </div>
      </div>
      <ProjectOverview />
      <ClientBackground />
      <TheChallenges />
      <OurSolutionCasestudy />
      <KeyOutcomes />
      <OtherCaseStudy />
    </>
  );
};

export default CaseStudyTrackimo;
