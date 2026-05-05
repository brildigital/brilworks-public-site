import { Suspense } from "react";
import FetchDataSpinner from "@/app/components/Homepage/FetchDataSpinner";
import { notFound } from "next/navigation";
import PortfolioFirstSection from "@/app/components/Portfolio/PortfolioFirstSection";
import ProjectOverviewSection from "@/app/components/Portfolio/ProjectOverviewSection";
import ProjectChallengesSection from "@/app/components/Portfolio/ProjectChallengesSection";
import ProjectSolutionSection from "@/app/components/Portfolio/ProjectSolutionSection";
import BridgeCTA from "@/app/components/Portfolio/BridgeCTA";
import SeeingBelieving from "@/app/components/Homepage/SeeingBelieving";
import ArticleStoryView from "./ArticleStoryView";
import {
  calculateReadingTime,
  formatSrcUrl,
} from "@/app/components/lib/commonFunction";

async function fetchWithErrorHandling(url, options) {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}
async function getAllSlugs() {
  const url = `https://api.storyblok.com/v2/cdn/stories?starts_with=portfolio/&version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;

  const options = {
    [process.env.VERCEL_ENV === "production" ? "next" : "cache"]:
      process.env.VERCEL_ENV === "production"
        ? { revalidate: 3600 }
        : "no-store",
  };

  const data = await fetchWithErrorHandling(url, options);
  if (!data?.stories) return [];

  return data.stories.map((story) => story.slug.replace("portfolio/", ""));
}

async function getPortfolioData(slug) {
  const url = `https://api.storyblok.com/v2/cdn/stories/portfolio/${slug}?version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
  const options = {
    [process.env.VERCEL_ENV === "production" ? "next" : "cache"]:
      process.env.VERCEL_ENV === "production"
        ? { revalidate: 3600 }
        : "no-store",
  };
  return fetchWithErrorHandling(url, options);
}

function isArticleStory(story) {
  return story?.content?.component === "article";
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

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  try {
    const storyData = await getPortfolioData(params.slug);
    const story = storyData?.story;
    if (!story) return {};

    if (isArticleStory(story)) {
      const totalDataWord =
        (story.content.content || "") +
        (story.content.Content_1 || "") +
        (story.content.Content_2 || "") +
        (story.content.Content_3 || "");

      return {
        title: story.content.metatags?.title || story.content.title,
        description: story.content.metatags?.description,
        authors: story.content.BlogAuthor
          ? [{ name: story.content.BlogAuthor }]
          : undefined,
        openGraph: {
          title: story.content.metatags?.og_title || story.content.title,
          description:
            story.content.metatags?.og_description ||
            story.content.metatags?.description,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/${params.slug}/`,
          images: [
            {
              url: formatSrcUrl(
                story.content.metatags?.og_image ||
                  story.content?.mobile_banner?.filename,
              ),
            },
          ],
        },
        twitter: {
          card: "summary_large_image",
          title: story.content.metatags?.og_title || story.content.title,
          description:
            story.content.metatags?.og_description ||
            story.content.metatags?.description,
          creator: story.content.BlogAuthor,
          site: "@_Brilworks",
        },
        alternates: {
          canonical: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/${params.slug}/`,
        },
        other: {
          "twitter:label1": "Est. reading time",
          "twitter:data1": `${calculateReadingTime(totalDataWord)} minutes`,
        },
      };
    }

    const seo = story?.content?.SEO;
    const title = seo?.title;
    const description = seo?.description;
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/${params.slug}/`,
        siteName:
          "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
        locale: "en-US",
        type: "website",
      },
      twitter: {
        title,
        description,
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
  const storyData = await getPortfolioData(params?.slug);
  const story = storyData?.story;

  if (!story) {
    return notFound();
  }

  if (isArticleStory(story)) {
    return <ArticleStoryView story={story} slug={params?.slug} />;
  }

  const {
    title,
    description,
    images,
    buttontext,
    casestudyFileUrl,
    KeyValueBlock,
    ProcessAndEnhanceBlock,
    ProjectOverview,
    ProjectChallenges,
    technology,
    industry,
  } = story.content;

  return (
    <Suspense fallback={<FetchDataSpinner />}>
      {/* Hero */}
      <PortfolioFirstSection
        slug={params?.slug}
        title={title}
        description={description}
        images={images}
        buttontext={buttontext}
        KeyValueBlock={KeyValueBlock}
        processAndEnhanceBlock={ProcessAndEnhanceBlock}
        technology={technology}
        industry={industry}
      />

      {/* Overview + Sticky Download Sidebar */}
      <ProjectOverviewSection
        projectOverview={ProjectOverview}
        technology={technology}
        casestudyFileUrl={casestudyFileUrl?.url}
      />

      {/* Challenges */}
      {ProjectChallenges?.[0] && (
        <ProjectChallengesSection projectChallenges={ProjectChallenges[0]} />
      )}

      {/* Solution */}
      {ProjectChallenges?.[1] && (
        <ProjectSolutionSection projectSolutions={ProjectChallenges[1]} />
      )}

      {/* Bridge CTA */}
      <BridgeCTA />

      {/* Related Projects */}
      <SeeingBelieving title="More Success Stories" caseStudyToShow={2} />
    </Suspense>
  );
}
