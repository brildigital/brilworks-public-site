import { formatSrcUrl } from "@/app/components/lib/commonFunction";
import { getblog } from "../../components/lib/getblog";
import { addMinutes } from "date-fns";
import RSS from "rss";

export async function GET() {
  const storyData = await getblog();

  const feed = new RSS({
    feed_url: `${process.env.NEXT_PUBLIC_BASE_URL}feed.xml/`,
    title: "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    site_url: process.env.NEXT_PUBLIC_BASE_URL,
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.We excel in delivering Gen AI solutions, white label app development, AWS cost optimization, and product engineering with expertise in Next.js, Java, and low-code/no-code platforms.",
    copyright: `© ${new Date().getFullYear()} BRILWORKS`,
    language: "en",
  });

  // Calculate adjustedDate and sort storyData from newest to oldest
  const sortedStoryData = storyData
    .map((blog) => {
      const publishedAt = blog?.content?.Published || blog?.published_at;
      const dateObj = new Date(publishedAt);
      const adjustedDate = addMinutes(dateObj, 330);

      return {
        ...blog,
        adjustedDate,
      };
    })
    .sort((a, b) => b.adjustedDate - a.adjustedDate);

  // Generate RSS feed items from sorted storyData
  sortedStoryData.map((blog) => {
    feed.item({
      title: blog?.content?.metatags?.title,
      description: blog?.content?.metatags?.description,
      guid: `${process.env.NEXT_PUBLIC_BASE_URL}${blog?.full_slug}/`,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${blog?.full_slug}/`,
      date: blog.adjustedDate,
      author: blog?.content?.BlogAuthor,
      enclosure: {
        url: `${formatSrcUrl(blog?.content?.image?.filename)}`,
      },
    });
  });

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
