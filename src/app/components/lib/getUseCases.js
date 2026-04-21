import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

export async function getUseCasesData() {
  const stories = await Storyblok.get(
    "cdn/stories",
    {
      starts_with: "use-case/",
      per_page: 100,
      version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    },
    { next: { revalidate: 3600 } }
  );
  return {
    storyData: stories?.data?.stories || [],
    totalData: stories?.total || 0,
  };
}
