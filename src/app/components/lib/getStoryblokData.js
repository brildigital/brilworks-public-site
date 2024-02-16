import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

export async function getCasestudyData() {
  let stories = await Storyblok.get("cdn/stories/", {
    starts_with: `internal/casestudies/`,
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
  });

  return {
    storyData: stories.data.stories,
    totalData: stories.total,
  };
}
