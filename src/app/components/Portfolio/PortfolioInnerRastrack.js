"use client";
import Link from "next/link";
import { BestAdvocateText } from "../Homepage/BigText";
import ClientReviews from "../Homepage/ClientReviews";
import { useMediaQuery } from "react-responsive";
import HomepageContactForm from "../Homepage/HomepageContactForm";

const PortfolioInnerRastrack = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      <section className="portfolio">
        <div className="service_width">
          <div className="sec6_title text-center">
            <p>
              How Brilworks Helped Rastrack
              <br />
              Improve their Fleet’s Efficiency
            </p>
          </div>
          <div className="mb-[64px]">
            <img className="alignnone" src="/images/rastrack.jpg" alt="vugo" />
          </div>

          <div className="porfolio_inner">
            <p>
              Rastrack is a satellite tracking and real-time monitoring company
              which helps owners track their vehicles with detailed analysis.
              Rastrack specializes in the control and satellite monitoring of
              assets or individuals using networking technologies.
            </p>
          </div>

          <div className="md:pt-[4rem] md:pb-[6rem] pt-[3rem] pb-[3rem]">
            <Link
              href="https://rastrack.com"
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
                      src="/images/Identifying-the-Business-Needs.jpg"
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
                      Rastrack reached out to Brilworks to develop a mobile and
                      web dashboard that could be used by both drivers and fleet
                      managers for better tracking of feel and analysis of fleet
                      data.
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
                      src="/images/Understanding-the-Requirement.jpg"
                      alt="Understanding the Requirement"
                      width="691"
                      height="361"
                    />
                  </div>
                </div>
                <div className="w-[85%] text-left">
                  <div className="service_title">
                    <p className="border-0 pt-[2rem]">
                      Understanding the Requirement
                    </p>
                  </div>
                  <div className="home_sec2_txt4">
                    <p className="!leading-snug !text-left">
                      The client wanted us to build a mobile app that meets
                      current market needs and can handle data loads for a fleet
                      GPS application. They also needed the ability for us to
                      collect and transmit data to servers when it’s not being
                      used.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="workpadd_borderTop xl:my-[8rem] lg:my-[6rem] md:my-[4rem] my-[2rem]"></div>

          <div className="sec6_title text-center p-0 md:w-[68%] w-[100%] mx-auto md:mb-[80px] mb-[80px]">
            <p>HOW BRILWORKS HELPED VUGO ACHIEVE ITS OBJECTIVES?</p>
          </div>

          <div className="service_grid_img">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px]">
              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    loading="lazy"
                    className=""
                    src="/images/Dedicated-Technology-Experts.png"
                    alt="Feature-rich Application"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 01.</div>
                  <div className="service_title">
                    <p>Dedicated Technology Experts</p>
                  </div>
                  <div className="service_description">
                    <p>
                      We developed an application with an interactive dashboard
                      for rider behavior, which includes various features such
                      as user profiling and the collection of data for
                      personalized ads.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    loading="lazy"
                    className=""
                    src="/images/On-time-Delivery.png"
                    alt="Assured On-time Delivery"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 02.</div>
                  <div className="service_title">
                    <p>On-time Delivery</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Brilworks developed a mobile app for customer interaction
                      and a web application dashboard using Java, Elasticsearch,
                      and Kibana within 6 months timeframe.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className=""
                    src="/images/Enabled-Automation.png"
                    alt="Integration of Quick Payments"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 03.</div>
                  <div className="service_title">
                    <p>Enabled Automation</p>
                  </div>
                  <div className="service_description">
                    <p>
                      With the new application, it became easier for drivers to
                      upload images and update their status which helped fleet
                      owners get rid of manual tracking.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/Predictive-Analysis.png"
                    alt="Selecting the Right Technology"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 04.</div>
                  <div className="service_title">
                    <p>Predictive Analysis</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Thanks to the new interactive dashboard we created,
                      Rastrack was able to view the full trip of the fleet and
                      can predict the cost of fuel and profit margin for each
                      trip.
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

          <div className="md:w-[73%] w-[100%] mx-auto text-center home_sec2_txt4">
            <p className="!pt-0 md:!text-[1.5rem] !text-left md:!text-center">
              We strived to be a reliable partner for their team by working in
              their time zone, providing them with complete flexibility and
              quality service. Together we made Rastrack’s vision a reality and
              are proud to have helped create such beautiful software for each
              and every stakeholder involved.
            </p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-2 md:gap-[32px] md:mt-[64px] mt-[32px] the-result">
            <div className="text-center">
              <div className="w-[22%] mx-auto">
                <img
                  className="alignnone"
                  src="/images/rastrack-1.png"
                  alt="2x"
                />
              </div>
              <div className="service_description txt_center">
                <p>
                  Drivers are easily
                  <br />
                  able to update fleet information
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-[22%] mx-auto">
                <img
                  className="alignnone"
                  src="/images/rastrack-2.png"
                  alt="advertiser queries"
                />
              </div>
              <div className="service_description txt_center">
                <p>
                  Fleet owners can
                  <br />
                  predict cost and profit.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-[22%] mx-auto">
                <img
                  className="alignnone"
                  src="/images/rastrack-3.png"
                  alt="better marketing spending"
                />
              </div>
              <div className="service_description txt_center">
                <p>
                  Fleet owners can get
                  <br />
                  notifications if any repair is needed for any vehicle.
                </p>
              </div>
            </div>
          </div>

          <div className="sec6_title text-center p-0 mx-auto md:mb-[32px] md:mt-[4rem]">
            <p>WHAT MAKES US BRILLIANT?</p>
          </div>

          <div className="md:px-[0px] px-[15px]">
            <div
              className={`grid lg:grid-cols-3 grid-cols-1 md:gap-[3rem] our-engagement-models ${
                isMobile ? "!gap-0" : ""
              }`}
            >
              <div className="contact_box">
                <div className="mx-auto">
                  <img src="/images/people-01.png" alt="people" className="" />
                </div>
                <div className="steps_service  flex items-center justify-center">
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

                <div className="steps_service flex items-center justify-center">
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
                <div className="steps_service flex items-center justify-center">
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

          <div className="mx-auto">
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

export default PortfolioInnerRastrack;
