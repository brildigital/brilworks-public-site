"use client";
import { usePathname } from "next/navigation";
import React from "react";
import HeaderV2 from "./HeaderV2";
import Header from "./Header";

const CurrentHeader = () => {
  const pathname = usePathname();

  const isEbooksOrBlogSubpath =
    pathname.startsWith("/ebooks/") && pathname !== "/ebooks/";

  return isEbooksOrBlogSubpath ? <Header /> : <HeaderV2 />;
};

export default CurrentHeader;
