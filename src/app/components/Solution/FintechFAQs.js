
const FintechFAQs = () => {
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
                className="accordion-button collapsed xl:text-[32px] md:text-[26px] text-[16px]"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                What is FinTech?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExampleother"
            >
              <div className="accordion-body">
                <div className="w-11/12">
                  Fintech is short for financial technology. It is a term used
                  to describe the application, design, and development of new
                  financial technology products. Fintech helps not just in terms
                  of business applications but also includes software for
                  accounting, payments, payroll, and asset management.
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
                What does a fintech software developer do?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExampleother"
            >
              <div className="accordion-body">
                <div className="w-11/12">
                  Fintech software developers are the individuals responsible
                  for designing, building, and deploying fintech solutions using
                  various technology stacks. Our expert fintech software
                  developers can help you build cutting-edge fintech solutions
                  with the latest technologies, resources, and strategies to
                  develop software that adapts to change.
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
                How long will it take for you to develop my Fintech Software?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExampleother"
            >
              <div className="accordion-body">
                <div className="w-11/12">
                  The time taken depends on the complexity of the project. Our
                  skilled team of developers will first create a comprehensive
                  roadmap for your app and tailor it towards your goals and
                  objectives.
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
                What are the main advantages of building a fintech software
                solution?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px]"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExampleother"
            >
              <div className="accordion-body">
                <div className="w-11/12">
                  Fintech solutions provide the ability to make multi-banking
                  transactions and enhanced functionalities of banking apps. By
                  building such a system, you can automate business tasks and
                  processes and enable secure transactions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FintechFAQs;
