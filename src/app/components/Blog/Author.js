"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import { getblogSpecificAuthor } from "../lib/getblog";
import Image from "next/image";
import {
  blogAuthor,
  convertParamsToString,
  formatSrcUrl,
  formattedDate,
} from "../lib/commonFunction";
import Heading from "../HTMLComponents/Heading";

const Author = ({ authorName }) => {
  // const params = useParams()
  const ITEMS_PER_PAGE = 10;
  const [blogDataPerPage, setBlogDataPerPage] = useState([]);
  const [totalBlog, setTotalBlog] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [blogCategory, setBlogCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const blogData = await getblogSpecificAuthor(
        currentPage,
        ITEMS_PER_PAGE,
        blogCategory,
        searchQuery,
        authorName
      );
      setBlogDataPerPage(blogData.storyData);
      setTotalBlog(blogData.totalData);
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    if (searchQuery) {
      const delayDebounceFn = setTimeout(() => {
        fetchData();
      }, 1000);
      return () => clearTimeout(delayDebounceFn);
    } else {
      fetchData();
    }
  }, [currentPage, blogCategory, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [blogCategory]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  const author = blogAuthor(convertParamsToString(authorName));

  return (
    <>
      <div className="bg-detail-hero">
        <div className="h-full min-h-[600px] md:max-h-[700px] max-h-full">
          <div className="container max-w-[1280px] main-section-padding !pt-24 mx-auto">
            <div className="flex flex-col items-start justify-center h-full min-h-[500px] md:max-h-[700px] max-h-full mt-10">
              <div className="text-colorWhite md:text-2xl text-xl md:!mb-7.5 !mb-5">
                <div className="flex flex-wrap gap-2">
                  <span className="sxl:text-2xl md:text-xl text-lg text-white hover:text-themeColor duration-500">
                    <Link title="Brilworks" href="/">
                      Brilworks
                    </Link>
                  </span>
                  <span className="self-center md:mx-2 mx-1.5 mt-[2px]">
                    <Image
                      className="md:!w-6 w-5"
                      src="/images/v2/arrow-right.svg"
                      alt="arrow"
                      width="20"
                      height="10"
                      priority="true"
                    />
                  </span>
                  <span className="sxl:text-2xl md:text-xl text-lg text-white hover:text-themeColor duration-500">
                    <Link title="Brilworks Blog." href="/blog/">
                      Blog
                    </Link>
                  </span>
                  <span className="self-center md:mx-2 mx-1.5 mt-[2px]">
                    <Image
                      className="md:!w-6 w-5"
                      src="/images/v2/arrow-right.svg"
                      alt="arrow"
                      width="20"
                      height="10"
                      priority="true"
                    />
                  </span>
                  <span className="sxl:text-2xl md:text-xl text-lg text-white duration-500 font-medium">
                    {convertParamsToString(authorName)}
                  </span>
                </div>
              </div>
              <div className="author-main-img w-fit lg:mb-0 md:mb-2 mb-1">
                <div className="border-[3px] rounded-full border-colorWhite">
                  <div className="xl:w-[150px] md:w-[100px] w-[50px] xl:h-[150px] md:h-[100px] h-[50px]">
                    <Image
                      src={author?.authorImage}
                      width="150"
                      height="150"
                      alt={author?.name}
                      priority
                      className="!rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div>
                <Heading
                  type="h2"
                  className="text-white my-3"
                  text={convertParamsToString(authorName)}
                />
                <p className="text-white lg:text-2xl md:text-xl text-lg !mb-5">
                  {author?.authorPageDesc || author?.authorDesc}
                </p>

                <div className="bg-themeColor hover:bg-transparent duration-300 border border-themeColor w-fit md:px-7.5 md:py-[15px] px-6 py-3 rounded-md flex items-center justify-center cursor-pointer">
                  <Link href={author?.authorLinkedIn} target="_blank">
                    <Image
                      className="md:w-20 w-16"
                      src="/images/LinkedIn_Logo_white.svg"
                      alt="LinkedIn"
                      width="50"
                      height="15"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-[1280px] main-section-padding-bottom mx-auto">
        <div className="flex sxl:flex-row flex-col-reverse !mt-4">
          <div className="blog_category w-full flex flex-nowrap justify-start items-center !overflow-auto whitespace-nowrap !mb-4">
            <div className="bg-[#F8FAFC] p-1 rounded-md border border-borderGray">
              <button
                className={`Blog_category_head transition duration-600 ease-in-out lg:!px-5 px-4 !py-2 !rounded-md cursor-pointer ${
                  blogCategory === ""
                    ? "bg-themeColor text-white"
                    : "hover:!text-themeColor"
                }`}
                onClick={() => setBlogCategory("")}
              >
                <p className="text-base md:text-lg font-medium">All</p>
              </button>
              <button
                className={`Blog_category_head ease-in-out duration-300 lg:!px-3 px-2 !py-2 cursor-pointer !rounded-md ${
                  blogCategory === "Product Engineering"
                    ? "bg-themeColor text-white"
                    : "hover:!text-themeColor"
                }`}
                onClick={() => setBlogCategory("Product Engineering")}
              >
                <p className="text-base md:text-lg font-medium">
                  Product Engineering
                </p>
              </button>
              <button
                className={`Blog_category_head ease-in-out duration-300 lg:!px-3 px-2 !py-2 cursor-pointer !rounded-md ${
                  blogCategory === "Cloud DevOps and Data"
                    ? "bg-themeColor text-white"
                    : "hover:!text-themeColor"
                }`}
                onClick={() => setBlogCategory("Cloud DevOps and Data")}
              >
                <p className="text-base md:text-lg font-medium">
                  Cloud, DevOps and Data
                </p>
              </button>
              <button
                className={`Blog_category_head ease-in-out duration-300 lg:!px-3 px-2 !py-2 cursor-pointer !rounded-md ${
                  blogCategory === "Technology Practices"
                    ? "bg-themeColor text-white"
                    : "hover:!text-themeColor"
                }`}
                onClick={() => setBlogCategory("Technology Practices")}
              >
                <p className="text-base md:text-lg font-medium">
                  Technology Practices
                </p>
              </button>
              <button
                className={`Blog_category_head ease-in-out duration-300 lg:!px-3 px-2 !py-2 cursor-pointer !rounded-md ${
                  blogCategory === "News & Insights"
                    ? "bg-themeColor text-white"
                    : "hover:!text-themeColor"
                }`}
                onClick={() => setBlogCategory("News & Insights")}
              >
                <p className="text-base md:text-lg font-medium">
                  News & Insights
                </p>
              </button>
            </div>
          </div>
          <div className="w-full sxl:!w-1/3">
            <form
              className="md:pb-0 !pb-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative w-full">
                <Image
                  src="/images/v2/search-normal.svg"
                  width={24}
                  height={24}
                  alt="search-icon"
                  className="w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-2.5"
                />
                <input
                  id="user-search"
                  className={`w-full bg-[#F8FAFC] font-medium rounded-md py-3 px-4 text-base md:text-lg appearance-none border !pl-10 focus:outline-none focus:border-themeColor hover:border-themeColor focus:ring-0 focus:ring-themeColor`}
                  value={searchQuery}
                  type="search"
                  placeholder="Search"
                  autoComplete="off"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  disabled={!searchQuery && !blogDataPerPage?.length}
                />
              </div>
            </form>
          </div>
        </div>
        <div
          className={`grid ${
            isLoading || !blogDataPerPage?.length
              ? "grid-cols-1"
              : "md:grid-cols-2 grid-cols-1"
          } sxl:gap-x-10 sxl:!gap-y-[60px] md:gap-7.5 gap-5 min-h-[300px] md:py-7.5 py-5`}
        >
          {isLoading ? (
            <div className="flex align-middle justify-center md:!py-52 py-28 min-h-[90vh]">
              <FetchDataSpinner />
            </div>
          ) : blogDataPerPage?.length ? (
            blogDataPerPage.map(({ slug, name, content }, index) => (
              <div
                key={name}
                className="border border-borderGray rounded-2xl sec9_data_style blog_flex_30"
              >
                <Link
                  as={`/blog/${slug}`}
                  href={`/blog/[slug]`}
                  prefetch={true}
                >
                  <div className="sec9_img1">
                    <Image
                      className="block md:hidden rounded-t-[15px]"
                      src={
                        content?.mobile_banner?.filename
                          ? formatSrcUrl(content?.mobile_banner?.filename)
                          : "/images/not-found-image.webp"
                      }
                      alt={
                        content?.mobile_banner?.alt ||
                        content?.Image?.alt ||
                        `Blog-List-banner-${index + 1}`
                      }
                      width="300"
                      height="150"
                      priority={index === 0}
                      sizes="(min-width: 1040px) 42.35vw, (min-width: 640px) 60.84vw, calc(100vw - 30px)"
                      // media="(max-width: 767px)"
                      unoptimized
                    />
                    <Image
                      className="hidden md:block rounded-t-[15px]"
                      src={
                        content?.mobile_banner?.filename
                          ? formatSrcUrl(content?.mobile_banner?.filename)
                          : "/images/not-found-image.webp"
                      }
                      alt={
                        content?.mobile_banner?.alt ||
                        content?.Image?.alt ||
                        `Blog-List-banner-${index + 1}`
                      }
                      width="450"
                      height="230"
                      priority={index === 0}
                      sizes="(min-width: 1040px) 42.35vw, (min-width: 640px) 60.84vw, calc(100vw - 30px)"
                      unoptimized
                    />
                  </div>
                  <div className="sxl:px-5 sxl:py-7.5 p-5 sec9_box_home blog-hover">
                    <div className="sec9_txt1 border-b-[1px] border-[#80808038] py-[1rem]">
                      <p className="entry-title default-max-width aspect-[518/116] xl:!text-[28px]">
                        {name}
                      </p>
                    </div>

                    <div className="sec9_txt2 mt-[1.5rem]">
                      <p className="publish_date">
                        {content.Published
                          ? formattedDate(content?.Published)
                          : content.PublishedDate || "DD MM, YYYY"}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : searchQuery.length > 0 ? (
            <div className="!py-24 !block">
              <p className="md:!text-2xl !text-lg">
                No data match with your search result
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-center py-20 md:text-2xl text-lg">
              No Blog Found
            </div>
          )}
        </div>

        {!isLoading && blogDataPerPage?.length > 0 && (
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
              {getPaginationNumbers(currentPage, totalBlog, ITEMS_PER_PAGE).map(
                (page, index) => (
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
                    {page}
                  </li>
                )
              )}

              {/* Next */}
              <li
                className={`px-3 py-2 text-base font-medium rounded-md cursor-pointer ${
                  currentPage === Math.ceil(totalBlog / ITEMS_PER_PAGE)
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-colorBlack hover:text-themeColor"
                }`}
                onClick={() => {
                  if (currentPage < Math.ceil(totalBlog / ITEMS_PER_PAGE)) {
                    setCurrentPage(currentPage + 1);
                  }
                }}
              >
                Next
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Author;
