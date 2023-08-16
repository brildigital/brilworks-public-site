"use client";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <section className="w-[90%] mx-auto xl:my-[9rem] lg:my-[9rem] md:my-[6rem] my-[6rem] mb-[1rem]">
        <div className="flex md:flex-row flex-col items-center gap-[2rem]">
          <div className="basis-3/6 md:order-1 order-2">
            <div className="home_sec2_txt1 text_left">
              <p>
                Your tech partner in a{" "}
                <span className="abc">fast changing world.</span>
              </p>
            </div>
            <div className="home_txt3 md:mt-[3rem] mt-[3rem]">
              <p>
                We create digital experiences that drive business performance to
                help organizations adapt to shifts in customer seek behavior and
                technology.
              </p>
            </div>
            <div className="about_sec1_btn">
              <Link
                href="#service_sec2"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("service_sec2").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                scroll={true}
                className="__mPS2id _mPS2id-h"
              >
                <img
                  decoding="async"
                  className="alignnone wp-image-189 size-full"
                  src="/images/down-arrow(1).png"
                  alt="down arrow"
                  width="62"
                  height="62"
                />
              </Link>
            </div>
          </div>
          <div className="basis-3/6 md:!order-2 order-1">
            <div className="about_sec1_img1">
              <img
                decoding="async"
                loading="lazy"
                className="alignnone wp-image-188 size-full"
                src="/images/banner-1.jpg"
                alt="team working"
                width="882"
                height="589"
                srcSet="
                    /images/banner-1.jpg         882w,
                    /images/banner-1-300x200.jpg 300w,
                    /images/banner-1-768x513.jpg 768w
                  "
                sizes="(max-width: 882px) 100vw, 882px"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="service_sec2"
        className="about_bg_sec2 xl:py-[8rem] lg:py-[6rem] md:py-[4rem] py-[4rem] px-[15px]"
      >
        <div className="home_sec2_txt1 md:text-center text-left">
          <p>
            Our<span className="abc"> Mission</span>
          </p>
        </div>

        <div className="home_sec2_txt3 text-center">
          <p className="!w-full md:!w-[74%]">
            To empower businesses and startups with exceptional products that
            wow customers.
          </p>
        </div>

        <div className="md:w-[90%] w-full mx-auto xl:pt-[10rem] lg:pt-[8rem] md:pt-[6rem] sm:pt-[4rem] relative about_sec2">
          <div className="">
            <div className="about_vision md:[0px] mb-[30px]">
              <div className="sec6_title">
                <p className="mb-[10px]">Our Vision</p>
              </div>
              <div className="sec10_txt1">
                <p>
                  To become a technology partner &amp; enabler for global tech
                  startups &amp; enterprises.
                </p>
              </div>
            </div>
            <div className="about_sec2_img1">
              <img
                decoding="async"
                loading="lazy"
                className="alignnone wp-image-191 size-full"
                src="/images/vision.jpg"
                alt="vision"
                width="965"
                height="625"
                srcSet="
                    images/vision.jpg         965w,
                    images/vision-300x194.jpg 300w,
                    images/vision-768x497.jpg 768w
                  "
                sizes="(max-width: 965px) 100vw, 965px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="xl:py-[8rem] sm:pb- lg:py-[6rem] md:py-[4rem] pb-[1rem] py-[4rem] mx-[15px]">
        <div className="home_sec2_txt1 md:text-center text-left">
          <p>Enabling greatness through</p>
        </div>

        <div className="home_sec2_txt2 md:text-center text-left">
          <p className="text_transparent">our expertise.</p>
        </div>

        <div className="career px-[15px]">
          <div className="home_sec2_txt3 mx-auto text-center">
            <p className="md:!text-[2rem] !text-[1rem] md:!w-[77%] !w-full">
              Whether you’re looking for products and web applications that
              excite, energize, and engage your customers or seek to transform
              your internal processes with seamless tech innovations, we have
              the right people, the right expertise, and the right insights to
              serve your business needs.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-[6rem] gap-[2rem] md:w-[70%] w-full px-[15px] mx-auto about_sec2_grid md:my-[100px] my-[40px] margin-top">
          <div>
            <div className="number">
              <p data-max="8">
                8<span className="sign_data"> +</span>
              </p>
            </div>
            <div className="year">
              <p>Years of experience</p>
            </div>
          </div>
          <div>
            <div className="number">
              <p data-max="98">
                98<span className="sign_data">%</span>
              </p>
            </div>
            <div className="year">
              <p>Project Success Rate</p>
            </div>
          </div>
          <div>
            <div className="number">
              <p data-max="60">
                60<span className="sign_data">+</span>
              </p>
            </div>
            <div className="year">
              <p>Experts on board</p>
            </div>
          </div>
          <div>
            <div className="number">
              <p data-max="120">
                120<span className="sign_data">+</span>
              </p>
            </div>
            <div className="year">
              <p>Applications Developed</p>
            </div>
          </div>
          <div>
            <div className="number">
              <p data-max="20">
                20<span className="sign_data">+</span>
              </p>
            </div>
            <div className="year">
              <p>Technologies in use</p>
            </div>
          </div>
          <div>
            <div className="number">
              <p data-max="20">20</p>
            </div>
            <div className="year">
              <p>Global locations of clients</p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="home_sec2_txt1 md:text-center text-left">
            <p>#BrilBeliefs</p>
          </div>

          <div className="home_sec2_txt1 md:text-center text-left">
            <p>
              <span className="abc">the beliefs of</span> brilworks.
            </p>
          </div>
        </div>

        <div className="md:w-[90%] w-full mx-auto">
          <div className="xl:gap-[64px] lg:gap-[32px] gap-[40px] about_sec4 lg:flex-row flex-col flex mt-[5rem]">
            <div className="about_sec4_row relative first_row lg:w-1/3 w-full">
              <div className="about_sec4_3">
                <div className="about_box_style">
                  <div className="sec4_about height_about">
                    <p>
                      Trustworthy <span className="abc">Partnership</span>
                    </p>
                  </div>
                  <div className="sec6_career_flex">
                    <div className="sec6_career_img1">
                      <img
                        decoding="async"
                        loading="lazy"
                        className="alignnone wp-image-208 size-full"
                        src={"/images/trustworthy.png"}
                        alt="Trustworthy Partnership"
                        width="142"
                        height="142"
                      />
                    </div>
                  </div>
                </div>
                <div className="about_sec4_70 first_hover">
                  <div className="about_box_style about_bg">
                    <div className="about_se4_flex">
                      <div className="sec4_about">
                        <p>
                          Trustworthy <span className="abc">Partnership</span>
                        </p>
                      </div>
                    </div>
                    <div className="about_sec4_txt4">
                      <div className="sec10_txt1">
                        <p className="text-[1.25rem]">
                          We’re focused on building long-term, trustworthy
                          partnerships with our clients by providing them with
                          the talent and expertise that transcends even the most
                          complex challenges.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about_sec4_row relative second_row lg:w-1/3 w-full">
              <div className="about_sec4_3 relative first_30">
                <div className="about_box_style">
                  <div className="sec4_about height_about">
                    <p>
                      High&nbsp;Caliber <span className="abc">Talent</span>
                    </p>
                  </div>
                  <div className="sec6_career_flex">
                    <div className="sec6_career_img1">
                      <img
                        decoding="async"
                        loading="lazy"
                        className="alignnone wp-image-213 size-full"
                        src={"/images/high-caliber.png"}
                        alt="High Caliber Talent"
                        width="142"
                        height="142"
                      />
                    </div>
                  </div>
                </div>
                <div className="about_sec4_70 second_hover">
                  <div className="about_box_style about_bg">
                    <div className="about_se4_flex">
                      <div className="sec4_about">
                        <p>
                          High&nbsp;Caliber{" "}
                          <span className="abc">
                            <br />
                            Talent
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="about_sec4_txt4">
                      <div className="sec10_txt1">
                        <p className="text-[1.25rem]">
                          We believe that brilliant people deliver brilliant
                          outcomes. So we hire the very best to lead us forward,
                          keep pace with the latest technologies, and deliver
                          the highest levels of customer service.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about_sec4_row relative third_row lg:w-1/3 w-full">
              <div className="about_sec4_3">
                <div className="about_box_style">
                  <div className="sec4_about height_about">
                    <p>
                      Growth <span className="abc">Mindset </span>
                    </p>
                  </div>
                  <div className="sec6_career_flex">
                    <div className="sec6_career_img1">
                      <img
                        decoding="async"
                        loading="lazy"
                        className="alignnone wp-image-212 size-full"
                        src={"/images/growth.png"}
                        alt="Growth Mindset"
                        width="142"
                        height="142"
                      />
                    </div>
                  </div>
                </div>
                <div className="about_sec4_70 third_hover">
                  <div className="about_box_style about_bg">
                    <div className="about_se4_flex !pb-1.8rem">
                      <div className="sec4_about">
                        <p>
                          Growth <span className="abc mt-0">Mindset </span>
                        </p>
                      </div>
                    </div>
                    <div className="about_sec4_txt4">
                      <div className="sec10_txt1">
                        <p className="!text-[1.15rem]">
                          We take a holistic approach to every project to make
                          sure that their needs are met. From strategy and
                          detailed design through development, we remain
                          committed throughout each phase of the process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:my-[128px] md:my-[80px] my-[60px]">
          <div className="home_sec2_txt1 md:text-center text-left">
            <p>Trusted by companies</p>
          </div>

          <div className="home_sec2_txt2 md:text-center text-left">
            <p className="text_transparent">across industries.</p>
          </div>

          <div className="md:w-[65%] w-full mt-[3rem] mx-auto">
            <div className="flex item-center md:justify-center justify-start flex-wrap gap-[16px]">
              <div className="about_btn_style">
                <div className="sec9_txt1 bg-[#dcebff]">
                  <p>Travel &amp; Hospitality</p>
                </div>
              </div>
              <div className="about_btn_style">
                <div className="sec9_txt1  bg-[#dcf8ef]">
                  <p>Education</p>
                </div>
              </div>
              <div className="about_btn_style">
                <div className="sec9_txt1 bg-[#ece8ff]">
                  <p>Fashion</p>
                </div>
              </div>
              <div className="about_btn_style">
                <div className="sec9_txt1 bg-[#f8efde]">
                  <p>Staffing</p>
                </div>
              </div>
              <div className="about_btn_style">
                <div className="sec9_txt1 bg-[#fbe4d4]">
                  <p>Retail &amp; FMCG</p>
                </div>
              </div>
              <div className="about_btn_style">
                <div className="sec9_txt1 bg-[#ffe6f4]">
                  <p>Media &amp; Entertainment</p>
                </div>
              </div>
              <div className="about_btn_style">
                <div className="sec9_txt1 bg-[#cbdbfe]">
                  <p>Advertising</p>
                </div>
              </div>
              <div className="about_btn_style">
                <div className="sec9_txt1 bg-[#fffbe1]">
                  <p>Consumer Service</p>
                </div>
              </div>
              <div className="about_btn_style">
                <div className="sec9_txt1 bg-[#e6ffe7]">
                  <p>E-Commerce</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home_sec2_txt1 md:text-center text-left">
          <p>
            Meet the<span className="abc"> team</span>
          </p>
        </div>

        <div className="career">
          <div className="home_sec2_txt3 md:text-center text-left">
            <p className="md:!w-[78%] !w-full md:!text-[2rem] !text-[1.3rem]">
              Talent wins games, but teamwork and intelligence win
              championships.
            </p>
          </div>

          <Link
            href="/career/"
            className="flex items-center justify-center gap-[20px] about_btn transition md:pt-[32px] pt-[0px]"
          >
            <div className="about_txt">
              <Link href="/career/" className="md:text-[32px] text-[20px]">
                Join Our Team
              </Link>
            </div>
            <div className="aerrow relative">
              <img
                className="black_aerrow alignnone wp-image-28 size-full"
                src="/images/black_aerrow-1.png"
                alt="arrow"
              />
              <img
                className="gradiant_aerrow alignnone wp-image-29 size-full"
                src="/images/arrow-gradiant.png"
                alt="arrow"
              />
            </div>
          </Link>

          <div className="md:mt-[5rem] mt-[2rem]">
            <img
              className="alignnone wp-image-190 size-full"
              src={
                "https://a.storyblok.com/f/219851/1920x1195/e16b4f5cd2/team-image.png"
              }
              alt="Brilworks team"
            />
          </div>

          <div className="xl:mt-[8rem] lg:mt-[6rem] md:mt-[4rem] mt-[2rem]">
            <div className="sec7_box_style md:w-[60%] w-full">
              <div className="home_sec2_txt1 md:text-center text-left">
                <p>Let’s build something</p>
              </div>
              <div className="home_sec2_txt2 md:text-center text-left mb-[3rem]">
                <p>great together.</p>
              </div>
              <div className="sec7_about_btn">
                <p>
                  <Link href="/contact-us/">Get in touch</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
