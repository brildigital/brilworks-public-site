"use client";
import React from "react";
import blogResponse from "../lib/blogResponse.json";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import FetchDataSpinner from "./FetchDataSpinner";
import Heading from "../HTMLComponents/Heading";
import ButtonV2 from "../Common/ButtonV2";
import { ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { formatSrcUrl } from "../lib/commonFunction";
import "../../styles/EnterpriseHome.css";

const HomePageBlogs = () => {
  const rawPathname = usePathname();
  const pathname = rawPathname === "/home" ? "/" : rawPathname;
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
    <section className="bw-home alt">
      <div className="wrap">
        <div className="">
          <p className="eyebrow rv">Insights</p>
          <h2 className="sec rv d1">From the Brilworks engineering mindset.</h2>
        </div>
        <div className="posts">
          {blogResponse[pathname]?.length ? (
            blogResponse[pathname]
              .slice(0, 2)
              .map(({ slug, name, content, kicker }, index) => (
                <div
                  key={index}
                  className="overflow-hidden group transition-all duration-200  hover:shadow-sm post !p-0"
                >
                  <Link as={`/blog/${slug}`} href={`/blog/[slug]`} className="">
                    <Image
                      src={formatSrcUrl(content?.mobile_banner?.filename) || ""}
                      alt={content?.mobile_banner?.alt || "Blog banner"}
                      className="w-full"
                      width={550}
                      height={283}
                      sizes="(min-width: 767px) 550px, calc(100vw - 30px)"
                    />
                    <div className="p-4 flex flex-col">
                      <span className="pk">{kicker}</span>
                      <h4 className="lg:text-lg text-base font-medium min-h-[50px]">
                        {name}
                      </h4>
                      <p className="flex items-center text-base font-medium text-[var(--accent)] duration-500 mt-3 ml-auto">
                        Read article
                        <ArrowRight size={16} className="ml-2 " />
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
        <div className="blog-view-all rv d2">
          <Link href="/blog/" className="blog-view-all-link">
            View all articles →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePageBlogs;
