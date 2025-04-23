"use client";
import { usePathname } from "next/navigation";
import React from "react";
import HeaderV2 from "./HeaderV2";
import Header from "./Header";

const CurrentHeader = () => {
  const pathname = usePathname();

  const subpaths = [
    "/ebooks/",
    "/gist/java/",
    "/gist/aws/",
    "/gist/node/",
    "/gist/react-native/",
    "/gist/react/",
    "/gist/bubble-io/",
    "/gist/flutterflow/",
  ];

  const showHeader = subpaths.some(
    (base) => pathname?.startsWith(base) && pathname !== base
  );

  return showHeader && pathname !== "/gist/" ? <Header /> : <HeaderV2 />;
};

export default CurrentHeader;
