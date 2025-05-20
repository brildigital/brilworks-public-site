"use client";
import React, { useEffect, useState } from "react";
import { Navbar, IconButton } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { menuItems } from "../lib/constants";
import ButtonV2 from "../Common/ButtonV2";

const Svgs = dynamic(() => import("../Svgs"));
const SideMenu = dynamic(() => import("./SideMenu"));
const MenuItem = dynamic(() => import("./MenuItem"));
const MegaMenu = dynamic(() => import("./MegaMenu"));

const HeaderV2 = () => {
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState(false);
  const [menuItemSampleCopy, setMenuItemSampleCopy] = useState(menuItems);
  const [hasBg, setHasBg] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Initial state setup based on current scroll position
    setHasBg(window.scrollY > 50);

    // Optimized scroll handler with throttling
    let lastY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const isScrollingDown = currentY > lastY;

          // Update background state
          setHasBg(currentY > 50);

          // Update header visibility based on scroll direction and position
          if (currentY > 150 && isScrollingDown) {
            setIsHidden(true);
          } else if (!isScrollingDown) {
            setIsHidden(false);
          }

          lastY = currentY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close navigation when window resizes to desktop
    const handleResize = () => {
      if (window.innerWidth >= 767) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

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

        const updatedMenuItems = menuItemSampleCopy.map((menuItem) => {
          if (menuItem.name === "INDUSTRY") {
            return {
              ...menuItem,
              menuItems: menuItem.menuItems.map((subItem) => {
                if (subItem.name === "USE CASES") {
                  return { ...subItem, subSections: slugList };
                }
                return subItem;
              }),
            };
          }
          return menuItem;
        });

        setMenuItemSampleCopy(updatedMenuItems);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchSlugs();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <div className={`header ${isHidden ? "header-hide" : ""}`}>
        <Navbar
          className={`sticky top-0 border-none z-10 h-max rounded-none !px-0 shadow-none font-semibold ${
            openNav ? "!fixed" : hasBg ? "bg-[#000000e6]" : "bg-transparent"
          }`}
        >
          <div className="flex justify-between text-white container max-w-[1280px] md:px-10 px-5 mx-auto">
            <div className="header_logo">
              <Link href="/">
                <Image
                  src="/images/logo-white.svg"
                  alt="Brilworks Logo"
                  width="155"
                  height="46"
                  priority={true}
                />
              </Link>
            </div>
            {pathname !== "/posters/" && (
              <div className="flex items-center">
                <div className="mr-4 hidden md:block">
                  <ul className="mt-2 mb-4 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-3 lg:gap-6 text-white">
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
            )}
            <div className="flex items-center gap-5">
              <ButtonV2
                label={
                  pathname === "/free-ui/" ? "Claim Free Screens" : "Let's Talk"
                }
                {...(pathname === "/free-ui/" ? { redirect: "#cta" } : {})}
                scrollingButton={pathname === "/free-ui/"}
              />
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

export default HeaderV2;
