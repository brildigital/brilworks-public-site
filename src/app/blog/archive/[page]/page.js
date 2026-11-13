import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogForSitemap } from "@/app/components/lib/getblog";
import { formattedDate } from "@/app/components/lib/commonFunction";

// Plain, server-rendered archive of every post. It lives under /blog/archive/
// because /blog/page/2-4/ are legacy pagination URLs that redirect to /blog/. Its job is to give crawlers a
// link path to all articles; it is kept out of the index so it never competes
// with the posts themselves.
export const dynamic = "force-static";
export const revalidate = 3600;
export const dynamicParams = true;

const POSTS_PER_PAGE = 60;

export async function generateStaticParams() {
  return [];
}

async function getArchive() {
  const posts = await getBlogForSitemap();
  return posts
    .filter((post) => post?.loc && post?.name)
    .sort((a, b) => new Date(b.lastmod) - new Date(a.lastmod));
}

function parsePage(value) {
  return /^[1-9]\d*$/.test(value || "") ? Number(value) : null;
}

export async function generateMetadata(props) {
  const params = await props.params;
  const pageNumber = parsePage(params?.page);
  if (!pageNumber) notFound();

  return {
    title: `All Articles – Page ${pageNumber} | Brilworks Blog`,
    description:
      "Complete archive of Brilworks engineering articles on data engineering, AI, cloud, and product development.",
    robots: { index: false, follow: true },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}blog/archive/${pageNumber}/`,
    },
  };
}

export default async function BlogArchivePage(props) {
  const params = await props.params;
  const pageNumber = parsePage(params?.page);
  if (!pageNumber) notFound();

  const posts = await getArchive();
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  if (pageNumber > totalPages) notFound();

  const pagePosts = posts.slice(
    (pageNumber - 1) * POSTS_PER_PAGE,
    pageNumber * POSTS_PER_PAGE,
  );

  return (
    <main className="container max-w-[1280px] mx-auto main-section-padding !pt-32">
      <nav aria-label="Breadcrumb" className="mb-4 text-sm">
        <Link href="/">Brilworks</Link> / <Link href="/blog/">Blog</Link> / All
        articles
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        All articles{pageNumber > 1 ? ` – page ${pageNumber}` : ""}
      </h1>
      <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4">
        {pagePosts.map((post) => {
          const path = post.loc.replace("https://www.brilworks.com", "");
          return (
            <li key={post.loc} className="border-b border-borderGray pb-3">
              <Link
                href={path}
                prefetch={false}
                className="font-medium hover:text-themeColor"
              >
                {post.name}
              </Link>
              {post.lastmod && post.lastmod !== "null" && (
                <span className="block text-sm opacity-70">
                  Updated {formattedDate(post.lastmod)}
                </span>
              )}
            </li>
          );
        })}
      </ul>
      <nav
        aria-label="Archive pages"
        className="flex flex-wrap gap-2 mt-10 justify-center"
      >
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) =>
          n === pageNumber ? (
            <span
              key={n}
              aria-current="page"
              className="px-3 py-1 rounded bg-themeColor text-white"
            >
              {n}
            </span>
          ) : (
            <Link
              key={n}
              href={`/blog/archive/${n}/`}
              prefetch={false}
              className="px-3 py-1 rounded border border-borderGray"
            >
              {n}
            </Link>
          ),
        )}
      </nav>
    </main>
  );
}
