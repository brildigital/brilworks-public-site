"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();

  const [lastScrolledPosition, setLastScrolledPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");

  const [isTab3Open, setIsTab3Open] = useState(false);
  const [isTab4Open, setIsTab4Open] = useState(false);
  const [isSolutionMenuActive, setIsSolutionMenuActive] = useState(false);
  const [isTechnologyMenuActive, setIsTechnologyMenuActive] = useState(false);
  const [isMainMenuActive, setIsMainMenuActive] = useState(false);
  const [isPopupMenuActive, setIsPopupMenuActive] = useState(false);

  const handleAccordionTab3Click = () => {
    setIsTab3Open(!isTab3Open);
  };

  const handleAccordionTab4Click = () => {
    setIsTab4Open(!isTab4Open);
  };

  const handleNavigationSolutionClick = () => {
    setIsPopupMenuActive(false);

    if (isSolutionMenuActive) {
      setIsMainMenuActive(false);
      setIsSolutionMenuActive(false);
      setIsTechnologyMenuActive(false);
    } else {
      setIsPopupMenuActive(true);
      setIsMainMenuActive(false);
      setIsSolutionMenuActive(true);
      setIsTechnologyMenuActive(false);
    }
  };

  const handleNavigationTechnologyClick = () => {
    setIsPopupMenuActive(false);

    if (isTechnologyMenuActive) {
      setIsMainMenuActive(false);
      setIsSolutionMenuActive(false);
      setIsTechnologyMenuActive(false);
    } else {
      setIsPopupMenuActive(true);
      setIsMainMenuActive(false);
      setIsSolutionMenuActive(false);
      setIsTechnologyMenuActive(true);
    }
  };

  // May be used in future if some issue with drop down menu

  const handleNavigationPopupClick = () => {
    setIsPopupMenuActive(false);

    if (isPopupMenuActive) {
      setIsMainMenuActive(false);
      setIsSolutionMenuActive(false);
      setIsTechnologyMenuActive(false);
    } else {
      setIsPopupMenuActive(true);
      setIsTechnologyMenuActive(true);
    }
  };

  // const handleMainMenuPopupClick = () => {
  //   setIsPopupMenuActive(false);
  //   setIsMainMenuActive(false);
  // };

  const handleTriggerNavigationMenuClick = () => {
    if (isMainMenuActive) {
      setIsMainMenuActive(false);
    } else {
      setIsSolutionMenuActive(false);
      setIsTechnologyMenuActive(false);
      setIsPopupMenuActive(false);
      setIsMainMenuActive(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const newScrollDirection =
        lastScrolledPosition > window.scrollY ? "up" : "down";
      setScrollDirection(newScrollDirection);
      setLastScrolledPosition(window.scrollY);

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
      <div className="header">
        <div
          className={`sec1_header ${
            (isPopupMenuActive && window.scrollY > 150) || isMainMenuActive
              ? "bg-white"
              : ""
          }`}
        >
          <div className="header_width padding_header">
            <div className="header_main_flex">
              <div className="header_logo">
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    alt="Brilworks Logo"
                    width="206"
                    height="62"
                    // className="alignnone size-full wp-image-15"
                  />
                </Link>
              </div>
              <div className="project_pages">
                <div
                  className={`portfolio header_font hidden-xs project_pages_none-1 
                    ${pathname === "/portfolio/" ? " page-active" : ""}`}
                >
                  <Link href="/portfolio/">PORTFOLIO</Link>
                </div>
                <div
                  className={`solutions header_font hidden-xs project_pages_none ${
                    isSolutionMenuActive ? "active" : ""
                  }`}
                  id="triggerNavigationSolution"
                  onClick={handleNavigationSolutionClick}
                >
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="headerArrow_flex"
                  >
                    <p className="!mb-0">SOLUTIONS</p>
                    <div className="arrow_size">
                      <img src="/images/down-arrow.png" alt="down arrow" />
                    </div>
                  </Link>
                </div>
                <div
                  className={`header_font hidden-xs project_pages_none ${
                    isTechnologyMenuActive ? "active-menu" : ""
                  } `}
                  id="triggerNavigationtechnology"
                  onClick={handleNavigationTechnologyClick}
                >
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="headerArrow_flex"
                  >
                    <p className="!mb-0">TECHNOLOGIES</p>
                    <div className="arrow_size">
                      <img src="/images/down-arrow.png" alt="down arrow" />
                    </div>
                  </Link>
                </div>
                <Link href="/contact-us/">
                  <div className="header_sec1_txt2 hidden-xs">
                    <p className="transition">LET&apos;S TALK</p>
                  </div>
                </Link>
                <div
                  className={`nav_btn ${isMainMenuActive ? "active" : ""}`}
                  id="triggerNavigationmenu"
                  onClick={handleTriggerNavigationMenuClick}
                >
                  <Link href="#" onClick={(e) => e.preventDefault()}>
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
      <div
        className={`popup_overlay ${
          isPopupMenuActive && isSolutionMenuActive ? "active-menu" : ""
        }`}
        id="mainMenuWrapperpopup"
        onClick={handleNavigationPopupClick}
      ></div>
      <div
        className={`mega_menu ${isSolutionMenuActive ? "active-menu" : ""} `}
        id="mainMenuWrapperSolution"
      >
        <div className="menu_wrapper">
          <div className="mega_menu_width">
            <div className="mega_menu_style">
              <div className="mega_menu_txt">
                <Link href="/industry/fintech-software-development/">
                  <div className="flex_mega_menu">
                    <div className="flex_30_mega_menu">
                      <img src="/images/FINTECH.png" alt="fintech" />
                    </div>
                    <p
                      className={`${
                        pathname === "/industry/fintech-software-development/"
                          ? "page-active"
                          : ""
                      }`}
                    >
                      FINTECH
                    </p>
                  </div>
                </Link>
                <Link href="/industry/media-entertainment-software-development/">
                  <div className="flex_mega_menu">
                    <div className="flex_30_mega_menu">
                      <img
                        src="/images/MEDIA-ENTERTAINMENT.png"
                        alt="media & entertainment"
                      />
                    </div>
                    <p
                      className={`${
                        pathname ===
                        "/industry/media-entertainment-software-development/"
                          ? "page-active"
                          : ""
                      }`}
                    >
                      MEDIA & ENTERTAINMENT
                    </p>
                  </div>
                </Link>
                <Link href="/industry/fleet-management-software-development/">
                  <div className="flex_mega_menu">
                    <div className="flex_30_mega_menu">
                      <img
                        src="/images/FLEET-MANAGEMENT-GPS.png"
                        alt="fleet management + gps"
                      />
                    </div>
                    <p
                      className={
                        pathname ===
                        "/industry/fleet-management-software-development/"
                          ? "page-active"
                          : ""
                      }
                    >
                      FLEET MANAGEMENT + GPS
                    </p>
                  </div>
                </Link>
                <Link href="/industry/healthcare-software-development/">
                  <div className="flex_mega_menu">
                    <div className="flex_30_mega_menu">
                      <img src="/images/HEALTHCARE.png" alt="healthcare" />
                    </div>
                    <p
                      className={
                        pathname ===
                        "/industry/healthcare-software-development/"
                          ? "page-active"
                          : ""
                      }
                    >
                      HEALTHCARE
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`popup_overlay ${
          isPopupMenuActive && isTechnologyMenuActive ? "active-menu" : ""
        }`}
        id="mainMenuWrapperpopup"
        onClick={handleNavigationPopupClick}
      ></div>
      <div
        className={`mega_menu ${isTechnologyMenuActive ? "active-menu" : ""} `}
        id="mainMenuWrappertechnology"
      >
        <div className="menu_wrapper">
          <div className="mega_menu_width">
            <div className="mega_menu_style">
              <div className="mega_menu_txt">
                <Link href="/hire-reactjs-developer/">
                  <div className="flex_mega_menu">
                    <div className="flex_30_mega_menu">
                      <img src="/images/REACT.JS.svg" alt="reactjs" />
                    </div>
                    <p
                      className={
                        pathname === "/hire-reactjs-developer/"
                          ? "page-active"
                          : ""
                      }
                    >
                      REACT.JS
                    </p>
                  </div>
                </Link>
                <Link href="/hire-java-developer/">
                  <div className="flex_mega_menu">
                    <div className="flex_30_mega_menu">
                      <img src="/images/JAVA.svg" alt="java development" />
                    </div>
                    <p
                      className={
                        pathname === "/hire-java-developer/"
                          ? "page-active"
                          : ""
                      }
                    >
                      JAVA
                    </p>
                  </div>
                </Link>
                <Link href="/hire-nodejs-developer/">
                  <div className="flex_mega_menu">
                    <div className="flex_30_mega_menu">
                      <img src="/images/NODE.JS.svg" alt="nodejs" />
                    </div>
                    <p
                      className={
                        pathname === "/hire-nodejs-developer/"
                          ? "page-active"
                          : ""
                      }
                    >
                      NODE.JS
                    </p>
                  </div>
                </Link>
                <Link href="/hire-react-native-developer/">
                  <div className="flex_mega_menu">
                    <div className="flex_30_mega_menu">
                      <img src="/images/REACT-NATIVE.svg" alt="react native" />
                    </div>
                    <p
                      className={
                        pathname === "/hire-react-native-developer/"
                          ? "page-active"
                          : ""
                      }
                    >
                      REACT NATIVE
                    </p>
                  </div>
                </Link>
                <Link href="/hire-aws-developer/">
                  <div className="flex_mega_menu">
                    <div className="flex_30_mega_menu">
                      <img
                        src="/images/AWS-DEVELOPMENT.svg"
                        alt="aws development"
                      />
                    </div>
                    <p
                      className={
                        pathname === "/hire-aws-developer/" ? "page-active" : ""
                      }
                    >
                      AWS DEVELOPMENT
                    </p>
                  </div>
                </Link>
                <Link href="/hire-ui-ux-designer/">
                  <div className="flex_mega_menu">
                    <div className="flex_30_mega_menu">
                      <img
                        src="/images/UIUX-DEVELOPMENT.svg"
                        alt="ui-ux development"
                      />
                    </div>
                    <p
                      className={
                        pathname === "/hire-ui-ux-designer/"
                          ? "page-active"
                          : ""
                      }
                    >
                      UI/UX DEVELOPMENT
                    </p>
                  </div>
                </Link>
                <Link href="/hire-blockchain-developer/">
                  <div className="flex_mega_menu">
                    <div className="flex_30_mega_menu">
                      <img
                        src="/images/BLOCKCHAIN-DEVELOPMENT.svg"
                        alt="blockchain development"
                      />
                    </div>
                    <p
                      className={
                        pathname === "/hire-blockchain-developer/"
                          ? "page-active"
                          : ""
                      }
                    >
                      BLOCKCHAIN DEVELOPMENT
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`menu ${isMainMenuActive ? "active-menu" : ""}`}
        id="mainMenuWrapper"
      >
        <div className="menu_wrapper">
          <div className="width_90">
            <div className="padding_menu_header">
              <div className="flex_row_header_menu">
                <div className="flex_grid-60_header_menu">
                  <div id="accordion" className="accordion-container">
                    <article
                      className={`content-entry home_txt3 ${
                        isTab3Open ? "open" : ""
                      }`}
                      id="activeAccordionTab3"
                    >
                      <p
                        id="accordionMaster"
                        className="article-title"
                        role="button"
                        tabIndex="0"
                        onClick={handleAccordionTab3Click}
                      >
                        <i></i>TECHNOLOGIES
                      </p>
                      <div className="accordion-content">
                        <Link href="/hire-reactjs-developer/">
                          <div className="menu_mob_flex">
                            <p
                              className={
                                pathname === "/hire-reactjs-developer/"
                                  ? "page-active"
                                  : ""
                              }
                            >
                              REACT.JS
                            </p>
                            <div className="mega_menu_icon">
                              <img src="/images/REACT.JS.svg" alt="reactjs" />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="accordion-content">
                        <Link href="/hire-java-developer/">
                          <div className="menu_mob_flex">
                            <p
                              className={
                                pathname === "/hire-java-developer/"
                                  ? "page-active"
                                  : ""
                              }
                            >
                              JAVA
                            </p>
                            <div className="mega_menu_icon">
                              <img
                                src="/images/JAVA.svg"
                                alt="java development"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="accordion-content">
                        <Link href="/hire-nodejs-developer/">
                          <div className="menu_mob_flex">
                            <p
                              className={
                                pathname === "/hire-nodejs-developer/"
                                  ? "page-active"
                                  : ""
                              }
                            >
                              NODE.JS
                            </p>
                            <div className="mega_menu_icon">
                              <img src="/images/NODE.JS.svg" alt="nodejs" />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="accordion-content">
                        <Link href="/hire-react-native-developer/">
                          <div className="menu_mob_flex">
                            <p
                              className={
                                pathname === "/hire-react-native-developer/"
                                  ? "page-active"
                                  : ""
                              }
                            >
                              REACT NATIVE
                            </p>
                            <div className="mega_menu_icon">
                              <img
                                src="/images/REACT-NATIVE.svg"
                                alt="react native"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="accordion-content">
                        <Link href="/hire-aws-developer/">
                          <div className="menu_mob_flex">
                            <p
                              className={
                                pathname === "/hire-aws-developer/"
                                  ? "page-active"
                                  : ""
                              }
                            >
                              AWS DEVELOPMENT
                            </p>
                            <div className="mega_menu_icon">
                              <img
                                src="/images/AWS-DEVELOPMENT.svg"
                                alt="aws development"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="accordion-content">
                        <Link href="/hire-ui-ux-designer/">
                          <div className="menu_mob_flex">
                            <p
                              className={
                                pathname === "/hire-ui-ux-designer/"
                                  ? "page-active"
                                  : ""
                              }
                            >
                              UI/UX DEVELOPMENT
                            </p>
                            <div className="mega_menu_icon">
                              <img
                                src="/images/UIUX-DEVELOPMENT.svg"
                                alt="ui-ux development"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="accordion-content">
                        <Link href="/hire-blockchain-developer/">
                          <div className="menu_mob_flex">
                            <p
                              className={
                                pathname === "/hire-blockchain-developer/"
                                  ? "page-active"
                                  : ""
                              }
                            >
                              BLOCKCHAIN DEVELOPMENT
                            </p>
                            <div className="mega_menu_icon">
                              <img
                                src="/images/BLOCKCHAIN-DEVELOPMENT.svg"
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
                      className={`content-entry home_txt3 ${
                        isTab4Open ? "open" : ""
                      }`}
                      id="activeAccordionTab4"
                    >
                      <p
                        id="accordionMaster4"
                        className="article-title"
                        role="button"
                        tabIndex="0"
                        onClick={handleAccordionTab4Click}
                      >
                        <i></i>SOLUTIONS
                      </p>
                      <div className="accordion-content">
                        <Link href="/industry/fintech-software-development/">
                          <div className="menu_mob_flex">
                            <p
                              className={
                                pathname ===
                                "/industry/fintech-software-development/"
                                  ? "page-active"
                                  : ""
                              }
                            >
                              FINTECH
                            </p>
                            <div className="mega_menu_icon">
                              <img src="/images/FINTECH.png" alt="fintech" />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="accordion-content">
                        <Link href="/industry/media-entertainment-software-development/">
                          <div className="menu_mob_flex">
                            <p
                              className={
                                pathname ===
                                "/industry/media-entertainment-software-development/"
                                  ? "page-active"
                                  : ""
                              }
                            >
                              MEDIA & ENTERTAINMENT
                            </p>
                            <div className="mega_menu_icon">
                              <img
                                src="/images/MEDIA-ENTERTAINMENT.png"
                                alt="media & entertainment"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="accordion-content">
                        <Link href="/industry/fleet-management-software-development/">
                          <div className="menu_mob_flex">
                            <p
                              className={
                                pathname ===
                                "/industry/fleet-management-software-development/"
                                  ? "page-active"
                                  : ""
                              }
                            >
                              FLEET MANAGEMENT + GPS
                            </p>
                            <div className="mega_menu_icon">
                              <img
                                src="/images/FLEET-MANAGEMENT-GPS.png"
                                alt="fleet management + gps"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="accordion-content">
                        <Link href="/industry/healthcare-software-development/">
                          <div className="menu_mob_flex">
                            <p
                              className={
                                pathname ===
                                "/industry/healthcare-software-development/"
                                  ? "page-active"
                                  : ""
                              }
                            >
                              HEALTHCARE
                            </p>
                            <div className="mega_menu_icon">
                              <img
                                src="/images/HEALTHCARE.png"
                                alt="healthcare"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </article>
                  </div>

                  <div className="menu_txt1">
                    <Link href="/our-process/">
                      <p
                        className={
                          pathname === "/our-process/" ? "page-active" : ""
                        }
                      >
                        OUR PROCESS
                      </p>
                    </Link>
                  </div>
                  <div className="menu_txt1">
                    <Link href="/portfolio/">
                      <p
                        className={
                          pathname === "/portfolio/" ? "page-active" : ""
                        }
                      >
                        PORTFOLIO
                      </p>
                    </Link>
                  </div>
                  <div className="menu_txt1">
                    <Link href={`/about-us/`}>
                      <p
                        className={
                          pathname === "/about-us/" ? "page-active" : ""
                        }
                      >
                        ABOUT
                      </p>
                    </Link>
                  </div>
                  <div className="menu_txt1">
                    <Link href="/career/">
                      <p
                        className={pathname === "/career/" ? "page-active" : ""}
                      >
                        CAREER
                      </p>
                    </Link>
                  </div>
                  <div className="menu_txt1">
                    <Link href="/contact-us/">
                      <p
                        className={
                          pathname === "/contact-us/" ? "page-active" : ""
                        }
                      >
                        CONTACT
                      </p>
                    </Link>
                  </div>
                  <div className="menu_txt1">
                    <Link href="/blog/">
                      <p className={pathname === "/blog/" ? "page-active" : ""}>
                        BLOGS
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex_grid-40_header_menu">
                  <div className="header_img1 pb-2 hidden-xs">
                    <img src="/images/blog-2.jpg" alt="" />
                  </div>
                  <div className="header_img1">
                    <img src="/images/blog-1.jpg" alt="" />
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
