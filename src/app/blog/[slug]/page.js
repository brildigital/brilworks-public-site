"use client";
import { getStoryblokApi } from "@storyblok/react";
import Layout from "../../components/Layout";
import { StoryblokComponent } from "@storyblok/react";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer";
import Head from "next/head";

export default async function Page(props) {
  const { params } = props || {};
  const { props: data } = await fetchData(params);
  return (
    <>
      <Head>
        <title>{data?.story?.name}</title>
        <meta name="description" content="Description contest is written here" />
      </Head>
      <Header />
      <StoryblokComponent blok={data?.story?.content} />
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
