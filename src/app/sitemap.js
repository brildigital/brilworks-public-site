import { sitemapData } from "./components/lib/constants";
import { getBlogForSitemap } from "./components/lib/getblog";

export const dynamic = "force-static";
export const revalidate = false; // only regenerates when Storyblok webhook fires

export default async function sitemap() {
  const staticPagesData = sitemapData.map((data) => {
    return {
      url: `${data?.loc}`,
      lastModified: `${data?.lastmod}`,
    };
  });
  const blogData = await getBlogForSitemap();
  const blog = blogData.map((data) => {
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
