import CaseStudies from "../components/Portfolio/CaseStudies";

export const metadata = {
  title: "Case Studies | Brilworks",
  description:
    "Our experienced team has delivered a wide range of projects. Check out our portfolio of web & mobile development projects from diverse sectors.",
  openGraph: {
    title: "Case Studies | Brilworks",
    description:
      "Our experienced team has delivered a wide range of projects. Check out our portfolio of web & mobile development projects from diverse sectors.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}case-studies/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}case-studies/`,
  },
};

const page = () => {
  return <CaseStudies />;
};

export default page;
