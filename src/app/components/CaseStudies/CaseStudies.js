"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Heading from "../HTMLComponents/Heading";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import { getCasestudyData } from "../lib/getStoryblokData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.Card)
);
const CardBody = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.CardBody)
);

const CaseStudies = () => {
  const [caseStudyData, setCaseStudyData] = useState("");
  const [totalCaseStudies, setTotalCaseStudies] = useState(0);

  const fetchData = async () => {
    try {
      const caseStudy = await getCasestudyData();
      setCaseStudyData(caseStudy.storyData);
      setTotalCaseStudies(caseStudy.totalData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-detail-hero">
        <div className="h-full min-h-[400px] md:max-h-[600px] max-h-full">
          <div className="container max-w-[1280px] main-section-padding !pt-24 mx-auto">
            <div className="flex flex-col items-start justify-center h-full min-h-[300px] md:max-h-[600px]  sxl:mt-20 mt-10 max-h-full">
              <Heading type="h1" className="text-white" text="Case Studies" />
              <p className="text-white lg:text-2xl md:text-xl text-lg !mt-5">
                Insightful case studies showcase real-world challenges,
                innovative solutions, and measurable impact, providing
                invaluable lessons for diverse industries and professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-[1280px] main-section-padding-bottom mx-auto">
        <div
          className={`grid  ${
            !caseStudyData?.length
              ? "grid-cols-1"
              : "xl:grid-cols-3 md:grid-cols-2 grid-cols-1"
          } md:gap-8 gap-6`}
        >
          {caseStudyData?.length ? (
            caseStudyData
              ?.sort((a, b) => a.name.localeCompare(b.name))
              ?.map(({ name, slug }, index) => (
                <Link
                  as={`/internal/casestudies/${slug}`}
                  href={`/internal/casestudies/[slug]`}
                  prefetch={true}
                  className="group"
                  key={index}
                >
                  <Card className="shadow-lg shadow-themeColor-500/50 border hover:border-themeColor cursor-pointer">
                    <CardBody className="p-8">
                      <h2 className="text-2xl font-bold mb-7">{name}</h2>
                      <div className="inline-flex gap-2 why_text font-bold ">
                        <p className="group-hover:text-colorBlack text-themeColor">
                          Know More
                        </p>
                        <FontAwesomeIcon
                          className="group-hover:text-colorBlack text-themeColor ml-2"
                          size="lg"
                          icon={faArrowRight}
                        />
                      </div>
                    </CardBody>
                  </Card>
                </Link>
              ))
          ) : (
            <div className="flex align-middle justify-center p-12">
              <FetchDataSpinner />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
