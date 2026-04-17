"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import Image from "next/image";
import { getblogData, getBlogForSitemap } from "../lib/getblog";
import { formatSrcUrl, formattedDate } from "../lib/commonFunction";
import { usePathname, useRouter } from "next/navigation";
import Heading from "../HTMLComponents/Heading";
import SubscribeNewsLetterForm from "./SubscribeNewsLetterForm";

const BLOG_CATEGORIES = [
  { label: "All", value: "" },
  { label: "Product Engineering", value: "Product Engineering" },
  { label: "Cloud, DevOps and Data", value: "Cloud DevOps and Data" },
  { label: "Technology Practices", value: "Technology Practices" },
  { label: "News & Insights", value: "News & Insights" },
];

const getAuthorInitials = (authorName) => {
  if (!authorName) return "BW";
  return authorName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const estimateReadingTime = (content) => {
  if (!content?.body?.content) return "5 min read";
  const text = JSON.stringify(content.body.content);
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.max(3, Math.ceil(wordCount / 250));
  return `${minutes} min read`;
};

const Blog = () => {
  const ITEMS_PER_PAGE = 10;
  const [blogDataPerPage, setBlogDataPerPage] = useState([]);
  const [totalBlog, setTotalBlog] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogCategory, setBlogCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = usePathname();
  const router = useRouter();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const blogData = await getblogData(
        currentPage,
        ITEMS_PER_PAGE,
        blogCategory,
        searchQuery,
      );
      setBlogDataPerPage(blogData.storyData);
      setTotalBlog(blogData.totalData);
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };
  useEffect(() => {
    const delayDebounceFn = setTimeout(
      () => {
        fetchData();
        window.scrollTo({ top: 0 });
      },
      searchQuery ? 1000 : 0,
    );

    return () => clearTimeout(delayDebounceFn);
  }, [currentPage, blogCategory, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [blogCategory]);

  const getPaginationNumbers = (currentPage, totalItems, itemsPerPage) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  useEffect(() => {
    let cat = window?.location?.href?.split("=")[1];
    cat ? setBlogCategory(cat?.replaceAll("-", " ")) : setBlogCategory("");
    router.push(`/blog`);
  }, [searchParams]);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="blog-hero-section relative overflow-hidden bg-[#0d0f1a]">
        {/* Background layers */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(26,92,204,0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(0,180,216,0.08) 0%, transparent 60%), linear-gradient(160deg, #0d0f1a 0%, #111428 50%, #0a0c1e 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5 relative z-[2] pt-28 pb-20 md:pt-32 md:pb-24">
          <div className="max-w-[720px]">
            <span className="inline-flex items-center gap-2 bg-[rgba(26,92,204,0.15)] border border-[rgba(26,92,204,0.3)] rounded-full px-3.5 py-1.5 text-[#00b4d8] text-xs font-semibold tracking-widest uppercase mb-7">
              Engineering Intelligence
            </span>
            <Heading
              type="h1"
              className="!text-white !font-extrabold"
              text="Insights for Tech Leaders Building What's Next"
            />
            <p className="text-lg text-white/60 leading-relaxed mt-5 max-w-[580px] mb-9">
              Practical perspectives on product engineering, cloud architecture,
              and software development — published weekly by the team at
              Brilworks.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() =>
                  document
                    .getElementById("blog-articles")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="c-button c-btn-primary c-btn-large"
              >
                Browse Articles
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("blog-articles")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-1.5 text-white/50 text-sm font-medium hover:text-[#00b4d8] transition-colors"
              >
                or scroll to explore
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <SubscribeNewsLetterForm />

      {/* ===== BLOG LISTING ===== */}
      <section id="blog-articles">
        <div className="container max-w-[1280px] main-section-padding xl:py-[60px] md:py-10 py-5 mx-auto">
          {/* Toolbar: Categories + Search */}
          <div className="flex sxl:flex-row flex-col-reverse !mt-4">
            <nav
              className="blog_category w-full flex flex-nowrap justify-start items-center overflow-x-auto overflow-y-hidden whitespace-nowrap !mb-4"
              aria-label="Blog categories"
            >
              <div className="bg-[#F8FAFC] p-1 rounded-md border border-borderGray">
                {BLOG_CATEGORIES.map((cat) => (
                  <button
                    key={cat.value}
                    className={`Blog_category_head transition duration-300 ease-in-out lg:!px-5 px-3 !py-2 !rounded-md cursor-pointer ${
                      blogCategory === cat.value
                        ? "bg-themeColor text-white"
                        : "hover:!text-themeColor"
                    }`}
                    onClick={() => setBlogCategory(cat.value)}
                  >
                    <p className="text-base md:text-lg font-medium">
                      {cat.label}
                    </p>
                  </button>
                ))}
              </div>
            </nav>
            <div className="w-full sxl:!w-1/3">
              <form
                className="md:pb-0 !pb-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="relative w-full">
                  <Image
                    src="/images/v2/search-normal.svg"
                    width={24}
                    height={24}
                    alt="Search articles"
                    className="w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-2.5"
                  />
                  <input
                    id="user-search"
                    className="w-full bg-[#F8FAFC] font-medium rounded-md py-3 px-4 text-base md:text-lg appearance-none border !pl-10 focus:outline-none focus:border-themeColor hover:border-themeColor focus:ring-0 focus:ring-themeColor"
                    value={searchQuery}
                    type="search"
                    placeholder="Search articles..."
                    autoComplete="off"
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div
            className={`grid ${
              isLoading || !blogDataPerPage?.length
                ? "grid-cols-1"
                : "md:grid-cols-2 grid-cols-1"
            } sxl:gap-x-10 sxl:!gap-y-[60px] md:gap-7.5 gap-5 min-h-[300px] md:py-7.5 py-5`}
          >
            {isLoading ? (
              <div className="flex align-middle justify-center md:!py-52 py-28 min-h-[90vh]">
                <FetchDataSpinner />
              </div>
            ) : blogDataPerPage?.length ? (
              blogDataPerPage.map(({ slug, name, content }, index) => (
                <article
                  key={name}
                  className="border border-borderGray rounded-2xl overflow-hidden transition-all duration-300 hover:border-themeColor hover:-translate-y-1 bg-white group"
                >
                  <Link
                    as={`/blog/${slug}`}
                    href={`/blog/[slug]`}
                    prefetch={true}
                  >
                    {/* Card Image */}
                    <div className="relative overflow-hidden aspect-[16/9] bg-[#f1f1f1]">
                      <Image
                        className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.04]"
                        src={
                          content?.mobile_banner?.filename
                            ? formatSrcUrl(content?.mobile_banner?.filename)
                            : "/images/not-found-image.webp"
                        }
                        alt={
                          content?.mobile_banner?.alt ||
                          content?.Image?.alt ||
                          name
                        }
                        width="600"
                        height="338"
                        priority={index === 0}
                        sizes="(min-width: 1040px) 42.35vw, (min-width: 640px) 60.84vw, calc(100vw - 30px)"
                      />
                      {/* Badge: New for first 2, Popular for items with high engagement */}
                      {index < 2 && currentPage === 1 && !searchQuery && (
                        <span
                          className={`absolute top-3 left-3 inline-flex items-center gap-1 text-white text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-full backdrop-blur-sm ${
                            index === 0
                              ? "bg-[rgba(16,185,129,0.9)]"
                              : "bg-[rgba(245,158,11,0.9)]"
                          }`}
                        >
                          {index === 0 ? "New" : "Popular"}
                        </span>
                      )}
                    </div>

                    {/* Card Body */}
                    <div className="sxl:px-6 sxl:py-6 p-5 flex flex-col flex-1">
                      {/* Category Tag */}
                      {content?.category && (
                        <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-themeColor mb-2.5">
                          {content.category}
                        </span>
                      )}

                      {/* Title — now H3 for SEO */}
                      <h3 className="text-xl xl:text-[22px] font-bold text-colorBlack leading-snug mb-2.5 line-clamp-2">
                        {name}
                      </h3>

                      {/* Excerpt */}
                      {content?.seo_description && (
                        <p className="text-[15px] text-gray-500 leading-relaxed mb-4 line-clamp-2">
                          {content.seo_description}
                        </p>
                      )}

                      {/* Meta: Author + Reading Time */}
                      <div className="flex items-center justify-between border-t border-[#f1f1f1] pt-3.5 mt-auto">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-[#e8f0fd] flex items-center justify-center text-[13px] font-bold text-themeColor">
                            {getAuthorInitials(content?.author)}
                          </div>
                          <div>
                            <span className="block text-[13px] font-semibold text-colorBlack">
                              {content?.author || "Brilworks Team"}
                            </span>
                            <small className="text-xs text-gray-500">
                              {content.Published
                                ? formattedDate(content?.Published)
                                : content.PublishedDate || ""}
                            </small>
                          </div>
                        </div>
                        <span className="flex items-center gap-1 text-xs font-medium text-gray-500">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          {estimateReadingTime(content)}
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))
            ) : searchQuery.length > 0 ? (
              <div className="!py-24 !block">
                <p className="md:!text-2xl !text-lg text-center">
                  No data match with your search result.
                </p>
              </div>
            ) : (
              <div className="flex items-center justify-center py-20 md:text-2xl text-lg">
                No Blog Found.
              </div>
            )}
          </div>

          {/* Pagination */}
          {!isLoading && blogDataPerPage?.length > 0 && (
            <div className="flex justify-center sxl:mt-10 md:mt-7.5 mt-5">
              <ul className="flex flex-wrap items-center gap-2">
                {/* Prev */}
                <li
                  className={`px-3 py-2 text-base font-semibold rounded-md cursor-pointer ${
                    currentPage === 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-colorBlack hover:text-themeColor"
                  }`}
                  onClick={() => {
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                >
                  Prev
                </li>

                {/* Page Numbers */}
                {getPaginationNumbers(
                  currentPage,
                  totalBlog,
                  ITEMS_PER_PAGE,
                ).map((page, index) => (
                  <li
                    key={index}
                    className={`w-10 h-10 flex items-center justify-center text-base font-medium border rounded-md cursor-pointer ${
                      currentPage === page
                        ? "bg-themeColor text-white border-themeColor"
                        : page === "..."
                          ? "border-none cursor-default text-colorBlack"
                          : "text-colorBlack hover:bg-sectionBG"
                    }`}
                    onClick={() =>
                      typeof page === "number" && setCurrentPage(page)
                    }
                  >
                    {page}
                  </li>
                ))}

                {/* Next */}
                <li
                  className={`px-3 py-2 text-base font-semibold rounded-md cursor-pointer ${
                    currentPage === Math.ceil(totalBlog / ITEMS_PER_PAGE)
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-colorBlack hover:text-themeColor"
                  }`}
                  onClick={() => {
                    if (currentPage < Math.ceil(totalBlog / ITEMS_PER_PAGE)) {
                      setCurrentPage(currentPage + 1);
                    }
                  }}
                >
                  Next
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ===== MID-PAGE CONSULTATION CTA ===== */}
      <section
        className="relative overflow-hidden bg-[#0d0f1a] py-16 md:py-20"
        aria-label="Consultation call-to-action"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 80% at 80% 50%, rgba(26,92,204,0.15) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 10% 60%, rgba(0,219,211,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="container max-w-[1280px] mx-auto md:px-10 px-5 relative z-[2] text-center">
          <h2
            className="text-white font-extrabold tracking-tight leading-tight mb-3 text-3xl md:text-4xl lg:text-[40px]"
            style={{ letterSpacing: "-1px" }}
          >
            Building Something? Let&apos;s Talk.
          </h2>
          <p className="text-white/50 text-base mb-7 max-w-[520px] mx-auto leading-relaxed">
            From architecture reviews to full product engineering — our team
            ships production software every day. Book a free consultation.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact-us/"
              className="c-button c-btn-primary c-btn-large"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/case-studies/"
              className="c-button c-btn-large border border-white/20 text-white/80 hover:bg-white/10 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SCHEMA MARKUP ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Tech Insights & Engineering Blog",
            description:
              "Expert insights on product engineering, cloud architecture, DevOps, and software development. Published weekly by Brilworks engineers.",
            url: "https://brilworks.com/blog/",
            publisher: {
              "@type": "Organization",
              name: "Brilworks Software",
              url: "https://brilworks.com",
            },
          }),
        }}
      />
    </>
  );
};

export default Blog;
