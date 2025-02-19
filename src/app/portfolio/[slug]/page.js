import { Suspense } from "react";
import FetchDataSpinner from "@/app/components/Homepage/FetchDataSpinner";
import { notFound } from "next/navigation";
import PortfolioFirstSection from "@/app/components/PortfolioNew/PortfolioFirstSection";
import ProcessAndEnhanceSection from "@/app/components/PortfolioNew/ProcessAndEnhanceSection";
import ProjectOverviewSection from "@/app/components/PortfolioNew/ProjectOverviewSection";
import ProjectChallengesSection from "@/app/components/PortfolioNew/ProjectChallengesSection";
import BluePrintForSuccess from "@/app/components/PortfolioNew/BluePrintForSuccess";
import MoreSuccessStoriesSection from "@/app/components/PortfolioNew/MoreSuccessStoriesSection";

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
  const url = `https://api.storyblok.com/v2/cdn/stories?starts_with=portfolio/&version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;

  const options = {
    [process.env.VERCEL_ENV === "production" ? "next" : "cache"]:
      process.env.VERCEL_ENV === "production"
        ? { revalidate: 3600 }
        : "no-store",
  };

  const data = await fetchWithErrorHandling(url, options);

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
    const storyData = await getPortfolioData(params.slug);
    const { title, description } = storyData.story?.content?.SEO;
    return {
      title: title,
      description: description,
      openGraph: {
        title: title,
        description: description,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/${params.slug}/`,
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
  const storyData = await getPortfolioData(params?.slug);
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
    // HowWeDelivered,
    BlueprintForSuccess,
    CTA,
  } = storyData.story.content;

  return (
    <Suspense fallback={<FetchDataSpinner />}>
      <PortfolioFirstSection
        buttontext={buttontext}
        title={title}
        description={description}
        images={images}
        KeyValueBlock={KeyValueBlock}
      />
      <ProcessAndEnhanceSection
        processAndEnhanceBlock={ProcessAndEnhanceBlock}
      />
      <ProjectOverviewSection projectOverview={ProjectOverview} />
      <ProjectChallengesSection projectChallenges={ProjectChallenges} />
      {/* <HowWeDeliverSection howWeDelivered={HowWeDelivered} /> */}
      <BluePrintForSuccess
        blueprintForSuccess={BlueprintForSuccess}
        casestudyFileUrl={casestudyFileUrl?.url}
      />
      {/* <SuccessThroughClientEyes /> */}
      {/* <PortfolioCTASection ctaData={CTA} /> */}
      <MoreSuccessStoriesSection />
    </Suspense>
  );
}
