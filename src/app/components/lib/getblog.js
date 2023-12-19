import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

export async function getblog() {
  let stories = await Storyblok.get("cdn/stories", {
    starts_with: "blog/",
    per_page: 100,
    cv: Math.random(),
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    // sort_by: "first_published_at:",
  });
  const storyData = stories.data.stories;
  return storyData;
}

export async function getbloglist(prop) {
  let stories = await Storyblok.get("cdn/stories", {
    starts_with: "blogs-list/",
    per_page: prop,
    cv: Math.random(),
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
  });
  const storyData = stories.data.stories;
  return storyData;
}

export async function searchBlog(query) {
  const response = await Storyblok.get("cdn/stories/", {
    starts_with: "blog/",
    per_page: 100,
    cv: Math.random(),
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
  });

  const filteredData = response.data?.stories.filter(
    (item) =>
      item?.name?.toLowerCase().includes(query?.toLowerCase()) ||
      (item?.content &&
        item?.content?.content?.toLowerCase().includes(query?.toLowerCase())) ||
      item?.content?.category?.toLowerCase().includes(query?.toLowerCase())
  );

  return filteredData;
}

export async function blogCategoryData(query) {
  const response = await Storyblok.get("cdn/stories/", {
    starts_with: "blog/",
    per_page: 100,
    cv: Math.random(),
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
  });
  const filteredData = response.data?.stories.filter((item) =>
    item?.content?.category?.toLowerCase().includes(query?.toLowerCase())
  );
  return filteredData;
}

export async function singlePopularBlog() {
  try {
    let stories = await Storyblok.get("cdn/stories", {
      starts_with: "blog/",
      per_page: 100,
      cv: Math.random(),
      version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    });

    const storyData = stories.data.stories;
    // Filter the data to include only items with priority field equal to 1
    const OnePopularData = storyData.filter(
      (item) => item && +item?.content?.Priority === 1
    );

    return OnePopularData;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return [];
  }
}

export async function blogCategoryList() {
  const response = await Storyblok.get("cdn/stories/", {
    starts_with: "blog/",
    per_page: 100,
    cv: Math.random(),
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
  });
  const blogStories = response.data?.stories;

  const uniqueCategory = new Set();
  const filteredCategory = [];

  for (const story of blogStories) {
    const category = story?.content?.category;

    if (category && !uniqueCategory.has(category)) {
      uniqueCategory.add(category);
      filteredCategory.push(category);
    }
  }

  return filteredCategory.sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
  );
}
