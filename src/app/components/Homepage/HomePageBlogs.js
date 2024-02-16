"use client";
import Link from "next/link";
import { BlogText } from "./BigText";
import { useEffect, useState } from "react";
import FetchDataSpinner from "./FetchDataSpinner";
import { scrollEffect } from "../lib/commonfunction";
import Image from "next/image";
import { getbloglist } from "../lib/getblog";
import { useMediaQuery } from "react-responsive";

const HomePageBlogs = () => {
  const [blogData, setBlogData] = useState(null);
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1080 });

  async function fetchData() {
    try {
      const blogData = await getbloglist(!isTablet ? 3 : 2);
      setBlogData(blogData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <>
      <BlogText />
      <div className="container mx-auto w-[90%] blog-home reveal">
        {blogData?.length ? (
          blogData.map(({ slug, name, content }, index) => (
            <div
              key={index}
              className="blog-box overflow-hidden shadow-none hover:shadow-lg"
            >
              <Link as={`/blog/${slug}`} href={`/blog/[slug]`}>
                <Image
                  src={content?.Image?.filename}
                  alt={content?.Image?.alt}
                  className="vc_gitem-zone-img rounded-[20px]"
                  width={550}
                  height={283}
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
          href="/blog/"
          className="flex items-center sm:justify-center justify-start gap-[20px] about_btn transition pt-[32px] px-[16px]"
        >
          <div className="about_txt">
            <p className="change_link text-[21px]">Read More</p>
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

export default HomePageBlogs;
