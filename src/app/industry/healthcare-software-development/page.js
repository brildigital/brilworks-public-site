import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import HealthCare from "@/app/components/Solution/Healthcare";

export const metadata = {
  title: "Custom Healthcare Software & App Development Company | Brilworks",
  description:
    "Healthcare software developers at Brilworks build medical software for patient monitoring, telemedicine & prescription app, EMR/EHR platform. Hire our engineer today!",
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
