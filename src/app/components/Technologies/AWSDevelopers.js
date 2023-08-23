"use client";
import Link from "next/link";
import { scrollToSection } from "../lib/commonfunction";

const AWSDevelopers = () => {

  return (
    <div className="mx-auto service_width md:pb-[6rem] md:pt[4rem] py-[4rem] workpadd_borderTop end-to-end">
      <div className="end-To-end">
        <div className="endTO_text home_sec2_txt3">
          <p className="!w-full p-0">
            HIRE AWS DEVELOPERS & MAKE THEM YOUR
            <br />
            POWERFUL BUSINESS ASSETS
          </p>
        </div>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-[2rem]">
        <div className="border-1 border-[#80808038] rounded-[30px]">
          <div className="home_sec3_box1">
            <div className="dots_flex">
              <div className="dots"></div>
              <div className="dots"></div>
              <div className="dots"></div>
            </div>
            <div className="border-t-[1px]">
              <div className="style_sec3_swiper_home !pt-4 ">
                <div className="flex items-center gap-[1rem]">
                  <div className="swiper_sec3_img1">
                    <img
                      className="w-[75px] rounded-[40px]"
                      src="/images/vicky-1-150x150.jpg"
                      alt="Vicky"
                      width="300"
                      height="300"
                      srcSet="/images/vicky-1-300x300.jpg 300w,
                               /images/vicky-1-150x150.jpg 150w,
                                /images/vicky-1.jpg 500w"
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </div>
                  <div className="home_sec3_txt2">
                    <p className="!text-[1.5rem] !font-bold">Vicky</p>
                    <p className="font_style_sec3 ng-binding !font-bold ">
                      AWS Architect
                    </p>
                  </div>
                </div>
                <div className="service_description border-b-[1px]">
                  <p className="h-[200px]">
                    Vicky focuses on maximizing the benefits of the AWS platform
                    for your organization while minimizing some of the
                    challenges you face.
                  </p>
                </div>

                <div className="flex items-center gap-[1rem] pt-[1rem]">
                  <p>
                    <img
                      src="/images/icons2-05.png"
                      alt="right"
                      width="23"
                      height="23"
                    />
                  </p>
                  <div className="service_description_font_sec5">
                    <p>6+ Years of Experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-[1rem] pt-[1rem]">
                  <p>
                    <img
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
                        <img
                          src="/images/hire-hand.png"
                          alt="hand"
                          width="28"
                          height="44"
                        />
                      </div>
                      <div className="chat_btn">
                        <p className="transition ng-binding">Hire Vicky</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-1 border-[#80808038] rounded-[30px]">
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
                    <img
                      className="w-[75px] rounded-[40px]"
                      src="/images/Vivek-300x300.jpg"
                      alt="Vivek"
                      width="300"
                      height="300"
                    />
                  </div>

                  <div className="home_sec3_txt2">
                    <p className="!text-[1.5rem] !font-bold">Vivek</p>
                    <p className="font_style_sec3 ng-binding !font-bold ">
                      Jr. AWS Developer
                    </p>
                  </div>
                </div>
                <div className="service_description border-b-[1px]">
                  <p className="h-[200px]">
                    Vivek is well-versed in the latest technologies, especially
                    with open-source tools. He is comfortable working in a team
                    environment as well as independently to troubleshoot
                    object-oriented programs and disturbed systems.
                  </p>
                </div>

                <div className="flex items-center gap-[1rem] pt-[1rem]">
                  <p>
                    <img
                      src="/images/icons2-05.png"
                      alt="right"
                      width="23"
                      height="23"
                    />
                  </p>
                  <div className="service_description_font_sec5">
                    <p>3+ Years of Experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-[1rem] pt-[1rem]">
                  <p>
                    <img
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
                        <img
                          src="/images/hire-hand.png"
                          alt="hand"
                          width="28"
                          height="44"
                        />
                      </div>
                      <div className="chat_btn">
                        <p className="transition ng-binding">Hire Vivek</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-1 border-[#80808038] rounded-[30px]">
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
                    <img
                      className="w-[75px] rounded-[40px]"
                      src="/images/colin-150x150.jpg"
                      alt="Colin"
                      width="300"
                      height="300"
                      srcSet="/images/colin-300x300.jpg 300w,
                               /images/colin-150x150.jpg 150w,
                                /images/colin.jpg 500w"
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </div>
                  <div className="home_sec3_txt2">
                    <p className="!text-[1.5rem] !font-bold">Colin</p>
                    <p className="font_style_sec3 ng-binding !font-bold ">
                      Sr. AWS Developer
                    </p>
                  </div>
                </div>
                <div className="service_description border-b-[1px]">
                  <p className="h-[200px]">
                    Colin has years of experience working with cloud-native
                    frameworks, such as AWS Lambda and Serverless architecture,
                    and will work with you to customize the tools you need to
                    get the job done.
                  </p>
                </div>

                <div className="flex items-center gap-[1rem] pt-[1rem]">
                  <p>
                    <img
                      src="/images/icons2-05.png"
                      alt="right"
                      width="23"
                      height="23"
                    />
                  </p>
                  <div className="service_description_font_sec5">
                    <p>6+ Years of Experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-[1rem] pt-[1rem]">
                  <p>
                    <img
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
                        <img
                          src="/images/hire-hand.png"
                          alt="hand"
                          width="28"
                          height="44"
                        />
                      </div>
                      <div className="chat_btn">
                        <p className="transition ng-binding">Hire Colin</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AWSDevelopers;
