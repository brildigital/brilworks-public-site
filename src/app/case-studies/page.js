import CaseStudiesHub from "./CaseStudiesHub";

export const metadata = {
  title: "Case Studies — Real Engagements, Real Outcomes | Brilworks",
  description:
    "See how Brilworks helped SaaS, fintech, and e-commerce teams fix broken data, cut costs, and ship faster — with the architecture, tradeoffs, and outcomes called out.",
  openGraph: {
    title: "Case Studies — Real Engagements, Real Outcomes | Brilworks",
    description:
      "See how Brilworks helped SaaS, fintech, and e-commerce teams fix broken data, cut costs, and ship faster.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}case-studies/`,
    siteName: "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: { card: "summary_large_image", site: "@_Brilworks" },
  alternates: { canonical: `${process.env.NEXT_PUBLIC_BASE_URL}case-studies/` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Case Studies",
  url: `${process.env.NEXT_PUBLIC_BASE_URL}case-studies/`,
  publisher: { "@type": "Organization", name: "Brilworks", url: "https://www.brilworks.com" },
};

const Page = () => (
  <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <CaseStudiesHub />
  </>
);

export default Page;
