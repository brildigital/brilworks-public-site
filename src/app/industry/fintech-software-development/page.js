import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import Fintech from "@/app/components/Solution/Fintech";

export const metadata = {
  title: "Fintech Software Development | Financial Software Development",
  description:
    "Brilworks, a fintech software development company offers services for custom fintech apps, banking, insurance, wallet development, and personal finance.",
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
