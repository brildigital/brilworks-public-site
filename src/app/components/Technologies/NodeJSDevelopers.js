"use client"
import Link from "next/link";

const NodeJSDevelopers = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="mx-auto service_width md:pb-[6rem] md:pt[4rem] py-[4rem] workpadd_borderTop end-to-end">
      <div className="end-To-end">
        <div className="endTO_text home_sec2_txt3">
          <p className="!w-full p-0">
            HIRE NODE JS DEVELOPERS TO SCALE YOUR <br />
            DEVELOPMENT TEAM
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
              <div className="style_sec3_swiper_home !pt-4">
                <div className="flex items-center gap-[1rem]">
                  <div className="swiper_sec3_img1">
                    <img
                      className="w-[75px] rounded-[40px]"
                      src="/images/juned-300x300.jpg"
                      alt="Juned Lanja"
                      width="300"
                      height="300"
                      srcset="/images/juned-300x300.jpg 300w,
                               /images/juned-150x150.jpg 150w,
                                /images/juned.jpg 500w"
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </div>
                  <div className="home_sec3_txt2">
                    <p>Juned</p>
                    <p className="font_style_sec3 ng-binding">
                      Node.js Developer
                    </p>
                  </div>
                </div>
                <div className="service_description border-b-[1px]">
                  <p className="h-[200px]">
                    Juned is a backend engineer with expertise in Node.js /
                    ExpressJS & databases like MongoDB / PostgreSQL. He is
                    keenly interested in algorithm-level efficiency and has
                    experience working on different frameworks.
                  </p>
                </div>
                <div className="py-[1rem] flex items-center gap-[1rem]">
                  <p>
                    <img
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
                <div className="flex items-center gap-[1rem] flex-row flex-wrap custome_height_technology">
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#dcecff]">
                      <div className="idea_title work_sec2_txt4">
                        <p>NodeJS</p>
                      </div>
                    </div>
                  </div>
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#dcf9f0]">
                      <div className="idea_title work_sec2_txt4">
                        <p>ExpressJS</p>
                      </div>
                    </div>
                  </div>
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#ede9ff]">
                      <div className="idea_title work_sec2_txt4">
                        <p>MongoDB</p>
                      </div>
                    </div>
                  </div>
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#f9f0de]">
                      <div className="idea_title work_sec2_txt4">
                        <p>ReactJS</p>
                      </div>
                    </div>
                  </div>
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
                    <p>7+ Years of Experience</p>
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
                      <p className="transition ng-binding">
                        <Link
                          href="#section10_service"
                          onClick={(e) =>
                            scrollToSection(e, "section10_service")
                          }
                          className=""
                        >
                          Hire Juned
                        </Link>
                      </p>
                    </div>
                  </div>
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
                      src="/images/lavesh.jpg"
                      alt="Lavesh"
                      width="300"
                      height="300"
                    />
                  </div>

                  <div className="home_sec3_txt2">
                    <p>Lavesh</p>
                    <p className="font_style_sec3 ng-binding">
                      Sr. Software Engineer
                    </p>
                  </div>
                </div>
                <div className="service_description border-b-[1px]">
                  <p className="h-[200px]">
                    A full stack developer having 8+ years of expertise working
                    on the development of web apps that span consumer
                    productivity software to mission-critical NodeJS & NestJS
                    platforms.
                  </p>
                </div>
                <div className="py-[1rem] flex items-center gap-[1rem]">
                  <p>
                    <img
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

                <div className="flex items-center gap-[1rem] flex-row flex-wrap custome_height_technology">
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#dcecff]">
                      <div className="idea_title work_sec2_txt4">
                        <p>NodeJS</p>
                      </div>
                    </div>
                  </div>
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#dcf9f0]">
                      <div className="idea_title work_sec2_txt4">
                        <p>Strapi.io</p>
                      </div>
                    </div>
                  </div>
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#ede9ff]">
                      <div className="idea_title work_sec2_txt4">
                        <p>ExpressJS</p>
                      </div>
                    </div>
                  </div>
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#f9f0de]">
                      <div className="idea_title work_sec2_txt4">
                        <p>NestJS</p>
                      </div>
                    </div>
                  </div>
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#dcecff]">
                      <div className="idea_title work_sec2_txt4">
                        <p>Trai.io</p>
                      </div>
                    </div>
                  </div>
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
                    <p>8+ Years of Experience</p>
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
                      <p className="transition ng-binding">
                        <Link
                          href="#section10_service"
                          onClick={(e) =>
                            scrollToSection(e, "section10_service")
                          }
                          className=""
                        >
                          Hire Lavesh
                        </Link>
                      </p>
                    </div>
                  </div>
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
                      src="/images/minal-300x300.jpg"
                      alt="Minal Vaghashiya"
                      width="300"
                      height="300"
                      srcset="/images/minal-300x300.jpg 300w,
                               /images/minal-150x150.jpg 150w,
                                /images/minal.jpg 500w"
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </div>
                  <div className="home_sec3_txt2">
                    <p>Minal</p>
                    <p className="font_style_sec3 ng-binding">
                      Node.js Engineer
                    </p>
                  </div>
                </div>
                <div className="service_description border-b-[1px]">
                  <p className="h-[200px]">
                    Having proven experience with backend development, Minal
                    utilizes the right architecture to offer web and mobile app
                    solutions while assessing your business and technology
                    ecosystem.
                  </p>
                </div>
                <div className="py-[1rem] flex items-center gap-[1rem]">
                  <p>
                    <img
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

                <div className="flex items-center gap-[1rem] flex-row flex-wrap custome_height_technology">
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#dcf9f0]">
                      <div className="idea_title work_sec2_txt4">
                        <p>NodeJS</p>
                      </div>
                    </div>
                  </div>
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#ede9ff]">
                      <div className="idea_title work_sec2_txt4">
                        <p>ExpressJS</p>
                      </div>
                    </div>
                  </div>
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#f9f0de]">
                      <div className="idea_title work_sec2_txt4">
                        <p>NestJS</p>
                      </div>
                    </div>
                  </div>
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#dcecff]">
                      <div className="idea_title work_sec2_txt4">
                        <p>HTML5</p>
                      </div>
                    </div>
                  </div>
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#f9f0de]">
                      <div className="idea_title work_sec2_txt4">
                        <p>Strapi.io</p>
                      </div>
                    </div>
                  </div>
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
                    <p>5+ Years of Experience</p>
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
                      <p className="transition ng-binding">
                        <Link
                          href="#section10_service"
                          onClick={(e) =>
                            scrollToSection(e, "section10_service")
                          }
                          className=""
                        >
                          Hire Minal
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodeJSDevelopers;
