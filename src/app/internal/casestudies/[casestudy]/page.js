import { getStoryblokApi } from '@storyblok/react/rsc';
import CaseStudyContent from '@/app/components/CaseStudies/CaseStudyContent';

export const metadata = {
  openGraph: {
    siteName: 'Mobile App & Software Development Company | Brilworks',
    locale: 'en-US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@_Brilworks',
    creator: '@_Brilworks',
  },
};

export default async function Page(props) {
  const { params } = props || {};
  const { props: data } = await fetchData(params);

  if (!data) {
    return null;
  }

  return (
    <>
      <head>
        <title>{data?.story?.name || data?.story?.content?.title}</title>

        <link
          rel='canonical'
          href={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.story?.full_slug}/`}
        />

        <meta
          property='og:title'
          content={data?.story?.name || data?.story?.content?.title}
        ></meta>

        <meta
          property='og:url'
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.story?.full_slug}/`}
        ></meta>
      </head>
      <CaseStudyContent data={data.story} />
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
    `cdn/stories/internal/casestudies/${params?.casestudy}`,
    sbParams,
  );

  return {
    props: {
      story: data ? data.story : false,
    },
    revalidate: 3600,
  };
};
