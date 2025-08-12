import StoryblokClient from "storyblok-js-client";
import { convertParamsToString } from "./commonFunction";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

export async function getblog() {
  let stories = await Storyblok.get(
    "cdn/stories",
    {
      starts_with: "blog/",
      per_page: 100,
      version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
      // sort_by: "first_published_at:",
      filter_query: {
        component: {
          in: "article",
        },
      },
    },
    {
      next: { revalidate: 0 },
    }
  );
  const storyData = stories.data.stories;
  return storyData;
}

export async function getblogData(
  page_no,
  limit_per_page,
  filter_category,
  search_query,
  filter_subcategory
) {
  // Define the base parameters for the API call
  let apiParams = {
    starts_with: "blog/",
    page: page_no || 1,
    per_page: limit_per_page || 9,
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    filter_query: {
      component: {
        in: "article",
      },
    },
  };

  apiParams.filter_query = {
    ...(filter_category && {
      Category: { in: filter_category },
    }),
    ...(filter_subcategory && {
      subcategory: { any_in_array: filter_subcategory },
    }),
  };

  // if (filter_category) {
  //   apiParams.filter_query.Category = {
  //     in: filter_category,
  //   };
  // }

  // if (filter_subcategory) {
  //   apiParams.filter_query.subcategory = {
  //     any_in_array: filter_subcategory,
  //   };
  // }

  if (search_query) {
    // If search_query is present, add search_term to apiParams
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

export async function getSuggestionblog(
  page_no,
  limit_per_page,
  filter_category,
  search_query,
  filter_subcategory
) {
  const baseParams = {
    starts_with: "blog/",
    page: page_no || 1,
    per_page: limit_per_page || 9,
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    filter_query: {
      component: { in: "article" },
    },
  };

  // Helper to fetch data
  async function fetchStories(extraFilters) {
    const apiParams = {
      ...baseParams,
      filter_query: {
        ...baseParams.filter_query,
        ...extraFilters,
      },
    };

    const stories = await Storyblok.get("cdn/stories", apiParams, {
      next: { revalidate: 3600 },
    });

    return {
      data: stories.data.stories,
      total: stories.total,
    };
  }

  // 1️⃣ Try filter_subcategory
  if (filter_subcategory) {
    const { data } = await fetchStories({
      subcategory: { any_in_array: filter_subcategory },
    });
    if (data.length >= 3) return { storyData: data, totalData: data.length };
  }

  // 2️⃣ Try search_query (ignore subcategory)
  if (search_query !== null) {
    const { data } = await fetchStories({
      __or: [{ title: { like: `%${search_query}%` } }],
    });
    if (data.length >= 3) return { storyData: data, totalData: data.length };
  }

  // 3️⃣ Try filter_category
  if (filter_category) {
    const { data } = await fetchStories({
      Category: { in: filter_category },
    });
    return { storyData: data, totalData: data.length };
  }

  // 4️⃣ If nothing matches, return empty
  return { storyData: [], totalData: 0 };
}

export async function getblogSpecificAuthor(
  page_no,
  limit_per_page,
  filter_category,
  search_query,
  author_name
) {
  // Define the base parameters for the API call
  let apiParams = {
    starts_with: "blog/",
    page: page_no || 1,
    per_page: limit_per_page || 9,
    version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
    filter_query: {
      component: {
        in: "article",
      },
      BlogAuthor: {
        in: convertParamsToString(author_name),
      },
    },
  };

  if (filter_category) {
    apiParams.filter_query.Category = {
      in: filter_category,
    };
  }

  if (search_query) {
    // If search_query is present, add search_term to apiParams
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

export async function getblogForFeed() {
  let allStories = [];
  let page = 1;
  let hasMoreData = true;

  while (hasMoreData) {
    const response = await Storyblok.get("cdn/stories", {
      starts_with: "blog/",
      page,
      per_page: 100,
      version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
      filter_query: {
        component: {
          in: "article",
        },
      },
    });

    const storyData = response.data.stories;
    allStories.push(...storyData);

    hasMoreData = storyData.length === 100;
    page++;
  }

  return allStories;
}

export async function getBlogForSitemap() {
  let allStories = [];
  let page = 1;
  let hasMoreData = true;

  while (hasMoreData) {
    const response = await Storyblok.get("cdn/stories", {
      starts_with: "blog/",
      page,
      per_page: 100,
      version: process.env.NEXT_PUBLIC_STORYBLOK_VERSION,
      filter_query: {
        component: {
          in: "article",
        },
      },
    });

    const storyData = response.data.stories;
    allStories = [...allStories, ...storyData];

    // Stop if there are fewer than 100 items in the response (last page)
    hasMoreData = storyData.length === 100;
    page += 1;
  }

  const blogSiteMapData = allStories.map((data) => {
    return {
      name: data.name,
      loc: `https://www.brilworks.com/${data.full_slug}/`,
      lastmod: `${data.published_at}`,
    };
  });

  return blogSiteMapData;
}
