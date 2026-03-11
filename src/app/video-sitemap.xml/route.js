import { getYouTubeThumbnail } from "@/app/components/lib/commonFunction";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.brilworks.com/";

async function getAISolutions() {
  const url = `https://api.storyblok.com/v2/cdn/stories?starts_with=ai-solutions/&version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  const data = await res.json();
  return data.stories || [];
}

export async function GET() {
  const stories = await getAISolutions();
  
  const videos = [
    // Hero Video
    {
      loc: `${BASE_URL}`,
      title: "From Idea to MVP in Days, Not Months",
      description: "Get expert validation, MVP roadmap, and prototype for FREE.",
      thumbnail_loc: `${BASE_URL}video-img-initial.png`,
      content_loc: `${BASE_URL}design-2.mp4`,
    },
    // Prebuilt Solutions (hardcoded from PreBuildSolutions.js for simplicity or can be mapped)
    {
      loc: `${BASE_URL}pre-built-solutions/`, // Assuming this is the path
      title: "Dating & Matchmaking App",
      description: "Match users with AI-powered compatibility algorithms.",
      thumbnail_loc: getYouTubeThumbnail("https://www.youtube.com/shorts/lXJ-9EghV2c"),
      player_loc: "https://www.youtube.com/shorts/lXJ-9EghV2c",
    },
    {
      loc: `${BASE_URL}pre-built-solutions/`,
      title: "Fitness & Wellness App",
      description: "Personalized fitness plans, habit tracking, and progress dashboards.",
      thumbnail_loc: getYouTubeThumbnail("https://youtube.com/shorts/6OsaGiDJPx0"),
      player_loc: "https://youtube.com/shorts/6OsaGiDJPx0",
    },
    {
      loc: `${BASE_URL}pre-built-solutions/`,
      title: "Post-Surgery Care App",
      description: "Monitor recovery and connect patients with healthcare professionals.",
      thumbnail_loc: getYouTubeThumbnail("https://www.youtube.com/shorts/OzHKM4tj43s"),
      player_loc: "https://www.youtube.com/shorts/OzHKM4tj43s",
    },
    {
      loc: `${BASE_URL}pre-built-solutions/`,
      title: "Society Management App",
      description: "Simplify communication, billing, and security for communities.",
      thumbnail_loc: getYouTubeThumbnail("https://youtu.be/g5gnqXlJ7Hs"),
      player_loc: "https://youtu.be/g5gnqXlJ7Hs",
    },
  ];

  // Dynamic AI Solutions
  stories.forEach((story) => {
    if (story.content.videoLink?.url) {
      videos.push({
        loc: `${BASE_URL}ai-solutions/${story.slug.replace("ai-solutions/", "")}/`,
        title: story.content.title || story.name,
        description: story.content.description,
        thumbnail_loc: getYouTubeThumbnail(story.content.videoLink.url),
        player_loc: story.content.videoLink.url,
      });
    }
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${videos
    .map(
      (v) => `
  <url>
    <loc>${v.loc}</loc>
    <video:video>
      <video:thumbnail_loc>${v.thumbnail_loc}</video:thumbnail_loc>
      <video:title>${v.title.replace(/&/g, "&amp;")}</video:title>
      <video:description>${(v.description || "").replace(/&/g, "&amp;")}</video:description>
      ${v.content_loc ? `<video:content_loc>${v.content_loc}</video:content_loc>` : ""}
      ${v.player_loc ? `<video:player_loc>${v.player_loc}</video:player_loc>` : ""}
    </video:video>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
