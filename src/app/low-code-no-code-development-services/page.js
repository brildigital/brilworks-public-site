import LowCodeNoCodeDevService from "../components/Services/LowCodeNoCodeDevService";

export const metadata = {
  title: "Low Code No Code Development Services | Brilworks",
  description:
    "Empower your business with Brilworks' low-code/no-code solutions. Rapidly develop and deploy applications that drive efficiency and innovation, without extensive coding.",
  openGraph: {
    title: "Low Code No Code Development Services",
    description:
      "Empower your business with Brilworks' low-code/no-code solutions. Rapidly develop and deploy applications that drive efficiency and innovation, without extensive coding.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}low-code-no-code-development-services/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/lowcode-banner.webp`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Low Code No Code Development Services",
    description:
      "Empower your business with Brilworks' low-code/no-code solutions. Rapidly develop and deploy applications that drive efficiency and innovation, without extensive coding.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}low-code-no-code-development-services/`,
  },
};

const page = () => {
  return (
    <div className="!bg-colorWhite">
      <LowCodeNoCodeDevService />
    </div>
  );
};

export default page;
