"use client";
import { usePathname } from "next/navigation";
import React from "react";
import HeaderV2 from "./HeaderV2";
import Header from "./Header";

const CurrentHeader = () => {
  const pathname = usePathname();

  const headerDark = ["/about-us/", "/contact-us/"];

  const headerNew =
    headerDark.includes(pathname) ||
    pathname.startsWith("/hire-") ||
    pathname.startsWith("/portfolio/") ||
    pathname.startsWith("/industry/") ||
    pathname.startsWith("/ai-solutions/");

  return headerNew || pathname === "/" ? <HeaderV2 /> : <Header />;
};

export default CurrentHeader;
