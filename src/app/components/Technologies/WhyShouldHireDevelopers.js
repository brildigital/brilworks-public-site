"use client";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";

const WhyShouldHireDevelopers = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const pathname = usePathname();
  return (
    <section className="service_width linear-gradient-bg">
      <div className="lg:py-[6rem] md:py-[4rem] py-[2rem]">
        <div className="sec9_service_style xl:px-[12rem] sm:px-[4rem] px-[1rem]">
          {pathname === "/hire-reactjs-developer" ? (
            <>
              <div className="end-To-end">
                <div className="endTO_text home_sec2_txt3 mt-[4rem] mb-0 md:pt-[4.5rem]">
                  <p className="!w-full md:p-0 p-3 ">
                    WHY SHOULD YOU HIRE REACT JS DEVELOPERS FROM BRILWORKS?
                  </p>
                </div>
              </div>

              <p
                className={`p-font md:text-center text-left md:my-[2rem] mt-[2rem] pl-3 ${
                  isMobile ? "!text-[1rem]" : ""
                } `}
              >
                Just as React is the hottest framework for frontend today, we’re
                the hottest React JS Development Company that can help you
                develop quality React applications in no time. Our Reactjs
                developers deliver bespoke solutions to all your needs with the
                right tools, expertise, and infrastructure.
              </p>
            </>
          ) : (
            <>
              {pathname === "/hire-java-developer" ? (
                <>
                  <div className="end-To-end">
                    <div className="endTO_text home_sec2_txt3 mt-[4rem] mb-0 md:pt-[4.5rem]">
                      <p className="!w-full md:p-0 p-3 ">
                        WHY SHOULD YOU HIRE JAVA DEVELOPERS FROM BRILWORKS?
                      </p>
                    </div>
                  </div>

                  <p
                    className={`p-font md:text-center text-left md:my-[2rem] mt-[2rem] pl-3 ${
                      isMobile ? "!text-[1rem]" : ""
                    } `}
                  >
                    Whether you are looking for enterprise-level business
                    solutions or just to build a compelling product, our java
                    developers can help you get unstuck and stay on track. From
                    developing your vision to the actual delivery of an
                    innovative solution, our team has built over 50
                    enterprise-level applications and services in Java ranging
                    across the education, financial services, healthcare, and
                    data analytics sectors.
                  </p>
                </>
              ) : (
                <>
                  {pathname === "/hire-nodejs-developer" ? (
                    <>
                      <div className="end-To-end">
                        <div className="endTO_text home_sec2_txt3 mt-[4rem] mb-0 md:pt-[4.5rem]">
                          <p className="!w-full md:p-0 p-3 ">
                            WHY SHOULD YOU HIRE NODE.JS DEVELOPERS FROM
                            BRILWORKS?
                          </p>
                        </div>
                      </div>

                      <p
                        className={`p-font md:text-center text-left md:my-[2rem] mt-[2rem] pl-3 ${
                          isMobile ? "!text-[1rem]" : ""
                        } `}
                      >
                        Node.js development is a very exciting field and we take
                        pride in being Node experts. Our talent helps companies
                        who have not had the experience yet of benefiting from
                        this workhorse technology.
                      </p>
                    </>
                  ) : (
                    <>
                      {pathname === "/hire-react-native-developer" ? (
                        <>
                          <div className="end-To-end">
                            <div className="endTO_text home_sec2_txt3 mt-[4rem] mb-0 md:pt-[4.5rem]">
                              <p className="!w-full md:p-0 p-3 ">
                                WHY SHOULD YOU HIRE REACT NATIVE DEVELOPERS FROM
                                BRILWORKS?
                              </p>
                            </div>
                          </div>

                          <p
                            className={`p-font md:text-center text-left md:my-[2rem] mt-[2rem] pl-3 ${
                              isMobile ? "!text-[1rem]" : ""
                            } `}
                          >
                            React Native has taken the world by storm and
                            rightly so. It’s fast, flexible, and cost-effective.
                            We leverage React Native to deliver brilliant &
                            unforgettable user experience to our clients. Our
                            React Native developers focus on delivering flawless
                            solutions with clear insights to meet all your
                            business needs.
                          </p>
                        </>
                      ) : (
                        <>
                          {pathname === "/hire-aws-developer" ? (
                            <>
                              <div className="end-To-end">
                                <div className="endTO_text home_sec2_txt3 mt-[4rem] mb-0 md:pt-[4.5rem]">
                                  <p className="!w-full md:p-0 p-3 ">
                                    WHY SHOULD YOU HIRE AWS DEVELOPERS FROM
                                    BRILWORKS?
                                  </p>
                                </div>
                              </div>

                              <p
                                className={`p-font md:text-center text-left md:my-[2rem] mt-[2rem] pl-3 ${
                                  isMobile ? "!text-[1rem]" : ""
                                } `}
                              >
                                We truly understand how important it is to have
                                a stable, predictable, and cost-effective
                                technology infrastructure. Our AWS experts
                                possess in-depth knowledge & experience in cloud
                                development & cloud deployment and can help you
                                create an end-to-end solution that sets your
                                business up for significant growth and
                                innovation.
                              </p>
                            </>
                          ) : (
                            <>
                              {pathname === "/hire-ui-ux-designer" ? (
                                <>
                                  <div className="end-To-end">
                                    <div className="endTO_text home_sec2_txt3 mt-[4rem] mb-0 md:pt-[4.5rem]">
                                      <p className="!w-full md:p-0 p-3 ">
                                        WHY SHOULD YOU HIRE UI UX DEVELOPERS
                                        FROM BRILWORKS?
                                      </p>
                                    </div>
                                  </div>

                                  <p
                                    className={`p-font md:text-center text-left md:my-[2rem] mt-[2rem] pl-3 ${
                                      isMobile ? "!text-[1rem]" : ""
                                    } `}
                                  >
                                    We leverage our expertise to help you
                                    achieve a dazzling presence and superior
                                    brand value. Our top-notch designers can
                                    help you develop beautiful mobile apps or
                                    websites that engage your customers in ways
                                    no other product has done before.
                                  </p>
                                </>
                              ) : (
                                <>
                                  <div className="end-To-end">
                                    <div className="endTO_text home_sec2_txt3 mt-[4rem] mb-0 md:pt-[4.5rem]">
                                      <p className="!w-full md:p-0 p-3">
                                        WHY SHOULD YOU HIRE BLOCKCHAIN
                                        DEVELOPERS FROM BRILWORKS?
                                      </p>
                                    </div>
                                  </div>

                                  <p
                                    className={`p-font md:text-center text-left md:my-[2rem] mt-[2rem] pl-3 ${
                                      isMobile ? "!text-[1rem]" : ""
                                    } `}
                                  >
                                    As a leading blockchain development company,
                                    our solutions help you focus on creating
                                    exceptional platforms that are scalable,
                                    secure, and run efficiently. Our team of
                                    blockchain application developers
                                    understands the importance of building
                                    platforms for greater adoption and
                                    integration while our ultimate goal remains
                                    to create custom innovative solutions to
                                    help you take your business to the next
                                    level.
                                  </p>
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
            </>
          )}

          <div className="grid lg:grid-cols-3 grid-cols-2 xl:gap-[3.5rem] gap-[2rem] p-4">
            {pathname === "/hire-reactjs-developer" ? (
              <>
                <div>
                  <div
                    className={`number xl:text-[70px] md:!text-[57px] ${
                      isMobile ? "text-[33px]" : ""
                    }`}
                  >
                    65+
                  </div>
                  <p className="year border-0 py-[1rem]">
                    React.js <br />
                    Projects Completed
                  </p>
                </div>

                <div>
                  <div
                    className={`number xl:text-[70px] md:!text-[57px] ${
                      isMobile ? "text-[33px]" : ""
                    }`}
                  >
                    30+
                  </div>
                  <p className="year border-0 py-[1rem]">
                    React.js
                    <br />
                    Experts Onboard
                  </p>
                </div>
              </>
            ) : (
              <>
                {pathname === "/hire-java-developer" ? (
                  <>
                    <div>
                      <div
                        className={`number xl:text-[70px] md:!text-[57px] ${
                          isMobile ? "text-[33px]" : ""
                        }`}
                      >
                        50+
                      </div>
                      <p className="year border-0 py-[1rem]">
                        Java <br />
                        Projects Completed
                      </p>
                    </div>

                    <div>
                      <div
                        className={`number xl:text-[70px] md:!text-[57px] ${
                          isMobile ? "text-[33px]" : ""
                        }`}
                      >
                        30+
                      </div>
                      <p className="year border-0 py-[1rem]">
                        Java
                        <br />
                        Experts Onboard
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {pathname === "/hire-nodejs-developer" ? (
                      <>
                        <div>
                          <div
                            className={`number xl:text-[70px] md:!text-[57px] ${
                              isMobile ? "text-[33px]" : ""
                            }`}
                          >
                            50+
                          </div>
                          <p className="year border-0 py-[1rem]">
                            Node.js <br />
                            Projects Completed
                          </p>
                        </div>

                        <div>
                          <div
                            className={`number xl:text-[70px] md:!text-[57px] ${
                              isMobile ? "text-[33px]" : ""
                            }`}
                          >
                            30+
                          </div>
                          <p className="year border-0 py-[1rem]">
                            Node.js
                            <br />
                            Experts Onboard
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        {pathname === "/hire-react-native-developer" ? (
                          <>
                            <div>
                              <div
                                className={`number xl:text-[70px] md:!text-[57px] ${
                                  isMobile ? "text-[33px]" : ""
                                }`}
                              >
                                30+
                              </div>
                              <p className="year border-0 py-[1rem]">
                                React Native <br />
                                Projects Completed
                              </p>
                            </div>

                            <div>
                              <div
                                className={`number xl:text-[70px] md:!text-[57px] ${
                                  isMobile ? "text-[33px]" : ""
                                }`}
                              >
                                20+
                              </div>
                              <p className="year border-0 py-[1rem]">
                                React Native
                                <br />
                                Experts Onboard
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            {pathname === "/hire-aws-developer" ? (
                              <>
                                <div>
                                  <div
                                    className={`number xl:text-[70px] md:!text-[57px] ${
                                      isMobile ? "text-[33px]" : ""
                                    }`}
                                  >
                                    50+
                                  </div>
                                  <p className="year border-0 py-[1rem]">
                                    AWS <br />
                                    Projects Completed
                                  </p>
                                </div>

                                <div>
                                  <div
                                    className={`number xl:text-[70px] md:!text-[57px] ${
                                      isMobile ? "text-[33px]" : ""
                                    }`}
                                  >
                                    10+
                                  </div>
                                  <p className="year border-0 py-[1rem]">
                                    AWS Experts
                                    <br />
                                    Onboard
                                  </p>
                                </div>
                              </>
                            ) : (
                              <>
                                {pathname === "/hire-ui-ux-designer" ? (
                                  <>
                                    <div>
                                      <div
                                        className={`number xl:text-[70px] md:!text-[57px] ${
                                          isMobile ? "text-[33px]" : ""
                                        }`}
                                      >
                                        45+
                                      </div>
                                      <p className="year border-0 py-[1rem]">
                                        UI UX Design <br />
                                        Projects Completed
                                      </p>
                                    </div>

                                    <div>
                                      <div
                                        className={`number xl:text-[70px] md:!text-[57px] ${
                                          isMobile ? "text-[33px]" : ""
                                        }`}
                                      >
                                        10+
                                      </div>
                                      <p className="year border-0 py-[1rem]">
                                        UI UX
                                        <br />
                                        Experts Onboard
                                      </p>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div>
                                      <div
                                        className={`number xl:text-[70px] md:!text-[57px] ${
                                          isMobile ? "text-[33px]" : ""
                                        }`}
                                      >
                                        40+
                                      </div>
                                      <p className="year border-0 py-[1rem]">
                                        Blockchain
                                        <br />
                                        Projects Completed
                                      </p>
                                    </div>

                                    <div>
                                      <div
                                        className={`number xl:text-[70px] md:!text-[57px] ${
                                          isMobile ? "text-[33px]" : ""
                                        }`}
                                      >
                                        15+
                                      </div>
                                      <p className="year border-0 py-[1rem]">
                                        Blockchain
                                        <br />
                                        Experts Onboard
                                      </p>
                                    </div>
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
              </>
            )}

            <div>
              <div
                className={`number xl:text-[70px] md:!text-[57px] ${
                  isMobile ? "text-[33px]" : ""
                }`}
              >
                60%
              </div>
              <p className="year border-0 py-[1rem]">Savings In Salaries</p>
            </div>

            <div>
              <div
                className={`number xl:text-[70px] md:!text-[57px] ${
                  isMobile ? "text-[33px]" : ""
                }`}
              >
                +4/-4
              </div>
              <p className="year border-0 py-[1rem]">
                Available to Work
                <br />
                in Your Timezone
              </p>
            </div>

            <div>
              <div
                className={`number xl:text-[70px] md:!text-[57px] ${
                  isMobile ? "text-[33px]" : ""
                }`}
              >
                48-72
              </div>
              <p className="year border-0 py-[1rem]">
                Hours to Fill Most
                <br />
                Roles
              </p>
            </div>

            <div>
              <div
                className={`number xl:text-[70px] md:!text-[57px] ${
                  isMobile ? "text-[33px]" : ""
                }`}
              >
                98%
              </div>
              <p className="year border-0 py-[1rem]">
                Project Success
                <br />
                Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyShouldHireDevelopers;
