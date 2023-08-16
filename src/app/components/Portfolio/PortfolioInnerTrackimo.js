import Link from "next/link";
import { BestAdvocateText } from "../Homepage/BigText";
import ClientReviews from "../Homepage/ClientReviews";
import HomepageContactForm from "../Homepage/HomepageContactForm";

const PortfolioInnerTrackimo = () => {
  return (
    <>
      <section className="portfolio">
        <div className="service_width">
          <div className="sec6_title text-center">
            <p>
              How We Helped Trackimo Build A Smart
              <br />
              Software Solution
            </p>
          </div>
          <div className="mb-[64px]">
            <img
              className="alignnone"
              src="/images/GPS_Trackers_Devices-Uses2-1.jpg"
              alt="vugo"
            />
          </div>

          <div className="porfolio_inner">
            <p>
              Trackimo specializes in highly reliable and effective tracking
              solutions. The company’s end-to-end global IoT platform provides
              personal safety and tracking solutions to more than 500,000
              consumers and more than 50 enterprise clients worldwide.
            </p>
          </div>

          <div className="md:pt-[4rem] md:pb-[6rem] pt-[3rem] pb-[3rem]">
            <Link
              href="https://trackimo.com"
              className="portfolio_know_more md:mx-auto ml-0"
            >
              <div className="get_icon">
                <img
                  className="alignnone"
                  src="/images/right_arrow.png"
                  alt=""
                />
              </div>
              <div className="portfolio_know_more_txt">
                <p>Visit Website</p>
              </div>
            </Link>
          </div>

          <div className="mx-auto">
            <div className="flex flex-wrap identifying-understanding">
              <div className="lg:w-6/12 w-full lg:px-[10px] px-[0px] lg:pb-[0px] pb-[30px]">
                <div>
                  <div className="our_img">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="border_redius20 alignnone"
                      src="/images/Identifying-the-Business-Needs-3.jpg"
                      alt="Identifying the Business Needs"
                      width="691"
                      height="361"
                    />
                  </div>
                </div>
                <div className="w-[85%] text-left">
                  <div className="service_title">
                    <p className="border-0 pt-[2rem]">
                      Identifying the Business Needs
                    </p>
                  </div>
                  <div className="home_sec2_txt4">
                    <p className="!leading-snug !text-left">
                      The client reached out and requested our services to
                      develop a software solution for all the GPS/GSM/Wifi-based
                      tracking approaches along with quality assurance services
                      for the software.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-6/12 w-full lg:px-[10px] px-[0px] lg:pb-[0px] pb-[30px]">
                <div>
                  <div className="our_img">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="border_redius20 alignnone"
                      src={
                        "https://a.storyblok.com/f/219851/692x362/5974c22aa5/the-challenge-1.jpg"
                      }
                      alt="Understanding the Requirement"
                      width="691"
                      height="361"
                    />
                  </div>
                </div>
                <div className="w-[85%] text-left">
                  <div className="service_title">
                    <p className="border-0 pt-[2rem]">The Challenge</p>
                  </div>
                  <div className="home_sec2_txt4">
                    <p className="!leading-snug !text-left">
                      In order to create a connected product, we had to solve a
                      number of challenges: managing a large database of
                      millions of devices, which failed to use existing
                      databases. Server-side code was written in a monolithic
                      architecture, so it was hard to manage everything in a
                      single place. Devices were communicating with one channel.
                      No automated process for deployment and so on.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="workpadd_borderTop xl:my-[8rem] lg:my-[6rem] md:my-[4rem] my-[2rem]"></div>

          <div className="sec6_title text-center p-0 md:w-[80%] w-[100%] mx-auto md:mb-[80px] mb-[80px]">
            <p>HOW BRILWORKS HELPED TRACKIMO ACHIEVE ITS OBJECTIVES?</p>
          </div>

          <div className="service_grid_img">
            <div className="grid md:grid-cols-2 grid-cols-1 ">
              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    loading="lazy"
                    className=""
                    src="/images/1 (1).png"
                    alt="Feature-rich Application"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_description">
                    <p>
                      Used the combination of multiple databases and replicas to
                      manage a large database
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    loading="lazy"
                    className=""
                    src="/images/burgerAsset-150-2.png"
                    alt="Assured On-time Delivery"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_description">
                    <p>
                      Divided the existing monolithic application into
                      micro-service architecture.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className=""
                    src="/images/3.png"
                    alt="Integration of Quick Payments"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_description">
                    <p>Created a 2-way data solution using UDP protocol.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/4.png"
                    alt="Selecting the Right Technology"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_description">
                    <p>
                      Created a Jenkins + AWS ECS automated process to deploy
                      each service for different environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="workpadd_borderTop xl:my-[6rem] md:my-[4rem] my-[2rem]"></div>

          <div className="sec6_title text-center p-0 mx-auto mb-[32px]">
            <p>THE RESULT</p>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-[32px] md:mt-[64px] mt-[32px] the-result">
            <div className="text-center">
              <div className="w-[22%] mx-auto">
                <img
                  className="alignnone"
                  src="/images/Trackimo-3.png"
                  alt="2x"
                />
              </div>
              <div className="service_description txt_center">
                <p>
                  Smart Alerts Receive alerts by text, email, and app
                  notifications for emergency events, safety zone breaches,
                  speed thresholds, and sudden movement.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-[22%] mx-auto">
                <img
                  className="alignnone"
                  src="/images/Icons-03.png"
                  alt="advertiser queries"
                />
              </div>
              <div className="service_description txt_center">
                <p>
                  Worldwide Coverage Trackimo devices can be tracked via the web
                  or smartphone app anywhere GSM cellular reception exists.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-[22%] mx-auto">
                <img
                  className="alignnone"
                  src="/images/Icons-02.png"
                  alt="better marketing spending"
                />
              </div>
              <div className="service_description txt_center">
                <p>
                  Real-Time Tracking GPS and GSM connections provide instant,
                  highly accurate current location, and history
                </p>
              </div>
            </div>
          </div>

          <div className="sec6_title text-center p-0 mx-auto mb-[32px] md:mt-[4rem] mt-4">
            <p>WHAT MAKES US BRILLIANT?</p>
          </div>

          <div className="md:px-[0px] px-[15px]">
            <div className="grid md:grid-cols-3 grid-cols-1 sec7_service_grid">
              <div className="contact_box">
                <div className="mx-auto">
                  <img src="/images/people-01.png" alt="people" className="" />
                </div>
                <div className="steps_service">
                  <div className="no_flex">
                    <div className="no_flex_height">
                      <div className="developer_sec6_title text-center mob_center">
                        <p>People</p>
                      </div>
                      <div className="service_description text-center mob_center">
                        <p>
                          With our design &amp; development ninjas by our side,
                          there’s absolutely nothing we can’t achieve.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact_box">
                <div className="mx-auto">
                  <img
                    src="/images/progress-01.png"
                    alt="progress"
                    className=""
                  />
                </div>

                <div className="steps_service">
                  <div className="no_flex">
                    <div className="no_flex_height">
                      <div className="developer_sec6_title text-center mob_center">
                        <p>Progress</p>
                      </div>
                      <div className="service_description text-center mob_center">
                        <p>
                          We’ve built and launched more than 120+ products in 20
                          countries across the globe.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact_box">
                <div className="mx-auto">
                  <img
                    src="/images/passion-01.png"
                    alt="passion"
                    className=""
                  />
                </div>
                <div className="steps_service">
                  <div className="no_flex">
                    <div className="no_flex_height">
                      <div className="developer_sec6_title text-center mob_center">
                        <p>Passion</p>
                      </div>
                      <div className="service_description text-center mob_center">
                        <p>
                          We help you move your product vision from the
                          whiteboard to the real world.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:pt-[4rem] md:pb-[6rem] pt-[3rem] pb-[3rem]">
            <Link
              href="/about-us/"
              className="portfolio_know_more md:mx-auto ml-0"
            >
              <div className="get_icon">
                <img
                  className="alignnone"
                  src="/images/right_arrow.png"
                  alt=""
                />
              </div>
              <div className="portfolio_know_more_txt">
                <p>About Us</p>
              </div>
            </Link>
          </div>

          <div className="workpadd_borderTop xl:my-[6rem] md:my-[4rem] my-[2rem]"></div>

          <div className="container mx-auto px-[15px]">
            <BestAdvocateText />
            <ClientReviews />
          </div>

          <div className="blog-home xl:pb-[128px] pb-[40px] mx-auto md:pt-[128px] pt-[32px]">
            <HomepageContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioInnerTrackimo;
