import { sitemapData } from "./components/lib/constants";
import { getBlogForSitemap } from "./components/lib/getblog";

export const dynamic = "force-static";
export const revalidate = false; // only regenerates when Storyblok webhook fires

function toEntry(data) {
  return {
    url: `${data?.loc}`,
    lastModified: `${data?.lastmod}`,
  };
}

function dedupeByUrl(entries) {
  const seen = new Set();
  const out = [];
  for (const entry of entries) {
    if (!entry.url || seen.has(entry.url)) continue;
    seen.add(entry.url);
    out.push(entry);
  }
  return out;
}

export default async function sitemap() {
  const staticPagesData = sitemapData.map(toEntry);
  const blogData = await getBlogForSitemap();
  const blog = blogData.map(toEntry);

  return dedupeByUrl([
    {
      url: process.env.NEXT_PUBLIC_BASE_URL,
      lastModified: new Date(),
    },
    ...staticPagesData,
    ...blog,
  ]);
}
