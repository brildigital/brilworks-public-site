"use client";
import "../../styles/Header.scss";
import React, { useEffect, useState } from "react";
import { Navbar, IconButton } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./MegaMenu";
import { menuItems } from "../lib/constants";
import SideMenu from "./SideMenu";
import MenuItem from "./MenuItem";
import Svgs from "../Svgs";

const NewHeader = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 767 && setOpenNav(false),
    );
  }, []);

  return (
    <header>
      <div className="header header-bg-white">
        <Navbar className="sticky text-black top-0 border-none z-10 h-max max-w-full rounded-none !px-0 shadow-none bg-transparent font-semibold">
          <div className="flex items-center justify-between !text-blue-gray-900 lg:w-[90%] w-[88%] mx-auto">
            <div className="header_logo">
              <Link href="/">
                <Image
                  src="/images/brilworks-logo.png"
                  alt="Brilworks Logo"
                  width="206"
                  height="62"
                  priority={true}
                  className="size-full wp-image-15"
                />
              </Link>
            </div>
            <div className="flex items-center">
              <div className="mr-4 hidden md:block">
                <ul className="mt-2 mb-4 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-3 lg:gap-6">
                  <div className="we_are_hiring hidden">
                    <Svgs name="we-are-hiring" />
                  </div>
                  {menuItems
                    .filter((menuItem) => !menuItem.hideInHeader)
                    .map((menu) =>
                      !menu?.isMegaMenu ? (
                        <MenuItem
                          key={menu.name}
                          name={menu.name}
                          path={menu.path}
                          className="header_font"
                          onClick={() => setOpenNav(false)}
                        />
                      ) : (
                        <MegaMenu
                          key={menu.name}
                          name={menu.name}
                          heading={menu.heading}
                          setOpenNav={setOpenNav}
                          menuItems={menu.menuItems}
                        />
                      ),
                    )}
                  <Link href="/contact-us/" onClick={() => setOpenNav(false)}>
                    <div className="header_sec1_txt2 hidden-xs">
                      <p className="transition">LET&apos;S TALK</p>
                    </div>
                  </Link>
                </ul>
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
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
                </span>
              </IconButton>
            </div>
          </div>
        </Navbar>
        <SideMenu open={openNav} close={() => setOpenNav(false)} />
      </div>
    </header>
  );
};

export default NewHeader;
