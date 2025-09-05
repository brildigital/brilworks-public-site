import React from "react";
import { Calculator, FileText, Settings } from "lucide-react";
import Heading from "../HTMLComponents/Heading";
import ButtonV2 from "../Common/ButtonV2";

const ToolHowToUse = () => {
  return (
    <section className="container max-w-6xl mx-auto main-section-padding-bottom">
      <div className="max-w-4xl mx-auto text-center">
        <Heading
          type="h2"
          className="lg:!text-[34px] md:!text-3xl !text-2xl !font-bold mb-4"
          text="Get your software cost estimate in 3 steps!"
        />
      </div>

      <div className="mt-12 space-y-12">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 bg-opacity-10 flex items-center justify-center">
            <Calculator className="w-12 h-12 text-white" />
          </div>
          <div className="md:w-3/4 w-full">
            <h3 className="font-semibold text-lg md:text-xl lg:text-2xl mb-3">
              #1 Use this cost calculator to get instant estimates
            </h3>
            <p className="text-gray-600 text-base md:text-lg">
              Take advantage of our intelligent calculator to generate accurate
              cost estimates for your software development project in seconds.
            </p>
            <ButtonV2
              redirect="#price-estimate"
              label="Use Calculator"
              className="mt-5 hover:!text-colorWhite w-fit !px-4 !py-2 hover:!bg-blue-600 rounded-md md:!ml-0 mx-auto"
              scrollingButton
            />
          </div>
        </div>
        <hr className="!border-b border-gray-200 container max-w-6xl mx-auto" />

        {/* Step 2 */}
        <div className="w-full flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-6">
          <div className="md:w-3/4 w-full">
            <h3 className="font-semibold text-lg md:text-xl lg:text-2xl mb-3">
              #2 Configure your project requirements
            </h3>
            <p className="text-gray-600 text-base md:text-lg !mb-3">
              Select your platform, complexity level, key features, and design
              requirements. Our smart algorithm will process all variables to
              provide accurate pricing.
            </p>
          </div>
          <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 bg-opacity-10 flex items-center justify-center">
            <Settings className="w-12 h-12 text-white" />
          </div>
        </div>
        <hr className="!border-b border-gray-200 container max-w-6xl mx-auto" />
        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 bg-opacity-10 flex items-center justify-center">
            <FileText className="w-12 h-12 text-white" />
          </div>
          <div className="md:w-3/4 w-full">
            <h3 className="font-semibold text-lg md:text-xl lg:text-2xl mb-3">
              #3 Get detailed cost breakdown
            </h3>
            <p className="text-gray-600 text-base md:text-lg">
              Receive a comprehensive cost estimate with detailed breakdowns by
              development phases, timeline projections, and team structure
              recommendations for your project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolHowToUse;
