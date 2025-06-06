import { Suspense } from "react";
import UsecaseFirstSection from "@/app/components/UseCases/UsecaseFirstSection";
import UsecaseContentSection from "@/app/components/UseCases/UsecaseContentSection";
import FetchDataSpinner from "@/app/components/Homepage/FetchDataSpinner";
import { notFound } from "next/navigation";
import { formatSrcUrl } from "@/app/components/lib/commonFunction";

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
  const url = `https://api.storyblok.com/v2/cdn/stories?starts_with=product/&version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;

  const options = {
    [process.env.VERCEL_ENV === "production" ? "next" : "cache"]:
      process.env.VERCEL_ENV === "production"
        ? { revalidate: 3600 }
        : "no-store",
  };

  const data = await fetchWithErrorHandling(url, options);

  return data.stories.map((story) => story.slug.replace("use-case/", ""));
}

async function getAWSInHealthcareData(slug) {
  const url = `https://api.storyblok.com/v2/cdn/stories/product/${slug}?version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
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
    const storyData = await getAWSInHealthcareData(params.slug);
    const { title, description, og_image, twitter_image } =
      storyData.story?.content.Metatags;
    return {
      title: title || storyData.story?.content.title,
      description: description,
      openGraph: {
        title: title,
        description: description,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}product/${params.slug}/`,
        siteName:
          "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
        locale: "en-US",
        type: "website",
        images: [
          {
            url: formatSrcUrl(
              og_image ||
                storyData.story?.content?.title_section?.[0]?.banner_image
            ),
          },
        ],
      },

      twitter: {
        title: title,
        description: description,
        card: "summary_large_image",
        images: [
          {
            url: formatSrcUrl(
              twitter_image ||
                storyData.story?.content?.title_section?.[0]?.banner_image
                  ?.filename
            ),
          },
        ],
        site: "@_Brilworks",
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}product/${params.slug}/`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {};
  }
}

export default async function Page({ params }) {
  const storyData = await getAWSInHealthcareData(params.slug);
  const { title_section, FAQ_section, content } = storyData.story.content;

  return (
    <Suspense fallback={<FetchDataSpinner />}>
      <UsecaseFirstSection data={title_section?.[0]} />
      <UsecaseContentSection content={content?.content} FAQData={FAQ_section} />
    </Suspense>
  );
}
