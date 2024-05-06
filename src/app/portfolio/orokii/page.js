import dynamic from 'next/dynamic';
const PortfolioInnerOrokii = dynamic(() =>
  import('@/app/components/Portfolio/PortfolioInnerOrokii'),
);

export const metadata = {
  title: 'Orokii - Portfolio | Cross-Border Payments | Brilworks Software',
  description:
    "Check out Brilworks's work for Orokii. How we helped Orokii to build a custom fintech application with faster & secure transactions.",
  openGraph: {
    title: 'Orokii - Portfolio | Cross-Border Payments | Brilworks Software',
    description:
      "Check out Brilworks's work for Orokii. How we helped Orokii to build a custom fintech application with faster & secure transactions.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/orokii/`,
    siteName: 'Mobile App & Software Development Company | Brilworks',
    locale: 'en-US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@_Brilworks',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/orokii/`,
  },
};

const page = () => {
  return <PortfolioInnerOrokii />;
};

export default page;
