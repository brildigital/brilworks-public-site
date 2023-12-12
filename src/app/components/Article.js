/* eslint-disable @next/next/no-img-element */
"use client";
import parse from "html-react-parser";
import "./Blogstyle.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import BlogContactForm from "./Blog/BlogContactForm";
import { useMediaQuery } from "react-responsive";
import FetchDataSpinner from "./Homepage/FetchDataSpinner";
import Image from "next/image";
import { getbloglist } from "./lib/getblog";
import { usePathname } from "next/navigation";

const Article = ({ blok }) => {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isBigMobile = useMediaQuery({ maxWidth: 1023 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1080 });
  const [blogData, setBlogData] = useState(null);
  const [headings, setHeadings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeLink, setActiveLink] = useState(null);
  const blogTableOfContent =
    blok?.content + blok.Content_1 + blok.Content_2 + blok.Content_3 || "";

  async function fetchData() {
    try {
      const blogData = await getbloglist(isTablet ? 3 : 4);
      setBlogData(blogData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function modifyImagesWithLazyLoading(html) {
    return parse(html, {
      replace: (node, index) => {
        if (node.type === "tag" && node.name === "img") {
          node.attribs.loading = "lazy";
          node.attribs.decoding = "async";
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

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className="md:mt-[9rem] mt-[6rem] blog-main">
      <div className="container max-w-[1280px] mx-auto my-0 !px-4 blog-initial">
        <div className="flex flex-wrap -mx-4">
          <div className="sxl:basis-3/4 sxl:flex-shrink-0 sxl:flex-grow-0 sxl:max-w-[75%] sxl:ml-[20%] sxl:mb-6 mb-4 !px-4 min-h-[1px] w-full">
            <div className="slg:w-[calc(100%_-_170px)]">
              <div
                className="w-full inline-flex flex-wrap items-center mb-3"
                aria-label="Breadcrumb"
              >
                <span className="blog-navigation">
                  <Link title="Brilworks Blog." href="/">
                    Brilworks
                  </Link>
                </span>
                <span className="self-center md:mx-2 mx-1 mt-[2px]">
                  <Image
                    className="black_aerrow alignnone !w-[20px] size-full"
                    src="/images/black_aerrow-1.png"
                    alt="arrow"
                    width="20"
                    height="10"
                  />
                </span>
                <span className="blog-navigation">
                  <Link title="Go to Blog." href="/blog">
                    Blog
                  </Link>
                </span>

                {blok?.category && (
                  <>
                    <span className="self-center md:mx-2 mx-1 mt-[2px]">
                      <Image
                        className="black_aerrow alignnone !w-[20px] size-full"
                        src="/images/black_aerrow-1.png"
                        alt="arrow"
                        width="20"
                        height="10"
                      />
                    </span>
                    <span className="blog-navigation">
                      <Link
                        title="Go to the Web App Development category."
                        href="#"
                      >
                        {blok?.category}
                      </Link>
                    </span>
                  </>
                )}
                <span className="self-center md:mx-2 mx-1 mt-[2px]">
                  <Image
                    className="black_aerrow alignnone !w-[20px] size-full"
                    src="/images/black_aerrow-1.png"
                    alt="arrow"
                    width="20"
                    height="10"
                  />
                </span>
                <span className="font-graphik">{blok?.title}</span>
              </div>
              <h1 className="entry-title default-max-width md:!text-[3rem] !text-[2rem] !font-bold !mb-4">
                {blok?.title}
              </h1>
            </div>
            <div className="slg:w-[calc(100%_-_170px)] flex xl:items-end items-start xl:flex-row flex-col justify-between md:gap-1 gap-2">
              <div className="flex items-center">
                <img
                  decoding="async"
                  loading="lazy"
                  src={blok?.author_img?.filename}
                  width="20"
                  height="20"
                  alt={blok?.author_img?.alt}
                  className="!rounded-full photo md:!w-14 md:!h-14 !w-10 !h-10"
                />
                <div className="pl-[10px] font-graphik">
                  <Link
                    className="md:text-[20px] text-base font-bold"
                    href={`${blok?.author_linkedIn?.url}`}
                    title={`Posts by ${blok?.author}`}
                  >
                    {blok?.author}
                  </Link>
                  <br />
                  <span className="font-graphik">{blok?.PublishedDate}</span>
                </div>
              </div>
              <div className="flex sxl:items-center items-start sxl:flex-row flex-col !text-[16px] pb-1 md:mt-4 md:gap-0 gap-2">
                <div className="flex sxl:items-center items-start md:mr-5 font-graphik">
                  <span className=" !w-5 !h-5 mr-1 ml-[2px]">
                    <Image
                      src="/images/clock_icon.png"
                      width="50"
                      height="50"
                      alt="Clock icon"
                    />
                  </span>
                  {blok?.reading_time_in_minutes} mins read
                </div>
                <div className="flex sxl:items-center items-start font-graphik">
                  <span className="!w-6 !h-6 mr-1">
                    <Image
                      src="/images/calendar_icon.png"
                      width="100"
                      height="100"
                      alt="Calendar icon"
                    />
                  </span>
                  Last updated {blok?.PublishedDate}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="sxl:basis-3/4 sxl:flex-shrink-0 sxl:flex-grow-0 sxl:max-w-[75%] sxl:ml-[20%] !px-4 min-h-[1px] w-full">
            <div className="h-auto relative md:mb-6 mb-4 slg:!w-[calc(100%_-_170px)] overflow-hidden !bg-cover !bg-center">
              <img
                decoding="async"
                loading="lazy"
                className="rounded-[15px] !max-h-[288px] !h-auto !object-cover"
                alt={blok?.image?.alt}
                src={
                  isMobile
                    ? blok?.mobile_banner?.filename
                    : blok?.image?.filename || blok?.mobile_banner?.filename
                }
              />
            </div>
            {blok?.Quick_Summary && (
              <div>
                <div className="post-summary slg:w-[calc(100%_-_170px)] w-full text-left italic">
                  <span className="font-bold text-[#00c4c8]">
                    Quick Summary:-{" "}
                  </span>
                  {blok?.Quick_Summary}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center !p-20">
          <FetchDataSpinner />
        </div>
      ) : (
        <div className="container max-w-[1280px] mx-auto my-0 !px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="slg:basis-1/5 slg:flex-shrink-0 slg:flex-grow-0 slg:max-w-[20%] !px-4 min-h-[1px] w-full slg:block hidden">
              <div className="sticky top-[110px] !pb-5 z-[99]">
                <div
                  className={`${
                    headings?.length
                      ? "rounded-[4px] blog-tab-content"
                      : "!hidden"
                  }`}
                >
                  <div className="flex justify-between !mb-5">
                    <p>Table of Contents</p>
                  </div>
                  <ul className="max-h-[calc(100vh_-_180px)] overflow-auto">
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
                  {/* </nav> */}
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
                        alt="Facebook blog share"
                      />
                    </Link>
                    <Link
                      target="_blank"
                      className="!mr-4"
                      href={`https://twitter.com/share?url=https://www.brilworks.com${pathname}`}
                    >
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/images/twitter-share.svg"
                        alt="Twitter blog share"
                      />
                    </Link>
                    <Link
                      target="_blank"
                      href={`https://in.linkedin.com/share?url=https://www.brilworks.com${pathname}`}
                    >
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/images/linkedin-share.svg"
                        alt="LinkedIn blog share"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="slg:basis-4/5 slg:flex-shrink-0 slg:flex-grow-0 slg:max-w-[80%] !px-4 min-h-[1px] w-full">
              <div className="blog-inner items-center">
                <div className="flex -mx-4 md:flex-row flex-col">
                  <div className="md:w-3/4 w-full !float-left">
                    <div className="h-full w-full box-border !px-4">
                      <div className="h-full flex flex-col">
                        <div className="blog_content post_details_content">
                          {modifyImagesWithLazyLoading(blok?.content)}
                        </div>
                        {blok?.CTA_1 && (
                          <div
                            className={`${
                              blok?.CTA_1 ? "blog_content_CTA_1" : ""
                            }`}
                          >
                            {parse(blok?.CTA_1 || "")}
                          </div>
                        )}

                        {blok?.Content_1 && (
                          <div className="blog_content_new">
                            {parse(blok?.Content_1 || "")}
                          </div>
                        )}
                        {blok?.CTA_2 && (
                          <div
                            className={`${
                              blok?.CTA_2 ? "blog_content_CTA_2" : ""
                            }`}
                          >
                            {parse(blok?.CTA_2 || "")}
                          </div>
                        )}
                        {blok?.Content_2 && (
                          <div className="blog_content_new">
                            {parse(blok?.Content_2 || "")}
                          </div>
                        )}
                        {blok?.CTA_3 && (
                          <div
                            className={`${
                              blok?.CTA_3 ? "blog_content_CTA_3" : ""
                            }`}
                          >
                            {parse(blok?.CTA_3 || "")}
                          </div>
                        )}
                        {blok?.Content_3 && (
                          <div className="blog_content_new">
                            {parse(blok?.Content_3 || "")}
                          </div>
                        )}

                        {/* ********************Author Detail******************************/}
                        <div className="single-author-bio">
                          <div className="img-blk-wrapper lg:pb-[0rem] !pb-[3rem]">
                            <div className="img-blk">
                              <img
                                decoding="async"
                                loading="lazy"
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
                                className="font-graphik"
                                rel="author external"
                              >
                                {blok?.author}
                              </Link>
                            </h3>
                            <p className="text-[18px] font-graphik">
                              {blok?.author_desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/4 w-full !float-left">
                    <div className="h-full w-full box-border !pr-4 !pl-3">
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
      )}

      <div className="md:!mx-10 !mx-4">
        <div className="ready_sec !pb-0">
          <div className="ready_img relative">
            <p>
              <img
                decoding="async"
                loading="lazy"
                className="ready_main web_img alignnone"
                src="/images/ready.png"
                alt="get in touch"
              />
              <img
                decoding="async"
                loading="lazy"
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
                      decoding="async"
                      loading="lazy"
                      className="alignnone"
                      src="/images/right_arrow.png"
                      alt="right arrow"
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

      <div className="md:!mx-10 !mx-4">
        <div className="!mb-12 flex flex-wrap flex-col md:!px-4">
          <div className="service_sec3">
            <p className="home_sec2_txt3">
              <p className="!ml-0 extra_bold !w-full">You might also like</p>
            </p>
          </div>
          <div
            className={`grid ${
              isLoading ? "" : "xl:grid-cols-3 md:grid-cols-2"
            } grid-cols-1 items-center
                    gap-[2rem]`}
          >
            {blogData?.length && !isLoading ? (
              blogData
                .filter(({ slug }) => !pathname?.includes(slug))
                .slice(0, `${isTablet ? 2 : 3}`)
                .map(({ slug, name, content }, index) => (
                  <div
                    key={index}
                    className="border-[1px] border-[#80808038] rounded-[30px] blog_flex_30"
                  >
                    <Link as={`/blog/${slug}`} href={`/blog/[slug]`}>
                      <div className="sec9_img1">
                        <Image
                          className="rounded-[30px]"
                          src={content?.Image?.filename}
                          alt={content?.Image?.alt}
                          width={550}
                          height={283}
                        />
                      </div>
                      <div className="pt-[1rem] px-[1rem] pb-[1.5rem] blog-hover">
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
              <div className="flex items-center justify-center p-24">
                <FetchDataSpinner />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
