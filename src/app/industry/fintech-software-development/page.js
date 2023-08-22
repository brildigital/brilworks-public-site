import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import Fintech from "@/app/components/Solution/Fintech";

export const metadata = {
  title: "Fintech Software Development | Financial Software Development",
  description:
    "Brilworks, a fintech software development company offers services for custom fintech apps, banking, insurance, wallet development, and personal finance.",
  openGraph: {
    title: "Fintech Software Development | Financial Software Development",
    description:
      "Brilworks, a fintech software development company offers services for custom fintech apps, banking, insurance, wallet development, and personal finance.",

    url: "https://brilworks.com/industry/fintech-software-development/",
    siteName: "Mobile App & Software Development Company | Brilworks",
    images: [
      {
        url: "https://brilworks.com/images/explore-arrow-01.png",
      },
    ],
    locale: "en-US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_Brilworks",
  },
  alternates: {
    canonical:
      "https://www.brilworks.com/industry/fintech-software-development/",
  },
};

const page = () => {
  return (
    <>
      <Header />
      <Fintech />
      <Footer />
    </>
  );
};

export default page;
