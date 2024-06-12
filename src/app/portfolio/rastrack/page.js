import dynamic from "next/dynamic";

const PortfolioInnerRastrack = dynamic(() =>
  import("@/app/components/Portfolio/PortfolioInnerRastrack")
);

export const metadata = {
  title: "Rastrack - Portfolio | Satellite Tracking | Brilworks Software",
  description:
    "Check out Brilworks's work for Rastrack. How we helped Rastrack to improve their fleet’s efficiency to update fleet information, predict cost and profit.",
  openGraph: {
    title: "Rastrack - Portfolio | Satellite Tracking | Brilworks Software",
    description:
      "Check out Brilworks's work for Rastrack. How we helped Rastrack to improve their fleet’s efficiency to update fleet information, predict cost and profit.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/rastrack/`,
    siteName: "AWS Consulting Partner | Gen AI | Product Engineering",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/rastrack/`,
  },
};
const page = () => {
  return <PortfolioInnerRastrack />;
};

export default page;
