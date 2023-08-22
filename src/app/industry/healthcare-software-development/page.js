import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import HealthCare from "@/app/components/Solution/Healthcare";

export const metadata = {
  title: "Custom Healthcare Software & App Development Company | Brilworks",
  description:
    "Healthcare software developers at Brilworks build medical software for patient monitoring, telemedicine & prescription app, EMR/EHR platform. Hire our engineer today!",
  openGraph: {
    title: "Custom Healthcare Software & App Development Company | Brilworks",
    description:
      "Healthcare software developers at Brilworks build medical software for patient monitoring, telemedicine & prescription app, EMR/EHR platform. Hire our engineer today!",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}industry/healthcare-software-development/`,
    siteName: "Mobile App & Software Development Company | Brilworks",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}images/explore-arrow-01.png`,
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
      `${process.env.NEXT_PUBLIC_BASE_URL}industry/healthcare-software-development/`,
  },
};

const page = () => {
  return (
    <>
      <Header />
      <HealthCare />
      <Footer />
    </>
  );
};

export default page;
