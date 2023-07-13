"use client";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
const Config = ({ blok }) => {
  return (
    <>
      <header>
        <div className="header" {...storyblokEditable(blok)}>
          <div className="sec1_header">
            <div className="header_width padding_header">
              <div className="header_main_flex">
                <div className="header_logo">
                  <Link href="/">
                    <Image
                      src="/images/logo.png"
                      alt="Brilworks Logo"
                      width="206"
                      height="62"
                      className="alignnone size-full wp-image-15"
                    />
                  </Link>
                </div>
                <div className="project_pages">
                  {blok?.header_menu?.map((nestedBlok) => (
                    <div
                      key={nestedBlok._uid}
                      className="portfolio header_font hidden-xs project_pages_none"
                    >
                      <StoryblokComponent
                        className=""
                        blok={nestedBlok}
                        key={nestedBlok._uid}
                      />
                      <div class="mega_menu" id="mainMenuWrapperSolution">
                        <div class="menu_wrapper">
                          <div class="mega_menu_width">
                            <div class="mega_menu_style">
                              <div class="mega_menu_txt">
                                <a href="industry/fintech-software-development/index.htm">
                                  <div class="flex_mega_menu">
                                    <div class="flex_30_mega_menu">
                                      <img
                                        src="img/FINTECH.png"
                                        alt="fintech"
                                      />
                                    </div>
                                    <p>FINTECH</p>
                                  </div>
                                </a>
                                <a href="industry/media-entertainment-software-development/index.htm">
                                  <div class="flex_mega_menu">
                                    <div class="flex_30_mega_menu">
                                      <img
                                        src="img/MEDIA-ENTERTAINMENT.png"
                                        alt="media & entertainment"
                                      />
                                    </div>
                                    <p>MEDIA & ENTERTAINMENT</p>
                                  </div>
                                </a>
                                <a href="industry/fleet-management-software-development/index.htm">
                                  <div class="flex_mega_menu">
                                    <div class="flex_30_mega_menu">
                                      <img
                                        src="img/FLEET-MANAGEMENT-GPS.png"
                                        alt="fleet management + gps"
                                      />
                                    </div>
                                    <p>FLEET MANAGEMENT + GPS</p>
                                  </div>
                                </a>
                                <a href="industry/healthcare-software-development/index.htm">
                                  <div class="flex_mega_menu">
                                    <div class="flex_30_mega_menu">
                                      <img
                                        src="img/HEALTHCARE.png"
                                        alt="healthcare"
                                      />
                                    </div>
                                    <p>HEALTHCARE</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {nestedBlok?.nested_menu?.map((nestedBlok) => (
                        <StoryblokComponent
                          className=""
                          blok={nestedBlok}
                          key={nestedBlok._uid}
                        />
                      ))}
                    </div>
                  ))}
                  <div
                    className="solutions header_font hidden-xs project_pages_none"
                    id="triggerNavigationSolution"
                  >
                    <a href="javascript:void(0);" className="headerArrow_flex">
                      <p>SOLUTIONS</p>
                      <div className="arrow_size">
                        <img src="/images/down-arrow.png" alt="down arrow" />
                      </div>
                    </a>
                  </div>
                  <div
                    className="header_font hidden-xs project_pages_none"
                    id="triggerNavigationtechnology"
                  >
                    <a href="javascript:void(0);" className="headerArrow_flex">
                      <p>TECHNOLOGIES</p>
                      <div className="arrow_size">
                        <img src="images/down-arrow.png" alt="down arrow" />
                      </div>
                    </a>
                  </div>
                  <a href="contact-us/index.htm">
                    <div className="header_sec1_txt2 hidden-xs">
                      <p className="transition">LET&apos;S TALK</p>
                    </div>
                  </a>
                  <div className="nav_btn" id="triggerNavigationmenu">
                    <a href="javascript:void(0);">
                      <div className="btn_1">
                        <div className="bar transition top"></div>
                        <div className="bar transition bottom"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="relative">
        <div className="home_sec1_img">
          <img
            className="size-full"
            src="/images/banner.jpg"
            // width="auto"
            // height="auto"
            alt="homepage banner"
          />
        </div>
        <div className="sec1_txt_position">
          <div className="home_txt1">
            <p>We are</p>
          </div>
          <div className="home_txt2">
            <p>
              Game
              <br />
              Changers
            </p>
          </div>
          <div className="our_btn_flex">
            <div className="home_txt3 mt-[38px]">
              <h1>
                <span className="ez-toc-section"></span>We build stunning
                digital solutions for global brands
                <br />
                and startups which deﬁne their success.
                <span className="ez-toc-section-end"></span>
              </h1>
            </div>
            <div className="our_work flex items-center justify-end gap-[16px]">
              <p>
                <a href="https://www.brilworks.com/contact-us/">GET IN TOUCH</a>
              </p>
              <p>
                <a href="">
                  <img
                    decoding="async"
                    loading="lazy"
                    className="alignnone wp-image-24 size-full"
                    src="/images/our-work.png"
                    alt="9 dots"
                    width="49"
                    height="49"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div
    //   className="relative bg-white border-b-2 border-gray-100"
    //   {...storyblokEditable(blok)}
    // >
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6">
    //     <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
    //       <div className="flex justify-start lg:w-0 lg:flex-1">
    //         <Link href="/">
    //           {/* <a> */}
    //           <img
    //             src="images/logo.png"
    //             alt="Brilworks Logo"
    //             width="206"
    //             height="62"
    //             className="alignnone size-full wp-image-15"
    //           />
    //           {/* </a> */}
    //         </Link>
    //       </div>
    //       {blok?.header_menu?.map((nestedBlok) => (
    //         <StoryblokComponent
    //           className=""
    //           blok={nestedBlok}
    //           key={nestedBlok._uid}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};
export default Config;
