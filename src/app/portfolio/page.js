import dynamic from "next/dynamic";

const Portfolio = dynamic(() => import("../components/Portfolio/Portfolio"));

export const metadata = {
  title: "Portfolio - Web and Mobile App Development | Brilworks",
  description:
    "Our experienced team has delivered a wide range of projects. Check out our portfolio of web & mobile development projects from diverse sectors.",
  openGraph: {
    title: "Portfolio - Web and Mobile App Development | Brilworks",
    description:
      "Our experienced team has delivered a wide range of projects. Check out our portfolio of web & mobile development projects from diverse sectors.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/`,
    siteName: "AWS Consulting Partner | Gen AI | Product Engineering",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/`,
  },
};

const page = () => {
  return <Portfolio />;
};

export default page;
