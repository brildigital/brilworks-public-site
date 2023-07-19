import Link from "next/link";

const ReactTechnology = () => {
  return (
    <>
      <section className="portfolio mt-[6rem]">
        <div className="mx-auto service_width">
          <div className="relative">
            <p>
              <img
                className="h-[46vh] rounded-[20px]"
                src="images/react-banner.png"
                alt="our process"
              />
            </p>
            <div className="service_sec1_position">
              <div className="flex self-end justify-between w-[96%] mx-auto">
                <div className="txt">
                  <div className="how-we flex items-center gap-[1rem]">
                    <div>
                      <img
                        decoding="async"
                        loading="lazy"
                        class="alignnone wp-image-258 "
                        src="/images/1.png"
                        alt="curly bracket"
                        width="24"
                        height="94"
                      />
                    </div>
                    <div>
                      <p className="uppercase xl:text-[4.5rem] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]">
                        React JS
                      </p>
                    </div>
                    <div>
                      <img
                        decoding="async"
                        loading="lazy"
                        class="alignnone wp-image-258 "
                        src="/images/2.png"
                        alt="curly bracket"
                        width="24"
                        height="94"
                      />
                    </div>
                  </div>
                  <div className="how-we flex items-center gap-[1rem]">
                    <p className="uppercase xl:text-[4rem] lg:text-[60px] md:text-[50px] sm:text-[55px] text-[30px] !leading-none">
                      DEVELOPMENT <br />
                      COMPANY
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width lg:py-[8rem] py-[4rem]">
          <div className="flex !flex-col lg:!flex-row gap-[3.5rem]">
            <div className="basis-[45%]">
              <div className="home_sec2_txt3 like_text">
                <Link href="#section10_service">
                  <p className="p-0 !ml-[0] !w-full">
                    Hire ReactJS Developers to Fire Up Your Frontend
                  </p>
                </Link>
              </div>
            </div>
            <div className="basis-[55%]">
              <div className="home_sec2_txt4">
                <p className="!text-left">
                  Our experienced Reactjs developers have built and maintained
                  scalable, intuitive, and interactive applications that have
                  served millions of users. If you’re planning on using React
                  software development services, we’re the right partner for
                  you.
                </p>

                <div className="flex gap-[2rem] mt-[50px] flex-wrap">
                  <div className="btn_paddinng contact_btn btn_flex !m-[0px]">
                    <div className="formBtn_icon">
                      <Link href="#section10_service">
                        <p>
                          <img src="/images/right_arrow.png" alt="arrow" />
                        </p>
                      </Link>
                    </div>
                    <Link href="#section10_service">
                      <p className="xl:!text-[21px] lg:!text-[18px]">
                        Plan & Pricing
                      </p>
                    </Link>
                  </div>

                  <div className="btn_paddinng contact_btn btn_flex !m-[0px]">
                    <div className="formBtn_icon">
                      <Link href="#section10_service">
                        <p>
                          <img src="/images/right_arrow.png" alt="arrow" />
                        </p>
                      </Link>
                    </div>
                    <Link href="#section10_service">
                      <p className="xl:!text-[21px] lg:!text-[18px]">
                        Hire React.js Developers
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width md:pt-[6rem] pt-[4rem] workpadd_borderTop end-to-end">
          <div className="end-To-end">
            <div className="endTO_text home_sec2_txt3">
              <p className="!w-full p-0">
                Build Feature-rich Frontend Applications With
                <br />
                Our React Development Services
              </p>
            </div>
          </div>

          <div className="service_grid_img">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[50px] gap-[40px]">
              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    loading="lazy"
                    src="/images/Enterprise-App-Development.png"
                    alt="ReactJS for Enterprise App Development"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 01.</div>
                  <div className="service_title">
                    <p>ReactJS for Enterprise App Development</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Our react js development services enable you to quickly
                      build powerful web apps that are custom-tailored to
                      address the needs of your enterprise.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    loading="lazy"
                    src="/images/Custom-App-Development.png"
                    alt="ReactJS for Custom App Development"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 02.</div>
                  <div className="service_title">
                    <p>ReactJS for Custom App Development</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Build custom web applications that are perfect for your
                      business needs or specific project needs with the help of
                      our ReactJS developers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className=""
                    src="/images/frontend.png"
                    alt="ReactJS for Front-End Development"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 03.</div>
                  <div className="service_title">
                    <p>ReactJS for Front-End Development</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Our React rockstars possess a comprehensive understanding
                      of the framework, real-time data exchange, and the best
                      practices to build modern user interfaces with real-time
                      data validation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/migration-1.png"
                    alt="ReactJS Website Migration & Integration"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 04.</div>
                  <div className="service_title">
                    <p>ReactJS Website Migration & Integration</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Our developers will help you move over your current code
                      and all the data in a way that does not lose any
                      information and makes sure everything is migrated
                      smoothly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/ui-ux-1.png"
                    alt="ReactJS UI/UX Development"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 05.</div>
                  <div className="service_title">
                    <p>ReactJS UI/UX Development</p>
                  </div>

                  <div className="service_description">
                    <p>
                      We believe that a great user experience across all devices
                      should be the goal of any developer in the business. Our
                      developers strive to do just that.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/support.png"
                    alt="ReactJS Support & Maintenance"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 06.</div>
                  <div className="service_title">
                    <p>ReactJS Support & Maintenance</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Our team of skilled developers is always ready to serve
                      you. We offer ReactJS support and maintenance services to
                      help our clients to stay ahead of the competition, thus
                      increasing their market share.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:my-[60px] my-[40px]">
            <div className="btn_paddinng btn_flex !mx-auto">
              <div className="formBtn_icon">
                <Link href="#section10_service">
                  <p>
                    <img src="/images/icons-05.png" alt="call" />
                  </p>
                </Link>
              </div>
              <Link href="#section10_service">
                <p className="xl:!text-[21px] lg:!text-[18px]">
                  Get A Quote For Your Project
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width md:py-[6rem] py-[4rem] workpadd_borderTop end-to-end">
          <div className="end-To-end">
            <div className="endTO_text home_sec2_txt3">
              <p className="!w-full p-0">
                BENEFITS OF HIRING DEDICATED DEVELOPERS
              </p>
            </div>
          </div>

          <div className="endTO_text_content home_sec2_txt4 mb-[5rem]">
            <p>
              Hiring a dedicated development team from a React JS Development
              Company empowers companies across the globe to access expert
              talent without any limitation of location. It enables you to keep
              up with the pace of technological change while keeping your costs
              down.
            </p>
          </div>

          <div className="grid xl:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-[4rem]">
            <div className="text-center">
              <img
                src="/images/Dedicated-Resources-On-Demand.png"
                alt="Dedicated Resources On-Demand"
                className="w-[50px] mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Dedicated Resources On-Demand
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/Emergency-Support.png"
                alt="Emergency Support"
                className="w-[50px] mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Emergency Support
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/Scalable-Projects.png"
                alt="Scalable Projects"
                className="w-[50px] mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Scalable Projects
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/Quick-Turnaround-Time.png"
                alt="Quick-Turnaround Time"
                className="w-[50px] mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Quick-Turnaround Time
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/Complete-Autonomy.png"
                alt="Complete Autonomy"
                className="w-[50px] mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Complete Autonomy
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/Quality-Infrastructure.png"
                alt="Quality Infrastructure"
                className="w-[50px] mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Quality Infrastructure
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto service_width md:py-[6rem] py-[4rem] workpadd_borderTop end-to-end">
          <div className="end-To-end">
            <div className="endTO_text home_sec2_txt3">
              <p className="!w-full p-0">
                HIRE REACT JS DEVELOPERS TO BUILD <br />
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
                <div className="">
                  <div className="style_sec3_swiper_home">
                    <div className="flex items-center gap-[1rem]">
                      <div className="swiper_sec3_img1">
                        <img
                          className="w-[75px] rounded-[40px]"
                          src="https://www.brilworks.com/wp-content/uploads/2023/01/juned-300x300.jpg"
                          alt="Juned Lanja"
                          width="300"
                          height="300"
                          srcset="https://www.brilworks.com/wp-content/uploads/2023/01/juned-300x300.jpg 300w,
                               https://www.brilworks.com/wp-content/uploads/2023/01/juned-150x150.jpg 150w,
                                https://www.brilworks.com/wp-content/uploads/2023/01/juned.jpg 500w"
                          sizes="(max-width: 300px) 100vw, 300px"
                        />
                      </div>
                      <div className="home_sec3_txt2">
                        <p>Juned Lanja</p>
                        <p className="font_style_sec3 ng-binding">
                          Sr. Software Engineer
                        </p>
                      </div>
                    </div>
                    <div className="service_description">
                      <p>
                        A a react developer with experience of JavaScript,
                        TypeScript, React, React Native, Redux, HTML and CSS.
                        With strong problem-solving skills and the ability to
                        adapt to any given situation.
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
                            <p>React.js</p>
                          </div>
                        </div>
                      </div>
                      <div className="flexbasis_idea">
                        <div className="ideaBg_class bg-[#dcf9f0]">
                          <div className="idea_title work_sec2_txt4">
                            <p>React Native</p>
                          </div>
                        </div>
                      </div>
                      <div className="flexbasis_idea">
                        <div className="ideaBg_class bg-[#ede9ff]">
                          <div className="idea_title work_sec2_txt4">
                            <p>Redux</p>
                          </div>
                        </div>
                      </div>
                      <div className="flexbasis_idea">
                        <div className="ideaBg_class bg-[#f9f0de]">
                          <div className="idea_title work_sec2_txt4">
                            <p>HTML</p>
                          </div>
                        </div>
                      </div>
                      <div className="flexbasis_idea">
                        <div className="ideaBg_class bg-[#dcecff]">
                          <div className="idea_title work_sec2_txt4">
                            <p>CSS</p>
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
                      <div className="btn_flex xl:py-[4px] xl:px-[40px] lg:py-[4px] lg:px-[28px] md:py-[4px] md:px-[22px] py-[4px] px-[22px]">
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
                            <Link href="#section10_service" className="">
                              Hire Juned Lanja
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
                <div className="">
                  <div className="style_sec3_swiper_home">
                    <div className="flex items-center gap-[1rem]">
                      <div className="swiper_sec3_img1">
                        <img
                          className="w-[75px] rounded-[40px]"
                          src="https://www.brilworks.com/wp-content/uploads/2023/01/minal-300x300.jpg"
                          alt="Minal Vaghashiya"
                          width="300"
                          height="300"
                          srcset="https://www.brilworks.com/wp-content/uploads/2023/01/minal-300x300.jpg 300w,
                               https://www.brilworks.com/wp-content/uploads/2023/01/minal-150x150.jpg 150w,
                                https://www.brilworks.com/wp-content/uploads/2023/01/minal.jpg 500w"
                          sizes="(max-width: 300px) 100vw, 300px"
                        />
                      </div>
                      <div className="home_sec3_txt2">
                        <p>Minal Vaghashiya</p>
                        <p className="font_style_sec3 ng-binding">
                          Software Engineer
                        </p>
                      </div>
                    </div>
                    <div className="service_description">
                      <p>
                        Minal has 5+ years of experience in the design,
                        development, testing, and maintenance of software
                        systems. He is keen at observing details and good at
                        learning anything as quickly as possible.
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
                            <p>React.js</p>
                          </div>
                        </div>
                      </div>
                      <div className="flexbasis_idea">
                        <div className="ideaBg_class bg-[#ede9ff]">
                          <div className="idea_title work_sec2_txt4">
                            <p>AngularJS</p>
                          </div>
                        </div>
                      </div>
                      <div className="flexbasis_idea">
                        <div className="ideaBg_class bg-[#f9f0de]">
                          <div className="idea_title work_sec2_txt4">
                            <p>Typescript</p>
                          </div>
                        </div>
                      </div>
                      <div className="flexbasis_idea">
                        <div className="ideaBg_class bg-[#dcecff]">
                          <div className="idea_title work_sec2_txt4">
                            <p>CSS</p>
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
                      <div className="btn_flex xl:py-[4px] xl:px-[40px] lg:py-[4px] lg:px-[28px] md:py-[4px] md:px-[22px] py-[4px] px-[22px]">
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
                            <Link href="#section10_service" className="">
                              Hire Minal Vaghashiya
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
                <div className="">
                  <div className="style_sec3_swiper_home">
                    <div className="flex items-center gap-[1rem]">
                      <div className="swiper_sec3_img1">
                        <img
                          className="w-[75px] rounded-[40px]"
                          src="/images/lavesh.jpg"
                          alt="Lavesh Katariya"
                          width="300"
                          height="300"
                        />
                      </div>

                      <div className="home_sec3_txt2">
                        <p>Lavesh Katariya</p>
                        <p className="font_style_sec3 ng-binding">
                          Sr. Software Engineer
                        </p>
                      </div>
                    </div>
                    <div className="service_description">
                      <p>
                        A full stack developer having 8+ years of expertise
                        working on the development of web apps that span
                        consumer productivity software to mission-critical
                        react-native platforms.
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
                            <p>Getstream</p>
                          </div>
                        </div>
                      </div>
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
                            <p>Express.js</p>
                          </div>
                        </div>
                      </div>
                      <div className="flexbasis_idea">
                        <div className="ideaBg_class bg-[#f9f0de]">
                          <div className="idea_title work_sec2_txt4">
                            <p>Sails.js</p>
                          </div>
                        </div>
                      </div>
                      <div className="flexbasis_idea">
                        <div className="ideaBg_class bg-[#dcecff]">
                          <div className="idea_title work_sec2_txt4">
                            <p>Hubspot</p>
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
                      <div className="btn_flex xl:py-[4px] xl:px-[40px] lg:py-[4px] lg:px-[28px] md:py-[4px] md:px-[22px] py-[4px] px-[22px]">
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
                            <Link href="#section10_service" className="">
                              Hire Lavesh Katariya
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

        <div className="mx-auto service_width">
          <div className="service_sec3 md:text-center text-left">
            <p className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px]">
              THE RIGHT REACT JS COMBINATIONS
              <br />
              JUST FOR YOU
            </p>
          </div>

          <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-[4rem]">
            <div className="hire_sec1_service_50">
              <div className="">
                <div className="home_sec3_box">
                  <div className="dots_flex">
                    <div className="dots"></div>
                    <div className="dots"></div>
                    <div className="dots"></div>
                  </div>
                  <div className="background">
                    <div className="style_sec3_swiper_home">
                      <div className="flex gap-[1rem] pb-[2rem]">
                        <img
                          src="/images/3-1.png"
                          alt="reactjs"
                          className="w-[76px]"
                        />
                        <img
                          src="/images/js-1.png"
                          alt="nodejs"
                          className="w-[76px]"
                        />
                      </div>
                      <div className="developer_sec6_title">
                        <p>React Node Developer</p>
                      </div>
                      <div className="hire_data_sec">
                        <p>
                          React Node is a powerful combination of the two
                          popular JavaScript technologies, Reactjs and Node.js.
                          Hire React Node developer from us to add amazing
                          functionality and scalability to your projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hire_sec1_service_50">
              <div className="">
                <div className="home_sec3_box">
                  <div className="dots_flex">
                    <div className="dots"></div>
                    <div className="dots"></div>
                    <div className="dots"></div>
                  </div>
                  <div className="background">
                    <div className="style_sec3_swiper_home">
                      <div className="flex gap-[1rem] pb-[2rem]">
                        <img
                          src="/images/3-1.png"
                          alt="reactjs"
                          className="w-[76px]"
                        />
                        <img
                          src="/images/java_logo.png"
                          alt="java"
                          className="w-[76px]"
                        />
                      </div>
                      <div className="developer_sec6_title">
                        <p>React Java Developer</p>
                      </div>
                      <div className="hire_data_sec">
                        <p>
                          Modernize your projects with a React-driven website
                          and Java backend. We’ll create an app that’s visually
                          beautiful, full of features, and works on every
                          device. Hire full stack react developers from us to
                          build a feature-rich interface without making the
                          backend unreadable or redundant.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section8_service px-[6rem]">
            <div className="btn_flex mt-[4rem]">
              <div className="chat_icon">
                <img src="/images/hire-hand.png" alt="hire hand" />
              </div>
              <div className="chat_btn">
                <p className="transition ng-binding">
                  <Link href=""> Hire Full Stack Reactjs Developers </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="xl:mt-[96px] lg:mt-[60px] md:mt-[32px] mt-[16px]">
          <div className="service_width mx-auto md:px-[0px] px-[15px]">
            <div className="service_sec3 md:text-center text-left">
              <p className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px]">
                HIRE REACT JS DEVELOPERS
              </p>

              <div>
                <p className="!p-0 text-[21px]">IN JUST 3 EASY STEPS</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-[3rem]">
              <div className="contact_box">
                <div className="mx-auto">
                  <img
                    src="/images/icons2-01-1.png"
                    alt="people"
                    className="Tell Us Your Requirements"
                  />
                </div>
                <div className="steps_service">
                  <div className="no_flex">
                    <div className="no_flex_height">
                      <div className="developer_sec6_title text-center mob_center">
                        <p>Tell Us Your Requirements</p>
                      </div>
                      <div className="service_description text-center mob_center">
                        <p>
                          Schedule a call with our expert to tell us exactly
                          what skills you need, what experience you’re looking
                          for, and what your objectives and expectations are.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact_box">
                <div className="mx-auto">
                  <img
                    src="/images/icons2-02.png"
                    alt="Screen & Shortlist the Right Fit"
                    className=""
                  />
                </div>

                <div className="steps_service">
                  <div className="no_flex">
                    <div className="no_flex_height">
                      <div className="developer_sec6_title text-center mob_center">
                        <p>Screen & Shortlist the Right Fit</p>
                      </div>
                      <div className="service_description text-center mob_center">
                        <p>
                          Get introduced to the individuals you like, conduct
                          interviews, and assess their confidence to get matched
                          with a suitable talent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact_box">
                <div className="mx-auto">
                  <img
                    src="/images/icons2-03.png"
                    alt="Onboard Talent"
                    className=""
                  />
                </div>
                <div className="steps_service">
                  <div className="no_flex">
                    <div className="no_flex_height">
                      <div className="developer_sec6_title text-center mob_center">
                        <p>Onboard Talent</p>
                      </div>
                      <div className="service_description text-center mob_center">
                        <p>
                          We match you with a React js developer from our
                          network within 48 to 72 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:my-[100px] my-[40px]">
              <div className="btn_paddinng contact_btn btn_flex !mx-auto">
                <div className="formBtn_icon">
                  <p>
                    <img src="/images/icons2-04.png" alt="call" />
                  </p>
                </div>
                <p className="xl:!text-[21px] lg:!text-[18px]">
                  Schedule A Developer Interview
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width md:py-[6rem] py-[4rem] workpadd_borderTop end-to-end">
          <div className="end-To-end">
            <div className="endTO_text home_sec2_txt3">
              <p className="!w-full p-0">
                CHOOSE OUR REACT.JS DEVELOPMENT
                <br />
                SERVICES AS PER YOUR NEEDS
              </p>
            </div>
          </div>

          <div className="endTO_text_content home_sec2_txt4 mb-[5rem]">
            <p>
              We ensure you find the right people at the right cost for all your
              project needs.
            </p>
          </div>
        </div>
      </section>

      <section className="service_width linear-gradient-bg">
        <div className="lg:py-[6rem] md:py-[4rem] py-[2rem]">
          <div className="sec9_service_style xl:px-[12rem] sm:px-[4rem] px-[1rem]">
            <div>
              <div className="end-To-end">
                <div className="endTO_text home_sec2_txt3 mt-[4rem] mb-0">
                  <p className="!w-full p-0">
                    WHY SHOULD YOU HIRE REACT JS DEVELOPERS FROM BRILWORKS?
                  </p>
                </div>
              </div>

              <p className="p-font text-center my-[2rem]">
                Just as React is the hottest framework for frontend today, we’re
                the hottest React JS Development Company that can help you
                develop quality React applications in no time. Our Reactjs
                developers deliver bespoke solutions to all your needs with the
                right tools, expertise, and infrastructure.
              </p>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-[3.5rem] gap-[2rem]">
                <div>
                  <div className="number xl:text-[70px] text-[44px]">65+</div>
                  <p className="year border-0 py-[1rem]">
                    React.js <br />
                    Projects Completed
                  </p>
                </div>

                <div>
                  <div className="number xl:text-[70px] text-[44px]">30+</div>
                  <p className="year border-0 py-[1rem]">
                    React.js
                    <br />
                    Experts Onboard
                  </p>
                </div>

                <div>
                  <div className="number xl:text-[70px] text-[44px]">60%</div>
                  <p className="year border-0 py-[1rem]">Savings In Salaries</p>
                </div>

                <div>
                  <div className="number xl:text-[70px] text-[44px]">+4/-4</div>
                  <p className="year border-0 py-[1rem]">
                    Available to Work
                    <br />
                    in Your Timezone
                  </p>
                </div>

                <div>
                  <div className="number xl:text-[70px] text-[44px]">48-72</div>
                  <p className="year border-0 py-[1rem]">
                    Hours to Fill Most
                    <br />
                    Roles
                  </p>
                </div>

                <div>
                  <div className="number xl:text-[70px] text-[44px]">98%</div>
                  <p className="year border-0 py-[1rem]">
                    Project Success
                    <br />
                    Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="mx-auto px-[15px] sec3_width_home md:py-[4rem] py-[2rem]"
        id="section10_service"
      >
        <div className="bg_grey rounded-[30px] bg-[#ededed]">
          <div className="like_flex">
            <div className="like_basis basis-[50%]">
              <div className="like_text bold home_sec2_txt3">
                <p className="!w-full">
                  CONNECT WITH US TO GET A 48 HOURS RISK-FREE TRIAL
                </p>
              </div>
            </div>
            <div className="like_basis_form basis-[50%]">
              <div className="contact_form">
                <div
                  className="wpcf7 js"
                  id="wpcf7-f695-p456-o2"
                  lang="en-US"
                  dir="ltr"
                >
                  <form action="" method="post" className="wpcf7-form init">
                    <div className="form-group">
                      <p>
                        <label className="label_name"> Name*</label>
                        <br />
                        <span className="wpcf7-form-control-wrap">
                          <input
                            size="40"
                            className="form-control-txt"
                            value=""
                            type="text"
                            name="text-737"
                          />
                        </span>
                      </p>
                    </div>

                    <div className="form-group">
                      <p>
                        <label className="label_name">Mobile*</label>
                        <br />
                        <span className="wpcf7-form-control-wrap">
                          <input
                            size="40"
                            className="form-control-txt"
                            value=""
                            type="tel"
                            name="tel-336"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="form-group">
                      <p>
                        <label className="label_name"> Email *</label>
                        <br />
                        <span className="wpcf7-form-control-wrap">
                          <input
                            size="40"
                            className="form-control-txt"
                            value=""
                            type="email"
                            name="email-160"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="btn_paddinng contact_btn btn_flex">
                      <div className="formBtn_icon">
                        <p>
                          <img src="/images/right_arrow.png" alt="arrow" />
                        </p>
                      </div>
                      <p>
                        <input
                          className="send_btn"
                          id="submit"
                          type="submit"
                          value="submit"
                        />
                        <span className="wpcf7-spinner"></span>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec3_width_home faq-bottom mb-[5rem]">
        <div className="service_sec3 md:text-center text-left">
          <p className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px]">
            FAQs
          </p>
        </div>

        <div>
          <div
            id="accordionExampleother"
            className="d-block accordion nav nav-tabs"
            role="tablist"
          >
            <div
              className="accordion-item"
              data-bs-toggle="tab"
              data-bs-target="#accordion-one"
              type="button"
              role="tab"
              aria-controls="accordion-one"
              aria-selected="true"
            >
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  What is the average work experience of a React.js developer
                  hired through Brilworks?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExampleother"
              >
                <div className="accordion-body">
                  <div>
                    The average experience of React.js developers hired through
                    us is of mid-senior level, which is 3+ years.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="accordion-item"
              data-bs-toggle="tab"
              data-bs-target="#accordion-two"
              type="button"
              role="tab"
              aria-controls="accordion-two"
              aria-selected="false"
            >
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How long will it take to hire Reactjs from Brilworks?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExampleother"
              >
                <div className="accordion-body">
                  <div>
                    In as few as 2-5 business days, we can quickly and
                    efficiently assign a React js developer to your project.
                  </div>
                </div>
              </div>
            </div>

            <div
              className="accordion-item"
              data-bs-toggle="tab"
              data-bs-target="#accordion-three"
              type="button"
              role="tab"
              aria-controls="accordion-three"
              aria-selected="false"
            >
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What is the benefit of hiring dedicated React.js developers
                  from Brilworks?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExampleother"
              >
                <div className="accordion-body">
                  <div>
                    Hiring dedicated React js developers for your team is a good
                    idea if you want to ensure that tasks are completed on time
                    and with the highest degree of quality, have the option of
                    scaling the team as and when demand increases, and most
                    importantly get someone reliable on board without worrying
                    about retention.
                  </div>
                </div>
              </div>
            </div>

            <div
              className="accordion-item"
              data-bs-toggle="tab"
              data-bs-target="#accordion-four"
              type="button"
              role="tab"
              aria-controls="accordion-four"
              aria-selected="false"
            >
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Do you provide support and maintenance services after
                  deployment?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExampleother"
              >
                <div className="accordion-body">
                  <div>
                    Yes, we offer support and maintenance services to help you
                    keep your product running smoothly after it has been
                    deployed. This includes bug fixes, security maintenance,
                    minor changes, module alterations, feature enhancements,
                    upgrades, and resolution of technical glitches.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReactTechnology;
