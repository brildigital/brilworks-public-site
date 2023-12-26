"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import CareerContactForm from "./CareerContactForm";
import BrilworksCareerReview from "./BrilworksCareerReview";
import { scrollEffect, scrollToSection } from "../lib/commonfunction";
import { useMediaQuery } from "react-responsive";

const Career = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <>
      <section>
        <div className="container mx-auto md:pt-[128px] md:px-[0] pt-[90px] px-[15px]">
          <div className="md:text-center">
            <div className="home_sec2_txt1">
              <h1 className="xl:text-[96px] lg:text-[65px] md:text-[42px] sm:text-[34px] text-[28px]">
                Welcome to our
                <div className={`home_sec2_txt2 ${isMobile ? "my-2" : "my-3"}`}>
                  <p className="xl:text-[96px] lg:text-[65px] md:text-[42px] sm:text-[34px] text-[28px]">
                    World of Brilliance
                  </p>
                </div>
              </h1>
            </div>

            <div className="home_sec2_txt3 home_sec2_txt3_style md:w-[80%] md:mx-auto">
              <p className="xl:text-[48px] lg:text-[32px] sm:text-[26px] text-[22px] font-light f-light !w-[100%]">
                A place where brilliant minds come together, to collaborate and
                create products with a common goal of making them innovative,
                appealing, and efficient while having truckloads of fun!
              </p>
            </div>

            <div className="flex sm:items-center items-start justify-center lg:gap-[80px] gap-[20px] flex-col sm:flex-row">
              <Link
                href="#section7_career"
                onClick={(e) => scrollToSection(e, "section7_career")}
                className="flex items-center justify-center md:gap-[20px] gap-[10px] about_btn transition mt-[16px]"
              >
                <div className="about_txt">
                  <p className="change_link text-[21px]">
                    Explore Open Positions
                  </p>
                </div>
                <div className="aerrow relative">
                  <img
                    decoding="async"
                    loading="lazy"
                    className="black_aerrow alignnone wp-image-28 size-full"
                    src="/images/black_aerrow-1.png"
                    alt="arrow"
                    width="46"
                    height="18"
                  />
                  <img
                    decoding="async"
                    loading="lazy"
                    className="gradiant_aerrow alignnone wp-image-29 size-full"
                    src="/images/arrow-gradiant.png"
                    alt="arrow"
                    width="46"
                    height="18"
                  />
                </div>
              </Link>
              <Link
                href="#section10"
                onClick={(e) => scrollToSection(e, "section10")}
                className="flex items-center justify-center md:gap-[20px] gap-[10px] about_btn transition mt-[16px]"
              >
                <div className="about_txt">
                  <p className="change_link text-[21px]">Join Our Team</p>
                </div>
                <div className="aerrow relative">
                  <img
                    decoding="async"
                    loading="lazy"
                    className="black_aerrow alignnone wp-image-28 size-full"
                    src="/images/black_aerrow-1.png"
                    alt="arrow"
                    width="46"
                    height="18"
                  />
                  <img
                    decoding="async"
                    loading="lazy"
                    className="gradiant_aerrow alignnone wp-image-29 size-full"
                    src="/images/arrow-gradiant.png"
                    alt="arrow"
                    width="46"
                    height="18"
                  />
                </div>
              </Link>
            </div>

            <div className="mx-auto md:my-[8rem] my-[3rem] !w-5/6">
              <img
                decoding="async"
                loading="lazy"
                src="https://a.storyblok.com/f/219851/1566x682/fef0e645ae/career.jpg"
                alt="career"
                className="rounded-[36px]"
              />
            </div>
            <div className="reveal">
              <div className="home_sec2_txt1">
                <p className="xl:text-[96px] lg:text-[65px] md:text-[42px] sm:text-[34px] text-[28px]">
                  At Brilworks,
                </p>
              </div>

              <div className="!flex items-center md:justify-center justify-start md:gap-[2rem] gap-[10px] hidden-xs">
                <div className="home_sec2_txt2">
                  <p className="xl:text-[96px] lg:text-[65px] md:text-[42px] sm:text-[34px] text-[28px]">
                    It’s all about the
                  </p>
                </div>
                <div className="home_sec2_txt1 txt_center border-[#000000] border-b-[5px]">
                  <p>people</p>
                </div>
              </div>

              <div className="home_sec2_txt3 home_sec2_txt3_style md:w-[80%] md:mx-auto">
                <p className="xl:text-[48px] lg:text-[32px] sm:text-[26px] text-[22px] !w-full font-light f-light">
                  To us, the people and the collaborative working style are key
                  drivers of engagement. It’s our aim to create a welcoming
                  environment in which employees are empowered to achieve their
                  fullest potential.
                </p>
              </div>
            </div>

            <div className="md:my-[8rem] my-[3rem] !mb-0 reveal">
              <div>
                <div className="home_sec2_txt1">
                  <p className="xl:text-[96px] lg:text-[65px] md:text-[42px] sm:text-[34px] text-[28px]">
                    Hear it
                  </p>
                </div>
                <div className="!flex items-center md:justify-center justify-start md:gap-[2rem] gap-[10px] hidden-xs">
                  <div className="home_sec2_txt2">
                    <p className="xl:text-[96px] lg:text-[65px] md:text-[42px] sm:text-[34px] text-[28px]">
                      from our
                    </p>
                  </div>
                  <div className="home_sec2_txt1 text-center border-[#000000] border-b-[5px]">
                    <p>people</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-[1rem] mt-[2rem] md:flex-row flex-col">
                <div className="home_txt3">
                  <p>4.7 / 5.0</p>
                </div>
                <div className="flex items-center gap-[12px]">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/icons-06.png"
                    alt="star"
                    className="w-[25px]"
                  />
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/icons-06.png"
                    alt="star"
                    className="w-[25px]"
                  />
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/icons-06.png"
                    alt="star"
                    className="w-[25px]"
                  />
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/icons-06.png"
                    alt="star"
                    className="w-[25px]"
                  />
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/icons-6.7.png"
                    alt="star"
                    className="w-[17.5px]"
                  />
                </div>
                <div className="header_font">
                  <p>Powered by</p>
                </div>
                <div className="w-[200px]">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/ambitions_logo.png"
                    alt="ambitionbox reviews"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sm:w-[93%] w-full mx-auto px-[15px] reveal">
        <div>
          {/* <div className="clutch-widget">
            <iframe
              id="iframe-0.7673398699825025"
              style={{
                border: "none",
                overflow: "hidden",
                display: "block",
                height: "357px",
              }}
              title="&#091;iFrameSizer&#093;iframe-0.7673398699825025:0:0:mouseleave:674:121812"
              src="https://widget.clutch.co/widgets/get/12?ref_domain=192.168.50.12&uid=1881351&primary_color=%2308537E&secondary_color=%2308537E&rel_nofollow=true&reviews=2054376%2C2040492%2C2032289%2C2010928%2C1968060%2C1960170%2C1955515%2C1946156%2C1944400%2C1942781%2C1942541%2C1941715&ref_path=/brilworks/home/"
              height="375px"
              scrolling="no"
              className="mx-auto w-[100%]"
            ></iframe>
          </div> */}
          <BrilworksCareerReview />
        </div>
      </section>

      <section className="w-[93%] mx-auto md:my-[8rem] my-[4rem] reveal">
        <div className="border border-[#80808075] lg:p-[6rem] sm:p-[3rem] p-[1rem] rounded-[25px]">
          <div className="flex md:flex-row flex-col">
            <div className="basis-[35%]">
              <div className="flex items-center gap-[16px]">
                <p>Powered by</p>
                <div className="w-[122px]">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/svgviewer-output-1.png"
                    alt="glassdoor reviews"
                  />
                </div>
              </div>
            </div>

            <div className="basis-[65%]">
              <ul>
                <li>
                  <div className="flex justify-between items-center border-b-[1px] border-[#80808075] py-[1.5rem]">
                    <div className="lg:text-[32px] xl:text-[48px] text-[16px]">
                      <p>Overall</p>
                    </div>
                    <div className="flex items-center gap-[2rem]">
                      <div className="flex items-center gap-[12px]">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-6.8.png"
                          className="md:w-[20px] w-[10.5px]"
                          alt="star"
                        />
                      </div>
                      <div className="lg:text-[32px] xl:text-[48px] text-[16px]">
                        <p>4.8</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center border-b-[1px] border-[#80808075] py-[1.5rem]">
                    <div className="lg:text-[32px] xl:text-[48px] text-[16px]">
                      <p>Culture &amp; Values</p>
                    </div>
                    <div className="flex items-center gap-[2rem]">
                      <div className="flex items-center gap-[12px]">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-6.8.png"
                          className="md:w-[20px] w-[10.5px]"
                          alt="star"
                        />
                      </div>
                      <div className="lg:text-[32px] xl:text-[48px] text-[16px]">
                        <p>4.8</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center border-b-[1px] border-[#80808075] py-[1.5rem]">
                    <div className="lg:text-[32px] xl:text-[48px] text-[16px]">
                      <p>Diversity &amp; Inclusion</p>
                    </div>
                    <div className="flex items-center gap-[2rem]">
                      <div className="flex items-center gap-[12px]">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-6.6.png"
                          className="md:w-[15px] w-[8px]"
                          alt="star"
                        />
                      </div>
                      <div className="lg:text-[32px] xl:text-[48px] text-[16px]">
                        <p>4.6</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center border-b-[1px] border-[#80808075] py-[1.5rem]">
                    <div className="lg:text-[32px] xl:text-[48px] text-[16px]">
                      <p>Work/Life Balance</p>
                    </div>
                    <div className="flex items-center gap-[2rem]">
                      <div className="flex items-center gap-[12px]">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-6.7.png"
                          className="md:w-[17.5px] w-[9.1px]"
                          alt="star"
                        />
                      </div>
                      <div className="lg:text-[32px] xl:text-[48px] text-[16px]">
                        <p>4.7</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center border-b-[1px] border-[#80808075] py-[1.5rem]">
                    <div className="lg:text-[32px] xl:text-[48px] text-[16px]">
                      <p>Senior Management</p>
                    </div>
                    <div className="flex items-center gap-[2rem]">
                      <div className="flex items-center gap-[12px]">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-6.7.png"
                          className="md:w-[17.5px] w-[9.1px]"
                          alt="star"
                        />
                      </div>
                      <div className="lg:text-[32px] xl:text-[48px] text-[16px]">
                        <p>4.7</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center border-b-[1px] border-[#80808075] py-[1.5rem]">
                    <div className="lg:text-[32px] xl:text-[48px] text-[16px]">
                      <p>Compensation &amp; Benefits</p>
                    </div>
                    <div className="flex items-center gap-[2rem]">
                      <div className="flex items-center gap-[12px]">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          className="md:w-[25px] w-[13px]"
                          alt="star"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-6.5.png"
                          className="md:w-[12.5px] w-[6.5px]"
                          alt="star"
                        />
                      </div>
                      <div className="lg:text-[32px] xl:text-[48px] text-[16px]">
                        <p>4.5</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center border-b-[1px] border-[#80808075] py-[1.5rem]">
                    <div className="lg:text-[32px] xl:text-[48px] text-[16px]">
                      <p>Career Opportunities</p>
                    </div>
                    <div className="flex items-center gap-[2rem]">
                      <div className="flex items-center gap-[12px]">
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          alt="star"
                          className="md:w-[25px] w-[13px]"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          alt="star"
                          className="md:w-[25px] w-[13px]"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          alt="star"
                          className="md:w-[25px] w-[13px]"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-06.png"
                          alt="star"
                          className="md:w-[25px] w-[13px]"
                        />
                        <img
                          decoding="async"
                          loading="lazy"
                          src="/images/icons-6.7.png"
                          className="md:w-[17.5px] w-[9.1px]"
                          alt="star"
                        />
                      </div>
                      <div className="lg:text-[32px] xl:text-[48px] text-[16px]">
                        <p>4.7</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[93%] mx-auto md:my-[8rem] my-[4rem] reveal">
        <div className="home_sec2_txt1 md:text-center text-left md:mb-[80px] mb-[40px]">
          <p>
            <span className="abc">Why should you</span> join us?
          </p>
        </div>

        <div className="grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-2 gap-[30px]">
          <div className={`${!isMobile ? "hover_class" : ""} relative`}>
            <div className="p-[2rem] rounded-[40px] border border-[#80808075]">
              <div className="home_txt3">
                <p className="min-h-[128px]">Flexible Timings</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="aerrow">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/black_aerrow-1.png"
                    alt="arrow"
                  />
                </div>
                <div className="sec6_career_img1">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/Flexible-Timings-.png"
                    alt="Flexible Timings"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 z-[2]">
              <div className="hover_content_box about_bg">
                <div className="join_content">
                  <p>
                    We understand your responsibilities extend beyond your work
                    and so it is important for us
                    <br />
                    to be flexible
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${!isMobile ? "hover_class" : ""} relative`}>
            <div className="!p-[1.5rem] rounded-[40px] border border-[#80808075]">
              <div className="home_txt3">
                <p className="min-h-[128px]">Medical Insurance Cover</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="aerrow">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/black_aerrow-1.png"
                    alt="arrow"
                  />
                </div>
                <div className="sec6_career_img1">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/Medical-Insurance-Cover.png"
                    alt="Medical Insurance Cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 z-[2]">
              <div className="hover_content_box about_bg">
                <div className="join_content">
                  <p>
                    We have an INR 5 Lac family floater plan that doesn’t
                    require an annual run-down on your finances or a yearly
                    premium increase.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${!isMobile ? "hover_class" : ""} relative`}>
            <div className="p-[2rem] rounded-[40px] border border-[#80808075]">
              <div className="home_txt3">
                <p className="min-h-[128px]">Holidays & Time off</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="aerrow">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/black_aerrow-1.png"
                    alt="arrow"
                  />
                </div>
                <div className="sec6_career_img1">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/Holidays-Time-off-.png"
                    alt="Holidays Time off"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 z-[2]">
              <div className="hover_content_box about_bg">
                <div className="join_content">
                  <p>
                    No matter what anyone says, your family comes first. We
                    truly believe you deserve time off to relax.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${!isMobile ? "hover_class" : ""} relative`}>
            <div className="p-[2rem] rounded-[40px] border border-[#80808075]">
              <div className="home_txt3">
                <p className="min-h-[128px]">Team Building</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="aerrow">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/black_aerrow-1.png"
                    alt="arrow"
                  />
                </div>
                <div className="sec6_career_img1">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/Team-Building.png"
                    alt="Team Building"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 z-[2]">
              <div className="hover_content_box about_bg">
                <div className="join_content">
                  <p>
                    We offer an assortment of team-building workshops and
                    team-building events both indoors and outdoors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${!isMobile ? "hover_class" : ""} relative`}>
            <div className="p-[2rem] rounded-[40px] border border-[#80808075]">
              <div className="home_txt3">
                <p className="min-h-[128px]">Learning & Development</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="aerrow">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/black_aerrow-1.png"
                    alt="arrow"
                  />
                </div>
                <div className="sec6_career_img1">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/Learning-Development.png"
                    alt="Learning Development"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 z-[2]">
              <div className="hover_content_box about_bg">
                <div className="join_content">
                  <p>
                    We conduct in-house trainings, seminars, and webinars to
                    help our people stay updated with the latest trends in
                    technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-[93%] mx-auto md:my-[8rem] my-[4rem] reveal"
        id="section7_career"
      >
        <div className="home_sec2_txt1 md:text-center text-left">
          <p>
            <span className="abc">Explore </span> open positions
          </p>
        </div>

        <div className="mt-[2rem]">
          <iframe
            loading="lazy"
            src="https://brilworks.keka.com/careers/api/embedjobs/71b6b7a2-333a-47bc-81ca-11d00c4be18f"
            width="100%"
            height="100%"
            frameborder="0"
            className="md:w-[80%] w-full mx-auto h-[85vh] md:p-[2rem] p-0"
          ></iframe>
        </div>
      </section>

      <section className="reveal">
        <div className="container mx-auto px-[15px] xl:mb-[64px] lg:mb-[80px] mb-[32px] ">
          <div className="md:text-center">
            <div className="home_sec2_txt1">
              <p className="xl:text-[96px] lg:text-[65px] md:text-[42px] sm:text-[34px] text-[28px]">
                Send in
              </p>
            </div>

            <div className="home_sec2_txt2">
              <p className="xl:text-[96px] lg:text-[65px] md:text-[42px] sm:text-[34px] text-[28px]">
                your application
              </p>
            </div>
          </div>
        </div>

        <div
          className="md:w-[90%] lg:w-[70%] w-[100%] blog-home pt-[16px] xl:pb-[128px] pb-[40px] mx-auto"
          id="section10"
        >
          <CareerContactForm />
        </div>
      </section>
    </>
  );
};

export default Career;
