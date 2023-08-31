"use client";
import Link from "next/link";
import { scrollToSection } from "../lib/commonfunction";
import Image from "next/image";

const ReactNativeDevelopers = () => {
  return (
    <div className="mx-auto service_width md:pb-[6rem] md:pt[4rem] py-[4rem] workpadd_borderTop end-to-end">
      <div className="end-To-end">
        <div className="endTO_text home_sec2_txt3">
          <p className="!w-full p-0">
            HIRE REACT NATIVE DEVELOPERS TO BUILD
            <br /> FEATURE-RICH MOBILE APPLICATIONS
          </p>
        </div>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-[2rem] reveal">
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
                    <Image
                      className="w-[75px] rounded-[40px]"
                      src="/images/juned-300x300.jpg"
                      alt="Juned Lanja"
                      width="300"
                      height="300"
                      srcSet="/images/juned-300x300.jpg 300w,
                               /images/juned-150x150.jpg 150w,
                                /images/juned.jpg 500w"
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </div>
                  <div className="home_sec3_txt2">
                    <p className="!text-[1.5rem] !font-bold">Juned</p>
                    <p className="font_style_sec3 ng-binding !font-bold">
                      Sr. React Native Developer
                    </p>
                  </div>
                </div>
                <div className="service_description border-b-[1px]">
                  <p className="h-[200px]">
                    Juned has a strong understanding & knowledge of React
                    Native’s API library, modules & framework to work it
                    seamlessly across multiple platforms.
                  </p>
                </div>
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
                <div className="flex items-center gap-[1rem] flex-row flex-wrap custome_height_technology tech-tags">
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#dcecff]">
                      <div className="idea_title work_sec2_txt4">
                        <p>React Native</p>
                      </div>
                    </div>
                  </div>
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#dcf9f0]">
                      <div className="idea_title work_sec2_txt4">
                        <p>TypeScript</p>
                      </div>
                    </div>
                  </div>
                </div>
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
                    <p>7+ Years of Experience</p>
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
                        <p className="transition ng-binding">Hire Juned</p>
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
                    <Image
                      className="w-[75px] rounded-[40px]"
                      src="/images/Dinesh-e1681881256933-150x150.png"
                      alt="Dinesh"
                      width="300"
                      height="300"
                    />
                  </div>

                  <div className="home_sec3_txt2">
                    <p className="!text-[1.5rem] !font-bold">Dinesh</p>
                    <p className="font_style_sec3 ng-binding !font-bold">
                      Sr. React Native Developer
                    </p>
                  </div>
                </div>
                <div className="service_description border-b-[1px]">
                  <p className="h-[200px]">
                    Self-motivated Full stack developer with 9+ years of
                    experience working on various client-based projects across
                    multiple industries.
                  </p>
                </div>
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

                <div className="flex items-center gap-[1rem] flex-row flex-wrap custome_height_technology tech-tags">
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#dcecff]">
                      <div className="idea_title work_sec2_txt4">
                        <p>React Native</p>
                      </div>
                    </div>
                  </div>
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#dcf9f0]">
                      <div className="idea_title work_sec2_txt4">
                        <p>iOS</p>
                      </div>
                    </div>
                  </div>

                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#f9f0de]">
                      <div className="idea_title work_sec2_txt4">
                        <p>TypeScript</p>
                      </div>
                    </div>
                  </div>
                </div>
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
                    <p>9+ Years of Experience</p>
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
                        <p className="transition ng-binding">Hire Dinesh</p>
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
                    <Image
                      className="w-[75px] rounded-[40px]"
                      src="/images/Kinjal-1-scaled-e1681881963433-150x150.jpg"
                      alt="Minal Vaghashiya"
                      width="300"
                      height="300"
                    />
                  </div>
                  <div className="home_sec3_txt2">
                    <p className="!text-[1.5rem] !font-bold">Kinjal</p>
                    <p className="font_style_sec3 ng-binding !font-bold">
                      Sr. React Native Developer
                    </p>
                  </div>
                </div>
                <div className="service_description border-b-[1px]">
                  <p className="h-[200px]">
                    React Native and Android Developer with a demonstrated
                    history of working with the IT industry. Having 6+ years of
                    experience in creating, maintaining and managing Mobile
                    Apps. He aims to make the process easy and painless for her
                    clients.
                  </p>
                </div>
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

                <div className="flex items-center gap-[1rem] flex-row flex-wrap custome_height_technology tech-tags">
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#dcf9f0]">
                      <div className="idea_title work_sec2_txt4">
                        <p>Android</p>
                      </div>
                    </div>
                  </div>
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#ede9ff]">
                      <div className="idea_title work_sec2_txt4">
                        <p>React Native</p>
                      </div>
                    </div>
                  </div>
                </div>

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
                    <p>6+ Years of Experience</p>
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
                        <p className="transition ng-binding">Hire Kinjal</p>
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

export default ReactNativeDevelopers;
