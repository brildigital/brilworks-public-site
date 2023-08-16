"use client";
import Link from "next/link";
import StoryblokClient from "storyblok-js-client";
import { BlogText } from "./BigText";
import { useEffect, useState } from "react";
import FetchDataSpinner from "./FetchDataSpinner";

const Storyblok = new StoryblokClient({
  accessToken: process.env.accessToken,
});

const Blogs = () => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    Storyblok.get("cdn/stories/", {
      // starts_with: "blog/",       // If want to fetch data from blogs
      starts_with: "blogs-list/",
      per_page: 3,
      version: "draft" || "published",
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
      <BlogText />
      <div className="w-[90%] blog-home mx-auto">
        {blogData?.length ? (
          blogData.map(({ slug, name, content }, index) => (
            <div key={index} className="blog-box overflow-hidden">
              <Link as={`/blog/${slug}`} href={`/blog/[slug]`}>
                <img
                  src={content?.Image?.filename}
                  alt={content?.Image?.alt}
                  className="vc_gitem-zone-img rounded-[20px]"
                />
                <div className="p-[10px]">
                  <h4 className="xl:text-[24px] mb-[10px] leading-8">{name}</h4>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="flex align-middle justify-center">
            <FetchDataSpinner />
          </div>
        )}
      </div>
      {blogData?.length ? (
        <Link
          href="/blog"
          className="flex items-center sm:justify-center justify-start gap-[20px] about_btn transition pt-[32px] px-[16px]"
        >
          <div className="about_txt">
            <Link href="/blog" className="text-[21px]">
              Read More
            </Link>
          </div>
          <div className="aerrow relative">
            <img
              decoding="async"
              loading="lazy"
              className="black_aerrow alignnone wp-image-28 size-full"
              src="/images/black_aerrow-1.png"
              alt="arrow"
              width="46"
              height="18"
            />
            <img
              decoding="async"
              loading="lazy"
              className="gradiant_aerrow alignnone wp-image-29 size-full"
              src="/images/arrow-gradiant.png"
              alt="arrow"
              width="46"
              height="18"
            />
          </div>
        </Link>
      ) : null}
    </>
  );
};

export default Blogs;
