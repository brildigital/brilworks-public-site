"use Client"
/* eslint-disable @next/next/no-img-element */
import parse from "html-react-parser";
import { notNewTabRedirect } from "./lib/constants";
import BlogFAQ from "./Blog/BlogFAQ";
import { useRef } from "react";
import dynamic from "next/dynamic";

const Tooltip = dynamic(() => import("./Blog/Tooltip"));

const BlogContent = ({blok ,author}) => {

    const targetRef = useRef();

    function modifyImagesWithLazyLoading(html) {
        return parse(html, {
          replace: (node, index) => {
            if (node.type === "tag" && node.name === "img") {
           
              node.attribs.loading = "lazy";
              node.attribs.decoding = "async";
              node.attribs.width = "736";
              node.attribs.height = "200";
              node.attribs.alt="banner-image"
            }
    
            if (node.type === "tag" && node.name === "a") {
              if (!notNewTabRedirect.includes(node.attribs.href)) {
                node.attribs.target = "_blank";
              }
              if (
                node.attribs.href &&
                !node.attribs.href.includes("brilworks.com")
              ) {
                node.attribs.rel = "noopener";
              } else {
                node.attribs.rel = "noopener";
              }
            }
            return node;
          },
        });
      }
  return (
    <div className="blog_content" ref={targetRef}>
    {/* {blok?.content ? ( */}
    {  modifyImagesWithLazyLoading(blok?.content)}
    {/* ) : (
      <ContentSkeleton />
    )} */}
    {blok?.CTA_1 ? (
      <div
        className={`${
          blok?.CTA_1 ? "blog_content_CTA_1" : ""
        }`}
      >
        {modifyImagesWithLazyLoading(blok?.CTA_1 || "")}
      </div>
    ):<></>}

    {blok?.Content_1 ? (
      <div className="blog_content_new">
        {modifyImagesWithLazyLoading(
          blok?.Content_1 || ""
        )}
      </div>
    ):<></>}
    {blok?.CTA_2 ? (
      <div
        className={`${
          blok?.CTA_2 ? "blog_content_CTA_2" : ""
        }`}
      >
        {modifyImagesWithLazyLoading(blok?.CTA_2 || "")}
      </div>
    ):<></>}
    {blok?.Content_2 ? (
      <div className="blog_content_new">
        {modifyImagesWithLazyLoading(
          blok?.Content_2 || ""
        )}
      </div>
    ):<></>}
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
    ):<></>}
    {blok?.Content_3 ? (
      <div className="blog_content_new">
        {modifyImagesWithLazyLoading(
          blok?.Content_3 || ""
        )}
      </div>
    ):<></>}
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

  )
}

export default BlogContent