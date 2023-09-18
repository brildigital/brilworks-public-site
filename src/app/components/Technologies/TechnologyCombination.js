"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { scrollToSection } from "../lib/commonfunction";

const TechnologyCombination = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="mx-auto service_width">
      <div className="service_sec3 md:text-center text-left">
        {pathname === "/hire-reactjs-developer/" ? (
          <p className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px]">
            THE RIGHT REACT JS COMBINATIONS {!isMobile && <br />}
            JUST FOR YOU
          </p>
        ) : (
          <>
            {pathname === "/hire-java-developer/" ? (
              <p className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px]">
                FULL STACK JAVA DEVELOPMENT TO {!isMobile && <br />}
                LEVEL UP YOUR WEB APPS
              </p>
            ) : (
              <>
                {pathname === "/hire-nodejs-developer/" && (
                  <p className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px]">
                    Hire STACK NODE JS DEVELOPER TO {!isMobile && <br />}
                    AMP IT UP A NOTCH
                  </p>
                )}
              </>
            )}
          </>
        )}
      </div>

      <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-[4rem] reveal md:px-[3rem] lg:px-0">
        <div className="hire_sec1_service_50">
          <div className="react-technology">
            <div className="relative z-10 rounded-[30px] !border-[1px] border-[#00dfb8]">
              <div className="dots_flex">
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
              </div>
              <div className="background-hover border-t-[1px]  border-[#00dfb8] ">
                {pathname === "/hire-reactjs-developer/" ? (
                  <div className="style_sec3_swiper_home">
                    <div className="flex gap-[1rem] pb-[2rem]">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/images/3-1.png"
                        alt="reactjs"
                        className="w-[76px]"
                      />
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/images/js-1.png"
                        alt="nodejs"
                        className="w-[76px]"
                      />
                    </div>
                    <div className="developer_sec6_title mb-2">
                      <p>React Node Developer</p>
                    </div>
                    <div className="hire_data_sec">
                      <p className="md:h-[120px] min-h-[120px]">
                        React Node is a powerful combination of the two popular
                        JavaScript technologies, Reactjs and Node.js. Hire React
                        Node developer from us to add amazing functionality and
                        scalability to your projects.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    {pathname === "/hire-java-developer/" ? (
                      <div className="style_sec3_swiper_home">
                        <div className="flex gap-[1rem] pb-[2rem]">
                          <img
                            decoding="async"
                            loading="lazy"
                            src="/images/java_logo.png"
                            alt="java"
                            className="w-[76px]"
                          />
                          <img
                            decoding="async"
                            loading="lazy"
                            src="/images/angular_logo.png"
                            alt="angularjs"
                            className="w-[76px]"
                          />
                        </div>
                        <div className="developer_sec6_title mb-2">
                          <p>Java Angular Developer</p>
                        </div>
                        <div className="hire_data_sec">
                          <p className="md:min-h-[144px] min-h-[150px]">
                            With the combination of Angular and Java
                            technologies, you can use end-to-end full-stack
                            development to get a fast and powerful web
                            application in no time. It has been used to create
                            real-world applications in enterprise projects that
                            can handle large amounts of traffic and provide a
                            smooth user experience.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <>
                        {pathname === "/hire-nodejs-developer/" && (
                          <div className="style_sec3_swiper_home">
                            <div className="flex gap-[1rem] pb-[2rem]">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/images/js-1.png"
                                alt="nodejs"
                                className="w-[76px]"
                              />
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/images/3-1.png"
                                alt="reactjs"
                                className="w-[76px]"
                              />
                            </div>
                            <div className="developer_sec6_title mb-2">
                              <p>Node React Developer</p>
                            </div>
                            <div className="hire_data_sec">
                              <p className="md:min-h-[120px] min-h-[120px]">
                                This master combination of our full stack Node
                                js and React js will help you build complex apps
                                with a clean codebase and great performance.
                                Acquire our front-end + back-end services to
                                receive full support on the development of your
                                project.
                              </p>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="hire_sec1_service_50">
          <div className="react-technology">
            <div className="relative z-10 rounded-[30px] !border-[1px]  border-[#00dfb8]">
              <div className="dots_flex">
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
              </div>
              <div className="background-hover border-t-[1px]  border-[#00dfb8]">
                {pathname === "/hire-reactjs-developer/" ? (
                  <div className="style_sec3_swiper_home">
                    <div className="flex gap-[1rem] pb-[2rem]">
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/images/3-1.png"
                        alt="reactjs"
                        className="w-[76px]"
                      />
                      <img
                        decoding="async"
                        loading="lazy"
                        src="/images/java_logo.png"
                        alt="java"
                        className="w-[76px]"
                      />
                    </div>
                    <div className="developer_sec6_title mb-2">
                      <p>React Java Developer</p>
                    </div>
                    <div className="hire_data_sec">
                      <p className="md:h-[120px] min-h-[120px]">
                        Modernize your projects with a React-driven website and
                        Java backend. We’ll create an app that’s visually
                        beautiful, full of features, and works on every device.
                        Hire full stack react developers from us to build a
                        feature-rich interface without making the backend
                        unreadable or redundant.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    {pathname === "/hire-java-developer/" ? (
                      <div className="style_sec3_swiper_home">
                        <div className="flex gap-[1rem] pb-[2rem]">
                          <img
                            decoding="async"
                            loading="lazy"
                            src="/images/java_logo.png"
                            alt="java"
                            className="w-[76px]"
                          />
                          <img
                            decoding="async"
                            loading="lazy"
                            src="/images/3-1.png"
                            alt="reactjs"
                            className="w-[76px]"
                          />
                        </div>
                        <div className="developer_sec6_title mb-2">
                          <p>Java React Developer</p>
                        </div>
                        <div className="hire_data_sec">
                          <p className="md:min-h-[144px] min-h-[150px]">
                            We bring you React’s great front-end for your users
                            and provide Java’s robust backend to rapidly build
                            your solution. Our full stack experts are
                            well-versed in bringing you the best of both these
                            technologies.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <>
                        {pathname === "/hire-nodejs-developer/" && (
                          <div className="style_sec3_swiper_home">
                            <div className="flex gap-[1rem] pb-[2rem]">
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/images/js-1.png"
                                alt="nodejs"
                                className="w-[76px]"
                              />
                              <img
                                decoding="async"
                                loading="lazy"
                                src="/images/angular_logo.png"
                                alt="angularjs"
                                className="w-[76px]"
                              />
                            </div>
                            <div className="developer_sec6_title mb-2">
                              <p>Node Angular Developer</p>
                            </div>
                            <div className="hire_data_sec">
                              <p className="md:min-h-[120px] min-h-[150px]">
                                This powerful duo of full stack Node js +
                                Angular can design an engaging and interactive
                                user interface that interacts with the backend
                                easily. Acquire our highly scalable and robust
                                front-end + backend services to bring your
                                business an edge over your competitors.
                              </p>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section8_service py-[5rem]">
        <Link
          href="#section10_service"
          onClick={(e) => scrollToSection(e, "section10_service")}
        >
          <div
            className={`btn_flex mt-[4rem] ${isMobile ? "!px-8 !py-2" : ""}`}
          >
            <div className="chat_icon">
              <img
                decoding="async"
                loading="lazy"
                src="/images/hire-hand.png"
                alt="hire hand"
              />
            </div>
            <div className="chat_btn_technology">
              <p className="transition ng-binding xl:!text-[20px] lg:!text-[18px] md:!text-[15px] !text-[16px]">
                {pathname === "/hire-reactjs-developer/" ? (
                  "Hire Full Stack Reactjs Developers"
                ) : (
                  <>
                    {pathname === "/hire-java-developer/" ? (
                      "Hire Full Stack Java Developers"
                    ) : (
                      <>
                        {pathname === "/hire-nodejs-developer/"
                          ? "Hire Full Stack Nodejs Developers"
                          : null}
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
  );
};

export default TechnologyCombination;
