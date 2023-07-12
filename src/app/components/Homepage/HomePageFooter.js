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
                  <a href="https://www.facebook.com/brilwork/" target="_blank">
                    <img src="/images/fb.png" alt="Brilworks on Facebook" />
                  </a>
                </div>
                <div className="social_media_img">
                  <a
                    href="https://www.instagram.com/brilworkssoftware/"
                    target="_blank"
                  >
                    <img src="/images/insta.png" alt="Brilworks on Instagram" />
                  </a>
                </div>
                <div className="social_media_img">
                  <a
                    href=" https://www.youtube.com/@brilworks7633"
                    target="_blank"
                  >
                    <img src="/images/youtube.png" alt="Brilworks on YouTube" />
                  </a>
                </div>
                <div className="social_media_img">
                  <a
                    href=" https://www.linkedin.com/company/brilworks/"
                    target="_blank"
                  >
                    <img
                      src="/images/linkedin.png"
                      alt="Brilworks on LinkedIn"
                    />
                  </a>
                </div>
                <div className="social_media_img">
                  <a href="https://dribbble.com/Brilworks" target="_blank">
                    <img src="/images/social.png" alt="Brilworks on Dribble" />
                  </a>
                </div>
                <div className="social_media_img">
                  <a
                    href="https://www.behance.net/hellobrilworks"
                    target="_blank"
                  >
                    <img src="/images/behance.png" alt="Brilworks on Behance" />
                  </a>
                </div>
                <div className="social_media_img">
                  <a
                    href="https://www.upwork.com/ag/brilworks/"
                    target="_blank"
                  >
                    <img src="/images/up-01.png" alt="Brilworks on Upwork" />
                  </a>
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
                    <a href="mailto:sales@brilworks.com">sales@brilworks.com</a>
                  </li>
                </ul>
                <div className="quick_link">
                  <p>CONTACT</p>
                </div>
                <ul className="footer_link">
                  <li>
                    <a href="tel:919313644148">+91 9313644148</a>
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
                  <a href="index.htm" className="active">
                    {" "}
                    Home{" "}
                  </a>
                </li>
                <li>
                  <a href="contact-us/index.htm"> Contact Us </a>
                </li>
                <li>
                  <a href="portfolio/index.htm"> Portfolio </a>
                </li>
                <li>
                  <a href="about-us/index.htm"> About </a>
                </li>
                <li>
                  <a href="our-process/index.htm"> Our Process </a>
                </li>
                <li>
                  <a href="blog/index.htm"> Blogs </a>
                </li>
              </ul>
              <div className="footer">
                <a href="career/index.htm">
                  <div className="header_sec1_txt2 hidden-xs">
                    <p className="transition">We’re Hiring!</p>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="quick_link">
                <p>SOLUTIONS</p>
              </div>
              <ul className="footer_link">
                <li>
                  <a href="industry/fintech-software-development/index.htm">
                    Fintech
                  </a>
                </li>
                <li>
                  <a href="industry/fleet-management-software-development/index.htm">
                    Fleet Management + GPS
                  </a>
                </li>
                <li>
                  <a href="industry/healthcare-software-development/index.htm">
                    Health Care
                  </a>
                </li>
                <li>
                  <a href="industry/media-entertainment-software-development/index.htm">
                    Media & Entertainment
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="quick_link">
                <p>TECHNOLOGIES</p>
              </div>
              <ul className="footer_link">
                <li>
                  <a href="hire-java-developer/index.htm"> Java </a>
                </li>
                <li>
                  <a href="hire-nodejs-developer/index.htm"> Nodejs </a>
                </li>
                <li>
                  <a href="hire-reactjs-developer/index.htm"> Reactjs </a>
                </li>
                <li>
                  <a href="hire-react-native-developer/index.htm">
                    React Native
                  </a>
                </li>
                <li>
                  <a href="hire-aws-developer/index.htm"> AWS Development </a>
                </li>
                <li>
                  <a href="hire-ui-ux-designer/index.htm">
                    {" "}
                    UI/UX Development{" "}
                  </a>
                </li>
                <li>
                  <a href="hire-blockchain-developer/index.htm">
                    Blockchain Development
                  </a>
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
              <a href="javascript:void(0);">
                <p className="transition">Terms of Service</p>
              </a>
              <a href="javascript:void(0);">
                <p className="transition">Privacy Policy</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageFooter;
