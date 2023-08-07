import { getStoryblokApi } from "@storyblok/react/rsc";
import HomePage from "./home/page";
import StoryblokStory from "@storyblok/react/story";
import Layout from "./components/Layout";
import Head from "next/head";

export default async function Home() {
  const { props: data } = await fetchData();
  return (
    <>
      
      {/* <Layout story={data?.config}>
        <StoryblokStory story={data?.story} />
      </Layout> */}
      <HomePage />
    </>
  );
}

export async function fetchData(slug) {
  const storyblokApi = getStoryblokApi();

  let sbParams = { version: "draft", resolve_links: "url" };

  let { data } = await storyblokApi.get(`cdn/stories/home`, sbParams);
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
