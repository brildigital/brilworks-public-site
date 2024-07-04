import {
  blogAuthor,
  calculateReadingTime,
  formattedDate,
} from "@/app/components/lib/commonFunction";
import Link from "next/link";
import Image from "next/image";
import StoryblokStory from "@storyblok/react/story";
import QuickSummary from "@/app/components/Blog/QuickSummary";

export const metadata = {
  openGraph: {
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
    creator: "@_Brilworks",
  },
};

export default async function Page(props) {
  const { params } = props || {};
  const { props: data } = await fetchData(params);
  if (!data?.story) {
    return null;
  }

  const totalDataWord =
    data?.story?.content?.content +
    data?.story?.content?.Content_1 +
    data?.story?.content?.Content_2 +
    data?.story?.content?.Content_3;

  const author = blogAuthor(data?.story?.content?.BlogAuthor);

  return (
    <>
      <head>
        <title>
          {data?.story?.content?.metatags?.title || data?.story?.content?.title}
        </title>

        <meta
          name="description"
          content={data?.story?.content?.metatags?.description}
        />

        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}blog/${data?.story?.slug}/`}
        />

        <meta
          property="og:title"
          content={
            data?.story?.content?.metatags?.og_title ||
            data?.story?.content?.title
          }
        ></meta>

        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}blog/${data?.story?.slug}/`}
        ></meta>

        <meta
          name="og:description"
          content={
            data?.story?.content?.metatags?.og_description ||
            data?.story?.content?.metatags?.description
          }
        />

        <meta
          property="og:image"
          content={
            data?.story?.content?.metatags?.og_image ||
            data?.story?.content?.mobile_banner?.filename
          }
        />
        <meta name="author" content={data?.story?.content?.BlogAuthor}></meta>
        <meta
          name="twitter:image"
          content={
            data?.story?.content?.metatags?.twitter_image ||
            data?.story?.content?.mobile_banner?.filename
          }
        ></meta>
        <meta name="twitter:label1" content="Written by"></meta>
        <meta
          name="twitter:data1"
          content={data?.story?.content?.BlogAuthor}
        ></meta>
        <meta name="twitter:label2" content="Est. reading time"></meta>
        <meta
          name="twitter:data2"
          content={`${calculateReadingTime(totalDataWord)} minutes`}
        ></meta>
      </head>
      <div className="md:pt-[8rem] pt-[6rem] blog-main">
        <div className="container max-w-[1280px] mx-auto my-0 !px-4 blog-initial">
          <div className="flex flex-wrap -mx-4">
            <div className="sxl:basis-3/4 sxl:flex-shrink-0 sxl:flex-grow-0 sxl:max-w-[75%] sxl:ml-[20%] sxl:mb-6 mb-4 !px-4 min-h-[1px] w-full">
              <div className="slg:w-[calc(100%_-_170px)]">
                <div
                  className="w-full inline-flex flex-wrap items-center mb-3 min-h-[24px]"
                  aria-label="Breadcrumb"
                >
                  <span className="blog-navigation">
                    <Link title="Brilworks Blog." href="/">
                      Brilworks
                    </Link>
                  </span>
                  <span className="self-center md:mx-2 mx-1 mt-[2px]">
                    <Image
                      className="!w-[20px]"
                      src="/images/black_aerrow-1.png"
                      alt="arrow"
                      width="20"
                      height="10"
                      priority="true"
                    />
                  </span>
                  <span className="blog-navigation">
                    <Link title="Go to Blog." href="/blog">
                      Blog
                    </Link>
                  </span>
                  <span className="self-center md:mx-2 mx-1 mt-[2px]">
                    <Image
                      className="!w-[20px]"
                      src="/images/black_aerrow-1.png"
                      alt="arrow"
                      width="20"
                      height="10"
                      priority="true"
                    />
                  </span>
                  <span className="blog-navigation">
                    <Link
                      title="Go to the Web App Development category."
                      href="#"
                    >
                      {data?.story?.content?.Category ===
                      "Cloud DevOps and Data"
                        ? "Cloud, DevOps and Data"
                        : data?.story?.content?.Category}
                    </Link>
                  </span>
                  <span className="self-center md:mx-2 mx-1 mt-[2px]">
                    <Image
                      className="!w-[20px]"
                      src="/images/black_aerrow-1.png"
                      alt="arrow"
                      width="20"
                      height="10"
                      priority="true"
                    />
                  </span>
                  <span>{data?.story?.content.title}</span>
                </div>
                <h1 className="default-max-width md:!text-[2.5rem] !text-[2rem] !font-bold !mb-5 md:leading-[50px] leading-[44px] -tracking-[.52px] min-h-[50px]">
                  {data?.story?.content.title}
                </h1>
              </div>
              <div className="slg:w-[calc(100%_-_170px)] flex xl:items-end items-start xl:flex-row flex-col justify-between md:gap-1 gap-2 min-h-[56px]">
                {/* {author && ( */}
                <div className="flex items-center justify-between">
                  <Image
                    src={author?.authorImage}
                    width="54"
                    height="56"
                    alt={author?.name}
                    className="!rounded-full md:!w-14 md:!h-14 !w-10 !h-10"
                    priority="true"
                  />
                  <div className="pl-[10px] ">
                    <Link
                      className="md:text-[20px] text-base font-bold"
                      href={
                        author?.name === "Vikas Singh"
                          ? "/blog/author/vikas-singh/"
                          : author?.name === "Hitesh Umaletiya"
                          ? "/blog/author/hitesh-umaletiya/"
                          : author?.authorLinkedIn
                      }
                      title={`Posts by ${author?.name}`}
                      rel="author external"
                    >
                      {author?.name}
                    </Link>
                    <br />
                    <span>
                      {formattedDate(
                        data?.story?.content.Published || new Date()
                      )}
                    </span>
                  </div>
                </div>
                {/* )} */}
                <div className="flex sxl:items-center items-start sxl:flex-row flex-col !text-[16px] pb-1 md:mt-4 md:gap-0 gap-2">
                  <div className="flex sxl:items-center items-start md:mr-5 ">
                    <span className="!w-5 !h-5 mr-1 !mb-[2px] ml-[2px]">
                      <Image
                        src="/images/clock_icon.png"
                        width={32}
                        height={32}
                        alt="Clock icon"
                        priority="true"
                      />
                    </span>
                    {calculateReadingTime(totalDataWord)} mins read
                  </div>
                  <div className="flex sxl:items-center items-start ">
                    <span className="!w-6 !h-6 mr-1">
                      <Image
                        src="/images/calendar_icon.png"
                        width={32}
                        height={32}
                        alt="Calendar icon"
                        priority="true"
                      />
                    </span>
                    Last updated{" "}
                    {formattedDate(data?.story?.published_at || new Date())}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 ">
            <div className="sxl:basis-3/4 sxl:flex-shrink-0 sxl:flex-grow-0 sxl:max-w-[75%] sxl:ml-[20%] !px-4 w-full">
              <div className="h-auto relative md:mb-6 mb-4 slg:!w-[calc(100%_-_170px)] overflow-hidden !bg-cover !bg-center">
                <Image
                  className="rounded-[15px] block md:hidden !max-h-[288px] !h-auto !object-cover"
                  src={
                    data?.story?.content.mobile_banner?.filename ||
                    data?.story?.content.image?.filename
                  }
                  alt={data?.story?.content.image?.alt}
                  width={828}
                  height={426}
                  priority
                  sizes="(min-width: 1040px) 42.35vw, (min-width: 640px) 60.84vw, calc(100vw - 30px)"
                  media="(max-width: 767px)"
                />
                <Image
                  className="rounded-[15px] hidden md:block !max-h-[288px] !h-auto !object-cover"
                  src={
                    data?.story?.content.image?.filename ||
                    data?.story?.content.mobile_banner?.filename
                  }
                  alt={data?.story?.content.image?.alt}
                  width={828}
                  height={169}
                  priority
                  sizes="(min-width: 1040px) 42.35vw, (min-width: 640px) 60.84vw, calc(100vw - 30px)"
                />
              </div>

              {data?.story?.content?.Quick_Summary ? (
                <div className="min-h-[80px]">
                  <QuickSummary data={data?.story?.content?.Quick_Summary} />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      <StoryblokStory story={data?.story} />
    </>
  );
}

export async function fetchData(params) {
  try {
    let slug = params?.slug ? `blog/${params.slug}` : "home";
    // const storyblokApi = getStoryblokApi();

    let sbParams = {
      version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
      resolve_links: "url",
    };
    const storyList = `https://api.storyblok.com/v2/cdn/stories?version=${sbParams.version}&resolve_links=${sbParams.resolve_links}&token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
    const storyUrl = `https://api.storyblok.com/v2/cdn/stories/${slug}?version=${sbParams.version}&resolve_links=${sbParams.resolve_links}&token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
    const configUrl = `https://api.storyblok.com/v2/cdn/stories/config?version=${sbParams.version}&token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;

    const [storyRes, configRes] = await Promise.all([
      fetch(storyUrl, { cache: "no-store" }),
      fetch(configUrl, { cache: "no-store" }),
      fetch(configUrl, { cache: "no-store" }),
    ]);

    console.log();
    const storyData = await storyRes.json();
    const configData = await configRes.json();

    return {
      props: {
        story: storyData?.story || false,
        key: storyData?.story?.id || false,
        config: configData?.story || false,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
