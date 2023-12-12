"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import {
  blogCategoryData,
  blogCategoryList,
  getbloglist,
  searchBlog,
} from "../lib/getblog";

const Blog = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
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

  const totalItems = blogData?.length || 0;
  const searchTotalItem = searchResults?.length || 0;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);

  const searchStartIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const searchEndIndex = Math.min(
    searchStartIndex + ITEMS_PER_PAGE,
    searchTotalItem
  );

  const currentItems = blogData?.slice(startIndex, endIndex) || [];
  const searchCurrentItems =
    searchResults?.slice(searchStartIndex, searchEndIndex) || [];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage, searchQuery]);

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
    async function fetchCategorywiseData() {
      try {
        const blogcatData = await blogCategoryData(categoryClickNameMain);
        setCategorywiseData(blogcatData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCategorywiseData();
  }, [categoryClickNameMain]);

  function handleMainTagClick(tag) {
    if (categoryClickNameMain === tag) {
      setCategoryClickNameMain(null);
      setCurrentPage(1);
    } else {
      setIsLoading(true);
      setCategoryClickNameMain(tag);
      setIsLoading(false);
    }
  }

  return (
    <section className="mt-[6rem] px-[16px]">
      <div className="service_width blog">
        <div className="service_sec3">
          <div className="home_sec2_txt3 text-center">
            <h1>Brilworks Blog</h1>
          </div>
          <div className="home_sec2_txt4">
            <p className="!text-[24px]">
              Stories from the community powering the
              <br />
              internet’s visuals
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-[94%] w-full mx-auto">
        <div className="service_sec3 flex align-middle justify-between items-center flex-wrap flex-col md:flex-row">
          <div className={`home_sec2_txt3 ${isMobile ? "w-full" : null}`}>
            <p className="!ml-0 extra_bold !w-full">LATEST FROM THE TEAM</p>
          </div>
          <div className="md:w-2/6 w-full lg:w-1/4">
            <form
              className="md:pb-0 lg:pb-12 pb-4"
              onSubmit={handleSearchSubmit}
            >
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
            <div
              className={`blog_category w-full flex flex-row flex-wrap gap-3 ${
                searchBtnClick ? "" : "pb-4"
              }`}
            >
              {!searchBtnClick && (
                <button
                  className={`Blog_category_head ease-in-out duration-300 px-8 py-2 min-[320px]:text-[16px] md:text-[21px] cursor-pointer border-[#00DDB9] border-[1px]  hover:!bg-[#00DDB9] hover:!text-white ${
                    categoryClickNameMain === null
                      ? "bg-[#00DDB9] text-white"
                      : ""
                  }`}
                  onClick={() => setCategoryClickNameMain(null)}
                >
                  <p className="min-[320px]:text-[16px] md:text-[21px]">All</p>
                </button>
              )}

              {blogCategoryName.length &&
              !searchBtnClick &&
              searchCurrentItems.length
                ? blogCategoryName.map((tag, index) => (
                    <button
                      className={`Blog_category_head ease-in-out duration-300 p-2 min-[320px]:text-[16px] md:text-[21px] cursor-pointer border-[#00DDB9] border-[1px]  hover:!bg-[#00DDB9] hover:!text-white ${
                        categoryClickNameMain === tag
                          ? "bg-[#00DDB9] text-white"
                          : ""
                      }`}
                      key={index}
                      onClick={() => handleMainTagClick(tag)}
                    >
                      <p className="min-[320px]:text-[16px] md:text-[21px]">
                        {tag}
                      </p>
                    </button>
                  ))
                : null}
            </div>
            {searchedBlogTags.length > 0 && searchBtnClick && (
              <div className="blog_category w-full flex flex-row flex-wrap gap-3 pb-4">
                {searchedBlogTags.map((tag, index) => (
                  <div
                    className={`Blog_category_head  p-2 min-[320px]:text-[16px] md:text-[21px] cursor-pointer border-[#00DDB9] border-[1px]  hover:bg-[#00DDB9] hover:text-white ${
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

            {categoryClickNameMain ? (
              <div
                className={`grid ${
                  categorywiseData.length ? "xl:grid-cols-3 md:grid-cols-2" : ""
                } grid-cols-1 gap-[2rem]`}
              >
                {categorywiseData.length ? (
                  categorywiseData.map(({ slug, name, content }, index) => (
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
                            <p className="entry-title default-max-width aspect-[518/116]">
                              {name}
                            </p>
                          </div>

                          <div className="sec9_txt2 mt-[1.5rem]">
                            <p className="publish_date">
                              {content?.PublishedDate}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="w-full flex items-center justify-center p-8">
                    <FetchDataSpinner />
                  </div>
                )}
              </div>
            ) : (
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
                              searchBtnClick
                                ? content?.mobile_banner?.filename
                                : content?.Image?.filename
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
            )}

            <div className="flex justify-center mt-[2rem]">
              {!categoryClickName && !categoryClickNameMain && (
                <ul className="list-none flex flex-wrap">
                  {Array.from({
                    length: Math.ceil(
                      searchQuery.length
                        ? searchTotalItem / ITEMS_PER_PAGE
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
                </ul>
              )}
            </div>
            {!currentItems.length && !isLoading && !searchBtnClick && (
              <div className="flex align-middle justify-center p-20">
                <FetchDataSpinner />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Blog;
