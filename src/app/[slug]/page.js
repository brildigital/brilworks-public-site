import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import Layout from "../components/Layout";

export default async function Page({ params }) {
  const { props: data } = await fetchData(params?.slug);
  return (
    <Layout story={data?.config}>
      <StoryblokStory story={data?.story} />
    </Layout>
  );
}

export async function fetchData(slug) {
  let sbParams = { version: "draft", resolve_links: "url" };

  const storyblokApi = getStoryblokApi();
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
