/* eslint-disable @next/next/no-img-element */
"use client";
import StoryblokClient from "storyblok-js-client";
import parse from "html-react-parser";
import "./Blogstyle.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import BlogContactForm from "./Blog/BlogContactForm";
import Head from "next/head";

const Storyblok = new StoryblokClient({
  accessToken: process.env.accessToken,
});

const Article = ({ blok }) => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    Storyblok.get("cdn/stories/", {
      starts_with: "blogs-list/",
      per_page: 3,
      version: "draft",
    })
      .then((response) => {
        setBlogData(response.data?.stories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>{blok.title}</title>
      </Head>
      <section className="mt-[6rem]" id="scroll-win">
        <div className="w-[88%] mx-auto">
          <img
            className="rounded-[30px]"
            alt={blok?.image?.alt}
            src={blok?.image?.filename}
          />
        </div>

        <div className="2xl:w-[88%] w-[98%] mx-auto">
          <div className="lg:flex block gap-[4rem]">
            <div className="basis-[25%] lg:sticky static h-fit top-0 blog-left py-[4rem] ">
              <div className="p-[20px] bg-[#f9f9f9] border-1 border-[#aaa] table !w-auto mb-[1rem] rounded-[4px] relative">
                <div className="">
                  <p className="text-[#00dfb8] text-[24px] text-[500]">
                    Table of Contents
                  </p>
                </div>
                <nav className="blog-tab-content !py-4 !border-t-[0px] text-[21px] blog-nav">
                  {parse(blok?.table_content)}
                  {/* <ul className="ez-toc-list ez-toc-list-level-1">
                  <li className="!p-0 text-[95%] !border-0 leading-[1.6]">
                    <Link
                      className="!text-[#444444] shadow-none underline-none"
                      href="#Cross-Platform_App_Development_An_Overview"
                      onClick={(e) =>
                        scrollToSection(
                          e,
                          "Cross-Platform_App_Development_An_Overview"
                        )
                      }
                      title="Cross-Platform App Development: An Overview"
                    >
                      Cross-Platform App Development: An Overview
                    </Link>
                  </li>
                  <li className="!p-0 text-[95%] !border-0">
                    <Link
                      className="!text-[#444444] shadow-none underline-none"
                      href="#What_is_Cross_Platform_App_Development"
                      onClick={(e) =>
                        scrollToSection(
                          e,
                          "Cross-What_is_Cross_Platform_App_Development"
                        )
                      }
                      title="What is Cross Platform App Development?"
                    >
                      What is Cross Platform App Development?
                    </Link>
                  </li>
                  <li className="!p-0 text-[95%] !border-0">
                    <Link
                      className="!text-[#444444] shadow-none underline-none"
                      href="#Programming_Languages_Used_in_Cross-Platform_Development"
                      onClick={(e) =>
                        scrollToSection(
                          e,
                          "Programming_Languages_Used_in_Cross-Platform_Development"
                        )
                      }
                      title="Programming Languages Used in Cross-Platform Development"
                    >
                      Programming Languages Used in Cross-Platform Development
                    </Link>
                  </li>
                  <li className="!p-0 text-[95%] !border-0">
                    <Link
                      className="!text-[#444444] shadow-none underline-none"
                      href="#The_Role_of_Framework_in_Cross-Platform_App_Development"
                      onClick={(e) =>
                        scrollToSection(
                          e,
                          "Programming_Languages_Used_in_Cross-Platform_Development"
                        )
                      }
                      title="The Role of Framework in Cross-Platform App Development"
                    >
                      The Role of Framework in Cross-Platform App Development
                    </Link>
                  </li>
                  <li className="!p-0 text-[95%] !border-0">
                    <Link
                      className="!text-[#444444] shadow-none underline-noneh"
                      href="#Best_Frameworks_For_Cross_Platform_App_Development_in_2023"
                      onClick={(e) =>
                        scrollToSection(
                          e,
                          "Best_Frameworks_For_Cross_Platform_App_Development_in_2023"
                        )
                      }
                      title="Best Frameworks For Cross Platform App Development in 2023"
                    >
                      Best Frameworks For Cross Platform App Development in 2023
                    </Link>
                  </li>
                  <li className="!p-0 text-[95%] !border-0">
                    <Link
                      className="!text-[#444444] shadow-none underline-none"
                      href="#1_React_Native"
                      onClick={(e) => scrollToSection(e, "1_React_Native")}
                      title="1. React Native"
                    >
                      1. React Native
                    </Link>
                  </li>
                  <li className="!p-0 text-[95%] !border-0">
                    <Link
                      className="!text-[#444444] shadow-none underline-none"
                      href="#2_Flutter"
                      onClick={(e) => scrollToSection(e, "2_Flutter")}
                      title="2. Flutter"
                    >
                      2. Flutter
                    </Link>
                  </li>
                  <li className="!p-0 text-[95%] !border-0">
                    <Link
                      className="!text-[#444444] shadow-none underline-none"
                      href="#3_Kotlin_Multiplatform_Mobile"
                      onClick={(e) =>
                        scrollToSection(e, "3_Kotlin_Multiplatform_Mobile")
                      }
                      title="3. Kotlin Multiplatform Mobile"
                    >
                      3. Kotlin Multiplatform Mobile
                    </Link>
                  </li>
                  <li className="!p-0 text-[95%] !border-0">
                    <Link
                      className="!text-[#444444] shadow-none underline-none"
                      href="#4_Net_MAUIXamarin"
                      onClick={(e) => scrollToSection(e, "4_Net_MAUIXamarin")}
                      title="4. .Net MAUI(Xamarin)"
                    >
                      4. .Net MAUI(Xamarin)
                    </Link>
                  </li>
                  <li className="!p-0 text-[95%] !border-0">
                    <Link
                      className="!text-[#444444] shadow-none underline-none"
                      href="#5_Cordova"
                      onClick={(e) => scrollToSection(e, "5_Cordova")}
                      title="5. Cordova"
                    >
                      5. Cordova
                    </Link>
                  </li>
                  <li className="!p-0 text-[95%] !border-0">
                    <Link
                      className="!text-[#444444] shadow-none underline-none"
                      href="#6_Ionic"
                      onClick={(e) => scrollToSection(e, "6_Ionic")}
                      title="6. Ionic"
                    >
                      6. Ionic
                    </Link>
                  </li>
                  <li className="!p-0 text-[95%] !border-0">
                    <Link
                      className="!text-[#444444] shadow-none underline-none"
                      href="#Conclusion"
                      onClick={(e) => scrollToSection(e, "Conclusion")}
                      title="Conclusion"
                    >
                      Conclusion
                    </Link>
                  </li>
                </ul> */}
                </nav>
              </div>
            </div>
            <div className="basis-[50%]">
              <div className="service_sec3">
                <div className="home_sec2_txt4 blog-cat mt-[10px]">
                  <p className="p-0"> {blok?.subtitle}</p>
                </div>
                <div className="home_sec2_txt3 py-[2.5rem]">
                  <h1 className="entry-title default-max-width">
                    {blok?.title}
                  </h1>
                </div>
              </div>
              <div className="blog_content post_details_content ">
                {parse(blok?.content)}
              </div>

              {/* ********************Author Detail******************************/}
              <div className="single-author-bio">
                <div className="img-blk-wrapper lg:pb-[0rem] !pb-[3rem]">
                  <div className="img-blk">
                    <img
                      src={blok?.author_img?.filename}
                      width="96"
                      height="96"
                      alt={blok?.author_img?.alt}
                      className="avatar avatar-96 wp-user-avatar wp-user-avatar-96 alignnone photo"
                    />
                  </div>
                </div>
                <div className="single-author-bio-text">
                  <h3>
                    <Link
                      href={`${blok?.author_linkedIn?.url}`}
                      title={`Visit ${blok?.author} website`}
                      rel="author external"
                    >
                      {blok?.author}
                    </Link>
                  </h3>
                  <p>{blok?.author_desc}</p>
                </div>
              </div>
            </div>

            <div className="basis-[25%]">
              <BlogContactForm />
            </div>

            {/* <div className="text-center md:!w-2/4 lg:w-2/3 w-full"> */}
            {/* <h1 className="title-font blog-title text-left sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {blok.title}
            </h1> */}
            {/* <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium ">
            {blok.subtitle}
          </h1> */}
            {/* <div className="mb-8 leading-relaxed text-justify">
              {parse(blok.content)}
            </div> */}
            {/* </div> */}
          </div>
        </div>

        <div>
          <div className="ready_sec">
            <div className="ready_img relative">
              <p>
                <img
                  className="ready_main web_img alignnone"
                  src="/images/ready.png"
                  alt="get in touch"
                />
                <img
                  className="mobile_img border_redius20 alignnone"
                  src="/images/ready_mobile.jpg"
                  alt="get in touch"
                />
              </p>
              <div className="redy_title home_sec2_txt3">
                <p className="!w-full">
                  READY TO DEVELOP YOUR SUCCESS STORY WITH US?
                </p>
              </div>
              <div className="get_touch">
                <div className="get_flex ml-14">
                  <div className="get_icon">
                    <Link href="/contact-us/">
                      <img
                        className="alignnone"
                        src="/images/right_arrow.png"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="get_text">
                    <p>
                      <Link href="/contact-us/">Get in Touch</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[94%] w-full mx-auto">
          <div className="service_sec3">
            <div className="home_sec2_txt3">
              <p className="!ml-0 extra_bold !w-full">You might also like</p>
            </div>
          </div>

          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-[2rem]">
            {blogData?.length
              ? blogData.map(({ slug, name, content }, index) => (
                  <div
                    key={index}
                    className="border-[1px] border-[#80808038] rounded-[30px] blog_flex_30"
                  >
                    <Link as={`/blog/${slug}`} href={`/blog/[slug]`}>
                      <div className="sec9_img1">
                        <img
                          className="rounded-[20px]"
                          src={content?.Image?.filename}
                          alt={content?.Image?.alt}
                        />
                      </div>
                      <div className="pt-[1rem] px-[1rem] pb-[1.5rem] blog-hover">
                        <div className="sec9_txt1 border-b-[1px] border-[#80808038] py-[1rem]">
                          <p className="entry-title default-max-width aspect-[518/116]">
                            {name}
                          </p>
                        </div>
                        <div className="sec9_txt2 mt-[1.5rem]">
                          <p>
                            <Link as={`/blog/${slug}`} href={`/blog/[slug]`}>
                              {content?.PublishedDate}
                            </Link>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              : null}
          </div>
        </div>
      </section>
    </>
  );
};
export default Article;
