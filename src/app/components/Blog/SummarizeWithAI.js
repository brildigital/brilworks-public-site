"use client";
import Image from "next/image";

const BASE_URL = "https://www.brilworks.com/blog/";

function buildLinks(slug) {
  const pageUrl = `${BASE_URL}${slug}/`;
  const q = encodeURIComponent(
    `Read from ${pageUrl} so I can ask questions about it`,
  );
  return [
    {
      name: "ChatGPT",
      href: `https://chatgpt.com/?q=${q}`,
      logo: "/images/openai.svg",
    },
    {
      name: "Claude",
      href: `https://claude.ai/new?q=${q}`,
      logo: "/images/claude-color.svg",
    },
    {
      name: "Google",
      href: `https://www.google.com/search?udm=50&aep=11&q=${q}`,
      logo: "/images/gemini-color.svg",
    },
    {
      name: "Perplexity",
      href: `https://www.perplexity.ai/search/new?q=${q}`,
      logo: "/images/perplexity-color.svg",
    },
  ];
}

const SummarizeWithAI = ({ slug }) => {
  const links = buildLinks(slug);

  return (
    <div className="flex flex-wrap items-center gap-3 mt-4">
      <span className="font-semibold text-gray-400 tracking-wide">
        Summarize with AI:
      </span>
      {links.map((ai) => (
        <a
          key={ai.name}
          href={ai.href}
          target="_blank"
          rel="noopener noreferrer"
          title={`Read with ${ai.name}`}
          className="flex items-center justify-center rounded-full w-9 h-9 bg-gray-200/20 border border-white/15 transition-all duration-200 hover:scale-110 hover:bg-white/20"
        >
          <Image
            src={ai.logo}
            alt={ai.name}
            width={15}
            height={15}
            className="rounded-sm p-1.5"
          />
        </a>
      ))}
    </div>
  );
};

export default SummarizeWithAI;
