"use client";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const QuickSummary = ({ data }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 100);
  // }, []);

return ( <div className="post-summary slg:w-[calc(100%_-_170px)] w-full text-left ">
    <span className="font-bold text-themeColor">Quick Summary:-</span>
      {data}
    </div>
  );
};

export default QuickSummary;
