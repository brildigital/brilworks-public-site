"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import { getCasestudyData } from "../lib/getStoryblokData";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";

const Card = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.Card)
);
const CardBody = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.CardBody)
);

const CaseStudies = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [caseStudyData, setCaseStudyData] = useState("");
  const [totalCaseStudies, setTotalCaseStudies] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const caseStudy = await getCasestudyData();
        setCaseStudyData(caseStudy.storyData);
        setTotalCaseStudies(caseStudy.totalData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="container portfolio mt-[6rem] mx-auto">
      <div className="service_width relative flex items-center justify-center">
        <Image
          className="h-[46vh] rounded-[20px]"
          src="/images/gist-banner.webp"
          alt="Case studies"
          width={isMobile ? 330 : 1300}
          height={isMobile ? 200 : 400}
          priority
          sizes="(min-width: 1040px) 42.35vw, (min-width: 640px) 91.84vw, calc(100vw - 30px)"
        />
        <div className="absolute bottom-1/4 w-full text-center mx-auto">
          <div className="how-we">
            <h1 className="font-style-solution-head xl:text-[4.5rem] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]">
              Case Studies
            </h1>
            <p className="md:mx-auto mx-4 md:max-w-[70%]">
              Insightful case studies showcase real-world challenges, innovative
              solutions, and measurable impact, providing invaluable lessons for
              diverse industries and professionals.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto service_width md:py-[4rem] py-[3rem]">
        <div
          className={`grid  ${
            !caseStudyData?.length
              ? "grid-cols-1"
              : "xl:grid-cols-3 md:grid-cols-2 grid-cols-1"
          } md:gap-8 gap-6 md:p-4`}
        >
          {caseStudyData?.length ? (
            caseStudyData
              ?.sort((a, b) => a.name.localeCompare(b.name))
              ?.map(({ name, slug }, index) => (
                <Link
                  as={`/internal/casestudies/${slug}`}
                  href={`/internal/casestudies/[slug]`}
                  prefetch={true}
                  key={index}
                >
                  <Card className="shadow-lg shadow-themeColor-500/50 border hover:border-themeColor cursor-pointer">
                    <CardBody className="p-8">
                      <h2 className="text-2xl font-bold mb-7">{name}</h2>
                      <div className="inline-flex gap-4 font-bold ">
                        <p className="!text-themeColor">Know more</p>
                        <div className="aerrow relative">
                          <img
                            decoding="async"
                            loading="lazy"
                            className="black_aerrow alignnone wp-image-28 size-full"
                            src="/images/black_aerrow-1.png"
                            alt="arrow"
                            width="46"
                            height="18"
                          />
                        </div>
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
    </section>
  );
};

export default CaseStudies;
