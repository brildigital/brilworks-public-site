"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody } from "@material-tailwind/react";

const CaseStudies = () => {
  const caseStudyData = [
    {
      title: "Accelevent",
      linkUrl: "accelevent/",
    },
    {
      title: "Endo",
      linkUrl: "endo/",
    },
    {
      title: "Nick Academy",
      linkUrl: "nickacademy/",
    },
    {
      title: "Orokii",
      linkUrl: "orokii/",
    },
    {
      title: "Reliant",
      linkUrl: "reliant/",
    },

    {
      title: "ServiceBuddy",
      linkUrl: "servicebuddy/",
    },
    {
      title: "TrackIMO",
      linkUrl: "trackimo/",
    },
    {
      title: "Vugo",
      linkUrl: "vugo/",
    },
  ];

  return (
    <section className="portfolio mt-[6rem] mx-auto">
      <div className="service_width relative flex items-center justify-center">
        <Image
          className="h-[46vh] rounded-[20px]"
          src="/images/gist-banner.webp"
          alt="Case studies"
          width={1300}
          height={400}
          priority={true}
        />
        <div className="absolute bottom-1/4 w-full text-center mx-auto">
          <div className="how-we">
            <h1 className="font-style-solution-head xl:text-[4.5rem] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]">
              Case studies
            </h1>
            <p className="md:mx-auto mx-4 md:max-w-[70%]">
              Insightful case studies showcase real-world challenges, innovative
              solutions, and measurable impact, providing invaluable lessons for
              diverse industries and professionals.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto service_width md:py-[6rem] py-[4rem]">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-6 md:p-6 !pt-0">
          {caseStudyData.map(({ title, linkUrl }, index) => (
            <Link href={linkUrl} key={index}>
              <Card className="shadow-lg shadow-[#00b6cf]-500/50 border hover:border-[#00b6cf] cursor-pointer">
                <CardBody className="p-8">
                  <h2 className="text-2xl why_text font-bold mb-7">{title}</h2>
                  <div className="inline-flex gap-4 why_text font-bold ">
                    <p className="!text-[#00b6cf]">Know more</p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
