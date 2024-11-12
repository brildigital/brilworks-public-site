"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import Image from "next/image";
import { getblogData } from "../lib/getblog";
import { formattedDate } from "../lib/commonFunction";
import { usePathname, useRouter } from "next/navigation";

const Blog = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1080 });

  const ITEMS_PER_PAGE = isTablet ? 8 : 9;
  const [blogDataPerPage, setBlogDataPerPage] = useState([]);
  const [totalBlog, setTotalBlog] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogCategory, setBlogCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = usePathname();
  const router = useRouter();

  //This function is to statically generate all the link for blogs and paste in constant.js file
  const staticBlogList = blogDataPerPage.map((data) => {
    return {
      name: data.name,
      loc: `https://www.brilworks.com/${data.full_slug}/`,
      lastmod: `${data.published_at}`,
    };
  });

  console.log(staticBlogList);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const blogData = await getblogData(
        2 || currentPage,
        100 || ITEMS_PER_PAGE,
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

  const getPageNumbers = () => {
    const pages = [];
    for (let i = -2; i <= 2; i++) {
      const page = currentPage + i;
      if (page > 0 && page <= Math.ceil(totalBlog / ITEMS_PER_PAGE)) {
        pages.push(page);
      }
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  useEffect(() => {
    let cat = window?.location?.href?.split("=")[1];
    cat ? setBlogCategory(cat?.replaceAll("-", " ")) : setBlogCategory("");
    router.push(`/blog`);
  }, [searchParams]);

  return (
    <section className="md:mt-[8rem] mt-[6rem] px-[16px] !scroll-[unset]">
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
                    <p className="md:!text-[19px] !text-[18px] !mb-3">
                      {parse(popularBlog?.content?.Quick_Summary)
                        .split(" ")
                        .splice(0, 20)
                        .join(" ")}
                      ...
                    </p>
                    <p
                      className="published-date !mb-3 md:text-[19px] !text-bas !text-gray-500"
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
                        <h3 className="md:!text-lg !text-base text-theborder-themeColor font-semibold">
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
                     hover:border-themeColor focus:ring focus:outline-none focus:border-themeColor focus:!ring-[#00C4C8] active:border-themeColor absolute bg-themeColor"
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
            <div className="flex align-middle justify-center md:!py-52 py-28 min-h-[1000px]">
              <FetchDataSpinner />
            </div>
          ) : blogDataPerPage?.length ? (
            blogDataPerPage.map(({ slug, name, content }, index) => (
              <div
                key={name}
                className="border-[1px] border-[#80808038] rounded-[30px] sec9_data_style blog_flex_30"
              >
                <Link
                  as={`/blog/${slug}`}
                  href={`/blog/[slug]`}
                  prefetch={true}
                >
                  <div className="sec9_img1">
                    <Image
                      className="block md:hidden rounded-[30px]"
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
                      quality={40}
                      width="300"
                      height="150"
                      priority={index === 0}
                      sizes="(min-width: 1040px) 42.35vw, (min-width: 640px) 60.84vw, calc(100vw - 30px)"
                      media="(max-width: 767px)"
                    />
                    <Image
                      className="hidden md:block rounded-[30px]"
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
            <div className="flex align-middle justify-center md:!py-52 py-28 h-[100vh]">
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
