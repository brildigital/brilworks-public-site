import {
  blogAuthor,
  calculateReadingTime,
  formatSrcUrl,
  formattedDate,
} from "@/app/components/lib/commonFunction";
import Link from "next/link";
import Image from "next/image";
import StoryblokStory from "@storyblok/react/story";
import { getblog } from "@/app/components/lib/getblog";
import { notFound } from "next/navigation";
import FetchDataSpinner from "@/app/components/Homepage/FetchDataSpinner";
import { Suspense } from "react";
import { generateRatingSchema, generateBlogPostingSchema } from "@/app/components/lib/schemaCode";
import Heading from "@/app/components/HTMLComponents/Heading";

export async function generateMetadata({ params }) {
  const { props: data } = await fetchData(params?.slug);
  const story = data?.story;

  if (!story) return {};

  const totalDataWord =
    story.content.content +
    story.content.Content_1 +
    story.content.Content_2 +
    story.content.Content_3;

  return {
    title: `${story.content.metatags?.title || story?.content?.title}`,
    description: story.content.metatags?.description,
    authors: [{ name: story.content.BlogAuthor }],
    openGraph: {
      title: story.content.metatags?.og_title || story.content.title,
      description:
        story.content.metatags?.og_description ||
        story.content.metatags?.description,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}blog/${story.slug}/`,
      images: [
        {
          url: formatSrcUrl(
            story.content.metatags?.og_image ||
              story.content?.mobile_banner?.filename,
          ),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: story.content.metatags?.og_title || story.content.title,
      description:
        story.content.metatags?.og_description ||
        story.content.metatags?.description,
      images: [
        formatSrcUrl(
          story?.content.metatags?.twitter_image ||
            story?.content?.mobile_banner?.filename,
        ),
      ],
      creator: story.content.BlogAuthor,
      site: "@_Brilworks",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}blog/${story.slug}/`,
    },
    other: {
      "twitter:label1": "Written by",
      "twitter:data1": story.content.BlogAuthor,
      "twitter:label2": "Est. reading time",
      "twitter:data2": `${calculateReadingTime(totalDataWord)} minutes`,
    },
  };
}

