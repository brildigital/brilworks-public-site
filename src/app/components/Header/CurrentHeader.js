"use client";
import { usePathname } from "next/navigation";
import React from "react";
import HeaderV2 from "./HeaderV2";
import Header from "./Header";

const CurrentHeader = () => {
  const pathname = usePathname();

  const headerLight = ["/our-process/", "/career/"];

  const headerOld =
    headerLight.includes(pathname) ||
    pathname.startsWith("/blog/") ||
    pathname.startsWith("/use-case/") ||
    pathname.startsWith("/gist/") ||
    pathname.startsWith("/ebooks/");

  return headerOld ? <Header /> : <HeaderV2 />;
};

export default CurrentHeader;
