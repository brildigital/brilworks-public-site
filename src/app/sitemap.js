import { addMinutes } from "date-fns";
import { getblog } from "./components/lib/getblog";
import { blogSitemapData, sitemapData } from "./components/lib/constants";

export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  return [{ id: 1 }, { id: 2 }, { id: 3 }];
}

export default async function sitemap({ id }) {
  if (id === 1) {
    const staticPagesData = sitemapData.map((data) => {
      return {
        url: `${data?.loc}`,
        lastModified: `${data?.lastmod}`,
      };
    });
    const blog = blogSitemapData.map((data) => {
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

  const blogListData = await getblog();

  const blog = blogListData.map((story) => {
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${story?.full_slug}/`,
      lastModified: story?.published_at || new Date(),
    };
  });

  // const blog = blogSitemapData.map((data) => {
  //   return {
  //     url: `${data?.loc}`,
  //     lastModified: `${data?.lastmod}`,
  //   };
  // });

  return [
    {
      url: process.env.NEXT_PUBLIC_BASE_URL,
      lastModified: new Date(),
    },
    ...blog,
  ];
}
