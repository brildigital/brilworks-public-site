"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import Button from "../Common/Button";

const ThreeStepstoHireDeveloper = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const getTitleText = (pathname) => {
    switch (pathname) {
      case "/hire-reactjs-developer/":
        return {
          title: "HIRE REACT JS DEVELOPERS",
          role: "React JS Developer",
          buttonText3SimpleStep: "Schedule A Developer Interview",
        };
      case "/hire-java-developer/":
        return {
          title: "HIRE JAVA DEVELOPERS",
          role: "Java Developer",
          buttonText3SimpleStep: "Schedule A Developer Interview",
        };
      case "/hire-nodejs-developer/":
        return {
          title: "HIRE Node JS DEVELOPERS",
          role: "Node JS Developer",
          buttonText3SimpleStep: "Schedule A Developer Interview",
        };
      case "/hire-react-native-developer/":
        return {
          title: "HIRE REACT NATIVE DEVELOPERS",
          role: "React Native Developer",
          buttonText3SimpleStep: "Schedule A Developer Interview",
        };
      case "/hire-aws-developer/":
        return {
          title: "HIRE AWS DEVELOPERS",
          role: "AWS Developer",
          buttonText3SimpleStep: "Schedule A Developer Interview",
        };
      case "/hire-ui-ux-designer/":
        return {
          title: "HIRE UI UX DESIGNERS",
          role: "UI UX Designer",
          buttonText3SimpleStep: "Schedule A Developer Interview",
        };
      case "/hire-flutterflow-developer/":
        return {
          title: "HIRE FLUTTERFLOW DEVELOPERS",
          role: "Flutterflow Developer",
          buttonText3SimpleStep: " Hire a Flutterflow Developer Now",
        };
      case "/hire-bubble-developer/":
        return {
          title: "HIRE BUBBLE DEVELOPERS",
          role: "Bubble Developer",
          buttonText3SimpleStep: "Hire a Bubble Developer Now",
        };
      case "/hire-adalo-developer/":
        return {
          title: "HIRE ADALO DEVELOPERS",
          role: "Adalo Developer",
          buttonText3SimpleStep: "Hire Adalo Experts",
        };
      case "/hire-low-code-no-code-developer/":
        return {
          title: "HIRE LOW CODE NO CODE DEVELOPERS",
          role: "Low code no code Developer",
          buttonText3SimpleStep: "Hire a Low Code No Code Expert",
        };
      case "/hire-mobile-app-developer/":
        return {
          title: "HIRE MOBILE APP DEVELOPERS",
          role: "Mobile App Developer",
          buttonText3SimpleStep: "Schedule A Developer Interview",
        };
      default:
        return {
          title: "HIRE BLOCKCHAIN DEVELOPERS",
          role: "Blockchain Developer",
          buttonText3SimpleStep: "Schedule A Developer Interview",
        };
    }
  };

  return (
    <section className="container mx-auto max-w-[1440px]">
      <div className="xl:py-[6rem] md:py-[4rem] py-[2rem] px-4">
        <div className="md:px-[0px]">
          <div className="service_sec3 solutions md:text-center text-left">
            <h2 className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px]">
              {getTitleText(pathname)?.title}
              <p className="md:text-[21px] md:!text-center text-[16px] !text-left">
                IN 3 SIMPLE STEPS
              </p>
            </h2>
          </div>

          <div className="grid xl:grid-cols-3 grid-cols-1 md:gap-[3rem] our-engagement-models md:px-8 lg:px-0 reveal">
            <div className="contact_box">
              <div className="">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/icons2-01-1.png"
                  alt="people"
                  className="Tell Us Your Requirements"
                />
              </div>
              <div className="steps_service flex items-center justify-center">
                <div className="no_flex_tech">
                  <div className="no_flex_height">
                    <div className="developer_sec6_title text-center mob_center">
                      <h3>Tell Us Your Requirements</h3>
                    </div>
                    <div className="service_description text-center mob_center">
                      <p>
                        Schedule a call with our expert to tell us exactly what
                        skills you need, what experience you’re looking for, and
                        what your objectives and expectations are.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact_box">
              <div className="mx-auto">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/icons2-02.png"
                  alt="Screen & Shortlist the Right Fit"
                />
              </div>

              <div className="steps_service flex items-center justify-center">
                <div className="no_flex_tech">
                  <div className="no_flex_height">
                    <div className="developer_sec6_title text-center mob_center">
                      <h3>Screen & Shortlist the Right Fit</h3>
                    </div>
                    <div className="service_description text-center mob_center">
                      <p>
                        Get introduced to the individuals you like, conduct
                        interviews, and assess their confidence to get matched
                        with a suitable talent.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact_box">
              <div className="mx-auto">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/icons2-03.png"
                  alt="Onboard Talent"
                />
              </div>
              <div className="steps_service flex items-center justify-center">
                <div className="no_flex_tech">
                  <div className="no_flex_height">
                    <div className="developer_sec6_title text-center mob_center">
                      <h3>Onboard Talent</h3>
                    </div>
                    <div className="service_description text-center mob_center">
                      <p>
                        We match you with a {getTitleText(pathname)?.role}
                        from our network within 48 to 72 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center xl:mt-[6rem] md:mt-[4rem] mt-[2rem]">
            <Button
              innerClassName="flex items-center justify-center gap-1"
              className="!pr-5"
              redirect="#section10_service"
              label={getTitleText(pathname).buttonText3SimpleStep}
              scrollingButton
              icon={
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke-miterlimit="10"
                    stroke-width="32"
                    d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0 0 83 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0 0 13.8-25.8C465 391.17 468 391.17 451 374z"
                  ></path>
                </svg>
              }
            />
          </div>
        </div>
      </div>

      <div
        className="mx-auto md:py-[6rem] py-[4rem] px-4 workpadd_borderTop end-to-end"
        id="pricing"
      >
        <div className="end-To-end">
          <div className="endTO_text solutions">
            <h2 className="!w-full p-0">
              {getTitleText(pathname)?.title}
              <br className="hidden md:block" />
              AS PER YOUR NEED
            </h2>
          </div>
        </div>

        <div className="endTO_text_content home_sec2_txt4 xl:mb-[4rem] md:mb-[2rem] mb-[2rem]">
          <p className="!text-[1.2rem]">
            We ensure you find the right people at the right cost for all your
            project needs.
          </p>
        </div>

        <div className="hire_sec1_service_50 reveal">
          <div className="react-technology">
            <div className="relative z-10 rounded-[30px] !border-[1px] border-[#00dfb8]">
              <div className="endTO_text_content home_sec2_txt4 py-6">
                <p className="!text-[1.2rem]">
                  Transparent & fair pricing. No hidden costs, surprise fees,
                  cancellation charges, setup, or minimums.
                </p>
              </div>
              <div className="border-t-[1px] border-t-[#80808085]">
                <div className="pricing_grid ">
                  <div
                    className={`one ${
                      !isMobile && "border-r-[1px] border-r-[#80808085] "
                    } md:p-4 lg:p-8 p-6`}
                  >
                    <div className="md:align-middle">
                      <p className="pricing-amount">
                        $18 <br />
                        Hourly (USD)
                      </p>
                    </div>
                    <div className="pricing-desc">
                      <div className="flex align-middle gap-3 pt-4">
                        <p>
                          <Image
                            className="w-[30px]"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cg clip-path='url(%23clip0_30_12)'%3E%3Ccircle cx='10' cy='10' r='10' fill='%230d9a9a'/%3E%3Cpath d='M8.08102 13.9311C8.18816 14.0217 8.34951 14.0235 8.45897 13.9333C10.8471 11.9585 13.024 9.88733 15.6214 7.7973C15.8456 7.61698 15.9792 7.36482 15.9978 7.08682C16.0551 6.22275 14.9755 5.65693 14.2418 6.23531C12.0196 7.98443 10.1719 9.57103 8.44857 11.2108C8.1099 10.8884 7.65676 10.4271 7.09779 9.83522C6.66554 9.3777 5.88549 9.2986 5.36077 9.79257C4.89989 10.2261 4.8779 10.9221 5.31028 11.3773C6.35388 12.4751 7.00913 13.0229 8.08102 13.9311Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_30_12'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                            alt="right"
                            width="23"
                            height="23"
                          />
                        </p>
                        <p className="pricing-desc-text">
                          2 to 4 years of experience
                        </p>
                      </div>
                    </div>
                    <div className="pricing-desc">
                      <div className="flex align-middle gap-3 pt-4">
                        <p>
                          <Image
                            className="w-[30px]"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cg clip-path='url(%23clip0_30_12)'%3E%3Ccircle cx='10' cy='10' r='10' fill='%230d9a9a'/%3E%3Cpath d='M8.08102 13.9311C8.18816 14.0217 8.34951 14.0235 8.45897 13.9333C10.8471 11.9585 13.024 9.88733 15.6214 7.7973C15.8456 7.61698 15.9792 7.36482 15.9978 7.08682C16.0551 6.22275 14.9755 5.65693 14.2418 6.23531C12.0196 7.98443 10.1719 9.57103 8.44857 11.2108C8.1099 10.8884 7.65676 10.4271 7.09779 9.83522C6.66554 9.3777 5.88549 9.2986 5.36077 9.79257C4.89989 10.2261 4.8779 10.9221 5.31028 11.3773C6.35388 12.4751 7.00913 13.0229 8.08102 13.9311Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_30_12'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                            alt="right"
                            width="23"
                            height="23"
                          />
                        </p>
                        <p className="pricing-desc-text">Dedicated developer</p>
                      </div>
                    </div>
                    <div className="pricing-desc">
                      <div className="flex align-middle gap-3 pt-4">
                        <p>
                          <Image
                            className="w-[30px]"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cg clip-path='url(%23clip0_30_12)'%3E%3Ccircle cx='10' cy='10' r='10' fill='%230d9a9a'/%3E%3Cpath d='M8.08102 13.9311C8.18816 14.0217 8.34951 14.0235 8.45897 13.9333C10.8471 11.9585 13.024 9.88733 15.6214 7.7973C15.8456 7.61698 15.9792 7.36482 15.9978 7.08682C16.0551 6.22275 14.9755 5.65693 14.2418 6.23531C12.0196 7.98443 10.1719 9.57103 8.44857 11.2108C8.1099 10.8884 7.65676 10.4271 7.09779 9.83522C6.66554 9.3777 5.88549 9.2986 5.36077 9.79257C4.89989 10.2261 4.8779 10.9221 5.31028 11.3773C6.35388 12.4751 7.00913 13.0229 8.08102 13.9311Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_30_12'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                            alt="right"
                            width="23"
                            height="23"
                          />
                        </p>
                        <p className="pricing-desc-text">
                          Best for short-term engagement
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`two ${
                      isMobile
                        ? " border-t-[1px] border-t-[#80808085]"
                        : "border-r-[1px] border-r-[#80808085]"
                    }  md:p-4 lg:p-8 p-6`}
                  >
                    <div className="sec8_service_txt1 txt_center">
                      <p className="pricing-amount">
                        $2500 <br />
                        Monthly (USD)
                      </p>
                    </div>
                    <div className="pricing-desc">
                      <div className="flex align-middle gap-3 pt-4">
                        <p className="inline-block">
                          <Image
                            className="w-[30px]"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cg clip-path='url(%23clip0_30_12)'%3E%3Ccircle cx='10' cy='10' r='10' fill='%230d9a9a'/%3E%3Cpath d='M8.08102 13.9311C8.18816 14.0217 8.34951 14.0235 8.45897 13.9333C10.8471 11.9585 13.024 9.88733 15.6214 7.7973C15.8456 7.61698 15.9792 7.36482 15.9978 7.08682C16.0551 6.22275 14.9755 5.65693 14.2418 6.23531C12.0196 7.98443 10.1719 9.57103 8.44857 11.2108C8.1099 10.8884 7.65676 10.4271 7.09779 9.83522C6.66554 9.3777 5.88549 9.2986 5.36077 9.79257C4.89989 10.2261 4.8779 10.9221 5.31028 11.3773C6.35388 12.4751 7.00913 13.0229 8.08102 13.9311Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_30_12'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                            alt="right"
                            width="23"
                            height="23"
                          />
                        </p>
                        <p className="pricing-desc-text">
                          3 to 6 years of experience
                        </p>
                      </div>
                    </div>
                    <div className="pricing-desc">
                      <div className="flex align-middle gap-3 pt-4">
                        <p>
                          <Image
                            className="w-[30px]"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cg clip-path='url(%23clip0_30_12)'%3E%3Ccircle cx='10' cy='10' r='10' fill='%230d9a9a'/%3E%3Cpath d='M8.08102 13.9311C8.18816 14.0217 8.34951 14.0235 8.45897 13.9333C10.8471 11.9585 13.024 9.88733 15.6214 7.7973C15.8456 7.61698 15.9792 7.36482 15.9978 7.08682C16.0551 6.22275 14.9755 5.65693 14.2418 6.23531C12.0196 7.98443 10.1719 9.57103 8.44857 11.2108C8.1099 10.8884 7.65676 10.4271 7.09779 9.83522C6.66554 9.3777 5.88549 9.2986 5.36077 9.79257C4.89989 10.2261 4.8779 10.9221 5.31028 11.3773C6.35388 12.4751 7.00913 13.0229 8.08102 13.9311Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_30_12'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                            alt="right"
                            width="23"
                            height="23"
                          />
                        </p>
                        <p className="pricing-desc-text">160 hours per month</p>
                      </div>
                    </div>

                    <div className="pricing-desc">
                      <div className="flex align-middle gap-3 pt-4">
                        <p>
                          <Image
                            className="w-[30px]"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cg clip-path='url(%23clip0_30_12)'%3E%3Ccircle cx='10' cy='10' r='10' fill='%230d9a9a'/%3E%3Cpath d='M8.08102 13.9311C8.18816 14.0217 8.34951 14.0235 8.45897 13.9333C10.8471 11.9585 13.024 9.88733 15.6214 7.7973C15.8456 7.61698 15.9792 7.36482 15.9978 7.08682C16.0551 6.22275 14.9755 5.65693 14.2418 6.23531C12.0196 7.98443 10.1719 9.57103 8.44857 11.2108C8.1099 10.8884 7.65676 10.4271 7.09779 9.83522C6.66554 9.3777 5.88549 9.2986 5.36077 9.79257C4.89989 10.2261 4.8779 10.9221 5.31028 11.3773C6.35388 12.4751 7.00913 13.0229 8.08102 13.9311Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_30_12'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                            alt="right"
                            width="23"
                            height="23"
                          />
                        </p>
                        <p className="pricing-desc-text">
                          Best for long-term engagement
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`three ${
                      isMobile && " border-t-[1px] border-t-[#80808085]"
                    }  md:p-4 lg:p-8 p-6`}
                  >
                    <div className="sec8_service_txt1 txt_center">
                      <p className="pricing-amount">
                        $12000 <br />
                        Monthly (USD)
                      </p>
                    </div>
                    <div className="pricing-desc">
                      <div className="flex align-middle gap-3 pt-4">
                        <p>
                          <Image
                            className="w-[30px]"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cg clip-path='url(%23clip0_30_12)'%3E%3Ccircle cx='10' cy='10' r='10' fill='%230d9a9a'/%3E%3Cpath d='M8.08102 13.9311C8.18816 14.0217 8.34951 14.0235 8.45897 13.9333C10.8471 11.9585 13.024 9.88733 15.6214 7.7973C15.8456 7.61698 15.9792 7.36482 15.9978 7.08682C16.0551 6.22275 14.9755 5.65693 14.2418 6.23531C12.0196 7.98443 10.1719 9.57103 8.44857 11.2108C8.1099 10.8884 7.65676 10.4271 7.09779 9.83522C6.66554 9.3777 5.88549 9.2986 5.36077 9.79257C4.89989 10.2261 4.8779 10.9221 5.31028 11.3773C6.35388 12.4751 7.00913 13.0229 8.08102 13.9311Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_30_12'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                            alt="right"
                            width="23"
                            height="23"
                          />
                        </p>
                        <p className="pricing-desc-text">
                          Build a team of 5+ {getTitleText(pathname)?.role}
                        </p>
                      </div>
                    </div>
                    <div className="pricing-desc">
                      <div className="flex align-middle gap-3 pt-4">
                        <p>
                          <Image
                            className="w-[30px]"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cg clip-path='url(%23clip0_30_12)'%3E%3Ccircle cx='10' cy='10' r='10' fill='%230d9a9a'/%3E%3Cpath d='M8.08102 13.9311C8.18816 14.0217 8.34951 14.0235 8.45897 13.9333C10.8471 11.9585 13.024 9.88733 15.6214 7.7973C15.8456 7.61698 15.9792 7.36482 15.9978 7.08682C16.0551 6.22275 14.9755 5.65693 14.2418 6.23531C12.0196 7.98443 10.1719 9.57103 8.44857 11.2108C8.1099 10.8884 7.65676 10.4271 7.09779 9.83522C6.66554 9.3777 5.88549 9.2986 5.36077 9.79257C4.89989 10.2261 4.8779 10.9221 5.31028 11.3773C6.35388 12.4751 7.00913 13.0229 8.08102 13.9311Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_30_12'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                            alt="right"
                            width="23"
                            height="23"
                          />
                        </p>
                        <p className="pricing-desc-text">
                          3 to 6 Years of Experience
                        </p>
                      </div>
                    </div>
                    <div className="pricing-desc">
                      <div className="flex align-middle gap-3 pt-4">
                        <p>
                          <Image
                            className="w-[30px]"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cg clip-path='url(%23clip0_30_12)'%3E%3Ccircle cx='10' cy='10' r='10' fill='%230d9a9a'/%3E%3Cpath d='M8.08102 13.9311C8.18816 14.0217 8.34951 14.0235 8.45897 13.9333C10.8471 11.9585 13.024 9.88733 15.6214 7.7973C15.8456 7.61698 15.9792 7.36482 15.9978 7.08682C16.0551 6.22275 14.9755 5.65693 14.2418 6.23531C12.0196 7.98443 10.1719 9.57103 8.44857 11.2108C8.1099 10.8884 7.65676 10.4271 7.09779 9.83522C6.66554 9.3777 5.88549 9.2986 5.36077 9.79257C4.89989 10.2261 4.8779 10.9221 5.31028 11.3773C6.35388 12.4751 7.00913 13.0229 8.08102 13.9311Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_30_12'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                            alt="right"
                            width="23"
                            height="23"
                          />
                        </p>
                        <p className="pricing-desc-text">
                          Best for complex projects
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center xl:pt-[6rem] md:pt-[4rem] pt-[2rem]">
          <Button
            innerClassName="flex items-center justify-center gap-2"
            className="!py-1 !px-4 !bg-colorWhite hover:!bg-themeColor !text-colorBlack hover:!text-colorWhite"
            redirect="#section10_service"
            label={"Hire " + getTitleText(pathname)?.role}
            icon={
              <div className="w-[25px]">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/hire-hand.png"
                  alt="hand"
                  width="20"
                  height="30"
                />
              </div>
            }
            scrollingButton
          />
        </div>
      </div>
    </section>
  );
};

export default ThreeStepstoHireDeveloper;
