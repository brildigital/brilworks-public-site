"use client";
import Link from "next/link";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import {
  blogCategoryData,
  blogCategoryList,
  getbloglist,
  searchBlog,
  singlePopularBlog,
} from "../lib/getblog";

const Blog = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1080 });
  const ITEMS_PER_PAGE = isTablet ? 8 : 9;
  const [blogData, setBlogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [tagSearchResult, setTagSearchResult] = useState([]);
  const [searchedBlogTags, setSearchedBlogTags] = useState([]);
  const [searchBtnClick, setSearchBtnClick] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryClickName, setCategoryClickName] = useState(null);
  const [categoryClickNameMain, setCategoryClickNameMain] = useState(null);
  const [blogCategoryName, setBlogCategoryName] = useState([]);
  const [categorywiseData, setCategorywiseData] = useState([]);
  const [popularBlog, setPopularBlog] = useState([]);

  const totalItems = blogData?.length || 0;
  const categorywiseTotalItems = categorywiseData?.length || 0;
  const searchTotalItem = searchResults?.length || 0;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);

  const categoryWiseEndIndex = Math.min(
    startIndex + ITEMS_PER_PAGE,
    categorywiseTotalItems
  );

  const searchStartIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const searchEndIndex = Math.min(
    searchStartIndex + ITEMS_PER_PAGE,
    searchTotalItem
  );

  const currentItems = blogData?.slice(startIndex, endIndex) || [];
  const searchCurrentItems =
    searchResults?.slice(searchStartIndex, searchEndIndex) || [];
  const categoryWiseCurrentItems =
    categorywiseData?.slice(startIndex, categoryWiseEndIndex) || [];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage, searchResults]);

  useEffect(() => {
    async function fetchData() {
      try {
        const blogData = await getbloglist(100);
        setBlogData(blogData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  function handleBlogTagclick(query) {
    const filteredDataN = searchResults.filter((item) =>
      item.content?.subtitle.toLowerCase().includes(query?.toLowerCase())
    );
    setTagSearchResult(filteredDataN);
  }

  useEffect(() => {
    handleBlogTagclick(categoryClickName);
  }, [categoryClickName]);

  const handleBlogSearch = async (searchQuery) => {
    try {
      const filteredData = await searchBlog(searchQuery);

      const uniqueSubtitles = new Set();
      const filteredSubtitles = [];

      for (const story of filteredData) {
        const subtitle = story.content?.subtitle;

        if (subtitle && !uniqueSubtitles.has(subtitle)) {
          uniqueSubtitles.add(subtitle);
          filteredSubtitles.push(subtitle);
        }
      }
      setSearchedBlogTags(filteredSubtitles);
      setSearchResults(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCategoryClickNameMain(null);
    if (searchQuery) {
      const delayDebounceFn = setTimeout(() => {
        handleBlogSearch(searchQuery);
      }, 1000);
      return () => clearTimeout(delayDebounceFn);
    } else {
      handleBlogSearch(searchQuery);
      setSearchBtnClick(false);
      setCategoryClickName(null);
    }
  }, [searchQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSearchBtnClick(true);
    setCurrentPage(1);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    async function fetchCategoryList() {
      try {
        const blogcatList = await blogCategoryList();
        setBlogCategoryName(blogcatList);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCategoryList();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    async function fetchCategorywiseData() {
      try {
        const blogcatData = await blogCategoryData(categoryClickNameMain);
        setCategorywiseData(blogcatData);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    fetchCategorywiseData();
  }, [categoryClickNameMain]);

  function handleMainTagClick(tag) {
    setCurrentPage(1);
    if (categoryClickNameMain === tag) {
      setCategoryClickNameMain(null);
    } else {
      setIsLoading(true);
      setCategoryClickNameMain(tag);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const fetchOnePopularBlog = async () => {
      try {
        const blogData = await singlePopularBlog();
        if (blogData.length > 0) {
          setPopularBlog(blogData[0]);
        } else {
          console.error("No data returned from the API.");
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchOnePopularBlog();
  }, []);

  return (
    <section className="md:mt-[8rem]  mt-[6rem] px-[16px]">
      <div className="container !max-w-[1220px] md:w-[94%] blog !px-0">
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
        {popularBlog?.content ? (
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
                    <label className="badge bg-black rounded-xl md:text-sm lg:text-base !text-sm !mb-2">
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
        )}
      </div>

      <div className="md:w-[94%] w-full mx-auto">
        <div className="flex sxl:flex-row flex-col-reverse !mt-4">
          <div className="blog_category w-full flex flex-nowrap justify-start items-center !overflow-auto whitespace-nowrap !mb-4">
            <div>
              {!searchBtnClick && (
                <button
                  className={`Blog_category_head transition duration-600 ease-in-out !px-6 !py-2 min-[320px]:text-[16px] !rounded-[4px] md:text-[21px] cursor-pointer ${
                    categoryClickNameMain === null
                      ? "bg-[#00DDB9] text-white"
                      : "hover:!text-[#00b6cf]"
                  }`}
                  onClick={() => setCategoryClickNameMain(null)}
                >
                  <p className="min-[320px]:text-[15px] md:text-[18px]">All</p>
                </button>
              )}

              {blogCategoryName.length &&
              !searchBtnClick &&
              searchCurrentItems.length
                ? blogCategoryName.map((tag, index) => (
                    <button
                      className={`Blog_category_head ease-in-out duration-300 !px-4 !py-2 min-[320px]:text-[15px] md:text-[18px] cursor-pointer !rounded-[4px] ${
                        categoryClickNameMain === tag
                          ? "bg-[#00DDB9] text-white"
                          : "hover:!text-[#00b6cf]"
                      }`}
                      key={index}
                      onClick={() => handleMainTagClick(tag)}
                    >
                      <p className="min-[320px]:text-[15px] md:text-[18px]">
                        {tag}
                      </p>
                    </button>
                  ))
                : null}
            </div>
          </div>
          <div className="w-full sxl:w-2/6">
            <form className="md:pb-0 pb-4" onSubmit={handleSearchSubmit}>
              <div className="find-blog-search-box border-[#00DDB9] border-[1px]">
                <div className="w-full flex relative flex-wrap items-stretch">
                  <input
                    type="submit"
                    className="w-auto right-[1rem] !left-[unset] top-[15%] btn btn-search font-semibold text-base !text-white border
                     hover:border-[#00dfb8] focus:ring focus:outline-none focus:border-[#00dfb8] focus:!ring-[#00C4C8] active:border-[#00dfb8] absolute bg-gradient-to-r from-[#00C4C8] to-[#00DDB9]"
                    value="SEARCH"
                  />
                  <div className="form-outline w-full">
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
        {isLoading ? (
          <div className="flex align-middle justify-center p-20">
            <FetchDataSpinner />
          </div>
        ) : (
          <>
            {searchedBlogTags.length > 0 && searchBtnClick && (
              <div className="blog_category w-full flex flex-row flex-wrap gap-3 pb-4">
                {searchedBlogTags.map((tag, index) => (
                  <div
                    className={`Blog_category_head  p-2 min-[320px]:text-[16px] md:text-[21px] cursor-pointer !rounded-[4px] border-[#00DDB9] border-[1px]  hover:bg-[#00DDB9] hover:text-white ${
                      categoryClickName === tag ? "bg-[#00DDB9] text-white" : ""
                    }`}
                    key={index}
                    onClick={() =>
                      categoryClickName === tag
                        ? setCategoryClickName(null)
                        : setCategoryClickName(tag)
                    }
                  >
                    <p className="min-[320px]:text-[16px] md:text-[21px]">
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
            )}
            <div
              className={`grid ${
                searchBtnClick && searchCurrentItems.length === 0
                  ? "grid-cols-1"
                  : "xl:grid-cols-3 md:grid-cols-2 grid-cols-1"
              } gap-[2rem]`}
            >
              {searchBtnClick && searchCurrentItems.length === 0 ? (
                <div className="home_sec2_txt4 !p-12 !block">
                  <p className="!text-[24px]">
                    No data match with your search result
                  </p>
                </div>
              ) : (
                (tagSearchResult.length > 0
                  ? tagSearchResult
                  : searchBtnClick
                  ? searchCurrentItems
                  : categoryClickNameMain
                  ? categoryWiseCurrentItems
                  : currentItems
                ).map(({ slug, name, content }, index) => (
                  <div
                    key={index}
                    className="border-[1px] border-[#80808038] rounded-[30px] sec9_data_style blog_flex_30"
                  >
                    <Link as={`/blog/${slug}`} href={`/blog/[slug]`}>
                      <div className="sec9_img1">
                        <img
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
              )}
            </div>
            <div className="flex justify-center mt-[2rem]">
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
                  length: Math.ceil(
                    searchQuery.length
                      ? searchTotalItem / ITEMS_PER_PAGE
                      : categoryClickNameMain
                      ? categorywiseTotalItems / ITEMS_PER_PAGE
                      : totalItems / ITEMS_PER_PAGE
                  ),
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
                    currentPage === Math.ceil(totalItems / ITEMS_PER_PAGE) ||
                    currentPage ===
                      Math.ceil(searchTotalItem / ITEMS_PER_PAGE) ||
                    currentPage ===
                      Math.ceil(categorywiseTotalItems / ITEMS_PER_PAGE)
                      ? "!opacity-50 !cursor-not-allowed"
                      : ""
                  }`}
                  onClick={() => {
                    if (
                      currentPage <
                      Math.ceil(
                        totalItems / ITEMS_PER_PAGE ||
                          Math.ceil(
                            searchTotalItem / ITEMS_PER_PAGE ||
                              Math.ceil(categorywiseTotalItems / ITEMS_PER_PAGE)
                          )
                      )
                    ) {
                      setCurrentPage(currentPage + 1);
                    }
                  }}
                >
                  {"NEXT >"}
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Blog;
