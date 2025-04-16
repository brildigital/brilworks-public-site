"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import { getDeveloperData } from "../lib/getDeveloper";
import { usePathname } from "next/navigation";
import Heading from "../HTMLComponents/Heading";
import ButtonV2 from "../Common/ButtonV2";

const TechnologyDevelopers = ({ bgClass = "bg-sectionBG" }) => {
  const pathname = usePathname();
  const [techDeveloperData, setTechDeveloperData] = useState([]);

  const expertInTechnologyColor = [
    "bg-[#E5F4FF]",
    "bg-[#E9FFE2]",
    "bg-[#FFE8FC]",
    "bg-[#FFE2E5]",
    "bg-[#F4ECFF]",
    "bg-[#FEF3E6]",
    "bg-[#EAFFFD]",
  ];

  const showTechImgBasedOnPathname = {
    "/hire-reactjs-developer/": "/images/REACT.JS.svg",
    "/hire-nodejs-developer/": "/images/NODE.JS.svg",
    "/hire-java-developer/": "/images/JAVA.svg",
    "/hire-aws-developer/": "/images/AWS-DEVELOPMENT.svg",
    "/hire-ui-ux-designer/": "/images/UIUX-DEVELOPMENT.svg",
    "/hire-react-native-developer/": "/images/REACT-NATIVE.svg",
    "/hire-blockchain-developer/": "/images/BLOCKCHAIN-DEVELOPMENT.svg",
    "/hire-flutterflow-developer/": "/images/flutterflow-logo2.svg",
    "/hire-bubble-developer/": "/images/bubble-dark-logo.svg",
    "/hire-adalo-developer/": "/images/adalo-logo.png",
    "/hire-low-code-no-code-developer/": "/images/mobile-app-liogo.svg",
    "/hire-mobile-app-developer/": "/images/mobile-app-liogo.svg",
  };

  async function fetchDevelopersDetail(developerType) {
    try {
      const developerData = await getDeveloperData(developerType);
      setTechDeveloperData(developerData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    let developerType;

    switch (pathname) {
      case "/hire-reactjs-developer/":
        developerType = "react-developers";
        break;
      case "/hire-nodejs-developer/":
        developerType = "node-developers";
        break;
      case "/hire-java-developer/":
        developerType = "java-developers";
        break;
      case "/hire-aws-developer/":
        developerType = "aws-developers";
        break;
      case "/hire-react-native-developer/":
        developerType = "react-native-developers";
        break;
      case "/hire-ui-ux-designer/":
        developerType = "ui-ux-designers";
        break;
      case "/hire-blockchain-developer/":
        developerType = "blockchain-developers";
        break;
      case "/hire-flutterflow-developer/":
        developerType = "flutterflow-developers";
        break;
      case "/hire-bubble-developer/":
        developerType = "bubble-developers";
        break;
      case "/hire-adalo-developer/":
        developerType = "adalo-developers";
        break;
      case "/hire-low-code-no-code-developer/":
        developerType = "low-code-no-code-native-developers";
        break;
      case "/hire-mobile-app-developer/":
        developerType = "mobile-app-developers";
        break;
      default:
        developerType = null;
    }

    if (developerType) {
      fetchDevelopersDetail(developerType);
    }
  }, []);

  return (
    <div className={bgClass}>
      <div className="container max-w-[1280px] main-section-padding mx-auto reveal">
        {techDeveloperData?.length ? (
          techDeveloperData.map(({ content, id }, index) => (
            <div className="" key={id}>
              {index === 0 && (
                <Heading
                  type="h2"
                  className="lg:!text-[34px] md:!text-3xl !text-2xl mb-3"
                  text={content?.Display_text}
                />
              )}
            </div>
          ))
        ) : (
          <div className="w-full flex items-center justify-center py-8">
            <FetchDataSpinner />
          </div>
        )}
        <p className="md:text-lg text-base lg:!mb-10 md:!mb-7.5 !mb-5">
          Our services drive sustainable growth.
        </p>
        <div
          className={`grid ${
            techDeveloperData?.length ? "sxl:grid-cols-3" : ""
          } md:grid-cols-1 grid-cols-1 sxl:gap-10 md:gap-7.5 gap-5 reveal`}
        >
          {techDeveloperData?.length ? (
            techDeveloperData.map(
              ({ content, id }, index) =>
                index > 0 && (
                  <div
                    key={id}
                    className="flex flex-col h-full border border-borderGray rounded-2xl bg-colorWhite"
                  >
                    <div className="md:p-7.5 p-5 flex-1">
                      <div className="flex items-start flex-col gap-4">
                        <div className="rounded-md border md:p-3 p-2 mb-2">
                          <Image
                            className={`w-[58px] ${
                              pathname === "/hire-mobile-app-developer/" ||
                              pathname === "/hire-low-code-no-code-developer/"
                                ? "invert"
                                : ""
                            }`}
                            src={showTechImgBasedOnPathname[pathname]}
                            alt={"React.js"}
                            width="300"
                            height="300"
                          />
                        </div>
                        <p className="md:text-xl text-lg font-medium">
                          {content?.Designation}
                        </p>
                        <div className="md:text-lg text-base slg:min-h-[161px] mb-1">
                          <p
                            className={`${
                              pathname === "/hire-nodejs-developer/" ||
                              pathname === "/hire-react-native-developer/" ||
                              pathname === "/hire-aws-developer/"
                                ? "h-[200px]"
                                : ""
                            }`}
                          >
                            {content?.Description}
                          </p>
                        </div>
                        {pathname !== "/hire-aws-developer/" && (
                          <div className="flex items-center flex-row flex-wrap gap-4">
                            {content?.Experts_In?.length ? (
                              content?.Experts_In.map((technology, index) => (
                                <div
                                  className={`rounded-md px-4 py-2 ${expertInTechnologyColor[index]}`}
                                  key={index}
                                >
                                  <p className="md:!text-base !text-sm">
                                    {technology}
                                  </p>
                                </div>
                              ))
                            ) : (
                              <div className="w-full flex align-middle justify-center">
                                <FetchDataSpinner />
                              </div>
                            )}
                          </div>
                        )}
                        <div className="flex items-center gap-2 pt-1">
                          <Image
                            className="w-6"
                            src="/images/v2/laptop.svg"
                            alt="experience"
                            width="24"
                            height="24"
                          />
                          <p className="!text-sm">
                            {content?.Experience_in_Year}+ Years of Experience
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <p>
                            <Image
                              className="w-5"
                              src="/images/v2/clock.svg"
                              alt="time"
                              width="20"
                              height="20"
                            />
                          </p>
                          <p className="!text-sm">Full Time Available</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-t-borderGray md:py-7 md:px-7.5 p-5 mt-auto">
                      <ButtonV2
                        label="Hire Now"
                        redirect="#section-contact-form"
                        scrollingButton
                        className="hover:text-themeColor"
                      />
                    </div>
                  </div>
                )
            )
          ) : (
            <div className="flex align-middle justify-center p-20">
              <FetchDataSpinner />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechnologyDevelopers;
