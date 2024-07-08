"use client";
import React from "react";

const QuickSummary = ({ data }) => {
  return (
    <div className="post-summary md:w-[96px] w-full  text-left ">
      <span className="font-bold text-themeColor">Quick Summary:-</span>
      {data}
    </div>
  );
};

export default QuickSummary;
