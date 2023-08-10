// "use client";
// import { getStoryblokApi } from "@storyblok/react";
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
// import Layout from "../../components/Layout";
// import { StoryblokComponent } from "@storyblok/react/rsc";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer";

// export async function generateMetadata(props, parent) {
//   // read route params
//   // const id = params.id;

//   // fetch data
//   // const product = await fetch(`https://.../${id}`).then((res) => res.json());
//   console.log("props", props);
//   // console.log("parent", parent);
//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: props?.story?.name || "This is fallback",
//     openGraph: {
//       images: ["/some-specific-page-image.jpg", ...previousImages],
//     },
//   };
// }

export const metadata = {
  openGraph: {
    siteName: "Mobile App & Software Development Company | Brilworks",
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
          href={`https://brilworks.com/blog/${data?.story?.slug}/`}
        />

        <meta
          property="og:title"
          content={data?.story?.content?.metatags?.og_title}
        ></meta>

        <meta
          property="og:url"
          content={`https://brilworks.com/blog/${data?.story?.slug}/`}
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
            data?.story?.content?.image?.filename
          }
        />

        <meta
          property="article:publisher"
          content="https://www.facebook.com/brilwork/"
        ></meta>
        <meta name="author" content={data?.story?.content?.author}></meta>
        <meta
          name="twitter:image"
          content={
            data?.story?.content?.metatags?.twitter_image ||
            data?.story?.content?.image?.filename
          }
        ></meta>
        <meta name="twitter:label1" content="Written by"></meta>
        <meta
          name="twitter:data1"
          content={data?.story?.content?.author}
        ></meta>
        <meta name="twitter:label2" content="Est. reading time"></meta>
        <meta
          name="twitter:data2"
          content={`${data?.story?.content?.reading_time_in_minutes} minutes`}
        ></meta>
      </head>
      <Header />
      <StoryblokStory story={data?.story} />
      <Footer />
    </>
  );
}

export async function fetchData(params) {
  let slug = params?.slug ? `blog/${params.slug}` : "home";
  const storyblokApi = getStoryblokApi();

  let sbParams = { version: "draft", resolve_links: "url" };

  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  let { data: config } = await storyblokApi.get("cdn/stories/config");
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      config: config ? config.story : false,
    },
    revalidate: 3600,
  };
}
