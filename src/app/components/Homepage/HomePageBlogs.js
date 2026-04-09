"use client";
import React from "react";
import blogResponse from "../lib/blogResponse.json";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import FetchDataSpinner from "./FetchDataSpinner";
import Heading from "../HTMLComponents/Heading";
import ButtonV2 from "../Common/ButtonV2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { formatSrcUrl } from "../lib/commonFunction";

const HomePageBlogs = () => {
  const pathname = usePathname();

  const ebookData = {
    title: (
      <>
        How To Launch an <br className="" />
        AI MVP in 48 Hours
      </>
    ),
    description: "",
    imageSrc: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/Mockup_-_How_To_Launch_an_AI_MVP_in_48_Hours-1758710237296.png`,
    slug: "launch-ai-mvp-in-48-hours-playbook",
  };

  return (
    <div className="container max-w-[1280px] main-section-padding mx-auto">
      <div className="lg:pb-10 md:pb-8 pb-5">
        <span className="text-[11px] font-bold tracking-[0.12em] uppercase block mb-3 text-themeColor">
          Engineering Insights
        </span>
        <h2 className="text-[clamp(30px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] text-[#0d0f1a]">
          Insights from the Brilworks Engineering Mindset
        </h2>
      </div>
      <div className="blog-home reveal">
        <div className="blog-left">
          {blogResponse[pathname]?.length ? (
            blogResponse[pathname]
              .slice(0, 2)
              .map(({ slug, name, content }, index) => {
                if (
                  content &&
                  (content.Priority == 1 ||
                    content.Priority == 2 ||
                    content.Priority == 3)
                ) {
                  return (
                    <div
                      key={index}
                      className="overflow-hidden border border-borderGray rounded-2xl"
                    >
                      <Link as={`/blog/${slug}`} href={`/blog/[slug]`}>
                        <Image
                          src={formatSrcUrl(content?.mobile_banner?.filename)}
                          alt={content?.mobile_banner?.alt || "Blog banner"}
                          width={550}
                          height={283}
                        />
                        <div className="px-5 py-7.5">
                          <h4 className="lg:text-xl text-lg font-medium mb-3 min-h-[50px]">
                            {name}
                          </h4>
                          <p className="flex items-center lg:text-xl text-lg font-medium mb-3 text-themeColor hover:text-colorBlack duration-500">
                            Read Complete Blog&nbsp;
                            <FontAwesomeIcon size="lg" icon={faArrowRight} />
                          </p>
                        </div>
                      </Link>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className="overflow-hidden border border-borderGray rounded-2xl group"
                    >
                      <Link as={`/blog/${slug}`} href={`/blog/[slug]`}>
                        <Image
                          src={
                            formatSrcUrl(content?.mobile_banner?.filename) || ""
                          }
                          alt={content?.mobile_banner?.alt || "Blog banner"}
                          className="vc_gitem-zone-img"
                          width={550}
                          height={283}
                          sizes="(min-width: 767px) 550px, calc(100vw - 30px)"
                        />
                        <div className="px-5 py-7.5">
                          <span className="bg-themeLight px-3 py-1.5 rounded-md">
                            Blog
                          </span>
                          <h4 className="lg:text-lg text-base font-medium mb-3 mt-2 min-h-[50px]">
                            {name}
                          </h4>
                          <p className="flex items-center lg:text-lg text-base font-medium mb-3 text-themeColor hover:text-colorBlack duration-500">
                            Read Complete Blog&nbsp;&nbsp;
                            <FontAwesomeIcon size="lg" icon={faArrowRight} />
                          </p>
                        </div>
                      </Link>
                    </div>
                  );
                }
              })
          ) : (
            <div className="flex align-middle justify-center">
              <FetchDataSpinner />
            </div>
          )}
        </div>
        <div className="w-full flex flex-col md:flex-row gap-5 sxl:py-7.5 p-5 sxl:px-5 rounded-2xl border border-borderGray">
          <div className="md:w-[35%] w-[80%] mx-auto">
            <Image
              className="w-full drop-shadow-book-shadow mx-auto"
              src={ebookData.imageSrc}
              alt={`${ebookData.title}-img`}
              width={300}
              height={65}
            />
          </div>

          <div className="flex flex-col justify-between md:w-[65%] w-full">
            <div>
              <span className="bg-themeLight px-3 py-1.5 rounded-md">
                Ebook
              </span>
              <Heading
                type="h3"
                className="md:!text-xl !text-lg font-medium mt-3"
                text={ebookData.title}
              />
              <p className="!my-3">
                Downloaded by 120+ CTOs from Startups and Enterprises
              </p>
            </div>
            <div className="flex items-center justify-between gap-5 mt-auto mb-4">
              <ButtonV2
                className="hover:text-themeColor"
                as={`/ebooks/${ebookData.slug}/`}
                redirect={`/ebooks/[${ebookData.slug}]`}
                label="Download"
              />
              <Link
                href="/ebooks/"
                className="flex items-center lg:text-lg text-base font-medium mb-3 text-themeColor hover:text-colorBlack duration-500"
              >
                More Ebook&nbsp;&nbsp;
                <FontAwesomeIcon
                  size="md"
                  className="bg-themeLight p-2 rounded-full"
                  icon={faArrowRight}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBlogs;
