import { addMinutes } from "date-fns";
import { getbloglist } from "./components/lib/getblog";

export default async function sitemap() {
  const blogListData = await getbloglist();

  const blog = blogListData.map((story) => {
    const dateObj = new Date(story?.content?.PublishedDate);
    const adjustedDate = addMinutes(dateObj, 330);
    return {
      url: `https://www.brilworks.com/blog/${story.slug}`,
      lastModified: adjustedDate,
    };
  });

  return [
    {
      url: "https://www.brilworks.com/",
      lastModified: new Date(),
    },
    ...blog,
  ];
}
