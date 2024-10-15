import { generateBreadcrumb } from "../components/lib/schemaCode";
import BubbleIoTechnology from "../components/Technologies/BubbleIoTechnology";

export const metadata = {
  title: "Hire Bubble Developers | Brilworks",
  description:
    "Need a bubble developer? Hire a skilled professional from Brilworks for custom web app development. Contact us today for a free consultation!",
  openGraph: {
    title: "Hire Bubble Developers",
    description:
      "Need a bubble developer? Hire a skilled professional from Brilworks for custom web app development. Contact us today for a free consultation!",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-aws-developer/`,
    siteName:
      "AWS Consulting Partner | Gen AI | Product Engineering | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/1.png`,
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    title: "Hire Bubble Developers",
    description:
      "Need a bubble developer? Hire a skilled professional from Brilworks for custom web app development. Contact us today for a free consultation!",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-bubble-developer/`,
  },
};
const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Hire Bubble Developers"),
        }}
      />
      <BubbleIoTechnology />
    </>
  );
};

export default page;
