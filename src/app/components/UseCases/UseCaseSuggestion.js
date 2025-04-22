import React from "react";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { formattedDate } from "../lib/commonFunction";
import Heading from "../HTMLComponents/Heading";

const UseCaseSuggestion = ({ blogResponse }) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-wrap flex-col">
      <Heading
        type="h2"
        className="lg:!text-[34px] md:!text-3xl !text-2xl !my-5"
        text="You might also like"
      />
      <div
        className={`grid ${
          !blogResponse["/aws-consulting-services/"]?.length
            ? ""
            : "sxl:grid-cols-3 md:grid-cols-2"
        } grid-cols-1 items-center gap-[2rem]`}
      >
        {blogResponse[
          pathname.includes("aws")
            ? "/aws-consulting-services/"
            : "/generative-ai-development-services/"
        ]?.length ? (
          blogResponse[
            pathname.includes("aws")
              ? "/aws-consulting-services/"
              : "/generative-ai-development-services/"
          ]?.map(({ slug, name, content }, index) => (
            <div
              key={index}
              className="border-[1px] border-[#80808038] rounded-2xl blog_flex_30"
            >
              <Link
                as={`/blog/${slug}`}
                href={`/blog/[slug]`}
                target="_blank"
                rel="external"
              >
                <div className="sec9_img1">
                  <Image
                    className="rounded-t-[15px]"
                    src={
                      content?.mobile_banner?.filename
                        ? content?.mobile_banner?.filename
                        : "/images/not-found-image.webp"
                    }
                    alt={content?.mobile_banner?.alt || `Banner-img-${index}`}
                    width={550}
                    height={283}
                    unoptimized
                  />
                </div>
                <div className="pt-[1rem] px-[1rem] pb-[1.5rem] blog-hover">
                  <div className="border-b-[1px] border-[#80808038] py-[1rem]">
                    <p className="entry-title default-max-width aspect-[518/116]">
                      {name}
                    </p>
                  </div>
                  <div className="sec9_txt2 mt-[1.5rem]">
                    <p className="publish_date">
                      {formattedDate(content?.Published)}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center p-24">
            <FetchDataSpinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default UseCaseSuggestion;
