"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Search, Calendar, ArrowRight } from "lucide-react";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import Image from "next/image";
import {
  getblogData,
  getLatestBlogs,
  getBlogCategoryCounts,
} from "../lib/getblog";
import { formatSrcUrl, formattedDate } from "../lib/commonFunction";
import { usePathname, useRouter } from "next/navigation";
import Heading from "../HTMLComponents/Heading";
import SubscribeNewsLetterForm from "./SubscribeNewsLetterForm";
import { blogSubCategories } from "../lib/constants";
import "../../styles/ServiceLightTheme.css";

const BLOG_CATEGORIES = [
  { value: "", label: "All" },
  { value: "Product Engineering", label: "Product Engineering" },
  { value: "Cloud DevOps and Data", label: "Cloud, DevOps and Data" },
  { value: "Technology Practices", label: "Technology Practices" },
  { value: "IOT & Embedded", label: "IoT & Embedded" },
  { value: "News & Insights", label: "News & Insights" },
];

const Blog = () => {
  const ITEMS_PER_PAGE = 10;
  const [blogDataPerPage, setBlogDataPerPage] = useState([]);
  const [totalBlog, setTotalBlog] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogCategory, setBlogCategory] = useState("");
  const [blogSubCategory, setBlogSubCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});
  const searchParams = usePathname();
  const router = useRouter();
  const isFirstRun = useRef(true);

  //This function is to statically generate all the link for blogs and paste in constant.js file
  // const fetchAllBlogData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const blogData = await getBlogForSitemap();
  //     console.log(blogData);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const blogData = await getblogData(
        currentPage,
        ITEMS_PER_PAGE,
        blogCategory,
        searchQuery,
        blogSubCategory,
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
    const delayDebounceFn = setTimeout(
      () => {
        fetchData();
        // fetchAllBlogData();
        if (isFirstRun.current) {
          isFirstRun.current = false;
        } else {
          document
            .getElementById("blog-results")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      },
      searchQuery ? 1000 : 0,
    );

    return () => clearTimeout(delayDebounceFn);
  }, [currentPage, blogCategory, blogSubCategory, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [blogCategory, blogSubCategory]);

  useEffect(() => {
    getLatestBlogs(3)
      .then(setRecentBlogs)
      .catch((error) => console.error(error));

    getBlogCategoryCounts(BLOG_CATEGORIES.map((c) => c.value))
      .then(setCategoryCounts)
      .catch((error) => console.error(error));
  }, []);

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

  useEffect(() => {
    let cat = window?.location?.href?.split("=")[1];
    cat ? setBlogCategory(cat?.replaceAll("-", " ")) : setBlogCategory("");
    router.push(`/blog`);
  }, [searchParams]);

  return (
    <>
      <div className="blog-listing-section">
        <section
          className="relative overflow-hidden svc-hero-bg"
          style={{ padding: "120px 0 60px" }}
        >
          <div className="container max-w-[1280px] main-section-padding mx-auto">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6 text-[12px] font-semibold uppercase"
              style={{
                background: "#ffffff",
                border: "1px solid #e4eaf1",
                color: "#566678",
                letterSpacing: "0.1em",
                boxShadow: "0 1px 2px rgba(11, 30, 51, 0.05)",
              }}
            >
              Insights / The Brilworks Blog
            </span>
            <Heading
              type="h1"
              className="text-[#0b1e33]"
              text="From the engineering mindset"
            />
            <p
              className="lg:text-2xl md:text-xl text-lg !mt-5"
              style={{ color: "#566678", maxWidth: 780 }}
            >
              Practical writing on data platforms, AI agents, and the systems
              underneath them, from the team that builds and ships them.
            </p>

            {recentBlogs?.length > 0 && (
              <div className="!mt-12 max-w-[1180px]">
                <p
                  className="text-xs font-semibold uppercase !mb-4"
                  style={{ color: "#6b7a8a", letterSpacing: "0.1em" }}
                >
                  Recent Posts
                </p>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                  {recentBlogs.map(({ slug, name, content }, index) => (
                    <Link
                      key={slug}
                      as={`/blog/${slug}`}
                      href={`/blog/[slug]`}
                      prefetch={true}
                      className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: "#ffffff",
                        border: "1px solid #e4eaf1",
                        boxShadow: "0 4px 24px rgba(11,30,51,0.06)",
                      }}
                    >
                      <div
                        className="relative w-full aspect-[16/9] overflow-hidden"
                        style={{ background: "#eaf1fb" }}
                      >
                        <Image
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                          src={
                            content?.mobile_banner?.filename
                              ? formatSrcUrl(content?.mobile_banner?.filename)
                              : "/images/not-found-image.webp"
                          }
                          alt={
                            content?.mobile_banner?.alt ||
                            content?.Image?.alt ||
                            `Recent-blog-${index + 1}`
                          }
                          fill
                          unoptimized
                        />
                      </div>
                      <div className="p-4">
                        {content?.Category && (
                          <span
                            className="inline-block text-[11px] font-semibold uppercase !mb-2"
                            style={{
                              color: "#2f6bff",
                              letterSpacing: "0.06em",
                            }}
                          >
                            {content.Category}
                          </span>
                        )}
                        <p
                          className="text-[15px] font-semibold leading-snug line-clamp-2 !mb-3 transition-colors group-hover:!text-[#2f6bff]"
                          style={{ color: "#0b1e33" }}
                        >
                          {name}
                        </p>
                        <div
                          className="flex items-center gap-1.5 text-xs"
                          style={{ color: "#6b7a8a" }}
                        >
                          <Calendar size={13} />
                          {content.Published
                            ? formattedDate(content?.Published)
                            : content.PublishedDate || "DD MM, YYYY"}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      <SubscribeNewsLetterForm />
      <div
        id="blog-results"
        className="container max-w-[1280px] main-section-padding xl:py-[60px] md:py-10 py-5 mx-auto"
        style={{ scrollMarginTop: "100px" }}
      >
        {/* Categories */}
        <div className="flex flex-nowrap justify-start items-center !overflow-auto whitespace-nowrap !mb-6 blog_category">
          <div className="flex items-center gap-2">
            {BLOG_CATEGORIES.map(({ value, label }) => {
              const isActive = blogCategory === value;
              const count = categoryCounts?.[value || "All"];
              return (
                <button
                  key={label}
                  className="flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap rounded-full px-4 py-2.5 transition-all duration-200 cursor-pointer"
                  style={{
                    background: isActive ? "#2f6bff" : "#ffffff",
                    color: isActive ? "#ffffff" : "#566678",
                    border: `1px solid ${isActive ? "#2f6bff" : "#e4eaf1"}`,
                    boxShadow: isActive
                      ? "0 4px 14px rgba(47,107,255,0.25)"
                      : "0 1px 2px rgba(11,30,51,0.04)",
                  }}
                  onClick={() => setBlogCategory(value)}
                >
                  {label}
                  {typeof count === "number" && (
                    <span
                      className="text-[11px] font-bold rounded-full px-[7px] py-[1px]"
                      style={{
                        background: isActive
                          ? "rgba(255,255,255,0.2)"
                          : "#f1f5fb",
                        color: isActive ? "#ffffff" : "#6b7a8a",
                      }}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filters: search + subcategory */}
        <div
          className="rounded-2xl !mb-2"
          style={{
            background: "#f7f9fc",
            border: "1px solid #e4eaf1",
            padding: "20px",
          }}
        >
          <form className="!mb-4" onSubmit={(e) => e.preventDefault()}>
            <div className="relative w-full">
              <Search
                size={20}
                className="absolute top-1/2 transform -translate-y-1/2 left-4"
                style={{ color: "#6b7a8a" }}
              />
              <input
                id="user-search"
                className="w-full font-medium rounded-xl py-3.5 !pl-12 pr-4 text-base appearance-none focus:outline-none transition-colors"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e4eaf1",
                  color: "#0b1e33",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#2f6bff")}
                onBlur={(e) => (e.target.style.borderColor = "#e4eaf1")}
                value={searchQuery}
                type="search"
                placeholder="Search articles by title..."
                autoComplete="off"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>

          <p
            className="text-xs font-semibold uppercase !mb-3"
            style={{ color: "#6b7a8a", letterSpacing: "0.08em" }}
          >
            Browse by Subcategory
          </p>
          <div className="flex flex-nowrap justify-start items-center !overflow-auto whitespace-nowrap blog_category">
            <div className="flex items-center gap-2">
              <button
                className="text-[13px] font-medium whitespace-nowrap rounded-full px-3.5 py-2 transition-all duration-200 cursor-pointer"
                style={{
                  background: blogSubCategory === "" ? "#0b1e33" : "#ffffff",
                  color: blogSubCategory === "" ? "#ffffff" : "#566678",
                  border: `1px solid ${
                    blogSubCategory === "" ? "#0b1e33" : "#e4eaf1"
                  }`,
                }}
                onClick={() => setBlogSubCategory("")}
              >
                All
              </button>
              {blogSubCategories?.map(({ key, value }) => {
                const isActive = blogSubCategory === value;
                return (
                  <button
                    key={value}
                    className="text-[13px] font-medium whitespace-nowrap rounded-full px-3.5 py-2 transition-all duration-200 cursor-pointer"
                    style={{
                      background: isActive ? "#0b1e33" : "#ffffff",
                      color: isActive ? "#ffffff" : "#566678",
                      border: `1px solid ${isActive ? "#0b1e33" : "#e4eaf1"}`,
                    }}
                    onClick={() => setBlogSubCategory(value)}
                  >
                    {key}
                  </button>
                );
              })}
            </div>
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
              <p className="md:!text-2xl !text-lg text-center">
                No data match with your search result.
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-center py-20 md:text-2xl text-lg">
              No Blog Found.
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
                ),
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

export default Blog;
