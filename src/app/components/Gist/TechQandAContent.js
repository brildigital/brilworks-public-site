"use client";
import React from "react";
import "../../styles/custom-style.scss";
import parse from "html-react-parser";
import Link from "next/link";
import dynamic from "next/dynamic";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import CopyToClipboard from "./CopyToClipboard";

const BlogContactForm = dynamic(() => import("../Blog/BlogContactForm"));

const TechQandAContent = ({ data }) => {
  let data_count = 0;
  return (
    <div className="md:pt-[8rem] pt-[6rem] pb-8 blog-main bg-white technical-QA-page">
      {!data ? (
        <div className="flex items-center justify-center !py-60">
          <FetchDataSpinner />
        </div>
      ) : (
        <div className="container mx-auto my-0 !px-4">
          <div className="flex lg:flex-row-reverse flex-col md:flex-row flex-wrap ">
            <div className="md:w-3/4 w-full md:basis-auto md:px-3 max-w-full">
              <div className="border border-gray-300">
                <h2 className="border-b border-gray-300 font-bold lg:text-3xl md:text-2xl text-xl p-4 break-words">
                  {data.name}
                </h2>
                <div className="p-4 tech-content break-words">
                  {parse(data?.content?.content, {
                    replace: (domNode) => {
                      if (domNode.type === "tag" && domNode.name === "code") {
                        ++data_count;
                        return (
                          <div
                            className="relative md:pt-0 pt-6"
                            id={`code-block-${data_count}`}
                            key={data_count}
                          >
                            {domNode.children.map((child, index) => (
                              <React.Fragment key={index}>
                                {child.data}
                              </React.Fragment>
                            ))}

                            <CopyToClipboard
                              textId={`code-block-${data_count}`}
                              dataIndex={data_count}
                            />
                          </div>
                        );
                      }
                    },
                  }) || ""}
                </div>
              </div>
            </div>
            <div className="md:w-1/4 w-full md:basis-auto md:px-3 max-w-full ">
              <div className=" md:sticky md:top-[110px]">
                <div className="md:my-3 my-10">
                  <div className="flex items-center justify-center flex-wrap mb-1">
                    <Link
                      href="https://www.facebook.com/brilwork/"
                      target="_blank"
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
                      href="https://twitter.com/_Brilworks"
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
                      href="https://www.linkedin.com/company/brilworks/"
                      target="_blank"
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
                <BlogContactForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechQandAContent;
