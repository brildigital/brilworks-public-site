import BlogInner from "@/app/components/Blog/BlogInner";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header/Header";
import AutoSlidesFooter from "@/app/components/Homepage/AutoSlidesFooter";

const page = () => {
  return (
    <>
      <Header />
      <BlogInner />
      <AutoSlidesFooter />
      <Footer />
    </>
  );
};

export default page;
