"use client";
import { usePathname } from "next/navigation";
import React from "react";
import HeaderV2 from "./HeaderV2";
import Header from "./Header";
import HeaderV3 from "./HeaderV3";

const CurrentHeader = () => {
  const pathname = usePathname();

  const subpaths = [
    "/ebooks/",
    "/internal/casestudies/",
    "/gist/java/",
    "/gist/aws/",
    "/gist/node/",
    "/gist/react-native/",
    "/gist/react/",
    "/gist/bubble-io/",
    "/gist/flutterflow/",
  ];

  const specialHeaderPages = ["/terms-and-conditions/", "/privacy-policy/"];
  const showHeader =
    subpaths.some((base) => pathname?.startsWith(base) && pathname !== base) ||
    specialHeaderPages.includes(pathname || "");

  return showHeader &&
    pathname !== "/gist/" &&
    !pathname.startsWith("/authors/") ? (
    <Header />
  ) : pathname === "/mvp-in-48-hours/" || pathname === "/free-mockups/" ? (
    <HeaderV3 />
  ) : (
    <HeaderV2 />
  );
};

export default CurrentHeader;
