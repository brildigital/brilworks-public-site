import dynamic from "next/dynamic";

const Sitemap = dynamic(() => import("../components/Sitemap/Sitemap"));

export const metadata = {
  title: "Site Map | Brilworks Software",
  description:
    "Explore our site map page to find information about who we are and who we work with, and details about our software development services.",
  openGraph: {
    title: "Site Map | Brilworks Software",
    description:
      "Explore our site map page to find information about who we are and who we work with, and details about our software development services.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}site-map/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/Prototype.jpg`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Site Map | Brilworks Software",
    description:
      "Explore our site map page to find information about who we are and who we work with, and details about our software development services.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}site-map/`,
  },
};

const page = () => {
  return (
    <>
      {/* <Header /> */}
      <Sitemap />
      {/* <Footer /> */}
    </>
  );
};

export default page;
