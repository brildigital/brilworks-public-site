import { headers } from "next/headers";

export const dynamic = "force-dynamic";

function shouldBlockCrawling(host) {
  const h = (host || "").toLowerCase();
  if (!h) return true;
  if (h.startsWith("dev.")) return true;
  if (h.endsWith(".vercel.app")) return true;
  if (h.startsWith("localhost") || h.startsWith("127.")) return true;
  return false;
}

const BLOCK_ALL = `User-agent: *
Disallow: /
`;

const ALLOW_PRODUCTION = `User-agent: *
Disallow: /?s=
Disallow: /search/
Disallow: /testimonial/
Disallow: /category/*
Disallow: /email-sms/*
Disallow: /cdn-cgi/

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Disallow: /

Sitemap: https://www.brilworks.com/sitemap.xml
Sitemap: https://www.brilworks.com/video-sitemap.xml
`;

export function GET() {
  const host = headers().get("host");
  const body = shouldBlockCrawling(host) ? BLOCK_ALL : ALLOW_PRODUCTION;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
