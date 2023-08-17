/* eslint-disable @next/next/no-img-element */
"use client";
import StoryblokClient from "storyblok-js-client";
import parse from "html-react-parser";
import "./Blogstyle.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import BlogContactForm from "./Blog/BlogContactForm";
import { useMediaQuery } from "react-responsive";
import FetchDataSpinner from "./Homepage/FetchDataSpinner";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

const Article = ({ blok }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [blogData, setBlogData] = useState(null);
  const [headings, setHeadings] = useState([]);

  const blogTableOfContent = blok?.content;

  useEffect(() => {
    Storyblok.get("cdn/stories/", {
      starts_with: "blogs-list/",
      per_page: 3,
      version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    })
      .then((response) => {
        setBlogData(response.data?.stories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(blogTableOfContent, "text/html");
    const headings = Array.from(doc.querySelectorAll("h2")).map((heading) => {
      const level = parseInt(heading.tagName.slice(1), 10);
      const text = heading.textContent;
      return { level, text };
    });
    setHeadings(headings);
  }, [blogTableOfContent]);

  useEffect(() => {
    // Add temporary IDs to the headings for smooth scrolling
    const headings = document.querySelectorAll("h2");
    headings.forEach((heading, index) => {
      heading.id = `temp-section-${index}`;
    });
  }, []);

  function handleTableOfContentLinkClick(event) {
    event.preventDefault();

    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <section className="mt-[6rem] mx-[15px] blog-inner" id="scroll-win">
        <div className="md:w-[88%] mx-auto w-full">
          <img
            className="md:rounded-[30px] rounded-[15px]"
            alt={blok?.image?.alt}
            src={`${
              isMobile
                ? blok?.mobile_banner?.filename || blok?.image?.filename
                : blok?.image?.filename
            }`}
          />
        </div>

        <div className="2xl:w-[88%] w-[98%] mx-auto">
          <div className="lg:flex block gap-[4rem]">
            {isMobile ? null : (
              <div className="basis-[25%] lg:sticky static h-fit top-0 blog-left py-[4rem] ">
                <div
                  className={`${
                    headings?.length
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
                    <ul>
                      {headings?.length ? (
                        headings.map((heading, index) => (
                          <li key={index}>
                            <Link
                              href={`#temp-section-${index}`}
                              onClick={handleTableOfContentLinkClick}
                            >
                              {heading.text}
                            </Link>
                            {heading.subheadings &&
                              renderTableOfContents(heading?.subheadings)}
                          </li>
                        ))
                      ) : (
                        <div className="flex align-middle justify-center">
                          <FetchDataSpinner />
                        </div>
                      )}
                    </ul>
                    {/* {parse(blok?.table_content)} */}
                  </nav>
                </div>
              </div>
            )}

            <div className="basis-[50%]">
              <div className="service_sec3">
                <div className="home_sec2_txt4 blog-cat mt-[10px]">
                  <p className="p-0"> {blok?.subtitle}</p>
                </div>
                <div className="home_sec2_txt3 pt-[2.5rem]">
                  <h1 className="entry-title default-max-width md:!text-[3rem]">
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
                          <p>{content?.PublishedDate}</p>
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
