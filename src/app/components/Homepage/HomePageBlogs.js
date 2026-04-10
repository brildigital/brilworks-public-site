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
    <div className="bg-white">
    <div className="container max-w-[1280px] main-section-padding mx-auto">
      <div className="lg:pb-10 md:pb-8 pb-5">
        <span className="text-[11px] font-bold tracking-[0.12em] uppercase block mb-3 text-themeColor">
          Engineering Insights
        </span>
        <h2 className="text-[clamp(30px,3.5vw,44px)] font-extrabold tracking-[-1px] leading-[1.1] text-[#0d0f1a]">
          Insights from the Brilworks Engineering Mindset
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 reveal">
        {blogResponse[pathname]?.length ? (
          blogResponse[pathname]
            .slice(0, 2)
            .map(({ slug, name, content }, index) => (
              <div
                key={index}
                className="overflow-hidden border border-borderGray rounded-2xl group transition-all duration-200 hover:border-themeColor hover:shadow-sm"
              >
                <Link as={`/blog/${slug}`} href={`/blog/[slug]`}>
                  <Image
                    src={formatSrcUrl(content?.mobile_banner?.filename) || ""}
                    alt={content?.mobile_banner?.alt || "Blog banner"}
                    className="w-full"
                    width={550}
                    height={283}
                    sizes="(min-width: 767px) 550px, calc(100vw - 30px)"
                  />
                  <div className="px-5 py-7.5">
                    <h4 className="lg:text-lg text-base font-medium mb-3 min-h-[50px]">
                      {name}
                    </h4>
                    <p className="flex items-center text-base font-medium text-themeColor group-hover:text-colorBlack duration-500">
                      Read article
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </p>
                  </div>
                </Link>
              </div>
            ))
        ) : (
          <div className="flex align-middle justify-center col-span-2">
            <FetchDataSpinner />
          </div>
        )}
      </div>
      <div className="text-center mt-8 reveal">
        <Link
          href="/blog/"
          className="font-Figtree text-themeColor font-semibold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all duration-200"
        >
          View all articles →
        </Link>
      </div>
    </div>
    </div>
  );
};

export default HomePageBlogs;
