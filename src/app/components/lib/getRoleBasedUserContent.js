import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

export async function getRoleBasedUserContent(
  page_no,
  limit_per_page,
  search_query
) {
  // Define the base parameters for the API call
  let apiParams = {
    starts_with: `dashboard`,
    page: page_no || 1,
    per_page: limit_per_page || 9,
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
  };

  if (search_query) {
    apiParams.search_term = search_query;
  }

  // Make the API call with the constructed parameters
  let stories = await Storyblok.get("cdn/stories", apiParams, {
    next: { revalidate: 3600 },
  });

  return {
    storyData: stories.data.stories,
    totalData: stories.total,
  };
}
