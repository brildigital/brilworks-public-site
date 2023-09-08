import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

export async function getDeveloperData(prop) {
  let stories = await Storyblok.get("cdn/stories/", {
    starts_with: `developers/${prop}`,
    per_page: 4,
    cv: Math.random(),
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
  });
  const devData = stories.data.stories;
  return devData;
}
