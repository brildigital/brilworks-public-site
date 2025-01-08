import dynamic from "next/dynamic";

const BubbleIoTechQandA = dynamic(() =>
  import("@/app/components/Gist/BubbleIoTechQandA")
);

export const metadata = {
  title: "Bubble.io Q&A - Brilworks",
  description:
    "A community of devoted no code enthusiasts dedicated to assisting fellow no code low code enthusiasts. Explore how Brilworks contributes to uplifting the no code low code community by addressing the most crucial, common, unique, and unparalleled bubble.io questions.",
  openGraph: {
    title: "Bubble.io Q&A - Brilworks",
    description:
      "A community of devoted no code  enthusiasts dedicated to assisting fellow no code low code enthusiasts. Explore how Brilworks contributes to uplifting the no code low code community by addressing the most crucial, common, unique, and unparalleled bubble.io questions.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}gist/`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}gist/java/`,
  },
};

const page = () => {
  return <BubbleIoTechQandA />;
};

export default page;
