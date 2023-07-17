import { SalesEmailText } from "./BigText";
import HomepageContactForm from "./HomepageContactForm";

const ContactUs = () => {
  return (
    <>
      <SalesEmailText/>
      <div className="md:w-[70%] w-[100%] blog-home pt-[16px] xl:pb-[128px] pb-[40px] mx-auto px-[15px]">
        <HomepageContactForm/>
      </div>
    </>
  );
};

export default ContactUs;
