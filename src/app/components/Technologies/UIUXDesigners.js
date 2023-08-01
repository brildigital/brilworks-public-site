"use client";
import Link from "next/link";

const UIUXDesigners = () => {
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
            HIRE UI/UX DESIGNERS FOR THE STUNNING
            <br />
            USER EXPERIENCE SERVICES
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
                      src="/images/nidhi-e1681882124491-150x150.jpeg"
                      alt="Juned Lanja"
                      width="300"
                      height="300"
                    />
                  </div>
                  <div className="home_sec3_txt2">
                    <p>Nidhi</p>
                    <p className="font_style_sec3 ng-binding">
                      Sr. UI UX Designer
                    </p>
                  </div>
                </div>
                <div className="service_description border-b-[1px]">
                  <p className="h-[150px]">
                    A strategic and creative designer, she is committed to
                    adding value at every stage of the design process.
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
                        <p>Sketch</p>
                      </div>
                    </div>
                  </div>

                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#f9f0de]">
                      <div className="idea_title work_sec2_txt4">
                        <p>Adobe XD</p>
                      </div>
                    </div>
                  </div>

                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#ede9ff]">
                      <div className="idea_title work_sec2_txt4">
                        <p>Photoshop</p>
                      </div>
                    </div>
                  </div>

                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#dcecff]">
                      <div className="idea_title work_sec2_txt4">
                        <p>Illustrator</p>
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
                    <p>4+ Years of Experience</p>
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
                <div className="pt-[4rem]">
                  <div className="btn_flex xl:py-[4px] xl:px-[40px] lg:py-[4px] lg:px-[28px] md:py-[4px] md:px-[22px] !py-[4px] !px-[22px]">
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
                          Hire Nidhi
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
                      src="/images/Heta-150x150.jpg"
                      alt="Neha"
                      width="300"
                      height="300"
                    />
                  </div>

                  <div className="home_sec3_txt2">
                    <p>Neha</p>
                    <p className="font_style_sec3 ng-binding">
                      Mid-Sr. UI UX Designer
                    </p>
                  </div>
                </div>
                <div className="service_description border-b-[1px]">
                  <p className="h-[150px]">
                    Neha has 3+ years of experience and will help you set up a
                    design process that ensures user needs are met while meeting
                    budget and timeframes.
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
                        <p>Adobe XD</p>
                      </div>
                    </div>
                  </div>
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#dcf9f0]">
                      <div className="idea_title work_sec2_txt4">
                        <p>Photoshop</p>
                      </div>
                    </div>
                  </div>

                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#f9f0de]">
                      <div className="idea_title work_sec2_txt4">
                        <p>Illustrator</p>
                      </div>
                    </div>
                  </div>

                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#ede9ff]">
                      <div className="idea_title work_sec2_txt4">
                        <p>Sketch</p>
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
                <div className="pt-[4rem]">
                  <div className="btn_flex xl:py-[4px] xl:px-[40px] lg:py-[4px] lg:px-[28px] md:py-[4px] md:px-[22px] !py-[4px] !px-[22px]">
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
                          Hire Neha
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
                      decoding="async"
                      loading="lazy"
                      className="w-[75px] rounded-[40px]"
                      src="/images/Luv-Sakariya-150x150.jpg"
                      alt="UiUXDesigner"
                      width="300"
                      height="300"
                      srcset="/images/Luv-Sakariya-150x150.jpg 150w, 
                      /images/Luv-Sakariya-300x300.jpg 300w, 
                      /images/Luv-Sakariya-1024x1024.jpg 1024w, 
                      /images/Luv-Sakariya-768x768.jpg 768w,
                      /images/Luv-Sakariya.jpg 1500w"
                      sizes="(max-width: 150px) 100vw, 150px"
                    />
                  </div>
                  <div className="home_sec3_txt2">
                    <p>Sumeet</p>
                    <p className="font_style_sec3 ng-binding">
                      Sr. Ui UX Designer
                    </p>
                  </div>
                </div>
                <div className="service_description border-b-[1px]">
                  <p className="h-[150px]">
                    Sumeet has over 5 years of experience working on
                    high-profile projects and we have developed a deep
                    understanding of design, usability, and user experience.
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
                        <p>Sketch</p>
                      </div>
                    </div>
                  </div>

                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#f9f0de]">
                      <div className="idea_title work_sec2_txt4">
                        <p>Adobe XD</p>
                      </div>
                    </div>
                  </div>
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#dcecff]">
                      <div className="idea_title work_sec2_txt4">
                        <p>Figma</p>
                      </div>
                    </div>
                  </div>

                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#ede9ff]">
                      <div className="idea_title work_sec2_txt4">
                        <p>Photoshop</p>
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
                <div className="pt-[4rem]">
                  <div className="btn_flex xl:py-[4px] xl:px-[40px] lg:py-[4px] lg:px-[28px] md:py-[4px] md:px-[22px] !py-[4px] !px-[22px]">
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
                          Hire Sumeet
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

export default UIUXDesigners;
