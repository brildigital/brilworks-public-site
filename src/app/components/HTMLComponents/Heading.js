"use client";
import React from "react";

const Heading = ({ type, text, className = "" }) => {
  const Tag = `${type}`; // Dynamically set the heading tag

  // Define styles for different heading levels
  const styles = {
    h1: "lg:text-5xl md:text-[40px] text-3xl md:!leading-tight font-bold",
    h2: "lg:text-[40px] md:text-3xl text-[26px] lg:!leading-tight font-bold text-themeColor",
    h3: "md:text-2xl text-xl font-bold",
    h4: "text-xl font-bold",
    h5: "text-lg font-bold",
    h6: "text-base font-bold",
  };

  return <Tag className={`${styles[type]} ${className}`}>{text}</Tag>;
};

export default Heading;
