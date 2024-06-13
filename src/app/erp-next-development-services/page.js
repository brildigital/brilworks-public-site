import ERPNextDevService from "../components/Services/ERPNextDevService";

export const metadata = {
  title: "ERPNext Development Services",
  description:
    "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
  openGraph: {
    title: "ERPNext Development Services",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}erp-next-development-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/erp-next-dev-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "ERPNext Development Services",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}erp-next-development-services/`,
  },
};

const page = () => {
  return (
    <div className="!bg-colorWhite">
      <ERPNextDevService />
    </div>
  );
};

export default page;
