"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { getTechQandA } from "../lib/getTechQandA";
import { useMediaQuery } from "react-responsive";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";

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
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchQandAData = async () => {
      try {
        const nodeTechData = await getTechQandA(
          "aws",
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
  }, []);

  return (
    <section className="portfolio mt-[6rem]">
      <div className="service_width relative flex items-left justify-center ">
        <Image
          className="h-[50vh] rounded-[20px]"
          width={1300}
          height={400}
          src="/images/AWS.webp"
          alt="AWS Tech Q&A"
          priority={true}
        />
        <div className="absolute bottom-1/4 w-full text-left mx-auto">
          <div className="how-we w-[96%] mx-auto">
            <h1 className="font-style-solution-head xl:text-[4.5rem] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]">
              AWS Q & N
            </h1>
            <p className="md:max-w-[70%]">
              If you find yourself entangled in complex development scenarios,
              you've arrived at the perfect destination. Our Cloud developers
              have documented their experiences in tackling various queries.
              Discover practical solutions to your Cloud computing errors
              through our straightforward and well-crafted solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto service_width md:py-[6rem] py-[4rem]">
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
          ) : (
            <div className="flex align-middle justify-center p-28">
              <FetchDataSpinner />
            </div>
          )}
        </div>

        {queAnsData?.length ? (
          <div className="flex justify-center mt-[5rem]">
            <ul className="list-none flex flex-wrap">
              <li
                className={`h-[40px] w-fit rounded-[50%] font-[700] mr-[1rem] mb-[0.5rem] flex items-center justify-center cursor-pointer ${
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

              {Array.from({
                length: Math.ceil(totalQandA / ITEMS_PER_PAGE),
              }).map((_, index) => (
                <li
                  key={index}
                  className={`h-[40px] w-[40px] rounded-[20%]  font-[700] mr-[1rem] mb-[0.5rem] flex items-center justify-center cursor-pointer ${
                    currentPage === index + 1
                      ? " bg-[#1a1a1a] text-[#ffffff]"
                      : ""
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </li>
              ))}
              <li
                className={`h-[40px] w-fit rounded-[50%] font-[700] mr-[1rem] mb-[0.5rem] flex items-center justify-center cursor-pointer ${
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

export default AWSTechQandA;
