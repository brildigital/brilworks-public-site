"use client";
import { getEbooksData } from "../lib/getEbooks";
import { useEffect, useState } from "react";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import Image from "next/image";
import Heading from "../HTMLComponents/Heading";
import ButtonV2 from "../Common/ButtonV2";

const Ebooks = () => {
  const ITEMS_PER_PAGE = 9;
  const [ebooksDataPerPage, setEbooksDataPerPage] = useState([]);
  const [totalEbook, setTotalEbook] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const blogData = await getEbooksData(currentPage, ITEMS_PER_PAGE);
      setEbooksDataPerPage(blogData.storyData);
      setTotalEbook(blogData.totalData);
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    fetchData();
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  const getPageNumbers = () => {
    const pages = [];
    for (let i = -2; i <= 2; i++) {
      const page = currentPage + i;
      if (page > 0 && page <= Math.ceil(totalEbook / ITEMS_PER_PAGE)) {
        pages.push(page);
      }
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();
  if (isLoading)
    return (
      <section className="md:mt-[8rem] mt-[6rem] px-4 !scroll-[unset]">
        <div className="container !max-w-[1220px] md:w-[94%] !mx-auto">
          <FetchDataSpinner />
        </div>
      </section>
    );

  return (
    <>
      <div className="hire-team-section-l !scroll-[unset]">
        <div className="banner-layer h-full min-h-[600px] md:max-h-[700px] max-h-full">
          <div className="container max-w-[1280px] main-section-padding !pt-24 mx-auto">
            <div className="flex flex-col items-start justify-center h-full min-h-[400px] md:max-h-[700px] max-h-full">
              <p className="text-colorWhite uppercase md:text-2xl text-xl md:!mb-7.5 !mb-5">
                We Write
              </p>
              <Heading type="h1" className="text-white" text="Our E-books" />
              <p className="text-white lg:text-2xl md:text-xl text-lg !mt-5">
                Unlock actionable knowledge to streamline software development
                and stay ahead of tech trends with our expert-crafted ebooks.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-[1280px] main-section-padding mx-auto">
        <div className="">
          <Heading
            className="lg:!text-[34px] md:!text-3xl !text-2xl"
            type="h2"
            text="Explore Our E-Book Library"
          />
          <p className="md:!text-lg text-base pt-5 ">
            Dive into Our Digital Book Collection
          </p>
          {ebooksDataPerPage?.length ? (
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 sxl:gap-10 md:gap-7.5 gap-5 rounded-2xl sxl:pt-10 md:pt-7.5 pt-5">
                {ebooksDataPerPage?.map((ebooks, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-5 sxl:py-9 md:p-6 p-5 sxl:px-7.5 blog-box"
                    >
                      <div>
                        <Image
                          className="w-[170px] drop-shadow-book-shadow p-4 py-0 mx-auto"
                          src={ebooks?.content?.ebookImage?.filename}
                          alt={
                            ebooks?.content?.ebookImage?.alt ||
                            `Ebooks-List-${index + 1}`
                          }
                          width={140}
                          height={65}
                        />
                      </div>

                      <div>
                        <Heading
                          type="h3"
                          className="md:!text-xl !text-lg font-medium"
                          text={ebooks.name}
                        />
                      </div>
                      <div className="h-auto mt-auto">
                        <ButtonV2
                          className="hover:text-themeColor"
                          as={`/ebooks/${ebooks?.slug}`}
                          redirect={`/ebooks/[slug]`}
                          label="Download"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              {ebooksDataPerPage.length > ITEMS_PER_PAGE ? (
                <div className="flex justify-center my-[2rem]">
                  <ul className="list-none flex flex-wrap">
                    <li
                      className={`h-[40px] w-fit font-[700] mr-[1rem] mb-[0.5rem] flex items-center justify-center cursor-pointer ${
                        currentPage === 1
                          ? "opacity-50 !cursor-not-allowed"
                          : ""
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
                          currentPage === page
                            ? " bg-colorBlack text-colorWhite"
                            : ""
                        }`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </li>
                    ))}
                    <li
                      className={`h-[40px] w-fit font-[700] mr-[1rem] mb-[0.5rem] flex items-center justify-center cursor-pointer ${
                        currentPage === Math.ceil(totalEbook / ITEMS_PER_PAGE)
                          ? "!opacity-50 !cursor-not-allowed"
                          : ""
                      }`}
                      onClick={() => {
                        if (
                          currentPage < Math.ceil(totalEbook / ITEMS_PER_PAGE)
                        ) {
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
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Ebooks;
