import React from "react";

import DatabaseSelectorTool from "@/app/components/Tools/DatabaseSelectorTool";

export const metadata = {
  title:
    "Database Selector Tool | Best Database for Startups, SaaS, Mobile & Web Apps",
  description:
    "Use our database selector tool to find the best database for startups, SaaS platforms, mobile apps, and web applications. Fast, accurate, and tailored to your project needs.",
  openGraph: {
    title:
      "Database Selector Tool | Best Database for Startups, SaaS, Mobile & Web Apps",
    description:
      "Use our database selector tool to find the best database for startups, SaaS platforms, mobile apps, and web applications. Fast, accurate, and tailored to your project needs.",

    url: `${process.env.NEXT_PUBLIC_BASE_URL}tools/database-selector-tool/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}tools/database-selector-tool/`,
  },
};
const page = () => {
  return <DatabaseSelectorTool />;
};

export default page;
