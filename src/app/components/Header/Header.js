"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [lastScrolledPosition, setLastScrolledPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const handleScroll = () => {
      const newScrollDirection =
        lastScrolledPosition > window.scrollY ? "up" : "down";
      setScrollDirection(newScrollDirection);
      setLastScrolledPosition(window.scrollY);

      console.log(newScrollDirection, "scroll direction");

      if (window.scrollY > 150 && newScrollDirection === "down") {
        if (
          !document
            .querySelector("header .header")
            .classList.contains("header-hide")
        ) {
          document.querySelector("header .header").classList.add("header-hide");
        }
      }

      if (newScrollDirection === "up") {
        if (
          document
            .querySelector("header .header")
            .classList.contains("header-hide")
        ) {
          document
            .querySelector("header .header")
            .classList.remove("header-hide");
        }
      }

      if (window.scrollY > 150) {
        document
          .querySelector("header .header")
          .classList.add("header-bg-white");
      } else {
        document
          .querySelector("header .header")
          .classList.remove("header-bg-white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrolledPosition]);

  return (
    <header>
      <div class="header">
        <div class="sec1_header">
          <div class="header_width padding_header">
            <div class="header_main_flex">
              <div class="header_logo">
                <Link href="index.htm">
                  <img
                    src="images/logo.png"
                    alt="Brilworks Logo"
                    width="206"
                    height="62"
                    className="alignnone size-full wp-image-15"
                  />
                </Link>
              </div>
              <div className="project_pages">
                <div className="portfolio header_font hidden-xs project_pages_none">
                  <Link href="portfolio">PORTFOLIO</Link>
                </div>
                <div
                  className="solutions header_font hidden-xs project_pages_none"
                  id="triggerNavigationSolution"
                >
                  <Link href="javascript:void(0);" className="headerArrow_flex">
                    <p>SOLUTIONS</p>
                    <div className="arrow_size">
                      <img src="images/down-arrow.png" alt="down arrow" />
                    </div>
                  </Link>
                </div>
                <div
                  className="header_font hidden-xs project_pages_none"
                  id="triggerNavigationtechnology"
                >
                  <Link href="javascript:void(0);" className="headerArrow_flex">
                    <p>TECHNOLOGIES</p>
                    <div className="arrow_size">
                      <img src="images/down-arrow.png" alt="down arrow" />
                    </div>
                  </Link>
                </div>
                <Link href="contact-us/index.htm">
                  <div className="header_sec1_txt2 hidden-xs">
                    <p className="transition">LET&apos;S TALK</p>
                  </div>
                </Link>
                <div className="nav_btn" id="triggerNavigationmenu">
                  <Link href="javascript:void(0);">
                    <div className="btn_1">
                      <div className="bar transition top"></div>
                      <div className="bar transition bottom"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popup_overlay" id="mainMenuWrapperpopup"></div>
      <div className="mega_menu" id="mainMenuWrapperSolution">
        <div className="menu_wrapper">
          <div className="mega_menu_width">
            <div className="mega_menu_style">
              <div className="mega_menu_txt">
                <Link href="industry/fintech-software-development/index.htm">
                  <div className="flex_mega_menu">
                    <div className="flex_30_mega_menu">
                      <img src="images/FINTECH.png" alt="fintech" />
                    </div>
                    <p>FINTECH</p>
                  </div>
                </Link>
                <Link href="industry/media-entertainment-software-development/index.htm">
                  <div className="flex_mega_menu">
                    <div className="flex_30_mega_menu">
                      <img
                        src="images/MEDIA-ENTERTAINMENT.png"
                        alt="media & entertainment"
                      />
                    </div>
                    <p>MEDIA & ENTERTAINMENT</p>
                  </div>
                </Link>
                <Link href="industry/fleet-management-software-development/index.htm">
                  <div className="flex_mega_menu">
                    <div className="flex_30_mega_menu">
                      <img
                        src="images/FLEET-MANAGEMENT-GPS.png"
                        alt="fleet management + gps"
                      />
                    </div>
                    <p>FLEET MANAGEMENT + GPS</p>
                  </div>
                </Link>
                <Link href="industry/healthcare-software-development/index.htm">
                  <div className="flex_mega_menu">
                    <div className="flex_30_mega_menu">
                      <img src="images/HEALTHCARE.png" alt="healthcare" />
                    </div>
                    <p>HEALTHCARE</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popup_overlay" id="mainMenuWrapperpopup"></div>
      <div className="mega_menu" id="mainMenuWrappertechnology">
        <div className="menu_wrapper">
          <div className="mega_menu_width">
            <div className="mega_menu_style">
              <div className="mega_menu_txt">
                <Link href="hire-reactjs-developer/index.htm">
                  <div className="flex_mega_menu">
                    <div className="flex_30_mega_menu">
                      <img src="images/REACT.JS.svg" alt="reactjs" />
                    </div>
                    <p>REACT.JS</p>
                  </div>
                </Link>
                <Link href="hire-java-developer/index.htm">
                  <div className="flex_mega_menu">
                    <div className="flex_30_mega_menu">
                      <img src="images/JAVA.svg" alt="java development" />
                    </div>
                    <p>JAVA</p>
                  </div>
                </Link>
                <Link href="hire-nodejs-developer/index.htm">
                  <div className="flex_mega_menu">
                    <div className="flex_30_mega_menu">
                      <img src="images/NODE.JS.svg" alt="nodejs" />
                    </div>
                    <p>NODE.JS</p>
                  </div>
                </Link>
                <Link href="hire-react-native-developer/index.htm">
                  <div className="flex_mega_menu">
                    <div className="flex_30_mega_menu">
                      <img src="images/REACT-NATIVE.svg" alt="react native" />
                    </div>
                    <p>REACT NATIVE</p>
                  </div>
                </Link>
                <Link href="hire-aws-developer/index.htm">
                  <div className="flex_mega_menu">
                    <div className="flex_30_mega_menu">
                      <img
                        src="images/AWS-DEVELOPMENT.svg"
                        alt="aws development"
                      />
                    </div>
                    <p>AWS DEVELOPMENT</p>
                  </div>
                </Link>
                <Link href="hire-ui-ux-designer/index.htm">
                  <div className="flex_mega_menu">
                    <div className="flex_30_mega_menu">
                      <img
                        src="images/UIUX-DEVELOPMENT.svg"
                        alt="ui-ux development"
                      />
                    </div>
                    <p>UI/UX DEVELOPMENT</p>
                  </div>
                </Link>
                <Link href="hire-blockchain-developer/index.htm">
                  <div className="flex_mega_menu">
                    <div className="flex_30_mega_menu">
                      <img
                        src="images/BLOCKCHAIN-DEVELOPMENT.svg"
                        alt="blockchain development"
                      />
                    </div>
                    <p>BLOCKCHAIN DEVELOPMENT</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu" id="mainMenuWrapper">
        <div className="menu_wrapper">
          <div className="width_90">
            <div className="padding_menu_header">
              <div className="flex_row_header_menu">
                <div className="flex_grid-60_header_menu">
                  <div id="accordion" className="accordion-container">
                    <article
                      className="content-entry home_txt3"
                      id="activeAccordionTab3"
                    >
                      <p
                        id="accordionMaster"
                        className="article-title"
                        role="button"
                        tabindex="0"
                      >
                        <i></i>TECHNOLOGIES
                      </p>
                      <div className="accordion-content">
                        <Link href="hire-reactjs-developer/index.htm">
                          <div className="menu_mob_flex">
                            <p>REACT.JS</p>
                            <div className="mega_menu_icon">
                              <img src="images/REACT.JS.svg" alt="reactjs" />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="accordion-content">
                        <Link href="hire-java-developer/index.htm">
                          <div className="menu_mob_flex">
                            <p>JAVA</p>
                            <div className="mega_menu_icon">
                              <img
                                src="images/JAVA.svg"
                                alt="java development"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="accordion-content">
                        <Link href="hire-nodejs-developer/index.htm">
                          <div className="menu_mob_flex">
                            <p>NODE.JS</p>
                            <div className="mega_menu_icon">
                              <img src="images/NODE.JS.svg" alt="nodejs" />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="accordion-content">
                        <Link href="hire-react-native-developer/index.htm">
                          <div className="menu_mob_flex">
                            <p>REACT NATIVE</p>
                            <div className="mega_menu_icon">
                              <img
                                src="images/REACT-NATIVE.svg"
                                alt="react native"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="accordion-content">
                        <Link href="hire-aws-developer/index.htm">
                          <div className="menu_mob_flex">
                            <p>AWS DEVELOPMENT</p>
                            <div className="mega_menu_icon">
                              <img
                                src="images/AWS-DEVELOPMENT.svg"
                                alt="aws development"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="accordion-content">
                        <Link href="hire-ui-ux-designer/index.htm">
                          <div className="menu_mob_flex">
                            <p>UI/UX DEVELOPMENT</p>
                            <div className="mega_menu_icon">
                              <img
                                src="images/UIUX-DEVELOPMENT.svg"
                                alt="ui-ux development"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="accordion-content">
                        <Link href="hire-blockchain-developer/index.htm">
                          <div className="menu_mob_flex">
                            <p>BLOCKCHAIN DEVELOPMENT</p>
                            <div className="mega_menu_icon">
                              <img
                                src="images/BLOCKCHAIN-DEVELOPMENT.svg"
                                alt="blockchain development"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </article>
                  </div>
                  <div id="accordion" className="accordion-container">
                    <article
                      className="content-entry home_txt3"
                      id="activeAccordionTab4"
                    >
                      <p
                        id="accordionMaster4"
                        className="article-title"
                        role="button"
                        tabindex="0"
                      >
                        <i></i>SOLUTIONS
                      </p>
                      <div className="accordion-content">
                        <Link href="industry/fintech-software-development/index.htm">
                          <div className="menu_mob_flex">
                            <p>FINTECH</p>
                            <div className="mega_menu_icon">
                              <img src="images/FINTECH.png" alt="fintech" />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="accordion-content">
                        <Link href="industry/media-entertainment-software-development/index.htm">
                          <div className="menu_mob_flex">
                            <p>MEDIA & ENTERTAINMENT</p>
                            <div className="mega_menu_icon">
                              <img
                                src="images/MEDIA-ENTERTAINMENT.png"
                                alt="media & entertainment"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="accordion-content">
                        <Link href="industry/fleet-management-software-development/index.htm">
                          <div className="menu_mob_flex">
                            <p>FLEET MANAGEMENT + GPS</p>
                            <div className="mega_menu_icon">
                              <img
                                src="images/FLEET-MANAGEMENT-GPS.png"
                                alt="fleet management + gps"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="accordion-content">
                        <Link href="industry/healthcare-software-development/index.htm">
                          <div className="menu_mob_flex">
                            <p>HEALTHCARE</p>
                            <div className="mega_menu_icon">
                              <img
                                src="images/HEALTHCARE.png"
                                alt="healthcare"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </article>
                  </div>

                  <div className="menu_txt1">
                    <Link href="our-process/index.htm">
                      <p>OUR PROCESS</p>
                    </Link>
                  </div>
                  <div className="menu_txt1">
                    <Link href="portfolio/index.htm">
                      <p>PORTFOLIO</p>
                    </Link>
                  </div>
                  <div className="menu_txt1">
                    <Link href="about-us/index.htm">
                      <p>ABOUT</p>
                    </Link>
                  </div>
                  <div className="menu_txt1">
                    <Link href="career/index.htm">
                      <p>CAREER</p>
                    </Link>
                  </div>
                  <div className="menu_txt1">
                    <Link href="contact-us/index.htm">
                      <p>CONTACT</p>
                    </Link>
                  </div>
                  <div className="menu_txt1">
                    <Link href="blog/index.htm">
                      <p>BLOGS</p>
                    </Link>
                  </div>
                </div>
                <div className="flex_grid-40_header_menu">
                  <div className="header_img1 padding_bottom_2 hidden-xs">
                    <img src="images/blog-1.jpg" />
                  </div>
                  <div className="header_img1">
                    <img src="images/blog-2.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
