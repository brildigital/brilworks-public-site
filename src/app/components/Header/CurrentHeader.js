"use client";
import { usePathname } from "next/navigation";
import React from "react";
import HeaderV2 from "./HeaderV2";
import Header from "./Header";

const CurrentHeader = () => {
  const pathname = usePathname();

  const headerDark = ["/portfolio/", "/about-us/", "/contact-us/"];

  const headerNew = headerDark.some((path) => pathname.startsWith(path));

  return headerNew || pathname === "/" ? <HeaderV2 /> : <Header />;
};

export default CurrentHeader;
