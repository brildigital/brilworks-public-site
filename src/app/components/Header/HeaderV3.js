"use client";
import React, { useEffect, useState } from "react";
import { Navbar, IconButton } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { menuItems } from "../lib/constants";
import ButtonV2 from "../Common/ButtonV2";
import Countdown48h from "./Countdown48h";

const HeaderV3 = () => {
  const pathname = usePathname();
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

  return (
    <header>
      <div className="header">
        <Navbar
          className="top-0 border-none z-10 h-max rounded-none !px-0 shadow-none font-semibold fixed transition-colors duration-300 ease-in-out bg-[#000000e6]"
          // className={`top-0 border-none z-10 h-max rounded-none !px-0 shadow-none font-semibold fixed transition-colors duration-300 ease-in-out ${
          //   hasBg ? "bg-[#000000e6]" : "bg-transparent"
          // }`}
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

            <div className="flex items-center gap-5">
              {pathname === "/mvp-in-48-hours/" ||
              pathname === "/free-mockups/" ? (
                <Countdown48h>
                  <ButtonV2
                    label={
                      pathname === "/free-ui/"
                        ? "Claim Free Screens"
                        : "Claim Free"
                    }
                    className="header-btn"
                    redirect={pathname === "/free-ui/" ? "#cta" : "/free-ui/"}
                    scrollingButton={pathname === "/free-ui/"}
                  />
                </Countdown48h>
              ) : (
                ""
              )}
            </div>
          </div>
        </Navbar>
      </div>
    </header>
  );
};

export default HeaderV3;
