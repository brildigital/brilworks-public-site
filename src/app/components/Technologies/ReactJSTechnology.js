import Link from "next/link";
import ReactJSDevelopers from "./ReactJSDevelopers";
import FAQsTechnology from "./FAQsTechnology";
import TechnologyContactForm from "./TechnologyContactForm";
import BenefitOfHiringDevelopers from "./BenefitOfHiringDevelopers";
import TechnologyCombination from "./TechnologyCombination";
import ThreeStepstoHireDeveloper from "./ThreeStepstoHireDeveloper";
import WhyShouldHireDevelopers from "./WhyShouldHireDevelopers";

const ReactJSTechnology = () => {
  return (
    <>
      <section className="portfolio mt-[6rem]">
        <div className="mx-auto service_width">
          <div className="relative">
            <p>
              <img
                className="h-[46vh] rounded-[20px]"
                src="/images/react-banner.png"
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
                        className="alignnone wp-image-258 "
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
                        className="alignnone wp-image-258 "
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
        <div className="mx-auto service_width lg:py-[6rem] py-[4rem]">
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
                <p className="!text-left !text-[1.2rem]">
                  Our experienced Reactjs developers have built and maintained
                  scalable, intuitive, and interactive applications that have
                  served millions of users. If you’re planning on using React
                  software development services, we’re the right partner for
                  you.
                </p>

                <div className="flex md:gap-8 md:mt-[50px] flex-wrap">
                  <div className="btn_paddinng contact_btn btn_flex !m-[0px]">
                    <div className="formBtn_icon">
                      <Link href="#pricing">
                        <p>
                          <img src="/images/right_arrow.png" alt="arrow" />
                        </p>
                      </Link>
                    </div>
                    <Link href="#pricing">
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
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[10px] ">
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

        <ReactJSDevelopers />
        <BenefitOfHiringDevelopers />

        <TechnologyCombination />
      </section>

      <ThreeStepstoHireDeveloper />

      <WhyShouldHireDevelopers />

      <TechnologyContactForm />
      <FAQsTechnology />
    </>
  );
};

export default ReactJSTechnology;
