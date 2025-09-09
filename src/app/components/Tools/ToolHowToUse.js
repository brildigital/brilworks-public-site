import React from "react";
import { ArrowRight, DollarSign, FileText, Settings } from "lucide-react";
import Heading from "../HTMLComponents/Heading";

const ToolHowToUse = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <section className="container max-w-6xl mx-auto main-section-padding-bottom">
        <div className="max-w-4xl mx-auto text-center">
          <Heading
            type="h2"
            className="lg:!text-[34px] md:!text-3xl !text-2xl !font-bold mb-4"
            text="Get your software cost estimate in 3 steps!"
          />
        </div>

        {/* <div className="mt-12 space-y-12">
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
      </div> */}
        <div>
          <div className="text-center mb-8 md:mb-10 lg:mb-16">
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              Our intelligent calculator provides instant, accurate estimates
              based on your specific requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative group h-full">
              <div
                className="bg-white rounded-2xl shadow-lg py-8 px-5 text-center hover:shadow-xl 
                    transition-all duration-300 transform hover:-translate-y-2 
                    flex flex-col h-full"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-8 h-8 rounded-full 
                        flex items-center justify-center font-bold text-sm"
                  >
                    1
                  </div>
                </div>

                <div
                  className="bg-gradient-to-r from-purple-100 to-blue-100 w-16 h-16 rounded-full 
                      flex items-center justify-center mx-auto mb-6 
                      group-hover:scale-110 transition-transform duration-300"
                >
                  <Settings className="w-8 h-8 text-purple-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Choose Your Platform & Features
                </h3>
                <p className="text-gray-600 leading-relaxed flex-1">
                  Select your target platform, project complexity, and desired
                  features from our comprehensive list
                </p>
              </div>

              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-6 h-6 text-purple-400" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group h-full">
              <div
                className="bg-white rounded-2xl shadow-lg py-8 px-5 text-center hover:shadow-xl 
                    transition-all duration-300 transform hover:-translate-y-2 
                    flex flex-col h-full"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-8 h-8 rounded-full 
                        flex items-center justify-center font-bold text-sm"
                  >
                    2
                  </div>
                </div>

                <div
                  className="bg-gradient-to-r from-purple-100 to-blue-100 w-16 h-16 rounded-full 
                      flex items-center justify-center mx-auto mb-6 
                      group-hover:scale-110 transition-transform duration-300"
                >
                  <FileText className="w-8 h-8 text-purple-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Specify Design & Timeline
                </h3>
                <p className="text-gray-600 leading-relaxed flex-1">
                  Define your design requirements and project timeline to get
                  the most accurate estimate
                </p>
              </div>

              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-6 h-6 text-purple-400" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group h-full">
              <div
                className="bg-white rounded-2xl shadow-lg py-8 px-5 text-center hover:shadow-xl 
                    transition-all duration-300 transform hover:-translate-y-2 
                    flex flex-col h-full"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-8 h-8 rounded-full 
                        flex items-center justify-center font-bold text-sm"
                  >
                    3
                  </div>
                </div>

                <div
                  className="bg-gradient-to-r from-purple-100 to-blue-100 w-16 h-16 rounded-full 
                      flex items-center justify-center mx-auto mb-6 
                      group-hover:scale-110 transition-transform duration-300"
                >
                  <DollarSign className="w-8 h-8 text-purple-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Get Instant Cost Estimate
                </h3>
                <p className="text-gray-600 leading-relaxed flex-1">
                  Receive a detailed breakdown of your project costs with
                  transparent pricing information
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToolHowToUse;
