"use client";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const ArticleSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#e2e2e2" highlightColor="#e9e9e9">
      <div className="md:pt-[8rem] pt-[6rem] blog-main">
        <div className="container max-w-[1280px] mx-auto my-0 !px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="sxl:basis-3/4 sxl:flex-shrink-0 sxl:flex-grow-0 sxl:max-w-[75%] sxl:ml-[20%] sxl:mb-6 mb-4 !px-4 min-h-[1px] w-full">
              <div className="md:hidden block slg:w-[calc(100%_-_170px)] mb-5">
                <Skeleton count={4} />
              </div>
              <div className="md:block hidden slg:w-[calc(100%_-_170px)] mb-4">
                <Skeleton count={2} />
              </div>

              <div className="md:hidden block slg:w-[calc(100%_-_170px)] mb-2">
                <Skeleton height={34} count={4} className="mb-2" />
              </div>
              <div className="md:block hidden slg:w-[calc(100%_-_170px)] mb-5">
                <Skeleton height={55} count={3} />
              </div>
              <div className="slg:w-[calc(100%_-_170px)] sxl:mb-6 mb-4 flex md:flex-row flex-col gap-2 md:justify-between ">
                <div className="flex items-center gap-2">
                  <div className="mb-1">
                    <Skeleton circle width={55} height={55} count={1} />
                  </div>
                  <div className="">
                    <Skeleton width={120} count={1} />
                    <Skeleton width={120} count={1} />
                  </div>
                </div>

                <div className="flex  md:items-end md:justify-end gap-2">
                  <div className="hidden md:block mb-1">
                    <Skeleton width={300} count={1} />
                  </div>
                  <div className="block md:hidden mb-1">
                    <Skeleton width={250} count={1} className="mb-2" />
                    <Skeleton width={250} count={1} />
                  </div>
                </div>
              </div>
              <div className="slg:w-[calc(100%_-_170px)] sxl:mb-6 mb-4">
                <div className="sxl:mb-6 mb-4">
                  <Skeleton height={170} count={1} className="rounded-[15px]" />
                </div>
                <div className="sxl:mb-6 mb-4">
                  <Skeleton height={25} count={4} />
                </div>
                <div className="sxl:mb-6 mb-4">
                  <Skeleton count={10} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export const ContentSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#e2e2e2" highlightColor="#e9e9e9">
      <Skeleton count={10} />
    </SkeletonTheme>
  );
};

export const TableOfContentSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#e2e2e2" highlightColor="#e9e9e9">
      <div className="w-64">
        <div>
          <div className="border border-[#e2e2e2] p-5 rounded-2xl">
            <Skeleton
              count={1}
              className="h-10 border-b border-borderGray mb-3"
            />
            <Skeleton count={17} className="h-4" />
          </div>
        </div>
        <div className="!mt-7">
          <div className="flex items-center justify-center flex-wrap gap-4">
            <Skeleton circle width={43} height={43} count={1} />
            <Skeleton circle width={43} height={43} count={1} />
            <Skeleton circle width={43} height={43} count={1} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export const PriceSkeleton = (id, height, width) => {
  return (
    <SkeletonTheme
      id={id || "skeleton"}
      baseColor="#e2e2e2"
      highlightColor="#e9e9e9"
    >
      <Skeleton count={1} height={height || 46} width={width || 250} />
    </SkeletonTheme>
  );
};
export const PriceSkeletonSmall = () => {
  return (
    <SkeletonTheme baseColor="#e2e2e2" highlightColor="#e9e9e9">
      <Skeleton count={1} height={24} width={80} />
    </SkeletonTheme>
  );
};
