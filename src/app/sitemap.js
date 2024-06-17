import { addMinutes } from "date-fns";
import { getblog } from "./components/lib/getblog";

export default async function sitemap() {
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
