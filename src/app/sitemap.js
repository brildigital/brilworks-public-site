import { blogListStaticData, sitemapData } from "./components/lib/constants";

export default async function sitemap() {
  const staticPagesData = sitemapData.map((data) => {
    return {
      url: `${data?.loc}`,
      lastModified: `${data?.lastmod}`,
    };
  });
  const blog = blogListStaticData.map((data) => {
    return {
      url: `${data?.loc}`,
      lastModified: `${data?.lastmod}`,
    };
  });

  return [
    {
      url: process.env.NEXT_PUBLIC_BASE_URL,
      lastModified: new Date(),
    },
    ...staticPagesData,
    ...blog,
  ];
}
