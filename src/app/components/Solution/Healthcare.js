import Link from "next/link";
import SolutionContactForm from "./SolutionContactForm";
import SoutionHowCanStart from "./SoutionHowCanStart";
import SolutionEngagementModal from "./SolutionEngagementModal";
import HealthcareFAQs from "./HealthcareFAQs";

const HealthCare = () => {
  return (
    <>
      <section className="portfolio mt-[6rem]">
        <div className="mx-auto service_width">
          <div className="relative">
            <p>
              <img
                className="h-[46vh] rounded-[20px]"
                src="/images/Types-of-Healthcare-Apps-2.webp"
                alt="our process"
              />
            </p>
            <div className="service_sec1_position">
              <div className="flex self-end justify-between w-[96%] mx-auto">
                <div className="txt">
                  <div className="how-we flex items-center gap-[1rem]">
                    <div>
                      <img
                        decoding="async"
                        loading="lazy"
                        class="alignnone wp-image-258 "
                        src="/images/1.png"
                        alt="curly bracket"
                        width="24"
                        height="94"
                      />
                    </div>
                    <div>
                      <p className="uppercase xl:text-[4.5rem] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]">
                        HEALTHCARE
                      </p>
                    </div>
                    <div>
                      <img
                        decoding="async"
                        loading="lazy"
                        class="alignnone wp-image-258 "
                        src="/images/2.png"
                        alt="curly bracket"
                        width="24"
                        height="94"
                      />
                    </div>
                  </div>
                  <div className="how-we flex items-center gap-[1rem]">
                    <p className="uppercase xl:text-[4rem] lg:text-[60px] md:text-[50px] sm:text-[55px] text-[30px] !leading-none">
                      SOFTWARE <br />
                      DEVELOPMENT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width lg:py-[6rem] py-[4rem]">
          <div className="flex !flex-col lg:!flex-row gap-[3.5rem]">
            <div className="basis-[50%]">
              <div className="home_sec2_txt3 like_text">
                <p className="uppercase p-0 !ml-[0] !w-full">
                  CUSTOM HEALTHCARE SOFTWARE DEVELOPMENT THAT <br />
                  PUTS YOUR PATIENTS FIRST.
                </p>
              </div>
            </div>
            <div className="basis-[55%]">
              <div className="home_sec2_txt4">
                <p className="!text-left pb-8">
                  Leverage our healthcare software development services to
                  improve processes and patient experience. Resolve
                  accessibility issues by offering remote consultations and
                  telehealth solutions.
                </p>

                <div className="btn_paddinng contact_btn btn_flex pt-[3rem]">
                  <div className="formBtn_icon">
                    <p>
                      <Link href="#section10_service">
                        <img src="/images/right_arrow.png" alt="arrow" />
                      </Link>
                    </p>
                  </div>
                  <p className="xl:!text-[21px] lg:!text-[18px]">
                    <Link href="#section10_service">Request For Proposal</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width md:py-[6rem] py-[4rem] workpadd_borderTop end-to-end">
          <div className="end-To-end">
            <div className="endTO_text home_sec2_txt3">
              <p className="!w-full p-0">
                LEVERAGE THE POWER OF TECHNOLOGY WITH
                <br />
                OUR HEALTHCARE SOFTWARE DEVELOPMENT
                <br />
                SERVICES
              </p>
            </div>
          </div>

          <div className="mx-auto px-[15px] pt-[32px]">
            <div className="accordion-tab-section">
              <div className="flex flex-wrap">
                <div className="lg:w-6/12 w-full mb-[10px]">
                  <div
                    id="accordionEndtoEnd"
                    className="d-block accordion nav nav-tabs !mb-0 lg:w-[90%] w-full"
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
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <div className="flex justify-between w-full">
                            <div className="text-[24px]">
                              Telemedicine Software Developments
                            </div>

                            <div className="number_icon_img">
                              <img
                                src="/images/healthcare-03.png"
                                alt="Telemedicine Software Developments"
                              />
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionEndtoEnd"
                      >
                        <div className="accordion-body">
                          <p className="mb-[1rem] text-[20px]">
                            Our custom fintech software development services
                            include application development, custom reporting,
                            and real-time data interaction.
                          </p>
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
                          <div className="flex justify-between w-full">
                            <div className="text-[24px]">
                              Remote Patient Monitoring Software
                            </div>

                            <div className="number_icon_img">
                              <img
                                src="/images/healthcare-06.png"
                                alt="Remote Patient Monitoring Software"
                              />
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionEndtoEnd"
                      >
                        <div className="accordion-body">
                          <p className="mb-[1rem] text-[20px]">
                            With remote monitoring software, doctors can monitor
                            patients’ health remotely via virtual care or vitals
                            captured through wearable devices and IoT sensors.
                            This improves patient outcomes by providing
                            healthcare professionals with better tools to
                            provide superior care at the most appropriate time.
                          </p>
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
                          <div className="flex justify-between w-full">
                            <div className="text-[24px]">
                              mPrescription App Development
                            </div>

                            <div className="number_icon_img">
                              <img
                                src="/images/healthcare-09.png"
                                alt="mPrescription App Development"
                              />
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionEndtoEnd"
                      >
                        <div className="accordion-body">
                          <p className="mb-[1rem] text-[20px]">
                            We help simplify medication management by providing
                            prescription mobile apps to store patient data,
                            medical history, allergies, and prescriptions. Our
                            apps are trusted by both doctors and patients alike.
                          </p>
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
                          <div className="flex justify-between w-full">
                            <div className="text-[24px]">
                              Patient Engagement Solutions
                            </div>

                            <div className="number_icon_img">
                              <img
                                src="/images/healthcare-08.png"
                                alt="Patient Engagement Solutions"
                              />
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionEndtoEnd"
                      >
                        <div className="accordion-body">
                          <p className="mb-[1rem] text-[20px]">
                            Your patients are a priority and we’ll help you
                            create systems that deliver great care, improve
                            patient satisfaction and increase revenue. Our
                            patient engagement solutions allow patients and
                            healthcare providers to connect anywhere and anytime
                            with great ease.
                          </p>
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
                          <div className="flex justify-between w-full">
                            <div className="text-[24px]">
                              IoT Healthcare Software
                            </div>

                            <div className="number_icon_img">
                              <img
                                src="/images/healthcare-10.png"
                                alt="IoT Healthcare Software"
                              />
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionEndtoEnd"
                      >
                        <div className="accordion-body">
                          <p className="mb-[1rem] text-[20px]">
                            Our IoT software helps doctors make better decisions
                            faster. It captures relevant patient information
                            through smart sensors, then analyses it in real-time
                            to generate valuable insights. We develop
                            applications that empower doctors and medical staff
                            with accurate and valuable patient data.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="accordion-item"
                      data-bs-toggle="tab"
                      data-bs-target="#accordion-six"
                      type="button"
                      role="tab"
                      aria-controls="accordion-six"
                      aria-selected="false"
                    >
                      <h2 className="accordion-header" id="headingSix">
                        <button
                          className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          <div className="flex justify-between w-full">
                            <div className="text-[24px]">
                              Electronic Medical Record Software
                            </div>

                            <div className="number_icon_img">
                              <img
                                src="/images/healthcare-04.png"
                                alt="Electronic Medical Record Software"
                              />
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseSix"
                        className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionEndtoEnd"
                      >
                        <div className="accordion-body">
                          <p className="mb-[1rem] text-[20px]">
                            Growing patient expectations requires doctors to not
                            just interact with their patients, but also provide
                            them with efficient and comprehensive care. With our
                            software, you can leverage your existing EMR/EHR
                            platform to maximize clinical productivity and
                            interact with patients via patient portals.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-6/12 w-full md:mt-[0px] mt-[30px]">
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="accordion-one"
                      role="tabpanel"
                      aria-labelledby="accordion-one-tab"
                    >
                      <div className="team_img">
                        <img
                          src="/images/Telemedicine-Software-Developments.jpg"
                          alt="Telemedicine-Software-Developments"
                        />
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="accordion-two"
                      role="tabpanel"
                      aria-labelledby="accordion-two-tab"
                    >
                      <div className="team_img">
                        <img
                          src="/images/Remote-Patient-Monitoring-Software.jpg"
                          alt="Remote-Patient-Monitoring-Software"
                        />
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="accordion-three"
                      role="tabpanel"
                      aria-labelledby="accordion-three-tab"
                    >
                      <div className="team_img">
                        <img
                          src="/images/mPrescription-App-Development.jpg"
                          alt="mPrescription-App-Development.jpg"
                        />
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="accordion-four"
                      role="tabpanel"
                      aria-labelledby="accordion-four-tab"
                    >
                      <div className="team_img">
                        <img
                          src="/images/Patient-Engagement-Solutions.jpg"
                          alt="Patient-Engagement-Solutions"
                        />
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="accordion-five"
                      role="tabpanel"
                      aria-labelledby="accordion-five-tab"
                    >
                      <div className="team_img">
                        <img
                          src="/images/IoT-Healthcare-Software.jpg"
                          alt="IoT-Healthcare-Software"
                        />
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="accordion-six"
                      role="tabpanel"
                      aria-labelledby="accordion-six-tab"
                    >
                      <div className="team_img">
                        <img
                          src="/images/Electronic-Medical-Record-Software.jpg"
                          alt="Electronic-Medical-Record-Software"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full mt-[3rem]">
                  <div className="btn_paddinng contact_btn_solution btn_flex !mx-auto">
                    <div className="formBtn_icon">
                      <p>
                        <Link href="#section10_service">
                          <img src="/images/right_arrow.png" alt="arrow" />
                        </Link>
                      </p>
                    </div>
                    <Link href="#section10_service">
                      <p className="xl:!text-[21px] lg:!text-[18px]">
                        Build My Healthcare App
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width md:pt-[6rem] pt-[4rem] workpadd_borderTop end-to-end">
          <div className="end-To-end">
            <div className="endTO_text home_sec2_txt3">
              <p className="!w-full p-0">
                MEDICAL SOFTWARE DEVELOPMENT SERVICES CATERING
                <br />
                TO THE ENTIRE HEALTHCARE ECOSYSTEM
              </p>
            </div>
          </div>
          <div className="mx-auto px-[15px] pt-[32px] ">
            <div className="accordion-tab-section">
              <div className="flex flex-wrap ">
                <div className="lg:w-6/12 w-full md:mt-[0px] mt-[30px]">
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="accordion-seven"
                      role="tabpanel"
                      aria-labelledby="accordion-seven-tab"
                    >
                      <div className="team_img">
                        <img
                          src="/images/burgerAsset-50.jpg"
                          alt="Healthacre Provider"
                        />
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="accordion-eight"
                      role="tabpanel"
                      aria-labelledby="accordion-eight-tab"
                    >
                      <div className="team_img">
                        <img
                          src="/images/Pharmaceutical-Companies.jpg"
                          alt="Pharmaceutical Companies"
                        />
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="accordion-nine"
                      role="tabpanel"
                      aria-labelledby="accordion-nine-tab"
                    >
                      <div className="team_img">
                        <img
                          src="/images/Medical-Device-Manufacturers.jpg"
                          alt="Medical Device Manufacturers"
                        />
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="accordion-ten"
                      role="tabpanel"
                      aria-labelledby="accordion-ten-tab"
                    >
                      <div className="team_img">
                        <img
                          src="/images/Healthcare-Startups.jpg"
                          alt="Healthcare Startups"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-6/12 w-full mb-[10px]">
                  <div
                    id="accordionindustry"
                    className="d-block accordion nav nav-tabs !mb-0 ml-8 w-full"
                    role="tablist"
                  >
                    <div
                      className="accordion-item"
                      data-bs-toggle="tab"
                      data-bs-target="#accordion-seven"
                      type="button"
                      role="tab"
                      aria-controls="accordion-seven"
                      aria-selected="true"
                    >
                      <h2 className="accordion-header" id="headingSeven">
                        <button
                          className="accordion-button xl:text-[32px] md:text-[26px] text-[16px]"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSeven"
                          aria-expanded="true"
                          aria-controls="collapseSeven"
                        >
                          <div className="flex justify-between w-[99%]">
                            <div className="text-[24px]">
                              Healthcare Providers
                            </div>

                            <div className="number_icon_img">
                              <img
                                src="/images/healthcare-05.png"
                                alt="Healthcare Providers"
                              />
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseSeven"
                        className="accordion-collapse collapse show xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                        aria-labelledby="headingSeven"
                        data-bs-parent="#accordionindustry"
                      >
                        <div className="accordion-body">
                          <p className="mb-[1rem] text-[20px]">
                            We assist healthcare providers to automate medical
                            workflows, simplify tedious tasks and increase
                            patient satisfaction. Improve your hospital
                            efficiency and uptime while streamlining daily
                            processes.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="accordion-item"
                      data-bs-toggle="tab"
                      data-bs-target="#accordion-eight"
                      type="button"
                      role="tab"
                      aria-controls="accordion-eight"
                      aria-selected="false"
                    >
                      <h2 className="accordion-header" id="headingEight">
                        <button
                          className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseEight"
                          aria-expanded="false"
                          aria-controls="collapseEight"
                        >
                          <div className="flex justify-between w-[99%]">
                            <div className="text-[24px]">
                              Pharmaceutical Companies
                            </div>

                            <div className="number_icon_img">
                              <img
                                src="/images/healthcare-02.png"
                                alt="Pharmaceutical Companies"
                              />
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseEight"
                        className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                        aria-labelledby="headingEight"
                        data-bs-parent="#accordionindustry"
                      >
                        <div className="accordion-body">
                          <p className="mb-[1rem] text-[20px]">
                            We believe that bringing together the best software
                            options for pharma research and development can help
                            you achieve your goals. Our team assists you from
                            the outset of your drug development projects to the
                            end of each phase in your clinical trial.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="accordion-item"
                      data-bs-toggle="tab"
                      data-bs-target="#accordion-nine"
                      type="button"
                      role="tab"
                      aria-controls="accordion-nine"
                      aria-selected="false"
                    >
                      <h2 className="accordion-header" id="headingNine">
                        <button
                          className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseNine"
                          aria-expanded="false"
                          aria-controls="collapseNine"
                        >
                          <div className="flex justify-between w-[99%]">
                            <div className="text-[24px]">
                              Medical Device Manufacturers
                            </div>

                            <div className="number_icon_img">
                              <img
                                src="/images/healthcare-11.png"
                                alt="Medical Device Manufacturers"
                              />
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseNine"
                        className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                        aria-labelledby="headingNine"
                        data-bs-parent="#accordionindustry"
                      >
                        <div className="accordion-body">
                          <p className="mb-[1rem] text-[20px]">
                            Medical device manufacturers are at the forefront of
                            innovation, rapidly transforming how healthcare is
                            delivered. Our software helps medical device
                            manufacturers bring new functionality to their
                            products.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="accordion-item"
                      data-bs-toggle="tab"
                      data-bs-target="#accordion-ten"
                      type="button"
                      role="tab"
                      aria-controls="accordion-ten"
                      aria-selected="false"
                    >
                      <h2 className="accordion-header" id="headingTen">
                        <button
                          className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTen"
                          aria-expanded="false"
                          aria-controls="collapseTen"
                        >
                          <div className="flex justify-between w-[99%]">
                            <div className="text-[24px]">
                              Healthcare Startups
                            </div>

                            <div className="number_icon_img">
                              <img
                                src="/images/healthcare-07.png"
                                alt="Healthcare Startups"
                              />
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id="collapseTen"
                        className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
                        aria-labelledby="headingTen"
                        data-bs-parent="#accordionindustry"
                      >
                        <div className="accordion-body">
                          <p className="mb-[1rem] text-[20px]">
                            We’re committed to helping healthcare startups bring
                            their incredible ideas to life. From medicine to
                            medicine delivery, health technology is changing at
                            an exponential rate. Our team of experts uses their
                            experience and expertise to deliver software
                            solutions that are agile, scalable, reliable, and
                            secure.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full my-[6rem]">
                  <div className="btn_paddinng contact_btn_solution btn_flex !mx-auto">
                    <div className="formBtn_icon">
                      <p>
                        <Link href="#section10_service">
                          <img src="/images/icons2-04.png" alt="arrow" />
                        </Link>
                      </p>
                    </div>
                    <Link href="#section10_service">
                      <p className="xl:!text-[21px] lg:!text-[18px]">
                        Speak with Our Experts
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto service_width md:pt-[6rem] pt-[4rem] workpadd_borderTop end-to-end">
          <div className="pl-[8rem] w-[90%] ">
            <div className="end-To-end">
              <div className="endTO_text home_sec2_txt3">
                <p className="!w-full p-0">
                  TYPES OF HEALTHCARE APPS WE DEVELOP
                </p>
              </div>
            </div>

            <div className="endTO_text_content home_sec2_txt4">
              <p className="!text-[1.5rem]">
                By utilizing our expertise in working with various players in
                the healthcare industry, we provide healthcare application
                development services that make your product a crucial part of
                the overall healthcare ecosystem. Our services encompass the
                development of custom apps, designed to meet your business
                needs.
              </p>
            </div>
          </div>

          <div className="my-[40px]">
            <img
              src="/images/Types-of-Healthcare-Apps.png"
              alt="MEDIA &amp; ENTERTAINMENT APPS"
            />
          </div>

          <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-[2rem]">
            <div className="text-center">
              <img
                src="/images/Appointment-scheduling-applications.png"
                alt="Appointment scheduling applications"
                className="w-[32%] mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Appointment scheduling applications
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/Medication-intake-tracking-apps.png"
                alt="Medication intake tracking apps"
                className="w-[32%]  mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Medication intake tracking apps
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/Home-health-monitoring-apps.png"
                alt="Home health monitoring apps"
                className="w-[32%]  mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Home health monitoring apps
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/Caregiver-management-apps.png"
                alt="Caregiver management apps"
                className="w-[32%] mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Caregiver management apps
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/Drug-inventory-tracking-apps.png"
                alt="Drug inventory tracking apps"
                className="w-[32%] mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Drug inventory tracking apps
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/Wearable-tech-apps.png"
                alt="Wearable tech apps"
                className="w-[32%] mx-auto"
              />
              <p className="mt-[20px] lg:text-[20px] text-[14px]">
                Wearable tech apps
              </p>
            </div>
          </div>

          <div className="w-full md:my-[60px] my-[40px]">
            <div className="btn_paddinng contact_btn_solution btn_flex !mx-auto">
              <div className="formBtn_icon">
                <Link href="#section10_service">
                  <p>
                    <img src="/images/icons-05.png" alt="call" />
                  </p>
                </Link>
              </div>
              <Link href="#section10_service">
                <p className="xl:!text-[21px] lg:!text-[18px]">
                  Let’s get in touch
                </p>
              </Link>
            </div>
          </div>

          <div className="lg:pt-[8rem] lg:pb-[6rem] md:py-[6rem] py-[4rem] workpadd_borderTop">
            <div className="sec9_service_style xl:px-[12rem] sm:px-[4rem] px-[1rem]">
              <div>
                <div className="end-To-end pt-8">
                  <div className="endTO_text home_sec2_txt3 mt-[4rem] mb-0">
                    <p className="!w-full pb-0">
                      WHAT MAKES BRILWORKS THE <br />
                      BEST HEALTHCARE SOFTWARE <br />
                      COMPANY?
                    </p>
                  </div>
                </div>

                <p className="p-font text-center my-[2rem]">
                  It is no secret that innovation and technology play important
                  roles in the healthcare industry. We help healthcare
                  organizations innovate and transform their business in a way
                  that makes them more responsive to the evolving needs of their
                  patients.
                </p>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-[3.5rem] gap-[2rem]">
                  <div>
                    <div className="number xl:text-[34px] text-[24px]">
                      HIPAA & GDPR
                    </div>
                    <p className="year border-0 py-[1rem]">Compliant Apps</p>
                  </div>

                  <div>
                    <div className="number xl:text-[34px] text-[24px]">
                      EXPERIENCE
                    </div>
                    <p className="year border-0 py-[1rem]">Proven mHealth</p>
                  </div>

                  <div>
                    <div className="number xl:text-[34px] text-[24px]">
                      AGILE
                    </div>
                    <p className="year border-0 py-[1rem]">Centric Model</p>
                  </div>

                  <div>
                    <div className="number xl:text-[34px] text-[24px]">
                      SECURITY
                    </div>
                    <p className="year border-0 py-[1rem]">First Approach</p>
                  </div>

                  <div>
                    <div className="number xl:text-[34px] text-[24px]">
                      UNPARALLELED
                    </div>
                    <p className="year border-0 py-[1rem]">Code Quality</p>
                  </div>

                  <div>
                    <div className="number xl:text-[34px] text-[24px]">
                      WELL-PLANNED
                    </div>
                    <p className="year border-0 py-[1rem]">Architecture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full pb-[6rem]">
            <div className="btn_paddinng btn_flex !mx-auto">
              <div className="formBtn_icon">
                <Link href="#section10_service">
                  <p>
                    <img src="/images/right_arrow.png" alt="arrow" />
                  </p>
                </Link>
              </div>
              <Link href="#section10_service">
                <p className="xl:!text-[21px] lg:!text-[18px]">Work with us</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-[6rem] md:pt-[6rem] pt-[4rem] workpadd_borderTop service_width end-to-end">
          <div class="flex direction-row gap-[2rem] align-middle mb-0">
            <div class="health_sec1_flex_40 order_2">
              <div class=" portfolio_title">
                <p>OUR PORTFOLIO</p>
              </div>
              <br />
              <div class="fintech-portfolio-sec">
                <p>
                  Endometriose
                  <br />
                  App Development
                </p>
              </div>

              <div>
                <p class="w-3/5 fintech-portfolio-content">
                  Endometriosis free consultation app for patients to easily
                  reach out to expert doctors in the field.
                </p>
              </div>
              <div class="sp-8 w-fit py-[2rem]">
                <div class="btn_flex">
                  <div class="arrow_icon">
                    <img
                      decoding="async"
                      loading="lazy"
                      class="alignnone"
                      src="/images/right_arrow.png"
                      alt="arrow"
                      width="10"
                      height="17"
                    />
                  </div>
                  <div class="xl:!text-[21px] lg:!text-[18px]">
                    <p class="align-left">
                      <Link href="/portfolio/">Know More</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="health_sec1_flex_60 order_1">
              <div class="about_sec1_img1">
                <img
                  decoding="async"
                  loading="lazy"
                  class="alignnone rounded-3xl"
                  src="/images/endo-app-ab-sofort-1-1500x630-1.jpg"
                  alt="Reliant"
                  width="815"
                  height="523"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SolutionEngagementModal />
      <SoutionHowCanStart />
      <SolutionContactForm />
      <HealthcareFAQs />
    </>
  );
};

export default HealthCare;
