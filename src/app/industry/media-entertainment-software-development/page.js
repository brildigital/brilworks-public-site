import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import MediaAndEntertainment from "@/app/components/Solution/MediaAndEntertainment";

export const metadata = {
  title: "Media and Entertainment App & Software Development Company",
  description:
    "Hire entertainment app & web developers from Brilworks to build feature-rich applications for OTT, Music, Photo, Ticket Booking, and Gaming. Contact our experts now.",
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
