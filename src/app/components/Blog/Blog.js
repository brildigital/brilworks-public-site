"use client";
import StoryblokClient from "storyblok-js-client";
import Link from "next/link";
import { useEffect, useState } from "react";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import { useMediaQuery } from "react-responsive";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

const ITEMS_PER_PAGE = 9;

const Blog = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [blogData, setBlogData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchBtnClick, setSearchBtnClick] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    const fetchData = async () => {
      try {
        const response = await Storyblok.get("cdn/stories/", {
          starts_with: "blogs-list/",
          per_page: 100,
          version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
        });
        setBlogData(response.data?.stories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const searchBlog = async () => {
      try {
        const response = await Storyblok.get("cdn/stories/", {
          starts_with: "blog/",
          per_page: 100,
          version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
        });

        const filteredData = response.data?.stories.filter(
          (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.content &&
              item.content.content
                .toLowerCase()
                .includes(searchQuery.toLowerCase()))
        );

        setSearchResults(filteredData);
        setSearchBtnClick(false);
      } catch (error) {
        console.log(error);
      }
    };

    searchBlog().then(() => setIsLoading(false));
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
            <form className="md:pb-0 pb-12" onSubmit={handleSearchSubmit}>
              <div class="find-blog-search-box border-[#00DDB9] border-[1px]">
                <div class="w-full flex relative flex-wrap items-stretch">
                  <input
                    type="submit"
                    className="w-auto right-[1rem] !left-[unset] top-[18%] btn btn-search btn-primary bor border-[1px]
                     hover:border-[#00dfb8] focus:ring focus:outline-none focus:border-[#00dfb8] focus:!ring-[#00C4C8] active:border-[#00dfb8] 
                     text-uppercase text-sm absolute bg-gradient-to-r from-[#00C4C8] to-[#00DDB9] font-medium border-[#00dfb8]"
                    value="search"
                  />
                  <div class="form-outline w-full">
                    <input
                      type="text"
                      id="serachValue"
                      value={searchQuery}
                      className="text-[1rem] p-3 !pr-[110px] leading-4 focus:outline-none w-full"
                      placeholder="What are you looking for?"
                      autoComplete="off"
                      onChange={(e) => setSearchQuery(e.target.value)}
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
                (searchBtnClick ? searchCurrentItems : currentItems).map(
                  ({ slug, name, content }, index) => (
                    <div
                      key={index}
                      className="border-[1px] border-[#80808038] rounded-[30px] sec9_data_style blog_flex_30"
                    >
                      <Link as={`/blog/${slug}`} href={`/blog/[slug]`}>
                        <div className="sec9_img1">
                          <img
                            decoding="async"
                            loading="lazy"
                            className="rounded-[20px]"
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
                            <p className="entry-title default-max-width aspect-[518/116]">
                              {name}
                            </p>
                          </div>

                          <div className="sec9_txt2 mt-[1.5rem]">
                            <p>{content?.PublishedDate || "DD MM, YYYY"}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                )
              )}
            </div>
            <div className="flex justify-center mt-[2rem]">
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
