"use client";
import Link from "next/link";
import { scrollToSection } from "../lib/commonFunction";
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
        {techDeveloperData?.length ? (
          techDeveloperData.map(({ content, id }, index) => (
            <div className="endTO_text solutions" key={id}>
              {index === 0 && (
                <h2
                  className={`${
                    pathname === "/hire-java-developer/" ? "!w-full" : ""
                  } p-0`}
                >
                  {content?.Display_text}
                </h2>
              )}
            </div>
          ))
        ) : (
          <div className="w-full flex align-middle justify-center pt-8">
            <FetchDataSpinner />
          </div>
        )}
      </div>

      <div
        className={`grid ${
          techDeveloperData?.length ? "xl:grid-cols-3" : ""
        } md:grid-cols-1 grid-cols-1 gap-[2rem] md:px-[5rem] lg:px-0 reveal`}
      >
        {techDeveloperData?.length ? (
          techDeveloperData.map(
            ({ content, id }, index) =>
              index > 0 && (
                <div
                  className="border border-[#80808038] rounded-[30px]"
                  key={id}
                >
                  <div className="home_sec3_box1">
                    <div className="dots_flex !rounded-[30px] w-[85%]">
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
                            <p className="ng-binding !font-bold">
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
                                : ""
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
                                  className="w-[15px] lg:w-[21px]"
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
                              {content?.Experts_In?.length ? (
                                content?.Experts_In.map((technology, index) => (
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
                                <div className="w-full flex align-middle justify-center">
                                  <FetchDataSpinner />
                                </div>
                              )}
                            </div>
                          </>
                        )}

                        <div className="flex items-center gap-[1rem] pt-[1rem]">
                          <p>
                            <Image
                              className="md:w-[17px] xl:w-full"
                              src="data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_30_12)'%3E%3Ccircle cx='10' cy='10' r='10' fill='%2300C4C8'/%3E%3Cpath d='M8.08102 13.9311C8.18816 14.0217 8.34951 14.0235 8.45897 13.9333C10.8471 11.9585 13.024 9.88733 15.6214 7.7973C15.8456 7.61698 15.9792 7.36482 15.9978 7.08682C16.0551 6.22275 14.9755 5.65693 14.2418 6.23531C12.0196 7.98443 10.1719 9.57103 8.44857 11.2108C8.1099 10.8884 7.65676 10.4271 7.09779 9.83522C6.66554 9.3777 5.88549 9.2986 5.36077 9.79257C4.89989 10.2261 4.8779 10.9221 5.31028 11.3773C6.35388 12.4751 7.00913 13.0229 8.08102 13.9311Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_30_12'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"
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
                              className="md:w-[15px] xl:w-full"
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
                            onClick={(e) =>
                              scrollToSection(e, "section10_service")
                            }
                          >
                            <div className="btn_flex_dev xl:py-[4px] xl:px-[40px] lg:py-[4px] lg:px-[28px] md:py-[4px] md:px-[22px] !py-[4px] !px-[22px]">
                              <div className="chat_icon">
                                <img
                                  decoding="async"
                                  loading="lazy"
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
              )
          )
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
