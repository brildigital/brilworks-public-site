"use client";
import React, { useEffect, useState } from "react";
import { Navbar, IconButton } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import { menuItems } from "../lib/constants";
import dynamic from "next/dynamic";
import Button from "../Common/Button";
import { usePathname } from "next/navigation";
const Svgs = dynamic(() => import("../Svgs"));
const SideMenu = dynamic(() => import("./SideMenu"));
const MenuItem = dynamic(() => import("./MenuItem"));
const MegaMenu = dynamic(() => import("./MegaMenu"));
const NewHeader = () => {
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState(false);
  const [menuItemSampleCopy, setMenuItemSampleCopy] = useState(menuItems);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 767 && setOpenNav(false)
    );
    const fetchSlugs = async () => {
      try {
        const url = `https://api.storyblok.com/v2/cdn/stories?starts_with=use-case/&version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;

        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();

        const slugList = data.stories.map((story) => ({
          name:
            story.name ||
            story.slug
              ?.replaceAll("-", " ")
              ?.split(" ")
              ?.map(
                (d) => d.charAt(0).toLocaleUpperCase() + d.slice(1, d.length)
              )
              .join(" "),
          path: "/use-case/" + story.slug + "/",
        }));
        slugList.sort((a, b) => a.name.length - b.name.length);
        menuItemSampleCopy.map((d, i) => {
          if (d.name == "INDUSTRY") {
            return d.menuItems.map((d2, i2) => {
              if (d2.name == "USE CASES") {
                d2.subSections = [...slugList];
                return d2;
              } else {
                return d2;
              }
            });
          } else {
            return d;
          }
        });
      } catch (error) {
        console.error("Fetch error:", error);
      }
      setMenuItemSampleCopy([...menuItemSampleCopy]);
    };

    fetchSlugs();
  }, []);

  return (
    <header>
      <div className="header header-bg-white">
        <Navbar className="sticky text-black top-0 border-none z-10 h-max rounded-none !px-0 shadow-none bg-transparent font-semibold">
          <div className="flex items-center justify-between text-colorBlack container max-w-[1280px] md:px-10 px-6 mx-auto">
            <div className="header_logo">
              <Link href="/">
                <Image
                  src="/images/logo-black.svg"
                  alt="Brilworks Logo"
                  width="155"
                  height="46"
                  priority="true"
                />
              </Link>
            </div>
            {pathname !== "/posters/" ? (
              <div className="flex items-center">
                <div className="mr-4 hidden md:block">
                  <ul className="mt-2 mb-4 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-3 lg:gap-6">
                    <div className="we_are_hiring hidden">
                      <Svgs name="we-are-hiring" />
                    </div>
                    {menuItemSampleCopy
                      ?.filter((menuItem) => !menuItem?.hideInHeader)
                      ?.map((menu) =>
                        !menu?.isMegaMenu ? (
                          <MenuItem
                            key={menu?.name}
                            name={menu?.name}
                            path={menu?.path}
                            className="header_font"
                            onClick={() => setOpenNav(false)}
                          />
                        ) : (
                          <MegaMenu
                            key={menu?.name}
                            name={menu?.name}
                            pathname={pathname}
                            heading={menu?.heading}
                            setOpenNav={setOpenNav}
                            menuItems={menu?.menuItems}
                          />
                        )
                      )}
                  </ul>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="flex items-center gap-5">
              {pathname.startsWith("/portfolio/") ? (
                <Button
                  innerClassName="text-base"
                  onClick={() => setOpenNav(false)}
                  label="Let's Talk"
                />
              ) : (
                <Button onClick={() => setOpenNav(false)} label="Let's Talk" />
              )}
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
