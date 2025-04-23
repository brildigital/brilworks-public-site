"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { getTechQandA } from "../lib/getTechQandA";
import { useMediaQuery } from "react-responsive";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import Heading from "../HTMLComponents/Heading";

const Card = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.Card)
);
const CardBody = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.CardBody)
);

const AWSTechQandA = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1080 });
  const ITEMS_PER_PAGE = isTablet ? 8 : 9;
  const [queAnsData, setqueAnsData] = useState([]);
  const [totalQandA, settotalQandA] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchQandAData = async () => {
    setIsLoading(true);
    try {
      const nodeTechData = await getTechQandA(
        "aws",
        currentPage,
        ITEMS_PER_PAGE
      );
      setqueAnsData(nodeTechData.storyData);
      settotalQandA(nodeTechData.totalData);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQandAData();
  }, [currentPage, ITEMS_PER_PAGE]);

  const getPaginationNumbers = (currentPage, totalItems, itemsPerPage) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <>
      <div className="bg-detail-hero">
        <div className="h-full min-h-[400px] md:max-h-[600px] max-h-full">
          <div className="container max-w-[1280px] main-section-padding !pt-24 mx-auto">
            <div className="flex flex-col items-start justify-center h-full min-h-[300px] md:max-h-[600px]  sxl:mt-20 mt-10 max-h-full">
              <Heading type="h1" className="text-white" text="AWS Q & A" />
              <p className="text-white lg:text-2xl md:text-xl text-lg !mt-5">
                If you find yourself entangled in complex development scenarios,
                you've arrived at the perfect destination. Our Cloud developers
                have documented their experiences in tackling various queries.
                Discover practical solutions to your Cloud computing errors
                through our straightforward and well-crafted solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-[1280px] main-section-padding-bottom mx-auto">
        <div
          className={`grid ${
            !queAnsData?.length
              ? "grid-cols-1"
              : "xl:grid-cols-3 md:grid-cols-2 grid-cols-1"
          } gap-[2rem]`}
        >
          {queAnsData?.length ? (
            queAnsData.map(({ name, slug, content }, index) => (
              <Link
                as={`/gist/aws/${slug}`}
                href={`/gist/aws/[slug]`}
                prefetch={true}
                key={index}
              >
                <Card className="shadow-lg shadow-[#00b6cf]-500/50 border border-gray-300 hover:border-[#00b6cf]">
                  <div className="sec9_img1">
                    <Image
                      decoding="async"
                      loading="lazy"
                      className="rounded-t-[12px]"
                      src={content?.banner_image?.filename || ""}
                      alt={content?.banner_image?.alt || "Tech Q&A banner"}
                      width="450"
                      height="230"
                    />
                  </div>
                  <CardBody>
                    <h2 className="text-xl why_text font-bold mb-7 pl-2">
                      {name}
                    </h2>
                    <div className="inline-flex gap-4 !cursor-pointer why_text font-bold pl-2">
                      <p className="!text-[#00b6cf]">Read More</p>
                      <div className="aerrow relative">
                        <img
                          decoding="async"
                          loading="lazy"
                          className="black_aerrow alignnone wp-image-28 size-full"
                          src="/images/black_aerrow-1.png"
                          alt="arrow"
                          width="46"
                          height="18"
                        />
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            ))
          ) : isLoading ? (
            <div className="flex align-middle justify-center p-28">
              <FetchDataSpinner />
            </div>
          ) : (
            <div className="flex items-center justify-center py-20 md:text-2xl text-lg">
              No data found
            </div>
          )}
        </div>

        {queAnsData?.length && queAnsData?.length > 0 ? (
          <div className="flex justify-center sxl:mt-10 md:mt-7.5 mt-5">
            <ul className="flex flex-wrap items-center gap-2">
              {/* Prev */}
              <li
                className={`px-3 py-2 text-base font-medium rounded-md cursor-pointer ${
                  currentPage === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-colorBlack hover:text-themeColor"
                }`}
                onClick={() => {
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
              >
                Prev
              </li>

              {/* Page Numbers */}
              {getPaginationNumbers(
                currentPage,
                totalQandA,
                ITEMS_PER_PAGE
              ).map((page, index) => (
                <li
                  key={index}
                  className={`w-10 h-10 flex items-center justify-center text-base font-medium border rounded-md cursor-pointer ${
                    currentPage === page
                      ? "bg-themeColor text-white"
                      : page === "..."
                      ? "border-none cursor-default text-colorBlack"
                      : "text-colorBlack hover:bg-sectionBG"
                  }`}
                  onClick={() =>
                    typeof page === "number" && setCurrentPage(page)
                  }
                >
                  {index + 1}
                </li>
              ))}

              {/* Next */}
              <li
                className={`px-3 py-2 text-base font-medium rounded-md cursor-pointer ${
                  currentPage === Math.ceil(totalQandA / ITEMS_PER_PAGE)
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-colorBlack hover:text-themeColor"
                }`}
                onClick={() => {
                  if (currentPage < Math.ceil(totalQandA / ITEMS_PER_PAGE)) {
                    setCurrentPage(currentPage + 1);
                  }
                }}
              >
                Next
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default AWSTechQandA;
