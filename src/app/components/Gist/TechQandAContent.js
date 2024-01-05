"use client";
import React from "react";
import parse from "html-react-parser";
import Link from "next/link";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";

const TechQandAContent = ({ data }) => {
  return (
    <div className="md:pt-[8rem] pt-[6rem] pb-8 blog-main bg-white">
      {!data ? (
        <div className="flex items-center justify-center !py-60">
          <FetchDataSpinner />
        </div>
      ) : (
        <div className="container mx-auto my-0 !px-4">
          <div className="flex flex-row-reverse flex-wrap ">
            <div className="w-5/6 basis-auto px-3 max-w-full">
              <div className="border-x border-t border-gray-300">
                <h2 className="border-b border-gray-300 font-bold lg:text-3xl md:text-2xl text-xl p-4 break-words">
                  {data.name}
                </h2>
                <div className="pl-4 pt-5 tech-content break-words">
                  {parse(data.content.content.content) || ""}
                </div>
              </div>
            </div>
            <div className="w-1/6 basis-auto max-w-full">
              <div className="my-7 sticky">
                <div className="flex items-start flex-wrap">
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechQandAContent;
