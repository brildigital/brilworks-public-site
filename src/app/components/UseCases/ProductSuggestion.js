import React, { useEffect, useState, useMemo } from "react";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { formatSrcUrl, formattedDate } from "../lib/commonFunction";
import { getblogData } from "../lib/getblog";
import Heading from "../HTMLComponents/Heading";

const ProductSuggestion = () => {
  const [blogData, setBlogData] = useState([]);
  const pathname = usePathname();

  // Slugs to filter
  const requiredSlugs = [
    "build-ticket-booking-platform",
    "what-are-white-label-apps-and-popular-examples",
    "white-label-delivery-app",
    "white-label-fitness-app",
  ];

  // Conditional product slug based on pathname
  const additionalProductSlug = pathname.includes("white-label-fitness-app")
    ? "white-label-delivery-app"
    : "white-label-fitness-app";

  useEffect(() => {
    async function fetchData() {
      try {
        const [blogData1, blogData2] = await Promise.all([
          getblogData(1, 100),
          getblogData(2, 100),
        ]);

        const additionalProductData = await getAWSInHealthcareData(
          additionalProductSlug
        );

        // Merge and set data
        setBlogData([
          ...blogData1.storyData,
          ...blogData2.storyData,
          ...(additionalProductData?.story
            ? [additionalProductData.story]
            : []),
        ]);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    }

    fetchData();
  }, [pathname, additionalProductSlug]);

  // Memoized filtered data
  const filteredBlogData = useMemo(
    () => blogData.filter(({ slug }) => requiredSlugs.includes(slug)),
    [blogData]
  );

  return (
    <div className="flex flex-col px-4">
      <div>
        <Heading
          type="h2"
          className="lg:!text-[34px] md:!text-3xl !text-2xl !my-5"
          text="You might also like"
        />
      </div>
      <div className="grid h-full xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-[2rem]">
        {filteredBlogData.length ? (
          filteredBlogData
            .slice(0, 4)
            .map(({ slug, name, content, published_at }, index) => {
              const isAdditionalProduct = slug === additionalProductSlug;
              const bannerUrl = isAdditionalProduct
                ? additionalProductSlug === "white-label-fitness-app"
                  ? "https://brilworks-storyblok-assets.s3.eu-central-1.amazonaws.com/assets/7cf016f5d2_white-label-fitness-app.webp"
                  : "https://brilworks-storyblok-assets.s3.eu-central-1.amazonaws.com/assets/fba0ee1023_white-label-delivery-app-banner.webp"
                : content?.mobile_banner?.filename
                ? formatSrcUrl(content?.mobile_banner?.filename)
                : "/images/not-found-image.webp";

              const productLink = isAdditionalProduct
                ? `/product/${slug}`
                : `/blog/${slug}`;

              return (
                <div
                  key={index}
                  className="border-[1px] border-[#80808038] rounded-[30px] blog_flex_30"
                >
                  <Link
                    as={productLink}
                    href={productLink}
                    target="_blank"
                    rel="external"
                  >
                    <div className="sec9_img1">
                      <Image
                        className="rounded-[30px]"
                        src={bannerUrl}
                        alt={
                          content?.mobile_banner?.alt || `Banner-img-${index}`
                        }
                        width={550}
                        height={283}
                      />
                    </div>
                    <div className="pt-[1rem] px-[1rem] pb-[1.5rem] blog-hover">
                      <div className="border-b-[1px] border-[#80808038] py-[1rem]">
                        <p className="entry-title default-max-width aspect-[518/116]">
                          {name}
                        </p>
                      </div>
                      <div className="sec9_txt2 mt-[1.5rem]">
                        <p className="publish_date">
                          {formattedDate(
                            !isAdditionalProduct
                              ? content?.Published
                              : published_at
                          )}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
        ) : (
          <div className="flex items-center justify-center p-24">
            <FetchDataSpinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSuggestion;

// Fetch additional product data based on slug
async function getAWSInHealthcareData(slug) {
  const url = `https://api.storyblok.com/v2/cdn/stories/product/${slug}?version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
  const options = {
    ...(process.env.VERCEL_ENV === "production"
      ? { next: { revalidate: 3600 } }
      : { cache: "no-store" }),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Failed to fetch data");
    return response.json();
  } catch (error) {
    console.error("Error fetching additional product data:", error);
    return null;
  }
}
