import dynamic from 'next/dynamic';

const PortfolioInnerVugo = dynamic(() =>
  import('@/app/components/Portfolio/PortfolioInnerVugo'),
);

export const metadata = {
  title: 'Vugo - Portfolio | Car Advertising | Brilworks Software',
  description:
    "Check out Brilworks's work for Vugo. How we helped Vugo to create a unique in-car advertising application and increase in driver earnings and advertiser queries.",
  openGraph: {
    title: 'Vugo - Portfolio | Car Advertising | Brilworks Software',
    description:
      "Check out Brilworks's work for Vugo. How we helped Vugo to create a unique in-car advertising application and increase in driver earnings and advertiser queries.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/vugo/`,
    siteName: 'Mobile App & Software Development Company | Brilworks',
    locale: 'en-US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@_Brilworks',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/vugo/`,
  },
};

const page = () => {
  return <PortfolioInnerVugo />;
};

export default page;
