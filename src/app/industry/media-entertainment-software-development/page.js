import dynamic from 'next/dynamic';
import { generateBreadcrumb } from '@/app/components/lib/schemaCode';

const MediaAndEntertainment = dynamic(() =>
  import('@/app/components/Solution/MediaAndEntertainment'),
);

export const metadata = {
  title: 'Media and Entertainment Software Development Service',
  description:
    'Brilworks Software provides media and entertainment software development services including OTT streaming, ticket booking, and gaming.',
  openGraph: {
    title: 'Media and Entertainment Software Development Service',
    description:
      'Brilworks Software provides media and entertainment software development services including OTT streaming, ticket booking, and gaming.',
    url: `${process.env.NEXT_PUBLIC_BASE_URL}industry/media-entertainment-software-development/`,
    siteName: 'Mobile App & Software Development Company | Brilworks',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/explore-arrow-01.png`,
      },
    ],
    locale: 'en-US',
    type: 'article',
  },
  twitter: {
    title: 'Media and Entertainment Software Development Service',
    description:
      'Brilworks Software provides media and entertainment software development services including OTT streaming, ticket booking, and gaming.',
    card: 'summary_large_image',
    site: '@_Brilworks',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}industry/media-entertainment-software-development/`,
  },
};

const page = () => {
  return (
    <>
      <script
        defer
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb(
            'Media And Entertainment Software Development Company',
          ),
        }}
      />
      <MediaAndEntertainment />
    </>
  );
};

export default page;
