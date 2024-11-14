"use client";
import React, { useEffect, useState } from "react";
import Heading from "../HTMLComponents/Heading";
import Link from "next/link";
import Image from "next/image";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { usePathname } from "next/navigation";
import StoryblokClient from "storyblok-js-client";
import { useMediaQuery } from "react-responsive";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

const MoreSuccessStory = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const pathname = usePathname();
  const [caseStudyData, setCaseStudyData] = useState([]);

  useEffect(() => {
    Storyblok.get("cdn/stories/", {
      starts_with: "portfolio/",
      per_page: 6,
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
    <div className="container max-w-[1440px] md:px-[60px] px-[20px] lg:px-[100px] 3xl:px-[120px] lg:py-[60px] md:py-[40px] py-[30px] mx-auto mb-20 md:mb-0">
      <Heading
        type="h2"
        data={`More <span class="h1-border-b">Success</span> Stories`}
        className="text-left mb-[30px]"
      />
      <Splide
        className="more-success-story"
        options={{
          gap: 15,
          arrows: true,
          pagination: false,
          isNavigation: true,
          perPage: isMobile ? 1 : 2,
        }}
      >
        {caseStudyData?.length &&
          caseStudyData
            ?.filter(({ slug }) => !pathname?.includes(slug))
            ?.map(({ name, content, full_slug }, index) => {
              return (
                <SplideSlide key={name}>
                  <div className="blog-box overflow-hidden !rounded-[30px] shadow-none hover:shadow-lg max-w-[580px]">
                    <Link href={`/${full_slug}/`}>
                      <Image
                        className="rounded-t-2xl lg:h-[410px] h-auto"
                        src={content?.images?.[0]?.filename}
                        width="302"
                        height="240"
                        alt={`casestudy-${index}`}
                      />
                      <div className="md:px-5 pl-5 pr-2 md:py-7 py-4">
                        <h3 className="md:text-2xl text-xl font-semibold md:w-11/12">
                          {name}
                        </h3>
                      </div>
                    </Link>
                  </div>
                </SplideSlide>
              );
            })}
      </Splide>
    </div>
  );
};

export default MoreSuccessStory;
