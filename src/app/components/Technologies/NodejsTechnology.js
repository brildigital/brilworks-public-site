import Link from "next/link";
import FAQsTechnology from "./FAQsTechnology";
import TechnologyContactForm from "./TechnologyContactForm";
import BenefitOfHiringDevelopers from "./BenefitOfHiringDevelopers";
import TechnologyCombination from "./TechnologyCombination";
import ThreeStepstoHireDeveloper from "./ThreeStepstoHireDeveloper";
import NodeJSDevelopers from "./NodeJSDevelopers";
import WhyShouldHireDevelopers from "./WhyShouldHireDevelopers";

const NodejsTechnology = () => {
  return (
    <>
      <section className="portfolio mt-[6rem]">
        <div className="mx-auto service_width">
          <div className="relative">
            <p>
              <img
                className="h-[46vh] rounded-[20px]"
                src="images/nord-services-banner.png"
                alt="Node banner"
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
                        NODE.JS
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

        <div className="mx-auto service_width lg:py-[6rem] py-[4rem]">
          <div className="flex !flex-col lg:!flex-row gap-[3.5rem]">
            <div className="basis-[45%]">
              <div className="home_sec2_txt3 like_text">
                <Link href="#section10_service">
                  <p className="p-0 !ml-[0] !w-full">
                    HIRE OUR NODE JS DEVELOPMENT COMPANY TO POWER UP YOUR
                    BACKEND
                  </p>
                </Link>
              </div>
            </div>
            <div className="basis-[55%]">
              <div className="home_sec2_txt4">
                <p className="!text-left !text-[1.2rem]">
                  Our Node.js developers are specialists in developing
                  real-time, data-intensive, and scalable web and mobile
                  applications. Get more for your company through our Node js
                  development services today!
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
                        Hire Node.js Developers
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
                DRIVE TRANSFORMATION CHANGE WITH OUR NODE JS
                <br />
                DEVELOPMENT SERVICES
              </p>
            </div>
          </div>

          <div className="service_grid_img">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[50px] gap-[40px]">
              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    loading="lazy"
                    src="/images/consultacy.png"
                    alt="Node.js Consulting"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 01.</div>
                  <div className="service_title">
                    <p>Node.js Consulting</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Our Node.js consulting program offers services such as
                      architecture analysis, code review, and assessment
                      development processes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    loading="lazy"
                    src="/images/migration-1.png"
                    alt="Node.js API Development & Integration"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 02.</div>
                  <div className="service_title">
                    <p>Node.js API Development & Integration</p>
                  </div>
                  <div className="service_description">
                    <p>
                      If you’re building an app and you need a custom API, we
                      can help. We’ve gathered all the relevant expertise in
                      developing high-performing robust and scalable back-end
                      solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className=""
                    src="/images/plugin.png"
                    alt="Node.js Plugin Development"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 03.</div>
                  <div className="service_title">
                    <p>Node.js Plugin Development</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Our team of experts can create and integrate custom
                      plugins to augment your web app’s functionality and
                      capabilities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/migration.png"
                    alt="Node.js Migration"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 04.</div>
                  <div className="service_title">
                    <p>Node.js Migration</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Our team of developers can help you migrate your existing
                      .Net, PHP, Java, or other apps to NodeJS in a matter of
                      weeks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/web.png"
                    alt="Node.js Enterprise Web Apps"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 05.</div>
                  <div className="service_title">
                    <p>Node.js Enterprise Web Apps</p>
                  </div>

                  <div className="service_description">
                    <p>
                      We can help you to build your next-generation web app by
                      adding custom functionality and enhancing its capabilities
                      with customizable NodeJS plugins.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/end-to-end-node.png"
                    alt="Node.js End-to-end Solutions"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 06.</div>
                  <div className="service_title">
                    <p>Node.js End-to-end Solutions</p>
                  </div>
                  <div className="service_description">
                    <p>
                      We don’t just fix broken code, we offer cost-effective
                      solutions for your company. With Node, we’ll help you be
                      more agile, and develop faster with better modules and
                      transparent architecture.
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

        <NodeJSDevelopers />

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

export default NodejsTechnology;
