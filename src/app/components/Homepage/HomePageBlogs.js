"use client";
import React from "react";
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
          text="Insights from the Brilworks Engineering Mindset"
          // text="Get Insights from the Brilwork’s Blogs"
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
