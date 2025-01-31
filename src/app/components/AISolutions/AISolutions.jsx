"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { BrilworksButton } from "../Common/BrilworksBtn";
import { useMediaQuery } from "react-responsive";

const caseStudies = [
  {
    title: "How TechTeckGeek Achieved 80% Faster Reporting",
    description:
      "TechTeckGeek revamped their data workflow, reducing the need for developer intervention and gaining quicker, more accurate insights with our SQL Chatbot.",
    linkText: "Learn More",
  },
  {
    title: "TechNovis Cut Data Analysis Time by 50%",
    description:
      "Thanks to the SQL Chatbot, TechNovis streamlined their data retrieval and reporting, freeing up their team to focus on strategic tasks.",
    linkText: "Learn More",
  },
  {
    title: "GreenTech reduced SQL expert dependency by 75%",
    description:
      "GreenTech Innovators reduced SQL expert dependency significantly, empowering their teams to make faster, data-driven decisions across the board.",
    linkText: "Learn More",
  },
];

function AISolutions({ data }) {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  useEffect(() => {
    togglePlayPause();
  }, [isPlaying]);

  return (
    <>
      <div className=" flex flex-col gap-6 md:gap-8 xl:gap-10 justify-center items-center font-medium container max-w-[1440px] mx-auto px-6 md:px-14 xl:px-28">
        <h1 className="text-2xl sm:text-3xl md:text-5xl text-center font-semibold">
          {data?.content?.title ? data?.content?.title : ""}
        </h1>
        <div className="text-lg md:text-xl text-center">
          {data?.content?.description || ""}
        </div>
        <BrilworksButton label="Get Started Now" />

        <div className="bg-gradient-to-br from-blue-300 to-white p-2 md:p-12 flex-center-center rounded-3xl relative">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="!cursor-pointer bg-gradient-to-br z-10 from-[#007AEB] to-blue-100 absolute md:bottom-16 bottom-4 md:right-16 right-4 rounded-[50%] h-12 w-12 md:h-24 md:w-24 text-center"
          >
            <div className="flex justify-center items-center scla">
              <FontAwesomeIcon
                icon={isPlaying ? faPlay : faPause}
                style={{ height: "2rem", width: "2rem", color: "white" }}
              />
            </div>
          </button>
          <video
            ref={videoRef}
            width={1100}
            height={534}
            className="!rounded-[20px]"
            src={data?.content?.videoLink.url}
            cautoplay="autoplay"
            loop="true"
            muted
            defaultmuted
            playsInline
          ></video>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container max-w-[1440px] mx-auto px-6 md:px-14 xl:px-28">
        <div className="flex flex-col gap-3 md:gap-5">
          {data?.content?.Working?.slice(0, 1).map((item, index) => (
            <React.Fragment key={index}>
              <h1 className="text-2xl  sm:text-3xl md:text-5xl font-semibold">
                {item?.title ?? ""}
              </h1>
              <div className="text-lg md:text-xl">{item.description}</div>
            </React.Fragment>
          ))}
          <div className="flex flex-col sm:gap-3 md:gap-5 ">
            {data?.content?.Working?.slice(1).map((item, index) => {
              if (item.component == "First Section") {
                return (
                  <div
                    key={index}
                    className="mt-4 mb-2 flex items-center md:justify-start justify-center"
                  >
                    <BrilworksButton label={item?.button_text} type="primary" />
                  </div>
                );
              }
              return (
                <div
                  key={index}
                  className={`${isMobile ? "flex flex-col gap-2 mb-2" : ""}`}
                >
                  <h3 className="flex gap-2 font-semibold text-lg md:text-xl xl:text-2xl">
                    {item?.Key ? (
                      <>
                        <Image
                          src="/images/AISolutionsTick.svg"
                          width={28}
                          height={28}
                          alt="Tick"
                          className="h-full w-6 items-center"
                        />
                        {item?.Key}
                      </>
                    ) : (
                      <></>
                    )}
                  </h3>
                  <div>{item.Value}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="">
          {data?.content?.Working?.slice(0, 1).map((item, index) => (
            <Image
              key={index}
              className="rounded-[20px]"
              src={item?.image?.filename ?? ""}
              alt={item?.image?.alt || "Image"}
              width={500}
              height={573}
            />
          ))}
        </div>
      </div>
      <div className="container max-w-[1440px] mx-auto px-6 md:px-14 xl:px-28 flex flex-col gap-6 md:gap-10">
        {data?.content?.seamless_integration
          ?.slice(0, 1)
          ?.map((item, index) => (
            <div key={index}>
              <h2 className="text-2xl sm:text-3xl md:text-5xl text-center font-semibold">
                {item.title ?? ""}
              </h2>
            </div>
          ))}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:p-6 p-1 gap-10">
          {data?.content?.seamless_integration?.slice(1)?.map((item, index) => (
            <div
              className="flex md:flex-row flex-col gap-2 sm:gap-5 p-4 rounded-2xl  border border-gray-200 "
              key={index}
            >
              <div className="bg-gray-100 rounded-md p-2 min-h-[100px] min-w-[100px]  flex justify-center items-center">
                <Image
                  className="rounded-md w-[62px] h-[62px]"
                  src={item?.image?.filename}
                  width={128}
                  height={128}
                  alt={item?.image?.alt}
                />
              </div>

              <div className="flex flex-col">
                <div className="p-0">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                </div>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="p-8 flex flex-col gap-6 md:gap-8 container max-w-[1440px] mx-auto px-6 md:px-14 xl:px-28">
        <h2 className="text-2xl sm:text-3xl md:text-5xl text-center font-semibold">
          Case Studies
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-md border border-gray-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
              </div>
              <Link
                href="#"
                className="text-blue-500 font-medium flex items-center hover:underline"
              >
                {study.linkText} <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AISolutions;
