import React from "react";

import DatabaseSelectorTool from "@/app/components/Tools/DatabaseSelectorTool";

export const metadata = {
  title: "Tech Stack Recommender",
  description:
    "Choose the right database for your application. Compare SQL and NoSQL options, scalability, and performance to find the perfect fit for your project needs.",
  openGraph: {
    title: "Tech Stack Recommender",
    description:
      "Choose the right database for your application. Compare SQL and NoSQL options, scalability, and performance to find the perfect fit for your project needs.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}database-selector-tool/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}database-selector-tool/`,
  },
};
const page = () => {
  return <DatabaseSelectorTool />;
};

export default page;
