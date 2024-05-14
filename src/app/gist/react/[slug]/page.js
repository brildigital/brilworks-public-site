'use client';
import TechQandAContent from '@/app/components/Gist/TechQandAContent';
import { getStoryblokApi } from '@storyblok/react';

export default async function Page(props) {
  const { params } = props || {};
  const { props: data } = await fetchData(params);

  if (!data) {
    return null;
  }

  return (
    <>
      <TechQandAContent data={data.story} />
    </>
  );
}

export const fetchData = async (params) => {
  const storyblokApi = getStoryblokApi();

  let sbParams = {
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    resolve_links: 'url',
  };

  const { data } = await storyblokApi.get(
    `cdn/stories/gist/react/${params?.slug}`,
    sbParams,
  );

  return {
    props: {
      story: data ? data.story : false,
    },
    revalidate: 3600,
  };
};
