import { Suspense } from "react";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import FetchDataSpinner from "@/app/components/Homepage/FetchDataSpinner";
import AISolutionsFirstSection from "@/app/components/AISolutions/AISolutions";
import { formatSrcUrl } from "@/app/components/lib/commonFunction";

const AISeamlessIntegration = dynamic(() =>
  import("@/app/components/AISolutions/AISeamlessIntegration")
);
const WhatUserSays = dynamic(() =>
  import("@/app/components/AISolutions/WhatUserSays")
);
const CTASection = dynamic(() => import("@/app/components/Common/CTASection"));
const AIWorking = dynamic(() =>
  import("@/app/components/AISolutions/AIWorking")
);
const AISolutionsFAQ = dynamic(() =>
  import("@/app/components/AISolutions/AISolutionsFAQ")
);

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

export async function getAllSlugs() {
  const url = `https://api.storyblok.com/v2/cdn/stories?starts_with=ai-solutions/&version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;

  const options = {
    [process.env.VERCEL_ENV === "production" ? "next" : "cache"]:
      process.env.VERCEL_ENV === "production"
        ? { revalidate: 3600 }
        : "no-store",
  };

  const data = await fetchWithErrorHandling(url, options);

  return data.stories.map((story) => story.slug.replace("ai-solutions/", ""));
}

async function getAISolutions(slug) {
  const url = `https://api.storyblok.com/v2/cdn/stories/ai-solutions/${slug}?version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
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
    const storyData = await getAISolutions(params.slug);
    const { title, description, og_image, twitter_image } =
      storyData.story?.content?.meta_tags;
    return {
      title: title || storyData.story?.content.title,
      description: description,
      openGraph: {
        title: title || storyData.story?.content.title,
        description: description,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}ai-solutions/${params.slug}/`,
        siteName:
          "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
        locale: "en-US",
        type: "website",
        images: [
          {
            url: formatSrcUrl(
              og_image || storyData.story?.content?.Working[0]?.image?.filename
            ),
          },
        ],
      },

      twitter: {
        title: title || storyData.story?.content.title,
        description: description,
        card: "summary_large_image",
        images: [
          {
            url: formatSrcUrl(
              twitter_image ||
                storyData.story?.content?.Working[0]?.image?.filename
            ),
          },
        ],
        site: "@_Brilworks",
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {};
  }
}

export default async function Page({ params }) {
  const storyData = await getAISolutions(params.slug);

  const {
    title,
    videoLink,
    description,
    buttontext,
    buttonURL,
    Working,
    what_users_say,
    seamless_integration,
    FAQ,
    CTA,
  } = storyData.story.content;
  return (
    <Suspense fallback={<FetchDataSpinner />}>
      <AISolutionsFirstSection
        title={title}
        description={description}
        videoLink={videoLink?.url}
        buttontext={buttontext}
        buttonURL={buttonURL}
      />
      <AIWorking data={Working} />
      <AISeamlessIntegration data={seamless_integration} />
      {/* <AICaseStudies /> */}
      <WhatUserSays userSaysData={what_users_say} />
      <CTASection
        title={CTA?.[0]?.title}
        description="Tell us your project idea and get a free consultation to create an outstanding digital product."
        buttonText={CTA?.[0]?.button_text}
      />
      <AISolutionsFAQ faqData={FAQ} />
    </Suspense>
  );
}
