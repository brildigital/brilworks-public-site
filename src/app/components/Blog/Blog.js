"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import { getblogData } from "../lib/getblog";
import Image from "next/image";

const Blog = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1080 });
  const ITEMS_PER_PAGE = isTablet ? 8 : 9;
  const [blogDataPerPage, setBlogDataPerPage] = useState([]);
  const [totalBlog, setTotalBlog] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [blogCategory, setBlogCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const blogData = await getblogData(
        currentPage,
        ITEMS_PER_PAGE,
        blogCategory,
        searchQuery
      );
      setBlogDataPerPage(blogData.storyData);
      setTotalBlog(blogData.totalData);
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="md:mt-[8rem] mt-[6rem] px-[16px]">
      <div className="container !max-w-[1220px] md:w-[94%] blog !mx-auto">
        <div className="service_sec3 blog-head lg:!mb-10 !mb-5">
          <div className="home_sec2_txt3 !text-center !mb-4">
            <h1 className="!text-center md:!text-[2.5rem] !text-[2rem]">
              Brilworks Blog
            </h1>
          </div>
          <div className="home_sec2_txt4 ">
            <p className="md:!text-[19px] !text-[18px]">
              In the realm of software-defined landscapes, the Brilworks Blog
              serves as your guide through the technological renaissance. Our
              platform is dedicated to delivering comprehensive insights into
              cutting-edge research, innovative thinking, and perspectives on
              technological advancements in the field of software development.
              We provide a profound context to assist tech leaders in making
              informed and intelligent decisions.
            </p>
          </div>
        </div>
        {/* {popularBlog?.content ? (
          <div className="md:!mt-5">
            <div className="flex !flex-wrap -mx-4">
              <>
                <div className="flex sxl:!flex-grow-0 sxl:!flex-shrink-0 md:!basis-1/2 !px-4 min-h-[1px]">
                  <div className="!mb-5 md:!pt-4 xl:!pt-0 !w-full">
                    <img
                      className="!w-full !object-cover rounded-2xl"
                      decoding="async"
                      loading="lazy"
                      src={popularBlog?.content?.mobile_banner?.filename}
                    />
                  </div>
                </div>
                <div className="flex sxl:!flex-grow-0 sxl:!flex-shrink-0 md:!basis-1/2 !px-4 min-h-[1px]">
                  <div className="blog-thumb-content">
                    <label className="bg-black text-white font-bold rounded-lg px-[0.65em] text-center py-[0.35em]  md:text-sm lg:text-base !text-sm !mb-2">
                      {popularBlog?.content?.subtitle}
                    </label>
                    <h2 className="lg:text-[28px] text-[24px] !mb-3 text-[#3D3D3D] !font-bold hover:text-[#00b6cf] transition duration-600 ease-in-out">
                      <Link
                        href={`${process.env.NEXT_PUBLIC_BASE_URL}${popularBlog?.full_slug}`}
                        target="_blank"
                      >
                        {popularBlog?.content?.title}
                      </Link>
                    </h2>
                    <p className="md:!text-[19px] !text-[18px] !mb-3 font-graphik">
                      {parse(popularBlog?.content?.Quick_Summary)
                        .split(" ")
                        .splice(0, 20)
                        .join(" ")}
                      ...
                    </p>
                    <p
                      className="published-date !mb-3 md:text-[19px] !text-base font-graphik !text-gray-500"
                      date={`${popularBlog?.content?.PublishedDate}${popularBlog?.content?.reading_time_in_minutes}`}
                    >
                      {popularBlog?.content?.PublishedDate} •{" "}
                      {popularBlog?.content?.reading_time_in_minutes} mins read
                    </p>
                    <div className="blog-author flex items-center !mb-3">
                      <img
                        alt={popularBlog?.content?.author}
                        src={popularBlog?.content?.author_img?.filename}
                        className="!w-10 !h-10 rounded-[50%] object-cover"
                        width="40"
                        height="40"
                      />
                      <div className="author-info !pl-4">
                        <h3 className="md:!text-lg !text-base font-graphik text-[#00dfb8] font-semibold">
                          <Link
                            className="font-semibold"
                            href={popularBlog?.content?.author_linkedIn?.url}
                            title={`Posts by ${popularBlog?.content?.author}`}
                          >
                            {popularBlog?.content?.author}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center !py-36">
            <FetchDataSpinner />
          </div>
        )} */}
      </div>

      <div className="container md:w-[94%] w-full mx-auto">
        <div className="flex sxl:flex-row flex-col-reverse !mt-4">
          <div className="blog_category w-full flex flex-nowrap justify-start items-center !overflow-auto whitespace-nowrap !mb-4">
            <div>
              <button
                className={`Blog_category_head transition duration-600 ease-in-out lg:!px-5 px-4 !py-2 !rounded-[4px] cursor-pointer ${
                  blogCategory === ""
                    ? "bg-[#00DDB9] text-white"
                    : "hover:!text-[#00b6cf]"
                }`}
                onClick={() => setBlogCategory("")}
              >
                <p className="text-[15px] lg:text-[18px]">All</p>
              </button>
              <button
                className={`Blog_category_head ease-in-out duration-300 lg:!px-3 px-2 !py-2 cursor-pointer !rounded-[4px] ${
                  blogCategory === "Product Engineering"
                    ? "bg-[#00DDB9] text-white"
                    : "hover:!text-[#00b6cf]"
                }`}
                onClick={() => setBlogCategory("Product Engineering")}
              >
                <p className="text-[15px] lg:text-[18px]">
                  Product Engineering
                </p>
              </button>
              <button
                className={`Blog_category_head ease-in-out duration-300 lg:!px-3 px-2 !py-2 cursor-pointer !rounded-[4px] ${
                  blogCategory === "Cloud DevOps and Data"
                    ? "bg-[#00DDB9] text-white"
                    : "hover:!text-[#00b6cf]"
                }`}
                onClick={() => setBlogCategory("Cloud DevOps and Data")}
              >
                <p className="text-[15px] lg:text-[18px]">
                  Cloud, DevOps and Data
                </p>
              </button>
              <button
                className={`Blog_category_head ease-in-out duration-300 lg:!px-3 px-2 !py-2 cursor-pointer !rounded-[4px] ${
                  blogCategory === "Technology Practices"
                    ? "bg-[#00DDB9] text-white"
                    : "hover:!text-[#00b6cf]"
                }`}
                onClick={() => setBlogCategory("Technology Practices")}
              >
                <p className="text-[15px] lg:text-[18px]">
                  Technology Practices
                </p>
              </button>
              <button
                className={`Blog_category_head ease-in-out duration-300 lg:!px-3 px-2 !py-2 cursor-pointer !rounded-[4px] ${
                  blogCategory === "News & Insights"
                    ? "bg-[#00DDB9] text-white"
                    : "hover:!text-[#00b6cf]"
                }`}
                onClick={() => setBlogCategory("News & Insights")}
              >
                <p className="text-[15px] lg:text-[18px]">News & Insights</p>
              </button>
            </div>
          </div>
          <div className="w-full sxl:w-2/6">
            <form className="md:pb-0 !pb-4" onSubmit={handleSubmit}>
              <div className="find-blog-search-box border-[#00DDB9] border-[1px]">
                <div className="w-full inline-flex relative flex-wrap items-center justify-end">
                  <input
                    type="submit"
                    className="w-auto !mr-2 mt-[2px] blog-search-btn btn-search font-semibold text-base !text-white border !cursor-pointer
                     hover:border-[#00dfb8] focus:ring focus:outline-none focus:border-[#00dfb8] focus:!ring-[#00C4C8] active:border-[#00dfb8] absolute bg-gradient-to-r from-[#00C4C8] to-[#00DDB9]"
                    value="SEARCH"
                  />
                  <div className="w-full">
                    <input
                      type="text"
                      id="serachValue"
                      value={searchQuery}
                      className="text-[1rem] p-3 !pr-[110px] leading-4 focus:outline-none w-full"
                      placeholder="What are you looking for?"
                      autoComplete="off"
                      onChange={(e) => setSearchQuery(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          className={`grid ${
            isLoading || !blogDataPerPage?.length
              ? "grid-cols-1"
              : "xl:grid-cols-3 md:grid-cols-2 grid-cols-1"
          } gap-[2rem]`}
        >
          {isLoading ? (
            <div className="flex align-middle justify-center p-28">
              <FetchDataSpinner />
            </div>
          ) : blogDataPerPage?.length ? (
            blogDataPerPage.map(({ slug, name, content }, index) => (
              <div
                key={index}
                className="border-[1px] border-[#80808038] rounded-[30px] sec9_data_style blog_flex_30"
              >
                <Link
                  as={`/blog/${slug}`}
                  href={`/blog/[slug]`}
                  prefetch={true}
                >
                  <div className="sec9_img1">
                    <Image
                      decoding="async"
                      loading="lazy"
                      className="rounded-[30px]"
                      src={
                        content?.mobile_banner?.filename ||
                        content?.Image?.filename
                      }
                      alt={
                        content?.mobile_banner?.alt ||
                        content?.Image?.alt ||
                        "Blog List banner"
                      }
                      width="450"
                      height="230"
                    />
                  </div>
                  <div className="pt-[1rem] px-[1rem] pb-[1.5rem] sec9_box_home blog-hover">
                    <div className="sec9_txt1 border-b-[1px] border-[#80808038] py-[1rem]">
                      <p className="entry-title default-max-width aspect-[518/116] ">
                        {name}
                      </p>
                    </div>

                    <div className="sec9_txt2 mt-[1.5rem]">
                      <p className="publish_date">
                        {content?.PublishedDate || "DD MM, YYYY"}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : searchQuery.length > 0 ? (
            <div className="home_sec2_txt4 !py-24 !block">
              <p className="!text-[24px]">
                No data match with your search result
              </p>
            </div>
          ) : (
            <div className="flex align-middle justify-center p-28">
              <FetchDataSpinner />
            </div>
          )}
        </div>

        {isLoading ? (
          ""
        ) : blogDataPerPage?.length ? (
          <div className="flex justify-center my-[2rem]">
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
                length: Math.ceil(totalBlog / ITEMS_PER_PAGE),
              }).map((_, index) => (
                <li
                  key={index}
                  className={`h-[40px] w-[40px] rounded-[50%]  font-[700] mr-[1rem] mb-[0.5rem] flex items-center justify-center cursor-pointer ${
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
                  currentPage === Math.ceil(totalBlog / ITEMS_PER_PAGE)
                    ? "!opacity-50 !cursor-not-allowed"
                    : ""
                }`}
                onClick={() => {
                  if (currentPage < Math.ceil(totalBlog / ITEMS_PER_PAGE)) {
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

export default Blog;
