import AdaloDevelopmentService from "../components/Services/AdaloDevelopmentService";

export const metadata = {
  title: "Adalo Development Services",
  description:
    "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
  openGraph: {
    title: "Adalo Development Services",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}adalo-development-services/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    images: [
      {
        url: "https://a.storyblok.com/f/219851/1440x796/a1882ce6ef/adalo-banner.webp",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Adalo Development Services",
    description:
      "Brilworks is a trusted mobile app and software development company that is deeply dedicated to the long-term growth and success of clients and people.",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}adalo-development-services/`,
  },
};

const page = () => {
  return (
    <div className="!bg-colorWhite">
      <AdaloDevelopmentService />
    </div>
  );
};

export default page;
