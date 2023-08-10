/* eslint-disable @next/next/no-img-element */
"use client";
import StoryblokClient from "storyblok-js-client";
import parse from "html-react-parser";
import "./Blogstyle.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import BlogContactForm from "./Blog/BlogContactForm";
import Head from "next/head";
import { useMediaQuery } from "react-responsive";

const Storyblok = new StoryblokClient({
  accessToken: process.env.accessToken,
});

const Article = ({ blok }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    Storyblok.get("cdn/stories/", {
      starts_with: "blogs-list/",
      per_page: 3,
      version: "draft",
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
      <Head>
        <title>{blok.title}</title>
      </Head>
      <section className="mt-[6rem] mx-[15px] blog-inner" id="scroll-win">
        <div className="w-[88%] mx-auto">
          <img
            className="rounded-[30px]"
            alt={blok?.image?.alt}
            src={blok?.image?.filename}
          />
        </div>

        <div className="2xl:w-[88%] w-[98%] mx-auto">
          <div className="lg:flex block gap-[4rem]">
            {isMobile ? null : (
              <div className="basis-[25%] lg:sticky static h-fit top-0 blog-left py-[4rem] ">
                <div
                  className={`${
                    blok.table_content
                      ? " p-[20px] bg-[#f9f9f9] border-1 border-[#aaa] table !w-auto mb-[1rem] rounded-[4px] relative"
                      : "!hidden"
                  }`}
                >
                  <div className="">
                    <p className="text-[#00dfb8] text-[24px] text-[500]">
                      Table of Contents
                    </p>
                  </div>
                  <nav className="blog-tab-content !py-4 !border-t-[0px] text-[21px] blog-nav">
                    {parse(blok?.table_content)}
                  </nav>
                </div>
              </div>
            )}

            <div className="basis-[50%]">
              <div className="service_sec3">
                <div className="home_sec2_txt4 blog-cat mt-[10px]">
                  <p className="p-0"> {blok?.subtitle}</p>
                </div>
                <div className="home_sec2_txt3 py-[2.5rem]">
                  <h1 className="entry-title default-max-width">
                    {blok?.title}
                  </h1>
                </div>
              </div>
              <div className="blog_content post_details_content ">
                {parse(blok?.content)}
              </div>

              {/* ********************Author Detail******************************/}
              <div className="single-author-bio">
                <div className="img-blk-wrapper lg:pb-[0rem] !pb-[3rem]">
                  <div className="img-blk">
                    <img
                      src={blok?.author_img?.filename}
                      width="96"
                      height="96"
                      alt={blok?.author_img?.alt}
                      className="avatar avatar-96 wp-user-avatar wp-user-avatar-96 alignnone photo"
                    />
                  </div>
                </div>
                <div className="single-author-bio-text">
                  <h3>
                    <Link
                      href={`${blok?.author_linkedIn?.url}`}
                      title={`Visit ${blok?.author} website`}
                      rel="author external"
                    >
                      {blok?.author}
                    </Link>
                  </h3>
                  <p>{blok?.author_desc}</p>
                </div>
              </div>
            </div>

            <div className="basis-[25%]">
              <BlogContactForm />
            </div>

            {/* <div className="text-center md:!w-2/4 lg:w-2/3 w-full"> */}
            {/* <h1 className="title-font blog-title text-left sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {blok.title}
            </h1> */}
            {/* <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium ">
            {blok.subtitle}
          </h1> */}
            {/* <div className="mb-8 leading-relaxed text-justify">
              {parse(blok.content)}
            </div> */}
            {/* </div> */}
          </div>
        </div>

        <div>
          <div className="ready_sec">
            <div className="ready_img relative">
              <p>
                <img
                  className="ready_main web_img alignnone"
                  src="/images/ready.png"
                  alt="get in touch"
                />
                <img
                  className="mobile_img border_redius20 alignnone"
                  src="/images/ready_mobile.jpg"
                  alt="get in touch"
                />
              </p>
              <div className="redy_title home_sec2_txt3">
                <p className="!w-full">
                  READY TO DEVELOP YOUR SUCCESS STORY WITH US?
                </p>
              </div>
              <div className="get_touch">
                <div className="get_flex ml-14">
                  <div className="get_icon">
                    <Link href="/contact-us/">
                      <img
                        className="alignnone"
                        src="/images/right_arrow.png"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="get_text">
                    <p>
                      <Link href="/contact-us/">Get in Touch</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[94%] w-full mx-auto">
          <div className="service_sec3">
            <div className="home_sec2_txt3">
              <p className="!ml-0 extra_bold !w-full">You might also like</p>
            </div>
          </div>

          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-[2rem]">
            {blogData?.length
              ? blogData.map(({ slug, name, content }, index) => (
                  <div
                    key={index}
                    className="border-[1px] border-[#80808038] rounded-[30px] blog_flex_30"
                  >
                    <Link as={`/blog/${slug}`} href={`/blog/[slug]`}>
                      <div className="sec9_img1">
                        <img
                          className="rounded-[20px]"
                          src={content?.Image?.filename}
                          alt={content?.Image?.alt}
                        />
                      </div>
                      <div className="pt-[1rem] px-[1rem] pb-[1.5rem] blog-hover">
                        <div className="sec9_txt1 border-b-[1px] border-[#80808038] py-[1rem]">
                          <p className="entry-title default-max-width aspect-[518/116]">
                            {name}
                          </p>
                        </div>
                        <div className="sec9_txt2 mt-[1.5rem]">
                          <p>
                            <Link as={`/blog/${slug}`} href={`/blog/[slug]`}>
                              {content?.PublishedDate}
                            </Link>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              : null}
          </div>
        </div>
      </section>
    </>
  );
};
export default Article;
