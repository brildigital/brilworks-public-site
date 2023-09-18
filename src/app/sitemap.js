import { addMinutes } from "date-fns";
import { getbloglist } from "./components/lib/getblog";

export default async function sitemap() {
  const blogListData = await getbloglist(100);

  const blog = blogListData.map((story) => {
    const dateObj = new Date(story?.content?.PublishedDate);
    const adjustedDate = addMinutes(dateObj, 330);
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}blog/${story.slug}/`,
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
