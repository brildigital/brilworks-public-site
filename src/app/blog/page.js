import dynamic from "next/dynamic";

const Blog = dynamic(() => import("../components/Blog/Blog"));

export const metadata = {
  title: "Tech Insights & Engineering Blog | Brilworks Software",
  description:
    "Expert insights on product engineering, cloud architecture, DevOps, and software development. Published weekly by Brilworks engineers.",
  openGraph: {
    title: "Tech Insights & Engineering Blog | Brilworks Software",
    description:
      "Expert insights on product engineering, cloud architecture, DevOps, and software development. Published weekly by Brilworks engineers.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}blog/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
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
