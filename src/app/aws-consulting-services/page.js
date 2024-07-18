import AWSService from "../components/Services/AWSService";

export const metadata = {
  title: "AWS CONSULTING SERVICES",
  description:
    "Harness the full potential of cloud computing with Brilworks' AWS consulting. Optimize performance, reduce costs, and scale your infrastructure for long-term growth.",
  openGraph: {
    title: "AWS CONSULTING SERVICES",
    description:
      "Harness the full potential of cloud computing with Brilworks' AWS consulting. Optimize performance, reduce costs, and scale your infrastructure for long-term growth.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}aws-consulting-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/aws-service.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "AWS CONSULTING SERVICES",
    description:
      "Harness the full potential of cloud computing with Brilworks' AWS consulting. Optimize performance, reduce costs, and scale your infrastructure for long-term growth.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}aws-consulting-services/`,
  },
};

const page = () => {
  return (
    <div className="!bg-colorWhite">
      <AWSService />
    </div>
  );
};

export default page;
