"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Heading from "../HTMLComponents/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.Card)
);
const CardBody = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.CardBody)
);

const MainGist = () => {
  const techQandNData = [
    {
      title: "AWS",
      imageSrc: "/images/AWS-DEVELOPMENT.svg",
      imageAlt: "AWS_image",
      linkUrl: "/gist/aws/",
    },
    {
      title: "Java",
      imageSrc: "/images/JAVA.svg",
      imageAlt: "Java_image",
      linkUrl: "/gist/java/",
    },
    {
      title: "NodeJS",
      imageSrc: "/images/NODE.JS.svg",
      imageAlt: "NodeJS_image",
      linkUrl: "/gist/node/",
    },
    {
      title: "React Native",
      imageSrc: "/images/REACT-NATIVE.svg",
      imageAlt: "React_Native_image",
      linkUrl: "/gist/react-native/",
    },
    {
      title: "ReactJS",
      imageSrc: "/images/REACT.JS.svg",
      imageAlt: "ReactJS_image",
      linkUrl: "/gist/react/",
    },
  ];

  return (
    <>
      <div className="bg-detail-hero">
        <div className="h-full min-h-[600px] md:max-h-[700px] max-h-full">
          <div className="container max-w-[1280px] main-section-padding !pt-24 mx-auto">
            <div className="flex flex-col items-start justify-center h-full min-h-[500px] md:max-h-[700px] max-h-full">
              <p className="text-colorWhite uppercase md:text-2xl text-xl md:!mb-7.5 !mb-5">
                We Write
              </p>
              <Heading type="h1" className="text-white" text="Tech Q&A" />
              <p className="text-white lg:text-2xl md:text-xl text-lg !mt-5">
                Get every mistake you've made fixed in one location. We make an
                honest effort to address your technical inquiries, focusing on
                the developer community. Glory to Tech!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-[1280px] main-section-padding-bottom mx-auto">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-6">
          {techQandNData.map(
            ({ title, imageSrc, imageAlt, linkUrl }, index) => (
              <Link href={linkUrl} key={index}>
                <Card className="border border-borderGray shadow-none hover:border-themeColor duration-500 cursor-pointer group">
                  <CardBody className="p-8">
                    <div className="md:w-14 w-10 mb-4">
                      <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={50}
                        height={50}
                      />
                    </div>
                    <h2 className="text-2xl font-medium mb-7 text-colorBlack">
                      {title}
                    </h2>
                    <div className="inline-flex gap-2 why_text font-bold ">
                      <p className="group-hover:text-colorBlack text-themeColor">
                        {title} Q & N
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
            )
          )}
        </div>
      </div>
    </>
  );
};

export default MainGist;
