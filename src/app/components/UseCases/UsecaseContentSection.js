"use client";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import Link from "next/link";
import BlogFAQ from "../Blog/BlogFAQ";
import { usePathname } from "next/navigation";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import blogResponse from "../../components/lib/blogResponse.json";
import { notNewTabRedirect } from "../lib/constants";
import dynamic from "next/dynamic";
import { formatSrcUrl, formatTitleFromUrl } from "../lib/commonFunction";
const ProductSuggestion = dynamic(() => import("./ProductSuggestion"));
const UseCaseSuggestion = dynamic(() => import("./UseCaseSuggestion"));

const UsecaseContentSection = ({ content, FAQData }) => {
  const pathname = usePathname();
  const [headings, setHeadings] = useState([]);
  const [activeLink, setActiveLink] = useState(null);

  const blogTableOfContent =
    content + `${FAQData?.length && "<h2>FAQ</h2>"}` || "";

  function modifyImagesWithLazyLoading(html) {
    return parse(html, {
      replace: (node, index) => {
        if (node.type === "tag" && node.name === "img") {
          node.attribs.loading = "lazy";
          node.attribs.decoding = "async";
          node.attribs.alt = formatTitleFromUrl(node.attribs.src);
          node.attribs.src = formatSrcUrl(node.attribs.src) || "";
          node.attribs.title = formatTitleFromUrl(node.attribs.src);
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
  }, [blogTableOfContent]);

  useEffect(() => {
    // Add temporary IDs to the headings for smooth scrolling
    const headings = document.querySelectorAll("h2");
    headings.forEach((heading, index) => {
      heading.id = `temp-section-${index}`;
    });
  }, []);

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

  return (
    <div className="container max-w-[1280px] main-section-padding-bottom mx-auto">
      <div className="flex flex-wrap -mx-4">
        <div className="slg:basis-[22%] slg:flex-shrink-0 slg:flex-grow-0 slg:max-w-[22%] !px-3 min-h-[1px] w-full slg:block hidden">
          <div className="sticky top-[110px] !pb-5">
            <div className="blog-tab-content  ">
              {/* <div className="flex justify-between !mb-5"> */}
              {/* <p>Table of Contents</p> */}
              <div className="flex justify-between border-b border-borderGray font-medium !p-5 !pb-3">
                <p>Table of Contents</p>
              </div>
              {/* </div> */}
              <ul className="max-h-[calc(100vh_-_300px)] overflow-auto">
                {headings?.length ? (
                  headings.map((heading, index) => (
                    <li key={index}>
                      <Link
                        href={`#temp-section-${index}`}
                        onClick={(e) => handleTableOfContentLinkClick(e, index)}
                        className={`${
                          index == activeLink ? "page-active" : ""
                        }`}
                      >
                        {heading.text}
                      </Link>
                    </li>
                  ))
                ) : (
                  <div className="flex align-middle justify-center py-10">
                    <FetchDataSpinner />
                  </div>
                )}
              </ul>
            </div>
            <div className="mt-7.5">
              <div className="flex items-center justify-center flex-wrap">
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
                    height="43"
                    alt="Twitter blog share"
                  />
                </Link>
                <Link
                  target="_blank"
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.brilworks.com${pathname}`}
                >
                  <img
                    decoding="async"
                    loading="lazy"
                    src="/images/linkedin-share.svg"
                    width="43"
                    height="43"
                    alt="LinkedIn blog share"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="slg:basis-[78%] slg:flex-shrink-0 slg:flex-grow-0 slg:max-w-[78%] !px-4 min-h-[1px] w-full">
          <div className="blog-inner items-center">
            <div className="flex -mx-4 md:flex-row flex-col">
              <div className="w-full !float-left">
                <div className="h-full w-full box-border !px-4">
                  <div className="h-full flex flex-col">
                    <div className="blog_content">
                      {modifyImagesWithLazyLoading(content)}

                      {FAQData && FAQData?.length > 0 ? (
                        <BlogFAQ FAQData={FAQData} />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {pathname.includes("product") ? (
          <ProductSuggestion />
        ) : (
          <UseCaseSuggestion blogResponse={blogResponse} />
        )}
      </div>
    </div>
  );
};

export default UsecaseContentSection;
