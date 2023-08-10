import React from "react";

const FleetManagmentFAQs = () => {
  return (
    <div className="sec3_width_home faq-bottom mb-[5rem]">
      <div className="service_sec3 md:text-center text-left">
        <p className="uppercase xl:text-[48px] lg:text-[34px] md:text-[32px] text-[22px]">
          FAQs
        </p>
      </div>

      <div>
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
                What is fleet management software?
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
                  The fleet management software is a dynamic platform for
                  managing your fleet and its components, including cars,
                  trucks, and vans. It can track vehicle movement, fuel
                  consumption, and maintenance schedules. The software also
                  provides real-time monitoring of drivers and their
                  performance.
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
                Do you provide custom fleet management software development
                services?
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
                  Yes, we do provide custom development services for fleet
                  management software solutions. We create solutions tailored to
                  the requirements of your organization.
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
                What are some of the main features a fleet management system
                must have?
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
                  Fleet management is the backbone of most companies. Fleet
                  management systems should have robust reporting, customizable
                  dashboards, and analytics to generate actionable insights, GPS
                  vehicle tracking fleet maintenance, and dispatch & scheduling
                  features.
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
                Why is fleet management a necessity?
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
                  Fleet management helps to keep vehicles organized, in good
                  working order, and running as efficiently as possible.
                  Tracking the location of all vehicles in your fleet can help
                  decrease costly breakdowns and increase fuel efficiency.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetManagmentFAQs;
