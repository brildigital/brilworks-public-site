"use client";
import React, { useEffect } from "react";
import blogResponse from "../lib/blogResponse.json";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import FetchDataSpinner from "./FetchDataSpinner";
// import { getblogDataCategorization } from "../lib/getblog";
import Heading from "../HTMLComponents/Heading";
import ButtonV2 from "../Common/ButtonV2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HomePageBlogs = () => {
  const pathname = usePathname();

  // const blogDataBasedOnPath = {
  //   "/aws-consulting-services/": "aws-consulting",
  //   "/ai-ml-development-services/": "ai-ml",
  //   "/devops-consulting-services/": "devops-consulting",
  //   // "/erp-next-development-services/": "erp-next",
  //   "/application-development-services": "application-development",
  //   "/kubernetes-consulting-services/": "kubernetes-consulting",
  //   "/generative-ai-development-services/": "generative-ai",
  //   // "/digital-experience-services/": "digital-experience",
  //   // "/low-code-no-code-development-services/": "low-code-no-code",
  //   "/product-engineering-development-services/":
  //     "product-engineering-development",
  //   "/saas-application-development-services/": "saas-application-development",
  //   // "/business-intelligence-services/": "business-intelligence",
  // };

  // async function fetchData() {
  //   try {
  //     const blogData = await getblogDataCategorization(
  //       1,
  //       3, // Keep 3 from AWS Consulting Service and Generative AI Develompnet Service
  //       pathname === "/" ? null : blogDataBasedOnPath[pathname]
  //     );
  //     const filteredData =
  //       blogData.storyData &&
  //       blogData.storyData.map((post) => ({
  //         name: post.name,
  //         slug: post.slug,
  //         content: {
  //           Priority: post?.content?.Priority,
  //           Published: post?.content?.Published,
  //           mobile_banner: {
  //             filename: post?.content?.mobile_banner.filename,
  //             alt: post?.content?.mobile_banner.alt,
  //           },
  //         },
  //       }));

  //     if (blogData.storyData) {
  //       blogResponse[pathname] = filteredData;

  //       const newData = {
  //         ...blogResponse,
  //         [pathname]: filteredData,
  //       };

  //       const response = await fetch(
  //         `${process.env.NEXT_PUBLIC_BASE_URL}api/page-blog`,
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({ data: newData }),
  //         }
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed to update JSON file");
  //       }
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="container max-w-[1280px] main-section-padding mx-auto">
      <div className="flex flex-wrap items-center justify-between lg:pb-10 md:pb-8 pb-5">
        <Heading
          type="h2"
          className="lg:!text-[34px] md:!text-3xl !text-2xl"
          text="Get Insights from the Brilwork’s Blogs"
        />
        <div>
          <Link
            href="/blog/"
            className="md:text-xl text-lg font-medium text-themeColor hover:!underline cursor-pointer pr-2"
          >
            Read More Blogs
          </Link>
        </div>
      </div>
      <div className="blog-home reveal">
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
                        src={content?.mobile_banner?.filename}
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
                        src={content?.mobile_banner?.filename || ""}
                        alt={content?.mobile_banner?.alt || "Blog banner"}
                        className="vc_gitem-zone-img"
                        width={550}
                        height={283}
                        sizes="(min-width: 767px) 550px, calc(100vw - 30px)"
                      />
                      <div className="px-5 py-7.5">
                        <h4 className="lg:text-xl text-lg font-medium mb-3 min-h-[50px]">
                          {name}
                        </h4>
                        <p className="flex items-center lg:text-xl text-lg font-medium mb-3 text-themeColor hover:text-colorBlack duration-500">
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
      <div className="w-full flex justify-center">
        <ButtonV2
          redirect="/blog/"
          label="Read More Blogs"
          className="hover:text-themeColor w-fit lg:mt-10 mt-8"
        />
      </div>
    </div>
  );
};

export default HomePageBlogs;
