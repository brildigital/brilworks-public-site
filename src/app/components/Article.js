import Link from "next/link";
import Image from "next/image";
import { Suspense } from 'react';
import { getblogData } from "./lib/getblog";
import { blogAuthor, formattedDate } from "./lib/commonFunction";
import BlogContactForm from "./Blog/BlogContactForm";
import TableOfContent from "./TableOfContent";
import BlogContent from "./BlogContent";
import FetchDataSpinner from "./Homepage/FetchDataSpinner";

async function RelatedPosts({ pathname }) {
  const blogData = await getblogData(1, 4);

  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-[2rem]">
      {blogData.storyData
        ?.filter(({ slug }) => !pathname?.includes(slug))
        ?.slice(0, 3)
        ?.map(({ slug, name, content }, index) => (
          <div
            key={index}
            className="border-[1px] border-[#80808038] rounded-[30px] blog_flex_30"
          >
            <Link
              as={`/blog/${slug}`}
              href={`/blog/[slug]`}
              target="_blank"
              rel="external"
            >
              <div className="sec9_img1">
                <Image
                  className="rounded-[30px]"
                  src={
                    content?.mobile_banner?.filename
                      ? content?.mobile_banner?.filename
                      : "/images/not-found-image.webp"
                  }
                  alt={
                    content?.mobile_banner?.alt ||
                    `Banner-img-${index}`
                  }
                  width={550}
                  height={283}
                  priority={index === 0}
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
        ))}
    </div>
  );
}

export default async function Article({ blok, pathname }) {
  if (!blok) {
    return <div><FetchDataSpinner/></div>; // Or any other appropriate loading/error state
  }
  const blogTableOfContent =
    blok?.content +
    blok.Content_1 +
    blok.Content_2 +
    blok.Content_3 +
    `${blok?.FAQ?.length ? "<h2>FAQ</h2>" : ""}` || "";

  const author = blogAuthor(blok?.BlogAuthor);

  return (
    <div className="blog-main">
      <div className="container max-w-[1280px] min-h-[400px] mx-auto my-0 !px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="slg:basis-1/5 slg:flex-shrink-0 slg:flex-grow-0 slg:max-w-[20%] !px-4 min-h-[1px] w-full slg:block hidden">
            <div className="sticky top-[110px] !pb-5">
              <TableOfContent blogTableOfContent={blogTableOfContent}/>
              <div className="!mt-7">
                <div className="flex items-start flex-wrap">
                  <Link
                    target="_blank"
                    href={`http://www.facebook.com/sharer.php?u=https://www.brilworks.com${pathname}`}
                    className="!mr-4"
                  >
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/images/fb-share.svg"
                      width="43"
                      unoptimized
                      height="43"
                      alt="Facebook blog share"
                    />
                  </Link>
                  <Link
                    target="_blank"
                    className="!mr-4"
                    href={`https://twitter.com/share?url=https://www.brilworks.com${pathname
                      ?.split("")
                      ?.splice(0, pathname.length - 1)
                      ?.join("")}`}
                  >
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/images/twitter-share.svg"
                      width="43"
                      unoptimized
                      height="43"
                      alt="Twitter blog share"
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href={`https://www.linkedin.com/sharing/share-offsite/?mini=true&url=https://www.brilworks.com${pathname}`}
                  >
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/images/linkedin-share.svg"
                      width="43"
                      unoptimized
                      height="43"
                      alt="LinkedIn blog share"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="slg:basis-4/5 slg:flex-shrink-0 slg:flex-grow-0 slg:max-w-[80%] !px-4 min-h-[1px] w-full">
            <div className="blog-inner items-center">
              <div className="flex -mx-4 md:flex-row flex-col">
                <div className="md:w-3/4 w-full !float-left">
                  <div className="h-full w-full box-border !px-4">
                    <div className="h-full flex flex-col">
                      <BlogContent blok={blok} author={author}/>
                      
                      {author && (
                        <div className="single-author-bio">
                          <div className="img-blk-wrapper lg:pb-[0rem] !pb-[3rem]">
                            <div className="img-blk">
                              <img
                                decoding="async"
                                loading="lazy"
                                src={author?.authorImage}
                                width={96}
                                height={96}
                                alt={author?.name || "author-Image"}
                                className="avatar avatar-96 wp-user-avatar wp-user-avatar-96 alignnone photo"
                              />
                            </div>
                          </div>
                          <div className="single-author-bio-text">
                            <h3>
                              <Link
                                href={
                                  author?.name === "Vikas Singh"
                                    ? "/blog/author/vikas-singh/"
                                    : author?.name === "Hitesh Umaletiya"
                                    ? "/blog/author/hitesh-umaletiya/"
                                    : author?.authorLinkedIn
                                }
                                title={`View ${author?.name} website`}
                                rel="author external"
                              >
                                {author?.name}
                              </Link>
                            </h3>
                            <p className="text-[18px]">
                              {author?.authorDesc}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="md:w-1/4 w-full !float-left">
                  <div className="h-full w-full box-border !pr-4 md:!pl-3 !pl-4">
                    <div className="h-full flex flex-col">
                      <BlogContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto md:!px-3 !px-4">
        <div className="ready_sec !pb-0 !pt-4">
          <div className="ready_img relative">
            <p>
              <img
                decoding="async"
                loading="lazy"
                className="ready_main hidden md:block alignnone"
                src="/images/ready.png"
                width={1408}
                height={450}
                alt="get in touch"
              />
              <img
                decoding="async"
                loading="lazy"
                className="block md:hidden rounded-[20px] alignnone"
                src="/images/ready-mobile.webp"
                width="340"
                height="720"
                alt="get in touch"
              />
            </p>
            
            <div className="redy_title home_sec2_txt3">
              <p className="!w-full font-bold">
                READY TO DEVELOP YOUR SUCCESS STORY WITH US?
              </p>
            </div>
            <div className="get_touch">
              <div className="get_flex ml-14">
                <div className="">
                  <Link href="/contact-us/">
                    <img
                      decoding="async"
                      loading="lazy"
                      className="alignnone"
                      src="/images/right_arrow.png"
                      alt="right arrow"
                      width={10}
                      height={20}
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

      <div className="container mx-auto md:!px-3 !px-4">
        <div className="flex flex-wrap flex-col xl:pb-20 md:pb-14 pb-8">
          <div className="service_sec3">
            <p className="home_sec2_txt3 !pb-0 md:!pt-8 !pt-0">
              <p className="!ml-0 extra_bold !w-full">
                You might also like
              </p>
            </p>
          </div>
          <Suspense fallback={<div>Loading related posts...</div>}>
            <RelatedPosts pathname={pathname} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}