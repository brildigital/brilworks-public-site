import { Suspense } from "react";
import FetchDataSpinner from "@/app/components/Homepage/FetchDataSpinner";
import { notFound } from "next/navigation";

import WhatIsInsideBookSection from "@/app/components/Ebook/WhatIsInsideBookSection";
import EbookFirstSection from "@/app/components/Ebook/EbookFirstSection";
import ReasonToReadBook from "@/app/components/Ebook/ReasonToReadBook";
import OtherEbooksSection from "@/app/components/Ebook/OtherEbooksSection";
import WhyBrilworks from "@/app/components/Ebook/WhyBrilworks";

async function fetchWithErrorHandling(url, options) {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return notFound();
  }
}
async function getAllSlugs() {
  const url = `https://api.storyblok.com/v2/cdn/stories?starts_with=ebooks/&version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;

  const options = {
    [process.env.VERCEL_ENV === "production" ? "next" : "cache"]:
      process.env.VERCEL_ENV === "production"
        ? { revalidate: 3600 }
        : "no-store",
  };

  const data = await fetchWithErrorHandling(url, options);

  return data.stories.map((story) => story.slug.replace("portfolio/", ""));
}

async function getEbookData(slug) {
  const url = `https://api.storyblok.com/v2/cdn/stories/ebooks/${slug}?version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
  const options = {
    [process.env.VERCEL_ENV === "production" ? "next" : "cache"]:
      process.env.VERCEL_ENV === "production"
        ? { revalidate: 3600 }
        : "no-store",
  };
  return fetchWithErrorHandling(url, options);
}

export async function generateStaticParams() {
  try {
    const slugs = await getAllSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  try {
    const storyData = await getEbookData(params.slug);
    const { title, description } = storyData?.story?.content?.SEO;
    return {
      title: title,
      description: description,
      openGraph: {
        title: title,
        description: description,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}ebooks/${params.slug}/`,
        siteName:
          "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
        locale: "en-US",
        type: "website",
      },
      twitter: {
        title: title,
        description: description,
        card: "summary_large_image",
        site: "@_Brilworks",
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/${params.slug}/`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {};
  }
}

export default async function Page({ params }) {
  const storyData = await getEbookData(params?.slug);
  const {
    title,
    ebookImage,
    insideBookSection,
    reasonToRead,
    otherEbookSection,
    whyBrilworks,
  } = storyData.story.content;

  return (
    <Suspense fallback={<FetchDataSpinner />}>
      <EbookFirstSection title={title} imageSrc={ebookImage?.filename} />
      <WhatIsInsideBookSection
        bookDescription={insideBookSection}
        buttontext={reasonToRead?.[1]?.text}
      />
      <ReasonToReadBook reasonToRead={reasonToRead} />
      {/* <OtherEbooksSection
        title={otherEbookSection?.[0]?.Key}
        description={otherEbookSection?.[0]?.Value}
      /> */}
      <WhyBrilworks
        title={whyBrilworks?.[0]?.Key}
        description={whyBrilworks?.[0]?.Value}
        imageSrc={whyBrilworks?.[1]?.image?.filename}
      />
    </Suspense>
  );
}
