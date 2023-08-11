"use client";
import Link from "next/link";

const BlockchainDevelopers = () => {
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
            HIRE BLOCKCHAIN DEVELOPERS TO BUILD
            <br />
            HIGH PERFORMING APPS
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
                      src="/images/Parth-scaled-e1681882553496-150x150.jpg"
                      alt="Parth"
                      width="300"
                      height="300"
                    />
                  </div>
                  <div className="home_sec3_txt2">
                    <p>Parth</p>
                    <p className="font_style_sec3 ng-binding">
                      Blockchain Developer
                    </p>
                  </div>
                </div>
                <div className="service_description border-b-[1px]">
                  <p className="md:h-[150px] h-[200px]">
                    Parth is an experienced IT professional with experience
                    working in various technology stacks and knowledge domains
                    including online payment solutions and crypto wallets
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
                <div className="flex items-center gap-[1rem] flex-row flex-wrap custome_height_technology tech-tags">
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#dcf9f0]">
                      <div className="idea_title work_sec2_txt4">
                        <p>Ethereum</p>
                      </div>
                    </div>
                  </div>

                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#f9f0de]">
                      <div className="idea_title work_sec2_txt4">
                        <p>Blockchain</p>
                      </div>
                    </div>
                  </div>

                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#ede9ff]">
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
                        <p className="transition ng-binding">Hire Parth</p>
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
                      src="/images/ankur-300x300.jpeg"
                      alt="Ankur"
                      width="300"
                      height="300"
                    />
                  </div>

                  <div className="home_sec3_txt2">
                    <p>Ankur</p>
                    <p className="font_style_sec3 ng-binding">
                      Mid-Sr. Blockchain Developer
                    </p>
                  </div>
                </div>
                <div className="service_description border-b-[1px]">
                  <p className="md:h-[150px] h-[200px]">
                    Ankur is a well-rounded full-stack developer with a proven
                    track record of working with leading startups. Passionate
                    about delivering quality software, he is always looking to
                    solve complex challenges.
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

                <div className="flex items-center gap-[1rem] flex-row flex-wrap custome_height_technology tech-tags">
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#dcecff]">
                      <div className="idea_title work_sec2_txt4">
                        <p>Blockchain</p>
                      </div>
                    </div>
                  </div>
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#dcf9f0]">
                      <div className="idea_title work_sec2_txt4">
                        <p>JavaScript</p>
                      </div>
                    </div>
                  </div>

                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#f9f0de]">
                      <div className="idea_title work_sec2_txt4">
                        <p>Ethereum</p>
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
                        <p className="transition ng-binding">Hire Ankur</p>
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
                      decoding="async"
                      loading="lazy"
                      className="w-[75px] rounded-[40px]"
                      src="/images/jagat-e1681882821165-150x150.jpeg"
                      alt="UiUXDesigner"
                      width="300"
                      height="300"
                    />
                  </div>
                  <div className="home_sec3_txt2">
                    <p>Jagat</p>
                    <p className="font_style_sec3 ng-binding">
                      Jr. Blockchain Developer
                    </p>
                  </div>
                </div>
                <div className="service_description border-b-[1px]">
                  <p className="md:h-[150px] h-[200px]">
                    His computer science background greatly contributes to the
                    success of all his projects. He is comfortable working with
                    many languages and platforms and loves creating scalable,
                    intuitive, and smart products.
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

                <div className="flex items-center gap-[1rem] flex-row flex-wrap custome_height_technology tech-tags">
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#dcf9f0]">
                      <div className="idea_title work_sec2_txt4">
                        <p>Blockchain</p>
                      </div>
                    </div>
                  </div>

                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#f9f0de]">
                      <div className="idea_title work_sec2_txt4">
                        <p>Ethereum</p>
                      </div>
                    </div>
                  </div>
                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#dcecff]">
                      <div className="idea_title work_sec2_txt4">
                        <p>Ether.js</p>
                      </div>
                    </div>
                  </div>

                  <div className="flexbasis_idea">
                    <div className="ideaBg_class bg-[#ede9ff]">
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
                    <p>2+ Years of Experience</p>
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
                        <p className="transition ng-binding">Hire Jagat</p>
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

export default BlockchainDevelopers;