export default async function Page(props) {
  const { params } = props || {};
  const { props: data } = await fetchData(params?.slug);
  if (!data?.story) {
    return notFound();
  }

  const totalDataWord =
    data?.story?.content?.content +
    data?.story?.content?.Content_1 +
    data?.story?.content?.Content_2 +
    data?.story?.content?.Content_3;

  const author = blogAuthor(data?.story?.content?.BlogAuthor);

  const showRatingBasedOnPathname = {
    "comprehensive-comparison-sendgrid-vs-mailgun-vs-amazon-ses-vs-mandrill": {
      title: data?.story?.content?.title,
      pageURL: params?.slug,
      ratingValue: "4.7",
      ratingCount: "139",
    },
    "cross-platform-app-development-best-frameworks": {
      title: data?.story?.content?.title,
      pageURL: params?.slug,
      ratingValue: 4.6,
      ratingCount: 110,
    },
    "apple-vision-pro-vs-meta-quest-3": {
      title: data?.story?.content?.title,
      pageURL: params?.slug,
      ratingValue: 4.5,
      ratingCount: 90,
    },
    "best-node-js-open-source-projects-in-github": {
      title: data?.story?.content?.title,
      pageURL: params?.slug,
      ratingValue: 4.6,
      ratingCount: 90,
    },
    "optimize-your-nest-js-app-performance-with-these-practices": {
      title: data?.story?.content?.title,
      pageURL: params?.slug,
      ratingValue: 4.6,
      ratingCount: 90,
    },
    "top-10-websites-built-using-react-js": {
      title: data?.story?.content?.title,
      pageURL: params?.slug,
      ratingValue: 4.8,
      ratingCount: 120,
    },
    "top-node-js-frameworks-for-web-development": {
      title: data?.story?.content?.title,
      pageURL: params?.slug,
      ratingValue: 4.7,
      ratingCount: 100,
    },
    "top-popular-apps-built-with-react-native": {
      title: data?.story?.content?.title,
      pageURL: params?.slug,
      ratingValue: 4.5,
      ratingCount: 85,
    },
    "what-is-custom-web-application-development-how-to-get-started": {
      title: data?.story?.content?.title,
      pageURL: params?.slug,
      ratingValue: 4.6,
      ratingCount: 95,
    },
    "whats-new-in-spring-boot-3-for-java-developers-in-2023": {
      title: data?.story?.content?.title,
      pageURL: params?.slug,
      ratingValue: 4.4,
      ratingCount: 80,
    },
    "path-to-become-aws-partner": {
      title: data?.story?.content?.title,
      pageURL: params?.slug,
      ratingValue: 4.3,
      ratingCount: 75,
    },
    "react-native-vs-kotlin": {
      title: data?.story?.content?.title,
      pageURL: params?.slug,
      ratingValue: 4.7,
      ratingCount: 110,
    },
    "what-is-rapid-application-development-a-detailed-guide": {
      title: data?.story?.content?.title,
      pageURL: params?.slug,
      ratingValue: 4.6,
      ratingCount: 98,
    },
    "next-js-13-drops-with-exciting-updates-find-out-whats-new": {
      title: data?.story?.content?.title,
      pageURL: params?.slug,
      ratingValue: 4.8,
      ratingCount: 130,
    },
  };

  const { title, pageURL, ratingValue, ratingCount } =
    showRatingBasedOnPathname[params?.slug] || [];

  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBlogPostingSchema({
            title: data?.story?.content?.title,
            description: data?.story?.content?.metatags?.description || "",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}blog/${params?.slug}/`,
            imageUrl: formatSrcUrl(
              data?.story?.content?.mobile_banner?.filename ||
                data?.story?.content?.image?.filename,
            ),
            datePublished: data?.story?.content?.Published || data?.story?.created_at,
            dateModified: data?.story?.published_at,
            authorName: author?.name,
            authorUrl: author?.authorLinkedIn,
            category: data?.story?.content?.Category,
            readingTime: calculateReadingTime(totalDataWord),
          }),
        }}
      />
      {title && ratingValue && ratingCount && (
        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateRatingSchema(
              title,
              `${pageURL}/`,
              ratingValue,
              ratingCount,
            ),
          }}
        />
      )}
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
                      <Link title="Brilworks Blog." href="/">
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
                    <span className="sxl:text-2xl md:text-xl text-lg text-white hover:text-themeColor duration-500 font-medium">
                      <Link title="Go to Blog." href="/blog">
                        Blog
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
                    <span className="sxl:text-2xl md:text-xl text-lg text-white">
                      {/* <Link
                      title="Go to the Web App Development category."
                      href="#"
                    > */}
                      {data?.story?.content?.Category ===
                      "Cloud DevOps and Data"
                        ? "Cloud, DevOps and Data"
                        : data?.story?.content?.Category}
                      {/* </Link> */}
                    </span>
                  </Suspense>
                </div>
                {/* <p className="sxl:text-2xl md:text-xl text-lg md:!mb-5 !mb-4">
                  {data?.story?.content?.title}
                </p> */}
                <Heading type="h1" text={data?.story?.content?.title} />
              </div>
              <div className="w-full md:w-[60%] flex slg:items-center items-start slg:flex-row flex-col">
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
                    <span className="sxl:!text-xl md:text-lg text-base">
                      {formattedDate(
                        data?.story?.content?.Published || new Date(),
                      )}
                    </span>
                  </div>
                </div>
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
                    {formattedDate(data?.story?.published_at || new Date())}
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
                  <Image
                    className="rounded-[15px] block md:hidden !max-h-[288px] !h-auto !object-cover"
                    src={formatSrcUrl(
                      data?.story?.content?.mobile_banner?.filename ||
                        data?.story?.content?.image?.filename,
                    )}
                    alt={
                      data?.story?.content.image?.alt ||
                      data?.story?.content?.title.replaceAll(" ", "-") +
                        "-banner-image"
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
                      data?.story?.content.image?.filename ||
                        data?.story?.content.mobile_banner?.filename,
                    )}
                    alt={
                      data?.story?.content.image?.alt ||
                      data?.story?.content?.title.replaceAll(" ", "-") +
                        "-banner-image"
                    }
                    width={828}
                    height={169}
                    priority
                    unoptimized
                    sizes="(min-width: 1040px) 42.35vw, (min-width: 640px) 60.84vw, calc(100vw - 30px)"
                  />
                </Suspense>
              </div>
              {/* {data?.story?.content?.Quick_Summary ? (
                <div className="min-h-[80px]">
                  <QuickSummary data={data?.story?.content?.Quick_Summary} />
                </div>
              ) : (
                <></>
              )} */}
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[200vh] blog-main">
        {" "}
        <StoryblokStory story={data?.story} />
      </div>
    </>
  );
}
export async function fetchData(slug) {
  try {
    const storyUrl = new URL(
      `https://api.storyblok.com/v2/cdn/stories/blog/${slug}`,
    );
    storyUrl.searchParams.append(
      "token",
      process.env.NEXT_PUBLIC_ACCESS_TOKEN || "",
    );
    storyUrl.searchParams.append(
      "version",
      process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    );

    storyUrl.pathname += ``;

    const storyRes = await fetch(storyUrl.toString(), {
      next: { revalidate: 0 },
      headers: { "Accept-Encoding": "gzip" }, // Enable compression
    });

    const storyData = await storyRes.json();
    return {
      props: {
        story: storyData?.story || false,
        key: storyData?.story?.id || false,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
export async function generateStaticParams() {
  const posts = await getblog();
  return posts.map((post) => ({ slug: post.slug }));
}
