"use client";
import React from "react";

const Heading = ({ type, text, className = "", data }) => {
  const Tag = `${type}`; // Dynamically set the heading tag

  // Define styles for different heading levels
  const styles = {
    h1: "xl:text-[56px] lg:text-5xl md:text-[42px] text-4xl !leading-normal md:!leading-tight font-bold",
    h2: "xl:text-5xl lg:text-[42px] md:text-4xl text-[30px] !leading-normal md:!leading-tight font-bold",
    h3: "xl:text-[42px] lg:text-4xl text-[30px]",
    h4: "text-xl font-bold",
    h5: "text-lg font-bold",
    h6: "text-base font-bold",
  };
  if (data) {
    return (
      <Tag
        className={`${styles[type]} ${className}`}
        dangerouslySetInnerHTML={{ __html: data }}
      />
    );
  }

  return <Tag className={`${styles[type]} ${className}`}>{text}</Tag>;
};

export default Heading;
