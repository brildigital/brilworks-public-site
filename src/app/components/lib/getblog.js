import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

export async function getblog() {
  let stories = await Storyblok.get("cdn/stories", {
    starts_with: "blog/",
    per_page: 100,
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    // sort_by: "first_published_at:",
  });
  const storyData = stories.data.stories;
  return storyData;
}

export async function getbloglist() {
  let stories = await Storyblok.get("cdn/stories", {
    starts_with: "blogs-list/",
    per_page: 100,
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
  });
  const storyData = stories.data.stories;
  return storyData;
}
