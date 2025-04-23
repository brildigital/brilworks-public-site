"use client";
import { usePathname } from "next/navigation";
import React from "react";
import HeaderV2 from "./HeaderV2";
import Header from "./Header";

const CurrentHeader = () => {
  const pathname = usePathname();

  const isEbooksOrBlogSubpath =
    pathname.startsWith("/ebooks/") && pathname !== "/ebooks/";
  const isGistSubpath = pathname.startsWith("/gist/") && pathname !== "/gist/";

  const headerOld = isEbooksOrBlogSubpath || isGistSubpath;

  return headerOld ? <Header /> : <HeaderV2 />;
};

export default CurrentHeader;
