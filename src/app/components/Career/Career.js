import Link from "next/link";
import React from "react";

const Career = () => {
  return (
    <>
      <section>
        <div class="container mx-auto md:py-[128px] md:px-[0] py-[90px] px-[15px]">
          <div class="md:text-center">
            <div class="home_sec2_txt1">
              <p class="xl:text-[96px] lg:text-[65px] md:text-[42px] sm:text-[34px] text-[28px]">
                Welcome to our
              </p>
            </div>

            <div class="home_sec2_txt2">
              <p class="xl:text-[96px] lg:text-[65px] md:text-[42px] sm:text-[34px] text-[28px]">
                World of Brilliance
              </p>
            </div>

            <div class="home_sec2_txt3 home_sec2_txt3_style md:w-[80%] md:mx-auto">
              <p class="xl:text-[48px] lg:text-[32px] sm:text-[26px] text-[22px] font-light !w-[94%]">
                A place where brilliant minds come together, to collaborate and
                create products with a common goal of making them innovative,
                appealing, and efficient while having truckloads of fun!
              </p>
            </div>

            <div class="flex items-center justify-center lg:gap-[80px] gap-[20px] flex-col sm:flex-row">
              <div class="flex items-center justify-center md:gap-[20px] gap-[10px] about_btn transition mt-[16px]">
                <div class="about_txt">
                  <Link href="/career/#section7_career" class="text-[21px]">
                    Explore Open Positions
                  </Link>
                </div>
                <div class="aerrow relative">
                  <img
                    decoding="async"
                    loading="lazy"
                    class="black_aerrow alignnone wp-image-28 size-full"
                    src="/images/black_aerrow-1.png"
                    alt="arrow"
                    width="46"
                    height="18"
                  />
                  <img
                    decoding="async"
                    loading="lazy"
                    class="gradiant_aerrow alignnone wp-image-29 size-full"
                    src="/images/arrow-gradiant.png"
                    alt="arrow"
                    width="46"
                    height="18"
                  />
                </div>
              </div>
              <div class="flex items-center justify-center md:gap-[20px] gap-[10px] about_btn transition mt-[16px]">
                <div class="about_txt">
                  <Link href="/career/#section10" class="text-[21px]">
                    Join Our Team
                  </Link>
                </div>
                <div class="aerrow relative">
                  <img
                    decoding="async"
                    loading="lazy"
                    class="black_aerrow alignnone wp-image-28 size-full"
                    src="/images/black_aerrow-1.png"
                    alt="arrow"
                    width="46"
                    height="18"
                  />
                  <img
                    decoding="async"
                    loading="lazy"
                    class="gradiant_aerrow alignnone wp-image-29 size-full"
                    src="/images/arrow-gradiant.png"
                    alt="arrow"
                    width="46"
                    height="18"
                  />
                </div>
              </div>
            </div>

            <div class="mx-auto mx-[16px] md:my-[8rem] my-[3rem]">
              <img
                src="/images/career.jpg"
                alt="career"
                class="rounded-[36px]"
              />
            </div>

            <div class="home_sec2_txt1">
              <p class="xl:text-[96px] lg:text-[65px] md:text-[42px] sm:text-[34px] text-[28px]">
                At Brilworks,
              </p>
            </div>

            <div class="!flex items-center md:justify-center justify-start md:gap-[2rem] gap-[10px] hidden-xs">
              <div class="home_sec2_txt2">
                <p class="xl:text-[96px] lg:text-[65px] md:text-[42px] sm:text-[34px] text-[28px]">
                  It’s all about the
                </p>
              </div>
              <div class="home_sec2_txt1 txt_center border-[#000000] border-b-[5px]">
                <p>people</p>
              </div>
            </div>

            <div class="home_sec2_txt3 home_sec2_txt3_style md:w-[80%] md:mx-auto">
              <p class="xl:text-[48px] lg:text-[32px] sm:text-[26px] text-[22px] font-light !w-[94%]">
                To us, the people and the collaborative working style are key
                drivers of engagement. It’s our aim to create a welcoming
                environment in which employees are empowered to achieve their
                fullest potential.
              </p>
            </div>

            <div class="md:my-[8rem] my-[3rem] !mb-0">
              <div>
                <div class="home_sec2_txt1">
                  <p class="xl:text-[96px] lg:text-[65px] md:text-[42px] sm:text-[34px] text-[28px]">
                    Hear it
                  </p>
                </div>
                <div class="!flex items-center md:justify-center justify-start md:gap-[2rem] gap-[10px] hidden-xs">
                  <div class="home_sec2_txt2">
                    <p class="xl:text-[96px] lg:text-[65px] md:text-[42px] sm:text-[34px] text-[28px]">
                      from our
                    </p>
                  </div>
                  <div class="home_sec2_txt1 text-center border-[#000000] border-b-[5px]">
                    <p>people</p>
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-center gap-[1rem] mt-[2rem] md:flex-row flex-col">
                <div class="home_txt3">
                  <p>4.7 / 5.0</p>
                </div>
                <div class="flex items-center gap-[12px]">
                  <img src="/images/icons-06.png" class="w-[25px]" />
                  <img src="/images/icons-06.png" class="w-[25px]" />
                  <img src="/images/icons-06.png" class="w-[25px]" />
                  <img src="/images/icons-06.png" class="w-[25px]" />
                  <img src="/images/icons-06.png" class="w-[25px]" />
                </div>
                <div class="header_font">
                  <p>Powered by</p>
                </div>
                <div class="w-[200px]">
                  <img
                    src="/images/ambitions_logo.png"
                    alt="ambitionbox reviews"
                    class=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="sm:w-[93%] w-full px-[16px] mx-auto">
        <div>
          <div class="clutch-widget">
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
              class="mx-auto w-[100%]"
            ></iframe>
          </div>
        </div>
      </section>

      <section class="w-[93%] mx-auto md:my-[8rem] my-[4rem]">
        <div class="border-1 border-[#80808075] lg:p-[6rem] sm:p-[3rem] p-[1rem] rounded-[25px]">
          <div class="flex md:flex-row flex-col">
            <div class="basis-[35%]">
              <div class="flex items-center gap-[16px]">
                <p>Powered by</p>
                <div class="w-[122px]">
                  <img
                    src="/images/svgviewer-output-1.png"
                    alt="glassdoor reviews"
                  />
                </div>
              </div>
            </div>

            <div class="basis-[65%]">
              <ul>
                <li>
                  <div class="flex justify-between items-center border-b-[1px] border-[#80808075] py-[1.5rem]">
                    <div class="lg:text-[32px] xl:text-[48px] text-[16px]">
                      <p>Overall</p>
                    </div>
                    <div class="flex items-center gap-[2rem]">
                      <div class="flex items-center gap-[12px]">
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                      </div>
                      <div class="lg:text-[32px] xl:text-[48px] text-[16px]">
                        <p>4.8</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex justify-between items-center border-b-[1px] border-[#80808075] py-[1.5rem]">
                    <div class="lg:text-[32px] xl:text-[48px] text-[16px]">
                      <p>Culture &amp; Values</p>
                    </div>
                    <div class="flex items-center gap-[2rem]">
                      <div class="flex items-center gap-[12px]">
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                      </div>
                      <div class="lg:text-[32px] xl:text-[48px] text-[16px]">
                        <p>4.8</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex justify-between items-center border-b-[1px] border-[#80808075] py-[1.5rem]">
                    <div class="lg:text-[32px] xl:text-[48px] text-[16px]">
                      <p>Diversity &amp; Inclusion</p>
                    </div>
                    <div class="flex items-center gap-[2rem]">
                      <div class="flex items-center gap-[12px]">
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                      </div>
                      <div class="lg:text-[32px] xl:text-[48px] text-[16px]">
                        <p>4.6</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex justify-between items-center border-b-[1px] border-[#80808075] py-[1.5rem]">
                    <div class="lg:text-[32px] xl:text-[48px] text-[16px]">
                      <p>Work/Life Balance</p>
                    </div>
                    <div class="flex items-center gap-[2rem]">
                      <div class="flex items-center gap-[12px]">
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                      </div>
                      <div class="lg:text-[32px] xl:text-[48px] text-[16px]">
                        <p>4.7</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex justify-between items-center border-b-[1px] border-[#80808075] py-[1.5rem]">
                    <div class="lg:text-[32px] xl:text-[48px] text-[16px]">
                      <p>Senior Management</p>
                    </div>
                    <div class="flex items-center gap-[2rem]">
                      <div class="flex items-center gap-[12px]">
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                      </div>
                      <div class="lg:text-[32px] xl:text-[48px] text-[16px]">
                        <p>4.7</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex justify-between items-center border-b-[1px] border-[#80808075] py-[1.5rem]">
                    <div class="lg:text-[32px] xl:text-[48px] text-[16px]">
                      <p>Compensation &amp; Benefits</p>
                    </div>
                    <div class="flex items-center gap-[2rem]">
                      <div class="flex items-center gap-[12px]">
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                        <img
                          src="/images/icons-06.png"
                          class="md:w-[25px] w-[13px]"
                        />
                      </div>
                      <div class="lg:text-[32px] xl:text-[48px] text-[16px]">
                        <p>4.5</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex justify-between items-center border-b-[1px] border-[#80808075] py-[1.5rem]">
                    <div class="lg:text-[32px] xl:text-[48px] text-[16px]">
                      <p>Career Opportunities</p>
                    </div>
                    <div class="flex items-center gap-[2rem]">
                      <div class="star hidden">
                        <img src="/images/icons-06.png" />
                        <img src="/images/icons-06.png" />
                        <img src="/images/icons-06.png" />
                        <img src="/images/icons-06.png" />
                        <img src="/images/icons-06.png" />
                      </div>
                      <div class="lg:text-[32px] xl:text-[48px] text-[16px]">
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

      <section class="w-[93%] mx-auto md:my-[8rem] my-[4rem]">
        <div class="home_sec2_txt1 md:text-center text-left md:mb-[80px] mb-[40px]">
          <p>
            <span class="abc">Why should you</span> join us?
          </p>
        </div>

        <div class="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[30px]">
          <div class="hover_class relative">
            <div class="p-[2rem] rounded-[40px] border-1 border-[#80808075]">
              <div class="home_txt3">
                <p class="min-h-[128px]">Flexible Timings</p>
              </div>
              <div class="flex items-center justify-between">
                <div class="aerrow">
                  <img src="/images/black_aerrow-1.png" alt="arrow" />
                </div>
                <div class="sec6_career_img1">
                  <img
                    src="/images/Flexible-Timings-.png"
                    alt="Flexible Timings"
                  />
                </div>
              </div>
            </div>
            <div class="absolute top-0 left-0 z-[2]">
              <div class="hover_content_box about_bg">
                <div class="join_content">
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

          <div class="hover_class relative">
            <div class="p-[2rem] rounded-[40px] border-1 border-[#80808075]">
              <div class="home_txt3">
                <p class="min-h-[128px]">Medical Insurance Cover</p>
              </div>
              <div class="flex items-center justify-between">
                <div class="aerrow">
                  <img src="/images/black_aerrow-1.png" alt="arrow" />
                </div>
                <div class="sec6_career_img1">
                  <img
                    src="/images/Medical-Insurance-Cover.png"
                    alt="Medical Insurance Cover"
                  />
                </div>
              </div>
            </div>
            <div class="absolute top-0 left-0 z-[2]">
              <div class="hover_content_box about_bg">
                <div class="join_content">
                  <p>
                    We have an INR 5 Lac family floater plan that doesn’t
                    require an annual run-down on your finances or a yearly
                    premium increase.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="hover_class relative">
            <div class="p-[2rem] rounded-[40px] border-1 border-[#80808075]">
              <div class="home_txt3">
                <p class="min-h-[128px]">Holidays & Time off</p>
              </div>
              <div class="flex items-center justify-between">
                <div class="aerrow">
                  <img src="/images/black_aerrow-1.png" alt="arrow" />
                </div>
                <div class="sec6_career_img1">
                  <img
                    src="/images/Holidays-Time-off-.png"
                    alt="Holidays Time off"
                  />
                </div>
              </div>
            </div>
            <div class="absolute top-0 left-0 z-[2]">
              <div class="hover_content_box about_bg">
                <div class="join_content">
                  <p>
                    No matter what anyone says, your family comes first. We
                    truly believe you deserve time off to relax.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="hover_class relative">
            <div class="p-[2rem] rounded-[40px] border-1 border-[#80808075]">
              <div class="home_txt3">
                <p class="min-h-[128px]">Team Building</p>
              </div>
              <div class="flex items-center justify-between">
                <div class="aerrow">
                  <img src="/images/black_aerrow-1.png" alt="arrow" />
                </div>
                <div class="sec6_career_img1">
                  <img src="/images/Team-Building.png" alt="Team Building" />
                </div>
              </div>
            </div>
            <div class="absolute top-0 left-0 z-[2]">
              <div class="hover_content_box about_bg">
                <div class="join_content">
                  <p>
                    We offer an assortment of team-building workshops and
                    team-building events both indoors and outdoors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="hover_class relative">
            <div class="p-[2rem] rounded-[40px] border-1 border-[#80808075]">
              <div class="home_txt3">
                <p class="min-h-[128px]">Learning & Development</p>
              </div>
              <div class="flex items-center justify-between">
                <div class="aerrow">
                  <img src="/images/black_aerrow-1.png" alt="arrow" />
                </div>
                <div class="sec6_career_img1">
                  <img
                    src="/images/Learning-Development.png"
                    alt="Learning Development"
                  />
                </div>
              </div>
            </div>
            <div class="absolute top-0 left-0 z-[2]">
              <div class="hover_content_box about_bg">
                <div class="join_content">
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
        class="w-[93%] mx-auto md:my-[8rem] my-[4rem]"
        id="section7_career"
      >
        <div class="home_sec2_txt1 md:text-center text-left">
          <p>
            <span class="abc">Explore </span> open positions
          </p>
        </div>

        <div class="mt-[2rem]">
          <iframe
            loading="lazy"
            src="https://brilworks.kekahire.com/api/embedjobs/71b6b7a2-333a-47bc-81ca-11d00c4be18f"
            width="100%"
            height="100%"
            frameborder="0"
            class="md:w-[80%] w-full mx-auto h-[85vh] md:p-[2rem] p-0"
          >
            {/* <br /> */}
          </iframe>
        </div>
      </section>

      <section>
        <div class="container mx-auto px-[15px] xl:mb-[64px] lg:mb-[80px] mb-[32px]">
          <div class="md:text-center">
            <div class="home_sec2_txt1">
              <p class="xl:text-[96px] lg:text-[65px] md:text-[42px] sm:text-[34px] text-[28px]">
                Send in
              </p>
            </div>

            <div class="home_sec2_txt2">
              <p class="xl:text-[96px] lg:text-[65px] md:text-[42px] sm:text-[34px] text-[28px]">
                your application
              </p>
            </div>
          </div>
        </div>

        <div
          class="md:w-[70%] w-[100%] blog-home pt-[16px] xl:pb-[128px] pb-[40px] mx-auto px-[15px]"
          id="section10"
        >
          <div class="home_sec3_box">
            <div class="dots_flex">
              <div class="dots"></div>
              <div class="dots"></div>
              <div class="dots"></div>
            </div>
            <div class="background">
              <div class="style_sec10_swiper_home">
                <div class="sec10_flex_row">
                  <div class="sec10_basis_50 order_2">
                    <div class="sec10_txt1">
                      <p>Do you want to work with us?</p>
                      <p>Please fill in your details</p>
                    </div>
                    <div
                      class="wpcf7 no-js"
                      id="wpcf7-f719-p96-o1"
                      lang="en-US"
                      dir="ltr"
                    >
                      <div class="screen-reader-response">
                        <p
                          role="status"
                          aria-live="polite"
                          aria-atomic="true"
                        ></p>
                        <ul></ul>
                      </div>
                      <form
                        action="/#wpcf7-f719-p96-o1"
                        method="post"
                        class="wpcf7-form init"
                        aria-label="Contact form"
                        novalidate="novalidate"
                        data-status="init"
                      >
                        <div class="form-group">
                          <p>
                            <label class="label_name">Name*</label>
                            <br />
                            <span
                              class="wpcf7-form-control-wrap"
                              data-name="text-807"
                            >
                              <input
                                size="40"
                                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control-txt"
                                aria-required="true"
                                aria-invalid="false"
                                value=""
                                type="text"
                                name="text-807"
                              />
                            </span>
                          </p>
                        </div>
                        <div class="form-group">
                          <p>
                            <label class="label_name">Contact No*</label>
                            <br />
                            <span
                              class="wpcf7-form-control-wrap"
                              data-name="text-8070"
                            >
                              <input
                                size="40"
                                class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control-txt"
                                aria-required="true"
                                aria-invalid="false"
                                value=""
                                type="text"
                                name="text-8070"
                              />
                            </span>
                          </p>
                        </div>
                        <div class="form-group">
                          <p>
                            <label class="label_name">Email Id*</label>
                            <br />
                            <span
                              class="wpcf7-form-control-wrap"
                              data-name="email-866"
                            >
                              <input
                                size="40"
                                class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control-txt"
                                aria-required="true"
                                aria-invalid="false"
                                value=""
                                type="email"
                                name="email-866"
                              />
                            </span>
                          </p>
                        </div>
                        <div class="form-group">
                          <p>
                            <label class="label_name">Message</label>
                            <br />
                            <span
                              class="wpcf7-form-control-wrap"
                              data-name="textarea-797"
                            >
                              <textarea
                                cols="1"
                                rows="2"
                                class="wpcf7-form-control wpcf7-textarea form-control-txt"
                                id="message"
                                aria-invalid="false"
                                name="textarea-797"
                              ></textarea>
                            </span>
                          </p>
                        </div>
                        <div class="btn_paddinng">
                          <div type="submit" class="home_ready_sec transition">
                            <p>
                              <input
                                class="wpcf7-form-control has-spinner wpcf7-submit home_btn"
                                id="submit"
                                type="submit"
                                value="Submit"
                              />
                            </p>
                          </div>
                        </div>
                        <div
                          class="wpcf7-response-output"
                          aria-hidden="true"
                        ></div>
                      </form>
                    </div>
                  </div>
                  <div class="sec10_basis_50 order_1">
                    <div class="sec10_txt1">
                      <p>Values that Guide Us</p>
                    </div>
                    <div class="form_grid">
                      <div>
                        <div class="w-[70px] mb-[10px]">
                          <img
                            src="/images/Stronger-Together.png"
                            alt="Stronger Together"
                          />
                        </div>
                        <div class="year">
                          <p>Stronger Together</p>
                        </div>
                      </div>
                      <div>
                        <div class="number">
                          <div class="w-[70px] mb-[10px]">
                            <img
                              src="/images/Passion-Over-Perfectionism.png"
                              alt="Stronger Together"
                            />
                          </div>
                        </div>
                        <div class="year">
                          <p>Passion Over Perfectionism</p>
                        </div>
                      </div>
                      <div>
                        <div class="w-[70px] mb-[10px]">
                          <img
                            src="/images/Future-focused.png"
                            alt="Stronger Together"
                          />
                        </div>
                        <div class="year">
                          <p>
                            Future-
                            <br />
                            focused
                          </p>
                        </div>
                      </div>
                      <div>
                        <div class="w-[70px] mb-[10px]">
                          <img
                            src="/images/Continuous-Improvement.png"
                            alt="Stronger Together"
                          />
                        </div>
                        <div class="year">
                          <p>Continuous Improvement</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
