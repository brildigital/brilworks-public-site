import Image from "next/image";
import Heading from "../HTMLComponents/Heading";
import PortfolioContactForm from "../Portfolio/PortfolioContactForm";

const SolutionContactForm = ({ title, description }) => {
  return (
    <div className="hire-team-contact-section">
      <div id="section-contact-form" className="banner-layer-dark">
        <div className="container max-w-[1280px] main-section-padding mx-auto reveal">
          <div className="flex flex-col lg:flex-row items-center lg:gap-16 md:gap-10 gap-6">
            <div className="lg:w-1/2 w-full">
              <Heading
                type="h2"
                className="text-colorWhite lg:!text-[34px] md:!text-3xl !text-2xl mb-5"
                data={
                  title || "Connect With Us to Get a 48 Hours Risk-Free Trial"
                }
              />
              <p className="text-colorWhite md:text-lg text-base !mb-6">
                {description ||
                  "You're just a step away from creating exceptional business ideas. This case study reveals how Brilworks assists successful companies in extending their tech teams."}
              </p>
              <p className="text-colorWhite lg:text-2xl md:text-xl text-lg font-medium !mb-5">
                Enter the details to proceed.
              </p>
              <PortfolioContactForm
                showCompanyField={false}
                messageField={true}
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <Image
                className="rounded-2xl"
                src="/images/v2/team-contact.webp"
                alt="img-c"
                width="565"
                height="620"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionContactForm;
