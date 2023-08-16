"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";

const ThreeStepstoHireDeveloper = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="">
      <div className="xl:mt-[96px] lg:mt-[60px] md:mt-[32px] mt-[16px]">
        <div className="service_width mx-auto md:px-[0px]">
          <div className="service_sec3 md:text-center text-left">
            {pathname === "/hire-reactjs-developer" ? (
              <p className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px]">
                HIRE REACT JS DEVELOPERS
              </p>
            ) : (
              <>
                {pathname === "/hire-java-developer" ? (
                  <p className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px]">
                    HIRE JAVA DEVELOPERS
                  </p>
                ) : (
                  <>
                    {pathname === "/hire-nodejs-developer" ? (
                      <p className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px]">
                        HIRE Node JS DEVELOPERS
                      </p>
                    ) : (
                      <>
                        {" "}
                        {pathname === "/hire-react-native-developer" ? (
                          <>
                            <p className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px]">
                              HIRE REACT NATIVE DEVELOPERS
                            </p>
                          </>
                        ) : (
                          <>
                            {pathname === "/hire-aws-developer" ? (
                              <>
                                <p className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px]">
                                  HIRE AWS DEVELOPERS
                                </p>
                              </>
                            ) : (
                              <>
                                {pathname === "/hire-ui-ux-designer" ? (
                                  <>
                                    <p className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px]">
                                      HIRE UI UX DESIGNERS
                                    </p>
                                  </>
                                ) : (
                                  <p className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px]">
                                    HIRE BLOCKCHAIN DEVELOPERS
                                  </p>
                                )}
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

            <div>
              <p className="!p-0 md:text-[21px] md:!text-center text-[16px] !text-left">
                IN JUST 3 EASY STEPS
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-[3rem] gap-4">
            <div className="contact_box">
              <div className="mx-auto">
                <img
                  src="/images/icons2-01-1.png"
                  alt="people"
                  className="Tell Us Your Requirements"
                />
              </div>
              <div className="steps_service">
                <div className="no_flex_tech">
                  <div className="no_flex_height">
                    <div className="developer_sec6_title text-center mob_center">
                      <p>Tell Us Your Requirements</p>
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
                  src="/images/icons2-02.png"
                  alt="Screen & Shortlist the Right Fit"
                  className=""
                />
              </div>

              <div className="steps_service">
                <div className="no_flex_tech">
                  <div className="no_flex_height">
                    <div className="developer_sec6_title text-center mob_center">
                      <p>Screen & Shortlist the Right Fit</p>
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
                  src="/images/icons2-03.png"
                  alt="Onboard Talent"
                  className=""
                />
              </div>
              <div className="steps_service">
                <div className="no_flex_tech">
                  <div className="no_flex_height">
                    <div className="developer_sec6_title text-center mob_center">
                      <p>Onboard Talent</p>
                    </div>
                    <div className="service_description text-center mob_center">
                      <p>
                        We match you with a{" "}
                        {pathname === "/hire-reactjs-developer" ? (
                          "React js Developer"
                        ) : (
                          <>
                            {pathname === "/hire-java-developer" ? (
                              "Java Developer"
                            ) : (
                              <>
                                {pathname === "/hire-nodejs-D" ? (
                                  "Node js Developer"
                                ) : (
                                  <>
                                    {" "}
                                    {pathname ===
                                    "/hire-react-native-developer" ? (
                                      "React Native Developer"
                                    ) : (
                                      <>
                                        {" "}
                                        {pathname === "/hire-aws-developer" ? (
                                          "AWS Developer"
                                        ) : (
                                          <>
                                            {" "}
                                            {pathname === "/hire-ui-ux-designer"
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
                    <img src="/images/icons2-04.png" alt="call" />
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
          <div className="endTO_text home_sec2_txt3">
            {pathname === "/hire-reactjs-developer" ? (
              <p className="!w-full p-0">
                CHOOSE OUR REACT.JS DEVELOPMENT
                <br />
                SERVICES AS PER YOUR NEEDS
              </p>
            ) : (
              <>
                {pathname === "/hire-java-developer" ? (
                  <p className="!w-full p-0">
                    CHOOSE OUR JAVA DEVELOPMENT
                    <br />
                    SERVICES AS PER YOUR NEEDS
                  </p>
                ) : (
                  <>
                    {pathname === "/hire-nodejs-developer" ? (
                      <p className="!w-full p-0">
                        CHOOSE OUR NODE.JS DEVELOPMENT
                        <br />
                        SERVICES AS PER YOUR NEEDS
                      </p>
                    ) : (
                      <>
                        {pathname === "/hire-react-native-developer" ? (
                          <p className="!w-full p-0">
                            CHOOSE OUR REACT NATIVE DEVELOPMENT
                            <br />
                            SERVICES AS PER YOUR NEEDS
                          </p>
                        ) : (
                          <>
                            {pathname === "/hire-aws-developer" ? (
                              <p className="!w-full p-0">
                                CHOOSE OUR AWS DEVELOPMENT
                                <br />
                                SERVICES AS PER YOUR NEEDS
                              </p>
                            ) : (
                              <>
                                {pathname === "/hire-ui-ux-designer" ? (
                                  <p className="!w-full p-0">
                                    CHOOSE OUR UI-UX DESIGN
                                    <br />
                                    SERVICES AS PER YOUR NEEDS
                                  </p>
                                ) : (
                                  <p className="!w-full p-0">
                                    CHOOSE OUR BLOCKCHAIN DEVELOPMENT
                                    <br />
                                    SERVICES AS PER YOUR NEEDS
                                  </p>
                                )}
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
          </div>
        </div>

        <div className="endTO_text_content home_sec2_txt4 mb-[5rem]">
          <p className="!text-[1.2rem]">
            We ensure you find the right people at the right cost for all your
            project needs.
          </p>
        </div>

        <div className="hire_sec1_service_50">
          <div className="react-technology">
            <div className="relative z-10 rounded-[30px] !border-[1px] border-[#00dfb8]">
              <div className="endTO_text_content home_sec2_txt4 py-6">
                <p className="!text-[1.2rem]">
                  Transparent & fair pricing. No hidden costs, surprise fees,
                  cancellation charges, setup, or minimums.
                </p>
              </div>
              <div className="border-t-[1px]  border-t-[#80808085]">
                <div className="pricing_grid ">
                  <div
                    className={`one ${
                      !isMobile && "border-r-[1px]  border-r-[#80808085] "
                    } md:p-8 p-6`}
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
                          <img
                            decoding="async"
                            loading="lazy"
                            className="w-[30px]"
                            src="/images/icons2-05.png"
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
                          <img
                            decoding="async"
                            loading="lazy"
                            className="w-[30px]"
                            src="/images/icons2-05.png"
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
                          <img
                            decoding="async"
                            loading="lazy"
                            className="w-[30px]"
                            src="/images/icons2-05.png"
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
                    }  md:p-8 p-6`}
                  >
                    <div className="sec8_service_txt1 txt_center">
                      <p className="pricing-amount">
                        $2500 <br />
                        Monthly (USD)
                      </p>
                    </div>
                    <div className="pricing-desc">
                      <div className="flex align-middle gap-3 pt-4">
                        <p>
                          <img
                            decoding="async"
                            loading="lazy"
                            className="w-[30px]"
                            src="/images/icons2-05.png"
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
                          <img
                            decoding="async"
                            loading="lazy"
                            className="w-[30px]"
                            src="/images/icons2-05.png"
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
                          <img
                            decoding="async"
                            loading="lazy"
                            className="w-[30px]"
                            src="/images/icons2-05.png"
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
                    }  md:p-8 p-6`}
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
                          <img
                            decoding="async"
                            loading="lazy"
                            className="w-[30px]"
                            src="/images/icons2-05.png"
                            alt="right"
                            width="23"
                            height="23"
                          />
                        </p>
                        <p className="pricing-desc-text">
                          Build a team of 5+{" "}
                          {pathname === "/hire-reactjs-developer" ? (
                            "React js developers"
                          ) : (
                            <>
                              {pathname === "/hire-java-developer" ? (
                                "Java developers"
                              ) : (
                                <>
                                  {pathname === "/hire-nodejs-developer" ? (
                                    "Node js developers"
                                  ) : (
                                    <>
                                      {pathname ===
                                      "/hire-react-native-developer" ? (
                                        "React Native developers"
                                      ) : (
                                        <>
                                          {pathname ===
                                          "/hire-aws-developer" ? (
                                            "AWS developers"
                                          ) : (
                                            <>
                                              {pathname ===
                                              "/hire-ui-ux-designer"
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
                          <img
                            decoding="async"
                            loading="lazy"
                            className="w-[30px]"
                            src="/images/icons2-05.png"
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
                          <img
                            decoding="async"
                            loading="lazy"
                            className="w-[30px]"
                            src="/images/icons2-05.png"
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
                  src="/images/hire-hand.png"
                  alt="hand"
                  width="28"
                  height="44"
                />
              </div>
              <div className="chat_btn_technology xl:!text-[20px] lg:!text-[18px] md:!text-[15px] !text-[16px]">
                <p className="transition ng-binding">
                  {pathname === "/hire-reactjs-developer" ? (
                    "Hire React.js Developers"
                  ) : (
                    <>
                      {pathname === "/hire-java-developer" ? (
                        "Hire Java Developers"
                      ) : (
                        <>
                          {pathname === "/hire-nodejs-developer" ? (
                            "Hire Node.js Developers"
                          ) : (
                            <>
                              {pathname === "/hire-react-native-developer" ? (
                                "Hire React Native Developers"
                              ) : (
                                <>
                                  {pathname === "/hire-aws-developer" ? (
                                    "Hire AWS Developers"
                                  ) : (
                                    <>
                                      {pathname === "/hire-ui-ux-designer"
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
