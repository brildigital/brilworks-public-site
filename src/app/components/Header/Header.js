"use client";
import "../../styles/Header.scss";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  IconButton,
  Collapse,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "../lib/commonfunction";

const NewHeader = () => {
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 767 && setOpenNav(false)
    );
  }, []);

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const megamenuNavList = (
    <ul className="pt-4 flex flex-col md:mb-0 md:mt-0 items-left megamenu">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`accordion-title py-6 ${open === 1 ? "border-none" : ""}`}
        >
          <p>TECHNOLOGIES</p>
        </AccordionHeader>
        <AccordionBody className={open === 1 ? "border-b border-gray-500" : ""}>
          <Link
            href="/hire-reactjs-developer/"
            onClick={() => setOpenNav(false)}
          >
            <div className="menu_mob_flex mega-menu-content">
              <p
                className={
                  pathname === "/hire-reactjs-developer/" ? "page-active" : ""
                }
              >
                REACT.JS
              </p>
              <div className="mega_menu_icon">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/REACT.JS.svg"
                  alt="reactjs_image"
                />
              </div>
            </div>
          </Link>

          <Link href="/hire-java-developer/" onClick={() => setOpenNav(false)}>
            <div className="menu_mob_flex mega-menu-content">
              <p
                className={
                  pathname === "/hire-java-developer/" ? "page-active" : ""
                }
              >
                JAVA
              </p>
              <div className="mega_menu_icon">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/JAVA.svg"
                  alt="java_image"
                />
              </div>
            </div>
          </Link>

          <Link
            href="/hire-nodejs-developer/"
            onClick={() => setOpenNav(false)}
          >
            <div className="menu_mob_flex mega-menu-content">
              <p
                className={
                  pathname === "/hire-nodejs-developer/" ? "page-active" : ""
                }
              >
                NODE.JS
              </p>
              <div className="mega_menu_icon">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/NODE.JS.svg"
                  alt="nodejs_image"
                />
              </div>
            </div>
          </Link>

          <Link
            href="/hire-react-native-developer/"
            onClick={() => setOpenNav(false)}
          >
            <div className="menu_mob_flex mega-menu-content">
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
                  loading="lazy"
                  decoding="async"
                  src="/images/REACT-NATIVE.svg"
                  alt="react_native_image"
                />
              </div>
            </div>
          </Link>

          <Link href="/hire-aws-developer/" onClick={() => setOpenNav(false)}>
            <div className="menu_mob_flex mega-menu-content">
              <p
                className={
                  pathname === "/hire-aws-developer/" ? "page-active" : ""
                }
              >
                AWS DEVELOPMENT
              </p>
              <div className="mega_menu_icon">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/AWS-DEVELOPMENT.svg"
                  alt="aws_development_image"
                />
              </div>
            </div>
          </Link>

          <Link href="/hire-ui-ux-designer/" onClick={() => setOpenNav(false)}>
            <div className="menu_mob_flex mega-menu-content">
              <p
                className={
                  pathname === "/hire-ui-ux-designer/" ? "page-active" : ""
                }
              >
                UI/UX DEVELOPMENT
              </p>
              <div className="mega_menu_icon">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/UIUX-DEVELOPMENT.svg"
                  alt="ui-ux_development_image"
                />
              </div>
            </div>
          </Link>

          <Link
            href="/hire-blockchain-developer/"
            onClick={() => setOpenNav(false)}
          >
            <div className="menu_mob_flex mega-menu-content">
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
                  loading="lazy"
                  decoding="async"
                  src="/images/BLOCKCHAIN-DEVELOPMENT.svg"
                  alt="blockchain_development_image"
                />
              </div>
            </div>
          </Link>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`accordion-title py-6 ${open === 2 ? "border-none" : ""}`}
        >
          <p>SOLUTIONS</p>
        </AccordionHeader>
        <AccordionBody className={open === 2 ? "border-b border-gray-500" : ""}>
          <Link
            href="/industry/fintech-software-development/"
            onClick={() => setOpenNav(false)}
          >
            <div className="menu_mob_flex mega-menu-content">
              <p
                className={
                  pathname === "/industry/fintech-software-development/"
                    ? "page-active"
                    : ""
                }
              >
                FINTECH
              </p>
              <div className="mega_menu_icon">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/FINTECH.png"
                  alt="fintech"
                />
              </div>
            </div>
          </Link>
          <Link
            href="/industry/media-entertainment-software-development/"
            onClick={() => setOpenNav(false)}
          >
            <div className="menu_mob_flex mega-menu-content">
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
                  loading="lazy"
                  decoding="async"
                  src="/images/MEDIA-ENTERTAINMENT.png"
                  alt="media & entertainment"
                />
              </div>
            </div>
          </Link>
          <Link
            href="/industry/fleet-management-software-development/"
            onClick={() => setOpenNav(false)}
          >
            <div className="menu_mob_flex mega-menu-content">
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
                  loading="lazy"
                  decoding="async"
                  src="/images/FLEET-MANAGEMENT-GPS.png"
                  alt="fleet management + gps"
                />
              </div>
            </div>
          </Link>
          <Link
            href="/industry/healthcare-software-development/"
            onClick={() => setOpenNav(false)}
          >
            <div className="menu_mob_flex mega-menu-content">
              <p
                className={
                  pathname === "/industry/healthcare-software-development/"
                    ? "page-active"
                    : ""
                }
              >
                HEALTHCARE
              </p>
              <div className="mega_menu_icon">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/images/HEALTHCARE.png"
                  alt="healthcare"
                />
              </div>
            </div>
          </Link>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`accordion-title py-6 ${open === 3 ? "border-none" : ""}`}
        >
          <p>SERVICES</p>
        </AccordionHeader>
        <AccordionBody className={open === 3 ? "border-b border-gray-500" : ""}>
          <Link href="#" onClick={() => setOpenNav(false)}>
            <div className="menu_mob_flex mega-menu-content py-4">
              <p className={pathname === "#" && "page-active"}>
                PRODUCT ENGINEERING
              </p>
            </div>
          </Link>
          <Link
            href="/devops-consulting-services/"
            onClick={() => setOpenNav(false)}
          >
            <div className="menu_mob_flex mega-menu-content py-4">
              <p
                className={
                  pathname === "/devops-consulting-services/" && "page-active"
                }
              >
                DEVOPS AND CLOUD
              </p>
            </div>
          </Link>
          <Link
            href="/ai-ml-development-services/"
            onClick={() => setOpenNav(false)}
          >
            <div className="menu_mob_flex mega-menu-content py-4">
              <p
                className={
                  pathname === "/ai-ml-development-services/" && "page-active"
                }
              >
                AI/ML
              </p>
            </div>
          </Link>
          <Link href="#" onClick={() => setOpenNav(false)}>
            <div className="menu_mob_flex mega-menu-content py-4">
              <p className={pathname === "#" && "page-active"}>
                STAFF AUGMENTATION
              </p>
            </div>
          </Link>
        </AccordionBody>
      </Accordion>
      <div className="menu_txt1">
        <Link href="/our-process/" onClick={() => setOpenNav(false)}>
          <p className={pathname === "/our-process/" ? "page-active" : ""}>
            OUR PROCESS
          </p>
        </Link>
      </div>
      <div className="menu_txt1">
        <Link href="/portfolio/" onClick={() => setOpenNav(false)}>
          <p className={pathname === "/portfolio/" ? "page-active" : ""}>
            PORTFOLIO
          </p>
        </Link>
      </div>
      <div className="menu_txt1">
        <Link href="/about-us/" onClick={() => setOpenNav(false)}>
          <p className={pathname === "/about-us/" ? "page-active" : ""}>
            ABOUT
          </p>
        </Link>
      </div>
      <div className="menu_txt1">
        <Link href="/career/" onClick={() => setOpenNav(false)}>
          <p className={pathname === "/career/" ? "page-active" : ""}>CAREER</p>
        </Link>
      </div>
      <div className="menu_txt1">
        <Link href="/contact-us/" onClick={() => setOpenNav(false)}>
          <p className={pathname === "/contact-us/" ? "page-active" : ""}>
            CONTACT
          </p>
        </Link>
      </div>
      <div className="menu_txt1">
        <Link href="/blog/" onClick={() => setOpenNav(false)}>
          <p className={pathname === "/blog/" ? "page-active" : ""}>BLOGS</p>
        </Link>
      </div>
    </ul>
  );

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-4 lg:gap-6">
      <Link
        href="/portfolio/"
        className="header_font flex items-center"
        onClick={() => setOpenNav(false)}
      >
        <p
          className={`!mb-0 ${
            pathname === "/portfolio/" ? "page-active" : "hover:text-[#00dfb8]"
          }`}
        >
          PORTFOLIO
        </p>
      </Link>

      <Link
        href="/blog/"
        className="header_font flex items-center"
        onClick={() => setOpenNav(false)}
      >
        <p
          className={`!mb-0 ${
            pathname === "/blog/" ? "page-active" : "hover:text-[#00dfb8]"
          }`}
        >
          BLOG
        </p>
      </Link>
      <Menu
        placement="bottom"
        dismiss={{ itemPress: true, ancestorScroll: true }}
      >
        <MenuHandler>
          <MenuItem className="hover:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 flex items-center !w-[unset] outline-none pt-2 my-1 px-0">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setOpenNav(false);
              }}
              className="flex items-center header_font"
            >
              <p className="!mb-0 hover:text-[#00dfb8]">SERVICES</p>
              <svg
                className="w-4 h-2 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </Link>
          </MenuItem>
        </MenuHandler>
        <MenuList
          dismissible
          className="flex flex-col z-10 rounded-[10px] min-w-[180px] mt-5 py-1 menu-shadow"
        >
          <MenuItem className="p-2 mega_menu_txt border-b border-[#80808054] hover:bg-[#c6fff0]">
            <Link href="#" className="flex items-center justify-between gap-2">
              <div className="flex_mega_menu w-full justify-between">
                <p
                // className={`${
                //   pathname === "/industry/fintech-software-development/"
                //     ? "page-active"
                //     : ""
                // }`}
                >
                  PRODUCT ENGINEERING
                </p>
                <div class="-rotate-90">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.00033 0.666016L6.00033 4.66602L10.0003 0.666016L11.3337 1.99935L6.00033 7.33268L0.666992 1.99935L2.00033 0.666016Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-2 mega_menu_txt border-b border-[#80808054] hover:bg-[#c6fff0]">
            <Link
              href="/devops-consulting-services/"
              className="flex items-center justify-between gap-2"
            >
              <div className="flex_mega_menu w-full justify-between">
                <p
                  className={`${
                    pathname === "/devops-consulting-services/" && "page-active"
                  }`}
                >
                  DEVOPS AND CLOUD
                </p>
                <div class="-rotate-90">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.00033 0.666016L6.00033 4.66602L10.0003 0.666016L11.3337 1.99935L6.00033 7.33268L0.666992 1.99935L2.00033 0.666016Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-2 mega_menu_txt border-b border-[#80808054] hover:bg-[#c6fff0]">
            <Link href="/ai-ml-development-services/">
              <div className="flex_mega_menu w-full justify-between">
                <div>
                  <p
                    className={
                      pathname === "/ai-ml-development-services/" &&
                      "page-active"
                    }
                  >
                    AI/ML
                  </p>
                </div>
                <div class="-rotate-90">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.00033 0.666016L6.00033 4.66602L10.0003 0.666016L11.3337 1.99935L6.00033 7.33268L0.666992 1.99935L2.00033 0.666016Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-2 mega_menu_txt hover:bg-[#c6fff0]">
            <Link href="#">
              <div className="flex_mega_menu w-full justify-between">
                <p
                // className={
                //   pathname === "/industry/healthcare-software-development/"
                //     ? "page-active"
                //     : ""
                // }
                >
                  STAFF AUGMENTATION
                </p>
                <div class="-rotate-90">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.00033 0.666016L6.00033 4.66602L10.0003 0.666016L11.3337 1.99935L6.00033 7.33268L0.666992 1.99935L2.00033 0.666016Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu
        placement="bottom"
        dismiss={{ itemPress: true, ancestorScroll: true }}
      >
        <MenuHandler>
          <MenuItem className="hover:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 flex items-center !w-[unset] outline-none pt-2 my-1 px-0">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setOpenNav(false);
              }}
              className="flex items-center header_font"
            >
              <p className="!mb-0 hover:text-[#00dfb8]">SOLUTIONS</p>
              <svg
                className="w-4 h-2 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </Link>
          </MenuItem>
        </MenuHandler>
        <MenuList
          dismissible
          className="flex flex-col z-10 rounded-[10px] min-w-[180px] mt-5 py-1 menu-shadow"
        >
          <MenuItem className="flex items-center gap-4 py-2 px-2 mega_menu_txt border-b border-[#80808054] last:border-b-0 hover:border-[#00dfb8]">
            <Link href="/industry/fintech-software-development/">
              <div className="flex_mega_menu">
                <div className=" ">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/FINTECH.png"
                    alt="fintech"
                  />
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
          </MenuItem>
          <MenuItem className="flex items-center gap-4 py-2 px-2 mega_menu_txt border-b border-[#80808054] last:border-b-0 hover:border-[#00dfb8]">
            <Link href="/industry/media-entertainment-software-development/">
              <div className="flex_mega_menu">
                <div className=" ">
                  <img
                    loading="lazy"
                    decoding="async"
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
          </MenuItem>
          <MenuItem className="flex items-center gap-4 py-2 px-2 mega_menu_txt border-b border-[#80808054] hover:border-[#00dfb8]">
            <Link href="/industry/fleet-management-software-development/">
              <div className="flex_mega_menu">
                <div className=" ">
                  <img
                    loading="lazy"
                    decoding="async"
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
          </MenuItem>
          <MenuItem className="flex items-center gap-4 py-2 px-2 mega_menu_txt border-b border-[#80808054] last:border-b-0 hover:border-[#00dfb8]">
            <Link href="/industry/healthcare-software-development/">
              <div className="flex_mega_menu">
                <div className=" ">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/HEALTHCARE.png"
                    alt="healthcare"
                  />
                </div>
                <p
                  className={
                    pathname === "/industry/healthcare-software-development/"
                      ? "page-active"
                      : ""
                  }
                >
                  HEALTHCARE
                </p>
              </div>
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu
        placement="bottom"
        dismiss={{ itemPress: true, ancestorScroll: true }}
      >
        <MenuHandler>
          <MenuItem className="hover:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 flex items-center outline-none !w-[unset] pt-2 my-1 px-0">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setOpenNav(false);
              }}
              className="flex items-center header_font"
            >
              <p className="!mb-0 hover:text-[#00dfb8]">TECHNOLOGIES</p>
              <svg
                className="w-4 h-2 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </Link>
          </MenuItem>
        </MenuHandler>
        <MenuList
          dismissible
          className="flex flex-col z-10 rounded-[10px] min-w-[180px] mt-5 py-1 menu-shadow"
        >
          <MenuItem className="flex items-center gap-4 py-2 px-2 mega_menu_txt border-b border-[#80808054] last:border-b-0 hover:border-[#00dfb8]">
            <Link href="/hire-reactjs-developer/">
              <div className="flex_mega_menu">
                <div className=" ">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/REACT.JS.svg"
                    alt="reactjs_image_main"
                  />
                </div>
                <p
                  className={
                    pathname === "/hire-reactjs-developer/" ? "page-active" : ""
                  }
                >
                  REACT.JS
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="flex items-center gap-4 py-2 px-2 mega_menu_txt border-b border-[#80808054] last:border-b-0 hover:border-[#00dfb8]">
            <Link href="/hire-java-developer/">
              <div className="flex_mega_menu">
                <div className=" ">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/JAVA.svg"
                    alt="java_image_main"
                  />
                </div>
                <p
                  className={
                    pathname === "/hire-java-developer/" ? "page-active" : ""
                  }
                >
                  JAVA
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="flex items-center gap-4 py-2 px-2 mega_menu_txt border-b border-[#80808054] last:border-b-0 hover:border-[#00dfb8]">
            <Link href="/hire-nodejs-developer/">
              <div className="flex_mega_menu">
                <div className=" ">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/NODE.JS.svg"
                    alt="nodejs_image_main"
                  />
                </div>
                <p
                  className={
                    pathname === "/hire-nodejs-developer/" ? "page-active" : ""
                  }
                >
                  NODE.JS
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="flex items-center gap-4 py-2 px-2 mega_menu_txt border-b border-[#80808054] last:border-b-0 hover:border-[#00dfb8]">
            <Link href="/hire-react-native-developer/">
              <div className="flex_mega_menu">
                <div className=" ">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/REACT-NATIVE.svg"
                    alt="react_native_image_main"
                  />
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
          </MenuItem>
          <MenuItem className="flex items-center gap-4 py-2 px-2 mega_menu_txt border-b border-[#80808054] last:border-b-0 hover:border-[#00dfb8]">
            <Link href="/hire-aws-developer/">
              <div className="flex_mega_menu">
                <div className=" ">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/AWS-DEVELOPMENT.svg"
                    alt="aws_development_image_main"
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
          </MenuItem>
          <MenuItem className="flex items-center gap-4 py-2 px-2 mega_menu_txt border-b border-[#80808054] last:border-b-0 hover:border-[#00dfb8]">
            <Link href="/hire-ui-ux-designer/">
              <div className="flex_mega_menu">
                <div className=" ">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/UIUX-DEVELOPMENT.svg"
                    alt="ui-ux_development_image_main"
                  />
                </div>
                <p
                  className={
                    pathname === "/hire-ui-ux-designer/" ? "page-active" : ""
                  }
                >
                  UI/UX DEVELOPMENT
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="flex items-center gap-4 py-2 px-2 mega_menu_txt border-b border-[#80808054] last:border-b-0 hover:border-[#00dfb8]">
            <Link href="/hire-blockchain-developer/">
              <div className="flex_mega_menu">
                <div className="basis-1/6">
                  <img
                    loading="lazy"
                    decoding="async"
                    src="/images/BLOCKCHAIN-DEVELOPMENT.svg"
                    alt="blockchain_development_image_main"
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
          </MenuItem>
        </MenuList>
      </Menu>

      <Link href="/contact-us/" onClick={() => setOpenNav(false)}>
        <div className="header_sec1_txt2 hidden-xs">
          <p className="transition">LET&apos;S TALK</p>
        </div>
      </Link>
    </ul>
  );
  return (
    <header>
      <div className="header header-bg-white">
        <div>
          <Navbar
            className={`sticky text-black top-0 border-none z-10 h-max max-w-full rounded-none ${
              openNav ? "!fixed h-[100vh] bg-white" : "bg-transparent"
            }
          `}
          >
            <div className="flex items-center justify-between !text-blue-gray-900 lg:w-[90%] w-[88%] mx-auto">
              <div className="header_logo">
                <Link href="/">
                  <Image
                    src="/images/brilworks-logo.png"
                    alt="Brilworks Logo"
                    width="206"
                    height="62"
                    priority={true}
                    className="alignnone size-full wp-image-15"
                  />
                </Link>
              </div>
              <div className="flex items-center">
                <div className="mr-4 hidden md:block">{navList}</div>

                <IconButton
                  variant="text"
                  className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
                  ripple={false}
                  onClick={() => setOpenNav(!openNav)}
                >
                  <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    {openNav ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </span>
                </IconButton>
              </div>
            </div>
            <Collapse
              open={openNav}
              className={`bg-white overflow-y-scroll ${
                openNav ? "!h-full mt-2" : ""
              }`}
            >
              <div className="w-[88%] mx-auto md:pt-8 py-4">
                <div
                  className={`flex md:flex-row flex-col md:gap-12 lg:gap-20 gap-8 ${
                    openNav ? "mb-6" : ""
                  }`}
                >
                  <div className="basis-3/5">{megamenuNavList}</div>
                  <div className="basis-2/5">
                    <div className="header_img1 py-4 hidden-xs">
                      <Image
                        src="/images/blog-2.webp"
                        alt="fintech"
                        width={491}
                        height={276}
                      />
                    </div>
                    <div className="header_img1">
                      <Image
                        src="/images/blog-1.webp"
                        alt="Healthcare"
                        width={491}
                        height={276}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Collapse>
          </Navbar>
        </div>
      </div>
    </header>
  );
};

export default NewHeader;
