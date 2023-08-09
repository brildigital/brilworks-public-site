// "use client";
// import { getStoryblokApi } from "@storyblok/react";
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
// import Layout from "../../components/Layout";
// import { StoryblokComponent } from "@storyblok/react/rsc";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer";
import Head from "next/head";

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

export default async function Page(props) {
  const { params } = props || {};
  const { props: data } = await fetchData(params);
  console.log("data", data);
  if (!data?.story) {
    return null;
  }
  return (
    <>
      <head>
        <title>{data?.story?.name}</title>
        <meta
          name="description"
          content="DesignRush has announced top mobile app development companies for July 2023 and Brilworks Software has achieved 3rd position."
        />
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
