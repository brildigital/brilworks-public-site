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
  const isMobile = useMediaQuery({ maxWidth: 1023 });
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
    <>
      <section className="flex md:mt-[10rem] mt-[6rem] md:mx-auto align-middle justify-center">
        <div className="2xl:w-[88%] w-[98%] lg:flex block align-middle justify-center mx-[15px]">
          <div className="gap-[1rem] basis-[60%]">
            <div className="w-full inline-flex flex-wrap align-middle mb-4">
              <span className="blog-navigation">
                <Link href="/">Brilworks</Link>
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
                <Link href="/blog">Blog</Link>
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
                    <Link href="#">{blok?.category}</Link>
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
              <span>{blok?.title}</span>
            </div>
            <h1 className="entry-title default-max-width md:!text-[3rem] !text-[2rem] font-bold !font-[unset] !mb-7">
              {blok?.title}
            </h1>
            {blok?.teaser !== blok.title ? (
              <p className="italic text-[20px] !mb-6 leading-7">
                {blok?.teaser}
              </p>
            ) : (
              ""
            )}

            <div className="flex xl:items-end items-start xl:flex-row flex-col justify-between w-full gap-1 mb-10">
              <div className="flex items-start ml-2">
                <img
                  decoding="async"
                  loading="lazy"
                  src={blok?.author_img?.filename}
                  width="20"
                  height="20"
                  alt={blok?.author_img?.alt}
                  className="!rounded-full photo  !w-14 !h-14"
                />
                <div>
                  <Link
                    className="text-[20px] font-bold ml-2"
                    href={`${blok?.author_linkedIn?.url}`}
                    title={`Posts by ${blok?.author}`}
                  >
                    {blok?.author}
                  </Link>
                  <br />
                  <span className="ml-2">{blok.PublishedDate}</span>
                </div>
              </div>
              <div className=" flex xl:flex-row flex-col xl:items-end items-start ml-2 md:mt-0 mt-2 justify-end mr-2 gap-1">
                <div className="flex justify-between align-middle md:mr-2">
                  <span className=" !w-5 !h-5 mr-1 mt-[2px] ml-[2px]">
                    <Image
                      src="/images/clock_icon.png"
                      width="50"
                      height="50"
                    />
                  </span>
                  {blok.reading_time_in_minutes} mins read
                </div>
                <div className="flex justify-between align-middle">
                  <span className="!w-6 !h-6 mr-1">
                    <Image
                      src="/images/calendar_icon.png"
                      width="100"
                      height="100"
                    />
                  </span>
                  Last updated {blok.PublishedDate}
                </div>
              </div>
            </div>
            <div className="w-full mb-10">
              <img
                decoding="async"
                loading="lazy"
                className="md:rounded-[30px] rounded-[15px]"
                alt={blok?.image?.alt}
                src={blok?.mobile_banner?.filename}
              />
            </div>
            {blok.Quick_Summary && (
              <div className="mb-2 text-[20px] text-left font-normal italic leading-9">
                <span className="font-semibold text-[#00c4c8]">
                  Quick Summary:-{" "}
                </span>
                {blok?.Quick_Summary}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-[15px] blog-inner" id="scroll-win">
        {/* <div className="md:w-[60%] mx-auto w-full mt-8">
          <img
            decoding="async"
            loading="lazy"
            className="md:rounded-[30px] rounded-[15px]"
            alt={blok?.image?.alt}
            src={`${
              isMobile
                ? blok?.mobile_banner?.filename || blok?.image?.filename
                : blok?.image?.filename
            }`}
          />
        </div> */}

        <div className="2xl:w-[88%] w-[98%] mx-auto">
          {isLoading ? (
            <div className="flex align-middle justify-center p-24">
              <FetchDataSpinner />
            </div>
          ) : (
            <div className="lg:flex block gap-[1rem]">
              {isMobile ? null : (
                <div className="basis-[20%] h-fit blog-left px-3 top-[6rem] blog_padding">
                  <div
                    className={`${
                      headings?.length
                        ? "!pl-2 !py-2 bg-[#f9f9f9] border-1 !border-[#aaa] table !w-full mb-[1rem] rounded-[4px] table-content"
                        : "!hidden"
                    }`}
                  >
                    <div className="mb-2">
                      <p className="text-[#00dfb8] text-[18px] font-medium !font-[unset]">
                        Table of Contents
                      </p>
                    </div>
                    <nav className="blog-tab-content !py-4 !border-t-[0px] text-[17px] blog-nav overflow-auto max-h-[calc(100vh_-_180px)]">
                      <ul>
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
                      {/* {parse(blok?.table_content)} */}
                    </nav>
                  </div>
                </div>
              )}

              <div className="basis-[60%]">
                {/* <div className="service_sec3">
                  <div className="home_sec2_txt4 blog-cat mt-[10px]">
                    <p className="p-0 !font-[unset]"> {blok?.subtitle}</p>
                  </div>
                  <div className="home_sec2_txt3 pt-[2.5rem]">
                    <h1 className="entry-title default-max-width !text-[2rem]  font-bold !font-[unset]">
                      {blok?.title}
                    </h1>
                  </div>
                </div> */}

                <div className="blog_content post_details_content">
                  {modifyImagesWithLazyLoading(blok?.content)}
                </div>
                <div className={`${blok?.CTA_1 ? "blog_content_CTA_1" : ""}`}>
                  {parse(blok?.CTA_1 || "")}
                </div>
                <div className="blog_content_new">
                  {parse(blok?.Content_1 || "")}
                </div>

                <div className={`${blok?.CTA_1 ? "blog_content_CTA_2" : ""}`}>
                  {parse(blok?.CTA_2 || "")}
                </div>
                <div className="blog_content_new">
                  {parse(blok?.Content_2 || "")}
                </div>

                <div className={`${blok?.CTA_1 ? "blog_content_CTA_3" : ""}`}>
                  {parse(blok?.CTA_3 || "")}
                </div>
                <div className="blog_content_new">
                  {parse(blok?.Content_3 || "")}
                </div>

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
                        rel="author external"
                      >
                        {blok?.author}
                      </Link>
                    </h3>
                    <p className="text-[18px]">{blok?.author_desc}</p>
                  </div>
                </div>
              </div>

              <div className="basis-[20%] md:px-3">
                <BlogContactForm />
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="ready_sec">
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

        <div className="md:w-[94%] w-full mx-auto">
          <div className="service_sec3">
            <div className="home_sec2_txt3">
              <p className="!ml-0 extra_bold !w-full">You might also like</p>
            </div>
          </div>

          <div
            className={`grid ${
              isLoading ? null : "xl:grid-cols-3 md:grid-cols-2"
            } grid-cols-1 items-center gap-[2rem]`}
          >
            {blogData?.length && !isLoading ? (
              blogData
                .filter(({ slug }) => !pathname.includes(slug))
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
              <div className="flex align-middle justify-center p-24">
                <FetchDataSpinner />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Article;
