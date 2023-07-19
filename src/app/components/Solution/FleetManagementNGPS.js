import Link from "next/link";
import FleetManagmentFAQs from "./FleetManagmentFAQs";
import SolutionContactForm from "./SolutionContactForm";
import SoutionHowCanStart from "./SoutionHowCanStart";
import SolutionEngagementModal from "./SolutionEngagementModal";

const FleetManagementNGPS = () => {
  return (
    <>
      <section className="portfolio mt-[6rem]">
        <div className="mx-auto service_width">
          <div className="relative">
            <p>
              <img
                className="h-[46vh] rounded-[20px]"
                src="/images/Banner-with-radius.png"
                alt="our process"
              />
            </p>
            <div className="service_sec1_position">
              <div className="flex self-end justify-between w-[96%] mx-auto">
                <div className="txt">
                  <div className="how-we flex items-center gap-[1rem]">
                    <p className="uppercase xl:text-[70px] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]">
                      FLEET MANAGEMENT
                    </p>
                  </div>
                  <div className="how-we flex items-center gap-[1rem]">
                    <p className="uppercase xl:text-[70px] lg:text-[66px] md:text-[50px] sm:text-[55px] text-[30px]">
                      SOFTWARE DEVELOPMENT
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
                  SCALE YOUR BUSINESS WITH FLEET MANAGEMENT SOFTWARE DEVELOPMENT
                  SERVICES.
                </p>
              </div>
            </div>
            <div className="basis-[55%]">
              <div className="home_sec2_txt4">
                <p className="!text-left pb-8">
                  Improve your fleet’s productivity, visibility, and knowledge
                  with the help of our custom fleet management app software
                  development services
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
                INCREASE YOUR FLEET’S EFFICIENCY WITH OUR
                <br />
                FLEET MANAGEMENT SOFTWARE SOLUTIONS
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
                              Fleet Telematics Solutions
                            </div>

                            <div className="number_icon_img">
                              <img
                                src="/images/Fleet-Telematics-Solutions-1.png"
                                alt="Fleet Telematics Solutions"
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
                            Our extensive fleet telematics solution is designed
                            for large vehicle fleets and uses real-time sensor
                            data, video analytics, and in-car computers to help
                            you optimize the driving efficiency of your
                            vehicles.
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
                              GPS Fleet Tracking
                            </div>

                            <div className="number_icon_img">
                              <img
                                src="/images/GPS-Fleet-Tracking.png"
                                alt="GPS Fleet Tracking"
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
                            We’re smarter than most fleet managers. Our software
                            developers have extensive experience in
                            fleet-tracking solutions. Through a combination of
                            real-time GPS tracking, route optimization, and
                            manual regrouping, our proprietary software allows
                            you to easily monitor your fleet anywhere, while on
                            the move.
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
                              Fuel Consumption Control Apps
                            </div>

                            <div className="number_icon_img">
                              <img
                                src="/images/Fuel-Consumption-Control-Apps.png"
                                alt="Fuel Consumption Control Apps"
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
                            Our fuel consumption control apps can collect and
                            analyze data from your fleet to help you optimize
                            fuel efficiency. Integrations with telematics and
                            vehicle tracking systems let organizations ensure
                            compliance with corporate policies, knowing that the
                            whole supply chain has been accounted for.
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
                              Fleet Management Integration
                            </div>

                            <div className="number_icon_img">
                              <img
                                src="/images/Fleet-Management-Integration.png"
                                alt="Fleet Management Integration"
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
                            Easily generate reports on mileage to prevent the
                            occurrence of vehicle downtime due to lack of
                            maintenance. CFMS also allows you to record daily
                            expenses, track accurate vehicle utilization
                            history, and promote ride-sharing incentives
                            available in various cities across the country.
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
                              Driver Management & Safety
                            </div>

                            <div className="number_icon_img">
                              <img
                                src="/images/Driver-Management-Safety.png"
                                alt="Driver Management Safety"
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
                            With its in-vehicle monitoring and reporting system,
                            you can monitor driving behavior, boost safety and
                            efficiency by reducing tailgating, assist drivers to
                            reduce fatigue, and minimize idle-time.
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
                              Fleet Maintenance & Predictions
                            </div>

                            <div className="number_icon_img">
                              <img
                                src="/images/Fleet-Maintenance-Predictions.png"
                                alt="Fleet Maintenance Predictions"
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
                            Aggregate, monitor, and analyze data to trigger
                            timely maintenance reminders, optimize service
                            visits and simplify scheduling routine repairs.
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
                          src="/images/Fleet-Telematics-Solutions.jpg"
                          alt="Fleet Telematics Solutions"
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
                          src="/images/Delivery-Management-Software.jpg"
                          alt="Delivery Management Software"
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
                          src="/images/Fuel-Consumption-Control-Apps.jpg"
                          alt="Fuel Consumption Control Apps"
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
                          src="/images/Fleet-Management-Integration.jpg"
                          alt="Fleet Management Integration"
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
                          src="/images/Driver-Management-Safety.jpg"
                          alt="Driver Management Safety"
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
                          src="/images/Fleet-Maintenance-Predictions.jpg"
                          alt="Fleet Maintenance Predictions"
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
                        Build My Fleet Management Software
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
                OTHER CUSTOM FLEET MANAGEMENT SOFTWARE
                <br />
                DEVELOPMENT SERVICES WE OFFER
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
                          src="/images/Traffic-Management-Software.jpg"
                          alt="Traffic-Management-Software"
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
                          src="/images/GPS-Fleet-Tracking.jpg"
                          alt="GPS-Fleet-Tracking"
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
                          src="/images/Transportation-Software.jpg"
                          alt="Transportation-Software"
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
                          src="/images/Supply-Chain-Management-Software.jpg"
                          alt="Supply-Chain-Management-Software"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-6/12 w-full mb-[10px] ">
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
                              Traffic Management Software
                            </div>

                            <div className="number_icon_img">
                              <img
                                src="/images/Traffic-Management-Software.png"
                                alt="Traffic-Management-Software"
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
                            Never be caught out by unexpected road conditions.
                            Our traffic management software lets your team stay
                            informed and updated by providing real-time
                            visibility, insight, and control.
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
                              Delivery Management Software
                            </div>

                            <div className="number_icon_img">
                              <img
                                src="/images/Delivery-Management-Software.png"
                                alt="Delivery-Management-Software"
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
                            Our online POS system makes managing consignment
                            paperwork, sending real-time notifications, and
                            creating delivery records easy!
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
                              Transportation Software
                            </div>

                            <div className="number_icon_img">
                              <img
                                src="/images/Transportation-Software.png"
                                alt="Transportation-Software"
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
                            Let our software will deliver information about the
                            fastest, cheapest, and most convenient ways for you
                            to transport goods. We bring you the greatest value
                            in pricing and cost savings every time you move
                            goods.
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
                              Supply Chain Management Software
                            </div>

                            <div className="number_icon_img">
                              <img
                                src="/images/Supply-Chain-Management-Software.png"
                                alt="Supply-Chain-Management-Software"
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
                            Our supply chain tracking services make it easy to
                            track, manage and maintain the movement of all your
                            inventory, making sure that you’re aware of its
                            location at all times.
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

          <div className="mx-auto md:pt-[6rem] pt-[4rem] workpadd_borderTop end-to-end">
            <div className="end-To-end">
              <div className="endTO_text home_sec2_txt3">
                <p className="!w-full p-0">
                  THE BENEFITS OF HAVING FLEET
                  <br />
                  MANAGEMENT SOFTWARE
                </p>
              </div>
            </div>

            <div className="my-[40px]">
              <img
                src="/images/image-3-1.png"
                alt="MEDIA &amp; ENTERTAINMENT APPS"
              />
            </div>

            <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-[4rem]">
              <div className="text-center">
                <img
                  src="/images/Streamlines-Business-Processes.png"
                  alt="Streamlines-Business-Processes"
                  className="w-[32%] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Streamlines Business Processes
                </p>
              </div>

              <div className="text-center">
                <img
                  src="/images/Generates-Valuable-Insights.png"
                  alt="Generates-Valuable-Insights"
                  className="w-[32%] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Generates Valuable Insights
                </p>
              </div>

              <div className="text-center">
                <img
                  src="/images/Lowers-Operational-Costs.png"
                  alt="Lowers Operational Costs"
                  className="w-[32%] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Lowers Operational Costs
                </p>
              </div>

              <div className="text-center">
                <img
                  src="/images/Improves-Fleet-Efficiency.png"
                  alt="Imporoves Fleet Efficiency"
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Imporoves Fleet Efficiency
                </p>
              </div>

              <div className="text-center">
                <img
                  src="/images/Extends-Vehicle-Lifeline.png"
                  alt="Extends Vehicle Lifeline"
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Extends Vehicle Lifeline
                </p>
              </div>

              <div className="text-center">
                <img
                  src="/images/Maximizes-Driver-Safety.png"
                  alt="Maximizes Driver Safety"
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Maximizes Driver Safety
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto md:pt-[6rem] py-[4rem] end-to-end">
            <div className="end-To-end">
              <div className="endTO_text home_sec2_txt3">
                <p className="!w-full p-0">
                  COUNT ON US TO BUILD A FEATURE-RICH
                  <br />
                  FLEET TRACKING SYSTEM
                </p>
              </div>
            </div>

            <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-[4rem]">
              <div className="text-center">
                <img
                  src="/images/Real-time-GPS-vehicle-tracking.png"
                  alt="Real-time GPS vehicle tracking"
                  className="w-[32%] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Real-time GPS vehicle tracking
                </p>
              </div>

              <div className="text-center">
                <img
                  src="/images/Route-History-Optimization.png"
                  alt="Route History & Optimization"
                  className="w-[32%] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Route History &<br /> Optimization
                </p>
              </div>

              <div className="text-center">
                <img
                  src="/images/Accident-Detection-Management.png"
                  alt="Lowers Operational Costs"
                  className="w-[32%] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Accident <br />
                  Detection & <br />
                  Management
                </p>
              </div>

              <div className="text-center">
                <img
                  src="/images/Automated-Alerts.png"
                  alt=" Automated Alerts"
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Automated Alerts
                </p>
              </div>

              <div className="text-center">
                <img
                  src="/images/Historical-Fleet-Data.png"
                  alt="Historical Fleet Data"
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Historical Fleet Data
                </p>
              </div>

              <div className="text-center">
                <img
                  src="/images/Engine-Diagnostics.png"
                  alt="Maximizes Driver Safety"
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Engine Diagnostics
                </p>
              </div>

              <div className="text-center">
                <img
                  src="/images/Offline-Tracking.png"
                  alt="Offline Tracking"
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Offline Tracking
                </p>
              </div>

              <div className="text-center">
                <img
                  src="/images/Trend-Analysis.png"
                  alt="Trend Analysis"
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Trend Analysis
                </p>
              </div>
              <div className="text-center">
                <img
                  src="/images/Cloud-Based.png"
                  alt="Cloud Based                  "
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Cloud Based
                </p>
              </div>
              <div className="text-center">
                <img
                  src="/images/API-Integration.png"
                  alt="API Integration"
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  API Integration
                </p>
              </div>
              <div className="text-center">
                <img
                  src="/images/Analytics-Reporting.png"
                  alt="Analytics & Reporting"
                  className="w-[50px] mx-auto"
                />
                <p className="mt-[20px] lg:text-[20px] text-[14px]">
                  Analytics & Reporting
                </p>
              </div>
            </div>
          </div>

          <div className="lg:pt-[6rem] md:pt-[6rem] pt-[4rem]">
            <div className="sec9_service_style xl:px-[12rem] sm:px-[4rem] px-[1rem]">
              <div>
                <div className="end-To-end pt-8">
                  <div className="endTO_text home_sec2_txt3 mt-[4rem] mb-0">
                    <p className="!w-full pb-0">
                      WHY CHOOSE US FOR FLEET <br />
                      MANAGEMENT SOFTWARE <br />
                      DEVELOPMENT?
                    </p>
                  </div>
                </div>

                <p className="p-font text-center my-[2rem]">
                  We know it can be frustrating to keep track of all your
                  vehicles on the road, but with our fleet management software
                  and GPS tracking system, we make it easier than ever to keep
                  track of all your moves.
                </p>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-[3.5rem] gap-[2rem]">
                  <div>
                    <div className="number xl:text-[34px] text-[24px]">
                      ROUND
                    </div>
                    <p className="year border-0 py-[1rem]">
                      The-Clock
                      <br />
                      Availability
                    </p>
                  </div>

                  <div>
                    <div className="number xl:text-[34px] text-[24px]">
                      AGILE
                    </div>
                    <p className="year border-0 py-[1rem]">
                      Development
                      <br />
                      Team
                    </p>
                  </div>

                  <div>
                    <div className="number xl:text-[34px] text-[24px]">
                      EXPERT
                    </div>
                    <p className="year border-0 py-[1rem]">Knowledge</p>
                  </div>

                  <div>
                    <div className="number xl:text-[34px] text-[24px]">
                      USER
                    </div>
                    <p className="year border-0 py-[1rem]">
                      Oriented <br />
                      Solutions
                    </p>
                  </div>

                  <div>
                    <div className="number xl:text-[34px] text-[24px]">
                      ON TIME
                    </div>
                    <p className="year border-0 py-[1rem]">Delivery</p>
                  </div>

                  <div>
                    <div className="number xl:text-[34px] text-[24px]">
                      SECURITY
                    </div>
                    <p className="year border-0 py-[1rem]">
                      First <br />
                      Approarch
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full pt-[4rem]">
              <div className="btn_paddinng btn_flex !mx-auto">
                <div className="formBtn_icon">
                  <Link href="#section10_service">
                    <p>
                      <img src="/images/right_arrow.png" alt="call" />
                    </p>
                  </Link>
                </div>
                <Link href="#section10_service">
                  <p className="xl:!text-[21px] lg:!text-[18px]">
                    Work with us
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SolutionEngagementModal />
      <SoutionHowCanStart />
      <SolutionContactForm />
      <FleetManagmentFAQs />
    </>
  );
};

export default FleetManagementNGPS;
