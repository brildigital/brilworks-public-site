"use client";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const QuickSummary = ({ data }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  return isLoading ? (
    <SkeletonTheme baseColor="#e2e2e2" highlightColor="#e9e9e9">
      <div className="slg:w-[calc(100%_-_170px)] w-full sxl:mb-6 mb-4">
        <Skeleton className="mb-[6px]" height={28} count={4} />
      </div>
    </SkeletonTheme>
  ) : (
    <div className="post-summary slg:w-[calc(100%_-_170px)] w-full text-left min-h-[76px]">
      <span className="font-bold text-themeColor">Quick Summary:-</span>
      {data}
    </div>
  );
};

export default QuickSummary;
