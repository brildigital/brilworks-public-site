import { addMinutes } from "date-fns";
import { getblog } from "./components/lib/getblog";
import { sitemapData } from "./components/lib/constants";

export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
}

export default async function sitemap({ id }) {
  if (id === 0) {
    const staticPagesData = sitemapData.map((data) => {
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
    ];
  }

  const blogListData = await getblog();

  const blog = blogListData.map((story) => {
    const publishedDateStr = story?.content?.Published;
    const dateObj = new Date(publishedDateStr) || new Date();
    if (isNaN(dateObj.getTime())) {
      throw new Error(`Invalid date: ${publishedDateStr}`);
    }
    const adjustedDate = addMinutes(dateObj, 330);
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${story?.full_slug}/`,
      lastModified: adjustedDate,
    };
  });

  return [
    {
      url: process.env.NEXT_PUBLIC_BASE_URL,
      lastModified: new Date(),
    },
    ...blog,
  ];
}
