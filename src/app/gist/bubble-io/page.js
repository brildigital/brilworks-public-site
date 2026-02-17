import TechnologyGist from "@/app/components/Gist/TechnologyGist";

export const metadata = {
  title: "Bubble.io Q&A - Brilworks",
  description:
    "A community of devoted no code enthusiasts dedicated to assisting fellow no code low code enthusiasts. Explore how Brilworks contributes to uplifting the no code low code community by addressing the most crucial, common, unique, and unparalleled bubble.io questions.",
  openGraph: {
    title: "Bubble.io Q&A - Brilworks",
    description:
      "A community of devoted no code  enthusiasts dedicated to assisting fellow no code low code enthusiasts. Explore how Brilworks contributes to uplifting the no code low code community by addressing the most crucial, common, unique, and unparalleled bubble.io questions.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}gist/bubble-io/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Bubble.io Q&A - Brilworks",
    description:
      "A community of devoted no code  enthusiasts dedicated to assisting fellow no code low code enthusiasts. Explore how Brilworks contributes to uplifting the no code low code community by addressing the most crucial, common, unique, and unparalleled bubble.io questions.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}gist/bubble-io/`,
  },
};

const page = () => {
  return (
    <TechnologyGist
      title="Bubble.io Q&A"
      description="Running into roadblocks with no-code app development? You’re in the right place. Our Bubble.io team has put together their tips and fixes for common problems. Check out easy-to-follow guides that’ll help you breeze through no-code challenges and build smarter apps."
      apiKey="bubble-io"
    />
  );
};

export default page;
