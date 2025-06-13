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
  search_query
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

  if (filter_category) {
    apiParams.filter_query.Category = {
      in: filter_category,
    };
  }

  if (search_query) {
    apiParams.filter_query = {
      ...apiParams.filter_query,
      __or: [
        { title: { like: `%${search_query}%` } },
        // { content: { like: `%${search_query}%` } },
        // { Content_1: { like: `%${search_query}%` } },
        // { Content_2: { like: `%${search_query}%` } },
      ],
    };
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

export async function getblogSpecificTeam(
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
export async function getblogDataCategorization(
  page_no,
  limit_per_page,
  filter_category,
  search_query
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

  // Check if filter_category is present in props
  if (filter_category) {
    apiParams.filter_query.subcategory = {
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
