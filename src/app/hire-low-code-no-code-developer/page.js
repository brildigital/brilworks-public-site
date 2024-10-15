import { generateBreadcrumb } from "../components/lib/schemaCode";
import LowCodeNoCodeTechnology from "../components/Technologies/LowCodeNoCodeTechnology";

export const metadata = {
  title: "Hire Low Code No Code Developers | Brilworks",
  description:
    "Hire skilled no-code/low-code developers to build apps faster. Our experts specialize in creating innovative solutions without complex coding. Contact us today to discuss your project!",
  openGraph: {
    title: "Hire Low Code No Code Developers",
    description:
      "Hire skilled no-code/low-code developers to build apps faster. Our experts specialize in creating innovative solutions without complex coding. Contact us today to discuss your project!",
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
    title: "Hire Low Code No Code Developers",
    description:
      "Hire skilled no-code/low-code developers to build apps faster. Our experts specialize in creating innovative solutions without complex coding. Contact us today to discuss your project!",
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-low-code-no-code-developer/`,
  },
};
const page = () => {
  return (
    <>
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateBreadcrumb("Hire Low Code No Code Developers"),
        }}
      />
      <LowCodeNoCodeTechnology />
    </>
  );
};

export default page;
