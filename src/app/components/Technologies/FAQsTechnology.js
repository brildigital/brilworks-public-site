"use client";

import { usePathname } from "next/navigation";

const FAQsTechnology = () => {
  const pathname = usePathname();

  return (
    <div className="sec3_width_home faq-bottom mb-[5rem] pt-0">
      <div className="service_sec3 md:text-center text-left">
        <p className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px]">
          FAQs
        </p>
      </div>

      <div>
        {pathname === "/hire-reactjs-developer" ? (
          <div
            id="accordionExampleother"
            className="d-block accordion nav nav-tabs"
            role="tablist"
          >
            <div
              className="accordion-item"
              data-bs-toggle="tab"
              data-bs-target="#accordion-one"
              type="button"
              role="tab"
              aria-controls="accordion-one"
              aria-selected="true"
            >
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button xl:text-[32px] md:text-[26px] text-[16px]"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  What is the average work experience of a React.js developer
                  hired through Brilworks?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExampleother"
              >
                <div className="accordion-body">
                  <div>
                    The average experience of React.js developers hired through
                    us is of mid-senior level, which is 3+ years.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="accordion-item"
              data-bs-toggle="tab"
              data-bs-target="#accordion-two"
              type="button"
              role="tab"
              aria-controls="accordion-two"
              aria-selected="false"
            >
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How long will it take to hire Reactjs from Brilworks?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExampleother"
              >
                <div className="accordion-body">
                  <div>
                    In as few as 2-5 business days, we can quickly and
                    efficiently assign a React js developer to your project.
                  </div>
                </div>
              </div>
            </div>

            <div
              className="accordion-item"
              data-bs-toggle="tab"
              data-bs-target="#accordion-three"
              type="button"
              role="tab"
              aria-controls="accordion-three"
              aria-selected="false"
            >
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What is the benefit of hiring dedicated React.js developers
                  from Brilworks?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExampleother"
              >
                <div className="accordion-body">
                  <div>
                    Hiring dedicated React js developers for your team is a good
                    idea if you want to ensure that tasks are completed on time
                    and with the highest degree of quality, have the option of
                    scaling the team as and when demand increases, and most
                    importantly get someone reliable on board without worrying
                    about retention.
                  </div>
                </div>
              </div>
            </div>

            <div
              className="accordion-item"
              data-bs-toggle="tab"
              data-bs-target="#accordion-four"
              type="button"
              role="tab"
              aria-controls="accordion-four"
              aria-selected="false"
            >
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Do you provide support and maintenance services after
                  deployment?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExampleother"
              >
                <div className="accordion-body">
                  <div>
                    Yes, we offer support and maintenance services to help you
                    keep your product running smoothly after it has been
                    deployed. This includes bug fixes, security maintenance,
                    minor changes, module alterations, feature enhancements,
                    upgrades, and resolution of technical glitches.
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {pathname === "/hire-java-developer" ? (
              <div
                id="accordionExampleother"
                className="d-block accordion nav nav-tabs"
                role="tablist"
              >
                <div
                  className="accordion-item"
                  data-bs-toggle="tab"
                  data-bs-target="#accordion-one"
                  type="button"
                  role="tab"
                  aria-controls="accordion-one"
                  aria-selected="true"
                >
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button xl:text-[32px] md:text-[26px] text-[16px]"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      How can I hire Java Developers from Brilworks?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExampleother"
                  >
                    <div className="accordion-body">
                      <div>
                        You can hire Java backend developers from Brilworks to
                        easily extend your web development team. We match up
                        great talent with your requirements, then help you find
                        the right fit for your project. You interview
                        candidates, select the right one and start working right
                        away!
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-bs-toggle="tab"
                  data-bs-target="#accordion-two"
                  type="button"
                  role="tab"
                  aria-controls="accordion-two"
                  aria-selected="false"
                >
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How long will it take to hire Java Developers from
                      Brilworks?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExampleother"
                  >
                    <div className="accordion-body">
                      <div>
                        In as few as 2-5 business days, we can quickly and
                        efficiently assign a Java developer to your project.
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="accordion-item"
                  data-bs-toggle="tab"
                  data-bs-target="#accordion-three"
                  type="button"
                  role="tab"
                  aria-controls="accordion-three"
                  aria-selected="false"
                >
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What are some skills a Java Developer must possess?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExampleother"
                  >
                    <div className="accordion-body">
                      <div>
                        You should be looking for a Java developer who has the
                        skills to work on any project, has a passion for coding,
                        and enjoys learning new technologies. A strong candidate
                        will have experience with code written in Java, Struts
                        framework, Spring framework, and OOP concepts.
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="accordion-item"
                  data-bs-toggle="tab"
                  data-bs-target="#accordion-four"
                  type="button"
                  role="tab"
                  aria-controls="accordion-four"
                  aria-selected="false"
                >
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      How do you make sure the developer you find for me will
                      fit my needs?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExampleother"
                  >
                    <div className="accordion-body">
                      <div>
                        Our comprehensive vetting process means that there is no
                        need to worry about missing out on a great candidate.
                        Additionally, we are always looking to make sure that
                        the right candidates are being matched with the right
                        projects so your development team is highly motivated
                        and productive!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {pathname === "/hire-nodejs-developer" ? (
                  <>
                    <div
                      id="accordionExampleother"
                      className="d-block accordion nav nav-tabs"
                      role="tablist"
                    >
                      <div
                        className="accordion-item"
                        data-bs-toggle="tab"
                        data-bs-target="#accordion-one"
                        type="button"
                        role="tab"
                        aria-controls="accordion-one"
                        aria-selected="true"
                      >
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button xl:text-[32px] md:text-[26px] text-[16px]"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            How does Brilworks vet Node.js developers ?
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExampleother"
                        >
                          <div className="accordion-body">
                            <div>
                              We thoroughly evaluate Node.js developers’ logical
                              reasoning abilities, communication skills, and
                              their ability to write well-documented and clean
                              code before we hire them.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item"
                        data-bs-toggle="tab"
                        data-bs-target="#accordion-two"
                        type="button"
                        role="tab"
                        aria-controls="accordion-two"
                        aria-selected="false"
                      >
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            How much will it cost to hire a NodeJS developer
                            from Brilworks ?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExampleother"
                        >
                          <div className="accordion-body">
                            <div>
                              Hiring a NodeJS developer from us will cost you
                              approximately $2500 a month, depending on the
                              skillset and experience of the candidate.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="accordion-item"
                        data-bs-toggle="tab"
                        data-bs-target="#accordion-three"
                        type="button"
                        role="tab"
                        aria-controls="accordion-three"
                        aria-selected="false"
                      >
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Do you provide a trial period for hiring a Node.js
                            developer ?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExampleother"
                        >
                          <div className="accordion-body">
                            <div>
                              Yes, we offer a 48-hour no-risk trial period, so
                              you can test the resource before making a
                              decision.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="accordion-item"
                        data-bs-toggle="tab"
                        data-bs-target="#accordion-four"
                        type="button"
                        role="tab"
                        aria-controls="accordion-four"
                        aria-selected="false"
                      >
                        <h2 className="accordion-header" id="headingFour">
                          <button
                            className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            What are the key skills that a Node.js developer
                            should have ?
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExampleother"
                        >
                          <div className="accordion-body">
                            <div>
                              The Nodejs developer must have a definite
                              knowledge of both relational databases like MySQL,
                              MariaDB, and No SQL databases like MongoDB, and
                              CouchDB.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {pathname === "/hire-react-native-developer" ? (
                      <>
                        <div
                          id="accordionExampleother"
                          className="d-block accordion nav nav-tabs"
                          role="tablist"
                        >
                          <div
                            className="accordion-item"
                            data-bs-toggle="tab"
                            data-bs-target="#accordion-one"
                            type="button"
                            role="tab"
                            aria-controls="accordion-one"
                            aria-selected="true"
                          >
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className="accordion-button xl:text-[32px] md:text-[26px] text-[16px]"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                              >
                                What are the responsibilities of React Native
                                developers?
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse show xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExampleother"
                            >
                              <div className="accordion-body">
                                <div>
                                  A React Native developer is responsible for
                                  building native applications for Android, iOS,
                                  and macOS. They have the ability to create UI
                                  that is more responsive than traditional
                                  devices including touchscreen phones, tablets,
                                  and desktops.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="accordion-item"
                            data-bs-toggle="tab"
                            data-bs-target="#accordion-two"
                            type="button"
                            role="tab"
                            aria-controls="accordion-two"
                            aria-selected="false"
                          >
                            <h2 className="accordion-header" id="headingTwo">
                              <button
                                className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                What is the benefit of choosing react native
                                mobile app development?
                              </button>
                            </h2>
                            <div
                              id="collapseTwo"
                              className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExampleother"
                            >
                              <div className="accordion-body">
                                <div>
                                  It is safe to say that React Native gives you
                                  the best of both worlds. Convenient and
                                  cross-platform, it will enable you to build
                                  for iOS and Android without the complexity of
                                  having to learn two languages.
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className="accordion-item"
                            data-bs-toggle="tab"
                            data-bs-target="#accordion-three"
                            type="button"
                            role="tab"
                            aria-controls="accordion-three"
                            aria-selected="false"
                          >
                            <h2 className="accordion-header" id="headingThree">
                              <button
                                className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                How do I hire React Native developers?
                              </button>
                            </h2>
                            <div
                              id="collapseThree"
                              className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                              aria-labelledby="headingThree"
                              data-bs-parent="#accordionExampleother"
                            >
                              <div className="accordion-body">
                                <div>
                                  An easy and convenient way to hire a React
                                  Native Developer from Brilworks is by sharing
                                  your requirements. Once you fill out the
                                  details, we will start shortlisting the top
                                  matching candidates for you so that you can
                                  interview them and onboard the ones you want
                                  to hire.
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className="accordion-item"
                            data-bs-toggle="tab"
                            data-bs-target="#accordion-four"
                            type="button"
                            role="tab"
                            aria-controls="accordion-four"
                            aria-selected="false"
                          >
                            <h2 className="accordion-header" id="headingFour">
                              <button
                                className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                              >
                                Do you provide NDA and IP protection for my
                                project?
                              </button>
                            </h2>
                            <div
                              id="collapseFour"
                              className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                              aria-labelledby="headingFour"
                              data-bs-parent="#accordionExampleother"
                            >
                              <div className="accordion-body">
                                <div>
                                  You will have 100% ownership of the project
                                  and all its resource including NDA, copyright,
                                  source code, intellectual property rights, and
                                  confidential letters.
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className="accordion-item"
                            data-bs-toggle="tab"
                            data-bs-target="#accordion-five"
                            type="button"
                            role="tab"
                            aria-controls="accordion-five"
                            aria-selected="false"
                          >
                            <h2 className="accordion-header" id="headingFive">
                              <button
                                className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive"
                              >
                                What if I am not satisfied with the hired React
                                Native developers work?
                              </button>
                            </h2>
                            <div
                              id="collapseFive"
                              className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                              aria-labelledby="headingFive"
                              data-bs-parent="#accordionExampleother"
                            >
                              <div className="accordion-body">
                                <div>
                                  We understand that every project requires
                                  different skills, and we are always looking
                                  for ways to bring you the best developers to
                                  your team. We work with our clients long-term
                                  and will happily provide a new developer if
                                  they don’t deliver what you need.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {pathname === "/hire-aws-developer" ? (
                          <>
                            <div
                              id="accordionExampleother"
                              className="d-block accordion nav nav-tabs"
                              role="tablist"
                            >
                              <div
                                className="accordion-item"
                                data-bs-toggle="tab"
                                data-bs-target="#accordion-one"
                                type="button"
                                role="tab"
                                aria-controls="accordion-one"
                                aria-selected="true"
                              >
                                <h2
                                  className="accordion-header"
                                  id="headingOne"
                                >
                                  <button
                                    className="accordion-button xl:text-[32px] md:text-[26px] text-[16px]"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="false"
                                    aria-controls="collapseOne"
                                  >
                                    How do I hire AWS developers through
                                    Brilworks?
                                  </button>
                                </h2>
                                <div
                                  id="collapseOne"
                                  className="accordion-collapse collapse show xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExampleother"
                                >
                                  <div className="accordion-body">
                                    <div>
                                      You can hire AWS developers from Brilworks
                                      to easily extend your web development
                                      team. We match up great talent with your
                                      requirements, then help you find the right
                                      fit for your project. You interview
                                      candidates, select the right one and start
                                      working right away!
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="accordion-item"
                                data-bs-toggle="tab"
                                data-bs-target="#accordion-two"
                                type="button"
                                role="tab"
                                aria-controls="accordion-two"
                                aria-selected="false"
                              >
                                <h2
                                  className="accordion-header"
                                  id="headingTwo"
                                >
                                  <button
                                    className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                  >
                                    Is the 2 days risk-free trial period
                                    completely free?
                                  </button>
                                </h2>
                                <div
                                  id="collapseTwo"
                                  className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                                  aria-labelledby="headingTwo"
                                  data-bs-parent="#accordionExampleother"
                                >
                                  <div className="accordion-body">
                                    <div>
                                      Yes, it’s completely free. We allow this
                                      free time period to evaluate whether we’re
                                      the right fit for your project. If you’re
                                      satisfied with the quality of our work,
                                      then you can continue with the engagement;
                                      if not, then you can cancel it without any
                                      further obligations.
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                className="accordion-item"
                                data-bs-toggle="tab"
                                data-bs-target="#accordion-three"
                                type="button"
                                role="tab"
                                aria-controls="accordion-three"
                                aria-selected="false"
                              >
                                <h2
                                  className="accordion-header"
                                  id="headingThree"
                                >
                                  <button
                                    className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                  >
                                    What are the advantages of hiring developers
                                    from Brilworks?
                                  </button>
                                </h2>
                                <div
                                  id="collapseThree"
                                  className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                                  aria-labelledby="headingThree"
                                  data-bs-parent="#accordionExampleother"
                                >
                                  <div className="accordion-body">
                                    <div>
                                      Our developers do all the heavy lifting
                                      for you and take over executing the work
                                      while giving you the freedom to focus on
                                      what matters the most to you, aka growing
                                      your business without any worries of
                                      hiring and retention.
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                className="accordion-item"
                                data-bs-toggle="tab"
                                data-bs-target="#accordion-four"
                                type="button"
                                role="tab"
                                aria-controls="accordion-four"
                                aria-selected="false"
                              >
                                <h2
                                  className="accordion-header"
                                  id="headingFour"
                                >
                                  <button
                                    className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour"
                                    aria-expanded="false"
                                    aria-controls="collapseFour"
                                  >
                                    What to consider while choosing an AWS
                                    development company?
                                  </button>
                                </h2>
                                <div
                                  id="collapseFour"
                                  className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                                  aria-labelledby="headingFour"
                                  data-bs-parent="#accordionExampleother"
                                >
                                  <div className="accordion-body">
                                    <div>
                                      You need to choose an AWS partner that can
                                      help you understand the development
                                      process & technical challenges, what is
                                      required to meet security compliance
                                      standards, and how they can deliver their
                                      value-added services.
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                className="accordion-item"
                                data-bs-toggle="tab"
                                data-bs-target="#accordion-five"
                                type="button"
                                role="tab"
                                aria-controls="accordion-five"
                                aria-selected="false"
                              >
                                <h2
                                  className="accordion-header"
                                  id="headingFive"
                                >
                                  <button
                                    className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive"
                                    aria-expanded="false"
                                    aria-controls="collapseFive"
                                  >
                                    Are your development services inclusive of
                                    post-project support?
                                  </button>
                                </h2>
                                <div
                                  id="collapseFive"
                                  className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                                  aria-labelledby="headingFive"
                                  data-bs-parent="#accordionExampleother"
                                >
                                  <div className="accordion-body">
                                    <div>
                                      Yes, we do offer post-launch maintenance
                                      and support. This includes bug fixes,
                                      security maintenance, minor changes,
                                      module alterations, feature enhancements,
                                      upgrades, and resolution of technical
                                      glitches.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            {pathname === "/hire-ui-ux-designer" ? (
                              <>
                                <div
                                  id="accordionExampleother"
                                  className="d-block accordion nav nav-tabs"
                                  role="tablist"
                                >
                                  <div
                                    className="accordion-item"
                                    data-bs-toggle="tab"
                                    data-bs-target="#accordion-one"
                                    type="button"
                                    role="tab"
                                    aria-controls="accordion-one"
                                    aria-selected="true"
                                  >
                                    <h2
                                      className="accordion-header"
                                      id="headingOne"
                                    >
                                      <button
                                        className="accordion-button xl:text-[32px] md:text-[26px] text-[16px]"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="false"
                                        aria-controls="collapseOne"
                                      >
                                        Why should I hire a UI UX designer from
                                        Brilworks?
                                      </button>
                                    </h2>
                                    <div
                                      id="collapseOne"
                                      className="accordion-collapse collapse show xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                                      aria-labelledby="headingOne"
                                      data-bs-parent="#accordionExampleother"
                                    >
                                      <div className="accordion-body">
                                        <div>
                                          Our UI UX designers understand the
                                          value of user experience and are
                                          committed to creating a powerful web
                                          presence for your business.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="accordion-item"
                                    data-bs-toggle="tab"
                                    data-bs-target="#accordion-two"
                                    type="button"
                                    role="tab"
                                    aria-controls="accordion-two"
                                    aria-selected="false"
                                  >
                                    <h2
                                      className="accordion-header"
                                      id="headingTwo"
                                    >
                                      <button
                                        className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                      >
                                        Do you provide a trial period for hiring
                                        a designer?
                                      </button>
                                    </h2>
                                    <div
                                      id="collapseTwo"
                                      className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                                      aria-labelledby="headingTwo"
                                      data-bs-parent="#accordionExampleother"
                                    >
                                      <div className="accordion-body">
                                        <div>
                                          Yes, we do understand the importance
                                          of finding someone who is a good fit
                                          for your organization. Therefore, we
                                          offer a 48 hours no-risk trial for any
                                          employee who might be interested in
                                          working with us.
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div
                                    className="accordion-item"
                                    data-bs-toggle="tab"
                                    data-bs-target="#accordion-three"
                                    type="button"
                                    role="tab"
                                    aria-controls="accordion-three"
                                    aria-selected="false"
                                  >
                                    <h2
                                      className="accordion-header"
                                      id="headingThree"
                                    >
                                      <button
                                        className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                      >
                                        Do you provide NDA and IP protection for
                                        my project?
                                      </button>
                                    </h2>
                                    <div
                                      id="collapseThree"
                                      className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                                      aria-labelledby="headingThree"
                                      data-bs-parent="#accordionExampleother"
                                    >
                                      <div className="accordion-body">
                                        <div>
                                          You will have 100% ownership of the
                                          project and all its resource including
                                          NDA, copyright, source code,
                                          intellectual property rights, and
                                          confidential letters.
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div
                                    className="accordion-item"
                                    data-bs-toggle="tab"
                                    data-bs-target="#accordion-four"
                                    type="button"
                                    role="tab"
                                    aria-controls="accordion-four"
                                    aria-selected="false"
                                  >
                                    <h2
                                      className="accordion-header"
                                      id="headingFour"
                                    >
                                      <button
                                        className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                      >
                                        What if I am not satisfied with the
                                        hired UI UX Designers?
                                      </button>
                                    </h2>
                                    <div
                                      id="collapseFour"
                                      className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                                      aria-labelledby="headingFour"
                                      data-bs-parent="#accordionExampleother"
                                    >
                                      <div className="accordion-body">
                                        <div>
                                          We understand that every project
                                          requires different skills, and we are
                                          always looking for ways to bring you
                                          the best developers to your team. We
                                          work with our clients long-term and
                                          will happily provide a new developer
                                          if they don’t deliver what you need.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div
                                  id="accordionExampleother"
                                  className="d-block accordion nav nav-tabs"
                                  role="tablist"
                                >
                                  <div
                                    className="accordion-item"
                                    data-bs-toggle="tab"
                                    data-bs-target="#accordion-one"
                                    type="button"
                                    role="tab"
                                    aria-controls="accordion-one"
                                    aria-selected="true"
                                  >
                                    <h2
                                      className="accordion-header"
                                      id="headingOne"
                                    >
                                      <button
                                        className="accordion-button xl:text-[32px] md:text-[26px] text-[16px]"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="false"
                                        aria-controls="collapseOne"
                                      >
                                        Can I hire Blockchain app developer from
                                        Brilworks on a full-time basis?
                                      </button>
                                    </h2>
                                    <div
                                      id="collapseOne"
                                      className="accordion-collapse collapse show xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                                      aria-labelledby="headingOne"
                                      data-bs-parent="#accordionExampleother"
                                    >
                                      <div className="accordion-body">
                                        <div>
                                          Yes, you can hire a Blockchain app
                                          developer in a full-time capacity. We
                                          have a team of Blockchain experts, who
                                          are experienced in developing
                                          blockchain-based solutions and
                                          implementing them into your projects.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="accordion-item"
                                    data-bs-toggle="tab"
                                    data-bs-target="#accordion-two"
                                    type="button"
                                    role="tab"
                                    aria-controls="accordion-two"
                                    aria-selected="false"
                                  >
                                    <h2
                                      className="accordion-header"
                                      id="headingTwo"
                                    >
                                      <button
                                        className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                      >
                                        Why should you invest in Blockchain app
                                        development?
                                      </button>
                                    </h2>
                                    <div
                                      id="collapseTwo"
                                      className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                                      aria-labelledby="headingTwo"
                                      data-bs-parent="#accordionExampleother"
                                    >
                                      <div className="accordion-body">
                                        <div>
                                          One of the biggest benefits of
                                          Blockchain is its ability to automate
                                          processes. Rather than relying on a
                                          third party to carry out transactions,
                                          you can use smart contracts that are
                                          self-executing and track the flow of
                                          data.
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div
                                    className="accordion-item"
                                    data-bs-toggle="tab"
                                    data-bs-target="#accordion-three"
                                    type="button"
                                    role="tab"
                                    aria-controls="accordion-three"
                                    aria-selected="false"
                                  >
                                    <h2
                                      className="accordion-header"
                                      id="headingThree"
                                    >
                                      <button
                                        className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                      >
                                        What is Smart Contract Development?
                                      </button>
                                    </h2>
                                    <div
                                      id="collapseThree"
                                      className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                                      aria-labelledby="headingThree"
                                      data-bs-parent="#accordionExampleother"
                                    >
                                      <div className="accordion-body">
                                        <div>
                                          Smart contract development is a
                                          blockchain technology that allows you
                                          to develop customized smart contracts.
                                          It leads to considerable benefits:
                                          less legal and economic uncertainty;
                                          more convenience, security, and speed.
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div
                                    className="accordion-item"
                                    data-bs-toggle="tab"
                                    data-bs-target="#accordion-four"
                                    type="button"
                                    role="tab"
                                    aria-controls="accordion-four"
                                    aria-selected="false"
                                  >
                                    <h2
                                      className="accordion-header"
                                      id="headingFour"
                                    >
                                      <button
                                        className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                      >
                                        How to hire the right Blockchain app
                                        development company?
                                      </button>
                                    </h2>
                                    <div
                                      id="collapseFour"
                                      className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                                      aria-labelledby="headingFour"
                                      data-bs-parent="#accordionExampleother"
                                    >
                                      <div className="accordion-body">
                                        <div>
                                          When it comes to picking out a
                                          Blockchain development company to work
                                          with, there are many factors that go
                                          into a company’s decision-making
                                          process. It’s best to consider things
                                          like team size, industry exposure, and
                                          portfolio.
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div
                                    className="accordion-item"
                                    data-bs-toggle="tab"
                                    data-bs-target="#accordion-five"
                                    type="button"
                                    role="tab"
                                    aria-controls="accordion-five"
                                    aria-selected="false"
                                  >
                                    <h2
                                      className="accordion-header"
                                      id="headingFive"
                                    >
                                      <button
                                        className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive"
                                        aria-expanded="false"
                                        aria-controls="collapseFive"
                                      >
                                        How will I assess the progress of my
                                        Blockchain app development project?
                                      </button>
                                    </h2>
                                    <div
                                      id="collapseFive"
                                      className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                                      aria-labelledby="headingFive"
                                      data-bs-parent="#accordionExampleother"
                                    >
                                      <div className="accordion-body">
                                        <div>
                                          Agile project management is key to
                                          keeping clients, teams, and managers
                                          informed of the work being done. In
                                          the case of an app development
                                          project, we will provide login
                                          information for assessing real-time
                                          progress.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
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
      </div>
    </div>
  );
};

export default FAQsTechnology;
