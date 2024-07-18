import FrappeDevelopmentService from "../components/Services/FrappeDevelopmentService";

export const metadata = {
  title: "Frappe Development Services | Brilworks",
  description:
    "Accelerate your business processes with Brilworks' Frappe development services. Create customized, scalable ERP solutions that streamline operations and boost productivity.",
  openGraph: {
    title: "Frappe Development Services",
    description:
      "Accelerate your business processes with Brilworks' Frappe development services. Create customized, scalable ERP solutions that streamline operations and boost productivity.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}frappe-development-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/frappe-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Frappe Development Services",
    description:
      "Accelerate your business processes with Brilworks' Frappe development services. Create customized, scalable ERP solutions that streamline operations and boost productivity.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}frappe-development-services/`,
  },
};

const page = () => {
  return (
    <div className="!bg-colorWhite">
      <FrappeDevelopmentService />
    </div>
  );
};

export default page;
