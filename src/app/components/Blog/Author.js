"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import { getblogSpecificAuthor } from "../lib/getblog";
import { usePathname } from 'next/navigation'
import Image from "next/image";
import {
  blogAuthor,
  convertParamsToString,
  formattedDate,
} from "../lib/commonFunction";

const Author = ({ authorName }) => {
  // const params = useParams()
  const path = usePathname()
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
    <section className="md:pt-[8rem] pt-[6rem] px-[16px]">
      <div className="container md:w-[94%] blog !mx-auto">
        <div>
          <div
            className="w-full inline-flex flex-wrap items-center mb-3"
            aria-label="Breadcrumb"
          >
            <span className="blog-navigation">
              <Link href="/">Brilworks</Link>
            </span>
            <span className="self-center md:mx-2 mx-1 mt-[2px]">
              <Image
                className="black_aerrow alignnone !w-[20px] size-full"
                src="/images/black_aerrow-1.png"
                alt="arrow"
                width="20"
                height="10"
              />
            </span>
            {path.includes("blog") && <> <span className="blog-navigation">
             
              <Link href="/blog">Blog</Link>
            </span>
            <span className="self-center md:mx-2 mx-1 mt-[2px]">
              <Image
                className="black_aerrow alignnone !w-[20px] size-full"
                src="/images/black_aerrow-1.png"
                alt="arrow"
                width="20"
                height="10"
              />
            </span> </>} 
            <span className="blog-navigation">
              <Link href={`/blog/author/${authorName}`}>
                {convertParamsToString(authorName)}
              </Link>
            </span>
          </div>
        </div>
        <div className="bg-themeLight lg:p-6 p-4 flex xl:flex-row flex-col lg:gap-8">
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
            <h2 className="font-bold md:text-[28px] text-xl md:mb-2 mb-1">
              {author?.name}
            </h2>
            <p className="md:text-[22px] lg:w-[90%] text-base">
              {author?.authorPageDesc || author?.authorDesc}
            </p>
            <div className="bg-[#0966C3] hover:bg-[#09509b] w-[86px] h-[30px] mt-2 md:mt-3 flex items-center justify-center cursor-pointer">
              <Link href={author?.authorLinkedIn} target="_blank">
                <Image
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

      <div className="container md:w-[94%] w-full mx-auto">
        <div className="flex sxl:flex-row flex-col-reverse !mt-4">
          <div className="blog_category w-full flex flex-nowrap justify-start items-center !overflow-auto whitespace-nowrap !mb-4">
            <div>
              <button
                className={`Blog_category_head transition duration-600 ease-in-out lg:!px-5 px-4 !py-2 !rounded-[4px] cursor-pointer ${
                  blogCategory === ""
                    ? "bg-themeColor text-white"
                    : "hover:!text-themeColor"
                }`}
                onClick={() => setBlogCategory("")}
              >
                <p className="text-[15px] lg:text-[18px]">All</p>
              </button>
              <button
                className={`Blog_category_head ease-in-out duration-300 lg:!px-3 px-2 !py-2 cursor-pointer !rounded-[4px] ${
                  blogCategory === "Product Engineering"
                    ? "bg-themeColor text-white"
                    : "hover:!text-themeColor"
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
                    ? "bg-themeColor text-white"
                    : "hover:!text-themeColor"
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
                    ? "bg-themeColor text-white"
                    : "hover:!text-themeColor"
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
                    ? "bg-themeColor text-white"
                    : "hover:!text-themeColor"
                }`}
                onClick={() => setBlogCategory("News & Insights")}
              >
                <p className="text-[15px] lg:text-[18px]">News & Insights</p>
              </button>
            </div>
          </div>
          <div className="w-full sxl:w-2/6">
            <form
              className="md:pb-0 !pb-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="find-blog-search-box border-themeColor border-[1px]">
                <div className="w-full inline-flex relative flex-wrap items-center justify-end">
                  <input
                    type="submit"
                    className="w-auto !mr-2 mt-[2px] blog-search-btn btn-search font-semibold text-base !text-white border !cursor-pointer
                     hover:border-themeColor focus:ring focus:outline-none focus:border-themeColor focus:!ring-themeColor active:border-themeColor absolute bg-themeColor"
                    value="Search"
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
            <div className="home_sec2_txt4 !py-24 !block">
              <p className="!text-[24px]">
                No data match with your search result
              </p>
            </div>
          ) : (
            <>
              {blogCategory ? (
                <p className="text-xl text-center py-28">No data found.</p>
              ) : (
                <div className="flex align-middle justify-center p-28">
                  <FetchDataSpinner />
                </div>
              )}
            </>
          )}
        </div>

        {isLoading ? (
          ""
        ) : blogDataPerPage?.length ? (
          <div className="flex justify-center py-[2rem]">
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

export default Author;
