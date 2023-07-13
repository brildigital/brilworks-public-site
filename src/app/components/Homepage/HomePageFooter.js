import Link from "next/link";

const HomePageFooter = () => {
  return (
    <>
      <div className="bg_black">
        <div className="footer_width footer_padding">
          <div className="footer_grid">
            <div>
              <div className="footer_logo">
                <img
                  src="https://www.brilworks.com/wp-content/uploads/2023/01/logo-white.png"
                  alt="Brilworks Logo"
                />
              </div>
              <div className="social_media">
                <div className="social_media_img">
                  <Link href="https://www.facebook.com/brilwork/" target="_blank">
                    <img src="images/fb.png" alt="Brilworks on Facebook" />
                  </Link>
                </div>
                <div className="social_media_img">
                  <Link
                    href="https://www.instagram.com/brilworkssoftware/"
                    target="_blank"
                  >
                    <img src="images/insta.png" alt="Brilworks on Instagram" />
                  </Link>
                </div>
                <div className="social_media_img">
                  <Link
                    href=" https://www.youtube.com/@brilworks7633"
                    target="_blank"
                  >
                    <img src="images/youtube.png" alt="Brilworks on YouTube" />
                  </Link>
                </div>
                <div className="social_media_img">
                  <Link
                    href=" https://www.linkedin.com/company/brilworks/"
                    target="_blank"
                  >
                    <img
                      src="images/linkedin.png"
                      alt="Brilworks on LinkedIn"
                    />
                  </Link>
                </div>
                <div className="social_media_img">
                  <Link href="https://dribbble.com/Brilworks" target="_blank">
                    <img src="images/social.png" alt="Brilworks on Dribble" />
                  </Link>
                </div>
                <div className="social_media_img">
                  <Link
                    href="https://www.behance.net/hellobrilworks"
                    target="_blank"
                  >
                    <img src="images/behance.png" alt="Brilworks on Behance" />
                  </Link>
                </div>
                <div className="social_media_img">
                  <Link
                    href="https://www.upwork.com/ag/brilworks/"
                    target="_blank"
                  >
                    <img src="images/up-01.png" alt="Brilworks on Upwork" />
                  </Link>
                </div>
              </div>
              <div className="add_loc_email">
                <div className="quick_link">
                  <p>LOCATION</p>
                </div>
                <ul className="footer_link">
                  <li>
                    503, Fortune Business Hub, Science City Road, Near Shell
                    Petrol Pump, Sola, Ahmedabad, Gujarat 380060
                  </li>
                </ul>
                <div className="quick_link">
                  <p>EMAIL</p>
                </div>
                <ul className="footer_link">
                  <li>
                    <Link href="mailto:sales@brilworks.com">sales@brilworks.com</Link>
                  </li>
                </ul>
                <div className="quick_link">
                  <p>CONTACT</p>
                </div>
                <ul className="footer_link">
                  <li>
                    <Link href="tel:919313644148">+91 9313644148</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="quick_link">
                <p>QUICK LINKS</p>
              </div>
              <ul className="footer_link">
                <li>
                  <Link href="index.htm" className="active">
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li>
                  <Link href="contact-us/index.htm"> Contact Us </Link>
                </li>
                <li>
                  <Link href="portfolio/index.htm"> Portfolio </Link>
                </li>
                <li>
                  <Link href="about-us/index.htm"> About </Link>
                </li>
                <li>
                  <Link href="our-process/index.htm"> Our Process </Link>
                </li>
                <li>
                  <Link href="blog/index.htm"> Blogs </Link>
                </li>
              </ul>
              <div className="footer">
                <Link href="career/index.htm">
                  <div className="header_sec1_txt2 hidden-xs">
                    <p className="transition">We’re Hiring!</p>
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <div className="quick_link">
                <p>SOLUTIONS</p>
              </div>
              <ul className="footer_link">
                <li>
                  <Link href="industry/fintech-software-development/index.htm">
                    Fintech
                  </Link>
                </li>
                <li>
                  <Link href="industry/fleet-management-software-development/index.htm">
                    Fleet Management + GPS
                  </Link>
                </li>
                <li>
                  <Link href="industry/healthcare-software-development/index.htm">
                    Health Care
                  </Link>
                </li>
                <li>
                  <Link href="industry/media-entertainment-software-development/index.htm">
                    Media & Entertainment
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="quick_link">
                <p>TECHNOLOGIES</p>
              </div>
              <ul className="footer_link">
                <li>
                  <Link href="hire-java-developer/index.htm"> Java </Link>
                </li>
                <li>
                  <Link href="hire-nodejs-developer/index.htm"> Nodejs </Link>
                </li>
                <li>
                  <Link href="hire-reactjs-developer/index.htm"> Reactjs </Link>
                </li>
                <li>
                  <Link href="hire-react-native-developer/index.htm">
                    React Native
                  </Link>
                </li>
                <li>
                  <Link href="hire-aws-developer/index.htm"> AWS Development </Link>
                </li>
                <li>
                  <Link href="hire-ui-ux-designer/index.htm">
                    {" "}
                    UI/UX Development{" "}
                  </Link>
                </li>
                <li>
                  <Link href="hire-blockchain-developer/index.htm">
                    Blockchain Development
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_last_width">
          <div className="footer_txt_flex">
            <div className="footer_txt_style">
              <p>© 2023 BRILWORKS</p>
            </div>
            <div className="footer_txt_flex2">
              <Link href="javascript:void(0);">
                <p className="transition">Terms of Service</p>
              </Link>
              <Link href="javascript:void(0);">
                <p className="transition">Privacy Policy</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageFooter;
