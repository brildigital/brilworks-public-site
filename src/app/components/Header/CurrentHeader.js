"use client";
import { usePathname } from "next/navigation";
import React from "react";
import HeaderV2 from "./HeaderV2";
import Header from "./Header";

const CurrentHeader = () => {
  const pathname = usePathname();

  const headerDark = [
    "/portfolio/",
    "/about-us/",
    "/contact-us/",
    "/hire-java-developer/",
    "/hire-reactjs-developer/",
    "/hire-nodejs-developer/",
    "/hire-aws-developer/",
    "/hire-react-native-developer/",
    "/hire-ui-ux-designer/",
    "/hire-blockchain-developer/",
  ];

  const headerNew = headerDark.includes(pathname);

  return headerNew || pathname === "/" ? <HeaderV2 /> : <Header />;
};

export default CurrentHeader;
