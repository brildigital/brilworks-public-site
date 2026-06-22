"use client";
import { useEffect } from "react";
import { scrollEffect } from "../lib/commonFunction";

const SnowflakeRevealInit = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => window.removeEventListener("scroll", scrollEffect);
  }, []);

  return null;
};

export default SnowflakeRevealInit;
