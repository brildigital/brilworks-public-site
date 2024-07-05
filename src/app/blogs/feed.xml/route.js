import { getblog } from "../../components/lib/getblog";
import moment from "moment";
import "moment-timezone";
import RSS from "rss";

export async function GET() {
  const storyData = await getblog();

  const feed = new RSS({
    feed_url: `${process.env.NEXT_PUBLIC_BASE_URL}feed.xml/`,
    title: "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    site_url: process.env.NEXT_PUBLIC_BASE_URL,
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    copyright: `© ${new Date().getFullYear()} BRILWORKS`,
    language: "en",
  });

  // Define the target time zone (e.g., Indian Standard Time)
  const timeZone = "Asia/Kolkata";

  // Calculate adjustedDate and sort storyData from newest to oldest
  const sortedStoryData = storyData
    .map((blog) => {
      const publishedAt = blog?.content?.Published || blog?.published_at;
      const dateObj = new Date(publishedAt);

      // Convert to Moment object and adjust to the target time zone
      const adjustedDate = moment.tz(dateObj, timeZone);

      return {
        ...blog,
        adjustedDate,
      };
    })
    .sort((a, b) => b.adjustedDate - a.adjustedDate); // Sort from newest to oldest

  // Generate RSS feed items from sorted storyData
  sortedStoryData.forEach((blog) => {
    feed.item({
      title: blog?.content?.metatags?.title,
      description: blog?.content?.metatags?.description,
      guid: `${process.env.NEXT_PUBLIC_BASE_URL}${blog?.full_slug}/`,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${blog?.full_slug}/`,
      date: blog.adjustedDate.format("ddd, DD MMM YYYY HH:mm:ss ZZ"), // Format date with the desired time zone
      author: blog?.content?.BlogAuthor,
      enclosure: {
        url: `${blog?.content?.image?.filename}`,
      },
    });
  });

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
