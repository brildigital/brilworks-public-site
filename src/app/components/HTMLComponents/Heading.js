"use client";
import React from "react";

const Heading = ({ type, text, className = "", data }) => {
  const Tag = `${type}`; // Dynamically set the heading tag

  // Define styles for different heading levels
  const styles = {
    h1: "xl:text-[56px] lg:text-5xl md:text-[42px] text-4xl !leading-tight font-medium",
    h2: "lg:text-[34px] md:text-3xl text-2xl !leading-snug font-medium",
    h3: "md:text-xl text-lg",
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
