import React from "react";
import OrderNest from "@/app/components/Product/OrderNest";

export const metadata = {
  title:
    "OrderNest - Restaurant Management System | Run Your Restaurant From Setup to Close | Brilworks",
  description:
    "OrderNest is the one place where restaurant teams run day-to-day service. Managers design menus, configure tables, invite staff, and track real-time sales. Front-of-house handles seatings and bills, while kitchen and bar crew see live tickets with status updates.",
  openGraph: {
    title:
      "OrderNest - Restaurant Management System | Run Your Restaurant From Setup to Close | Brilworks",
    description:
      "OrderNest is the one place where restaurant teams run day-to-day service. Managers design menus, configure tables, invite staff, and track real-time sales. Complete restaurant management solution.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/order-nest/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/ordernest-1770726411206.webp`,
      },
    ],
  },

  twitter: {
    title:
      "OrderNest - Restaurant Management System | Run Your Restaurant From Setup to Close | Brilworks",
    description:
      "OrderNest is the one place where restaurant teams run day-to-day service. Managers design menus, configure tables, invite staff, and track real-time sales. Complete restaurant management solution.",
    card: "summary_large_image",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/assets/ordernest-1770726411206.webp`,
      },
    ],
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}x/product-listing/order-nest/`,
  },
};

const page = () => {
  return <OrderNest />;
};

export default page;
