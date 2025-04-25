"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import Image from "next/image";
import { getblogData } from "../lib/getblog";
import { formattedDate } from "../lib/commonFunction";
import { usePathname, useRouter } from "next/navigation";
import Heading from "../HTMLComponents/Heading";
import SubscribeNewsLetterForm from "./SubscribeNewsLetterForm";

const Blog = () => {
  const ITEMS_PER_PAGE = 10;
  const [blogDataPerPage, setBlogDataPerPage] = useState([]);
  const [totalBlog, setTotalBlog] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogCategory, setBlogCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = usePathname();
  const router = useRouter();

  //This function is to statically generate all the link for blogs and paste in constant.js file
  // const staticBlogList = blogDataPerPage.map((data) => {
  //   return {
  //     name: data.name,
  //     loc: `https://www.brilworks.com/${data.full_slug}/`,
  //     lastmod: `${data.published_at}`,
  //   };
  // });

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
    }, 300);
  };
  useEffect(() => {
    const delayDebounceFn = setTimeout(
      () => {
        fetchData();
        window.scrollTo({ top: 0 });
      },
      searchQuery ? 1000 : 0
    );

    return () => clearTimeout(delayDebounceFn);
  }, [currentPage, blogCategory, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [blogCategory]);

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
        <div className="banner-layer-dark h-full min-h-[600px] md:max-h-[700px] max-h-full">
          <div className="container max-w-[1280px] main-section-padding !pt-24 mx-auto">
            <div className="flex flex-col items-start justify-center h-full min-h-[500px] md:max-h-[700px] max-h-full">
              <p className="text-colorWhite uppercase md:text-2xl text-xl md:!mb-7.5 !mb-5">
                We Write
              </p>
              <Heading
                type="h1"
                className="text-white"
                text="Brilworks Blogs"
              />
              <p className="text-white lg:text-2xl md:text-xl text-lg !mt-5">
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
        </div>
      </div>
      <SubscribeNewsLetterForm />

      <div className="container max-w-[1280px] main-section-padding xl:py-[60px] md:py-10 py-5 mx-auto">
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
                          ? content?.mobile_banner?.filename
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
                          ? content?.mobile_banner?.filename
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

export default Blog;
