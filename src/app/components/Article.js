/* eslint-disable @next/next/no-img-element */
"use client";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { memo, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import FetchDataSpinner from "./Homepage/FetchDataSpinner";
import { getblogData } from "./lib/getblog";
import { usePathname } from "next/navigation";
import { notNewTabRedirect } from "./lib/constants";
import { blogAuthor, formattedDate } from "./lib/commonFunction";
import BlogFAQ from "./Blog/BlogFAQ";
// import {
//   ContentSkeleton,
//   TableOfContentSkeleton,
// } from "./Blog/ArticleSkeleton";

const BlogContactForm = dynamic(() => import("./Blog/BlogContactForm"));
const Tooltip = dynamic(() => import("./Blog/Tooltip"));

const Article = ({ blok }) => {
  const pathname = usePathname();
  const targetRef = useRef();
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1080 });
  const [blogData, setBlogData] = useState(null);
  const [headings, setHeadings] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [activeLink, setActiveLink] = useState(null);

  const blogTableOfContent =
    blok?.content +
      blok.Content_1 +
      blok.Content_2 +
      blok.Content_3 +
      `${blok?.FAQ?.length && "<h2>FAQ</h2>"}` || "";

  async function fetchData() {
    try {
      const blogData = await getblogData(1, isTablet ? 3 : 4);
      setBlogData(blogData.storyData);
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect(() => {
  //   const loadingTimeout = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 300);

  //   return () => clearTimeout(loadingTimeout);
  // }, []);

  useEffect(() => {
    fetchData();
  }, []);

  function modifyImagesWithLazyLoading(html) {
    return parse(html, {
      replace: (node, index) => {
        if (node.type === "tag" && node.name === "img") {
          node.attribs.loading = "lazy";
          node.attribs.decoding = "async";
          node.attribs.width = "736";
          node.attribs.height = "200";
          node.attribs.alt = "banner-image";
        }

        if (node.type === "tag" && node.name === "a") {
          if (!notNewTabRedirect.includes(node.attribs.href)) {
            node.attribs.target = "_blank";
          }
          if (
            node.attribs.href &&
            !node.attribs.href.includes("brilworks.com")
          ) {
            node.attribs.rel = "nofollow noopener";
          } else {
            node.attribs.rel = "noopener";
          }
        }
        return node;
      },
    });
  }

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(blogTableOfContent, "text/html");
    const headings = Array.from(doc.querySelectorAll("h2")).map((heading) => {
      const level = parseInt(heading.tagName.slice(1), 10);
      const text = heading.textContent;
      return { level, text };
    });
    setHeadings(headings);
  }, [blogTableOfContent, !isLoading]);

  useEffect(() => {
    // Add temporary IDs to the headings for smooth scrolling
    const headings = document.querySelectorAll("h2");
    headings.forEach((heading, index) => {
      heading.id = `temp-section-${index}`;
    });
  }, [!isLoading]);

  const handleTableOfContentLinkClick = (e, index) => {
    setActiveLink(index);
    e.preventDefault();

    const targetId = e.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headingPositions = headings.map((heading, index) => {
        const targetElement = document.getElementById(`temp-section-${index}`);

        if (targetElement) {
          return {
            id: `${index}`,
            offsetTop: targetElement.offsetTop,
          };
        }
        return null;
      });

      // Find the first heading whose offsetTop is greater than or equal to scrollY
      const activeHeadingIndex = headingPositions.find(
        (position) => position !== null && position.offsetTop >= scrollY
      );
      // Set the active link to the ID of the active heading
      if (activeHeadingIndex) {
        setActiveLink(activeHeadingIndex.id);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  const author = blogAuthor(blok?.BlogAuthor);

  return (
    <div className="blog-main">
      {!blok?.content ? (
        <div className="flex items-center justify-center !py-60">
          <FetchDataSpinner />
        </div>
      ) : (
        <>
          <div className="container max-w-[1280px] mx-auto my-0 !px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="slg:basis-1/5 slg:flex-shrink-0 slg:flex-grow-0 slg:max-w-[20%] !px-4 min-h-[1px] w-full slg:block hidden">
                <div className="sticky top-[110px] !pb-5">
                  {/* {isLoading ? (
                    <TableOfContentSkeleton />
                  ) : ( */}
                    <>
                      <div
                        className={`${
                          headings?.length ? "blog-tab-content" : "!hidden"
                        }`}
                      >
                        <div className="flex justify-between !mb-5">
                          <p>Table of Contents</p>
                        </div>
                        <ul className="max-h-[calc(100vh_-_300px)] overflow-auto">
                          {headings?.length ? (
                            headings.map((heading, index) => (
                              <li key={index}>
                                <Link
                                  href={`#temp-section-${index}`}
                                  onClick={(e) =>
                                    handleTableOfContentLinkClick(e, index)
                                  }
                                  className={`${
                                    index == activeLink ? "page-active" : ""
                                  }`}
                                >
                                  {heading.text}
                                </Link>
                              </li>
                            ))
                          ) : (
                            <div className="flex align-middle justify-center py-16">
                              <FetchDataSpinner />
                            </div>
                          )}
                        </ul>
                      </div>
                      <div className="!mt-7">
                        <div className="flex items-start flex-wrap">
                          <Link
                            target="_blank"
                            href={`http://www.facebook.com/sharer.php?u=https://www.brilworks.com${pathname}`}
                            className="!mr-4"
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              src="/images/fb-share.svg"
                              width="43"
                              unoptimized
                              height="43"
                              alt="Facebook blog share"
                            />
                          </Link>
                          <Link
                            target="_blank"
                            className="!mr-4"
                            href={`https://twitter.com/share?url=https://www.brilworks.com${pathname
                              .split("")
                              .splice(0, pathname.length - 1)
                              .join("")}`}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              src="/images/twitter-share.svg"
                              width="43"
                              unoptimized
                              height="43"
                              alt="Twitter blog share"
                            />
                          </Link>
                          <Link
                            target="_blank"
                            href={`https://www.linkedin.com/sharing/share-offsite/?mini=true&url=https://www.brilworks.com${pathname}`}
                          >
                            <img
                              decoding="async"
                              loading="lazy"
                              src="/images/linkedin-share.svg"
                              width="43"
                              unoptimized
                              height="43"
                              alt="LinkedIn blog share"
                            />
                          </Link>
                        </div>
                      </div>
                    </>
                  {/* )} */}
                </div>
              </div>
              <div className="slg:basis-4/5 slg:flex-shrink-0 slg:flex-grow-0 slg:max-w-[80%] !px-4 min-h-[1px] w-full">
                <div className="blog-inner items-center">
                  <div className="flex -mx-4 md:flex-row flex-col">
                    <div className="md:w-3/4 w-full !float-left">
                      <div className="h-full w-full box-border !px-4">
                        <div className="h-full flex flex-col">
                          <div className="blog_content" ref={targetRef}>
                            
<>{ modifyImagesWithLazyLoading(blok?.content)}</>
                            
                            {blok?.CTA_1 ? (
                              <div
                                className={`${
                                  blok?.CTA_1 ? "blog_content_CTA_1" : ""
                                }`}
                              >
                                {modifyImagesWithLazyLoading(blok?.CTA_1 || "")}
                              </div>
                            ) : (
                              <></>
                            )}

                            {blok?.Content_1 ? (
                              <div className="blog_content_new">
                                {modifyImagesWithLazyLoading(
                                  blok?.Content_1 || ""
                                )}
                              </div>
                            ) : (
                              <></>
                            )}
                            {blok?.CTA_2 ? (
                              <div
                                className={`${
                                  blok?.CTA_2 ? "blog_content_CTA_2" : ""
                                }`}
                              >
                                {modifyImagesWithLazyLoading(blok?.CTA_2 || "")}
                              </div>
                            ) : (
                              <></>
                            )}
                            {blok?.Content_2 ? (
                              <div className="blog_content_new">
                                {modifyImagesWithLazyLoading(
                                  blok?.Content_2 || ""
                                )}
                              </div>
                            ) : (
                              <></>
                            )}
                            {blok?.CTA_3 ? (
                              <div
                                className={`${
                                  blok?.CTA_3?.includes("<img")
                                    ? ""
                                    : "blog_content_CTA_3"
                                }`}
                              >
                                {modifyImagesWithLazyLoading(blok?.CTA_3 || "")}
                              </div>
                            ) : (
                              <></>
                            )}
                            {blok?.Content_3 ? (
                              <div className="blog_content_new">
                                {modifyImagesWithLazyLoading(
                                  blok?.Content_3 || ""
                                )}
                              </div>
                            ) : (
                              <></>
                            )}
                            {blok?.FAQ && blok?.FAQ?.length > 0 ? (
                              <BlogFAQ FAQData={blok?.FAQ} />
                            ) : (
                              <></>
                            )}

                            <Tooltip
                              blogAuthor={author?.name || ""}
                              targetRef={targetRef}
                            />
                          </div>

                          {/* ********************Author Detail******************************/}
                          {author ? (
                            <div className="single-author-bio">
                              <div className="img-blk-wrapper lg:pb-[0rem] !pb-[3rem]">
                                <div className="img-blk">
                                  <img
                                    decoding="async"
                                    loading="lazy"
                                    src={author?.authorImage}
                                    width={96}
                                    height={96}
                                    alt={author?.name || "author-Image"}
                                    className="avatar avatar-96 wp-user-avatar wp-user-avatar-96 alignnone photo"
                                  />
                                </div>
                              </div>
                              <div className="single-author-bio-text">
                                <h3>
                                  <Link
                                    href={
                                      author?.name === "Vikas Singh"
                                        ? "/blog/author/vikas-singh/"
                                        : author?.name === "Hitesh Umaletiya"
                                        ? "/blog/author/hitesh-umaletiya/"
                                        : author?.authorLinkedIn
                                    }
                                    title={`View ${author?.name} website`}
                                    rel="author external"
                                  >
                                    {author?.name}
                                  </Link>
                                </h3>
                                <p className="text-[18px]">
                                  {author?.authorDesc}
                                </p>
                              </div>
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/4 w-full !float-left">
                      <div className="h-full w-full box-border !pr-4 md:!pl-3 !pl-4">
                        <div className="h-full flex flex-col">
                          <BlogContactForm />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto md:!px-3 !px-4">
            <div className="ready_sec !pb-0 !pt-4">
              <div className="ready_img relative">
                <p>
                  <img
                    decoding="async"
                    loading="lazy"
                    className="ready_main hidden md:block alignnone"
                    src="/images/ready.png"
                    width={1408}
                    height={450}
                    alt="get in touch"
                  />
                  <img
                    decoding="async"
                    loading="lazy"
                    className="block md:hidden rounded-[20px] alignnone"
                    src="/images/ready-mobile.webp"
                    width="340"
                    height="720"
                    alt="get in touch"
                  />
                </p>

                <div className="redy_title home_sec2_txt3">
                  <p className="!w-full font-bold">
                    READY TO DEVELOP YOUR SUCCESS STORY WITH US?
                  </p>
                </div>
                <div className="get_touch">
                  <div className="get_flex ml-14">
                    <div className="">
                      <Link href="/contact-us/">
                        <img
                          decoding="async"
                          loading="lazy"
                          className="alignnone"
                          src="/images/right_arrow.png"
                          alt="right arrow"
                          width={10}
                          height={20}
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

          <div className="container mx-auto md:!px-3 !px-4">
            <div className="flex flex-wrap flex-col xl:pb-20 md:pb-14 pb-8">
              <div className="service_sec3">
                <p className="home_sec2_txt3 !pb-0 md:!pt-8 !pt-0">
                  <p className="!ml-0 extra_bold !w-full">
                    You might also like
                  </p>
                </p>
              </div>
              <div
                className={`grid ${
                  isLoading ? "" : "xl:grid-cols-3 md:grid-cols-2"
                } grid-cols-1 items-center gap-[2rem]`}
              >
                {blogData?.length && !isLoading ? (
                  blogData
                    ?.filter(({ slug }) => !pathname?.includes(slug))
                    ?.slice(0, `${isTablet ? 2 : 3}`)
                    ?.map(({ slug, name, content }, index) => (
                      <div
                        key={index}
                        className="border-[1px] border-[#80808038] rounded-[30px] blog_flex_30"
                      >
                        <Link
                          as={`/blog/${slug}`}
                          href={`/blog/[slug]`}
                          target="_blank"
                          rel="external"
                        >
                          <div className="sec9_img1">
                            <Image
                              className="rounded-[30px]"
                              src={
                                content?.mobile_banner?.filename
                                  ? content?.mobile_banner?.filename
                                  : "/images/not-found-image.webp"
                              }
                              alt={
                                content?.mobile_banner?.alt ||
                                `Banner-img-${index}`
                              }
                              width={550}
                              height={283}
                            />
                          </div>
                          <div className="pt-[1rem] px-[1rem] pb-[1.5rem] blog-hover">
                            <div className="border-b-[1px] border-[#80808038] py-[1rem]">
                              <p className="entry-title default-max-width aspect-[518/116]">
                                {name}
                              </p>
                            </div>
                            <div className="sec9_txt2 mt-[1.5rem]">
                              <p className="publish_date">
                                {formattedDate(content?.Published)}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))
                ) : (
                  <div className="flex items-center justify-center p-24">
                    <FetchDataSpinner />
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default memo(Article);
