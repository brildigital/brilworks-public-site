"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogText } from "./BigText";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import FetchDataSpinner from "./FetchDataSpinner";
import { scrollEffect } from "../lib/commonFunction";
import { getblogDataCategorization } from "../lib/getblog";
import LinkWithArrow from "../Common/LinkWithArrow";

const HomePageBlogs = () => {
  const [blogData, setBlogData] = useState(null);
  const pathname = usePathname();
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1080 });

  const blogDataBasedOnPath = {
    "/aws-consulting-services/": "aws-consulting",
    "/ai-ml-development-services/": "ai-ml",
    "/devops-consulting-services/": "devops-consulting",
    // "/erp-next-development-services/": "erp-next",
    "/application-development-services": "application-development",
    "/kubernetes-consulting-services/": "kubernetes-consulting",
    "/generative-ai-development-services/": "generative-ai",
    "/digital-experience-services/": "digital-experience",
    // "/low-code-no-code-development-services/": "low-code-no-code",
    "/product-engineering-development-services/":
      "product-engineering-development",
    "/saas-application-development-services/": "saas-application-development",
    // "/business-intelligence-services/": "business-intelligence",
  };

  const threeBlogData = [
    {
      title: "Essential Terms in Generative AI Explained You Must Know",
      imageURL:
        "https://a.storyblok.com/f/219851/550x283/6130f33899/essential-ai-terms-mobile-banner.webp",
      slug: "essential-terms-in-generative-ai",
    },
    {
      title: "How Does the Evolution of Generative AI Impact Industries?",
      imageURL:
        "https://a.storyblok.com/f/219851/550x283/4df17cf388/evolution-of-generative-ai.webp",
      slug: "evolution-of-generative-ai",
    },
    {
      title:
        "A Guide to Building Efficient Solutions with the AWS Well-Architected Framework",
      imageURL:
        "https://a.storyblok.com/f/219851/550x283/e414bfac1e/aws-well-architected-framework.webp",
      slug: "a-guide-to-aws-well-architected-framework",
    },
  ];

  async function fetchData() {
    try {
      const blogData = await getblogDataCategorization(
        1,
        !isTablet ? 3 : 2,
        pathname === "/" ? null : blogDataBasedOnPath[pathname]
      );
      console.log(blogData.storyData);
      setBlogData(blogData.storyData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <div className={pathname === "/" ? "bg-sectionBG" : ""}>
      <div className="container mx-auto main-section-padding reveal">
        <BlogText />
        <div className="container mx-auto md:w-[90%] w-full blog-home reveal">
          {pathname === "/" ? (
            <>
              {threeBlogData.map(({ slug, title, imageURL }, index) => {
                return (
                  <div
                    key={index}
                    className="blog-box overflow-hidden shadow-none hover:shadow-lg bg-white"
                  >
                    <Link as={`/blog/${slug}`} href={`/blog/[slug]`}>
                      <Image
                        src={imageURL}
                        alt={title}
                        className="vc_gitem-zone-img rounded-[20px]"
                        width={550}
                        height={283}
                      />
                      <div className="p-[10px]">
                        <h4 className="xl:text-[24px] mb-[10px] leading-8">
                          {title}
                        </h4>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {blogData?.length ? (
                blogData.map(({ slug, name, content }, index) => {
                  if (
                    content &&
                    (content.Priority == 1 ||
                      content.Priority == 2 ||
                      content.Priority == 3)
                  ) {
                    return (
                      <div
                        key={index}
                        className="blog-box overflow-hidden shadow-none hover:shadow-lg bg-white"
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
                })
              ) : (
                <div className="flex align-middle justify-center">
                  <FetchDataSpinner />
                </div>
              )}
            </>
          )}
        </div>
        {blogData?.length ? (
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
