import Link from "next/link";
import Blog from "@/app/components/Blog/Blog";
import { generateBreadcrumb } from "@/app/components/lib/schemaCode";
import {
  getblogData,
  getLatestBlogs,
  getBlogCategoryCounts,
} from "@/app/components/lib/getblog";

// The listing is rendered on the server so crawlers that do not run JavaScript
// receive real links to posts. Refreshed hourly and on every Storyblok publish
// (see /api/revalidate).
export const dynamic = "force-static";
export const revalidate = 3600;

const ITEMS_PER_PAGE = 10;
const BLOG_CATEGORY_VALUES = [
  "",
  "Product Engineering",
  "Cloud DevOps and Data",
  "Technology Practices",
  "IOT & Embedded",
  "News & Insights",
];

export const metadata = {
  title: "Tech Insights & Engineering Blog | Brilworks Software",
  description:
    "Expert insights on product engineering, cloud architecture, DevOps, and software development. Published weekly by Brilworks engineers.",
  openGraph: {
    title: "Tech Insights & Engineering Blog | Brilworks Software",
    description:
      "Expert insights on product engineering, cloud architecture, DevOps, and software development. Published weekly by Brilworks engineers.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}blog/`,
    siteName: "Brilworks",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}blog/`,
  },
};

// Stories carry the full article body. Send the browser only what a card uses.
function toCard(story) {
  return {
    slug: story?.slug,
    name: story?.name,
    content: {
      mobile_banner: {
        filename: story?.content?.mobile_banner?.filename || "",
        alt: story?.content?.mobile_banner?.alt || "",
      },
      Image: { alt: story?.content?.Image?.alt || "" },
      Published: story?.content?.Published || "",
      PublishedDate: story?.content?.PublishedDate || "",
    },
  };
}

async function getInitialData() {
  try {
    const [firstPage, recent, categoryCounts] = await Promise.all([
      getblogData(1, ITEMS_PER_PAGE),
      getLatestBlogs(3),
      getBlogCategoryCounts(BLOG_CATEGORY_VALUES),
    ]);
    return {
      posts: (firstPage?.storyData || []).map(toCard),
      total: firstPage?.totalData || 0,
      recent: (recent || []).map(toCard),
      categoryCounts: categoryCounts || {},
    };
  } catch (error) {
    // The component still loads everything in the browser if this fails.
    console.error("Blog index: initial data unavailable", error);
    return null;
  }
}

const page = async () => {
  const initialData = await getInitialData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Brilworks Blogs"),
        }}
      />
      <Blog initialData={initialData} />
      <nav
        aria-label="Blog archive"
        className="container max-w-[1280px] mx-auto main-section-padding !pt-0 text-center"
      >
        <Link
          href="/blog/page/1/"
          className="inline-block text-themeColor font-medium underline"
        >
          Browse all articles
        </Link>
      </nav>
    </>
  );
};

export default page;
