import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import UIUXTechnology from "../components/Technologies/UIUXTechnology";

export const metadata = {
  title: "UI UX Design Company | Hire Dedicated UI UX Designer",
  description:
    "Hire UI/UX designers from Brilworks for the stunning user experience & user interface designing services like Consulting, Strategy, Mockups, Wireframe and Prototyping.",
  openGraph: {
    title: "UI UX Design Company | Hire Dedicated UI UX Designer",
    description:
      "Hire UI/UX designers from Brilworks for the stunning user experience & user interface designing services like Consulting, Strategy, Mockups, Wireframe and Prototyping.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}hire-ui-ux-designer/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/1.png`,
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
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}hire-ui-ux-designer/`,
  },
};

const page = () => {
  return (
    <>
      <Header />
      <UIUXTechnology />

      <Footer />
    </>
  );
};

export default page;
