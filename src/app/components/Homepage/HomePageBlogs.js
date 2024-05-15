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

  async function fetchData() {
    try {
      const blogData = await getblogDataCategorization(
        1,
        !isTablet ? 3 : 2,
        pathname === "/" ? null : blogDataBasedOnPath[pathname]
      );
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
    <>
      <BlogText />
      <div className="container mx-auto w-[90%] blog-home reveal">
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
            }
          })
        ) : (
          <div className="flex align-middle justify-center">
            <FetchDataSpinner />
          </div>
        )}
      </div>
      {blogData?.length ? (
        <Link
          href="/blog/"
          className="flex items-center sm:justify-center justify-start gap-[20px] about_btn transition pt-[32px] px-[16px]"
        >
          <div className="about_txt">
            <p className="change_link text-[21px]">Read More</p>
          </div>
          <div className="aerrow relative">
            <img
              decoding="async"
              loading="lazy"
              className="black_aerrow alignnone wp-image-28 size-full"
              src="/images/black_aerrow-1.png"
              alt="arrow"
              width="46"
              height="18"
            />
            <img
              decoding="async"
              loading="lazy"
              className="gradiant_aerrow alignnone wp-image-29 size-full"
              src="/images/arrow-gradiant.png"
              alt="arrow"
              width="46"
              height="18"
            />
          </div>
        </Link>
      ) : null}
    </>
  );
};

export default HomePageBlogs;
