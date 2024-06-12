import dynamic from "next/dynamic";

const OurProcessPage = dynamic(() =>
  import("../components/OurProcess/OurProcessPage")
);

export const metadata = {
  title: "Our Process | How We Work | Brilworks Software",
  description:
    "We are a top software development firm that satisfies the demands of every client, from sourcing the right people to managing end-to-end projects.",
  openGraph: {
    title: "Our Process | How We Work | Brilworks Software",
    description:
      "We are a top software development firm that satisfies the demands of every client, from sourcing the right people to managing end-to-end projects.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}our-process/`,
    siteName: "AWS Consulting Partner | Gen AI | Product Engineering",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/Prototype.jpg`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}our-process/`,
  },
};

const page = () => {
  return <OurProcessPage />;
};

export default page;
