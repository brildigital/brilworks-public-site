import {
  blogAuthor,
  calculateReadingTime,
  formatSrcUrl,
  formattedDate,
} from "@/app/components/lib/commonFunction";
import Link from "next/link";
import Image from "next/image";
import StoryblokStory from "@storyblok/react/story";
import FetchDataSpinner from "@/app/components/Homepage/FetchDataSpinner";
import { Suspense } from "react";
import { generateBlogPostingSchema } from "@/app/components/lib/schemaCode";
import Heading from "@/app/components/HTMLComponents/Heading";

export default function ArticleStoryView({ story, slug, urlPrefix = "portfolio" }) {
  const totalDataWord =
    (story?.content?.content || "") +
    (story?.content?.Content_1 || "") +
    (story?.content?.Content_2 || "") +
    (story?.content?.Content_3 || "");

  const author = story?.content?.BlogAuthor
    ? blogAuthor(story.content.BlogAuthor)
    : null;

  const breadcrumbLabel =
    urlPrefix === "case-studies" ? "Case Studies" : "Portfolio";

  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBlogPostingSchema({
            title: story?.content?.title,
            description: story?.content?.metatags?.description || "",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}${urlPrefix}/${slug}/`,
            imageUrl: formatSrcUrl(
              story?.content?.mobile_banner?.filename ||
                story?.content?.image?.filename,
            ),
            datePublished: story?.content?.Published || story?.created_at,
            dateModified: story?.published_at,
            authorName: author?.name,
            authorUrl: author?.authorLinkedIn,
            category: story?.content?.Category,
            readingTime: calculateReadingTime(totalDataWord),
          }),
        }}
      />
      <div className="bg-detail-hero">
        <div className="h-full min-h-[600px] md:max-h-[700px] max-h-full">
          <div className="container max-w-[1280px] main-section-padding !pt-24 mx-auto">
            <div className="text-white flex flex-col items-start justify-between h-full min-h-[500px] md:max-h-[700px] max-h-full">
              <div></div>
              <div>
                <div
                  className="w-full inline-flex flex-wrap items-center mb-3 min-h-[36px]"
                  aria-label="Breadcrumb"
                >
                  <Suspense
                    fallback={
                      <div className="scale-[0.5]">
                        <FetchDataSpinner />
                      </div>
                    }
                  >
                    <span className="sxl:text-2xl md:text-xl text-lg text-white hover:text-themeColor duration-500">
                      <Link title="Brilworks home." href="/">
                        Brilworks
                      </Link>
                    </span>
                    <span className="self-center md:mx-2 mx-1.5 mt-[2px]">
                      <Image
                        className="md:!w-6 w-5"
                        src="/images/v2/arrow-right.svg"
                        alt="arrow"
                        width="20"
                        height="10"
                        priority="true"
                      />
                    </span>
                    <span className="sxl:text-2xl md:text-xl text-lg text-white font-medium">
                      {breadcrumbLabel}
                    </span>
                    {story?.content?.Category ? (
                      <>
                        <span className="self-center md:mx-2 mx-1.5 mt-[2px]">
                          <Image
                            className="md:!w-6 w-5"
                            src="/images/v2/arrow-right.svg"
                            alt="arrow"
                            width="20"
                            height="10"
                            priority="true"
                          />
                        </span>
                        <span className="sxl:text-2xl md:text-xl text-lg text-white">
                          {story.content.Category}
                        </span>
                      </>
                    ) : null}
                  </Suspense>
                </div>
                <Heading type="h1" text={story?.content?.title} />
              </div>
              <div className="w-full md:w-[60%] flex slg:items-center items-start slg:flex-row flex-col">
                {author ? (
                  <div className="flex items-center justify-between slg:border-r-2 slg:border-[#5C6878] slg:mb-0 mb-2">
                    <Image
                      src={author?.authorImage}
                      width="54"
                      height="56"
                      alt={author?.name}
                      className="!rounded-full md:!w-14 md:!h-14 !w-10 !h-10"
                      priority="true"
                    />
                    <div className="pl-[10px] md:pr-10">
                      <Link
                        className="sxl:text-2xl md:text-xl text-base font-medium"
                        href={author?.authorLinkedIn || "#"}
                        title={`Posts by ${author?.name}`}
                        rel="author external"
                      >
                        {author?.name}
                      </Link>
                      <br />
                      <span className="sxl:!text-xl md:text-lg text-base">
                        {formattedDate(story?.content?.Published || new Date())}
                      </span>
                    </div>
                  </div>
                ) : null}
                <div className="flex items-start flex-col sxl:text-xl md:text-lg text-base slg:!pl-10 gap-1">
                  <div className="flex sxl:items-center items-start">
                    <span className="sxl:w-7 sxl:h-7 w-6 h-6 mr-1.5">
                      <Image
                        src="/images/v2/clock-icon.svg"
                        width={32}
                        height={32}
                        alt="Clock icon"
                        priority="true"
                      />
                    </span>
                    {calculateReadingTime(totalDataWord)} mins read
                  </div>
                  <div className="flex sxl:items-center items-start">
                    <span className="sxl:w-7 sxl:h-7 w-6 h-6 mr-1.5">
                      <Image
                        src="/images/v2/calendar-icon.svg"
                        width={32}
                        height={32}
                        alt="Calendar icon"
                        priority="true"
                      />
                    </span>
                    Last updated{" "}
                    {formattedDate(story?.published_at || new Date())}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-main">
        <div className="container max-w-[1280px] main-section-padding-top mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="lg:max-h-[268px] relative md:h-auto overflow-hidden !bg-cover !bg-center">
                <Suspense
                  fallback={
                    <div className="scale-[0.5]">
                      <FetchDataSpinner />
                    </div>
                  }
                >
                  {(story?.content?.mobile_banner?.filename ||
                    story?.content?.image?.filename) && (
                    <>
                      <Image
                        className="rounded-[15px] block md:hidden !max-h-[288px] !h-auto !object-cover"
                        src={formatSrcUrl(
                          story?.content?.mobile_banner?.filename ||
                            story?.content?.image?.filename,
                        )}
                        alt={
                          story?.content?.image?.alt ||
                          (story?.content?.title || "")
                            .replaceAll(" ", "-") + "-banner-image"
                        }
                        width={828}
                        height={169}
                        priority
                        unoptimized
                        sizes="(min-width: 1040px) 42.35vw, (min-width: 640px) 60.84vw, calc(100vw - 30px)"
                      />
                      <Image
                        className="rounded-[15px] hidden md:block !max-h-[288px] !h-auto !object-cover"
                        src={formatSrcUrl(
                          story?.content?.image?.filename ||
                            story?.content?.mobile_banner?.filename,
                        )}
                        alt={
                          story?.content?.image?.alt ||
                          (story?.content?.title || "")
                            .replaceAll(" ", "-") + "-banner-image"
                        }
                        width={828}
                        height={169}
                        priority
                        unoptimized
                        sizes="(min-width: 1040px) 42.35vw, (min-width: 640px) 60.84vw, calc(100vw - 30px)"
                      />
                    </>
                  )}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[200vh] blog-main">
        <StoryblokStory story={story} />
      </div>
    </>
  );
}
