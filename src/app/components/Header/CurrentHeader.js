"use client";
import { usePathname } from "next/navigation";
import React from "react";
import HeaderV2 from "./HeaderV2";
import Header from "./Header";

const CurrentHeader = () => {
  const pathname = usePathname();

  const headerLight = ["/our-process/", "/career/"];

  const isEbooksOrBlogSubpath =
    (pathname.startsWith("/ebooks/") || pathname.startsWith("/blog/")) &&
    pathname !== "/ebooks/" &&
    pathname !== "/blog/";

  const headerOld =
    headerLight.includes(pathname) ||
    isEbooksOrBlogSubpath ||
    pathname.startsWith("/use-case/") ||
    pathname.startsWith("/gist/");

  return headerOld ? <Header /> : <HeaderV2 />;
};

export default CurrentHeader;
