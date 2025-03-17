"use client";
import React, { useEffect } from "react";
import blogResponse from "../lib/blogResponse.json";
import Link from "next/link";
import Image from "next/image";
import { BlogText } from "./BigText";
import { usePathname } from "next/navigation";
// import { useMediaQuery } from "react-responsive";
import FetchDataSpinner from "./FetchDataSpinner";
// import { getblogDataCategorization } from "../lib/getblog";
import LinkWithArrow from "../Common/LinkWithArrow";

const HomePageBlogs = () => {
  const pathname = usePathname();
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1080 });

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
  //       !isTablet ? 3 : 2,
  //       pathname === "/" ? null : blogDataBasedOnPath[pathname]
  //     );
  //     blogResponse[pathname] = blogData.storyData;

  //     if (blogData.storyData) {
  //       const newData = {
  //         ...blogResponse,
  //         [pathname]: blogData.storyData,
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

  function getRedirectPath(pathname) {
    if (!pathname.startsWith("/hire-")) {
      return pathname; // Return the original pathname if it doesn't start with "hire-"
    }

    switch (pathname) {
      case "/hire-adalo-developer/":
        return "/adalo-development-services/";
      case "/hire-aws-developer/":
        return "/aws-consulting-services/";
      case "/hire-low-code-no-code-developer/":
        return "/low-code-no-code-development-services/";
      case "/hire-blockchain-developer/":
        return "/ai-ml-development-services/";
      case "/hire-react-native-developer/":
        return "/application-development-services/";
      default:
        return "/"; // Default to "/" for all other "hire-" pages
    }
  }

  return (
    <div
      className={
        pathname === "/" ? "bg-sectionBG section-padding" : "section-padding"
      }
    >
      <div className="container max-w-[1280px] mx-auto reveal">
        <BlogText />
        <div className="blog-home reveal">
          {blogResponse[getRedirectPath(pathname)]?.length ? (
            blogResponse[getRedirectPath(pathname)].map(
              ({ slug, name, content }, index) => {
                if (
                  content &&
                  (content.Priority == 1 ||
                    content.Priority == 2 ||
                    content.Priority == 3)
                ) {
                  return (
                    <div
                      key={index}
                      className="blog-box overflow-hidden shadow-none hover:shadow-lg"
                    >
                      <Link as={`/blog/${slug}`} href={`/blog/[slug]`}>
                        <Image
                          src={content?.mobile_banner?.filename}
                          alt={content?.mobile_banner?.alt}
                          className="vc_gitem-zone-img rounded-[20px]"
                          width={550}
                          height={283}
                        />
                        <div className="p-[10px]">
                          <h4 className="xl:text-[24px] mb-[10px] leading-8">
                            {name}
                          </h4>
                        </div>
                      </Link>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className="blog-box overflow-hidden shadow-none hover:shadow-lg bg-white"
                    >
                      <Link as={`/blog/${slug}`} href={`/blog/[slug]`}>
                        <Image
                          src={content?.mobile_banner?.filename || ""}
                          alt={content?.mobile_banner?.alt || "Blog banner"}
                          className="vc_gitem-zone-img rounded-[20px]"
                          width={550}
                          height={283}
                          sizes="(min-width: 767px) 550px, calc(100vw - 30px)"
                        />
                        <div className="p-[10px]">
                          <h4 className="xl:text-xl mb-[10px] font-semibold leading-8">
                            {name}
                          </h4>
                        </div>
                      </Link>
                    </div>
                  );
                }
              }
            )
          ) : (
            <div className="flex align-middle justify-center">
              <FetchDataSpinner />
            </div>
          )}
        </div>
        {blogResponse[pathname]?.length ? (
          <LinkWithArrow
            href="/blog/"
            label="Read More"
            className="justify-center"
          />
        ) : null}
      </div>
    </div>
  );
};

export default HomePageBlogs;
