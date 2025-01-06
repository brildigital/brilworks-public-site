"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { getTechQandA } from "../lib/getTechQandA";
import { useMediaQuery } from "react-responsive";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import { getPageNumbers } from "../lib/commonFunction";

const Card = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.Card)
);
const CardBody = dynamic(() =>
  import("@material-tailwind/react").then((mod) => mod.CardBody)
);

const JavaTechQandA = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1080 });
  const ITEMS_PER_PAGE = isTablet ? 8 : 9;
  const [queAnsData, setqueAnsData] = useState([]);
  const [totalQandA, settotalQandA] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const pageNumbers = getPageNumbers(currentPage, totalQandA, ITEMS_PER_PAGE);

  useEffect(() => {
    const fetchQandAData = async () => {
      try {
        const nodeTechData = await getTechQandA(
          "java",
          currentPage,
          ITEMS_PER_PAGE
        );
        setqueAnsData(nodeTechData.storyData);
        settotalQandA(nodeTechData.totalData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchQandAData();
  }, [currentPage, ITEMS_PER_PAGE]);

  return (
    <section className="container max-w-[1280px] px-4 mt-[6rem] mx-auto">
      <div className="relative">
        <Image
          className="h-[40vh] max-h-[400px] rounded-[20px]"
          width={1250}
          height={400}
          src="https://a.storyblok.com/f/219851/1398x780/a05c27ff8d/java-services-banner.webp"
          alt="Java Tech Q&A"
          priority
        />
        <div className="absolute bottom-1/4 w-full text-left mx-auto">
          <div className="how-we w-[96%] mx-auto">
            <h1 className="font-style-solution-head xl:text-[4.5rem] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]">
              Java Q & A
            </h1>
            <p className="md:max-w-[70%]">
              A community of devoted Java enthusiasts dedicated to assisting
              fellow Java enthusiasts. Explore how Brilworks contributes to
              uplifting the Java community by addressing the most crucial,
              common, unique, and unparalleled Java questions.
            </p>
          </div>
        </div>
      </div>
      <div className="md:py-[4rem] py-[2rem]">
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
                as={`/gist/java/${slug}`}
                href={`/gist/java/[slug]`}
                prefetch={true}
                key={index}
              >
                <Card className="shadow-lg shadow-themeColor-500/50 border border-gray-300 hover:border-themeColor">
                  <div className="sec9_img1">
                    <Image
                      decoding="async"
                      loading="lazy"
                      className="rounded-t-[12px]"
                      src={content?.banner_image?.filename || ""}
                      alt={content?.banner_image?.alt || `Tech Q&A banner-${index}`}
                      width="450"
                      height="230"
                    />
                  </div>
                  <CardBody className="p-4">
                    <h2 className="text-xl font-bold text-colorBlack mb-7 pl-2">
                      {name}
                    </h2>
                    <div className="inline-flex gap-4 !cursor-pointer font-bold pl-2">
                      <p className="!text-themeColor">Read More</p>
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
          ) : (
            <div className="flex align-middle justify-center p-28">
              <FetchDataSpinner />
            </div>
          )}
        </div>

        {queAnsData?.length && pageNumbers.length > 1 ? (
          <div className="flex justify-center mt-[4rem]">
            <ul className="list-none flex flex-wrap">
              <li
                className={`h-[40px] w-fit font-[700] mr-[1rem] mb-[0.5rem] flex items-center justify-center cursor-pointer ${
                  currentPage === 1 ? "opacity-50 !cursor-not-allowed" : ""
                }`}
                onClick={() => {
                  if (currentPage > 1) {
                    setCurrentPage(currentPage - 1);
                  }
                }}
              >
                {"< PREV"}
              </li>
              {pageNumbers.map((page) => (
                <li
                  key={page}
                  className={`h-[40px] w-[40px] rounded-[50%]  font-[700] mr-[1rem] mb-[0.5rem] flex items-center justify-center cursor-pointer ${
                    currentPage === page ? " bg-colorBlack text-colorWhite" : ""
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </li>
              ))}
              <li
                className={`h-[40px] w-fit font-[700] mr-[1rem] mb-[0.5rem] flex items-center justify-center cursor-pointer ${
                  currentPage === Math.ceil(totalQandA / ITEMS_PER_PAGE)
                    ? "!opacity-50 !cursor-not-allowed"
                    : ""
                }`}
                onClick={() => {
                  if (currentPage < Math.ceil(totalQandA / ITEMS_PER_PAGE)) {
                    setCurrentPage(currentPage + 1);
                  }
                }}
              >
                {"NEXT >"}
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default JavaTechQandA;
