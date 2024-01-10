"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { scrollToSection } from "../lib/commonfunction";
import Image from "next/image";

const ThreeStepstoHireDeveloper = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section className="">
      <div className="xl:mt-[96px] lg:mt-[60px] md:mt-[32px] mt-[16px]">
        <div className="service_width mx-auto md:px-[0px]">
          <div className="service_sec3 solutions md:text-center text-left">
            <h2 className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px]">
              {pathname === "/hire-reactjs-developer/" ? (
                "HIRE REACT JS DEVELOPERS"
              ) : (
                <>
                  {pathname === "/hire-java-developer/" ? (
                    "HIRE JAVA DEVELOPERS"
                  ) : (
                    <>
                      {pathname === "/hire-nodejs-developer/" ? (
                        "HIRE Node JS DEVELOPERS"
                      ) : (
                        <>
                          {pathname === "/hire-react-native-developer/" ? (
                            "HIRE REACT NATIVE DEVELOPERS"
                          ) : (
                            <>
                              {pathname === "/hire-aws-developer/" ? (
                                "HIRE AWS DEVELOPERS"
                              ) : (
                                <>
                                  {pathname === "/hire-ui-ux-designer/"
                                    ? "HIRE UI UX DESIGNERS"
                                    : "HIRE BLOCKCHAIN DEVELOPERS"}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
              <p className="md:text-[21px] md:!text-center text-[16px] !text-left">
                IN 3 SIMPLE STEPS
              </p>
            </h2>
          </div>

          <div className="grid xl:grid-cols-3 grid-cols-1 md:gap-[3rem] our-engagement-models md:px-8 lg:px-0 reveal">
            <div className="contact_box">
              <div className="mx-auto">
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
                        We match you with a{" "}
                        {pathname === "/hire-reactjs-developer/" ? (
                          "React js Developer"
                        ) : (
                          <>
                            {pathname === "/hire-java-developer/" ? (
                              "Java Developer"
                            ) : (
                              <>
                                {pathname === "/hire-nodejs-developer/" ? (
                                  "Node js Developer"
                                ) : (
                                  <>
                                    {pathname ===
                                    "/hire-react-native-developer/" ? (
                                      "React Native Developer"
                                    ) : (
                                      <>
                                        {pathname === "/hire-aws-developer/" ? (
                                          "AWS Developer"
                                        ) : (
                                          <>
                                            {pathname ===
                                            "/hire-ui-ux-designer/"
                                              ? "UI UX Designers"
                                              : "Blockchain Developer"}
                                          </>
                                        )}
                                      </>
                                    )}
                                  </>
                                )}
                              </>
                            )}
                          </>
                        )}{" "}
                        from our network within 48 to 72 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:my-[100px] my-[40px]">
            <Link
              href="#section10_service"
              onClick={(e) => scrollToSection(e, "section10_service")}
            >
              <div className="btn_paddinng btn_flex !mx-auto">
                <div className="formBtn_icon">
                  <p>
                    <img
                      decoding="async"
                      loading="lazy"
                      src="/images/icons2-04.png"
                      alt="call"
                    />
                  </p>
                </div>

                <p className="xl:!text-[20px] lg:!text-[18px] !px-0">
                  Schedule A Developer Interview
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="mx-auto service_width md:py-[6rem] py-[4rem] workpadd_borderTop end-to-end"
        id="pricing"
      >
        <div className="end-To-end">
          <div className="endTO_text solutions">
            <h2 className="!w-full p-0">
              {pathname === "/hire-reactjs-developer/" ? (
                "HIRE REACT.JS DEVELOPERS"
              ) : (
                <>
                  {pathname === "/hire-java-developer/" ? (
                    "HIRE JAVA DEVELOPERS"
                  ) : (
                    <>
                      {pathname === "/hire-nodejs-developer/" ? (
                        "HIRE NODE.JS DEVELOPERS"
                      ) : (
                        <>
                          {pathname === "/hire-react-native-developer/" ? (
                            "            HIRE REACT NATIVE DEVELOPERS"
                          ) : (
                            <>
                              {pathname === "/hire-aws-developer/" ? (
                                "HIRE AWS DEVELOPERS"
                              ) : (
                                <>
                                  {pathname === "/hire-ui-ux-designer/"
                                    ? " HIRE UI-UX DESIGNERS"
                                    : "HIRE BLOCKCHAIN DEVELOPERS"}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
              <br />
              AS PER YOUR NEED
            </h2>
          </div>
        </div>

        <div className="endTO_text_content home_sec2_txt4 mb-[5rem]">
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
                            src="data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_30_12)'%3E%3Ccircle cx='10' cy='10' r='10' fill='%2300C4C8'/%3E%3Cpath d='M8.08102 13.9311C8.18816 14.0217 8.34951 14.0235 8.45897 13.9333C10.8471 11.9585 13.024 9.88733 15.6214 7.7973C15.8456 7.61698 15.9792 7.36482 15.9978 7.08682C16.0551 6.22275 14.9755 5.65693 14.2418 6.23531C12.0196 7.98443 10.1719 9.57103 8.44857 11.2108C8.1099 10.8884 7.65676 10.4271 7.09779 9.83522C6.66554 9.3777 5.88549 9.2986 5.36077 9.79257C4.89989 10.2261 4.8779 10.9221 5.31028 11.3773C6.35388 12.4751 7.00913 13.0229 8.08102 13.9311Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_30_12'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"
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
                            src="data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_30_12)'%3E%3Ccircle cx='10' cy='10' r='10' fill='%2300C4C8'/%3E%3Cpath d='M8.08102 13.9311C8.18816 14.0217 8.34951 14.0235 8.45897 13.9333C10.8471 11.9585 13.024 9.88733 15.6214 7.7973C15.8456 7.61698 15.9792 7.36482 15.9978 7.08682C16.0551 6.22275 14.9755 5.65693 14.2418 6.23531C12.0196 7.98443 10.1719 9.57103 8.44857 11.2108C8.1099 10.8884 7.65676 10.4271 7.09779 9.83522C6.66554 9.3777 5.88549 9.2986 5.36077 9.79257C4.89989 10.2261 4.8779 10.9221 5.31028 11.3773C6.35388 12.4751 7.00913 13.0229 8.08102 13.9311Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_30_12'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"
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
                            src="data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_30_12)'%3E%3Ccircle cx='10' cy='10' r='10' fill='%2300C4C8'/%3E%3Cpath d='M8.08102 13.9311C8.18816 14.0217 8.34951 14.0235 8.45897 13.9333C10.8471 11.9585 13.024 9.88733 15.6214 7.7973C15.8456 7.61698 15.9792 7.36482 15.9978 7.08682C16.0551 6.22275 14.9755 5.65693 14.2418 6.23531C12.0196 7.98443 10.1719 9.57103 8.44857 11.2108C8.1099 10.8884 7.65676 10.4271 7.09779 9.83522C6.66554 9.3777 5.88549 9.2986 5.36077 9.79257C4.89989 10.2261 4.8779 10.9221 5.31028 11.3773C6.35388 12.4751 7.00913 13.0229 8.08102 13.9311Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_30_12'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"
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
                            src="data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_30_12)'%3E%3Ccircle cx='10' cy='10' r='10' fill='%2300C4C8'/%3E%3Cpath d='M8.08102 13.9311C8.18816 14.0217 8.34951 14.0235 8.45897 13.9333C10.8471 11.9585 13.024 9.88733 15.6214 7.7973C15.8456 7.61698 15.9792 7.36482 15.9978 7.08682C16.0551 6.22275 14.9755 5.65693 14.2418 6.23531C12.0196 7.98443 10.1719 9.57103 8.44857 11.2108C8.1099 10.8884 7.65676 10.4271 7.09779 9.83522C6.66554 9.3777 5.88549 9.2986 5.36077 9.79257C4.89989 10.2261 4.8779 10.9221 5.31028 11.3773C6.35388 12.4751 7.00913 13.0229 8.08102 13.9311Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_30_12'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"
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
                            src="data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_30_12)'%3E%3Ccircle cx='10' cy='10' r='10' fill='%2300C4C8'/%3E%3Cpath d='M8.08102 13.9311C8.18816 14.0217 8.34951 14.0235 8.45897 13.9333C10.8471 11.9585 13.024 9.88733 15.6214 7.7973C15.8456 7.61698 15.9792 7.36482 15.9978 7.08682C16.0551 6.22275 14.9755 5.65693 14.2418 6.23531C12.0196 7.98443 10.1719 9.57103 8.44857 11.2108C8.1099 10.8884 7.65676 10.4271 7.09779 9.83522C6.66554 9.3777 5.88549 9.2986 5.36077 9.79257C4.89989 10.2261 4.8779 10.9221 5.31028 11.3773C6.35388 12.4751 7.00913 13.0229 8.08102 13.9311Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_30_12'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"
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
                            src="data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_30_12)'%3E%3Ccircle cx='10' cy='10' r='10' fill='%2300C4C8'/%3E%3Cpath d='M8.08102 13.9311C8.18816 14.0217 8.34951 14.0235 8.45897 13.9333C10.8471 11.9585 13.024 9.88733 15.6214 7.7973C15.8456 7.61698 15.9792 7.36482 15.9978 7.08682C16.0551 6.22275 14.9755 5.65693 14.2418 6.23531C12.0196 7.98443 10.1719 9.57103 8.44857 11.2108C8.1099 10.8884 7.65676 10.4271 7.09779 9.83522C6.66554 9.3777 5.88549 9.2986 5.36077 9.79257C4.89989 10.2261 4.8779 10.9221 5.31028 11.3773C6.35388 12.4751 7.00913 13.0229 8.08102 13.9311Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_30_12'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"
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
                            src="data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_30_12)'%3E%3Ccircle cx='10' cy='10' r='10' fill='%2300C4C8'/%3E%3Cpath d='M8.08102 13.9311C8.18816 14.0217 8.34951 14.0235 8.45897 13.9333C10.8471 11.9585 13.024 9.88733 15.6214 7.7973C15.8456 7.61698 15.9792 7.36482 15.9978 7.08682C16.0551 6.22275 14.9755 5.65693 14.2418 6.23531C12.0196 7.98443 10.1719 9.57103 8.44857 11.2108C8.1099 10.8884 7.65676 10.4271 7.09779 9.83522C6.66554 9.3777 5.88549 9.2986 5.36077 9.79257C4.89989 10.2261 4.8779 10.9221 5.31028 11.3773C6.35388 12.4751 7.00913 13.0229 8.08102 13.9311Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_30_12'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"
                            alt="right"
                            width="23"
                            height="23"
                          />
                        </p>
                        <p className="pricing-desc-text">
                          Build a team of 5+{" "}
                          {pathname === "/hire-reactjs-developer/" ? (
                            "React js developers"
                          ) : (
                            <>
                              {pathname === "/hire-java-developer/" ? (
                                "Java developers"
                              ) : (
                                <>
                                  {pathname === "/hire-nodejs-developer/" ? (
                                    "Node js developers"
                                  ) : (
                                    <>
                                      {pathname ===
                                      "/hire-react-native-developer/" ? (
                                        "React Native developers"
                                      ) : (
                                        <>
                                          {pathname ===
                                          "/hire-aws-developer/" ? (
                                            "AWS developers"
                                          ) : (
                                            <>
                                              {pathname ===
                                              "/hire-ui-ux-designer/"
                                                ? "UI/UX designers"
                                                : "Blockchain developers"}
                                            </>
                                          )}
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="pricing-desc">
                      <div className="flex align-middle gap-3 pt-4">
                        <p>
                          <Image
                            className="w-[30px]"
                            src="data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_30_12)'%3E%3Ccircle cx='10' cy='10' r='10' fill='%2300C4C8'/%3E%3Cpath d='M8.08102 13.9311C8.18816 14.0217 8.34951 14.0235 8.45897 13.9333C10.8471 11.9585 13.024 9.88733 15.6214 7.7973C15.8456 7.61698 15.9792 7.36482 15.9978 7.08682C16.0551 6.22275 14.9755 5.65693 14.2418 6.23531C12.0196 7.98443 10.1719 9.57103 8.44857 11.2108C8.1099 10.8884 7.65676 10.4271 7.09779 9.83522C6.66554 9.3777 5.88549 9.2986 5.36077 9.79257C4.89989 10.2261 4.8779 10.9221 5.31028 11.3773C6.35388 12.4751 7.00913 13.0229 8.08102 13.9311Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_30_12'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"
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
                            src="data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_30_12)'%3E%3Ccircle cx='10' cy='10' r='10' fill='%2300C4C8'/%3E%3Cpath d='M8.08102 13.9311C8.18816 14.0217 8.34951 14.0235 8.45897 13.9333C10.8471 11.9585 13.024 9.88733 15.6214 7.7973C15.8456 7.61698 15.9792 7.36482 15.9978 7.08682C16.0551 6.22275 14.9755 5.65693 14.2418 6.23531C12.0196 7.98443 10.1719 9.57103 8.44857 11.2108C8.1099 10.8884 7.65676 10.4271 7.09779 9.83522C6.66554 9.3777 5.88549 9.2986 5.36077 9.79257C4.89989 10.2261 4.8779 10.9221 5.31028 11.3773C6.35388 12.4751 7.00913 13.0229 8.08102 13.9311Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_30_12'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"
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

        <div className="pt-[5rem]">
          <Link
            href="#section10_service"
            onClick={(e) => scrollToSection(e, "section10_service")}
          >
            <div className="btn_flex xl:py-[4px] xl:px-[40px] lg:py-[4px] lg:px-[28px] md:py-[4px] md:px-[22px] !py-[4px] !px-[22px]">
              <div className="chat_icon">
                <img
                  decoding="async"
                  loading="lazy"
                  src="/images/hire-hand.png"
                  alt="hand"
                  width="28"
                  height="44"
                />
              </div>
              <div className="chat_btn_technology xl:!text-[20px] lg:!text-[18px] md:!text-[15px] !text-[16px]">
                <p className="transition ng-binding">
                  {pathname === "/hire-reactjs-developer/" ? (
                    "Hire React.js Developers"
                  ) : (
                    <>
                      {pathname === "/hire-java-developer/" ? (
                        "Hire Java Developers"
                      ) : (
                        <>
                          {pathname === "/hire-nodejs-developer/" ? (
                            "Hire Node.js Developers"
                          ) : (
                            <>
                              {pathname === "/hire-react-native-developer/" ? (
                                "Hire React Native Developers"
                              ) : (
                                <>
                                  {pathname === "/hire-aws-developer/" ? (
                                    "Hire AWS Developers"
                                  ) : (
                                    <>
                                      {pathname === "/hire-ui-ux-designer/"
                                        ? "Hire UI UX Designers"
                                        : "Hire Blockchain Developers"}
                                    </>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepstoHireDeveloper;
