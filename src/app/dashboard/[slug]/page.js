import React from 'react';
import { getStoryblokApi } from '@storyblok/react/rsc';
import ResourceData from '@/app/components/Dashboard/ResourceData';
import { notFound } from "next/navigation";

export default async function Page(props) {
  const { params } = props || {};
  const { props: data } = await fetchData(params);

  if (!data) {
    return notFound();
  }

  return (
    <div className='bg-white'>
      <ResourceData data={data.story} />
    </div>
  );
}

export const fetchData = async (params) => {
  const storyblokApi = getStoryblokApi();

  let sbParams = {
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    resolve_links: 'url',
  };

  const data = await storyblokApi.get(
    `cdn/stories/dashboard/${params?.slug}`,
    sbParams,
  );

  return {
    props: {
      story: data ? data.data?.story : false,
    },
    revalidate: 3600,
  };
};
