import { addMinutes } from "date-fns";
import { getbloglist } from "./components/lib/getblog";

export default async function sitemap() {
  const blogListData = await getbloglist();

  const PageRoutes = [
    { url: "https://www.brilworks.com/portfolio" },
    { url: "https://www.brilworks.com/contact-us" },
    { url: "https://www.brilworks.com/our-process" },
    { url: "https://www.brilworks.com/about-us" },
    { url: "https://www.brilworks.com/career" },
    { url: "https://www.brilworks.com/blog" },
    { url: "https://www.brilworks.com/portfolio/vugo" },
    { url: "https://www.brilworks.com/portfolio/rastrack" },
    { url: "https://www.brilworks.com/portfolio/orokii" },
    { url: "https://www.brilworks.com/portfolio/eccocar" },
    { url: "https://www.brilworks.com/portfolio/trackimo" },
    { url: "https://www.brilworks.com/industry/fintech-software-development" },
    {
      url: "https://www.brilworks.com/industry/media-entertainment-software-development",
    },
    {
      url: "https://www.brilworks.com/industry/fleet-management-software-development",
    },
    {
      url: "https://www.brilworks.com/industry/healthcare-software-development",
    },
    { url: "https://www.brilworks.com/hire-reactjs-developer" },
    { url: "https://www.brilworks.com/hire-java-developer" },
    { url: "https://www.brilworks.com/hire-nodejs-developer" },
    { url: "https://www.brilworks.com/hire-react-native-developer" },
    { url: "https://www.brilworks.com/hire-aws-developer" },
    { url: "https://www.brilworks.com/hire-ui-ux-designer" },
    { url: "https://www.brilworks.com/hire-blockchain-developer" },
  ];

  const blog = blogListData.map((story) => {
    const dateObj = new Date(story?.content?.PublishedDate);
    const adjustedDate = addMinutes(dateObj, 330);
    return {
      url: `https://www.brilworks.com/blog/${story.slug}`,
      lastModified: adjustedDate,
    };
  });

  const allRoutes = PageRoutes.map((page) => {
    return {
      url: `${page.url}`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: "https://www.brilworks.com/",
      lastModified: new Date(),
    },
    ...blog,
    ...allRoutes,
  ];
}
