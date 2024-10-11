import dynamic from "next/dynamic";

const PortfolioInnerEccocar = dynamic(() =>
  import("@/app/components/Portfolio/PortfolioInnerEccocar")
);

export const metadata = {
  title: "Eccocar - Portfolio | Fleet Payment Solution |Brilworks Software",
  description:
    "Check out Brilworks's work for Eccocar. How we helped Eccocar to build a payment gateway system and integrated their platform with Stripe to collect payments.",
  openGraph: {
    title: "Eccocar - Portfolio | Fleet Payment Solution |Brilworks Software",
    description:
      "Check out Brilworks's work for Eccocar. How we helped Eccocar to build a payment gateway system and integrated their platform with Stripe to collect payments.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/eccocar/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}portfolio/eccocar/`,
  },
};
const page = () => {
  return <PortfolioInnerEccocar />;
};

export default page;
