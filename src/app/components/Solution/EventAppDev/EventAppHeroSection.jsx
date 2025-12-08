import { ArrowRight, BarChart2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const EventAppHeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/4"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Data-Driven Event Tech
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
              Event App Development Company for{" "}
              <span className="text-blue-600">High-Impact Events</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Build an event app that unifies registration, engagement, and
              analytics-engineered for conferences, trade shows, corporate
              events, and hybrid experiences.
            </p>

            <p className="text-base text-gray-500 max-w-xl">
              Brilworks helps organizers turn every touchpoint into measurable
              outcomes. Our custom apps boost attendance, increase engagement,
              and prove ROI to stakeholders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact-us/"
                className="inline-flex justify-center items-center px-6 py-3.5 border border-transparent text-base font-semibold rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Talk to our event app experts
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden">
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative flex flex-col">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 h-36 p-6 text-white pt-10 shrink-0">
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/10"></div>
                    <div className="space-x-2 flex">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xs font-bold">
                        JD
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg">TechSummit 2025</h3>
                  <div className="flex items-center gap-2 text-xs text-blue-100 mt-1">
                    <span className="bg-green-400/20 px-2 py-0.5 rounded text-green-100">
                      Live
                    </span>
                    <span>• San Francisco</span>
                  </div>
                </div>

                <div className="flex-1 bg-gray-50 p-4 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-gray-50 to-transparent z-10"></div>

                  {/* Stats Widget */}
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-gray-700">
                        My Engagement
                      </span>
                      <BarChart2 className="w-3 h-3 text-blue-500" />
                    </div>
                    <div className="flex justify-between text-center">
                      <div>
                        <p className="text-lg font-bold text-gray-900">12</p>
                        <p className="text-[10px] text-gray-400">Connections</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900">5</p>
                        <p className="text-[10px] text-gray-400">Sessions</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900">3</p>
                        <p className="text-[10px] text-gray-400">Polls</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                          Up Next • 10:00 AM
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm mt-1">
                        Scaling Event ROI
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        Main Stage • Track A
                      </p>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">
                            Visit Sponsor Booths
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            Scan badges to win prizes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating ROI Card */}
            <div className="absolute top-1/3 -right-12 lg:-right-24 bg-white p-5 rounded-xl shadow-xl border border-gray-100 transform translate-y-12 animate-bounce-slow hidden sm:block max-w-[240px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                    Sponsor ROI
                  </p>
                  <p className="text-lg font-bold text-gray-900">+245% Leads</p>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-green-500 h-1.5 rounded-full w-[75%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventAppHeroSection;
