"use client";
import React, { useEffect, useState } from "react";
import Heading from "../HTMLComponents/Heading";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

const MoreSuccessStoriesSection = () => {
  const pathname = usePathname();
  const [caseStudyData, setCaseStudyData] = useState();

  useEffect(() => {
    Storyblok.get("cdn/stories/", {
      starts_with: "portfolio/",
      per_page: 5,
      version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    })
      .then((response) => {
        setCaseStudyData(response.data?.stories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="lg:px-[70px] md:px-8 px-4 lg:py-[60px] md:py-16 py-8">
      <div className="container max-w-[1440px] mx-auto">
        <Heading
          type="h2"
          text="MORE SUCCESS STORIES"
          className="text-center mb-5"
        />
        <p className="text-colorGray md:text-xl text-lg text-center md:!mb-[30px] !mb-5">
          to build a next-generation EdTech app? We know how.
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {caseStudyData?.length &&
            caseStudyData
              ?.filter((data) => pathname !== data?.slug)
              ?.slice(0, 4)
              ?.map(({ name, content, full_slug }, index) => {
                return (
                  <Link key={name} href={`/${full_slug}/`}>
                    <Image
                      className="rounded-2xl"
                      src={content?.images?.[0]?.filename}
                      width="302"
                      height="240"
                      alt={`casestudy-${index}`}
                    />
                  </Link>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default MoreSuccessStoriesSection;
