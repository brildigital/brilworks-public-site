import { BlogText } from "./BigText";

const Blogs = () => {
  return (
    <>
      <BlogText />
      <div className="w-[90%] blog-home mx-auto">
        <div className="blog-box overflow-hidden">
          <a href="">
            <img
              src="https://www.brilworks.com/wp-content/uploads/2023/06/Thumbnail-VR0.svg"
              className="vc_gitem-zone-img"
              alt="Banner - Apple Vision Pro vs. Meta Quest 3"
            />
            <div>
              <h4 className="xl:text-[32px]">
                Apple Vision Pro vs Meta Quest 3
              </h4>
            </div>
          </a>
        </div>

        <div className="blog-box overflow-hidden">
          <a href="">
            <img
              src="https://www.brilworks.com/wp-content/uploads/2023/06/Thumbnail-Rapid.svg "
              className="vc_gitem-zone-img"
              alt="Banner-Rapid app development"
            />
            <div>
              <h4 className="xl:text-[32px]">
                What is Rapid Application Development? A Detailed Guide
              </h4>
            </div>
          </a>
        </div>

        <div className="blog-box overflow-hidden">
          <a href="">
            <img
              src="https://www.brilworks.com/wp-content/uploads/2023/05/Thumbnail-sendgrid-vs-mailgun.svg"
              className="vc_gitem-zone-img"
              alt="Banner-sendgrid vs mailgun"
            />
            <div>
              <h4 className="xl:text-[32px]">
                A Comprehensive Comparison: SendGrid vs. Mailgun vs. Amazon SES
                vs. Mandrill
              </h4>
            </div>
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center gap-[20px] about_btn transition pt-[32px]">
        <div className="about_txt">
          <a href="https://www.brilworks.com/about-us/" className="text-[21px]">
            Read More
          </a>
        </div>
        <div className="aerrow relative">
          <img
            decoding="async"
            loading="lazy"
            className="black_aerrow alignnone wp-image-28 size-full"
            src="/images/black_aerrow-1.png"
            alt="arrow"
            width="46"
            height="18"
          />
          <img
            decoding="async"
            loading="lazy"
            className="gradiant_aerrow alignnone wp-image-29 size-full"
            src="/images/arrow-gradiant.png"
            alt="arrow"
            width="46"
            height="18"
          />
        </div>
      </div>
    </>
  );
};

export default Blogs;
