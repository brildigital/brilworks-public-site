import { getStoryblokApi } from "@storyblok/react/rsc";
import HomePage from "./home/page";
import StoryblokStory from "@storyblok/react/story";
import Layout from "./components/Layout";

export const metadata = {
  title: "Mobile App & Software Development Company | Brilworks",
  description:
    "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
  openGraph: {
    title: "Mobile App & Software Development Company | Brilworks",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Mobile App & Software Development Company | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/banner.jpg`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Mobile App & Software Development Company | Brilworks",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

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

  let sbParams = {
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    resolve_links: "url",
  };

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
