"use client";
import Link from "next/link";
import { scrollToSection } from "../lib/commonfunction";
import Image from "next/image";
import { useEffect, useState } from "react";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import { getDeveloperData } from "../lib/getDeveloper";
import { usePathname } from "next/navigation";

const TechnologyDevelopers = () => {
  const pathname = usePathname();
  const [techDeveloperData, setTechDeveloperData] = useState([]);

  const expertInTechnologyColor = [
    "bg-[#dcecff]",
    "bg-[#f9f0de]",
    "bg-[#dcf9f0]",
    "bg-[#ede9ff]",
    "bg-[#f7e6ec]",
  ];

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
      default:
        developerType = null;
    }

    if (developerType) {
      fetchDevelopersDetail(developerType);
    }
  }, []);

  return (
    <div className="mx-auto service_width md:pb-[6rem] md:pt[4rem] py-[4rem] workpadd_borderTop end-to-end">
      <div className="end-To-end">
        <div className="endTO_text home_sec2_txt3">
          {pathname === "/hire-reactjs-developer/" ? (
            <p className="!w-full p-0">
              HIRE REACT JS DEVELOPERS TO BUILD <br />
              HIGH PERFORMING APPS
            </p>
          ) : (
            <>
              {pathname === "/hire-nodejs-developer/" ? (
                <p className="!w-full p-0">
                  HIRE NODE JS DEVELOPERS TO SCALE YOUR <br />
                  DEVELOPMENT TEAM
                </p>
              ) : (
                <>
                  {pathname === "/hire-java-developer/" ? (
                    <p className="!w-full p-0">
                      HIRE SPRING BOOT DEVELOPER + JAVA DEVELOPER TO
                      <br />
                      DEVELOP CUTTING-EDGE APPLICATIONS
                    </p>
                  ) : (
                    <>
                      {pathname === "/hire-react-native-developer/" ? (
                        <p className="!w-full p-0">
                          HIRE REACT NATIVE DEVELOPERS TO BUILD
                          <br /> FEATURE-RICH MOBILE APPLICATIONS
                        </p>
                      ) : (
                        <>
                          {pathname === "/hire-aws-developer/" ? (
                            <p className="!w-full p-0">
                              HIRE AWS DEVELOPERS & MAKE THEM YOUR
                              <br />
                              POWERFUL BUSINESS ASSETS
                            </p>
                          ) : (
                            <>
                              {pathname === "/hire-ui-ux-designer/" ? (
                                <p className="!w-full p-0">
                                  HIRE UI/UX DESIGNERS FOR THE STUNNING
                                  <br />
                                  USER EXPERIENCE SERVICES
                                </p>
                              ) : (
                                <p className="!w-full p-0">
                                  HIRE BLOCKCHAIN DEVELOPERS TO BUILD
                                  <br />
                                  HIGH PERFORMING APPS
                                </p>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>

      <div
        className={`grid xl:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-[2rem] reveal`}
      >
        {techDeveloperData.length ? (
          techDeveloperData.map(({ content, uuid }) => (
            <div
              className="border-1 border-[#80808038] rounded-[30px]"
              key={uuid}
            >
              <div className="home_sec3_box1">
                <div className="dots_flex">
                  <div className="dots"></div>
                  <div className="dots"></div>
                  <div className="dots"></div>
                </div>
                <div className="border-t-[1px]">
                  <div className="style_sec3_swiper_home !pt-4">
                    <div className="flex items-center gap-[1rem]">
                      <div className="swiper_sec3_img1">
                        <Image
                          className="w-[75px] rounded-[40px]"
                          src={content?.Image?.filename}
                          alt={content?.Image?.alt}
                          width="300"
                          height="300"
                        />
                      </div>
                      <div className="home_sec3_txt2">
                        <p className="!text-[1.5rem] !font-bold">
                          {content?.Name}
                        </p>
                        <p className="font_style_sec3 ng-binding !font-bold">
                          {content?.Designation}
                        </p>
                      </div>
                    </div>
                    <div className="service_description border-b-[1px]">
                      <p
                        className={`${
                          pathname === "/hire-nodejs-developer/" ||
                          pathname === "/hire-react-native-developer/" ||
                          pathname === "/hire-aws-developer/"
                            ? "h-[200px]"
                            : null
                        }`}
                      >
                        {content?.Description}
                      </p>
                    </div>
                    {pathname !== "/hire-aws-developer/" && (
                      <>
                        <div className="py-[1rem] flex items-center gap-[1rem]">
                          <p>
                            <Image
                              className="w-[21px]"
                              src="/images/icons-06.png"
                              alt="star"
                              width="22"
                              height="22"
                            />
                          </p>
                          <div className="service_description_font_sec5">
                            <p>Expertise in</p>
                          </div>
                        </div>
                        <div
                          className={`flex items-center ${
                            pathname === "/hire-blockchain-developer/"
                              ? "gap-[1.4rem]"
                              : "gap-[1rem]"
                          } flex-row flex-wrap custome_height_technology tech-tags`}
                        >
                          {content.Experts_In.length ? (
                            content.Experts_In.map((technology, index) => (
                              <div className="flexbasis_idea" key={index}>
                                <div
                                  className={`ideaBg_class ${expertInTechnologyColor[index]}`}
                                >
                                  <div className="idea_title work_sec2_txt4 ">
                                    <p>{technology}</p>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="flex align-middle justify-center">
                              <FetchDataSpinner />
                            </div>
                          )}
                        </div>
                      </>
                    )}

                    <div className="flex items-center gap-[1rem] pt-[1rem]">
                      <p>
                        <Image
                          src="/images/icons2-05.png"
                          alt="right"
                          width="23"
                          height="23"
                        />
                      </p>
                      <div className="service_description_font_sec5">
                        <p>
                          {content?.Experience_in_Year}+ Years of Experience
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-[1rem] pt-[1rem]">
                      <p>
                        <Image
                          src="/images/icons-08.png"
                          alt="time"
                          width="22"
                          height="22"
                        />
                      </p>
                      <div className="service_description_font_sec5">
                        <p>Full Time Available</p>
                      </div>
                    </div>
                    <div className="pt-[5rem]">
                      <Link
                        href="#section10_service"
                        onClick={(e) => scrollToSection(e, "section10_service")}
                        className=""
                      >
                        <div className="btn_flex_dev xl:py-[4px] xl:px-[40px] lg:py-[4px] lg:px-[28px] md:py-[4px] md:px-[22px] !py-[4px] !px-[22px]">
                          <div className="chat_icon">
                            <Image
                              src="/images/hire-hand.png"
                              alt="hand"
                              width="28"
                              height="44"
                            />
                          </div>
                          <div className="chat_btn">
                            <p className="transition ng-binding">
                              Hire {content?.Name}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex align-middle justify-center p-20">
            <FetchDataSpinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default TechnologyDevelopers;
