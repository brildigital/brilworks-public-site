import dynamic from "next/dynamic";

const Blog = dynamic(() => import("../components/Blog/Blog"));

export const metadata = {
  title: "Blog - Brilworks Software",
  description:
    "A collection of insights on different technologies, industries, web and software development, mobile app development from our brilliant minds.",
  openGraph: {
    title: "Blog - Brilworks Software",
    description:
      "A collection of insights on different technologies, industries, web and software development, mobile app development from our brilliant minds.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}blog/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}blog/`,
  },
};

const page = () => {
  return <Blog />;
};

export default page;
