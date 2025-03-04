import dynamic from "next/dynamic";

const Ebooks = dynamic(() => import("../components/Ebook/Ebooks"));

export const metadata = {
  title: "Our E-books - Brilworks Software",
  description:
    "Unlock actionable knowledge to streamline software development and stay ahead of tech trends with our expert-crafted ebooks.",
  openGraph: {
    title: "Our E-books - Brilworks Software",
    description:
      "Unlock actionable knowledge to streamline software development and stay ahead of tech trends with our expert-crafted ebooks.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}ebooks/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}ebooks/`,
  },
};

const page = () => {
  return <Ebooks />;
};

export default page;
