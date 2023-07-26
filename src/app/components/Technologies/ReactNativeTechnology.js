import Link from "next/link";
import FAQsTechnology from "./FAQsTechnology";
import TechnologyContactForm from "./TechnologyContactForm";
import BenefitOfHiringDevelopers from "./BenefitOfHiringDevelopers";
import ThreeStepstoHireDeveloper from "./ThreeStepstoHireDeveloper";
import WhyShouldHireDevelopers from "./WhyShouldHireDevelopers";
import ReactNativeDevelopers from "./ReactNativeDevelopers";

const ReactNativeTechnology = () => {
  return (
    <>
      <section className="portfolio mt-[6rem]">
        <div className="mx-auto service_width">
          <div className="relative">
            <p>
              <img
                className="h-[46vh] rounded-[20px]"
                src="/images/REACT-NATIVE-banner.png"
                alt="React Native banner"
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
                        React Native
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
                    Hire React Native Developers to Build Stunning Mobile
                    Applications
                  </p>
                </Link>
              </div>
            </div>
            <div className="basis-[55%]">
              <div className="home_sec2_txt4">
                <p className="!text-left !text-[1.2rem]">
                  Our team is expert in handling the most complex of projects.
                  We offer a scalable, responsive and flexible approach toward
                  React Native mobile development that’s unmatched in the
                  industry.
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
                        Hire React Native Developers
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
                Build Top-notch Cross-platform Mobile Applications Using Our
                React Native Development Company
              </p>
            </div>
          </div>

          <div className="service_grid_img">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[10px]">
              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    loading="lazy"
                    src="/images/Enterprise-App-Development.png"
                    alt="React Native App Consultation"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 01.</div>
                  <div className="service_title">
                    <p>React Native App Consultation</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Our team will help you to get the entire project roadmap,
                      project schedule, and the overall design and layout of
                      your application to build a robust and customized mobile
                      app with a native look and feel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    loading="lazy"
                    src="/images/Custom-App-Development.png"
                    alt="React Native Cross-Platform App Development"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 02.</div>
                  <div className="service_title">
                    <p>React Native Cross-Platform App Development</p>
                  </div>
                  <div className="service_description">
                    <p>
                      If you are looking for a React Native app development
                      company to create an app that runs on multiple platforms,
                      then look no further. Hire our React Native developers who
                      are specialized in developing applications for both
                      Android & iOS platforms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className=""
                    src="/images/frontend.png"
                    alt="React Native Migration"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 03.</div>
                  <div className="service_title">
                    <p>React Native Migration</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Our team of experts is adept at moving apps from other
                      platforms without data loss. We’re here to help you
                      migrate legacy apps, or get them up to speed with the
                      latest version of your app.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/migration-1.png"
                    alt="React Native App Maintenance & Support"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 04.</div>
                  <div className="service_title">
                    <p>React Native App Maintenance & Support</p>
                  </div>
                  <div className="service_description">
                    <p>
                      We offer support and maintenance services after the app
                      deployment. Our team monitors the system and ensures high
                      performance. Whether you need to boost uptime or reduce
                      downtime, we’ve got your back.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/ui-ux-1.png"
                    alt="React Native UI/UX Development"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 05.</div>
                  <div className="service_title">
                    <p>React Native UI/UX Development</p>
                  </div>

                  <div className="service_description">
                    <p>
                      Our React Native specialists design beautiful applications
                      while leveraging the latest technology to create a
                      seamless and delightful user experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/support.png"
                    alt="React Native Testing & Audit"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 06.</div>
                  <div className="service_title">
                    <p>React Native Testing & Audit</p>
                  </div>
                  <div className="service_description">
                    <p>
                      We’ll help you evaluate your application for
                      responsiveness, bugs, performance, and stability. The team
                      ensures that your app is running as smoothly as possible
                      on all devices and operating system platforms.
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

        <ReactNativeDevelopers />

        <BenefitOfHiringDevelopers />
      </section>

      <ThreeStepstoHireDeveloper />

      <WhyShouldHireDevelopers />

      <TechnologyContactForm />
      <FAQsTechnology />
    </>
  );
};

export default ReactNativeTechnology;
