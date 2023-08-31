"use client";
import StoryblokClient from "storyblok-js-client";
import Link from "next/link";
import { useEffect, useState } from "react";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

const ITEMS_PER_PAGE = 9;
const Blog = () => {
  const [blogData, setBlogData] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = blogData?.length || 0;

  // Calculate the starting and ending index for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);

  // Slice the blogData array based on the current page
  const currentItems = blogData?.slice(startIndex, endIndex) || [];

  useEffect(() => {
    // When the page changes, scroll to the top
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  useEffect(() => {
    Storyblok.get("cdn/stories/", {
      starts_with: "blogs-list/",
      per_page: 100,
      version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    })
      .then((response) => {
        setBlogData(response.data?.stories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
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
          <div className="service_sec3">
            <div className="home_sec2_txt3">
              <p className="!ml-0 extra_bold !w-full">LATEST FROM THE TEAM</p>
            </div>
          </div>

          {/* <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2rem]">
            {blogData?.length
              ? blogData.map(({ slug, name, content }, index) => (
                  <div className="border-[1px] border-[#80808038] rounded-[30px] sec9_data_style blog_flex_30">
                    <Link href={`/blog/${slug}`}>
                      <div className="sec9_img1">
                        <img
                          className="rounded-[20px]"
                          src={content?.Image?.filename}
                          alt={content?.Image?.alt}
                        />
                      </div>
                      <div className="pt-[1rem] px-[1rem] pb-[1.5rem] sec9_box_home blog-hover">
                        <div className="sec9_txt1 border-b-[1px] border-[#80808038] py-[1rem]">
                          <p className="entry-title default-max-width aspect-[518/116]">
                            {name}
                          </p>
                        </div>
                        <div className="sec9_txt2 mt-[1.5rem]">
                          <p>
                            <Link href={`/blog/${slug}`}>
                              {content?.PublishedDate}
                            </Link>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              : null}
          </div> */}

          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2rem]">
            {currentItems.map(({ slug, name, content }, index) => (
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
                      src={content?.Image?.filename}
                      alt={content?.Image?.alt}
                    />
                  </div>
                  <div className="pt-[1rem] px-[1rem] pb-[1.5rem] sec9_box_home blog-hover">
                    <div className="sec9_txt1 border-b-[1px] border-[#80808038] py-[1rem]">
                      <p className="entry-title default-max-width aspect-[518/116]">
                        {name}
                      </p>
                    </div>
                    <div className="sec9_txt2 mt-[1.5rem]">
                      <p>{content?.PublishedDate}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-[2rem]">
            <ul className="list-none flex flex-wrap">
              {Array.from({
                length: Math.ceil(totalItems / ITEMS_PER_PAGE),
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
          {!currentItems.length && (
            <div className="flex align-middle justify-center pb-20">
              <FetchDataSpinner />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
