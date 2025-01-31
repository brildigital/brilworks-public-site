"use client";
import { getEbooksData } from "../lib/getEbooks";
import { useEffect, useState } from "react";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import Image from "next/image";
import Link from "next/link";

const Ebooks = () => {
  const ITEMS_PER_PAGE = 8;
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
    <section className="md:mt-[8rem] mt-[6rem] px-[16px] !scroll-[unset]">
      <div className="container !max-w-[1220px] md:w-[94%] !mx-auto">
        {ebooksDataPerPage?.length ? (
          <div>
            <div className="flex flex-col gap-3">
              <div className="!font-bold !text-center">
                <h1 className="!text-center !font-[linear-gradient(180deg, #fffefc 0%, #fff2ef 100%)] md:!text-[2.5rem] !text-[2rem]">
                  Our <span class="h1-border-b"> E-books</span>
                </h1>
              </div>
              <div className="md:w-3/5 w-full mx-auto text-center mb-4">
                <p className="text-xl">
                  Unlock actionable knowledge to streamline software development
                  and stay ahead of tech trends with our expert-crafted ebooks.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 rounded mb-8">
                {ebooksDataPerPage?.map((ebooks, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col shadow-md gap-3 p-5 blog-box"
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
                        <h3 className="md:text-2xl text-xl font-semibold text-center">
                          {ebooks.name}
                        </h3>
                      </div>
                      <div className="h-auto mt-auto">
                        <Link
                          className="w-full"
                          as={`/ebooks/${ebooks?.slug}`}
                          href={`/ebooks/[slug]`}
                        >
                          <button className="w-full common-button gap-2 outline-none overflow-hidden whitespace-nowrap transition-all duration-300 button-primary !text-[#fff]">
                            Download
                          </button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {ebooksDataPerPage.length > ITEMS_PER_PAGE ? (
              <div className="flex justify-center my-[2rem]">
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
    </section>
  );
};

export default Ebooks;
