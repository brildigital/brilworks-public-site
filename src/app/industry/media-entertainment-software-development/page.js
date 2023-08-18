import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import MediaAndEntertainment from "@/app/components/Solution/MediaAndEntertainment";

export const metadata = {
  title: "Media and Entertainment App & Software Development Company",
  description:
    "Hire entertainment app & web developers from Brilworks to build feature-rich applications for OTT, Music, Photo, Ticket Booking, and Gaming. Contact our experts now.",
  openGraph: {
    title: "Media and Entertainment App & Software Development Company",
    description:
      "Hire entertainment app & web developers from Brilworks to build feature-rich applications for OTT, Music, Photo, Ticket Booking, and Gaming. Contact our experts now.",
    url: "https://brilworks.com/industry/media-entertainment-software-development/",
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
      "https://brilworks.com/industry/media-entertainment-software-development/",
  },
};

const page = () => {
  return (
    <>
      <Header />
      <MediaAndEntertainment />

      <Footer />
    </>
  );
};

export default page;
