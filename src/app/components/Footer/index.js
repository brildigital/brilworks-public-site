"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AutoSlidesFooter from "../Homepage/AutoSlidesFooter";

const Footer = () => {
  const pathname = usePathname();
  return (
    <>
      <AutoSlidesFooter />
      <div className="bg_black">
        <div className="footer_width footer_padding">
          <div className="footer_grid">
            <div className="grid-area-one">
              <div className="footer_logo">
                <img src="/images/logo-white.png" alt="Brilworks Logo" />
              </div>
              <div className="social_media">
                <div className="social_media_img">
                  <Link
                    href="https://www.facebook.com/brilwork/"
                    target="_blank"
                  >
                    <img src="/images/fb.png" alt="Brilworks on Facebook" />
                  </Link>
                </div>
                <div className="social_media_img">
                  <Link
                    href="https://www.instagram.com/brilworkssoftware/"
                    target="_blank"
                  >
                    <img src="/images/insta.png" alt="Brilworks on Instagram" />
                  </Link>
                </div>
                <div className="social_media_img">
                  <Link
                    href=" https://www.youtube.com/@brilworks7633"
                    target="_blank"
                  >
                    <img src="/images/youtube.png" alt="Brilworks on YouTube" />
                  </Link>
                </div>
                <div className="social_media_img">
                  <Link
                    href=" https://www.linkedin.com/company/brilworks/"
                    target="_blank"
                  >
                    <img
                      src="/images/linkedin.png"
                      alt="Brilworks on LinkedIn"
                    />
                  </Link>
                </div>
                <div className="social_media_img">
                  <Link href="https://dribbble.com/Brilworks" target="_blank">
                    <img src="/images/social.png" alt="Brilworks on Dribble" />
                  </Link>
                </div>
                <div className="social_media_img">
                  <Link
                    href="https://www.behance.net/hellobrilworks"
                    target="_blank"
                  >
                    <img src="/images/behance.png" alt="Brilworks on Behance" />
                  </Link>
                </div>
                <div className="social_media_img">
                  <Link
                    href="https://www.upwork.com/ag/brilworks/"
                    target="_blank"
                  >
                    <img src="/images/up-01.png" alt="Brilworks on Upwork" />
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
            <div className="grid-area-two md:pl-8">
              <div className="quick_link">
                <p>QUICK LINKS</p>
              </div>
              <div>
                <ul className="footer_link">
                  <li>
                    <Link
                      href="/"
                      className={pathname === "/" ? "page-active" : ""}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className={
                        pathname === "/contact-us" ? "page-active" : ""
                      }
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      className={pathname === "/portfolio" ? "page-active" : ""}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      className={pathname === "/about-us" ? "page-active" : ""}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/our-process"
                      className={
                        pathname === "/our-process" ? "page-active" : ""
                      }
                    >
                      Our Process
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className={pathname === "/blog" ? "page-active" : ""}
                    >
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer">
                <Link href="/career">
                  <div className="header_sec1_txt2 hidden-xs">
                    <p className="transition">We’re Hiring!</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="grid-area-three">
              <div className="quick_link">
                <p>SOLUTIONS</p>
              </div>
              <div>
                <ul className="footer_link">
                  <li>
                    <Link
                      href="/industry/fintech-software-development"
                      className={
                        pathname === "/industry/fintech-software-development"
                          ? "page-active"
                          : ""
                      }
                    >
                      Fintech
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industry/fleet-management-software-development"
                      className={
                        pathname ===
                        "/industry/fleet-management-software-development"
                          ? "page-active"
                          : ""
                      }
                    >
                      Fleet Management + GPS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industry/healthcare-software-development"
                      className={
                        pathname === "/industry/healthcare-software-development"
                          ? "page-active"
                          : ""
                      }
                    >
                      Health Care
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industry/media-entertainment-software-development"
                      className={
                        pathname ===
                        "/industry/media-entertainment-software-development"
                          ? "page-active"
                          : ""
                      }
                    >
                      Media & Entertainment
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid-area-four md:pl-12">
              <div className="quick_link">
                <p>TECHNOLOGIES</p>
              </div>
              <div>
                <ul className="footer_link">
                  <li>
                    <Link
                      href="/hire-java-developer"
                      className={
                        pathname === "/hire-java-developer" ? "page-active" : ""
                      }
                    >
                      Java
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hire-nodejs-developer"
                      className={
                        pathname === "/hire-nodejs-developer"
                          ? "page-active"
                          : ""
                      }
                    >
                      Nodejs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hire-reactjs-developer"
                      className={
                        pathname === "/hire-reactjs-developer"
                          ? "page-active"
                          : ""
                      }
                    >
                      Reactjs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hire-react-native-developer"
                      className={
                        pathname === "/hire-react-native-developer"
                          ? "page-active"
                          : ""
                      }
                    >
                      React Native
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hire-aws-developer"
                      className={
                        pathname === "/hire-aws-developer" ? "page-active" : ""
                      }
                    >
                      AWS Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hire-ui-ux-designer"
                      className={
                        pathname === "/hire-ui-ux-designer" ? "page-active" : ""
                      }
                    >
                      UI/UX Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hire-blockchain-developer"
                      className={
                        pathname === "/hire-blockchain-developer"
                          ? "page-active"
                          : ""
                      }
                    >
                      Blockchain Development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_last_width">
          <div className="footer_txt_flex">
            <div className="footer_txt_style">
              <p>© 2023 BRILWORKS</p>
            </div>
            <div className="footer_txt_flex2">
              <Link href="" onClick={(e) => e.preventDefault()}>
                <p className="transition">Terms of Service</p>
              </Link>
              <Link href="" onClick={(e) => e.preventDefault()}>
                <p className="transition">Privacy Policy</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
