/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BestAdvocateText } from "../Homepage/BigText";
import ClientReviews from "../Homepage/ClientReviews";
import HomepageContactForm from "../Homepage/HomepageContactForm";

const PortfolioInnerOrokii = () => {
  return (
    <>
      <section className="portfolio">
        <div className="service_width">
          <div className="sec6_title text-center">
            <p>
              How Our Experts Helped Orokii Build a
              <br />
              Custom Fintech Application
            </p>
          </div>
          <div className="mb-[64px]">
            <img className="alignnone" src="/images/orokii.jpg" alt="vugo" />
          </div>

          <div className="porfolio_inner">
            <p>
              Orokii is an on-demand platform that allows you to send
              cross-border payments anywhere in the world at real-time prices.
              Orokii is making domestic and cross-border payments cheaper,
              faster, and safer using blockchain technology.
            </p>
          </div>

          <div className="md:pt-[4rem] md:pb-[6rem] pt-[3rem] pb-[3rem]">
            <div className="portfolio_know_more md:mx-auto ml-0">
              <div className="get_icon">
                <Link href="https://orokii.com">
                  <img
                    className="alignnone"
                    src="/images/right_arrow.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="portfolio_know_more_txt">
                <p>
                  <Link href="https://orokii.com">Visit Website</Link>
                </p>
              </div>
            </div>
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
                      src="/images/Identifying-the-Business-Needs-1.jpg"
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
                      The client Orokii reached out and requested our services
                      to develop a mobile application that could be used by
                      their customers to carry out secure transactions within
                      domestic or international markets.
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
                      src="/images/The-Challenge.jpg"
                      alt="Understanding the Requirement"
                      width="691"
                      height="361"
                    />
                  </div>
                </div>
                <div className="w-11/12 text-left">
                  <div className="service_title">
                    <p className="border-0 pt-[2rem]">The Challenge</p>
                  </div>
                  <div className="home_sec2_txt4">
                    <p className="!leading-snug !text-left">
                      It’s always challenging to send cross-border payments
                      since they take a long time to clear (sometimes 4-5 days)
                      and also come with hefty charges and so the client wanted
                      to build an app that could solve the problem of faster
                      cross-border transactions with lower fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="workpadd_borderTop xl:my-[8rem] lg:my-[6rem] md:my-[4rem] my-[2rem]"></div>

          <div className="sec6_title text-center p-0 md:w-[80%] w-[100%] mx-auto md:mb-[80px] mb-[80px]">
            <p>HOW BRILWORKS HELPED OROKII ACHIEVE ITS GOALS?</p>
          </div>

          <div className="service_grid_img">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[40px]">
              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    loading="lazy"
                    className=""
                    src="/images/Use-of-Right-Technology.png"
                    alt="Feature-rich Application"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 01.</div>
                  <div className="service_title">
                    <p>Use of Right Technology</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Brilworks helped the client to develop a mobile
                      application based on blockchain technology to make
                      cross-border transactions cheaper and faster.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    loading="lazy"
                    className=""
                    src="/images/Resolved-key-challenges.png"
                    alt="Assured On-time Delivery"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 02.</div>
                  <div className="service_title">
                    <p>Resolved key challenges</p>
                  </div>
                  <div className="service_description">
                    <p>
                      Thanks to blockchain technology it was possible for us to
                      bypass the middlemen and solve the challenge of time and
                      costs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className=""
                    src="/images/Followed-Due-Compliance.png"
                    alt="Integration of Quick Payments"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 03.</div>
                  <div className="service_title">
                    <p>Followed Due Compliance</p>
                  </div>
                  <div className="service_description">
                    <p>
                      The application was designed according to international
                      standards, making it compatible with various devices and
                      operating systems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:gap-[48px] gap-[1.4rem]">
                <div className="basis-[15%]">
                  <img
                    className="alignnone wp-image-285 size-full"
                    src="/images/Functional-UIUX.png"
                    alt="Selecting the Right Technology"
                  />
                </div>

                <div className="service_txt basis-[85%]">
                  <div className="service_num">&lt; 04.</div>
                  <div className="service_title">
                    <p>Functional UI/UX</p>
                  </div>
                  <div className="service_description">
                    <p>
                      We were able to create a well-structured and user-friendly
                      system, enabling the client’s customers to complete
                      transactions easily and conveniently.
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
              Team Brilworks was delighted to be partnered with Orokii in
              bringing their innovative mobile application. We were able to
              create a seamless, secure, and instantly settled payment
              experience for consumers and businesses to send funds
              cross-border.
            </p>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-2 md:mt-[64px] mt-[32px]">
            <div className="text-center">
              <div className="w-[22%] mx-auto">
                <img
                  className="alignnone"
                  src="/images/Orokii-1.png"
                  alt="2x"
                />
              </div>
              <div className="service_description txt_center">
                <p>
                  Faster & secure
                  <br />
                  transactions
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-[22%] mx-auto">
                <img
                  className="alignnone"
                  src="/images/Orokii-2.png"
                  alt="advertiser queries"
                />
              </div>
              <div className="service_description txt_center">
                <p>
                  Less or zero
                  <br />
                  fees for transactions
                </p>
              </div>
            </div>
          </div>

          <div className="sec6_title text-center p-0 mx-auto mb-[32px] md:mt-[4rem]">
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
            <div className="portfolio_know_more md:mx-auto ml-0">
              <div className="get_icon">
                <Link href="/about-us/">
                  <img
                    className="alignnone"
                    src="/images/right_arrow.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="portfolio_know_more_txt">
                <p>
                  <Link href="/about-us/">About Us </Link>
                </p>
              </div>
            </div>
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

export default PortfolioInnerOrokii;
