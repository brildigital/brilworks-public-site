import dynamic from "next/dynamic";

const MainGist = dynamic(() => import("../components/Gist/MainGist"));

export const metadata = {
  title: "Learn and Explore Technical Queries - Brilworks",
  description:
    "Get every mistake you've made fixed in one location. We make an honest effort to address your technical inquiries, focusing on the developer community. Glory to Tech!",
  openGraph: {
    title: "Learn and Explore Technical Queries - Brilworks",
    description:
      "Get every mistake you've made fixed in one location. We make an honest effort to address your technical inquiries, focusing on the developer community. Glory to Tech!",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}gist/`,
    siteName: "AWS Consulting Partner | Gen AI | Product Engineering",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Learn and Explore Technical Queries - Brilworks",
    description:
      "Get every mistake you've made fixed in one location. We make an honest effort to address your technical inquiries, focusing on the developer community. Glory to Tech!",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}gist/`,
  },
};

const page = () => {
  return <MainGist />;
};

export default page;
