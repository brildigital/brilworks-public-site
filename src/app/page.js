import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("./home/page"));

export const metadata = {
  title: "Mobile App and Software Development Company | Brilworks",
  description:
    "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people. We excel in delivering Gen AI solutions, white label app development, AWS cost optimization, and product engineering with expertise in Next.js, Java, and low-code/no-code platforms.",
  openGraph: {
    title: "Mobile App and Software Development Company | Brilworks",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.We excel in delivering Gen AI solutions, white label app development, AWS cost optimization, and product engineering with expertise in Next.js, Java, and low-code/no-code platforms.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Mobile App and Software Development Company | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/v2/hero-pg-main.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Mobile App and Software Development Company | Brilworks",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.We excel in delivering Gen AI solutions, white label app development, AWS cost optimization, and product engineering with expertise in Next.js, Java, and low-code/no-code platforms.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

export default async function Home() {
  return <HomePage />;
}
