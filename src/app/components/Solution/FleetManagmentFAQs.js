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
            data-bs-target="#accordion-fleet-one"
            type="button"
            role="tab"
            aria-controls="accordion-fleet-one"
            aria-selected="true"
          >
            <h2 className="accordion-header" id="headingfleet-One">
              <button
                className="accordion-button xl:text-[32px] md:text-[26px] text-[16px]"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefleet-One"
                aria-expanded="false"
                aria-controls="collapsefleet-One"
              >
                What is fleet management software?
              </button>
            </h2>
            <div
              id="collapsefleet-One"
              className="accordion-collapse collapse show xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
              aria-labelledby="headingfleet-One"
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
            data-bs-target="#accordion-fleet-two"
            type="button"
            role="tab"
            aria-controls="accordion-fleet-two"
            aria-selected="false"
          >
            <h2 className="accordion-header" id="headingfleet-Two">
              <button
                className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefleet-Two"
                aria-expanded="false"
                aria-controls="collapsefleet-Two"
              >
                Do you provide custom fleet management software development
                services?
              </button>
            </h2>
            <div
              id="collapsefleet-Two"
              className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
              aria-labelledby="headingfleet-Two"
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
            data-bs-target="#accordion-fleet-three"
            type="button"
            role="tab"
            aria-controls="accordion-fleet-three"
            aria-selected="false"
          >
            <h2 className="accordion-header" id="headingfleet-Three">
              <button
                className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefleet-Three"
                aria-expanded="false"
                aria-controls="collapsefleet-Three"
              >
                What are some of the main features a fleet management system
                must have?
              </button>
            </h2>
            <div
              id="collapsefleet-Three"
              className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
              aria-labelledby="headingfleet-Three"
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
            data-bs-target="#accordion-fleet-four"
            type="button"
            role="tab"
            aria-controls="accordion-fleet-four"
            aria-selected="false"
          >
            <h2 className="accordion-header" id="headingfleet-Four">
              <button
                className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefleet-Four"
                aria-expanded="false"
                aria-controls="collapsefleet-Four"
              >
                Why is fleet management a necessity?
              </button>
            </h2>
            <div
              id="collapsefleet-Four"
              className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
              aria-labelledby="headingfleet-Four"
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
